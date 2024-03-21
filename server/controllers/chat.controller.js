import Chat from "../models/Chat.model.js";
import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

// function to find a chat
export const getChat = async (req, res, next) => {
  try {
    const { userId } = req.body;
    let isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user.id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("lastMessage");

    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "firstName lastName userName email profilePicture",
    });

    if (isChat.length > 0) {
      res.status(200).json(isChat[0]);
    } else {
      let chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user.id, userId],
      };
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(fullChat);
    }
  } catch (error) {
    next(error);
  }
};

export const fetchChats = async (req, res, next) => {
  try {
    let chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user.id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    chats = await User.populate(chats, {
      path: "lastMessage.sender",
      select: "firstName lastName userName email profilePicture",
    });
    res.status(299).json(chats);
  } catch (error) {
    next(error);
  }
};

// create group chat
export const createGroupChat = async (req, res, next) => {
  try {
    if (!req.body.users || !req.body.name)
      return next(errorHandler(400, "please fill out all the fields"));
    let users = JSON.parse(req.body.users);
    if (users.length < 2)
      return next(
        errorHandler(
          400,
          "At least two users are required to create a group chat"
        )
      );
    users.push(req.user.id); // check if only id is required to get id from this
    // create group chat
    const newGroupChat = await Chat.create({
      chatName: req.body.name,
      isGroupChat: true,
      users,
      groupAdmin: req.user.id,
    });
    const fullGroupChat = await Chat.findOne({ _id: newGroupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupChat);
  } catch (error) {
    next(error);
  }
};

// function to rename chat
export const renameChat = async (req, res, next) => {
  try {
    const { chatId, chatName } = req.body;
    const chatToUpdate = await Chat.findByIdAndUpdate(
      chatId,
      { chatName },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(chatToUpdate);
  } catch (error) {
    next(error);
  }
};

// function to add user to group chat
export const addToGroup = async (req, res, next) => {
  try {
    const { chatId, userId } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: { users: userId },
      },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(updatedChat);
  } catch (error) {
    next(error);
  }
};

// function to remove user from group chat
export const removeFromGroup = async (req, res, next) => {
  try {
    const { chatId, userId } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $pull: { users: userId },
      },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(updatedChat);
  } catch (error) {
    next(error);
  }
};

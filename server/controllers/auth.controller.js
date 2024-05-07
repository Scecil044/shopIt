import { errorHandler } from "../utils/error.js";
import User from "../models/User.model.js";
import { generateToken } from "../utils/token.js";
import Business from "../models/Business.model.js";
import bcrypt from "bcryptjs";
import { verifyByCredentials } from "../services/user.service.js";
import { generateResetPasswordToken } from "../services/token.service.js";
import { notifyAdmins, sendResetEmail } from "../services/email.service.js";

// function to register new user
export const registerUser = async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      gender,
      role,
      city,
      landMark,
    } = req.body;

    // check if user exists
    const isUser = await User.findOne({ email });
    if (isUser) return next(errorHandler(400, "Email taken!"));

    // create user
    const newUser = await User.create({
      firstName,
      lastName,
      userName: firstName + Math.floor(100 + Math.random() * 900).toString(),
      email,
      password,
      address,
      phone,
      gender,
      role,
      city,
      landMark,
    });

    // Create business
    if (role === "trader") {
      const business = await Business.create({
        userRef: newUser._id,
        businessName: req.body.businessName,
        address: req.body.address,
        city: req.body.city,
        logo: req.body.companyLogo,
      });
      newUser.businessRef = business._id;
      await newUser.save();
    }

    const user = await User.findById(newUser._id).select("-password").populate({
      path: "businessRef",
      select: "businessName address city",
    });
    await notifyAdmins();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// function to login user
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return next(errorHandler(400, "Please provide all required fields"));
    //check if user exists
    const isUser = await verifyByCredentials(email, password);
    const returnedUser = await User.findById(isUser._id)
      .select(
        "firstName lastName email userName address role gender profilePicture"
      )
      .populate("businessRef");
    res
      .cookie("access_token", generateToken(isUser._id, isUser.role), {
        httpOnly: true,
      })
      .status(200)
      .json(returnedUser);
  } catch (error) {
    next(error);
  }
};

// function to logout user
export const logoutUser = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("You have been logged out!");
  } catch (error) {
    next(error);
  }
};

// function to authenticate with google
export const googleAuth = async (req, res, next) => {
  try {
    const { email, profilePicture, name } = req.body;
    const firstName = name.charAt(0);
    const lastName = name.slice(1);
    // check if user exists
    const isUser = await User.findOne({ email });
    if (!isUser) {
      // generate password
      const randomPassword = Math.floor(100 + Math.random(900)).toString();
      const randomPhone =
        "+254" + Math.floor(Math.random() * 1000000000).toString();
      // create user
      const user = await User.create({
        firstName,
        lastName,
        email,
        profilePicture,
        password: randomPassword,
        phone: randomPhone,
        gender: "undefined",
      });
      const newUser = await User.findById(user._id)
        .select("-password")
        .populate({
          path: "businessRef",
          select: "businessName address city",
        });
      res
        .cookie(
          "access_token",
          generateToken(newUser._id, newUser.role, { httpOnly: true })
        )
        .status(200)
        .json(newUser);
    } else {
      const existingUser = await User.findById(isUser._id)
        .select("-password")
        .populate({
          path: "businessRef",
          select: "businessName address city",
        });
      res
        .cookie(
          "access_token",
          generateToken(existingUser._id, existingUser.role, { httpOnly: true })
        )
        .status(200)
        .json(existingUser);
    }
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const resetToken = generateResetPasswordToken(req.user.email);
    await sendResetEmail(req.user.email, resetToken);
  } catch (error) {
    next(error);
  }
};

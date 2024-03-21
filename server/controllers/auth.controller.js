import { errorHandler } from "../utils/error.js";
import User from "../models/User.model.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcryptjs";

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
      isAdmin,
    } = req.body;

    // check if user exists
    const isUser = await User.findOne({ email });
    if (isUser) return next(errorHandler(400, "Email taken!"));
    // create user
    const newUser = await User.create({
      firstName,
      lastName,
      lastName: firstName + Math.floor(100 + Math.random() * 900).toString(),
      email,
      password,
      address,
      phone,
      gender,
    });

    res.status(200).json(newUser);
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
    const isUser = await User.findOne({ email });
    if (!isUser) return next(errorHandler(400, "Invalid credentials!"));
    if (!bcrypt.compareSync(password, isUser.password))
      return next(errorHandler(400, "Invalid credentials"));
    const returnedUser = await User.findById(isUser._id).select(
      "firstName lastName email userName address isAdmin gender"
    );
    res
      .cookie("access_token", generateToken(isUser._id, isUser.isAdmin), {
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

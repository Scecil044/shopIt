import { errorHandler } from "../utils/error.js";
import User from "../models/User.model.js";
import { generateToken } from "../utils/token.js";
import Business from "../models/Business.model.js";
import bcrypt from "bcryptjs";
import {
  activateUserAccount,
  findUserByEmail,
  verifyByCredentials,
} from "../services/user.service.js";
import { generateResetPasswordToken } from "../services/token.service.js";
import {
  notifyAdmins,
  notifyUser,
  sendResetEmail,
  sendUserVerificationEmail,
} from "../services/email.service.js";
import { createOtp, getOtp } from "../services/otp.service.js";

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
    if (!email || !password || !lastName || !phone || !address)
      return next(errorHandler(400, "Please provide all the required fields!"));

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
    await notifyUser(user);
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

export const sendVerificationEmail = async (req, res, next) => {
  try {
    const email = req.body.email.toLowerCase();
    const user = await findUserByEmail({ email, isDeleted: false });
    if (!user) {
      const otp = await createOtp(email);
      await sendUserVerificationEmail(email, otp);
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// verify user OTP
export const verifyOtp = async (req, res, next) => {
  try {
    const { otp } = req.body;
    const email = req.body.email.toLowerCase();
    const result = await getOtp({ email, otp, status: "enabled" });
    if (!result) return next(errorHandler(403, "wrong OTP link!"));

    // find user
    const user = await findUserByEmail(email);
    if (!user) return next(errorHandler(400, "INVALID EMAIL"));
    await activateUserAccount(user.email);
    res
      .cookie("accesS_token", generateToken(user._id, user.role), {
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};

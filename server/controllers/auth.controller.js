import { errorHandler } from "../utils/error.js";
import User from "../models/User.model.js";
import { generateToken } from "../utils/token.js";
import Business from "../models/Business.model.js";
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
      role,
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
    const isUser = await User.findOne({ email });
    if (!isUser) return next(errorHandler(400, "Invalid credentials!"));
    if (!bcrypt.compareSync(password, isUser.password))
      return next(errorHandler(400, "Invalid credentials"));
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

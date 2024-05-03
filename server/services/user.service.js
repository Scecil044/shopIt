import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

// function to verify user by credentials
export const verifyByCredentials = async (email, password) => {
  try {
    const isUser = await User.findOne({ email }, { password: 0 });
    if (!isUser) return next(errorHandler(404, "User not found or invalid credentials!"));

    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return next(errorHandler(404, "Invalid Credentials!"));
    return isUser;
  } catch (error) {
    next(error);
  }
};

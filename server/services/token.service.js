import User from "../models/User.model.js";
import { passwordToken } from "../utils/token.js";

export const generateResetPasswordToken = async (email) => {
  try {
    // find user
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Could not find user");
    }
    const token = passwordToken(email, user._id);
    if (!token) {
      throw new Error("Could not generate token");
    }
  } catch (error) {
    throw new Error(error);
  }
};

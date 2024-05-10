import User from "../models/User.model.js";
import { sendEmail } from "../services/email.service.js";
import { errorHandler } from "../utils/error.js";

// function to send email to admins
export const notifyAdmins = async (req, res, next) => {
  try {
    const systemAdministrators = await User.find({ isAdmin: true });
    const adminPhones = systemAdministrators.map((admin) => admin.phoneNumber);

    await sendEmail(adminPhones);
  } catch (error) {
    next(error);
  }
};

export const notifyUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

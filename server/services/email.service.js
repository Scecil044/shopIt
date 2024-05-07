import { errorHandler } from "../utils/error.JS";
import nodemailer from "nodemailer";

const config = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};
const transporter = nodemailer.createTestAccount(config);
export const sendEmail = async (email) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Password reset",
      text: "",
      html: "",
    });
  } catch (error) {
    next(error);
  }
};

export const sendResetEmail = async (email, resetToken) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Password reset",
      text: "",
      html: `<p>${resetToken}</p>`,
    });
  } catch (error) {
    next(error);
  }
};

export const notifyAdmins = async () => {
  try {
    const admins = await User.find({ role: "admin" });
    if (admins.length === 0) {
      throw new Error("No administrators could be found in DB");
      return;
    }
    const adminEmails = admins.map((admin) => admin.email);
    const info = await nodemailer.sendMail({
      from: process.env.SMTP_EMAIL,
      to: adminEmails.join(","),
      subject: "New User Created",
      text: "A new user has been registered",
      html: `<p>Please check and take further actions as needed</p>`,
    });
    console.log("mail sent to administrators");
  } catch (error) {
    throw new Error(error);
  }
};

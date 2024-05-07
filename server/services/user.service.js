import { errorMonitor } from "nodemailer/lib/xoauth2/index.js";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

// function to verify user by credentials
export const verifyByCredentials = async (email, password) => {
  try {
    const isUser = await User.findOne({ email }, { password: 0 });
    if (!isUser)
      return next(errorHandler(404, "User not found or invalid credentials!"));

    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return next(errorHandler(404, "Invalid Credentials!"));
    return isUser;
  } catch (error) {
    next(error);
  }
};

export const genericUserFilter = async (reqBody, reqQuery) => {
  try {
    // lookup user from users and business tables
    const pipeline = [
      {
        $match: {
          isDeleted: false,
        },
      },
      {
        $lookup: {
          from: "business",
          localField: "businessRef",
          foreignField: "_id",
          as: "businessDetails",
        },
      },
      {
        $unwind: "$businessDetails",
      },
      {
        $project: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          phone: 1,
          businessName: "$businessDetails.businessName",
        },
      },
    ];

    if (reqQuery.search) {
      const searchRegex = new RegExp(reqQuery.search, "i");
      pipeline.push({
        $match: {
          $or: [
            { firstName: searchRegex },
            { lastName: searchRegex },
            { email: searchRegex },
          ],
        },
      });
    }
    const users = await User.aggregate(pipeline);
    if (!users)
      return next(
        errorMonitor(404, "could not find user with matching details")
      );
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

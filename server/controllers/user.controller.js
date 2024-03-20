import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const getUsers = async (req, res, next) => {
  try {
    res.send("hello there");
  } catch (error) {
    next(error);
  }
};

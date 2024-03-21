import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const getUsers = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm
      ? {
          $or: [
            { firstName: { $regex: req.query.searchTerm, $options: "i" } },
            { lastName: { $regex: req.query.searchTerm, $options: "i" } },
            { email: { $regex: req.query.searchTerm, $options: "i" } },
            { userName: { $regex: req.query.searchTerm, $options: "i" } },
          ],
        }
      : {};
    // find user but exclude logged in user
    const users = await User.find(searchTerm)
      .find({
        _id: { $ne: req.user.id },
      })
      .select("firstName lastName userName email isAdmin");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

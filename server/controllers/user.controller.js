import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const getUsers = async (req, res, next) => {
  try {
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const startIndex = req.query.startIndex || 0;
    const limit = req.query.limit || 10;
    const searchTerm = req.query.searchTerm
      ? {
          $or: [
            { firstName: { $regex: req.query.searchTerm, $options: "i" } },
            { lastName: { $regex: req.query.searchTerm, $options: "i" } },
            { email: { $regex: req.query.searchTerm, $options: "i" } },
            { userName: { $regex: req.query.searchTerm, $options: "i" } },
            { role: { $regex: req.query.searchTerm, $options: "i" } },
          ],
        }
      : {};
    // find user but exclude logged in user
    const users = await User.find(searchTerm)
      .find({
        _id: { $ne: req.user.id },
      })
      .select(
        "firstName lastName email role phone profilePicture gender address createdAt"
      )
      .skip(startIndex)
      .limit(limit)
      .sort({ createdAt: sortDirection });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .populate("businessRef");
    if (!user)
      return next(errorHandler(400, "No user wit matching id was found"));

    res.status(200).json(user);
  } catch (error) {
    next(error?.message);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    if (req.params.id !== req.user.id && req.user.role !== "admin")
      return next(
        errorHandler(403, "You do not have permission to update this record")
      );
    const user = await User.findById(req.params.id);
    if (!user)
      next(
        errorHandler(
          400,
          `No user with matching id :${req.params.id} was found`
        )
      );
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          role: req.body.role,
          city: req.body.city,
          country: req.body.country,
          landMark: req.body.landMark,
        },
      },
      { new: true }
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(errorHandler(404, "User not found"));

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};

import { errorHandler } from "../utils/error.js";
import Role from "../models/Role.js";

export const createRole = async (req, res, next) => {
  try {
    const { roleName, roleId } = req.body;
    if (!roleName || !roleId)
      return next(errorHandler(400, "please provide the roleName and Id"));
    const newRole = await Role.create({
      roleName,
      roleId,
    });
    res.status(200).json(newRole);
  } catch (error) {
    next(error);
  }
};

export const getRoles = async (req, res, next) => {
  try {
    const roles = await Role.find();
    if (roles.length > 1) return next(errorHandler(400, "no roles were found"));

    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};

export const getRole = async (req, res, next) => {
  try {
    const isRole = await Role.findById(req.params.id);
    if (!isRole) return next(errorHandler(404, "Role not found!"));

    res.status(200).json(isRole);
  } catch (error) {
    next(error);
  }
};

export const updateRole = async (req, res, next) => {
  try {
    const isRole = await Role.findById(req.params.id);
    if (!isRole) return next(errorHandler(404, "Role not found!"));
    const updates = Object.keys(req.body);
    updates.forEach((update) => {
      isRole[update] = req.body[update];
    });
    await isRole.save();
    res.status(200).json(isRole);
  } catch (error) {
    next(error);
  }
};

export const deleteRole = async (req, res, next) => {
  try {
    const isRole = await Role.findById(req.params.id);
    if (!isRole) return next(errorHandler(404, "Role not found!"));
    const userRole = req.user.role;
    if (req.user.role !== "admin") {
      return next(
        errorHandler(403, "you do not have rights to perform this action")
      );
    }
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json("role deleted");
  } catch (error) {
    next(error);
  }
};

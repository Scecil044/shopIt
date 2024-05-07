import Business from "../models/Business.model.js";
import { errorHandler } from "../utils/error";

export const updateBusiness = async (req, res, next) => {
  try {
    const updates = object.keys(req.body);
    const isBusiness = await Business.findById(req.params.id);
    if (!isBusiness) return next(errorHandler(404, "business not found"));

    updates.forEach((update) => {
      isBusiness[update] = req.body[update];
    });
    await isBusiness.save();

    res.status(200).json(isBusiness);
  } catch (error) {
    next(error);
  }
};

export const getBusinesses = async (req, res, next) => {
  try {
    const options = {
      limit: req.query.limit ? parseInt(req.query.limit) : 20,
      sort: { createdAt: -1 },
    };
    const query = { isDeleted: false };
    const businesses = await Business.find(query, null, options);

    res.status(200).json(businesses);
  } catch (error) {
    next(error);
  }
};

export const getBusiness = async (req, res, next) => {
  try {
    const isBusiness = await Business.findById(req.params.id).populate({
      path: "User",
      select: "firstName lastName email phone",
    });
    if (!isBusiness) return next(errorHandler("Could not find business"));

    res.status(200).json(isBusiness);
  } catch (error) {
    next(error);
  }
};

export const deleteBusiness = async (req, res, next) => {
  try {
    const isBusiness = await Business.findById(req.params.id);
    if (!isBusiness) return next(errorHandler(404, "Business not found"));
    if (req.body.role === "deleteBusiness") {
      isBusiness.isDeleted = true;
    } else if (req.body.role === "deactivateBusiness") {
      isBusiness.isActive = false;
    }
    await isBusiness.save();

    res.status(200).json("Action completed successfully!");
  } catch (error) {
    next(error);
  }
};

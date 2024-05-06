import Order from "../models/Order.model.js";
import Product from "../models/Product.model.js";
import { findOrderById } from "../services/order.service.js";
import { errorHandler } from "../utils/error.js";

export const placeOrder = async (req, res, next) => {
  try {
    // check if item is available
    const isProduct = await Product.findById(req.params.id);
    if (!isProduct) return next(errorHandler(404, "Product not found"));

    if (isProduct.quantity < req.body.quantity)
      return next(
        errorHandler(
          400,
          `Only ${isProduct.quantity} item(s) is available for purchase`
        )
      );
  } catch (error) {
    next(error);
  }
};

export const cancelOrder = async (req, res, next) => {
  try {
    const cancelledOrders = await Order.find({ status: "canceled" });
    res.status(200).json(cancelledOrders);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const sortOrder = req.query.sortOrder || -1;
    const orders = await Order.find(
      {
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { shortDescription: { $regex: searchTerm, $options: "i" } },
          { longDescription: { $regex: searchTerm, $options: "i" } },
        ],
      },
      { _id: req.user.id },
      { isDeleted: false },
      { status: { $ne: "cancelled" } }
    )
      .sort({ createdAt: sortOrder })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = findOrderById(req.params.id);
    if (!order) return next(errorHandler(400, "Could not find order"));

    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

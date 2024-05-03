import Order from "../models/Order.model";
import { errorHandler } from "../utils/error";

export const findOrderById = async (id) => {
  try {
    const isOrder = await Order.findById(id);
    if (!isOrder) return next(errorHandler(404, "Order not found"));

    return order;
  } catch (error) {
    next(error);
  }
};

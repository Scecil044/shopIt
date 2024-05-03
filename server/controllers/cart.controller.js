import Cart from "../models/Cart.model.js";
import { errorHandler } from "../utils/error.js";

export const getCartItems = async (req, res, next) => {
  try {
    const cartItems = await Cart.find({
      userId: { $eq: req.user.id },
      isDeleted: false,
    });

    res.status(200).json(cartItems);
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) return next(errorHandler(404, "Cart item not found"));
    cartItem.isDeleted = true;
    await cartItem.save();

    res.status(200).json("Item removed from cart");
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

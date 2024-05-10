import Cart from "../models/Cart.model.js";
import { errorHandler } from "../utils/error.js";

// Conveniently add projections to the function
export const getCartItems = async (req, res, next) => {
  try {
    const options = { limit: 10, sort: { createdAt: -1 } };
    const query = { isDeleted: false, userId: { $eq: req.user.id } };
    const cartItems = await Cart.find(query, null, options).lean();

    res.status(200).json(cartItems);
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const {
      title,
      price,
      slug,
      shortDescription,
      longDescription,
      quantity,
      images,
      isFlashSale,
    } = req.body;
    const cartItem = await Cart.create({
      userRef: req.user.id,
      productRef: req.params.id,
      title,
      price,
      images,
      quantity,
      shortDescription,
      longDescription,
      isFlashSale,
      slug,
    });
    res.status(200).json(cartItem);
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

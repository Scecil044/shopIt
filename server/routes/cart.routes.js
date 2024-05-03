import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").get(getCartItems).post(addToCart).put(removeFromCart);

export default router;

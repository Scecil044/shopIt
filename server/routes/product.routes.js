import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  searchProducts,
  updateProduct
} from "../controllers/products.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", auth, createProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);
router.get("/search", searchProducts);

export default router;

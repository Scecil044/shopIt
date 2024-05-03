import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import chatRoutes from "./chat.routes.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

export default router;

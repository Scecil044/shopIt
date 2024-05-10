import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import chatRoutes from "./chat.routes.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
import businessRoutes from "./business.routes.js";
import roleRoutes from "./role.routes.js"
import paymentRoutes from "./payments.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/business", businessRoutes);
router.use("/payments", paymentRoutes);
router.use("/roles", roleRoutes)


export default router;

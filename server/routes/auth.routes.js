import express from "express";
import {
  googleAuth,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/googleAuth", googleAuth);
router.get("/logout", auth, logoutUser);

export default router;

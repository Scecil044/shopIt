import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  restrictUser,
  updateUser,
} from "../controllers/user.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.get("/", auth, getUsers);
router.get("/:id", auth, getUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.put("/:id", restrictUser);

export default router;

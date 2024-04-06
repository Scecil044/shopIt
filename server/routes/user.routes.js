import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.get("/", auth, getUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;

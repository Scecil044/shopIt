import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.get("/", auth, getUsers);

export default router;

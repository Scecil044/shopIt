import express from "express";
import {
  addToGroup,
  createGroupChat,
  fetchChats,
  getChat,
  removeFromGroup,
  renameChat,
} from "../controllers/chat.controller.js";
import { auth } from "../utils/auth.js";

const router = express.Router();

router.post("/chat", auth, getChat);
router.get("/fetch/chats", auth, fetchChats);
router.post("/create/group/chat", auth, createGroupChat);
router.put("/rename/chat", auth, renameChat);
router.put("/add/user", auth, addToGroup);
router.put("/remove/user", auth, removeFromGroup);

export default router;

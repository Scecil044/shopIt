import express from "express";
import {
  createRole,
  deleteRole,
  getRole,
  getRoles,
  updateRole,
} from "../controllers/Role.controller.js";

const router = express();

router.route("/").get(getRole).get(getRoles).post(createRole);
router.route("/:id").delete(deleteRole).put(updateRole);

export default router;

import express from "express";
import {
  deleteBusiness,
  getBusiness,
  getBusinesses,
  updateBusiness,
} from "../controllers/business.controller.js";

const router = express.Router();

router.get("/", getBusinesses);
router.get("/:id", getBusiness);
router.delete("/:id", deleteBusiness);
router.put("/:id", updateBusiness);

export default router;

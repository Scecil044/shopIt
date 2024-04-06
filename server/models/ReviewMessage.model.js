import mongoose from "mongoose";

const reviewMessageSchema = new mongoose.Schema(
  {
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: { type: String, required: true },
    reviewRef: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
  },
  { timestamps: true }
);

const ReviewMessage = mongoose.model("ReviewMessage", reviewMessageSchema);

import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: String,
    },
    status: {
      type: String,
      enum: ["disabled", "enabled"],
      default: "enabled",
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;

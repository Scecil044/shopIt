import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    productRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    status: {
      type: String,
      enum: [
        "cancelled",
        "Delivered",
        "in progress",
        "available",
        "out of stock",
      ],
      default: "available",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;

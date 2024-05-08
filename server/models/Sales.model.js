import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
  {
    productRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    deliveredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dispatchedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deliveryMode: {
      type: String,
      enum: ["in-person", "outsourced"],
    },
    amount: {
      type: Number,
    },
    paymentMode: {
      type: String,
      enum: ["mpesa", "card", "stripe", "paypal"],
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", SalesSchema);
export default Sale;

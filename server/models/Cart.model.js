import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productRef: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    quantity: { type: Number, required: true },
    slug: { type: String, required: true },
    images: [{ type: String, required: true }],
    isFlashSale: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;

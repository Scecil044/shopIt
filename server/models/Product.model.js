import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    quantity: { type: Number, required: true },
    slug: { type: String, required: true },
    images: [{ type: String, required: true }],
    isFlashSale: { type: Boolean, default: false },
    quantity: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

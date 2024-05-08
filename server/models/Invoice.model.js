import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
  {
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
const Invoice = mongoose.model("Invoice", InvoiceSchema);
export default Invoice;

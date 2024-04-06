import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    businessName: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    logo: { type: String, default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3m49xsTfOV0V4RfSMjjtmkW87Bv4az8mLQ&s" },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
export default Business;

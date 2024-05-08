import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      required: true,
      enum: ["admin", "trader", "customer"],
      default: "customer",
    },
    roleId: {
      type: Number,
      enum: [1, 2, 3],
      default: 3,
      required: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", roleSchema);
export default Role;

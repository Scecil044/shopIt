import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    businessRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, "The first name field is required"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "The last name field is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "The email field is required"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "The Phone field is required"],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    landMark: {
      type: String,
    },
    country: {
      type: String,
      default: "Kenya",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "The gender field is required"],
    },
    profilePicture: {
      type: String,
      required: true,
      default:
        "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
    },
    registrationDate: {
      type: Date,
      default: new Date(),
    },
    role: {
      type: String,
      enum: ["admin", "trader", "customer"],
      default: "customer",
    },
    password: {
      type: String,
      required: [true, "The Password field is required"],
    },
  },
  { timestamps: true }
);

userSchema.methods.isMatchPasswords = function (enteredPassword) {
  return bcrypt.compareSync(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);
export default User;

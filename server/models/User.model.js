import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    gender: {
      type: String,
    },
    profilePicture: {
      type: String,
      required: true,
      default:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    registrationDate: {
      type: Date,
      default: new Date(),
    },
    password: {
      type: String,
      required: [true, "The Password field is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

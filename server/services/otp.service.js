import Otp from "../models/Otp.model.js";

export const createOtp = async (email) => {
  try {
    await Otp.updateMany({ email }, { $set: { status: "disabled" } });
    const newOtp = Math.floor(Math.random(1000 + Math.random() * 9000));

    return await Otp.create({
      email,
      otp: newOtp,
    });
  } catch (error) {
    throw new Error(error);
  }
};

// get opt by email and otp code
export const getOtp = async (filter) => {
  try {
    return await Otp.findOne(filter);
  } catch (error) {
    throw new Error(error);
  }
};

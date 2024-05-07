import Jwt from "jsonwebtoken";

export const generateToken = (userId, userRole) => {
  return Jwt.sign({ id: userId, role: userRole }, process.env.JWT_SECRET);
};

export const passwordToken = (email, userId) => {
  return Jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET);
};

import Jwt from "jsonwebtoken";

export const generateToken = (userId, adminStatus) => {
  return Jwt.sign({ id: userId, isAdmin: adminStatus }, process.env.JWT_SECRET);
};

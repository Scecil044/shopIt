import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const auth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(403, "No token, Not Authorized!"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Invalid authentication token!"));

    req.user = user;
    next();
  });
};

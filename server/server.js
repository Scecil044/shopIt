import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/dB.js";
import routes from "./routes/index.js";
import cors from "cors";
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
const port = process.env.PORT || 5500;
const __dirname = path.resolve();

// database connection
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api", routes);

// Deployment variables
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// app middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`.cyan.underline);
});

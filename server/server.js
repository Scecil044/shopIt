import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/dB.js";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 5500;
const __dirname = path.resolve();

// database connection
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes

// Deployment variables
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// app middleware

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`.cyan.underline);
});

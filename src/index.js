// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import mongoose from "mongoose";
import { DB_NAME } from "./contants.js";
import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server started on PORT ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  });
/*
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();

*/

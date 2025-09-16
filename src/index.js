// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import mongoose from "mongoose";
import { DB_NAME } from "./contants.js";
import express from "express";
import connectDB from "./db/index.js";

connectDB();

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

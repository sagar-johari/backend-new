// Import dependencies
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Configure environment variables
dotenv.config({
    path: './env',
});

// Initialize Express app
const app = express();

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed!!", err);
    });

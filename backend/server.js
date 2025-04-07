import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./config/connectToDatabase.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
dotenv.config();

//App Config
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("A boy from the streets of old city!");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

// Establish the connection
const startServer = async () => {
  await connectDb();
  await connectCloudinary();
  app.listen(port, () => {
    console.log("Server is running...🕺");
  });
};
startServer();

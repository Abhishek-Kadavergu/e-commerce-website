import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartControllers.js";
import authUser from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;

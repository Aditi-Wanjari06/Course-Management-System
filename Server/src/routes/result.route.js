import express from "express";
import {
  submitResult,
  getResultHistory,
} from "../controllers/result.controller.js";

const resultRouter = express.Router();

resultRouter.post("/submit", submitResult);
resultRouter.get("/history/:userId", getResultHistory);

export default resultRouter;

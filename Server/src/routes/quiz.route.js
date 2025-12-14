import { Router } from "express";
import {
  createQuiz,
  getAllQuiz,
  getQuiz,
} from "../controllers/quiz.controller.js";

const quizRouter = Router();

quizRouter.post("/createQuiz", createQuiz);
quizRouter.get("/getQuiz", getAllQuiz);
quizRouter.get("/:id", getQuiz);

export { quizRouter };

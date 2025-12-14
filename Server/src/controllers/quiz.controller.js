import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { Quiz } from "../models/quiz.model.js";

const createQuiz = asyncHandler(async (req, res) => {
  const { testTitle, testLevel, questions, duration } = req.body;

  if (!testTitle || !Array.isArray(questions) || questions.length === 0) {
    throw new ApiError(400, "testTitle and at least one question are required");
  }

  // validate each question
  questions.forEach((q, idx) => {
    if (!q.text || !q.type) {
      throw new ApiError(400, `Question ${idx + 1} missing text or type`);
    }
    if (!["MCQ", "Descriptive", "True/False"].includes(q.type)) {
      throw new ApiError(400, `Question ${idx + 1} has invalid type`);
    }
    if (q.type === "MCQ") {
      if (!Array.isArray(q.options) || q.options.length < 2) {
        throw new ApiError(400, `Question ${idx + 1} must have 2+ options`);
      }
      if (!q.correctOption || !q.options.includes(q.correctOption)) {
        throw new ApiError(
          400,
          `Question ${idx + 1} correctOption not in options`
        );
      }
    }
    if (q.type === "Descriptive" && !q.correctAnswer) {
      throw new ApiError(400, `Question ${idx + 1} needs correctAnswer`);
    }
    if (q.type === "True/False" && typeof q.isTrue !== "boolean") {
      throw new ApiError(400, `Question ${idx + 1} isTrue must be boolean`);
    }
  });

  const existedQuiz = await Quiz.findOne({ testTitle });
  if (existedQuiz) {
    throw new ApiError(409, "Test already exists");
  }

  const quiz = await Quiz.create({
    testTitle: testTitle.trim(),
    testLevel: testLevel?.toUpperCase() || "EASY",
    questions,
    duration,
  });

  return res.status(201).json(new ApiResponse(201, quiz, "Test Created!!"));
});

const getAllQuiz = asyncHandler(async (req, res) => {
  const all = await Quiz.find();
  return res
    .status(200)
    .json(new ApiResponse(200, all, "Tests fetched successfully"));
});

const getQuiz = asyncHandler(async (req, res) => {
  try {
  
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      throw new ApiError(404, "Quiz not found");
    }
    return res.status(200).json(new ApiResponse(200, quiz, "Quiz found"));
  } catch (error) {
    throw new ApiError(500, "Server error");
  }
});

export { createQuiz, getAllQuiz, getQuiz };

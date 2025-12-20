import { Result } from "../models/result.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * Submit Exam Result
 */
export const submitResult = asyncHandler(async (req, res) => {
  const {
    userId,
    quizId,
    answers,
    totalQuestions,
    attempted,
    correct,
    percentage,
    autoSubmitted,
  } = req.body;

  // ---- Validation ----
  if (!userId || !quizId || !answers) {
    throw new ApiError(400, "Required fields are missing");
  }

  if (totalQuestions <= 0) {
    throw new ApiError(400, "Invalid total questions count");
  }

  // ---- Save Result ----
  const result = await Result.create({
    userId,
    quizId,
    answers,
    totalQuestions,
    attempted,
    correct,
    percentage,
    autoSubmitted: autoSubmitted ?? false,
  });

  if (!result) {
    throw new ApiError(500, "Failed to submit result");
  }

  return res.status(201).json(
    new ApiResponse(201, result, "Result submitted successfully")
  );
});

/**
 * Get Result History of a User
 */
export const getResultHistory = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const results = await Result.find({ userId })
    .populate("quizId", "testTitle")
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, results, "Result history fetched successfully")
  );
});

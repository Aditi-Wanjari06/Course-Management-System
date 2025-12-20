import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    answers: {
      type: Object,
      required: true,
    },
    totalQuestions: Number,
    attempted: Number,
    correct: Number,
    percentage: Number,
    autoSubmitted: Boolean,
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);

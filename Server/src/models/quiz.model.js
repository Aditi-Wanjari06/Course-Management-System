import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema(
  {
    testTitle: {
      type: String,
      required: true,
      trim: true,
    },
    questions: [
      {
        text: { type: String, required: true },
        type: {
          type: String,
          enum: ["MCQ", "Descriptive", "True/False"],
          required: true,
        },
        options: [String], // only for MCQ
        correctOption: String, // index or value for MCQ
         correctAnswer: String, // for Descriptive or True/False
        isTrue: Boolean, // for True/False
      },
    ],
    testLevel: {
      type: String,
      enum: ["EASY", "MEDIUM", "HARD"],
      default: "EASY",
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Quiz = mongoose.model("Quiz", quizSchema);

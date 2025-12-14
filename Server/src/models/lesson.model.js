import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },

},{timestamps:true});

export const Lesson = mongoose.model("Lesson", LessonSchema);

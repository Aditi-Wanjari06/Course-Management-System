import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect } from "react";
import {
  CheckCircle2,
  XCircle,
  ClipboardList,
  Percent,
  ArrowLeft,
} from "lucide-react";

export default function ExamResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="text-center mt-10">No result data found</div>;
  }

  const { quiz, answers } = state;
  const questions = quiz.questions || [];

  const attempted = Object.keys(answers).length;

  const correct = questions.reduce((count, q, index) => {
    return answers[index] === q.correctAnswer ? count + 1 : count;
  }, 0);

  const incorrect = attempted - correct;
  const percentage = Math.round((correct / questions.length) * 100);

useEffect(() => {
  if (!quiz || !questions.length) return;

  const submitResult = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/result/submit`,
        {
          userId: quiz.createdBy, // ⚠️ see backend note below
          quizId: quiz._id,
          answers,
          totalQuestions: questions.length,
          attempted,
          correct,
          percentage,
          autoSubmitted: state?.autoSubmitted ?? false,
        }
      );
      console.log("Result submitted:", res.data);
    } catch (error) {
      console.error(
        "Result submit failed",
        error.response?.data || error.message
      );
    }
  };

  submitResult();
}, [quiz, questions.length]);




  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Box height={75} />

      <Box sx={{ display: "flex", pl: 1, pr: 4 }}>
        <Sidenavbar />

        <div className="w-full px-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
              <ClipboardList size={30} /> Exam Result
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultCard
                icon={<ClipboardList className="text-blue-600" />}
                label="Total Questions"
                value={questions.length}
              />
              <ResultCard
                icon={<CheckCircle2 className="text-green-600" />}
                label="Attempted"
                value={attempted}
              />
              <ResultCard
                icon={<CheckCircle2 className="text-blue-600" />}
                label="Correct"
                value={correct}
              />
              <ResultCard
                icon={<XCircle className="text-red-500" />}
                label="Incorrect"
                value={incorrect}
              />
            </div>

            {/* Score */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 flex justify-between items-center">
              <div className="flex items-center gap-3 text-2xl font-semibold text-blue-700">
                <Percent /> Score
              </div>
              <span className="text-3xl font-bold text-blue-800">
                {percentage}%
              </span>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/challenges")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 shadow"
              >
                <ArrowLeft /> Back to Dashboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </Box>
    </div>
  );
}

function ResultCard({ icon, label, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex items-center justify-between">
      <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
        {icon}
        {label}
      </div>
      <span className="text-2xl font-bold text-gray-800">{value}</span>
    </div>
  );
}

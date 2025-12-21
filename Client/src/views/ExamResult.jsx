import React, { useEffect, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
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
  const submittedRef = useRef(false); // 🔐 prevents multiple submits

  if (!state?.quiz || !state?.answers) {
    return <div className="text-center mt-10">No result data found</div>;
  }

  const { quiz, answers, autoSubmitted } = state;
  const questions = quiz.questions || [];

  const user = JSON.parse(localStorage.getItem("user"));

  /* ---------------- RESULT CALCULATION ---------------- */

  const result = useMemo(() => {
  let attempted = 0;
  let correct = 0;

  questions.forEach((q) => {
    const userAnswer = answers[q._id];

    if (userAnswer !== undefined) {
      attempted++;
      if (userAnswer === q.correctAnswer) {
        correct++;
      }
    }
  });

  return {
    attempted,
    correct,
    incorrect: attempted - correct,
    percentage: questions.length
      ? Math.round((correct / questions.length) * 100)
      : 0,
  };
}, [questions, answers]);

  /* ---------------- SUBMIT RESULT (ONCE) ---------------- */

//   useEffect(() => {
//     if (
//       submittedRef.current ||
//       !user?._id ||
//       !quiz?._id ||
//       questions.length === 0
//     ) {
//       return;
//     }

//     submittedRef.current = true;

//     const submitResult = async () => {
//       try {
//         await axios.post(
//           `${import.meta.env.VITE_API_URL}/api/v1/result/submit`,
//           {
//             userId: user._id,
//             quizId: quiz._id,
//             answers,
//             totalQuestions: questions.length,
//             attempted: result.attempted,
//             correct: result.correct,
//             percentage: result.percentage,
//             autoSubmitted: autoSubmitted ?? false,
//           }
//         );
//       } catch (error) {
//         console.error(
//           "Result submit failed",
//           error.response?.data || error.message
//         );
//       }
//     };

//     submitResult();
//   }, [quiz._id]);



useEffect(() => {
  if (submittedRef.current) return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?._id || !quiz?._id || questions.length === 0) return;

  submittedRef.current = true;

  const submitResult = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/result/submit`,
        {
          userId: user._id,
          quizId: quiz._id,
          answers,
          totalQuestions: questions.length,
          attempted: result.attempted,
          correct: result.correct,
          percentage: result.percentage,
          autoSubmitted: state?.autoSubmitted ?? false,
        }
      );
    } catch (err) {
      console.error("Result submit failed", err);
    }
  };

  submitResult();
}, [quiz?._id, result]);


  /* ---------------- UI ---------------- */    

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
                value={result.attempted}
              />
              <ResultCard
                icon={<CheckCircle2 className="text-blue-600" />}
                label="Correct"
                value={result.correct}
              />
              <ResultCard
                icon={<XCircle className="text-red-500" />}
                label="Incorrect"
                value={result.incorrect}
              />
            </div>

            {/* Score */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 flex justify-between items-center">
              <div className="flex items-center gap-3 text-2xl font-semibold text-blue-700">
                <Percent /> Score
              </div>
              <span className="text-3xl font-bold text-blue-800">
                {result.percentage}%
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

/* ---------------- CARD ---------------- */

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

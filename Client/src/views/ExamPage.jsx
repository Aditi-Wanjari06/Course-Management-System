import React, { useState, useEffect, useRef} from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function ExamPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const submittedRef = useRef(false);


  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);


  // 1️⃣ Fetch quiz
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/quiz/${id}`
        );

        const quizData = res.data.message;
        if (!quizData) throw new Error("Quiz data missing");
        setQuiz(quizData);

        if (quizData.duration) setTimeLeft(quizData.duration * 60);
      } catch (err) {
        setError("Failed to load quiz");
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  // useEffect(() => {
  //   if (timeLeft <= 0) return;
  //   const timer = setInterval(
  //     () => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)),
  //     1000
  //   );
  //   return () => clearInterval(timer);
  // }, [timeLeft]);

  // 2️⃣ Timer
  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
  }, 1000);

  return () => clearInterval(timer);
}, []);

// 3️⃣ Auto-submit 
useEffect(() => {
   if (timeLeft === 0 && !submittedRef.current) {
    submittedRef.current = true;
    handleAutoSubmit();
  }
}, [timeLeft]);


  if (loading) return <div className="text-center mt-10 text-blue-600 text-lg">Loading quiz…</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!quiz) return <div>No quiz found.</div>;

  const questions = quiz.questions || [];
  const currentQ = questions[current];
  // const progress = Math.round(((current + 1) / questions.length) * 100);

  const progress = questions.length
  ? Math.round(((current + 1) / questions.length) * 100)
  : 0;


  // const handleNext = () => {
  //   if (current < questions.length - 1) setCurrent((c) => c + 1);
  //   else console.log("Submit answers:", answers);
  // };

   const handleNext = () => {
  if (current < questions.length - 1) {
    setCurrent((c) => c + 1);
  } else {
    navigate(`/exam/${id}/result`, {
      state: {
        quiz,
        answers,
      },
    });
  }
};

  const handlePrevious = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleOptionChange = (value) =>
    // setAnswers({ ...answers, [current]: value });
  setAnswers({
  ...answers,
  [currentQ._id]: value,
});

  const formatTime = (secs) =>
    `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(
      secs % 60
    ).padStart(2, "0")}`;

   
const handleAutoSubmit = () => {
  navigate(`/exam/${id}/result`, {
  state: {
    quiz,
    answers,
    autoSubmitted: true,
  },
});
};




  return (
    <div className="bg-gray-100 overflow-x-hidden min-h-screen">
      <Navbar />
      <Box height={75} />

      <Box sx={{ display: "flex", pl: 1, pr: 4 }}>
        <Sidenavbar />

        <div className="w-full mx-auto px-10 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
                <FileText size={28} /> {quiz.testTitle}
              </h1>
              <p className="text-md text-gray-600">
                Level: {quiz.testLevel || "N/A"}
              </p>
            </div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-lg shadow"
            >
              <Clock size={20} /> {formatTime(timeLeft)}
            </motion.div>
          </motion.div>

          {/* Progress */}
          <p className="font-medium mb-2">
            Question {current + 1} of {questions.length}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-2 bg-blue-600 rounded-full"
            />
          </div>

          {/* Question Area */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl text-gray-800">
                {current + 1}. {currentQ.text}
              </h2>

              {currentQ.points && (
                <span className="text-lg text-blue-600 font-medium">
                  {currentQ.points} pts
                </span>
              )}
            </div>

            <div className="space-y-3 mt-4">
              {/* {currentQ.options?.map((opt, i) => (
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  key={i}
                  className="block p-3 border rounded-md cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition"
                >
                  <input
                    type="radio"
                    name={`question-${current}`}
                    value={opt}
                    // checked={answers[current] === opt}
                    checked={answers[currentQ._id] === opt}

                    onChange={() => handleOptionChange(opt)}
                    className="mr-2"
                  />
                  {opt}
                </motion.label>
              ))} */}

              {currentQ.options?.map((opt, i) => (
  <motion.label
    whileHover={{ scale: 1.02 }}
    key={i}
    className="block p-3 border rounded-md cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition"
  >
    <input
      type="radio"
      name={`question-${currentQ._id}`}
      value={opt}
      checked={answers[currentQ._id] === opt}
      onChange={() => handleOptionChange(opt)}
      className="mr-2"
    />
    {opt}
  </motion.label>
))}


              {currentQ.type === "Descriptive" && (
                <textarea
                  placeholder="Type your answer here..."
                  className="border border-gray-300 text-gray-600 w-full h-28 p-3 rounded-md outline-blue-500"
                ></textarea>
              )}

              {currentQ.type === "True/False" && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-lg">
                    <input type="radio" className="mr-2" /> True
                  </label>
                  <label className="flex items-center gap-2 text-lg">
                    <input type="radio" className="mr-2" /> False
                  </label>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <motion.button
                whileHover={{ scale: current === 0 ? 1 : 1.05 }}
                onClick={handlePrevious}
                disabled={current === 0}
                className={`px-5 py-2 rounded flex items-center gap-2 ${
                  current === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft size={18} /> Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700"
                onClick={handleNext}
              >
                {current === questions.length - 1 ? (
                  <>
                    <CheckCircle2 size={20}/> Submit
                  </>
                ) : (
                  <>
                    Next <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </Box>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Navbar, Input } from "../components/index";
// import Sidenavbar from "../components/Sidenavbar";
// import { Box } from "@mui/material";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function TestCreator() {
//   const navigate = useNavigate();

//   // ----- Local State -----
//   const [testTitle, setTestTitle] = useState("");
//   const [testLevel, setTestLevel] = useState("Easy");
//   const [questions, setQuestions] = useState([]);
//   const [duration, setDuration] = useState(0);

//   const [questionText, setQuestionText] = useState("");
//   const [questionType, setQuestionType] = useState("mcq");
//   const [options, setOptions] = useState([""]);
//   const [correctOption, setCorrectOption] = useState(0);
//   const [correctAnswer, setCorrectAnswer] = useState("");
//   const [isTrue, setIsTrue] = useState(true);

//   // ----- Saved Quizzes from backend -----
//   const [savedQuizzes, setSavedQuizzes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // -------- Fetch Quizzes on mount --------
//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/quiz/getQuiz`
//         );
//         console.log("API response:", res.data.message);
//         const quizzes = Array.isArray(res.data.message) ? res.data.message : [];
//         setSavedQuizzes(quizzes);
//       } catch (err) {
//         console.error("Error fetching quizzes:", err);
//         setSavedQuizzes([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   // -------- Add Option/Question logic --------
//   const addOption = () => setOptions([...options, ""]);

//   const updateOption = (i, val) => {
//     const updated = [...options];
//     updated[i] = val;
//     setOptions(updated);
//   };

//   const removeOption = (i) => {
//     if (options.length <= 1) return;
//     const updated = options.filter((_, idx) => idx !== i);
//     setOptions(updated);
//     if (correctOption >= updated.length) setCorrectOption(updated.length - 1);
//   };

//   const addQuestion = () => {
//     if (!questionText.trim()) return;
//     let q = {
//       id: Date.now(),
//       text: questionText,
//       type:
//         questionType === "mcq"
//           ? "MCQ"
//           : questionType === "descriptive"
//           ? "Descriptive"
//           : "True/False",
//     };
//     if (questionType === "mcq") {
//       q.options = options;
//       q.correctOption = options[correctOption];
//     } else if (questionType === "descriptive") {
//       q.correctAnswer = correctAnswer;
//     } else if (questionType === "truefalse") {
//       q.isTrue = Boolean(isTrue);
//     }
//     setQuestions([...questions, q]);
//     // reset fields
//     setQuestionText("");
//     setOptions([""]);
//     setCorrectOption(0);
//     setCorrectAnswer("");
//     setIsTrue(true);
    
//   };

//   const removeQuestion = (id) => {
//     setQuestions(questions.filter((q) => q.id !== id));
//   };

//   // -------- POST to backend --------
//   const saveQuiz = async () => {
//     if (!testTitle.trim() || questions.length === 0) {
//       toast.error("Please enter a title and add at least one question.");
//       return;
//     }

//     try {
//       const payload = {
//         testTitle,
//         testLevel,
//         duration,
//         questions: questions.map((q) => {
//           const { id, ...rest } = q;
//           return rest;
//         }),
//       };
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/v1/quiz/createQuiz`,
//         payload
//       );

//       console.log("CreateQuiz response:", res.data);

//       const newQuiz = res.data.message;

//       setSavedQuizzes((prev) =>
//         Array.isArray(prev) ? [...prev, newQuiz] : [newQuiz]
//       );
//       toast.success("Quiz saved successfully!");
//       // reset entire form
//       setTestTitle("");
//       setTestLevel("Easy");
//       setQuestions([]);
//     } catch (err) {
//       console.error("Error saving quiz:", err);
//       toast.error("Failed to save quiz!");
//     }
//   };

//   // ---------------- UI ----------------
//   return (
//     <div>
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
//         <Sidenavbar />

//         <div className="w-full py-5 px-4">
//           {/* Creator + Display */}
//           <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg border-2 border-orange-300 p-6 flex flex-row justify-around">
//             {/* ---------- LEFT: Creator ---------- */}
//             <div className="flex flex-col w-[480px]">
//               <h1 className="text-2xl font-semibold mb-6 text-orange-600 bg-orange-200 text-center rounded-sm">
//                 Create Online QUIZ
//               </h1>

//               <Input
//                 type="text"
//                 label="Test Title :"
//                 labelClassName="font-bold"
//                 placeholder="Enter test title"
//                 value={testTitle}
//                 onChange={(e) => setTestTitle(e.target.value)}
//               />

//               {/* Add Question Section */}
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-4">
//                   Add Question
//                 </h2>

//                 <Input
//                   label="Question:"
//                   type="text"
//                   placeholder="Enter question"
//                   value={questionText}
//                   onChange={(e) => setQuestionText(e.target.value)}
//                 />

//                 {/* Type Selector */}
//                 <label className="block text-sm font-semibold font-serif mt-4">
//                   Question Type:
//                 </label>
//                 <select
//                   className="w-full border border-gray-200 rounded px-3 py-2"
//                   value={questionType}
//                   onChange={(e) => {
//                     setQuestionType(e.target.value);
//                     setOptions([""]);
//                     setCorrectOption(0);
//                   }}
//                 >
//                   <option value="mcq">Multiple Choice (MCQ)</option>
//                   <option value="descriptive">Descriptive</option>
//                   <option value="truefalse">True/False</option>
//                 </select>

//                 {/* MCQ options */}
//                 {questionType === "mcq" && (
//                   <div className="mt-4">
//                     <label className="block text-sm font-semibold font-serif">
//                       Options:
//                     </label>
//                     {options.map((opt, idx) => (
//                       <div key={idx} className="flex gap-2 mb-2">
//                         <input
//                           type="text"
//                           placeholder={`Option ${idx + 1}`}
//                           className="flex-1 border rounded px-3 py-1"
//                           value={opt}
//                           onChange={(e) => updateOption(idx, e.target.value)}
//                         />
//                         <button
//                           type="button"
//                           className="bg-red-100 text-red-600 px-2 rounded"
//                           onClick={() => removeOption(idx)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                     <button
//                       type="button"
//                       className="bg-blue-100 text-blue-600 px-3 py-1 rounded mt-2"
//                       onClick={addOption}
//                     >
//                       Add Option
//                     </button>

//                     <div className="mt-4">
//                       <label className="block text-sm font-semibold font-serif">
//                         Correct Option:
//                       </label>
//                       <select
//                         className="w-full border rounded px-3 py-2"
//                         value={correctOption}
//                         onChange={(e) =>
//                           setCorrectOption(Number(e.target.value))
//                         }
//                       >
//                         {options.map((_, i) => (
//                           <option key={i} value={i}>
//                             Option {i + 1}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 )}

//                 {questionType === "descriptive" && (
//                   <textarea
//                     placeholder="Enter correct answer"
//                     className="w-full border rounded px-3 py-2 mt-4"
//                     rows="3"
//                     value={correctAnswer}
//                     onChange={(e) => setCorrectAnswer(e.target.value)}
//                   />
//                 )}

//                 {questionType === "truefalse" && (
//                   <select
//                     className="w-full border rounded px-3 py-2 mt-4"
//                     value={isTrue}
//                     onChange={(e) => setIsTrue(e.target.value === "true")}
//                   >
//                     <option value="true">True</option>
//                     <option value="false">False</option>
//                   </select>
//                 )}

//                 {/* Test Level */}
//                 <label className="block text-sm font-semibold font-serif mt-4">
//                   Test Level:
//                 </label>
//                 <select
//                   className="w-full border rounded px-3 py-2"
//                   value={testLevel}
//                   onChange={(e) => setTestLevel(e.target.value)}
//                 >
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                 </select>

//                 <Input
//                   label="Duration:"
//                   type="number"
//                   placeholder="Enter duration (mins)"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="w-full bg-red-600 text-white px-4 py-2 rounded-lg mt-4"
//                   onClick={addQuestion}
//                 >
//                   Add Question
//                 </button>

//                 {/* ✅ Save to backend */}
//                 <button
//                   type="button"
//                   className="w-full bg-green-600 text-white px-4 py-2 rounded-lg mt-3"
//                   onClick={saveQuiz}
//                 >
//                   Publish
//                 </button>
//               </div>
//             </div>

//             {/* ---------- RIGHT: Local Questions + Saved Quizzes ---------- */}
//             <div className="flex flex-col w-[480px]">
//               <h2 className="text-xl font-semibold mb-4 bg-orange-200 text-center rounded-sm text-orange-600">
//                 Current Quiz Questions
//               </h2>
//               {questions.length === 0 ? (
//                 <p className="text-gray-500">No questions added yet.</p>
//               ) : (
//                 questions.map((q) => (
//                   <div
//                     key={q.id}
//                     className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-400 mb-2"
//                   >
//                     <div className="flex justify-between items-start">
//                       <h3 className="font-semibold">{q.text}</h3>
//                       <button
//                         className="bg-red-100 text-red-600 px-2 rounded"
//                         onClick={() => removeQuestion(q.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}

//               {/* ---- Show quizzes from DB ---- */}
//               <h2 className="text-xl font-semibold mt-8 bg-green-200 text-center rounded-sm text-green-700">
//                 Saved Quizzes
//               </h2>
//               {loading ? (
//                 <p className="text-gray-500">Loading...</p>
//               ) : Array.isArray(savedQuizzes) && savedQuizzes.length > 0 ? (
//                 savedQuizzes.map((quiz) => (
//                   <div
//                     key={quiz._id ?? Math.random()}
//                     className="bg-white mt-2 p-3 rounded shadow border-l-4 border-green-400"
//                   >
//                     <p className="font-semibold">{quiz.testTitle}</p>
//                     <p className="text-sm text-gray-600">
//                       Level: {quiz.testLevel}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       Questions: {quiz.questions?.length ?? 0} ; Duration: {quiz.duration} mins
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No quizzes saved yet.</p>
//               )}
//             </div>
//           </div>
//         </div>
//         </Box>
//         <Toaster />
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Input } from "../components/index";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Trash2,
  ClipboardList,
  Save,
  CheckCircle2,
  FileText,
  ListChecks,
} from "lucide-react";

export default function TestCreator() {
  const navigate = useNavigate();

  const [testTitle, setTestTitle] = useState("");
  const [testLevel, setTestLevel] = useState("Easy");
  const [questions, setQuestions] = useState([]);
  const [duration, setDuration] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("mcq");
  const [options, setOptions] = useState([""]);
  const [correctOption, setCorrectOption] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  const [savedQuizzes, setSavedQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch quizzes
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/quiz/getQuiz`
        );
        const quizzes = Array.isArray(res.data.message) ? res.data.message : [];
        setSavedQuizzes(quizzes);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const addOption = () => setOptions([...options, ""]);
  const updateOption = (i, val) => {
    const updated = [...options];
    updated[i] = val;
    setOptions(updated);
  };

  const removeOption = (i) => {
    if (options.length <= 1) return;
    const updated = options.filter((_, idx) => idx !== i);
    setOptions(updated);
    if (correctOption >= updated.length) setCorrectOption(updated.length - 1);
  };

  const addQuestion = () => {
    if (!questionText.trim()) return;
    let q = {
      id: Date.now(),
      text: questionText,
      type:
        questionType === "mcq"
          ? "MCQ"
          : questionType === "descriptive"
          ? "Descriptive"
          : "True/False",
    };
    if (questionType === "mcq") {
      q.options = options;
      q.correctOption = options[correctOption];
    } else if (questionType === "descriptive") {
      q.correctAnswer = correctAnswer;
    } else if (questionType === "truefalse") {
      q.isTrue = Boolean(isTrue);
    }
    setQuestions([...questions, q]);
    setQuestionText("");
    setOptions([""]);
    setCorrectOption(0);
    setCorrectAnswer("");
    setIsTrue(true);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const saveQuiz = async () => {
    if (!testTitle.trim() || questions.length === 0) {
      toast.error("Please enter a title and add at least one question.");
      return;
    }

    try {
      const payload = {
        testTitle,
        testLevel,
        duration,
        questions: questions.map((q) => {
          const { id, ...rest } = q;
          return rest;
        }),
      };
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/quiz/createQuiz`,
        payload
      );

      const newQuiz = res.data.message;
      setSavedQuizzes((prev) => [...prev, newQuiz]);
      toast.success("Quiz Published Successfully 🎉");

      setTestTitle("");
      setTestLevel("Easy");
      setQuestions([]);
    } catch (err) {
      toast.error("Failed to save quiz!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100">
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
        <Sidenavbar />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full p-6"
        >
          <div className="max-w-10xl w-full mx-auto bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">

            <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2 mb-6">
              <ClipboardList size={28} /> Create Online Quiz
            </h1>

            <div className="grid grid-cols-2 gap-6">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-5 shadow-sm"
              >
                <Input
                  type="text"
                  label="Test Title"
                  placeholder="Enter test title"
                  value={testTitle}
                  onChange={(e) => setTestTitle(e.target.value)}
                />

                <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-3 flex items-center gap-2">
                  <FileText size={20} /> Add Question
                </h2>

                <Input
                  label="Question"
                  type="text"
                  placeholder="Enter question"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                />

                <label className="block mt-4 font-semibold">Question Type</label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                >
                  <option value="mcq">Multiple Choice</option>
                  <option value="descriptive">Descriptive</option>
                  <option value="truefalse">True / False</option>
                </select>

                {questionType === "mcq" && (
                  <div className="mt-4">
                    <label className="font-semibold">Options</label>
                    {options.map((opt, idx) => (
                      <div key={idx} className="flex gap-2 my-2">
                        <input
                          className="border rounded-lg flex-1 px-3 py-1"
                          placeholder={`Option ${idx + 1}`}
                          value={opt}
                          onChange={(e) => updateOption(idx, e.target.value)}
                        />
                        <button
                          type="button"
                          className="bg-red-100 hover:bg-red-200 text-red-600 px-2 rounded-lg"
                          onClick={() => removeOption(idx)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="mt-2 flex gap-2 items-center bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded-lg"
                      onClick={addOption}
                    >
                      <PlusCircle size={18} /> Add Option
                    </button>
                  </div>
                )}

                {questionType === "descriptive" && (
                  <textarea
                    placeholder="Enter correct answer"
                    className="w-full border rounded-lg px-3 py-2 mt-4"
                    rows="3"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                  />
                )}

                {questionType === "truefalse" && (
                  <select
                    className="w-full border rounded px-3 py-2 mt-4"
                    value={isTrue}
                    onChange={(e) => setIsTrue(e.target.value === "true")}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                )}

                <label className="block mt-4 font-semibold">Test Level</label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={testLevel}
                  onChange={(e) => setTestLevel(e.target.value)}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>

                <Input
                  label="Duration (minutes)"
                  type="number"
                  placeholder="Enter duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4 font-semibold"
                  onClick={addQuestion}
                >
                  Add Question
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mt-3 font-semibold flex justify-center items-center gap-2"
                  onClick={saveQuiz}
                >
                  <Save size={20} /> Publish Quiz
                </motion.button>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-5 shadow-sm overflow-y-auto"
              >
                <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
                  <ListChecks size={24} /> Current Questions
                </h2>

                {questions.length === 0 ? (
                  <p className="text-gray-500">No questions added yet.</p>
                ) : (
                  questions.map((q) => (
                    <motion.div
                      key={q.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-xl shadow-md mb-3 border-l-4 border-blue-500"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-800">{q.text}</h3>
                        <button
                          className="bg-red-100 hover:bg-red-200 text-red-600 px-2 rounded-lg"
                          onClick={() => removeQuestion(q.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}

                <h2 className="text-xl font-semibold mt-6 text-green-700 flex items-center gap-2">
                  <CheckCircle2 size={22} /> Saved Quizzes
                </h2>

                {loading ? (
                  <p className="text-gray-500">Loading...</p>
                ) : savedQuizzes.length > 0 ? (
                  savedQuizzes.map((quiz) => (
                    <motion.div
                      key={quiz._id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 mt-3 rounded-xl shadow border-l-4 border-green-500 cursor-pointer"
                    >
                      <p className="font-bold">{quiz.testTitle}</p>
                      <p className="text-gray-600 text-sm">Level: {quiz.testLevel}</p>
                      <p className="text-gray-600 text-sm">
                        Questions: {quiz.questions?.length} | Duration: {quiz.duration} mins
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-500">No saved quizzes yet.</p>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Box>
      <Toaster />
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar } from "../components";
// import Sidenavbar from "../components/Sidenavbar";
// import { Box } from "@mui/material";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// // const exams = [
// //   {
// //     title: "Algebra Fundamentals",
// //     subject: "Mathematics",
// //     difficulty: "Medium",
// //     questions: 25,
// //     time: "60 Minutes",
// //     attempts: 3,
// //   },
// //   {
// //     title: "Physics - Motion and Forces",
// //     subject: "Science",
// //     difficulty: "Hard",
// //     questions: 30,
// //     time: "75 Minutes",
// //     attempts: 2,
// //   },
// //   {
// //     title: "World War II",
// //     subject: "History",
// //     difficulty: "Easy",
// //     questions: 20,
// //     time: "45 Minutes",
// //     attempts: 1,
// //   },
// // ];

// const results = [
//   {
//     title: "Geometry Basics",
//     subject: "Mathematics",
//     score: "92%",
//     correct: "92/100 correct",
//     date: "2024-01-15",
//     status: "Passed",
//   },
//   {
//     title: "Chemistry - Periodic Table",
//     subject: "Science",
//     score: "78%",
//     correct: "78/95 correct",
//     date: "2024-01-12",
//     status: "Passed",
//   },
// ];

// export default function StudentDashboard() {
//   const [exams, setExams] = useState([]);

//   useEffect(() => {
//     const getTests = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/quiz/getQuiz`
//         );
//         setExams(response.data.message);
//       } catch (error) {
//         toast.error("Failed to fetch tests");
//       }
//     };
//     getTests();
//   }, []);

//   return (
//     <div className="bg-gray-100">
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 1 }}>
//         <Sidenavbar />
//         <div className="w-full mx-6">
//           {/* <h1 className="text-4xl font-bold mb-6">Quiz Dashboard</h1> */}

//           <div className="flex flex-row gap-4 mb-8 w-full max-auto">
//             <div className="p-4 rounded-lg border-2 border-orange-300 hover:bg-orange-50 w-[250px]">
//               <p className="text-md text-gray-700 font-serif font-semibold">
//                 Total Exams
//               </p>
//               <p className="text-xl font-medium">12</p>
//             </div>
//             <div className="p-4 rounded-lg border-2 border-orange-300 hover:bg-orange-50 w-[250px]">
//               <p className="text-md text-gray-700 font-serif font-semibold mb-1">
//                 Completed
//               </p>
//               <div className="h-2 bg-gray-200 rounded-full">
//                 <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
//               </div>
//               <p className="mt-1 text-sm font-medium">8</p>
//             </div>
//             <div className="p-4  rounded-lg border-2 border-orange-300 hover:bg-orange-50 w-[250px]">
//               <p className="text-md text-gray-700 font-serif font-semibold mb-1">
//                 Average Score
//               </p>
//               <p className="text-xl font-medium">85%</p>
//             </div>
//             <div className="p-4 rounded-lg border-2 border-orange-300 hover:bg-orange-50 flex justify-between items-start w-[250px]">
//               <div>
//                 <p className="text-md text-gray-700 font-serif font-semibold mb-1">
//                   Last Score
//                 </p>
//                 <p className="text-xl font-medium">92%</p>
//               </div>
//               <Link to="/progressReport">
//                 <button className="text-sm text-blue-600 hover:underline">
//                   View Progress
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Available Quizzes</h2>
//               <div className="space-y-4">
//                 {exams.map((exam) => (
//                   <div
//                     key={exam._id}
//                     className="p-4 rounded-lg hover:shadow-sm hover:shadow-orange-600 transition shadow-sm shadow-orange-400"
//                   >
//                     <div className="flex justify-between items-center ">
//                       <div className="flex flex-col items-start">
//                         <h3 className="font-semibold">{exam.testTitle}</h3>
//                         <p
//                           className=" mt-2 text-sm font-serif bg-orange-200 text-center text-black rounded-md
//                      w-[200px]"
//                         >
//                           {new Date(exam.createdAt).toLocaleDateString(
//                             "en-IN",
//                             {
//                               weekday: "short",
//                               year: "numeric",
//                               month: "short",
//                               day: "numeric",
//                             }
//                           )}
//                         </p>
//                       </div>
//                       <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600">
//                         {exam.testLevel}
//                       </span>
//                     </div>
//                     <div className="mt-2 text-sm text-gray-500">
//                       {exam.questions.length} Questions · {exam.duration} mins
//                     </div>
//                     {/* <div className="mt-1 text-sm text-gray-500">
//                       Attempts: {exam.attempts}
//                     </div> */}
//                     <div className="mt-3 text-right">
//                       <Link to={`/examPage/${exam._id}`}>
//                         <button className="px-4 py-1.5 text-sm bg-red-600 text-white rounded hover:opacity-90">
//                           Start Quiz
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
//               <div className="space-y-4">
//                 {results.map((result, i) => (
//                   <div
//                     key={i}
//                     className="p-4 rounded-lg hover:shadow-sm shadow-sm shadow-orange-400 
//               transition hover:shadow-orange-600"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="font-semibold">{result.title}</h3>
//                         <p className="text-sm text-gray-500">
//                           {result.subject}
//                         </p>
//                         <p className="text-sm text-gray-700 mt-1">
//                           {result.score}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {result.correct}
//                         </p>
//                       </div>
//                       <span className="text-xs px-2 py-1 rounded-full bg-black text-white">
//                         {result.status}
//                       </span>
//                     </div>
//                     <div className="mt-3 text-right">
//                       <p className="text-xs text-gray-400 mb-1">
//                         {result.date}
//                       </p>
//                       <button className="text-sm text-blue-600 hover:underline">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Box>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import { GraduationCap, ListChecks, BarChart3, Trophy, Timer } from "lucide-react";

const results = [
  {
    title: "Geometry Basics",
    subject: "Mathematics",
    score: "92%",
    correct: "92/100 correct",
    date: "2024-01-15",
    status: "Passed",
  },
  {
    title: "Chemistry - Periodic Table",
    subject: "Science",
    score: "78%",
    correct: "78/95 correct",
    date: "2024-01-12",
    status: "Passed",
  },
];

export default function StudentDashboard() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getTests = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/quiz/getQuiz`
        );
        setExams(response.data.message);
      } catch (error) {
        toast.error("Failed to fetch tests");
      }
    };
    getTests();
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 1 }}>
        <Sidenavbar />

        <div className="w-full px-6 py-2">
          {/* TOP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 bg-white rounded-xl shadow-md border border-blue-300 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-600 font-semibold">Total Exams</p>
                <p className="text-2xl font-bold text-blue-700 mt-1">12</p>
              </div>
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 bg-white rounded-xl shadow-md border border-blue-300"
            >
              <p className="text-sm text-gray-600 font-semibold">Completed</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div className="h-2 rounded-full bg-blue-600 w-2/3"></div>
              </div>
              <p className="mt-2 text-lg font-bold text-blue-700">8</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 bg-white rounded-xl shadow-md border border-blue-300 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-600 font-semibold">Average Score</p>
                <p className="text-2xl font-bold text-blue-700 mt-1">85%</p>
              </div>
              <BarChart3 className="w-10 h-10 text-blue-600" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 bg-white rounded-xl shadow-md border border-blue-300 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-600 font-semibold">Last Score</p>
                <p className="text-2xl font-bold text-blue-700">92%</p>
              </div>
              <Link to="/progressReport">
                <button className="text-blue-600 text-sm underline">View Progress</button>
              </Link>
            </motion.div>
          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AVAILABLE QUIZZES */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <ListChecks className="w-6 h-6" /> Available Quizzes
              </h2>

              <div className="space-y-4">
                {exams.map((exam) => (
                  <motion.div
                    key={exam._id}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-400 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{exam.testTitle}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {new Date(exam.createdAt).toLocaleDateString("en-IN", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-blue-200 text-blue-700 rounded-full">
                        {exam.testLevel}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-700 flex items-center gap-2">
                      <Timer className="w-4 h-4" /> {exam.questions.length} Questions · {exam.duration} mins
                    </p>

                    <div className="mt-3 text-right">
                      <Link to={`/examPage/${exam._id}`}>
                        <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          Start Quiz
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RECENT RESULTS */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" /> Recent Results
              </h2>

              <div className="space-y-4">
                {results.map((result, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-400 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{result.title}</h3>
                        <p className="text-sm text-gray-500">{result.subject}</p>
                        <p className="text-lg font-bold text-blue-700 mt-1">{result.score}</p>
                        <p className="text-xs text-gray-500">{result.correct}</p>
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
                        {result.status}
                      </span>
                    </div>

                    <div className="mt-3 text-right">
                      <p className="text-xs text-gray-400">{result.date}</p>
                      <button className="text-sm text-blue-600 hover:underline">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Toaster />
    </div>
  );
}

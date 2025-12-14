// import React from "react";
// // import { Navbar } from "../../../src/components/index"
// import { Navbar } from "../components";
// import Sidenavbar from "../components/Sidenavbar"
// import Box from "@mui/material/Box";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
// } from "recharts";

// // Sample data
// const gradeData = [
//     { term: "Math", grade: 78 },
//     { term: "English", grade: 84 },
//     { term: "Science", grade: 81 },
//     { term: "Physics", grade: 90 },
//     { term: "Chemistry", grade: 90 },
// ];

// const subjects = [
//     { subject: "Math", grade: "A", avg: "B+", comment: "Excellent participation" },
//     { subject: "English", grade: "B", avg: "B", comment: "Needs improvement" },
//     { subject: "Science", grade: "A-", avg: "B+", comment: "Very good understanding" },
//     { subject: "Physics", grade: "B", avg: "B+", comment: "Needs improvement" },
//     { subject: "Chemistry", grade: "A", avg: "B+", comment: "Excellent participation" },
// ];

// export default function PerformanceOverview() {
//     return (
//         <>
//             <Navbar />
//             <Box height={75} />
//             <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
//                 <Sidenavbar />
//                 <div className="w-full mx-auto ">

//                     <h2 className="text-3xl font-bold mb-6 text-gray-800">Performance Overview :</h2>

//                     {/* Academic Summary */}
//                     <div className="bg-white shadow-md rounded-lg p-4 mb-6 border-2 hover:border-orange-500">
//                         <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-700">Academic Summary</h3>
//                         <div className="grid md:grid-cols-3 gap-4 ">
//                             {subjects.map((s, i) => (
//                                 <div key={i} className="rounded-md p-4 bg-white border-2 border-orange-300 hover:bg-orange-100 ">
//                                     <h4 className="font-semibold text-xl text-gray-800 mb-1">{s.subject}</h4>
//                                     <p className="text-sm text-gray-600">Grade: {s.grade}</p>
//                                     <p className="text-sm text-gray-600">Class Avg: {s.avg}</p>
//                                     <p className="text-sm text-gray-600">Note: {s.comment}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Attendance Summary */}
//                     <div className="bg-white shadow-md rounded-lg p-4 mb-6 border-2 hover:border-orange-500">
//                         <h3 className="text-2xl font-semibold font-serif mb-6 text-gray-700">Attendance Summary</h3>
//                         <div className="flex flex-col md:flex-row md:justify-between text-gray-700">
//                             <p>Days Present: <span className="text-white bg-green-700 px-3 py-2 rounded-lg font-medium">170</span></p>
//                             <p>Days Absent: <span className="text-white bg-red-700 px-3 py-2 rounded-lg font-medium">5</span></p>
//                             <p>Attendance: <span className="text-white bg-blue-700 px-3 py-2 rounded-lg  font-medium">97%</span></p>
//                         </div>
//                     </div>

//                     {/* Behavior Summary */}
//                     <div className="bg-white shadow-md rounded-lg p-4 mb-6 border-2 hover:border-orange-500">
//                         <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-700">Behavior Summary</h3>
//                         <p className="text-gray-700">🏅 Recognized as "Student of the Month" in March.</p>
//                         <p className="text-gray-700">✅ No disciplinary actions recorded.</p>
//                     </div>

//                     {/* Grade Trend Chart */}
//                     <div className="bg-white shadow-md rounded-lg p-4 border-2 hover:border-orange-500">
//                         <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-700">Grade Trend</h3>
//                         <div className="w-full h-64">
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <LineChart data={gradeData} >
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="term" />
//                                     <YAxis />
//                                     <Tooltip />
//                                     <Line type="monotone" dataKey="grade" stroke="#3b82f6" strokeWidth={2} />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
//                 </div>
//             </Box>
//         </>
//     );
// }





import React from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import Box from "@mui/material/Box";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FaBookOpen, FaCalendarCheck, FaUserCheck } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

// Sample data
const gradeData = [
  { term: "Math", grade: 78 },
  { term: "English", grade: 84 },
  { term: "Science", grade: 81 },
  { term: "Physics", grade: 90 },
  { term: "Chemistry", grade: 90 },
];

const subjects = [
  { subject: "Math", grade: "A", avg: "B+", comment: "Excellent participation" },
  { subject: "English", grade: "B", avg: "B", comment: "Needs improvement" },
  { subject: "Science", grade: "A-", avg: "B+", comment: "Very good understanding" },
  { subject: "Physics", grade: "B", avg: "B+", comment: "Needs improvement" },
  { subject: "Chemistry", grade: "A", avg: "B+", comment: "Excellent participation" },
];

export default function PerformanceOverview() {
  return (
    <>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
        <Sidenavbar />
        <div className="w-full mx-auto p-4">

          <h2 className="text-3xl font-bold mb-6 text-blue-700 font-serif animate-fadeIn">
            Performance Overview
          </h2>

          {/* Academic Summary */}
          <div className="bg-white shadow-xl rounded-xl p-6 mb-6 border border-blue-200 hover:shadow-blue-300 
          transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-800 flex items-center gap-2">
              <FaBookOpen className="text-blue-600" /> Academic Summary
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {subjects.map((s, i) => (
                <div
                  key={i}
                  className="rounded-lg p-4 bg-gray-50 border border-gray-200 shadow-sm 
                  hover:shadow-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xl text-blue-700 mb-1">{s.subject}</h4>
                  <p className="text-sm text-gray-700">Grade: <b>{s.grade}</b></p>
                  <p className="text-sm text-gray-700">Class Avg: {s.avg}</p>
                  <p className="text-sm text-gray-600 italic">"{s.comment}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="bg-white shadow-xl rounded-xl p-6 mb-6 border border-blue-200 hover:shadow-blue-300 
          transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold font-serif mb-6 text-gray-800 flex items-center gap-2">
              <FaCalendarCheck className="text-blue-600" /> Attendance Summary
            </h3>

            <div className="flex flex-col md:flex-row md:justify-between text-gray-800 gap-4">
              <p className="font-medium">
                Days Present:
                <span className="ml-2 text-white bg-green-600 px-3 py-1 rounded-md shadow-md">170</span>
              </p>
              <p className="font-medium">
                Days Absent:
                <span className="ml-2 text-white bg-red-600 px-3 py-1 rounded-md shadow-md">5</span>
              </p>
              <p className="font-medium">
                Attendance:
                <span className="ml-2 text-white bg-blue-600 px-3 py-1 rounded-md shadow-md">97%</span>
              </p>
            </div>
          </div>

          {/* Behavior Summary */}
          <div className="bg-white shadow-xl rounded-xl p-6 mb-6 border border-blue-200 hover:shadow-blue-300 
          transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-800 flex items-center gap-2">
              <FaUserCheck className="text-blue-600" /> Behavior Summary
            </h3>

            <p className="text-gray-700 flex items-center gap-2">
              <MdEmojiEvents className="text-yellow-600 text-xl" /> Recognized as
              <b className="text-blue-700">"Student of the Month"</b> in March.
            </p>
            <p className="text-gray-700 mt-2">✔ No disciplinary actions recorded.</p>
          </div>

          {/* Grade Trend Chart */}
          <div className="bg-white shadow-xl rounded-xl p-6 border border-blue-200 hover:shadow-blue-300 
          transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-800 flex items-center gap-2">
              📈 Grade Trend
            </h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={gradeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="term" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="grade" stroke="#2563eb" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </Box>
    </>
  );
}



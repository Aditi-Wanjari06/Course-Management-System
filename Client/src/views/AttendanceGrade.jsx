// import React, { useState } from "react";
// // import { Navbar } from "../../../src/components/index";
// import { Navbar } from "../components";
// // import Sidenavbar from "../../../src/components/Sidenavbar";
// import Sidenavbar from "../components/Sidenavbar";
// import Box from "@mui/material/Box";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// const attendanceData = {
//   totalDays: 200,
//   presentDays: 185,
//   absentDays: 10,
//   lateDays: 5,
// };

// const chartData = [
//   { name: "Present", value: attendanceData.presentDays },
//   { name: "Absent", value: attendanceData.absentDays },
//   { name: "Late", value: attendanceData.lateDays },
// ];

// const grades = [
//   { subject: "Mathematics", midterm: 88, final: 91 },
//   { subject: "English", midterm: 82, final: 85 },
//   { subject: "Science", midterm: 90, final: 87 },
//   { subject: "History", midterm: 76, final: 80 },
//   { subject: "Social Science", midterm: 83, final: 86 },
//   { subject: "Physics", midterm: 86, final: 88 },
//   { subject: "Cgemistry", midterm: 72, final: 80 },
// ];

// const COLORS = ["#4ade80", "#f87171", "#facc15"]; // Tailwind: green, red, yellow

// function AttendanceGrade() {
//   const [activeTab, setActiveTab] = useState("attendance");
//   const attendancePercent = (
//     (attendanceData.presentDays / attendanceData.totalDays) *
//     100
//   ).toFixed(1);

//   return (
//     <>
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
//         <Sidenavbar />

//         <div className="flex flex-col gap-6 w-full mx-auto p-6">
//           {/* Toggle Buttons */}
//           <div className="flex flex-row justify-center items-center">
//             <button
//               onClick={() => setActiveTab("attendance")}
//               className={`px-6 py-3 text-2xl m-4 font-semibold rounded-md border-2 ${
//                 activeTab === "attendance"
//                   ? "bg-red-100 border-red-400"
//                   : "border-black hover:border-red-300 hover:bg-red-50"
//               }`}
//             >
//               Attendance
//             </button>

//             <button
//               onClick={() => setActiveTab("grade")}
//               className={`px-6 py-3 text-2xl m-4 font-semibold rounded-md border-2 ${
//                 activeTab === "grade"
//                   ? "bg-red-100 border-red-400"
//                   : "border-black hover:border-red-300 hover:bg-red-50"
//               }`}
//             >
//               Grade
//             </button>
//           </div>

//           {/* Attendance UI */}
//           {activeTab === "attendance" && (
//             <>
//               <div className="bg-white p-6 rounded-xl shadow-md w-full">
//                 <h2 className="text-xl font-semibold mb-4">
//                   Attendance Overview
//                 </h2>

//                 <div className="mb-4">
//                   <p className="text-gray-700">
//                     Total Days: {attendanceData.totalDays}
//                   </p>
//                   <p className="text-green-700">
//                     Present: {attendanceData.presentDays}
//                   </p>
//                   <p className="text-red-600">
//                     Absent: {attendanceData.absentDays}
//                   </p>
//                   <p className="text-yellow-600">
//                     Late: {attendanceData.lateDays}
//                   </p>
//                 </div>

//                 <div className="w-full bg-gray-200 rounded-full h-4">
//                   <div
//                     className="bg-green-500 h-4 rounded-full transition-all duration-300"
//                     style={{ width:`${attendancePercent}%` }}
//                   />
//                 </div>

//                 <p className="mt-2 text-sm text-gray-600">
//                   Attendance Rate:{" "}
//                   <span className="font-medium">{attendancePercent}%</span>
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-md w-full">
//                 <h2 className="text-xl font-semibold mb-4">Attendance Graph</h2>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={chartData}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="value">
//                       {chartData.map((entry, index) => (
//                         <Cell key={index} fill={COLORS[index]} />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {/* Grade UI Placeholder */}
//           {activeTab === "grade" && (
//             <div className="bg-white p-6 rounded-xl shadow-md w-full max-auto h-full mt-6">
//               <h2 className="text-2xl font-semibold mb-4 p-6">Grade Overview :</h2>

//               <div className="overflow-x-auto ">
//                 <table className="min-w-full text-sm text-left text-gray-700">
//                   <thead className="bg-gray-200  text-center ">
//                     <tr>
//                       <th className="px-4 py-5">Subject</th>
//                       <th className="px-4 py-2">Midterm (%)</th>
//                       <th className="px-4 py-2">Final (%)</th>
//                       <th className="px-4 py-2">Average (%)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {grades.map((g, index) => {
//                       const avg = ((g.midterm + g.final) / 2).toFixed(1);
//                       return (
//                         <tr key={index} className="border-b text-center hover:bg-gray-100">
//                           <td className="px-4 py-3">{g.subject}</td>
//                           <td className="px-4 py-3">{g.midterm}</td>
//                           <td className="px-4 py-3">{g.final}</td>
//                           <td className="px-4 py-3">{avg}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </Box>
//     </>
//   );
// }

// export default AttendanceGrade;




import React, { useState } from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import Box from "@mui/material/Box";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FaUserCheck, FaUserTimes, FaClock, FaChartBar, FaCheckCircle, FaTable } from "react-icons/fa";

const attendanceData = {
  totalDays: 200,
  presentDays: 185,
  absentDays: 10,
  lateDays: 5,
};

const chartData = [
  { name: "Present", value: attendanceData.presentDays },
  { name: "Absent", value: attendanceData.absentDays },
  { name: "Late", value: attendanceData.lateDays },
];

const grades = [
  { subject: "Mathematics", midterm: 88, final: 91 },
  { subject: "English", midterm: 82, final: 85 },
  { subject: "Science", midterm: 90, final: 87 },
  { subject: "History", midterm: 76, final: 80 },
  { subject: "Social Science", midterm: 83, final: 86 },
  { subject: "Physics", midterm: 86, final: 88 },
  { subject: "Chemistry", midterm: 72, final: 80 },
];

const COLORS = ["#22c55e", "#ef4444", "#eab308"]; 

export default function AttendanceGrade() {
  const [activeTab, setActiveTab] = useState("attendance");
  const attendancePercent = (
    (attendanceData.presentDays / attendanceData.totalDays) *
    100
  ).toFixed(1);

  return (
    <>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
        <Sidenavbar />

        <div className="flex flex-col gap-6 w-full mx-auto p-6 transition-all duration-500">

          {/* Toggle Buttons */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => setActiveTab("attendance")}
              className={`flex items-center gap-2 px-6 py-3 shadow-md text-xl font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "attendance"
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white border border-blue-300 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FaCheckCircle /> Attendance
            </button>

            <button
              onClick={() => setActiveTab("grade")}
              className={`flex items-center gap-2 px-6 py-3 shadow-md text-xl font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "grade"
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white border border-blue-300 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FaTable /> Grade
            </button>
          </div>

          {/* Attendance Section */}
          {activeTab === "attendance" && (
            <>
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaUserCheck className="text-blue-600" /> Attendance Overview
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <p className="font-medium text-gray-700">Total Days: <span className="text-gray-900">{attendanceData.totalDays}</span></p>
                  <p className="text-green-700 font-medium flex gap-2 items-center">
                    <FaUserCheck /> Present: {attendanceData.presentDays}
                  </p>
                  <p className="text-red-600 font-medium flex gap-2 items-center">
                    <FaUserTimes /> Absent: {attendanceData.absentDays}
                  </p>
                  <p className="text-yellow-600 font-medium flex gap-2 items-center">
                    <FaClock /> Late: {attendanceData.lateDays}
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-700"
                    style={{ width: `${attendancePercent}%` }}
                  />
                </div>

                <p className="mt-2 text-gray-700 font-medium">
                  Attendance Rate: <span className="text-blue-600">{attendancePercent}%</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaChartBar className="text-blue-600" /> Attendance Graph
                </h2>

                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} className="shadow-md">
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {/* Grade Overview */}
          {activeTab === "grade" && (
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                <FaTable className="text-blue-600" /> Grade Overview
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border text-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white text-center">
                    <tr>
                      <th className="px-4 py-4">Subject</th>
                      <th className="px-4 py-4">Midterm (%)</th>
                      <th className="px-4 py-4">Final (%)</th>
                      <th className="px-4 py-4">Average (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((g, index) => {
                      const avg = ((g.midterm + g.final) / 2).toFixed(1);
                      return (
                        <tr
                          key={index}
                          className="border-b text-center hover:bg-blue-50 transition"
                        >
                          <td className="py-3">{g.subject}</td>
                          <td>{g.midterm}</td>
                          <td>{g.final}</td>
                          <td className="font-semibold">{avg}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Box>
    </>
  );
}

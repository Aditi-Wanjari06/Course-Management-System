// import React from 'react';
// // import { Navbar } from '../../../src/components/index';
// // import Sidenavbar from '../../../src/components/Sidenavbar';
// import { Navbar } from '../components';
// import Sidenavbar from '../components/Sidenavbar';
// import { Box } from '@mui/material';

// const ScheduleAndAnnouncements = () => {
//   const schedule = [
//     { time: "09:00 AM - 10:00 AM", subject: "Mathematics", teacher: "Mrs. Sharma" },
//     { time: "10:15 AM - 11:15 AM", subject: "Science", teacher: "Mr. Verma" },
//     { time: "11:30 AM - 12:30 PM", subject: "English", teacher: "Ms. Roy" },
//     { time: "11:30 AM - 12:30 PM", subject: "English", teacher: "Ms. Roy" },
//     { time: "11:30 AM - 12:30 PM", subject: "English", teacher: "Ms. Roy" },
//     { time: "11:30 AM - 12:30 PM", subject: "English", teacher: "Ms. Roy" },
//   ];

//   const announcements = [
//     { date: "2025-06-19", message: "Parent-teacher meeting scheduled for June 25." },
//     { date: "2025-06-18", message: "Science project submission deadline is June 22." },
//     { date: "2025-06-17", message: "Math Olympiad registration closes June 20." },
//     { date: "2025-06-17", message: "Math Olympiad registration closes June 20." },
//     { date: "2025-06-17", message: "Math Olympiad registration closes June 20." },
//     { date: "2025-06-17", message: "Math Olympiad registration closes June 20." },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex" }}>
//         <Sidenavbar />
//         <div className="p-6 w-full mx-auto">
//           <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Class Schedule & Events</h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Class Schedule */}
//             <div className="bg-white rounded-2xl shadow-lg px-6 py-3 border-2 border-orange-300">
//               <h2 className="text-2xl font-semibold mb-8 py-4 px-3 border-b-2 text-orange-600">
//                 Today's Class Schedule</h2>

//               <ul className="space-y-4 ">
//                 {schedule.map((item, index) => (
//                   <li key={index} className="border-l-4 border-blue-500 pl-4 flex flex-row justify-between 
//                   px-2 py-1 hover:bg-orange-50 rounded-r-lg ">
//                     <div>
//                     <p className="text-xl font-semibold font-serif">{item.subject} </p>
//                     <p className="text-sm text-gray-600">by- {item.teacher} </p>
//                     </div>
//                     <p className="text-gray-700 font-medium">{item.time}</p>

//                   </li>
//                 ))}
//               </ul>

//             </div>

//             {/* Announcements */}
//             <div className="bg-white rounded-2xl shadow-lg px-6 py-3 border-2 border-orange-300">
//               <h2 className="text-2xl font-semibold mb-8 py-4 px-3 border-b-2 text-orange-600">Events</h2>
//               <ul className="space-y-4">
//                 {announcements.map((item, index) => (
//                   <li key={index} className=" border-l-4 border-blue-400 px-2 py-1 hover:bg-orange-50 rounded-r-lg">
//                     <p className="text-sm text-blue-800 font-semibold">{item.date}</p>
//                     <p className="text-gray-700">{item.message}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default ScheduleAndAnnouncements;



import React from 'react';
import { Navbar } from '../components';
import Sidenavbar from '../components/Sidenavbar';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBullhorn, FaChalkboardTeacher, FaClock } from "react-icons/fa";

const ScheduleAndAnnouncements = () => {
  const schedule = [
    { time: "09:00 AM - 10:00 AM", subject: "Mathematics", teacher: "Mrs. Sharma" },
    { time: "10:15 AM - 11:15 AM", subject: "Science", teacher: "Mr. Verma" },
    { time: "11:30 AM - 12:30 PM", subject: "English", teacher: "Ms. Roy" },
    { time: "01:00 PM - 02:00 PM", subject: "Computer", teacher: "Mr. Singh" },
    { time: "02:15 PM - 03:15 PM", subject: "History", teacher: "Ms. Das" },
  ];

  const announcements = [
    { date: "2025-06-19", message: "Parent-teacher meeting scheduled for June 25." },
    { date: "2025-06-18", message: "Science project submission deadline is June 22." },
    { date: "2025-06-17", message: "Math Olympiad registration closes June 20." },
    { date: "2025-06-16", message: "Sports Day practice from next week." },
  ];

  return (
    <div>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex" }}>
        <Sidenavbar />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 w-full mx-auto"
        >
          <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
            <FaCalendarAlt className="inline-block mr-3 text-blue-600" />
            Class Schedule & Events
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Class Schedule */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-200"
            >
              <h2 className="text-2xl flex items-center gap-2 font-bold mb-6 py-3 px-3 border-b text-blue-700">
                <FaChalkboardTeacher className="text-blue-600" /> Today's Class Schedule
              </h2>

              <ul className="space-y-4">
                {schedule.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-blue-600 pl-4 flex justify-between px-3 py-2 
                    bg-gray-100 rounded-md hover:shadow-md hover:bg-blue-50 duration-200 cursor-pointer"
                  >
                    <div>
                      <p className="text-lg font-semibold">{item.subject}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <FaChalkboardTeacher /> {item.teacher}
                      </p>
                    </div>
                    <p className="text-gray-800 font-medium flex items-center gap-2">
                      <FaClock /> {item.time}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Announcements */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-200"
            >
              <h2 className="text-2xl flex items-center gap-2 font-bold mb-6 py-3 px-3 border-b text-blue-700">
                <FaBullhorn className="text-blue-600" /> Important Announcements
              </h2>

              <ul className="space-y-4">
                {announcements.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-blue-500 px-4 py-2 rounded-md bg-gray-100
                    hover:bg-blue-50 hover:shadow-md duration-200 cursor-pointer"
                  >
                    <p className="text-sm text-blue-800 font-bold">{item.date}</p>
                    <p className="text-gray-700">{item.message}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Box>
    </div>
  );
};

export default ScheduleAndAnnouncements;

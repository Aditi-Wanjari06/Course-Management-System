import React from 'react';
import { Navbar } from '../components';
import Sidenavbar from '../components/Sidenavbar';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBullhorn, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import toast,{Toaster} from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';

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

const [newSchedule,setNewSchedule] = useState([])

useEffect(()=>{
  const getNewSchedule =async ()=>{
    try {
      const response = await axios.get( `${import.meta.env.VITE_API_URL}/api/v1/schedule/getSchedule`)

      setNewSchedule(response.data.message);
      
    } catch (error) {
        toast.error("Failed to load Schedules");
    }

  }
  getNewSchedule();
},[])

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
                {newSchedule.map((item, index) => (
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
      <Toaster/>
      
    </div>
  );
};

export default ScheduleAndAnnouncements;

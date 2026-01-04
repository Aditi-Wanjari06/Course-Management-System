import React from 'react';
import { Navbar } from '../components';
import Sidenavbar from '../components/Sidenavbar';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBullhorn, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import toast,{Toaster} from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ScheduleAndAnnouncements = () => {
const [newSchedule,setNewSchedule] = useState([])
const [newAnnouncement, setNewAnnouncement] = useState([])

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

useEffect(()=>{
  const getNewAnnouncement =async ()=>{
    try {
      const response = await axios.get( `${import.meta.env.VITE_API_URL}/api/v1/event/getAnnouncement`)
      setNewAnnouncement(response.data.message);
      
    } catch (error) {
        toast.error("Failed to load Announcements");
    }

  }
  getNewAnnouncement();
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
          {/* <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
            <FaCalendarAlt className="inline-block mr-3 text-blue-600" />
            Class Schedule & Events
          </h1> */}

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
                    <div className='block items-center'>
                      <p className="text-sm text-blue-800 font-bold text-end mb-2">{new Date(item.date).toLocaleDateString()}</p>
                    <p className="text-gray-800 font-medium flex items-center gap-2 text-sm">
                      <FaClock /> {item.time}
                    </p>
                    </div>
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
                {newAnnouncement.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-blue-500 px-4 py-2 rounded-md bg-gray-100
                    hover:bg-blue-50 hover:shadow-md duration-200 cursor-pointer"
                  >
                    <p className="text-sm text-blue-800 font-bold">{new Date(item.eventDate).toLocaleDateString()}</p>
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

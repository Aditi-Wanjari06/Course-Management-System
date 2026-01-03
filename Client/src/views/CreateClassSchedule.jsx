import React, { useState } from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  Clock,
  BookOpen,
  User,
  CalendarDays,
} from "lucide-react";
import {Input} from "../components/index.js"
import axios from "axios";
import toast ,{Toaster} from "react-hot-toast"

export default function CreateClassSchedule() {
  const [form, setForm] = useState({
    subject: "",
    teacher: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = async(e)=>{
 setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const payload = {
        subject :form.subject,
        teacher:form.teacher,
        date:form.date,
        time: `${form.startTime} - ${form.endTime}`
    };

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/schedule/createSchedule`,payload
        );
        console.log("Schedule created",response.data);
        
        
    } catch (error) {
        // toast.error(error.response?.data?.message || "Failed. Please try again.");
    }
  }

   

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Box height={75} />

      <Box sx={{ display: "flex" }}>
        <Sidenavbar />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          {/* Header */}
          <h1 className="text-3xl font-bold text-blue-700 mb-8 flex items-center gap-2">
            <CalendarDays size={30} /> Create Class Schedule
          </h1>

          {/* Form */}
          <form className="space-y-6">
            <Input
              icon={<BookOpen className="text-blue-600" />}
              label="Subject Name"
              name="subject"
              value={form.subject}
              onChange={handleInputChange}
              placeholder="e.g. Mathematics"
            />

            <Input
              icon={<User className="text-blue-600" />}
              label="Teacher Name"
              name="teacher"
              value={form.teacher}
              onChange={handleInputChange}
              placeholder="e.g. Mrs. Sharma"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                icon={<CalendarDays className="text-blue-600" />}
                label="Date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleInputChange}
              />

              <Input
                icon={<Clock className="text-blue-600" />}
                label="Start Time"
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleInputChange}
              />

              <Input
                icon={<Clock className="text-blue-600" />}
                label="End Time"
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleInputChange}
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Save Schedule
            </motion.button>
          </form>
        </motion.div>
      </Box>
      <Toaster/>
    </div>
  );
}


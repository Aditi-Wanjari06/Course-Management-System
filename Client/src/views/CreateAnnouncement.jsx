import React, { useState } from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Megaphone, CalendarDays } from "lucide-react";
import { Input } from "../components/index.js";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateAnnouncement() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    message: "",
    eventDate: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      message: form.message,
      eventDate: form.eventDate,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/event/createAnnouncement`,
        payload
      );

      console.log("Event success",response.data.success )
      if (response.data.success) {
        toast.success("Announcement Added!!");

        setTimeout(() => {
          navigate("/classEvents");
        }, 1200);
      } else {
        toast.error(response.data.message || "Failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed. Please try again.");
    }
  };

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
            <Megaphone size={30} /> Create Announcement
          </h1>

          {/* Form */}
          <form className="space-y-6">
            <div className="w-full">
              <label className="inline-block mb-1 pl-1 font-semibold font-serif text-md text-blue-800">
                Announcement Message
              </label>

              <div className="flex items-start gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <Megaphone className="text-blue-600 mt-1" />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Enter announcement message"
                  rows={4}
                  className="w-full outline-none resize-none bg-transparent"
                />
              </div>
            </div>

            <Input
              icon={<CalendarDays className="text-blue-600" />}
              label="Event Date"
              type="date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleInputChange}
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Add Announcement
            </motion.button>
          </form>
        </motion.div>
      </Box>

      <Toaster />
    </div>
  );
}

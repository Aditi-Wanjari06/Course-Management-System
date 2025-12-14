// // src/pages/UpdateCourse.jsx
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";
// import Navbar from "./Navbar";
// import Sidenavbar from "./Sidenavbar";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// function UpdateCourse() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const course = state?.course;

//   const [form, setForm] = useState({
//     title: course?.title || "",
//     description: course?.description || "",
//     // progress: course?.progress || 0,
//     // image: course?.image || '',
//     createdBy: course?.createdBy || "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_URL}/api/v1/courses/${course._id}`,
//         form
//       );
//       console.log(response);

//       toast.success("Course updated successfully!");
//       navigate("/course"); // go back to courses page
//     } catch (error) {
//       toast.error("Failed to update course");
//       console.error("Error updating course:", err);
//     }

//     // const existingCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     // const updatedCourses = existingCourses.map((c) =>
//     //   c.id === course.id ? { ...c, ...form } : c
//     // );
//     // localStorage.setItem("course", JSON.stringify(updatedCourses));
//     // navigate("/course");
//   };

//   return (
//     <div>
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
//         <Sidenavbar />
//         <div className="p-6 max-w-xl mx-auto">
//           <h2 className="text-3xl font-bold mb-4">Edit Course</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Title */}
//             <input
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               placeholder="Course Title"
//               className="w-full p-2 border rounded"
//               required
//             />
//             {/* Description */}
//             <input
//               type="text"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full p-2 border rounded"
//               required
//             />

//             {/* createdBy */}
//             <input
//               type="text"
//               name="createdBy"
//               value={form.createdBy}
//               onChange={handleChange}
//               placeholder="CreatedBy"
//               className="w-full p-2 border rounded"
//               required
//             />

//             {/* Progress */}
//             {/* <input
//           type="number"
//           name="progress"
//           value={form.progress}
//           onChange={handleChange}
//           min={0}
//           max={100}
//           className="w-full p-2 border rounded"
//           required
//         /> */}

//             {/* Image URL */}
//             {/* <input
//           type="text"
//           name="image"
//           value={form.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="w-full p-2 border rounded"
//           required
//         /> */}

//             {/* Live Preview */}
//             {/* {form.image && (
//           <div className="mt-4">
//             <p className="mb-1 text-gray-700">Preview:</p>
//             <img
//               src={form.image}
//               alt="Course Preview"
//               className="w-full h-48 object-cover rounded border"
//             />
//           </div>
//         )} */}

//             {/* Submit */}
//             <button
//               type="submit"
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Update Course
//             </button>
//           </form>
//         </div>
//       </Box>
//       <Toaster />
//     </div>
//   );
// }

// export default UpdateCourse;



// src/pages/UpdateCourse.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Pencil, User, BookText } from "lucide-react";

function UpdateCourse() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const course = state?.course;

  const [form, setForm] = useState({
    title: course?.title || "",
    description: course?.description || "",
    createdBy: course?.createdBy || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/courses/${course._id}`,
        form
      );
      console.log(response);
      toast.success("Course updated successfully!");
      navigate("/course");
    } catch (error) {
      toast.error("Failed to update course");
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
        <Sidenavbar />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 max-w-3xl w-full mx-auto my-7 bg-white shadow-xl rounded-2xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2">
            <Pencil className="w-6 h-6" />
            Edit Course
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium text-gray-600 flex items-center gap-1">
                <BookText className="w-4 h-4" /> Course Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter course title"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:shadow-md"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium text-gray-600">Description</label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:shadow-md"
                required
              />
            </div>

            {/* Created By */}
            <div>
              <label className="block mb-1 font-medium text-gray-600 flex items-center gap-1">
                <User className="w-4 h-4" /> Created By
              </label>
              <input
                type="text"
                name="createdBy"
                value={form.createdBy}
                onChange={handleChange}
                placeholder="Created by"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:shadow-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.20 }}
              type="submit"
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl shadow-lg font-semibold tracking-wide transition-all"
            >
              Update Course
            </button>
          </form>
        </motion.div>
      </Box>
      <Toaster />
    </div>
  );
}

export default UpdateCourse;


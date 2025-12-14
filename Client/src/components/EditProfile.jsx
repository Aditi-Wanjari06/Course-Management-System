import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const profile = state?.user || {}; // if you passed user via navigate()

  const [form, setForm] = useState({
    name: profile?.name || "",
    email: profile?.email || "",
    role: profile?.role || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      // console.log("AT :",userData.accessToken);

      const userId = userData?.user?._id; // adjust based on your storage
      const token = userData?.accessToken;

      if (!userId || !token) {
        toast.error("User not logged in");
        return;
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/users/update/${userId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.message);

      if (response.data?.success) {
        toast.success("Profile updated successfully!");

        // ✅ Update localStorage with new user details
        const updatedUser = {
          ...userData,
          user: {
            ...userData.user,
            name: response.data.message.name,
            email: response.data.message.email,
            // avatar: response.data.message.avatar, // uncomment when avatar added
          },
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        setTimeout(() => navigate("/profile"), 1000);
      } else {
        toast.error(response.data?.message || "Update failed");
      }
    } catch (err) {
      toast.error("Update failed");
      console.error("Profile updating failed!!", err);
    }
  };

  return (
    <div>
        <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}></Box>
    <div className="max-w-lg mx-auto mt-10 p-6 shadow-md rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={form.role}
          disabled
          className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
      <Toaster />
    </div>
    <Box/>
    </div>
  );
}

export default Profile;

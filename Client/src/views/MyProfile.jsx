import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

function MyProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));

        if (userData && userData.user) {
          setUser(userData.user);
        } else {
          toast.error("No user data found");
          navigate("/login"); // optional redirect if user not logged in
        }
      } catch (error) {
        toast.error("Failed to loading profile");
      }
    };
    fetchUser();
  }, [navigate]);

  // 🔒 Prevent rendering until user is loaded
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading profile...</p>
        <Toaster />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 4, pr: 4 }}></Box>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={
              // user.avatar ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="mt-1 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            {user.role}
          </span>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span> {user.role}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/edit-profile", { state: { user } })}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
        <Toaster />
      </div>
      <Box />
    </div>
  );
}

export default MyProfile;

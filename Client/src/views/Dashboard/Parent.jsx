// import React from 'react'
// import { Navbar } from '../../components/index'
// import user from "../../assets/user.png"
// import BasicPie from "../../components/Piechart"
// import SwitchSeriesType from "../../components/Graph"
// import meeting from "../../assets/video-call.png"
// import Sidenavbar from '../../components/Sidenavbar'
// import Box from '@mui/material/Box'

// function Parent() {
//     const [firstName, setFirstName] = React.useState("")
//     const [lastName, setLastName] = React.useState("")
//     const [standard, setStandard] = React.useState("")

//     React.useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem("signupData"))
//         console.log(userData);

//         if (userData?.firstName && userData?.lastName && userData?.standard) {
//             setFirstName(userData.firstName)
//             setLastName(userData.lastName)
//             setStandard(userData.standard)
//         }
//     }, [])

//   return (
//     <div className='bg-gray-50'>
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 1, pr: 4 }}>
//         <Sidenavbar />
//         <div className='flex gap-x-6 mx-3 my-2 bg-slate-50 '>

//           <div className='w-80 flex flex-col gap-y-6 bg-white'>
//             <div
//               className='shadow-md shadow-blue-200 px-4 py-6 border-1 rounded-md
//             border-solid flex items-center gap-x-10  border-2 hover:border-2 hover:border-orange-300 '>
//               <img src={user} alt='student-photo' className='h-[76px]' />
//               <div>
//                 <p className='text-2xl font-serif font-semibold'>{firstName} {lastName}</p>
//                 <p className='text-2xl text-center w-28 bg-yellow-300 text-orange-700 rounded-2xl py-1 mt-2 px-3 '>{standard}- 'A'</p>
//               </div>
//             </div>
//             <div className='shadow-md shadow-blue-200 px-4 rounded-md  h-[95px] flex flex-row items-center
//           justify-between hover:bg-orange-50 border-2 hover:border-2 hover:border-orange-300 '>
//               <div className='flex flex-col items-center'>
//                 <p className='text-xl font-semibold font-serif'>Performance :</p>
//                 <img src='https://cdn-icons-png.flaticon.com/128/340/340061.png' className='h-10' />
//               </div>
//               <div className='text-xl font-mono text-pink-700 bg-purple-100 px-3 rounded-full'>
//                 <p>80.98%</p>
//               </div>

//             </div>
//             <div className='shadow-md shadow-blue-200 px-3 py-2 rounded-md border-2 hover:border-2 hover:border-orange-300 '>
//               <p className='text-2xl font-serif font-bold mb-5 '>Attendance :</p>
//               <BasicPie />
//             </div>

//           </div>

//           <div className='flex flex-col gap-y-6 cursor-pointer '>
//             <div className='shadow-md shadow-blue-200 h-40 rounded-md flex flex-col items-center bg-white hover:bg-orange-50 border-2 hover:border-2 hover:border-orange-300'>
//               <p className='text-2xl font-serif font-bold mb-2 text-center px-1 py-2 '>
//                 Virtual Class Integration</p>
//               <img src={meeting} className='h-24' />
//             </div>

//             <div className='shadow-md shadow-blue-200 w-96 h-[412px] rounded-md overflow-y-scroll bg-white border-2 hover:border-2 hover:border-orange-300 '>
//               <p className='text-2xl font-serif font-bold mb-3 px-2 py-2 fixed w-[370px]'>Announcements:</p>

//               <div className='border-collapse  mt-10'>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   📚 Reminder: Parent-Teacher Meeting is scheduled for this Saturday at 9:00 AM.
//                 </div>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   🧑‍🏫 We are pleased to announce the Annual Sports Day will be held on [date]. All are invited to attend!
//                 </div>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   📢 All students are requested to submit their assignments by Friday, [date], without fail.
//                 </div>

//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   🧑‍🏫 The Science Exhibition will take place in the main hall tomorrow at 11:00 AM. Everyone is encouraged to participate.
//                 </div>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   🧑‍🏫 The Science Exhibition will take place in the main hall tomorrow at 11:00 AM. Everyone is encouraged to participate.
//                 </div>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600 '>
//                   📢 All students are requested to submit their assignments by Friday, [date], without fail.
//                 </div>
//                 <div className='border-t-2 shadow-t-lg shadow-red-200 px-3 py-2 hover:bg-orange-100 hover:text-orange-600'>
//                   📚 Reminder: Parent-Teacher Meeting is scheduled for this Saturday at 9:00 AM.
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//         <div className=' w-[700px] bg-white px-4 py-5 rounded-md shadow-md shadow-blue-200 cursor-not-allowed '>
//           <SwitchSeriesType />
//         </div>
//       </Box>
//     </div>

//   )
// }

// export default Parent

import React from "react";
import { Navbar } from "../../components/index";
import user from "../../assets/user.png";
import BasicPie from "../../components/Piechart";
import SwitchSeriesType from "../../components/Graph";
import meeting from "../../assets/video-call.png";
import Sidenavbar from "../../components/Sidenavbar";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Bell, Activity, PieChart, Video, NotebookPen } from "lucide-react";

function Parent() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [standard, setStandard] = React.useState("");

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("signupData"));
    if (userData?.firstName && userData?.lastName && userData?.standard) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setStandard(userData.standard);
    }
  }, []);

  return (
    <div className="bg-gray-100  overflow-x-hidden">
      <Navbar />
      <Box height={75} />

      <Box sx={{ display: "flex", pl: 2, pr: 2 }} className="overflow-x-hidden">
        <Sidenavbar />

        {/* MAIN CONTENT */}
        <div className="flex flex-wrap gap-6 mx-3 my-2 overflow-x-hidden w-full">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-6 w-full sm:w-80">
            {/* <div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-xl bg-white shadow-md border border-blue-400
                         flex items-center gap-6 transition-all duration-300"
            >
              <img src={user} alt="student" className="h-[70px] rounded-xl" />
              <div>
                <p className="text-2xl font-serif font-semibold text-blue-900">
                  {firstName} {lastName}
                </p>
                <p className="text-lg text-center bg-blue-100 text-blue-800 rounded-xl font-semibold py-1 mt-2 px-4">
                  {standard}-A
                </p>
              </div>
            </div> */}


             <motion.div
              whileHover={{ scale: 1.03 }}
              className="h-40 min-w-full rounded-xl flex flex-col justify-center items-center
                         bg-white shadow-md border border-blue-300 transition-all duration-300"
            >
              <p className="text-xl font-serif font-bold text-blue-900">
                Virtual Class Integration
              </p>
              <Video className="h-16 w-16 text-blue-700 mt-2" />
            </motion.div>

            <div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-xl bg-white shadow-md border border-blue-300 flex items-center 
                         justify-between transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <p className="text-xl font-serif font-bold text-blue-900 flex items-center gap-2">
                  <Activity className="text-blue-600 h-6 w-6" /> Performance
                </p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-xl font-mono font-bold text-blue-800 bg-blue-100 px-4 py-1 rounded-full"
              >
                80.98%
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="px-4 py-3 rounded-xl bg-white shadow-md border border-blue-300 transition-all duration-300"
            >
              <p className="text-2xl font-serif font-bold text-blue-900 flex items-center gap-2 mb-3">
                <NotebookPen className="h-7 w-7 text-blue-600" /> Attendance
              </p>
              <BasicPie />
            </motion.div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="flex flex-col gap-6 flex-grow min-w-[300px]">
            {/* <motion.div
              whileHover={{ scale: 1.03 }}
              className="h-40 min-w-full rounded-xl flex flex-col justify-center items-center
                         bg-white shadow-md border border-blue-300 transition-all duration-300"
            >
              <p className="text-2xl font-serif font-bold text-blue-900">
                Virtual Class Integration
              </p>
              <Video className="h-16 w-16 text-blue-700 mt-2" />
            </motion.div> */}

<div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-xl bg-white shadow-md border border-blue-400
                         flex items-center gap-6 transition-all duration-300"
            >
              <img src={user} alt="student" className="h-[70px] rounded-xl" />
              <div>
                <p className="text-2xl font-serif font-semibold text-blue-900">
                  {firstName} {lastName}
                </p>
                <p className="text-lg text-center bg-blue-100 text-blue-800 rounded-xl font-semibold py-1 mt-2 px-4">
                  {standard}-A
                </p>
              </div>
            </div>

            <div
             className="rounded-xl bg-white shadow-md h-[470px] overflow-y-scroll border border-blue-300">
              <p className="text-2xl font-serif font-bold text-blue-900 px-4 py-3 sticky top-0 bg-white flex items-center gap-2 border-b">
                <Bell className="text-blue-700" /> Announcements
              </p>

              {[
                "📚 Parent-Teacher Meeting this Saturday at 9:00 AM.",
                "🏆 Annual Sports Day scheduled soon.",
                "📝 Submit all assignments by Friday.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
                "🔬 Science Exhibition tomorrow at 11:00 AM.",
              ].map((note, i) => (
                <div
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "#e2e8f0" }}
                  className="px-4 py-3 border-b cursor-pointer text-blue-900 font-medium hover:bg-blue-100 "
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            whileHover={{ scale: 1.02 }}
            className="flex-grow bg-white p-5 rounded-xl shadow-md border border-blue-300 
                       w-full "
          >
            <SwitchSeriesType />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Parent;

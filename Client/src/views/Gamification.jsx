// import React from "react";
// import Sidenavbar from "../components/Sidenavbar";
// import Box from "@mui/material/Box";
// import { Navbar } from "../components";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Stack from "@mui/material/Stack";
// import CustomizedTables from "../components/LeaderBoard";
// import PersonIcon from "@mui/icons-material/Person";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import StarIcon from "@mui/icons-material/Star";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import EventIcon from "@mui/icons-material/Event";

// import { useNavigate } from "react-router-dom";
// import MyApp from "../components/Calendar";
// import PieChart2 from "../components/Piechart2";

// function Gamification() {
//   const [firstName, setFirstName] = React.useState("");
//   const [lastName, setLastName] = React.useState("");
//   const [standard, setStandard] = React.useState("");
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("signupData"));
//     if (userData?.firstName && userData?.lastName && userData?.standard) {
//       setFirstName(userData.firstName);
//       setLastName(userData.lastName);
//       setStandard(userData.standard);
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Box height={70} />

//       <Box
//         sx={{
//           display: "flex",
//           px: 4,
//           pb: 4,
//           background: "#f5f7fb",
//           minHeight: "100vh",
//           overflowX: "hidden",
//         }}
//       >
//         <Sidenavbar />
//         <Grid container spacing={3} sx={{ ml: 2 }}>
//           {/* Profile Card + Stats Cards */}
//           {/* <Grid container item xs={12} spacing={3}> */}
//           <Grid container item xs={12} spacing={3} alignItems="stretch">
//             <Grid item xs={4}>
//               <Card
//                 sx={{
//                   p: 2,
//                   bgcolor: "white",
//                   borderRadius: 3,
//                   border: "1px solid #dce3f5",
//                   boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
//                   transition: "0.3s",
//                   "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" className="font-serif font-bold text-blue-700">
//                     Welcome !!
//                   </Typography>

//                   <div className="flex flex-col items-center mt-4">
//                     <PersonIcon fontSize="large" className="text-blue-600" />
//                     <p className="font-semibold mt-1">Student Profile</p>
//                   </div>

//                   <div className="mt-6 space-y-2 text-lg">
//                     <p>Name: {firstName} {lastName}</p>
//                     <p>Standard: {standard}</p>
//                     <p>Section: A</p>
//                   </div>
//                 </CardContent>
//               </Card>

//             </Grid>

//             <Grid item xs={4}>
//               <Stack spacing={2}>
//                 <Card
//                   sx={{
//                     p: 2,
//                     height: 85,
//                     borderRadius: 3,
//                     bgcolor: "white",
//                     border: "1px solid #dce3f5",
//                     boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
//                     transition: "0.3s",
//                     "&:hover": {
//                       transform: "translateY(-5px)",
//                       boxShadow: "0px 5px 15px rgba(0,0,50,0.2)",
//                     },
//                   }}
//                 >
//                   <CardContent>
//                     <div className="flex justify-between items-center">
//                       <span className="font-serif font-bold text-blue-800">
//                         Points:
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <StarIcon className="text-blue-700" />
//                         <p className="font-bold text-lg">193</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card
//                   sx={{
//                     p: 2,
//                     height: 85,
//                     borderRadius: 3,
//                     bgcolor: "white",
//                     border: "1px solid #dce3f5",
//                     boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
//                     transition: "0.3s",
//                     "&:hover": { transform: "translateY(-5px)" },
//                   }}
//                 >
//                   <CardContent>
//                     <div className="flex justify-between items-center">
//                       <span className="font-serif font-bold text-blue-800">
//                         Badges:
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <EmojiEventsIcon className="text-blue-600" />
//                         <p className="font-bold text-lg">4</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card
//                   sx={{
//                     p: 2,
//                     height: 85,
//                     borderRadius: 3,
//                     bgcolor: "white",
//                     border: "1px solid #dce3f5",
//                     boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
//                     transition: "0.3s",
//                     "&:hover": { transform: "translateY(-5px)" },
//                   }}
//                 >
//                   <CardContent>
//                     <span className="font-serif font-bold text-blue-900">
//                       Feedback:
//                     </span>
//                     <div className="flex justify-around mt-3 text-xl">
//                       <p>😎 1</p>
//                       <p>😍 4</p>
//                       <p>🙌 1</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Stack>
//             </Grid>

//             {/* Quiz + Achievements */}
//             <Grid item xs={4}>
//               <Stack spacing={2}>
//                 <Card
//                   sx={{
//                     minWidth: 300,
//                     height: "41vh",
//                     borderRadius: 3,
//                     border: "1px solid #dce3f5",
//                     boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
//                     transition: "0.3s",
//                     "&:hover": { transform: "translateY(-8px)" },
//                   }}
//                   onClick={() => navigate("/studentDashboard")}
//                 >
//                   <CardContent>
//                     <span className="font-serif font-bold text-blue-900">
//                       Let's Start New Quiz:
//                     </span>
//                     <SportsEsportsIcon className="text-blue-700 mt-2" />
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/128/9475/9475805.png"
//                       className="h-56 mx-auto mt-2"
//                     />
//                   </CardContent>
//                 </Card>

//                 <Card
//                   sx={{
//                     minWidth: 300,
//                     height: "41vh",
//                     borderRadius: 3,
//                     border: "1px solid #dce3f5",
//                     boxShadow: "0px 3px 8px rgba(0,0,50,0.15)",
//                     transition: "0.3s",
//                     "&:hover": { transform: "translateY(-8px)" },
//                   }}
//                 >
//                   <CardContent>
//                     <span className="font-serif font-bold text-blue-900">
//                       Achievements Tracking:
//                     </span>
//                     <AssessmentIcon className="text-blue-700 mt-2" />
//                     <PieChart2 />
//                   </CardContent>
//                 </Card>
//               </Stack>
//             </Grid>
//           </Grid>

//           {/* Leaderboard + Calendar */}
//           <Grid container item xs={12} spacing={3}>
//             <Grid item xs={8}>
//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   background: "white",
//                   border: "1px solid #dce3f5",
//                   boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h5"
//                     className="font-serif font-bold text-blue-900"
//                   >
//                     LeaderBoard :
//                   </Typography>
//                   <CustomizedTables />
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={4}>
//               <Card
//                 sx={{
//                   height: "50vh",
//                   borderRadius: 3,
//                   background: "white",
//                   border: "1px solid #dce3f5",
//                   boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
//                   transition: "0.3s",
//                 }}
//               >
//                 <CardContent>
//                   <p className="text-center text-3xl font-bold font-serif mb-2 text-blue-800">
//                     <EventIcon className="mr-2 text-blue-700" />
//                     Calendar
//                   </p>
//                   <MyApp />
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Gamification;

import React, { useEffect, useState } from "react";
import Sidenavbar from "../components/Sidenavbar";
import { Navbar } from "../components";
import CustomizedTables from "../components/LeaderBoard";
import MyApp from "../components/Calendar";
import PieChart2 from "../components/Piechart2";

import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EventIcon from "@mui/icons-material/Event";

import { useNavigate } from "react-router-dom";

function Gamification() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [standard, setStandard] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("signupData"));
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setStandard(userData.standard);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Spacer */}
      <div className="h-[70px]" />

      <div className="flex bg-[#f5f7fb] min-h-screen px-4 pb-4 overflow-x-hidden">
        <Sidenavbar />

        <div className="w-full ml-4 space-y-6">
          {/* ===== TOP SECTION ===== */}

          <div className="grid grid-cols-8 gap-6">
            {/* PROFILE CARD */}
            <div className="col-span-4">
              <div className="bg-white border border-[#dce3f5] rounded-xl shadow-md p-6 hover:-translate-y-1 transition">
                <h2 className="text-xl font-serif font-bold text-blue-700">
                  Welcome !!
                </h2>

                <div className="flex flex-col items-center mt-4">
                  <PersonIcon fontSize="large" className="text-blue-600" />
                  <p className="font-semibold mt-1">Student Profile</p>
                </div>

                <div className="mt-6 space-y-2 text-lg">
                  <p>
                    Name: {firstName} {lastName}
                  </p>
                  <p>Standard: {standard}</p>
                  <p>Section: A</p>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="col-span-4 flex flex-col gap-4">
              {/* POINTS */}
              <div className="bg-white border border-[#dce3f5] rounded-xl shadow p-6 hover:-translate-y-1 transition">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-blue-800">
                    Points:
                  </span>
                  <div className="flex items-center gap-2">
                    <StarIcon className="text-blue-700" />
                    <p className="font-bold text-lg">193</p>
                  </div>
                </div>
              </div>

              {/* BADGES */}
              <div className="bg-white border border-[#dce3f5] rounded-xl shadow p-6 hover:-translate-y-1 transition">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-blue-800">
                    Badges:
                  </span>
                  <div className="flex items-center gap-2">
                    <EmojiEventsIcon className="text-blue-600" />
                    <p className="font-bold text-lg">4</p>
                  </div>
                </div>
              </div>

              {/* FEEDBACK */}
              <div className="bg-white border border-[#dce3f5] rounded-xl shadow p-3 hover:-translate-y-1 transition">
                <span className="font-serif font-bold text-blue-900">
                  Feedback:
                </span>
                <div className="flex justify-around mt-3 text-xl">
                  <p>😎 1</p>
                  <p>😍 4</p>
                  <p>🙌 1</p>
                </div>
              </div>
            </div>
 </div>
          

            <div className="grid grid-cols-12 gap-6 ">

               {/* QUIZ */}
              <div
                onClick={() => navigate("/studentDashboard")}
                className="col-span-4 bg-white border border-[#dce3f5] rounded-xl shadow-md p-4 h-full cursor-pointer hover:-translate-y-2 transition"
              >
                 <SportsEsportsIcon className="text-blue-700 h-4" />
                <span className="font-serif font-bold text-blue-900 ml-2">
                  Let's Start New Quiz:
                </span>
               
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9475/9475805.png"
                  className="h-32 mx-auto mt-2"
                />
              </div>

              {/* ACHIEVEMENTS */}
              <div className="col-span-4 bg-white border border-[#dce3f5] rounded-xl shadow-md p-4 h-full hover:-translate-y-2 transition">
                <AssessmentIcon className="text-blue-700 h-4" />
                <span className="font-serif font-bold text-blue-900 ml-2">
                  Achievements Tracking:
                </span>
                
                <PieChart2 />
              </div>

              {/* CALENDAR */}
              <div className="col-span-4 h-full cursor-pointer hover:-translate-y-2 transition">
                  <MyApp />
              </div>

              
            </div>
         

          {/* ===== BOTTOM SECTION ===== */}
          <div className="grid grid-cols-12 gap-6">
            {/* LEADERBOARD */}
            <div className="col-span-full">
              <div className="bg-white border border-[#dce3f5] rounded-xl shadow-md p-6">
                <h2 className="text-xl font-serif font-bold text-blue-900 mb-4">
                  LeaderBoard :
                </h2>
                <CustomizedTables />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gamification;

// import React from 'react'
// import Sidenavbar from '../components/Sidenavbar';
// // import Sidenavbar from "../../../src/components/Sidenavbar";
// import Box from "@mui/material/Box";
// // import Navbar from "../../../src/components/Navbar";
// import { Navbar } from '../components';
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Stack from "@mui/material/Stack";
// // import CustomizedTables from "../../../src/components/LeaderBoard";
// import CustomizedTables from "../components/LeaderBoard"
// import PersonIcon from "@mui/icons-material/Person";
// import { useNavigate } from 'react-router-dom';
// // import MyApp from "../../../src/components/Calendar";
// import MyApp from "../components/Calendar"
// // import PieChart2 from "../../../src/components/Piechart2";
// import PieChart2 from  "../components/Piechart2"
// // import PiechartSchedule from '../../../src/components/PiechartSchedule';
// import PiechartSchedule from "../components/PiechartSchedule"


// function Gamification() {
//     const [firstName, setFirstName] = React.useState("")
//     const [lastName, setLastName] = React.useState("")
//     const [standard, setStandard] = React.useState("")
//     const navigate = useNavigate();

//     React.useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem("signupData"))
//         console.log(userData);
        
//         if (userData?.firstName && userData?.lastName && userData?.standard) {
//             setFirstName(userData.firstName)
//             setLastName(userData.lastName)
//             setStandard(userData.standard)
//         }
//     }, [])


//     return (
//         <>
//             <Navbar />
//             <Box height={70} />
//             <Box sx={{ display: "flex", pl: 4, pr: 4, position: "relative" }}>
//                 <Sidenavbar />
//                 <Grid container spacing={2}>
//                     <Grid size={8}>
//                         <Stack
//                             spacing={2}
//                             direction="row"
//                             sx={{ display: "flex", justifyContent: "space-between" }}
//                         >
//                             <Card sx={{ minWidth: 220 }}>
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         <div>
//                                             <p className="text-3xl font-thin font-serif text-red-600">
//                                                 Welcome!!
//                                             </p>
//                                             <div className="flex flex-col items-center mt-2">
//                                                 <PersonIcon />
//                                                 <span className="text-lg">Student Profile </span>
//                                             </div>
//                                             <div className="flex flex-col items-start mt-6 ">
                                               
//                                                 <p className="text-lg">Name : {firstName} {lastName}</p>
//                                                 <p className="text-lg ">Std : {standard}</p>
//                                                 <p className="text-lg">Section : A</p>
//                                             </div>
//                                         </div>
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                             <Grid size={4}>
//                                 <Stack
//                                     spacing={2}
//                                     sx={{ display: "flex", flexDirection: "col" }}
//                                 >
//                                     <Card
//                                         sx={{
//                                             minWidth: 260,
//                                             height: 85,
//                                         }}
//                                     >
//                                         <CardContent>
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 <div className="flex flex-row justify-between items-center">
//                                                     <span className="font-serif font-bold items-center">
//                                                         Points :
//                                                     </span>
//                                                     <div className="flex flex-col">
//                                                         <img
//                                                             src="https://cdn-icons-png.flaticon.com/128/4143/4143195.png"
//                                                             className="h-9"
//                                                         />
//                                                         <p>193</p>
//                                                     </div>
//                                                 </div>
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     <Card
//                                         sx={{
//                                             minWidth: 260,
//                                             height: 85,
//                                         }}
//                                     >
//                                         <CardContent>
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 <div className="flex flex-row justify-between items-center">
//                                                     <span className="font-serif font-bold">Badges :</span>
//                                                     <div className="flex flex-col items-center">
//                                                         <img
//                                                             src="https://cdn-icons-png.flaticon.com/128/5432/5432626.png"
//                                                             className="h-9"
//                                                         />
//                                                         <p>4</p>
//                                                     </div>
//                                                 </div>
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     <Card
//                                         sx={{
//                                             minWidth: 260,
//                                             height: 85,
//                                         }}
//                                     >
//                                         <CardContent>
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 <div className="flex flex-col justify-between">
//                                                     <span className="font-serif font-bold">Feedback :</span>
//                                                     <div className="flex justify-around">
//                                                         <div className="flex flex-row items-center">
//                                                             <p className="h-9">😎</p>
//                                                             <p>1</p>
//                                                         </div>
//                                                         <div className="flex flex-row items-center">
//                                                             <p className="h-9">😍</p>
//                                                             <p>4</p>
//                                                         </div>
//                                                         <div className="flex flex-row items-center">
//                                                             <p className="h-9">🙌</p>
//                                                             <p>1</p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </Stack>
//                             </Grid>
//                             <Grid size={4}>
//                                 <Stack
//                                     spacing={2}
//                                     sx={{ display: "flex", flexDirection: "col", marginLeft: "90px" }}
//                                 >
//                                     <Card
//                                         sx={{
//                                             minWidth: 300,
//                                             height: 41 + "vh",

//                                             maxWidth: 300,
//                                         }}
//                                         onClick={() => navigate("/studentDashboard")}
                                      
//                                     >
//                                         <CardContent>
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 <span className="font-serif font-bold">
//                                                    Let's Start New <br/>Quiz:
//                                                 </span>
//                                             </Typography>
//                                             {/* <PieChart2 /> */}
//                                                  <img src='https://tse4.mm.bing.net/th?id=OIP.PeFwlCmW07iiHv4Ri7fyCAHaHa&pid=Api&P=0&h=180'
//                                                  className='ml-4 h-60 ' />
//                                         </CardContent>
//                                     </Card>
//                                 </Stack>
//                             </Grid>
//                             <Grid size={4}>
//                                 <Stack
//                                     spacing={2}
//                                     sx={{ display: "flex", flexDirection: "col", marginLeft: "220px" }}
//                                 >
//                                     <Card
//                                         sx={{
//                                             minWidth: 300,
//                                             height: 41 + "vh",

//                                             maxWidth: 300,
//                                         }}

//                                     >
//                                         <CardContent >
//                                             <Typography gutterBottom variant="h5" component="div">
//                                                 <span className="font-serif font-bold">
//                                                     Achievements Tracking :
//                                                 </span>
//                                             </Typography>
//                                             <PieChart2 />
                                       
//                                         </CardContent>
//                                     </Card>
//                                 </Stack>
//                             </Grid>


//                         </Stack>
//                     </Grid>
//                     {/* <Grid size={4}>
//                 <Stack
//                   spacing={2}
//                   sx={{ display: "flex", flexDirection: "col" , marginLeft:"50px"}}
//                 >
//                   <Card
//                     sx={{
//                       minWidth: 300,
//                       height: 40 + "vh",

//                       maxWidth: 300,
                     
                    
//                     }}
//                   >
// <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         <span className="font-serif font-bold">
//                          Test Schedule  
//                         </span>
//                       </Typography>
//                       {/* <PieChart2 /> */}
//                     {/* <PiechartSchedule/> */}
//                     {/* </CardContent> */}
//                     {/* </Card> */}

//                     {/* </Stack>
//               </Grid> */}

//                     <Grid size={6}>
//                         <Stack
//                             spacing={2}
//                             direction="row"
//                             sx={{ display: "flex", justifyContent: "space-between" }}
//                         >
//                             <Card sx={{ minWidth: 780 }}>
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         <span className="font-serif font-bold">
//                                             LeaderBoard :-{" "}
//                                         </span>
//                                         <br />
//                                         <br />
//                                         <CustomizedTables />
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                             <Card
//                                 sx={{
//                                     minWidth: 400,
//                                     height: 50 + "vh",

//                                     maxWidth: 300,
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         <p className="text-center text-3xl font-bold font-serif mb-4">
//                                             Calendar
//                                         </p>
//                                         {/* <Calendar/> */}
//                                         <MyApp />
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Stack>
//                     </Grid>
//                 </Grid>
//                 <Box height={20} />

//                 <Grid container spacing={2}>
//                     <Grid size={8}></Grid>
//                     <Grid size={4}></Grid>
//                 </Grid>
//             </Box>
//         </>




//     )
// }

// export default Gamification



import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Box from "@mui/material/Box";
import { Navbar } from "../components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CustomizedTables from "../components/LeaderBoard";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EventIcon from "@mui/icons-material/Event";

import { useNavigate } from "react-router-dom";
import MyApp from "../components/Calendar";
import PieChart2 from "../components/Piechart2";

function Gamification() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [standard, setStandard] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("signupData"));
    if (userData?.firstName && userData?.lastName && userData?.standard) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setStandard(userData.standard);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box
        sx={{
          display: "flex",
          px: 4,
          pb: 4,
          background: "#f5f7fb",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Sidenavbar />
        <Grid container spacing={3} sx={{ ml: 2 }}>
          {/* Profile Card + Stats Cards */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Card
                sx={{
                  p: 2,
                  bgcolor: "white",
                  borderRadius: 3,
                  border: "1px solid #dce3f5",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
                }}
              >
                <CardContent>
                  <Typography variant="h5" className="font-serif font-bold text-blue-700">
                    Welcome !!
                  </Typography>

                  <div className="flex flex-col items-center mt-4">
                    <PersonIcon fontSize="large" className="text-blue-600" />
                    <p className="font-semibold mt-1">Student Profile</p>
                  </div>

                  <div className="mt-6 space-y-2 text-lg">
                    <p>Name: {firstName} {lastName}</p>
                    <p>Standard: {standard}</p>
                    <p>Section: A</p>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    p: 2,
                    height: 85,
                    borderRadius: 3,
                    bgcolor: "white",
                    border: "1px solid #dce3f5",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 5px 15px rgba(0,0,50,0.2)" },
                  }}
                >
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="font-serif font-bold text-blue-800">Points:</span>
                      <div className="flex items-center gap-2">
                        <StarIcon className="text-blue-700" />
                        <p className="font-bold text-lg">193</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    p: 2,
                    height: 85,
                    borderRadius: 3,
                    bgcolor: "white",
                    border: "1px solid #dce3f5",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="font-serif font-bold text-blue-800">Badges:</span>
                      <div className="flex items-center gap-2">
                        <EmojiEventsIcon className="text-blue-600" />
                        <p className="font-bold text-lg">4</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    p: 2,
                    height: 85,
                    borderRadius: 3,
                    bgcolor: "white",
                    border: "1px solid #dce3f5",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <CardContent>
                    <span className="font-serif font-bold text-blue-900">Feedback:</span>
                    <div className="flex justify-around mt-3 text-xl">
                      <p>😎 1</p>
                      <p>😍 4</p>
                      <p>🙌 1</p>
                    </div>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Quiz + Achievements */}
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    minWidth: 300,
                    height: "41vh",
                    borderRadius: 3,
                    border: "1px solid #dce3f5",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                  onClick={() => navigate("/studentDashboard")}
                >
                  <CardContent>
                    <span className="font-serif font-bold text-blue-900">
                      Let's Start New Quiz:
                    </span>
                    <SportsEsportsIcon className="text-blue-700 mt-2" />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9475/9475805.png"
                      className="h-56 mx-auto mt-2"
                    />
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    minWidth: 300,
                    height: "41vh",
                    borderRadius: 3,
                    border: "1px solid #dce3f5",
                    boxShadow: "0px 3px 8px rgba(0,0,50,0.15)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardContent>
                    <span className="font-serif font-bold text-blue-900">Achievements Tracking:</span>
                    <AssessmentIcon className="text-blue-700 mt-2" />
                    <PieChart2 />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          {/* Leaderboard + Calendar */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={8}>
              <Card
                sx={{
                  borderRadius: 3,
                  background: "white",
                  border: "1px solid #dce3f5",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" className="font-serif font-bold text-blue-900">
                    LeaderBoard :
                  </Typography>
                  <CustomizedTables />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                sx={{
                  height: "50vh",
                  borderRadius: 3,
                  background: "white",
                  border: "1px solid #dce3f5",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                <CardContent>
                  <p className="text-center text-3xl font-bold font-serif mb-2 text-blue-800">
                    <EventIcon className="mr-2 text-blue-700" />
                    Calendar
                  </p>
                  <MyApp />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Gamification;

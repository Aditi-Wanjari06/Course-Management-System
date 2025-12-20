// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import { useNavigate } from "react-router-dom";
// import useAppStore from "../appStore";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import Collapse from "@mui/material/Collapse";
// import Tooltip from "@mui/material/Tooltip";
// import TrendingFlatSharpIcon from "@mui/icons-material/TrendingFlatSharp";

// const drawerWidth = 280;
// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         ...openedMixin(theme),
//         "& .MuiDrawer-paper": openedMixin(theme),
//       },
//     },
//     {
//       props: ({ open }) => !open,
//       style: {
//         ...closedMixin(theme),
//         "& .MuiDrawer-paper": closedMixin(theme),
//       },
//     },
//   ],
// }));

// export default function Sidenavbar() {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const open = useAppStore((state) => state.dopen);
//   const [nestedOpen, setNestedOpen] = React.useState(false);

//   const handleNestedClick = () => {
//     setNestedOpen((prev) => !prev);
//   };

//   //for dashboard
//   const handleDashboard = async () => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     // console.log("USerData",userData.user.role);

//     const role = userData.user.role;
//     console.log("Dashboard :", userData.user.role);

//     if (role == "Teacher") {
//       navigate("/teacher");
//     } else if (role == "Student") {
//       navigate("/student");
//     } else if (role == "Parent") {
//       navigate("/parentForm");
//     } else {
//       navigate("/admin");
//     }
//   };

//   const [userRole, setUserRole] = React.useState("");

//   React.useEffect(() => {
//     const storeuser = localStorage.getItem("user");
//     // console.log(storeuser);

//     if (storeuser) {
//       try {
//         const user = JSON.parse(storeuser);

//         if (user.user.role) {
//           setUserRole(user.user.role);
//         }
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//     // const userData = JSON.parse(localStorage.getItem("user"));
//     // if (userData?.role) {
//     //   setUserRole(userData.role);
//     // }
//     // console.log("Nav : ",userData.role);
//   }, []);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <Box height={30} />
//       <Drawer
//         variant="permanent"
//         open={open}
//         sx={{
//           "& .MuiDrawer-paper": {
//             backgroundColor: "#f2f2f2",
//             color: "black",
//             border: "none",
//             boxShadow: "0.5px 0 3px 2px  grey",
//           },
//         }}
//       >
//         <DrawerHeader>
//           <IconButton>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <Tooltip title={open ? "" : "Dashboard"} placement="right">
//             <ListItem
//               disablePadding
//               sx={{ display: "block" }}
//               onClick={handleDashboard}
//             >
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: "initial",
//                       }
//                     : {
//                         justifyContent: "center",
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: "center",
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: "auto",
//                         },
//                   ]}
//                 >
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Dashboard"
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Tooltip>
//         </List>
//         <List sx={{ pt: 0 }}>
//           {(userRole === "Teacher" || userRole === "Admin") && (
//             <Tooltip title={open ? "" : "Create Course"} placement="right">
//               <ListItem
//                 disablePadding
//                 sx={{ display: "block" }}
//                 onClick={() => {
//                   navigate("/createCourse");
//                 }}
//               >
//                 <ListItemButton
//                   sx={[
//                     {
//                       minHeight: 48,
//                       px: 2.5,
//                     },
//                     open
//                       ? {
//                           justifyContent: "initial",
//                         }
//                       : {
//                           justifyContent: "center",
//                         },
//                   ]}
//                 >
//                   <ListItemIcon
//                     sx={[
//                       {
//                         minWidth: 0,
//                         justifyContent: "center",
//                       },
//                       open
//                         ? {
//                             mr: 3,
//                           }
//                         : {
//                             mr: "auto",
//                           },
//                     ]}
//                   >
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Create Course"
//                     sx={[
//                       open
//                         ? {
//                             opacity: 1,
//                           }
//                         : {
//                             opacity: 0,
//                           },
//                     ]}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             </Tooltip>
//           )}
//           <Tooltip title={open ? "" : "Courses"} placement="right">
//             <ListItem
//               disablePadding
//               sx={{ display: "block" }}
//               onClick={() => {
//                 navigate("/course");
//               }}
//             >
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: "initial",
//                       }
//                     : {
//                         justifyContent: "center",
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: "center",
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: "auto",
//                         },
//                   ]}
//                 >
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Courses"
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Tooltip>

//           {(userRole === "Teacher" || userRole === "Admin") && (
//             <Tooltip title={open ? "" : "Create Exam"} placement="right">
//               <ListItem
//                 disablePadding
//                 sx={{ display: "block" }}
//                 onClick={() => {
//                   navigate("/createExam");
//                 }}
//               >
//                 <ListItemButton
//                   sx={[
//                     {
//                       minHeight: 48,
//                       px: 2.5,
//                     },
//                     open
//                       ? {
//                           justifyContent: "initial",
//                         }
//                       : {
//                           justifyContent: "center",
//                         },
//                   ]}
//                 >
//                   <ListItemIcon
//                     sx={[
//                       {
//                         minWidth: 0,
//                         justifyContent: "center",
//                       },
//                       open
//                         ? {
//                             mr: 3,
//                           }
//                         : {
//                             mr: "auto",
//                           },
//                     ]}
//                   >
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Create Quiz"
//                     sx={[
//                       open
//                         ? {
//                             opacity: 1,
//                           }
//                         : {
//                             opacity: 0,
//                           },
//                     ]}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             </Tooltip>
//           )}

//           <Tooltip title={open ? "" : "Challenges"} placement="right">
//             <ListItem
//               disablePadding
//               sx={{ display: "block" }}
//               onClick={() => {
//                 navigate("/challenges");
//               }}
//             >
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: "initial",
//                       }
//                     : {
//                         justifyContent: "center",
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: "center",
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: "auto",
//                         },
//                   ]}
//                 >
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Challenges"
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Tooltip>

//           {(userRole === "Parent" || userRole === "Admin") && (
//             <Tooltip title={open ? "" : "Parent Portal"} placement="right">
//               <ListItem disablePadding sx={{ display: "block" }}>
//                 <ListItemButton
//                   onClick={handleNestedClick}
//                   sx={[
//                     {
//                       minHeight: 48,
//                       px: 2.5,
//                     },
//                     open
//                       ? {
//                           justifyContent: "space-between",
//                         }
//                       : {
//                           justifyContent: "center",
//                         },
//                   ]}
//                 >
//                   {/* <Box display="flex" alignItems="center"> */}
//                   <ListItemIcon
//                     sx={[
//                       {
//                         minWidth: 0,
//                         justifyContent: "center",
//                       },
//                       open
//                         ? {
//                             mr: 3,
//                           }
//                         : {
//                             mr: "auto",
//                           },
//                     ]}
//                   >
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Parent Portal"
//                     sx={[
//                       open
//                         ? {
//                             opacity: 1,
//                           }
//                         : {
//                             opacity: 0,
//                           },
//                     ]}
//                   />
//                   {/* <Box/> */}
//                   {open && (nestedOpen ? <ExpandLess /> : <ExpandMore />)}
//                   {/* {nestedOpen ? <ExpandLess /> : <ExpandMore />} */}
//                 </ListItemButton>
//                 <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
                 
//                     <List component="div" disablePadding>
//                        <Tooltip
//                     title={open ? "" : "Performance Overview"}
//                     placement="right"
//                   >
//                       <ListItemButton
//                         sx={{ pl: 4 }}
//                         onClick={() => {
//                           navigate("/performanceOverview");
//                         }}
//                       >
//                         <ListItemIcon>
//                           <TrendingFlatSharpIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                           primary="Performance Overview"
//                           className="text-sm"
//                         />
//                       </ListItemButton>
//                       </Tooltip>
//                     </List>
                
//                   <List component="div" disablePadding>
//                        <Tooltip
//                     title={open ? "" : "Attendance/Grade"}
//                     placement="right"
//                   >
//                     <ListItemButton
//                       sx={{ pl: 4 }}
//                       onClick={() => {
//                         navigate("/attendanceGrade");
//                       }}
//                     >
//                       <ListItemIcon>
//                         <TrendingFlatSharpIcon />
//                       </ListItemIcon>
//                       <ListItemText primary="Attendance & Grade" />
//                     </ListItemButton>
//                     </Tooltip>
//                   </List>

//                   <List component="div" disablePadding>
//                       <Tooltip
//                     title={open ? "" : "Communication"}
//                     placement="right"
//                   >
//                     <ListItemButton
//                       sx={{ pl: 4 }}
//                       onClick={() => {
//                         navigate("/communication");
//                       }}
//                     >
//                       <ListItemIcon>
//                         <TrendingFlatSharpIcon />
//                       </ListItemIcon>
//                       <ListItemText primary="Communication" />
//                     </ListItemButton>
//                     </Tooltip>
//                   </List>

//                   <List component="div" disablePadding>
//                     <Tooltip
//                     title={open ? "" : "Classes & Events"}
//                     placement="right"
//                   >
//                     <ListItemButton
//                       sx={{ pl: 4 }}
//                       onClick={() => {
//                         navigate("/classEvents");
//                       }}
//                     >
//                       <ListItemIcon>
//                         <TrendingFlatSharpIcon />
//                       </ListItemIcon>
//                       <ListItemText primary="Classes and Events" />
//                     </ListItemButton>
//                     </Tooltip>
//                   </List>
//                 </Collapse>
//               </ListItem>
//             </Tooltip>
//           )}
//           <Tooltip title={open ? "" : "Sign out"} placement="right">
//             <ListItem
//               disablePadding
//               sx={{ display: "block" }}
//               onClick={() => {
//                 navigate("/signout");
//               }}
//             >
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: "initial",
//                       }
//                     : {
//                         justifyContent: "center",
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: "center",
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: "auto",
//                         },
//                   ]}
//                 >
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Sign out"
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Tooltip>
//         </List>
//       </Drawer>
//     </Box>
//   );
// }







import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  FilePlus2,
  ClipboardList,
  ChartSpline,
  UsersRound,
  LogOut,
} from "lucide-react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import useAppStore from "../appStore";

const drawerWidth = 280;

// Drawer animation + theme
const openedMixin = (theme) => ({
  width: drawerWidth,
  background: "#ffffff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: "250ms",
  }),
  boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  width: 75,
  background: "#ffffff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: "250ms",
  }),
  boxShadow: "2px 0 10px rgba(0,0,0,0.06)",
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(1.5),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenavbar() {
  const theme = useTheme();
  const navigate = useNavigate();

  // ⭐ Zustand state — FIXED
  const open = useAppStore((state) => state.dopen);
  const updateOpen = useAppStore((state) => state.updateOpen);

  const [nestedOpen, setNestedOpen] = React.useState(false);
  const handleNestedClick = () => setNestedOpen((prev) => !prev);

  const userRole = JSON.parse(localStorage.getItem("user"))?.user?.role;

  return (
    <Box >
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        {/* Drawer Header */}
        <DrawerHeader>
          <IconButton onClick={() => updateOpen(!open)}>
            {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* MENU ITEMS */}
        <List>
          {/* Dashboard */}
          <Tooltip title={open ? "" : "Dashboard"} placement="right">
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate("/admin")}
                sx={{
                  px: 2.5,
                  borderRadius: 2,
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "rgba(25,118,210,0.1)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                  <Home size={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>

          {/* Create Course (Admin / Teacher) */}
          {(userRole === "Teacher" || userRole === "Admin") && (
            <Tooltip title={open ? "" : "Create Course"} placement="right">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => navigate("/createCourse")}
                  sx={{
                    px: 2.5,
                    borderRadius: 2,
                    transition: "0.25s",
                    "&:hover": {
                      backgroundColor: "rgba(25,118,210,0.1)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                    <FilePlus2 size={22} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Create Course"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}

          {/* Courses */}
          <Tooltip title={open ? "" : "Courses"} placement="right">
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate("/course")}
                sx={{
                  px: 2.5,
                  borderRadius: 2,
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "rgba(25,118,210,0.1)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                  <BookOpen size={22} />
                </ListItemIcon>
                <ListItemText primary="Courses" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>

          {/* Create Quiz */}
          {(userRole === "Teacher" || userRole === "Admin") && (
            <Tooltip title={open ? "" : "Create Quiz"} placement="right">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => navigate("/createExam")}
                  sx={{
                    px: 2.5,
                    borderRadius: 2,
                    transition: "0.25s",
                    "&:hover": {
                      backgroundColor: "rgba(25,118,210,0.1)",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                    <ClipboardList size={22} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Create Quiz"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}

          {/* Challenges */}
          <Tooltip title={open ? "" : "Challenges"} placement="right">
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate("/challenges")}
                sx={{
                  px: 2.5,
                  borderRadius: 2,
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "rgba(25,118,210,0.1)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                  <ChartSpline size={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Challenges"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>

          {/* Parent Portal */}
          {(userRole === "Parent" || userRole === "Admin") && (
            <>
              <Tooltip title={open ? "" : "Parent Portal"} placement="right">
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={handleNestedClick}
                    sx={{
                      px: 2.5,
                      borderRadius: 2,
                      transition: "0.25s",
                      "&:hover": {
                        backgroundColor: "rgba(25,118,210,0.1)",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#1976d2", minWidth: 40 }}>
                      <UsersRound size={22} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Parent Portal"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {open && (nestedOpen ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
              </Tooltip>

              <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: open ? 7 : 4 }}
                    onClick={() => navigate("/performanceOverview")}
                  >
                    <ListItemIcon sx={{ color: "#1976d2" }}>
                      <ChartSpline size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Performance Overview" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: open ? 7 : 4 }}
                    onClick={() => navigate("/attendanceGrade")}
                  >
                    <ListItemIcon sx={{ color: "#1976d2" }}>
                      <ChartSpline size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Attendance & Grade" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: open ? 7 : 4 }}
                    onClick={() => navigate("/communication")}
                  >
                    <ListItemIcon sx={{ color: "#1976d2" }}>
                      <ChartSpline size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Communication" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: open ? 7 : 4 }}
                    onClick={() => navigate("/classEvents")}
                  >
                    <ListItemIcon sx={{ color: "#1976d2" }}>
                      <ChartSpline size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Classes & Events" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}

          {/* Sign Out */}
          <Tooltip title={open ? "" : "Sign out"} placement="right">
            <ListItem disablePadding sx={{ display: "block", mt: 1 }}>
              <ListItemButton
                onClick={() => navigate("/signout")}
                sx={{
                  px: 2.5,
                  borderRadius: 2,
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "rgba(255,0,0,0.08)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "red", minWidth: 40 }}>
                  <LogOut size={22} />
                </ListItemIcon>
                <ListItemText primary="Sign out" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </Box>
  );
}

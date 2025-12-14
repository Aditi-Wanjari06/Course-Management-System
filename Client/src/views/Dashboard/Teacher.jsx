// import React from 'react'
// import { Navbar, TeacherCards } from "../../components/index"
// import { PieChart } from 'react-minimal-pie-chart';
// // import Progress from "../../../../src/components/Progress"
// import Progress from "../../components/Progress"
// // import Assignments from "../../../../src/components/Assignments"
// import Assignments from "../../components/Assignments"
// // import ClassSchedule from '../../../../src/components/classSchedule';
// import ClassSchedule from "../../components/classSchedule"
// // import Sidenavbar from '../../../../src/components/Sidenavbar'
// import Sidenavbar from '../../components/Sidenavbar';
// import Box from '@mui/material/Box'
// import meeting from "../../assets/video-call.png"
// import chat from "../../assets/chat.png"

// function Teacher() {
//   return (
//     <div className='bg-gray-50' >
//       <Navbar />
//       <Box height={75} />
//       <Box sx={{ display: "flex", pl: 2, pr: 4 }}>
//         <Sidenavbar />
//         <div className='bg-slate-50 flex flex-row items-center gap-2 '>
//           {/*teacher cards */}
//           <div className='flex flex-col items-center '>

//             <TeacherCards
//               title="Enrolled Students"
//               count="300"
//               image="https://cdn-icons-png.flaticon.com/128/4717/4717944.png"
//             />
//             <TeacherCards
//               title="Total Teachers"
//               count="50"
//               image="https://cdn-icons-png.flaticon.com/128/3061/3061038.png"
//             />

//             <div className='shadow-xl rounded-lg bg-white w-80 px-2 py-1 border-2 hover:border-2
//            hover:border-orange-300 border-orange-300'>
//               <p className='text-xl font-serif font-semibold mb-2'>Academic Progress</p>
//               <PieChart className='h-64'

//                 data={[
//                   { title: 'One', value: 10, color: '#E38627' },
//                   // { title: 'Two', value: 15, color: '#C13C37' },
//                   { title: 'Three', value: 20, color: ' #c65353' },
//                 ]}

//                 label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
//                 labelStyle={() => ({
//                   fontSize: "8px",


//                 })}
//                 lineWidth={35}
//                 labelPosition={80}
//               />
//               <div className="mt-4 flex gap-4">
//                 <div className="flex items-center gap-2">
//                   <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#E38627' }}></span>
//                   <span className="text-sm">Pass</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#c65353' }}></span>
//                   <span className="text-sm">Fail</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='flex flex-col gap-y-1 '>
//             <div>
//               <Progress />
//             </div>
//             <div>
//               <Assignments />
//             </div>
//           </div>

//           <div className='flex flex-col gap-3'>
//             <div>
//               <ClassSchedule />
//             </div>

//             <div className='flex flex-row gap-2 cursor-pointer'>
//               <div className='shadow-md rounded-lg px-3 py-3 bg-white border-2 hover:border-2 hover:border-orange-300
//               border-orange-300 w-[235px] h-[100px] flex flex-row items-center justify-between hover:bg-orange-50'>
//                 <p className='text-2xl font-serif'>Meeting</p>
//                 <img src={meeting} className='h-16' />
//               </div>
//               <div className='shadow-md rounded-lg px-3 py-3 bg-white border-2 hover:border-2 hover:border-orange-300
//               border-orange-300 w-[235px] h-[100px] flex flex-row items-center justify-between hover:bg-orange-50'>
//                 <p className='text-2xl font-serif' >Real Time Chat</p>
//                 <img src={chat} className='h-16' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Box>
//     </div>
//   )
// }

// export default Teacher



// import React from 'react'
// import { Navbar, TeacherCards } from "../../components/index"
// import { PieChart } from 'react-minimal-pie-chart';
// import Progress from "../../components/Progress"
// import Assignments from "../../components/Assignments"
// import ClassSchedule from "../../components/classSchedule"
// import Sidenavbar from '../../components/Sidenavbar';
// import Box from '@mui/material/Box'
// import meeting from "../../assets/video-call.png"
// import chat from "../../assets/chat.png"

// function Teacher() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <Box height={75} />

//       <Box sx={{ display: "flex", pl: 2, pr: 4 }}>
//         <Sidenavbar />

//         <div className="flex flex-col w-full gap-4 bg-slate-50 p-4 overflow-y-auto">

//           {/* ROW 1 */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

//             {/* Column 1 */}
//             <div className="flex flex-col gap-4">

//               <TeacherCards
//                 title="Enrolled Students"
//                 count="300"
//                 image="https://cdn-icons-png.flaticon.com/128/4717/4717944.png"
//               />

//               <TeacherCards
//                 title="Total Teachers"
//                 count="50"
//                 image="https://cdn-icons-png.flaticon.com/128/3061/3061038.png"
//               />

//               <div className="shadow-xl rounded-xl bg-white w-full px-4 py-3 border-2
//                 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl">
//                 <p className="text-xl font-serif font-semibold mb-2">Academic Progress</p>
//                 <PieChart
//                   className="h-60"
//                   data={[
//                     { title: "Pass", value: 80, color: "#E38627" },
//                     { title: "Fail", value: 20, color: "#c65353" },
//                   ]}
//                   label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
//                   lineWidth={35}
//                   labelPosition={80}
//                 />

//                 <div className="mt-3 flex gap-6 items-center justify-center">
//                   <div className="flex items-center gap-2">
//                     <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#E38627' }}></span>
//                     <span>Pass</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#c65353' }}></span>
//                     <span>Fail</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-4">

//               <Progress />

//               {/* Meeting + Chat Row */}
//               <div className="flex flex-row gap-3">
//                 <div className="shadow-md rounded-xl px-4 py-4 bg-white border-2
//                   hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 cursor-pointer
//                   flex justify-between items-center w-1/2">
//                   <p className="text-xl font-serif font-semibold">Meeting</p>
//                   <img src={meeting} className="h-14" />
//                 </div>

//                 <div className="shadow-md rounded-xl px-4 py-4 bg-white border-2
//                   hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 cursor-pointer
//                   flex justify-between items-center w-1/2">
//                   <p className="text-xl font-serif font-semibold">Real Time Chat</p>
//                   <img src={chat} className="h-14" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ROW 2 - Assignments */}
//           <div className="w-full">
//             <Assignments />
//           </div>

//           {/* ROW 3 - Class Schedule */}
//           <div className="w-full">
//             <ClassSchedule />
//           </div>
//         </div>
//       </Box>
//     </div>
//   )
// }

// export default Teacher;



// import React from 'react'
// import { Navbar, TeacherCards } from "../../components/index"
// import { PieChart } from 'react-minimal-pie-chart';
// import Progress from "../../components/Progress"
// import Assignments from "../../components/Assignments"
// import ClassSchedule from "../../components/classSchedule"
// import Sidenavbar from '../../components/Sidenavbar';
// import Box from '@mui/material/Box'
// import meeting from "../../assets/video-call.png"
// import chat from "../../assets/chat.png"

// function Teacher() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <Box height={75} />

//       <Box sx={{ display: "flex", pl: 2, pr: 4 }}>
//         <Sidenavbar />

//         <div className="flex flex-col w-full gap-4 bg-slate-50 p-4 overflow-y-auto">

//           {/* ROW 1 */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

//             {/* Column 1 (Left Section) */}
//             <div className="flex flex-col gap-4 ">

//               <TeacherCards
//                 title="Enrolled Students"
//                 count="300"
//                 image="https://cdn-icons-png.flaticon.com/128/4717/4717944.png"
//               />

//               <TeacherCards
//                 title="Total Teachers"
//                 count="50"
//                 image="https://cdn-icons-png.flaticon.com/128/3061/3061038.png"
//               />

//               <div className="shadow-xl rounded-xl bg-white w-[400px] px-4 py-3 border-2
//                 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl">
//                 <p className="text-xl font-serif font-semibold mb-2">Academic Progress</p>
//                 <PieChart
//                   className="h-52"
//                   data={[
//                     { title: "Pass", value: 80, color: "#E38627" },
//                     { title: "Fail", value: 20, color: "#c65353" },
//                   ]}
//                   label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
//                   lineWidth={35}
//                   labelPosition={80}
//                 />

//                 <div className="mt-3 flex gap-6 items-center justify-center">
//                   <div className="flex items-center gap-2">
//                     <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#E38627' }}></span>
//                     <span>Pass</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#c65353' }}></span>
//                     <span>Fail</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Column 2 (Right Section filling remaining width) */}
//             <div className="flex flex-col gap-4 w-full">

//               <Progress />

//               {/* <div className="flex flex-row gap-3"> */}
//                 {/* <div className="shadow-md rounded-xl px-4 py-4 bg-white border-2
//                   hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 cursor-pointer
//                   flex justify-between items-center w-[500px]">
//                   <p className="text-xl font-serif font-semibold">Meeting</p>
//                   <img src={meeting} className="h-14" />
//                 </div> */}

//                 {/* <div className="shadow-md rounded-xl px-4 py-4 bg-white border-2
//                   hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 cursor-pointer
//                   flex justify-between items-center w-1/2">
//                   <p className="text-xl font-serif font-semibold">Real Time Chat</p>
//                   <img src={chat} className="h-14" />
//                 {/* </div> */}
//               {/* </div>  */}

//               {/* Meeting Card */}
// <div
//   className="shadow-lg rounded-2xl px-5 py-5 bg-white border border-gray-200 
//   hover:border-orange-400 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer
//   flex justify-between items-center w-[500px] group"
// >
//   <div>
//     <p className="text-2xl font-semibold font-serif text-gray-800 group-hover:text-orange-600">
//       Meetings
//     </p>
//     <p className="text-sm text-gray-500 mt-1">
//       Upcoming: <span className="font-semibold text-gray-700">3 scheduled</span>
//     </p>
//     <p className="text-sm text-gray-500">
//       Latest: <span className="font-semibold text-gray-700">Parent–Teacher Meeting</span>
//     </p>
//   </div>

//   <img
//     src={meeting}
//     className="h-14 transform group-hover:scale-110 transition-all duration-300"
//   />
// </div>


// {/* Real-time Chat Card */}
// <div
//   className="shadow-lg rounded-2xl px-5 py-5 bg-white border border-gray-200 
//   hover:border-orange-400 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer
//   flex justify-between items-center w-[500px] group"
// >
//   <div>
//     <p className="text-2xl font-semibold font-serif text-gray-800 group-hover:text-orange-600">
//       Real-Time Chat
//     </p>
//     <p className="text-sm text-gray-500 mt-1">
//       Messages Today: <span className="font-semibold text-gray-700">120+</span>
//     </p>
//     <p className="text-sm text-gray-500">
//       Active Conversations: <span className="font-semibold text-gray-700">8 ongoing</span>
//     </p>
//   </div>

//   <img
//     src={chat}
//     className="h-14 transform group-hover:scale-110 transition-all duration-300"
//   />
// </div>

//             </div>
//           </div>

//           {/* ROW 2 - Assignments (FULL WIDTH) */}
//           <div >
//             <Assignments />
//           </div>

//           {/* ROW 3 - Class Schedule (FULL WIDTH) */}
//           <div >
//             <ClassSchedule />
//           </div>

//         </div>
//       </Box>
//     </div>
//   )
// }

// export default Teacher;

import React from 'react'
import { Navbar, TeacherCards } from "../../components/index"
import { PieChart } from 'react-minimal-pie-chart';
import Progress from "../../components/Progress"
import Assignments from "../../components/Assignments"
import ClassSchedule from "../../components/classSchedule"
import Sidenavbar from '../../components/Sidenavbar';
import Box from '@mui/material/Box'
import meeting from "../../assets/video-call.png"
import chat from "../../assets/chat.png"

function Teacher() {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <Navbar />
      <Box height={75} />

      <Box sx={{ display: "flex", pl: 2, pr: 4 }}>
        <Sidenavbar />

        <div className="flex flex-col w-full gap-4 p-4 overflow-y-auto">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7">

            {/* Column 1 (Left Section) */}
            <div className="flex flex-col gap-y-6  w-full">

              <TeacherCards
                title="Enrolled Students"
                count="300"
                image="https://cdn-icons-png.flaticon.com/128/4717/4717944.png"
              />

              <TeacherCards
                title="Total Teachers"
                count="50"
                image="https://cdn-icons-png.flaticon.com/128/3061/3061038.png"
              />

              <div className=" rounded-xl bg-white w-full px-4 py-3 
                 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-blue-300 ">
                <p className="text-xl font-serif font-semibold mb-2">Academic Progress</p>

                <PieChart
                  className="h-60 mt-5"
                  data={[
                    { title: "Pass", value: 80, color: "#E38627" },
                    { title: "Fail", value: 20, color: "#c65353" },
                  ]}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                  lineWidth={35}
                  labelPosition={120}
                  
                />

                <div className="mt-16 flex gap-10 items-center justify-center">
                  <div className="flex items-center gap-2 text-xl">
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#E38627' }}></span>
                    <span>Pass</span>
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#c65353' }}></span>
                    <span>Fail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 (Right) */}
            <div className="flex flex-col gap-y-6 w-full ">

              <Progress />

              {/* Meeting Card */}
              <div
                className="shadow-lg rounded-2xl px-5 py-5 bg-white border border-gray-200
                hover:border-orange-400 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer
                flex justify-between items-center w-full group relative overflow-hidden"
              >
                {/* decorative circle */}
                <div className="absolute -top-6 -right-10 w-28 h-28 bg-orange-100 rounded-full opacity-60
                group-hover:scale-150 transition-all duration-500"></div>

                <div className="z-10">
                  <p className="text-2xl font-semibold font-serif text-gray-800 group-hover:text-orange-600">
                    Meetings
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Upcoming: <span className="font-semibold text-gray-700">3 scheduled</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Latest: <span className="font-semibold text-gray-700">Parent–Teacher Meeting</span>
                  </p>

                  <button
                    className="mt-3 px-3 py-1 text-sm rounded-lg border border-orange-300 text-orange-600
                    hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    Join Now
                  </button>
                </div>

                <img
                  src={meeting}
                  className="h-14 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10"
                />
              </div>

              {/* Real-Time Chat Card */}
              <div
                className="shadow-lg rounded-2xl px-5 py-5 bg-white border border-gray-200 
                hover:border-orange-400 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer
                flex justify-between items-center w-full group relative overflow-hidden"
              >
                <div className="absolute -bottom-6 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-60
                group-hover:scale-150 transition-all duration-500"></div>

                <div className="z-10">
                  <p className="text-2xl font-semibold font-serif text-gray-800 group-hover:text-orange-600">
                    Real-Time Chat
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Messages Today: <span className="font-semibold text-gray-700">120+</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Active Conversations: <span className="font-semibold text-gray-700">8 ongoing</span>
                  </p>

                  <button
                    className="mt-3 px-3 py-1 text-sm rounded-lg border border-blue-300 text-blue-600
                    hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Open Chat
                  </button>
                </div>

                <img
                  src={chat}
                  className="h-14 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10"
                />
              </div>

            </div>


          </div>

          {/* FULL WIDTH SECTIONS */}
          <div className='mt-6'>
            <Assignments />
          </div>

          <div className='mt-6'>
            <ClassSchedule />
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Teacher;

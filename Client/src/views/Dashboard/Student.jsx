// import React from 'react'
// import { Card } from "../../components/index"
// // import Navbar from "../../../../src/components/Navbar"
// import {Navbar} from '../../components/index'
// // import BasicPie from '../../../../src/components/Piechart'
// import BasicPie from '../../components/Piechart'
// import conference from "../../assets/conference.png"
// import exam from "../../assets/exam.png"
// import subjects from "../../assets/knowledge.png"
// import result from "../../assets/result.png"
// import attendance from "../../assets/availability.png"
// import performance from "../../assets/performance.png"
// // import Sidenavbar from '../../../../src/components/Sidenavbar'
// import Sidenavbar from '../../components/Sidenavbar'
// import Box from '@mui/material/Box'

// function Student() {
//   return (
//     <div className='bg-gray-50'>
//       <Navbar />
//       <Box height={34} />
//       <Box sx={{ display: "flex" }}>
//         <Sidenavbar />
//         <div className='mt-7'>
//           {/* <div className='flex flex-col items-start py-3 px-6 shadow-md w-80 ml-2 mt-3 '>
//             <p className='text-4xl font-thin'>WELCOME!!</p>
//             <p className='font-bold text-2xl font-serif'>Suraj Shende</p>
//             <p className='font-bold  text-2xl font-serif'>sec-A</p>
//           </div> */}

//           <div className='flex justify-around items-center mt-10  '>
//             <div className='flex flex-col justify-center items-center'>
//               <div className='shadow-xl p-3 border-black border-solid border-2 bg-red-50 rounded-md'>
//                 <p className='mb-2 text-2xl font-serif font-bold'>Attendance :</p>
//                 <BasicPie />
//               </div>
//             </div>
//             <div className='flex items-center flex-wrap rounded-xl w-[60%] p-3'>
//               <div className='flex flex-row flex-wrap justify-around'>
//                 <Card
//                   image={conference}
//                   title="Upcoming Classes"
//                 />
//                 <Card
//                   image={exam}
//                   title="Upcoming Examination"
//                 />
//                 <Card
//                   image={subjects}
//                   title="Registered Subjects"
//                 />
//                 <Card
//                   image={result}
//                   title="Current Results"
//                 />
//                 <Card
//                   image={attendance}
//                   title="Attendance"
//                 />
//                 <Card
//                   image={performance}
//                   title="Performance"
//                 />

//               </div>
//             </div>
//           </div>
//         </div>
//       </Box>
//     </div>



//   )
// }

// export default Student




import React from 'react'
import { Card } from "../../components/index"
import { Navbar } from '../../components/index'
import BasicPie from '../../components/Piechart'
import conference from "../../assets/conference.png"
import exam from "../../assets/exam.png"
import subjects from "../../assets/knowledge.png"
import result from "../../assets/result.png"
import attendance from "../../assets/availability.png"
import performance from "../../assets/performance.png"
import Sidenavbar from '../../components/Sidenavbar'
import Box from '@mui/material/Box'

import {
  CalendarDays,
  GraduationCap,
  BookOpen,
  BarChart3,
  CheckCircle,
  LineChart
} from "lucide-react";

function Student() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Box height={34} />

      <Box sx={{ display: "flex" }}>
        <Sidenavbar />

        <div className="mt-7 px-6 w-full">

          {/* MAIN WRAPPER */}
          <div className="flex justify-around items-start mt-10">

            {/* LEFT CARD - ATTENDANCE PIE */}
            <div className="flex flex-col justify-center items-center">

              <div className="
                shadow-lg p-5 rounded-2xl border border-blue-200 bg-white
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
              ">
                <p className="mb-4 text-2xl font-serif font-bold text-blue-800 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Attendance
                </p>

                <div className="scale-105 hover:scale-110 transition-transform duration-300">
                  <BasicPie />
                </div>

              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex items-center flex-wrap rounded-xl w-[60%] p-3">

              <div className="flex flex-row flex-wrap justify-around gap-y-6">

                <Card
                  image={conference}
                  title="Upcoming Classes"
                  icon={<CalendarDays className="h-5 w-5 text-blue-600" />}
                />

                <Card
                  image={exam}
                  title="Upcoming Examination"
                  icon={<GraduationCap className="h-5 w-5 text-blue-600" />}
                />

                <Card
                  image={subjects}
                  title="Registered Subjects"
                  icon={<BookOpen className="h-5 w-5 text-blue-600" />}
                />

                <Card
                  image={result}
                  title="Current Results"
                  icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
                />

                <Card
                  image={attendance}
                  title="Attendance"
                  icon={<CheckCircle className="h-5 w-5 text-blue-600" />}
                />

                <Card
                  image={performance}
                  title="Performance"
                  icon={<LineChart className="h-5 w-5 text-blue-600" />}
                />

              </div>
            </div>
          </div>

        </div>
      </Box>
    </div>
  )
}

export default Student





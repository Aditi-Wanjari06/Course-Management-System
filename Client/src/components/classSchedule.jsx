// import React from "react";
// import classes from "../Data/classScheduleData";
// import play from "../assets/play-button.png"

// function ClassSchedule() {
//   return (
//     <>
//       <div className="shadow-md rounded-lg px-3 py-3 bg-white border-2 hover:border-2 hover:border-orange-300 border-orange-300 w-[475px]">
//         <div className='flex flex-row justify-between items-center mb-2 border-b-2 pb-3'>
//           <p className='text-lg font-semibold font-serif'>Class Schedule</p>
//           <p className='text-white text-sm cursor-pointer bg-green-500 px-3 py-1 rounded-md'>View All</p>
//         </div>

//         {classes && classes.length > 0 ? (
//           classes.map((item, index) => (
//             <div>
//               <div className="flex flex-row items-center justify-between border-b-2 py-1" key={index} >

//                 <div className=" flex flex-col items-start gap-2 ">
//                   <p className="text-[18px] font-semibold ">{item.topic}</p>
//                   <p className="text-sm bg-blue-100 px-2  text-blue-500 rounded-md font-mono">{(item.subject).toLowerCase()}</p>
//                   <p className="text-xs text-gray-500">by {item.teacherName}</p>
//                 </div>

//                 <div className="text-xs bg-orange-200 px-2 py-1 rounded-md">
//                   <p>{item.dueDate};{item.time}</p>
//                 </div>

//                 <div className="flex flex-row items-center gap-1 bg-green-500 px-2 rounded-md hover:bg-green-300 cursor-pointer">
//                   <img src={play} className="h-4  " />
//                   <p className="text-sm">Join</p>
//                 </div>

//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No assignments found</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default ClassSchedule;



import React from "react";
import classes from "../Data/classScheduleData";
import play from "../assets/play-button.png";
import { School } from "lucide-react";

function ClassSchedule() {
  return (
    <div className="
        shadow-lg rounded-xl px-4 py-4 bg-white
        border border-blue-200 hover:border-blue-400 hover:shadow-xl
        transition-all duration-300 
    ">
      <div className="flex justify-between items-center mb-3 border-b pb-2">
        <p className="text-xl font-semibold font-serif flex items-center gap-2">
          <School className="h-5 w-5 text-blue-600" /> Class Schedule
        </p>
        <p className="text-white bg-blue-600 text-sm cursor-pointer px-3 py-1 rounded-md hover:bg-blue-500 transition">
          View All
        </p>
      </div>

      {classes && classes.length > 0 ? (
        classes.map((item, index) => (
          <div key={index}>
            <div
              className="
                flex justify-between items-center border-b py-2 
                hover:bg-blue-50 rounded-md px-2 transition-all duration-200
              "
            >
              <div className="flex flex-col gap-1">
                <p className="text-[18px] font-semibold text-gray-800">
                  {item.topic}
                </p>

                <p className="text-sm bg-blue-100 px-2 text-blue-600 rounded-md font-mono">
                  {item.subject.toLowerCase()}
                </p>

                <p className="text-xs text-gray-500">by {item.teacherName}</p>
              </div>

              <p className="text-xs bg-blue-200 px-2 py-1 rounded-md text-blue-800">
                {item.dueDate} — {item.time}
              </p>

              <div className="
                  flex items-center gap-2 bg-green-600 text-white px-3 py-1 
                  rounded-md cursor-pointer hover:bg-green-500 transition
                "
              >
                <img src={play} className="h-4" />
                <p className="text-sm">Join</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Classes Found</p>
      )}
    </div>
  );
}

export default ClassSchedule;

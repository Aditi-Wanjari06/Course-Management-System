// import React from 'react'
// import assignmentData from './AssignmentData'

// function Assignments() {
//     return (
//         <div className='shadow-md w-[400px] px-3 py-3 bg-white rounded-lg border-2 hover:border-2 hover:border-orange-300 border-orange-300'>
//             <div className='flex flex-row justify-between items-center mb-2 border-b-2 pb-3'>
//                 <p className='text-lg font-semibold font-serif'>Assignments</p>
//                 <p className='text-white text-sm cursor-pointer bg-green-500 px-3 py-1 rounded-md'>View All</p>
//             </div>
//             {assignmentData && assignmentData.length > 0 ? (
//                 assignmentData.map((item, index) => (
//                     <div className="flex flex-col items-center cursor-pointer ">
//                         <div className='my-1 w-[380px] rounded-md border-b-2'
//                             key={index}>

//                             <div className="b-2 p-2 flex flex-col gap-5 ">
//                                 <div className="flex gap-5">
//                                     <img src="https://cdn-icons-png.flaticon.com/128/752/752326.png" className='h-9' />
//                                     <div className='flex flex-col items-center'>
//                                         <p className=''>{(item.subject).toUpperCase().trim()}</p>
//                                         <div className='flex flex-row items-center gap-2'>
//                                             <p className='bg-gray-400 h-2 w-2 rounded-full'></p>
//                                             <p className='text-gray-400 text-sm'>Assignments 1</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-row justify-between text-[13px]'>
//                                 <p className='bg-green-600 text-white px-2 rounded-lg'>{item.status}</p>
//                                 <p className='text-red-500'>Submit before :{item.dueDate};{item.time}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 ))
//             ) : (
//                 <p>No assignments found</p>
//             )}

//         </div>
//     )
// }

// export default Assignments 


import React from "react";
import assignmentData from "./AssignmentData";
import { ClipboardList } from "lucide-react";

function Assignments() {
  return (
    <div className="
        shadow-lg w-full px-4 py-4 bg-white rounded-xl
        border border-blue-200 hover:border-blue-400 hover:shadow-xl
        transition-all duration-300
    ">
      <div className="flex justify-between items-center mb-3 border-b pb-2">
        <p className="text-xl font-semibold font-serif flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-600" /> Assignments
        </p>
        <p className="text-white bg-blue-600 text-sm cursor-pointer px-3 py-1 rounded-md hover:bg-blue-500 transition">
          View All
        </p>
      </div>

      {assignmentData && assignmentData.length > 0 ? (
        assignmentData.map((item, index) => (
          <div className="cursor-pointer">
            <div
              className="my-1 w-full rounded-md border-b pb-2 hover:bg-blue-50 transition"
              key={index}
            >
              <div className="p-2 flex flex-col gap-3">
                <div className="flex gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/752/752326.png"
                    className="h-10"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-700">
                      {item.subject.toUpperCase()}
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="bg-gray-400 h-2 w-2 rounded-full"></p>
                      <p className="text-gray-500 text-xs">Assignment 1</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-xs">
                  <p className="bg-green-600 text-white px-2 py-1 rounded-md">
                    {item.status}
                  </p>
                  <p className="text-red-500 font-medium">
                    Submit before: {item.dueDate}, {item.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No assignments found</p>
      )}
    </div>
  );
}

export default Assignments;

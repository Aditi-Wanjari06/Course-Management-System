// import React from "react";
// import studentProgress from "../Data/ProgressData";

// // import ProgressBar from "@ramonak/react-progress-bar";
// // import CircularWithValueLabel from "./CircularProgress";

// function Progress() {

//   const colorClasses = [
//     'bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-fuchsia-400', 'bg-cyan-400', 'bg-teal-400',
//     'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-orange-400', 'bg-emerald-400', 'bg-violet-400', 'bg-indigo-400', 'bg-rose-400',
//   ];

//   const getRandomClass = () =>
//     colorClasses[Math.floor(Math.random() * colorClasses.length)];

//   return (
//     <div className="shadow-md px-3 py-3 rounded-lg bg-white w-[400px] border-2 hover:border-2 hover:border-orange-300 border-orange-300 ">
//       <div className="flex flex-row justify-between items-center mb-2 border-b-2 pb-3">
//         <p className="text-lg font-semibold font-serif">Student Progress</p>
//         <p className="text-white text-sm cursor-pointer bg-green-500 px-3 py-1 rounded-md">View All</p>
//       </div>
//       <div>
//         {studentProgress && studentProgress.length > 0 ? (
//           studentProgress.map((item, index) => (
//             <div key={index} className="flex justify-between items-center mb-1 hover:bg-orange-100 hover:rounded-md px-2">
//               <div className="flex items-center flex-row gap-x-6">
//                 <img src={item.image} alt="user-profile" className="h-8 my-2" />
//                 <p className="font-medium text-gray-500">{item.name}</p>
//               </div>
//               <div>
//                 <p className={`text-white px-3  rounded-xl ${getRandomClass()}`}>{item.progress}</p>

//               </div>
//             </div>

//           ))
//         ) : (
//           <p>No Progress found</p>
//         )}

//       </div>

//     </div>
//       )
// };

// export default Progress



import React from "react";
import studentProgress from "../Data/ProgressData";
import { TrendingUp } from "lucide-react";

function Progress() {
  const colorClasses = [
    'bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-fuchsia-400', 'bg-cyan-400',
    'bg-teal-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400',
    'bg-orange-400', 'bg-emerald-400', 'bg-violet-400', 'bg-indigo-400', 'bg-rose-400',
  ];

  const getRandomClass = () => colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <div className="
        shadow-lg px-4 py-4 rounded-xl bg-white w-full hover:shadow-lg
        transition-all duration-300 hover:shadow-blue-300
    ">
      <div className="flex justify-between items-center mb-3 border-b pb-2">
        <p className="text-lg font-semibold font-serif flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" /> Student Progress
        </p>
        <p className="text-white bg-blue-600 text-sm cursor-pointer px-3 py-1 rounded-md hover:bg-blue-500 transition">
          View All
        </p>
      </div>

      <div>
        {studentProgress && studentProgress.length > 0 ? (
          studentProgress.map((item, index) => (
            <div
              key={index}
              className="
                flex justify-between items-center mb-1 px-2 py-2
                hover:bg-blue-50 rounded-lg transition-all duration-200
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="profile"
                  className="h-8 w-8 rounded-full shadow-sm"
                />
                <p className="font-medium text-gray-700">{item.name}</p>
              </div>

              <p className={`text-white px-3 rounded-xl shadow ${getRandomClass()}`}>
                {item.progress}
              </p>
            </div>
          ))
        ) : (
          <p>No Progress Found</p>
        )}
      </div>
    </div>
  );
}

export default Progress;

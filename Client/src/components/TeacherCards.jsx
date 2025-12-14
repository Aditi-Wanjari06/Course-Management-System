// import React from 'react'

// function TeacherCards({ title, count, image, className = " ", ...props }) {
//     return (
//         <div className='w-80'>
//             <div className=' p-3 w-80 rounded-lg shadow-xl bg-white hover:bg-orange-50 border-2 hover:border-2 hover:border-orange-300
//             mb-3 hover:text-orange-800 border-orange-300' >

//                 <div className='flex justify-between items-center'>
//                     <p className={`text-2xl font-serif ${className}`} {...props}>{title}</p>

//                     {image && <img src={image} alt='icon' className={` h-16 ${className}`} {...props} />}

//                 </div>
//                 <p className={`text-3xl font-semibold font-mono mt-2 text-end rounded-2xl ${className}`} {...props}>{count}</p>

//             </div>
//         </div>
//     )
// }

// export default TeacherCards

import React from "react";
import { BarChart3, Users } from "lucide-react";

function TeacherCards({ title, count, image, className = " ", ...props }) {
  return (
    <div className="w-full">
      <div
        className="
                    p-4  rounded-xl bg-white shadow-md hover:shadow-lg  hover:-translate-y-1 
                    transition-all duration-300 cursor-pointer hover:shadow-blue-300"
      >
        <div className="flex justify-between items-center">
          <p
            className={`text-2xl font-serif text-blue-900 flex items-center gap-2 ${className}`}
            {...props}
          >
            <Users className="h-6 w-6 text-blue-600" />
            {title}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
         
          <p
            className={`
                        text-4xl font-bold ml-10 mt-3 text-blue-700 tracking-wide
                        ${className}
                    `}
            {...props}
          >
            {count}
          </p>

           {image && (
            <img
              src={image}
              alt="icon"
              className={`h-16 rounded-lg hover:scale-110 transition-transform duration-300 ${className}`}
              {...props}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherCards;

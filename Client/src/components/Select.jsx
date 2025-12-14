import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Select = forwardRef(function Select(
  {
    label,
    options = [],
    icon,
    className = "",
    labelClassName = "",
    ...props
  },
  ref
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {label && (
        <label
          className={`inline-block mb-1 pl-1 font-semibold font-serif text-md text-blue-800 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div
        className="
          flex items-center gap-3
          bg-white border border-gray-300 rounded-2xl px-3 py-2
          shadow-sm transition-all duration-300
          hover:shadow-lg hover:-translate-y-[2px]
          focus-within:ring-2 focus-within:ring-blue-400
        "
      >
        {icon && <span className="text-blue-600">{icon}</span>}

        <select
          ref={ref}
          {...props}
          className={`
            w-full bg-transparent outline-none cursor-pointer
            text-gray-800 placeholder-gray-400
            focus:bg-gray-50 transition-all duration-200
            ${className}
          `}
        >
          <option value="" disabled>Select option</option>
          {options?.map((option, index) => (
            <option key={index} value={option} className="text-gray-900">
              {option}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
});

export default Select;



// import React from 'react'


// function Select({
//     label,
//     options,
//     className = "",
//     ...props
// }, ref) {

//     return (
//         <div className='w-full'>
//             {label && <label className={`mr-2 font-semibold font-serif text-sm text-gray-700 ${className}`}>
//                 {label}
//             </label>}

//             <select
//                 className={`w-full px-3 py-1 rounded-md bg-white text-black outline-none
//           focus:bg-gray-50 focus:ring-2 focus:ring-blue-300 duration-200 border border-gray-300 mt-1
//           ${className}`}
//                 {...props}
//                 ref={ref}
//             >
//                 {options?.map((option) => (
//                     <option key={option} value={option}>
//                         {option}
//                     </option>
//                 ))}

//             </select>
//         </div>
//     )
// }

// export default React.forwardRef(Select)
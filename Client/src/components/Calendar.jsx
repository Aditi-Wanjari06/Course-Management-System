// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import "./calendar.css"

// function MyApp() {
//   const [value, setValue] = useState(new Date());

//   return (
//     <div className='text-lg mt-3 '>
//         <div>
//       <Calendar onChange={setValue} value={value}  
      
//       className='rounded-xl shadow-md p-3 calendar-container'
//       tileClassName="text-center py-2 hover:bg-red-300"

//       // Custom format for month in navigation
//         formatMonthYear={(locale, date) =>
//           date.toLocaleString(locale, { month:"long", year:"numeric" })
//         }

//         // Custom format for individual days
//         formatDay={(locale, date) =>
//           date.toLocaleDateString(locale, { day: "numeric" })
//         }

//         // Optional: Customize weekday headers (Sun, Mon, etc.)
//         formatShortWeekday={(locale, date) =>
//           date.toLocaleDateString(locale, { weekday: 'short' }).charAt(0)
//         }
//     />
//       </div>
//     </div>
//   );
// }

// export default MyApp;


import { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./calendar.css";

function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6 flex justify-center"
    >
      <div className="bg-white shadow-2xl rounded-2xl p-6 border border-gray-200 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4 flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-blue-600" /> School Calendar
        </h2>

        <Calendar
          onChange={setValue}
          value={value}
          className="custom-calendar"
          tileClassName="calendar-day"
          prevLabel={<FaChevronLeft className="text-blue-600 hover:text-blue-800" />}
          nextLabel={<FaChevronRight className="text-blue-600 hover:text-blue-800" />}
          prev2Label={null}
          next2Label={null}
          formatMonthYear={(locale, date) =>
            date.toLocaleString(locale, { month: "long", year: "numeric" })
          }
          formatDay={(locale, date) => date.toLocaleDateString(locale, { day: "numeric" })}
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: "short" }).slice(0, 1)
          }
        />
      </div>
    </motion.div>
  );
}

export default MyApp;

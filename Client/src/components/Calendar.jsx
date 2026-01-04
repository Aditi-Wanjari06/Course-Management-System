import { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import "./Calender.css"
function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center "
    >
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-4 border border-gray-200">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3 text-blue-700">
          <FaCalendarAlt />
          <h2 className="text-xl font-bold font-serif">Calendar</h2>
        </div>

        <Calendar
          locale="en-US"               // ✅ Sunday first
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

          formatDay={(locale, date) =>
            date.toLocaleDateString(locale, { day: "numeric" })
          }

          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: "short" }).slice(0, 2)
          }
        />
      </div>
    </motion.div>
  );
}

export default MyCalendar;


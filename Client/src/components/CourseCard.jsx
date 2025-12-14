import React, { useEffect, useState } from "react";
import { Pencil, Trash2, User2, BookOpen } from "lucide-react";

function CourseCard({
  title,
  description,
  createdBy,
  onPreview,
  image,
  progress,
  btnEdit,
  btnDelete,
  onEdit,
  onDelete,
}) {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user?.user?.role) {
          setUserRole(user.user.role);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div
      className="
       w-[300px] m-4 p-4 rounded-xl bg-white shadow-md border border-gray-200
       hover:shadow-xl hover:-translate-y-1 hover:border-blue-400
       transition-all duration-300 overflow-hidden cursor-pointer
      "
      onClick={onPreview}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      )}

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          {title}
        </h2>

        <p className="text-gray-600 mt-1 text-sm leading-snug">{description}</p>

        <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
          <User2 className="h-4 w-4 text-blue-500" />
          Created by: <span className="font-medium text-gray-700">{createdBy}</span>
        </p>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-700 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Admin Buttons */}
        {userRole === "Admin" && (
          <div className="flex gap-2 mt-4">
            <button
              className="
                flex items-center gap-1 px-3 py-1.5 text-sm
                bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg
                shadow-sm hover:shadow-md transition-all duration-300 active:scale-95
              "
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.();
              }}
            >
              <Pencil className="h-4 w-4" />
              {btnEdit}
            </button>

            <button
              className="
                flex items-center gap-1 px-3 py-1.5 text-sm
                bg-red-500 hover:bg-red-600 text-white rounded-lg
                shadow-sm hover:shadow-md transition-all duration-300 active:scale-95
              "
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.();
              }}
            >
              <Trash2 className="h-4 w-4" />
              {btnDelete}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;





// import React from "react";
// import { useEffect } from "react";
// //  image, title, subtitle, progress, onPreview, onDelete, onEdit

// function CourseCard({
//   title,
//   description,
//   createdBy,
//   onPreview,
//   image,
//   progress,
//   btnEdit,
//   btnDelete,
//   onEdit,
//   onDelete,
// }) {
//   const [userRole, setUserRole] = React.useState("");

//   useEffect(() => {
//     const storeuser = localStorage.getItem("user");
//     // console.log(storeuser);

//     if (storeuser) {
//       try {
//         const user = JSON.parse(storeuser);

//         if (user.user.role) {
//           setUserRole(user.user.role);
//         }
//         console.log(user.user.role);
        
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//   }, []);

//   return (
//     <div
//       className="w-[300px] m-4 p-4 shadow-lg rounded-md bg-white hover:bg-gray-50 cursor-pointer"
//       onClick={onPreview}
//     >
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-40 object-cover rounded-md"
//         />
//       )}

//       <div className="mt-2">
//         <h2 className="text-xl font-semibold">{title}</h2>
//         <p className="text-gray-500">{description}</p>
//         <p>{createdBy}</p>

//         {/* Progress Bar */}

//         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//           <div
//             className="bg-green-500 h-2.5 rounded-full"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>

//         {/* {progress && (
//           <p className="text-sm text-gray-600 mt-1">{progress}% completed</p>
//         )}  */}

//         {/* Buttons */}
//         {userRole === "Admin" && (
//           <div className="flex gap-2 mt-3 justify-start">
//             <button
//               className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               onClick={(e) => {
//                 e.stopPropagation(); // prevent card click
//                 onEdit?.();
//               }}
//             >
//               {btnEdit}
//             </button>

//             <button
//               className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onDelete?.();
//               }}
//             >
//               {btnDelete}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseCard;

// import React, { useEffect } from "react";
// import LinearProgressWithLabel from "./Linearprogress";

// function CourseCard({ image, title, subtitle, className, ...props }) {

//   const [userRole, setUserRole] = React.useState("")
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("signupData"))
//     if (userData?.role) {
//       setUserRole(userData.role)
//     }
//   }, [])

//   return (
//     <div
//       className={` w-80 flex flex-col items-center mt-6 shadow-2xl gap-3 rounded-xl bg-white cursor-pointer
//          ${className}`}
//       {...props}>
//       <img src={image} alt="icon" className="h-48 w-full object-cover rounded-t-lg" />
//       <div className="pb-4 flex flex-col items-center gap-y-4">
//         <p className="text-2xl font font-semibold text-center g font-serif text-orange-500 hover:text-orange-500">{title}</p>
//         <span className="text-xl">{subtitle}</span>
//         <LinearProgressWithLabel />
//         {userRole === "Admin" && (
//           <div className="flex flex-row gap-10 mt-3">
//             <button className="bg-red-600 text-white px-3 rounded-md hover:bg-red-300 "

//             >Delete</button>
//             <button className="bg-green-600 text-white px-3 rounded-md hover:bg-green-300">Update</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseCard;

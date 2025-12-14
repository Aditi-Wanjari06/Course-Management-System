import React from 'react'
// import { Navbar } from '../../../src/components/index'
import { Navbar } from '../components'
import { Box } from '@mui/material'
// import Sidenavbar from '../../../src/components/Sidenavbar'
import Sidenavbar from '../components/Sidenavbar'

function Home() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 1, pr: 4 }}>

        <Sidenavbar />

        <div>
          <h1 className='pl-3 text-center'>Home  </h1>
        </div>
      </Box>
    </div>
  )
}

export default Home




// import { useState } from "react";
// import { FaTimes, FaEnvelope, FaRedo } from "react-icons/fa";
// import { Button, Input } from "../components";
// import toast from "react-hot-toast";

// const ForgotPasswordModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState("");
//   const [step, setStep] = useState(1);
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   if (!isOpen) return null;

//   const handleSendOtp = () => {
//     if (!email.trim()) {
//       toast.error("Enter your registered email");
//       return;
//     }
//     toast.success("OTP Sent Successfully!");
//     setStep(2);
//   };

//   const handleOTPChange = (value, index) => {
//     if (/^[0-9]?$/.test(value)) {
//       const updatedOtp = [...otp];
//       updatedOtp[index] = value;
//       setOtp(updatedOtp);

//       if (value && index < otp.length - 1) {
//         document.getElementById(`otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleVerifyOtp = () => {
//     if (otp.join("").length !== 4) {
//       toast.error("Enter complete OTP");
//       return;
//     }
//     toast.success("OTP Verified!");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
//       <div className="bg-white shadow-2xl rounded-2xl w-[420px] px-8 py-6 relative border border-gray-200">
        
//         <button
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition"
//           onClick={onClose}
//         >
//           <FaTimes size={22} />
//         </button>

//         <h2 className="text-2xl font-semibold text-blue-700 text-center mb-2">
//           Forgot Password
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           {step === 1 ? "Enter your registered email to receive OTP" : "Enter the OTP sent to your email"}
//         </p>

//         {step === 1 && (
//           <>
//             <Input
//               label="Email:"
//               type="email"
//               icon={<FaEnvelope className="text-blue-600" />}
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               required
//             />

//             <Button
//               className="bg-blue-600 text-white w-full mt-5 py-2 rounded-lg hover:bg-blue-700 hover:scale-[1.03] transition"
//               onClick={handleSendOtp}
//             >
//               Send OTP
//             </Button>
//           </>
//         )}

//         {step === 2 && (
//           <div className="flex flex-col items-center">
//             <div className="flex gap-3 my-3">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   id={`otp-${index}`}
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleOTPChange(e.target.value, index)}
//                   className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg outline-none"
//                 />
//               ))}
//             </div>

//             <Button
//               className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-[1.03] transition"
//               onClick={handleVerifyOtp}
//             >
//               Verify OTP
//             </Button>

//             <button
//               className="flex items-center gap-2 mt-3 text-blue-600 hover:underline"
//               onClick={handleSendOtp}
//             >
//               <FaRedo size={16} /> Resend OTP
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordModal;

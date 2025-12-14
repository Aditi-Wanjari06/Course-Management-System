// import React, { useState } from 'react';
// // import { Navbar } from "../../../src/components/index"
// // import Sidenavbar from "../../../src/components/Sidenavbar"
// import { Navbar } from '../components';
// import Sidenavbar from '../components/Sidenavbar';
// import { Box } from '@mui/material';
// const teachers = ["Mrs. Sharma", "Mr. Verma", "Principal"];

// const initialMessages = {
//     "Mrs. Sharma": [
//         { sender: "Teacher", text: "Riya performed well in Science today.", time: "10:00 AM" },
//         { sender: "Parent", text: "Thank you for the update!", time: "10:05 AM" },
//     ],
//     "Mr. Verma": [],
//     "Principal": [
//         { sender: "Principal", text: "School will be closed on July 4.", time: "9:30 AM" },
//     ],
// };

// const CommunicationPage = () => {
//     const [selectedRecipient, setSelectedRecipient] = useState("Mrs. Sharma");
//     const [messages, setMessages] = useState(initialMessages);
//     const [newMessage, setNewMessage] = useState("");

//     const handleSend = () => {
//         if (!newMessage.trim()) return;
//         const updated = {
//             ...messages,
//             [selectedRecipient]: [
//                 ...messages[selectedRecipient],
//                 {
//                     sender: "Parent",
//                     text: newMessage,
//                     time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//                 },
//             ],
//         };
//         setMessages(updated);
//         setNewMessage("");
//     };

//     return (
//         <div>
//             <Navbar />
//             <Box height={75} />
//             <Box sx={{ display: "flex", pl: 1, pr: 4 }}>

//                 <Sidenavbar />
//                 <div className="mx-auto">
//                     <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Parent Communication Portal</h1>

//                     <div className=" mx-auto  flex flex-row gap-6">
//                         {/* Sidebar: Recipients */}
//                         <div className="bg-white p-4 rounded-xl shadow-md w-[280px] border-2 border-orange-200">
//                             <h2 className="text-lg font-semibold mb-3">Contacts</h2>
//                             <ul className="space-y-2">
//                                 {teachers.map((teacher) => (
//                                     <li
//                                         key={teacher}
//                                         onClick={() => setSelectedRecipient(teacher)}
//                                         className={`cursor-pointer p-2 rounded-lg ${selectedRecipient === teacher
//                                             ? "bg-orange-100 text-orange-600 font-semibold"
//                                             : "hover:bg-gray-100"
//                                             }`}
//                                     >
//                                         {teacher}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Chat Window */}
//                         <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-md flex flex-col justify-between h-[500px] w-[700px]">
//                             <div className="mb-4">
//                                 <h2 className="text-xl font-semibold mb-2 border-b pb-2">
//                                     Chat with {selectedRecipient}
//                                 </h2>
//                                 <div className="overflow-y-auto h-[320px] pr-2 space-y-4">
//                                     {messages[selectedRecipient].length > 0 ? (
//                                         messages[selectedRecipient].map((msg, index) => (
//                                             <div
//                                                 key={index}
//                                                 className={`w-fit max-w-[80%] p-3 rounded-lg ${msg.sender === "Parent"
//                                                     ? "bg-indigo-100 self-end ml-auto text-right"
//                                                     : "bg-gray-200 self-start"
//                                                     }`}
//                                             >
//                                                 <p className="text-sm text-gray-800">{msg.text}</p>
//                                                 <p className="text-xs text-gray-500 mt-1">{msg.sender} • {msg.time}</p>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <p className="text-gray-500 text-sm">No messages yet.</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Message Input */}
//                             <div className="flex gap-2">
//                                 <input
//                                     type="text"
//                                     value={newMessage}
//                                     onChange={(e) => setNewMessage(e.target.value)}
//                                     placeholder="Type your message..."
//                                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                                 />
//                                 <button
//                                     onClick={handleSend}
//                                     className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Box>
//         </div>
//     );
// };

// export default CommunicationPage;



import React, { useState } from "react";
import { Navbar } from "../components";
import Sidenavbar from "../components/Sidenavbar";
import { Box } from "@mui/material";
import { FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const teachers = ["Mrs. Sharma", "Mr. Verma", "Principal"];

const initialMessages = {
  "Mrs. Sharma": [
    { sender: "Teacher", text: "Riya performed well in Science today.", time: "10:00 AM" },
    { sender: "Parent", text: "Thank you for the update!", time: "10:05 AM" },
  ],
  "Mr. Verma": [],
  "Principal": [{ sender: "Principal", text: "School will be closed on July 4.", time: "9:30 AM" }],
};

const CommunicationPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState("Mrs. Sharma");
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const updated = {
      ...messages,
      [selectedRecipient]: [
        ...messages[selectedRecipient],
        {
          sender: "Parent",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ],
    };
    setMessages(updated);
    setNewMessage("");
  };

  return (
    <>
      <Navbar />
      <Box height={75} />
      <Box sx={{ display: "flex", pl: 1, pr: 4 }}>
        <Sidenavbar />

        <div className="mx-auto w-full p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 tracking-wide">
            📩 Parent Communication Portal
          </h1>

          <div className="flex flex-row gap-6">
            {/* Contact Sidebar */}
            <div className="bg-white p-5 rounded-xl shadow-md w-[270px] border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
                <FiUser className="text-blue-600" /> Contacts
              </h2>

              <ul className="space-y-3">
                {teachers.map((teacher) => (
                  <li
                    key={teacher}
                    onClick={() => setSelectedRecipient(teacher)}
                    className={`cursor-pointer p-3 flex items-center gap-3 rounded-lg transition-all duration-300 ${
                      selectedRecipient === teacher
                        ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                        : "hover:bg-blue-50"
                    }`}
                  >
                    <FiMessageSquare />
                    {teacher}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat Window */}
            <div className="flex flex-col bg-white p-5 rounded-xl shadow-md h-[520px] w-[720px] border border-gray-200">
              <h2 className="text-xl font-semibold mb-3 border-b pb-2 text-gray-700">
                💬 Chat with <span className="text-blue-600">{selectedRecipient}</span>
              </h2>

              <div className="overflow-y-auto h-[360px] space-y-4 pr-2 transition-all duration-500">
                {messages[selectedRecipient].length > 0 ? (
                  messages[selectedRecipient].map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-end gap-2 animate-slideUp ${
                        msg.sender === "Parent" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm shadow-md">
                        {msg.sender === "Parent" ? "P" : "T"}
                      </div>

                      <div
                        className={`max-w-[70%] p-3 rounded-xl transition-transform duration-300 hover:scale-[1.02] ${
                          msg.sender === "Parent"
                            ? "bg-blue-100 text-blue-900 shadow-sm"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-[10px] text-gray-600 mt-1 font-medium">
                          {msg.sender} • {msg.time}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center pt-10">No messages yet. Start the conversation 👋</p>
                )}
              </div>

              {/* Input box */}
              <div className="flex gap-2 mt-auto">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
                />
                <button
                  onClick={handleSend}
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  Send <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default CommunicationPage;

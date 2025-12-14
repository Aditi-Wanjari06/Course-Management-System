// src/pages/CoursePreview.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
// import {Navbar} from "../../../src/components/index"
import { Navbar } from '../components';
import Sidenavbar from "../components/Sidenavbar"
import { Box } from '@mui/material';

function CoursePreview() {
  const { state } = useLocation();
  const course = state?.course;

  // Chapter data per course (you can move this to a separate file too)
  const chaptersData = {
    "Mathematices": [
      { id: 1, title: "Compound Interest", description: "Learn how to calculate compound interest in different scenarios." },
      { id: 2, title: "Quadratic Equations", description: "Understand the basics of quadratic equations and their graphs." },
      { id: 3, title: "Trigonometry", description: "Explore the relationships in right-angled triangles." },
      { id: 4, title: "Linear Inequations in One Variable", description: "Linear Inequations in One Variable are inequalities with a single variable that show values making the statement true, using symbols like <, >, ≤, or ≥." },
      { id: 5, title: "Factorization", description: "Factorization is the process of breaking an expression into a product of its factors, which are simpler expressions or numbers that multiply to give the original expression." },
      { id: 6, title: "Matrix", description: "Matrix is a rectangular arrangement of numbers or expressions in rows and columns, used to represent and solve systems of equations and perform mathematical operations." },
    ],

    "Science": [
      { id: 1, title: "Nutrition in Animals", description: "Understand digestion and nutrition systems." },
      { id: 2, title: "Motion and Time", description: "Learn how motion and time are measured." },
      { id: 3, title: "Light", description: "Study how light behaves and reflects." },
      { id: 4, title: "States of Matter", description: "Describes the physical forms of matter—solid, liquid, gas, and plasma—and how they change from one state to another." },
      { id: 5, title: "The Solar System", description: "Covers the sun, planets, moons, asteroids, and other celestial bodies, and how they interact in space." },
      { id: 6, title: "Acids, Bases, and Salts", description: "Introduces the properties of acids and bases, pH scale, and reactions that form salts." },
    ],

    "Environmental Studies": [
      { id: 1, title: "Our Environment", description: "Introduces the natural and human-made surroundings and how living things interact with them." },
      { id: 2, title: "Water Conservation", description: "Highlights the importance of saving water and methods to prevent its wastage." },
      { id: 3, title: "Natural Resources", description: "Explains types of resources like water, air, soil, and forests, and the need for their conservation." },
      { id: 4, title: "Pollution and Its Types", description: "Describes air, water, soil, and noise pollution, their causes, effects, and preventive measures."},
      { id: 5, title: "Climate Change", description: "Introduces the concept of global warming, its causes, and how it affects the planet." },
      { id: 6,title: "Wildlife and Forests", description: "Focuses on the role of animals and forests in maintaining ecological balance and biodiversity." },
    ],
    
    "English":[
       { id: 1, title: "Tenses and Their Usage", description: "Teaches how to express actions in the past, present, or future using the correct tense forms." },
       { id: 2, title: "Sentence Formation", description: "Introduces sentence structure, types of sentences, and how to build grammatically correct sentences." },
       { id: 3, title: "Writing Skills", description: "Covers writing formats like letters, essays, stories, and paragraphs clearly and effectively." },
       { id: 4, title: "Direct and Indirect Speech", description: "Teaches how to change sentences from direct to indirect speech and vice versa." },
       { id: 5, title: "Vocabulary Building", description: "Expands word knowledge through synonyms, antonyms, idioms, and phrases for better communication." },
       { id: 6, title: "Subject-Verb Agreement", description: "Explains how to match the subject and verb correctly in number and person in a sentence." },

      
    ]
  };

  const chapters = chaptersData[course?.title] || [];

  return (
    <div>
          <Navbar />
          <Box height={75} />
          <Box sx={{ display: "flex", pl: 4, pr: 4 }}>
    
            <Sidenavbar />
    <div >
      <Link to="/course" className="text-blue-600 text-lg underline">← Back to Courses</Link>

      <h1 className="text-4xl font-semibold mt-4 text-orange-600 font-serif">{course?.title || "Course Preview"}</h1>
      <p className="text-gray-500 mb-6">{course?.subtitle}</p>

      {chapters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-gray-50 shadow-lg m-4  rounded-md py-3 px-4 border-2 border-gray-100
               hover:bg-orange-50 hover:border-2 hover:border-orange-300 hover:border-double cursor-pointer"
              // className="bg-white p-4 shadow rounded border hover:border-gray-400 transition-all"
            >
              <h3 className="text-2xl font-semibold">{chapter.id}. {chapter.title}</h3>
              <p className="text-gray-600 mt-2">{chapter.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No chapters found for this course.</p>
      )}
    </div>
    </Box>
    </div>
  );
}

export default CoursePreview;



// import React from "react";
// import { Link } from "react-router-dom";

// // import CircularProgressWithLabel from "./Circleprogrerss";
// // import LinearProgressWithLabel from "./Linearprogress";

// const coursePreviewData = [
//   {
//     lessnNum: 1,
//     title: "Compound Interest",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 2,
//     title: "Linear Inequations in One Variable",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 3,
//     title: "Quadratic Equation",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 4,
//     title: "Trigonometry",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 5,
//     title: "Factorization",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 6,
//     title: " Ratio and proportion",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 7,
//     title: " Matrix",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 8,
//     title: "Reflection",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 9,
//     title: "Equation of a Straight Line",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
//   {
//     lessnNum: 10,
//     title: "Trigonometrical Ratios and Identities",
//     description:"Measurement of triangles is known as Trigonometry. Here we shall be dealing with the relation of sides and angles of a right-angled triangle."
//   },
 
// ];


// function CoursePreview() {
  
//   return (
//     <div className="w-full ">
//       <Link to="/Course">
//         <p className="bg-gray-500 text-4xl p-4 text-white"> ← Mathematics</p>
//       </Link>
//       <div className="flex flex-row flex-wrap justify-around items-center  ">
        
//         {coursePreviewData && coursePreviewData.length > 0 ? (
//           coursePreviewData.map((item, index) => (
//             <div
//               className=" bg-gray-100 shadow-lg m-4 w-[500px] h-[150px] rounded-md p-2 border-2 border-gray-100 hover:bg-red-50 hover:border-2 hover:border-gray-300"
//               key={index}
//               // style={{ backgroundColor: "#f0f0f5" }}
//             >
//               <div className="flex flex-col gap-5">
//                 <div className="text-2xl flex flex-row gap-2 items-center justify-between">
//                   <h4 className="text-4xl font-serif">{item.lessnNum}.</h4>
//                   <p className=" text-red-600 font-semibold">{item.title || "Course Preview"}</p>
//                   {/* <CircularProgressWithLabel /> */}
//                   {/* <LinearProgressWithLabel/> */}
//                 </div>
//                 <Link to="`">
//                   <p className="text-m px-3 text-gray-600">
//                     {item.description.substring(0, 100)}...
//                     <span className="text-blue-600 animate-bounce cursor-pointer">
//                       {" "}
//                       show more
//                     </span>
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No CoursePreview found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CoursePreview;


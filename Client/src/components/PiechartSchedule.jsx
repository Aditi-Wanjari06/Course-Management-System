import React from 'react'
import { PieChart } from "react-minimal-pie-chart";


function PiechartSchedule() {
  return (
     <>
         <div className="flex flex-col items-center">
           {/* <span>Attendance</span> */}
     
            <PieChart
             className="w-52 h-48"
             data={[
               { title: "Active", value: 10, color: "blue"},
               { title: "InActive", value: 15, color: "gray" },
             
             ]}
               label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
         labelStyle={() => ({
          
           fontSize: '7px',
           fontFamily: 'sans-serif',
         
         })}
            
           /> 
         </div>
       </>

  )
}

export default PiechartSchedule
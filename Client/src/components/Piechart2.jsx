import { PieChart } from "react-minimal-pie-chart";

function Mychart() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* <span>Attendance</span> */}
  
         <PieChart
          className="w-60 h-60 mt-7"
          data={[
            { title: "Active", value: 10, color: "#33cc33 " },
            { title: "InActive", value: 15, color: "yellow" },
          
          ]}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
      labelStyle={() => ({
       
        fontSize: '7px',
        fontFamily: 'sans-serif',
      
      })}
         
        /> 
      </div>
    </>
  );
}

export default Mychart;
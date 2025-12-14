import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const data = [
    { id: 0, value: 10, label: 'Present' },
    { id: 1, value: 15, label: 'Absent' },
  ];

  // Calculate total for percentage
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div>
      
    <PieChart
     
       series={[
        {
          data,
          arcLabel: (item) => `${((item.value / total) * 100).toFixed(1)}%`, 
        },
      ]}
      width={250}
      height={250}
      
      
    />
    </div>
  );
}

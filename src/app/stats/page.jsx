"use client"
import { CallContext } from '@/Component/Context/Globalcontext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsChart = () => {
     const {call} =useContext(CallContext)
   const data = [
  { name: 'Call', value:  call.filter(item => item.type === "Call").length, fill: '#00C49F' },
  { name: 'Text', value:  call.filter(item => item.type === "Text").length, fill: '#FFBB28' },
  { name: 'Video Call', value:  call.filter(item => item.type === "Video Call").length, fill: '#FF8042' },
];
      const isAnimationActive = true; // Set to true to enable animation
      return (
        <div className='flex flex-col  justify-center my-10'>
            <h2 className='text-center text-3xl mb-10 font-bold'>
               Friendship Analytics
            </h2>
            < p className='text-[#244D3F] font-bold ml-3 md:ml-50'>By Interaction Type</p>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 , margin: '0 auto'}} responsive>
      <Pie
        data={data}
        nameKey="name"
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
     
        isAnimationActive={isAnimationActive}
      />
      
      <Legend verticalAlign="bottom" height={36} />
       <Tooltip/>

   
    </PieChart>
        </div>
    );
};

export default StatsChart;
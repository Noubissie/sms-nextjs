import React, { useState } from 'react';
import { BarChart, Bar, Sector,Cell,XAxis,YAxis,CartesianGrid,
        Tooltip,Legend,ReferenceLine } from 'recharts';


        const data = [
            {
                Day: 'Page A', expenses: 4000, Earning: 2400, Total: 2400,
            },
            {
                Day: 'Page B', expenses: -3000, Earning: 1398, Total: 2210,
            },
            {
                Day: 'Page C', expenses: -2000, Earning: -9800, Total: 2290,
            },
            {
                Day: 'Page D', expenses: 2780, Earning: 3908, Total: -2000,
            },
            {
                Day: 'Page E', expenses: -1890, Earning: 4800, Total: 2181,
            },
            {
                Day: 'Page F', expenses: 2390, Earning: -3800, Total: 2500,
            },
            {
                Day: 'Page G', expenses: 3490, Earning: 4300, Total: 2100,
            },
        ];

let Barchart = () =>{
    return (
        <BarChart
            width={600}
            height={500}
            data={data}
            stackOffset="sign"
            margin={{
                top: 5, right: 5, left: 5, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="Earning" nameKey="Day" fill="#8884d8" stackId="stack" />
            <Bar dataKey="expenses" nameKey="Day" fill="#82ca9d" stackId="stack" />
            <Bar dataKey="Total" nameKey="Day"  fill="orange" stackId="a" >
                {
                    data.map((entry, index) => {
                        
                    return(
                        <Cell key={index} fill={entry.Total<0?"red":"blue"}/>
                    )
                    })
                }
            </Bar>
            
        </BarChart>
    );
}

export default Barchart
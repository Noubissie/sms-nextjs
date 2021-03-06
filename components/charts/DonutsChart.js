import React, { useState } from 'react';
import { PieChart, Pie, Sector,Cell } from 'recharts';

let data = [
  { name: 'Male', value: 1000 },
  { name: 'Female', value: 100 },]

let COLORS = ["blue","purple"]

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="#8884d8" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

let initialstate = {
    activeIndex: 0,
  };

let Donutchart = (props)=> {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

    data = typeof(props.gender_distribution)==typeof([])  ? props.gender_distribution : data 
    let [state, setState] = useState(initialstate)

  let onPieEnter = (data, index) => {
    setState({
      activeIndex: index,
    });
  };

    return (
      <PieChart width={500} height={360}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={250}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="red"
          nameKey="name"
          dataKey="value"
          onMouseEnter={onPieEnter}
        > 
        {/* fill: is resposible for the color */}
            {
          	data.map((entry, index) => <Cell key={COLORS[index]} fill={COLORS[index]}/>)
          }
            </Pie>
      </PieChart>
    );
  }

export default Donutchart

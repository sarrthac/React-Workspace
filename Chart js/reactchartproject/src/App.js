/*
                                //SUMMARY//
 
In this we are using a npm package recharts
chart component is not NOT RESPONSIVE but it was in chart js.

More exploration is required over on documentation
as we have installed the packages it was running offline as far expected but full checking is required.
Also next working on taking the input as .csv file.

*/


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// //SimpleAreaChart

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip
// } from "recharts";

// export default function App() {
//   return (
//     <AreaChart
//       width={500}
//       height={400}
//       data={data}
//       margin={{
//         top: 10,
//         right: 30,
//         left: 0,
//         bottom: 0
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//     </AreaChart>
//   );
// }

//----------------------------------------------------------------------

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}


//-----------------------------------------------------

// SameDataComposedChart

// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// export default function App() {
//   return (
//     <ComposedChart
//       width={500}
//       height={400}
//       data={data}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis dataKey="name" scale="band" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="uv" barSize={20} fill="#413ea0" />
//       <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//     </ComposedChart>
//   );
// }

//------------------------------------------------------------------

// function App() {
//   return (
//     <>
//       <h1 className="chart-heading">Line Chart</h1>
//       {/* <ResponsiveContainer width="100%" aspect={3}> */}
//         <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
//           <YAxis />
//           <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
//           <Legend />
//           <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
//         </LineChart>
//       {/* </ResponsiveContainer> */}

//       <h1 className="chart-heading">Area Chart</h1>
//       {/* <ResponsiveContainer width="100%" aspect={3}> */}
//         <AreaChart
//           width={500}
//           height={300}
//           data={pdata}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       {/* </ResponsiveContainer> */}

//       <h1 className="chart-heading">Bar Chart</h1>
//       {/* <ResponsiveContainer width="100%" aspect={3}> */}
//         <BarChart
//           width={500}
//           height={300}
//           data={pdata}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="student" fill="#8884d8" />
//           <Bar dataKey="fees" fill="#82ca9d" />
//         </BarChart>
//       {/* </ResponsiveContainer> */}
//     </>
//   );
// }

// export default App;


/*

imp \
filter out the option 
10.30 - 11.30
*/
"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3490, expense: 4300 },
  { name: "Sep", income: 3490, expense: 4300 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 3490, expense: 4300 },
  { name: "Dec", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full h-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">Finance Overview</h1>
        <Image
          src="/moreDark.png"
          alt="More Options"
          width={20}
          height={20}
          className="cursor-pointer transition-transform transform hover:rotate-90 duration-300"
        />
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "#6b7280" }}
            cursor={{ stroke: "#d1d5db", strokeWidth: 2 }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
            iconSize={10}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#FBBF24"
            strokeWidth={4}
            dot={{ fill: "#FBBF24", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#3B82F6"
            strokeWidth={4}
            dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

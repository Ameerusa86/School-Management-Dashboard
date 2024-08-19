"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-2xl transition-transform duration-300 transform hover:shadow-xl h-full"
      style={{ marginBottom: "20px" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
          Attendance
        </h1>
        <Image
          src="/moreDark.png"
          alt="More Options"
          width={24}
          height={24}
          className="cursor-pointer transition-transform transform hover:rotate-180 duration-500"
        />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#4B5563", fontSize: 14, fontWeight: 500 }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#4B5563", fontSize: 14, fontWeight: 500 }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#F9FAFB",
              borderRadius: "10px",
              borderColor: "#D1D5DB",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            cursor={{ fill: "rgba(124, 124, 124, 0.2)" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ paddingBottom: "15px", marginBottom: "10px" }}
            iconSize={12}
          />
          <Bar
            dataKey="present"
            fill="#FBBF24"
            radius={[15, 15, 0, 0]}
            barSize={20}
            animationBegin={100}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
          <Bar
            dataKey="absent"
            fill="#3B82F6"
            radius={[15, 15, 0, 0]}
            barSize={20}
            animationBegin={100}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;

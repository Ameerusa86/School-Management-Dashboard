"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FBBF24",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#3B82F6",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4 shadow-lg">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Students</h1>
        <Image
          src="/moreDark.png"
          alt="More Options"
          width={20}
          height={20}
          className="cursor-pointer transition-transform transform hover:rotate-90 duration-300"
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[250px]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={24}
            data={data}
            startAngle={180}
            endAngle={-180}
          >
            <RadialBar
              dataKey="count"
              cornerRadius={10}
              background={{ fill: "#f0f0f0" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male and Female Icons"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-[#3B82F6] rounded-full shadow-sm" />
          <h1 className="font-bold text-lg text-gray-800 mt-2">1,234</h1>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-[#FBBF24] rounded-full shadow-sm" />
          <h1 className="font-bold text-lg text-gray-800 mt-2">1,234</h1>
          <h2 className="text-sm text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

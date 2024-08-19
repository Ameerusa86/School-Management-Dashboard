"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Team Meeting",
    time: "10:00 AM - 11:30 AM",
    description: "Monthly sync-up with the team to discuss project status.",
  },
  {
    id: 2,
    title: "Lunch with Client",
    time: "12:30 PM - 1:30 PM",
    description: "Client meeting at downtown restaurant.",
  },
  {
    id: 3,
    title: "Workshop",
    time: "3:00 PM - 5:00 PM",
    description: "Internal workshop on new tools and technologies.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
      {/* Calendar Section */}
      <div className="w-full mb-8">
        <Calendar
          onChange={onChange}
          value={value}
          className="rounded-lg shadow-lg border border-gray-200 w-full"
          tileClassName="p-2 rounded-lg hover:bg-blue-50 transition duration-200 ease-in-out"
        />
      </div>

      {/* Events Section */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Upcoming Events</h1>
          <Image
            src="/moreDark.png"
            alt="More Options"
            width={20}
            height={20}
            className="cursor-pointer transition-transform transform hover:rotate-90 duration-300"
          />
        </div>

        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-5 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-blue-800">{event.title}</h2>
                <span className="text-blue-600 text-xs">{event.time}</span>
              </div>
              <p className="text-blue-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

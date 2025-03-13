import React from "react";
import EventImage from "../public/EventImage.png";
import Image from "next/image";

const EventCard = () => {
  const events = [
    {
      name: "INTRODUCTION TO OPEN SOURCE",
      status: "TODAY",
    },
    {
      name: "GIT & GITHUB WORKSHOP",
      status: "UPCOMING",
    },
    {
      name: "GIT & GITHUB WORKSHOP",
      status: "UPCOMING",
    },
    {
      name: "INTRODUCTION TO OPEN SOURCE",
      status: "ENDED",
    },
  ];

  //Function to change color of button according to event status
  const getStatusStyles = (status) => {
    switch (status) {
      case "TODAY":
        return "bg-[#FDE293] border-[#FABC05]"; // Yellow for TODAY
      case "UPCOMING":
        return "bg-[#A8DAB5] border-[#34A853]"; // Green for UPCOMING
      case "ENDED":
        return "bg-[#F6AEA9] border-[#EA4335]"; // Red for ENDED
      default:
        return "bg-gray-200 border-gray-400";
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {events.map((event,index) => (
        <div key={index} className="relative w-[600px] h-[500px] mt-5 rounded-[32px] border-4 border-black shadow-[0_12px_0_0_#000000]">
          {/* Upper div with image */}
          <div className="w-full h-[300px] rounded-t-[28px] overflow-hidden">
            <Image src={EventImage} alt="event" width="full" />
          </div>

          {/* Lower div with content */}
          <div className="p-6 bg-white rounded-b-[28px]">
            <h1 className="text-3xl font-bold mb-8">{event.name}</h1>

            {/* Button container */}
            <div className="flex items-center justify-between mt-4">
              {/* Status button */}
              <button
                className={`px-3 py-2 border-2 border-dotted rounded-[50px] text-sm font-medium ${getStatusStyles(
                  event.status
                )}`}
              >
                {event.status}
              </button>
              {/* Register button */}
              <button className="px-4 py-3 bg-[#4385F3] text-white rounded-[50px] text-sm font-medium">
                Register Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;

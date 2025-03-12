import React from "react";
import EventImage from "../public/EventImage.png";
import Image from "next/image";

const EventCard = () => {
  const events = [
    {
      name: "INTRODUCTION TO OPEN SOURCE",
      status: "today",
    },
    {
      name: "GIT & GITHUB WORKSHOP",
      status: "upcoming",
    },
    {
      name: "HACKTOBERFEST CONTRIBUTION DRIVE",
      status: "upcoming",
    },
    {
      name: "OPEN SOURCE PROJECT SHOWCASE",
      status: "upcoming",
    },
    {
      name: "BEGINNER'S GUIDE TO CONTRIBUTING",
      status: "ended",
    },
    {
      name: "COLLABORATIVE CODING SPRINT",
      status: "ended",
    },
  ];
  return (
    <div>
      {events.map((event) => (
        <div className="relative w-[600px] h-[500px] mt-5 rounded-[32px] border-4 border-black shadow-[0_12px_0_0_#000000]">
          {/* Upper div with image */}
          <div className="w-full h-[300px] rounded-t-[28px] overflow-hidden">
            <Image src={EventImage} alt="event" width="full" />
          </div>

          {/* Lower div with content */}
          <div className="p-6 bg-white rounded-b-[28px]">
            <h1 className="text-3xl font-bold mb-8">{event.name}</h1>

            {/* Button container */}
            <div className="flex items-center justify-between mt-4">
              {/* Today button */}
              <button className="px-3 py-2 bg-[#FDE293] border-2 border-dotted border-[#FABC05] rounded-[50px] text-sm font-medium">
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

"use client";
import React from "react";
import Image from "next/image";
import background from "../public/background.png";
import Dasksh from "../public/daksh.png";
import Anurag from "../public/anurag.png";
import Swarnabha from "../public/swarnabha.png";
import Atif from "../public/atif.png";
import Rahul from "../public/rahul.png";
import Soumi from "../public/soumi.png";
import Nikhil from "../public/nikhil.png";
import Arup from "../public/arup.jpg";
import Archi from "../public/archi.png";
import Samanyu from "../public/sumanyu.png";
import Ashutosh from "../public/ashutosh.png";
import Sagnik from "../public/sagnik.png";

const TeamCard = ({ selectedDomain }) => {
  const teamMembers = [
    {
      name: "DAKSH SINGH RATHORE",
      role: "OPENSOURCE LEAD",
      image: Dasksh,
      linkedin: "https://www.linkedin.com/in/dakshsinghrathore/",
      domain: "leads",
    },
    {
      name: "SWARNABHA CHATTERJEE",
      role: "GDG ORGANIZER",
      image: Swarnabha,
      linkedin: "https://www.linkedin.com/in/swrch/",
      domain: "leads",
    },
    {
      name: "RAHUL VERMA",
      role: "DESIGN LEAD",
      image: Rahul,
      linkedin: "https://www.linkedin.com/in/rahul-verma-in/",
      domain: "leads",
    },
    {
      name: "ATIF ALI",
      role: "WEB LEAD",
      image: Atif,
      linkedin: "https://www.linkedin.com/in/atif27/",
      domain: "leads",
    },
    {
      name: "ANURAG VERMA",
      role: "PR & OUTREACH LEAD",
      image: Anurag,
      linkedin: "https://www.linkedin.com/in/anurag-verma-b91417253/",
      domain: "leads",
    },
    {
      name: "SOUMI GURAI",
      role: "APP LEAD",
      image: Soumi,
      linkedin: "https://www.linkedin.com/in/soumi-guria-8882b224a/",
      domain: "leads",
    },
    {
      name: "NIKHIL MISHRA",
      role: "CLOUD LEAD",
      image: Nikhil,
      linkedin: "https://www.linkedin.com/in/nikhil-mishra-8a6710244/",
      domain: "leads",
    },
    {
      name: "ARCHISMWAN CHATTERJEE",
      role: "AI & ML LEAD",
      image: Archi,
      linkedin: "https://www.linkedin.com/in/archismwan-chatterjee/",
      domain: "leads",
    },
    {
      name: "ARUP BASAK",
      role: "WEB3 & BLOCKCHAIN LEAD",
      image: Arup,
      linkedin: "https://www.linkedin.com/in/basak-arup/",
      domain: "leads",
    },
    {
      name: "SAMANYU ROY",
      role: "CP LEAD",
      image: Samanyu,
      linkedin: "https://www.linkedin.com/in/samanyu-roy/",
      domain: "leads",
    },
    {
      name: "ASUTOSH KUMAR",
      role: "CYBERSECURITY LEAD",
      image: Ashutosh,
      linkedin: "https://www.linkedin.com/in/asutosh-kumar-96a491244/",
      domain: "leads",
    },
    {
      name: "SAGNIK KUMBHAKAR",
      role: "CREATIVE MEDIA LEAD",
      image: Sagnik,
      linkedin: "https://www.linkedin.com/in/sagnik-kumbhakar/",
      domain: "leads",
    },
  ];

  const filteredMembers =
    selectedDomain === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.domain === selectedDomain);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap justify-center gap-4">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="cursor-pointer gap-4 border-4 border-b-8 border-black rounded-lg rounded-b-3xl rounded-t-3xl  w-72px h-100px max-w-[400px] min-h-[350px] transform transition duration-300 ease-in-out hover:-translate-y-2  active:translate-y-0 active:shadow-lg"
          >
            {/* Heading */}
            <div className="px-5 py-4 text-center font-bold text-2xl">
              {member.role}
            </div>

            {/* Backgroud image */}
            <div className="bg-cover border-4 border-black border-x-0">
              <div>
                <Image
                  src={background}
                  alt="Profile"
                  width={400}
                  height={200}
                />
              </div>

              {/* Member image */}
              <div className="absolute top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 aspect-square border-4 border-black "
                />
              </div>
            </div>
            <div className="px-5 py-4 flex justify-between items-center border-t-0 border-black">
              {/* Member name */}
              <div className="font-bold text-lg">{member.name}</div>

              {/* Member linkedin */}
              <div className="w-8 h-8 bg-black text-white flex justify-center items-center rounded">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;

"use client";
import React from "react";
import { useState } from "react";

import TeamCard from "../components/TeamCard";

const Teampage = () => {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const domains = [
    { id: "leads", label: "Domain Leads" },
    { id: "web", label: "Web Team" },
    { id: "design", label: "Design Team" },
    { id: "app", label: "App Team" },
    { id: "blockchain", label: "Blockchain Team" },
    { id: "opensource", label: "Opensource Team" },
    { id: "pr", label: "PR Team" },
    { id: "competitive", label: "Competitive Programming Team" },
    { id: "cloud", label: "Cloud Team" },
    { id: "aiml", label: "AIML Team" },
    { id: "cyber security", label: "Cyber Security Team" },
    { id: "creative media", label: "Creative Media Team" },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Heading */}
      <div class="text-center">
        <h1 class="text-4xl font-bold leading-tight pb-10">
          Meet
          <span class="inline-block bg-yellow-200 px-4 py-2">the Team</span>
          behind GDG NSEC
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => setSelectedDomain(domain.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedDomain === domain.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {domain.label}
          </button>
        ))}
      </div>

      <div>
        <TeamCard selectedDomain={selectedDomain} />
      </div>
    </div>
  );
};

export default Teampage;

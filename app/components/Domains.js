import React from "react";
import Image from "next/image";

// Image Imports
import web from "../assets/domains/web.png";
import web3 from "../assets/domains/web3.png";
import app from "../assets/domains/app.png";
import design from "../assets/domains/design.png";
import openSource from "../assets/domains/openSource.png";
import aiml from "../assets/domains/aiml.png";
import competitiveProgramming from "../assets/domains/competitiveProgramming.png";
import publicRelations from "../assets/domains/publicRelations.png";
import cloud from "../assets/domains/cloud.png";
import creativeMedia from "../assets/domains/creativeMedia.png";
import cybersecurity from "../assets/domains/cybersecurity.png";

const Domains = () => {
  return (
    <section className="p-8">
      <h2 className="text-center text-3xl font-bold mb-8">Domains</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        
        {/* Web */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-yellow-400 rounded-lg text-center cursor-pointer hover:bg-yellow-200">
          <Image src={web} alt="Web" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-yellow-400 mt-2">Web</p>
        </div>

        {/* Web3 */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-green-500 rounded-lg text-center sm:col-span-2 cursor-pointer hover:bg-green-300">
          <Image src={web3} alt="Web3" width={500} height={200} className="mb-4" />
          <p className="font-bold text-2xl text-green-500 mt-2">Web3 & Blockchain</p>
        </div>

        {/* App */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-blue-400 rounded-lg text-center cursor-pointer hover:bg-blue-300">
          <Image src={app} alt="App" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-blue-400 mt-2">App</p>
        </div>

        {/* Design */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-yellow-400 rounded-lg text-center cursor-pointer hover:bg-yellow-200">
          <Image src={design} alt="Design" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-yellow-400 mt-2">Design</p>
        </div>

        {/* OpenSource */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-red-400 rounded-lg text-center cursor-pointer hover:bg-red-200">
          <Image src={openSource} alt="OpenSource" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-red-400 mt-2">OpenSource</p>
        </div>

        {/* AI/ML */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-blue-500 rounded-lg text-center lg:col-span-3 cursor-pointer hover:bg-blue-300">
          <Image src={aiml} alt="AI/ML" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-blue-500 mt-2">Artificial Intelligence and Machine Learning</p>
        </div>

        {/* Competitive Programming */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-yellow-400 rounded-lg text-center sm:col-span-2 cursor-pointer hover:bg-yellow-200">
          <Image src={competitiveProgramming} alt="Competitive Programming" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-yellow-400 mt-2">Competitive Programming</p>
        </div>

        {/* Public Relations */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-blue-500 rounded-lg text-center cursor-pointer hover:bg-blue-300">
          <Image src={publicRelations} alt="Public Relations" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-blue-500 mt-2">Public Relations</p>
        </div>

        {/* Cloud */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-green-500 rounded-lg text-center cursor-pointer hover:bg-green-300">
          <Image src={cloud} alt="Cloud" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-green-500 mt-2">Cloud</p>
        </div>

        {/* Creative Media */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-red-400 rounded-lg text-center cursor-pointer hover:bg-red-300">
          <Image src={creativeMedia} alt="Creative Media" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-red-400 mt-2">Creative Media</p>
        </div>

        {/* CyberSecurity */}
        <div className="flex flex-col items-center justify-center w-full h-60 p-4 border-4 border-b-8 border-yellow-400 rounded-lg text-center cursor-pointer hover:bg-yellow-200">
          <Image src={cybersecurity} alt="CyberSecurity" width={120} height={120} className="mb-4" />
          <p className="font-bold text-2xl text-yellow-400 mt-2">CyberSecurity</p>
        </div>
      </div>
    </section>
  );
};

export default Domains;

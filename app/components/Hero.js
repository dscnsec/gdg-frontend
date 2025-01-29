import React from "react";
import Image from "next/image";
import { Noto_Sans_Display } from 'next/font/google';
import Link from "next/link";

const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="mt-12 px-4 mb-10">
      <div className="mx-auto text-center flex flex-col justify-center items-center my-5 h-auto md:h-56">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
          <span className="text-[#E94436]">Learn,</span>{" "}
          <span className="text-[#FABC05]">Build,</span>{" "}
          <span className="text-[#109D58]">Connect</span> and{" "}
          <span className="text-[#4385F3]">Network</span>
          <br /> with Google Developers Group
        </h1>
        <p
          className="mt-8 font-normal text-center text-lg md:text-2xl lg:text-[32px] w-full max-w-screen-lg"
          style={notoSansDisplay.style}
        >
          The heart of innovation and technology at
          <span className="font-extrabold">
            {" "}
            Netaji Subhash Engineering College
          </span>
          . Collaborate with like-minded peers, explore cutting-edge Google
          technologies, and create solutions for tomorrow.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center mx-auto gap-5">
        {/* Images hidden on small screens */}
        <Image
          src="/illustration.png"
          alt="Illustration"
          width={313}
          height={333}
          className="hidden md:block"
        />

        <div className="mx-auto text-center flex flex-col justify-center items-center gap-5">
          <Link href={"/"}>
            <button
              className="w-full md:w-72 py-3 px-7 bg-[#4385F3] border-4 border-[#000000] gap-2.5 rounded-[50px] shadow-lg drop-shadow-lg shadow-black text-white font-bold leading-10 text-lg md:text-4xl  hover:-translate-y-2 active:translate-y-0 active:shadow-lg transform transition duration-200 ease-in-out"
              style={notoSansDisplay.style}
            >
              Join Us
            </button>
          </Link>
          <Link href={"/events"}>
            <button
              className="w-full md:w-96 py-3 px-7 bg-white border-4 border-black rounded-[50px] shadow-lg drop-shadow-lg shadow-black text-[#4385F3] font-bold text-lg md:text-xl  hover:-translate-y-2 active:translate-y-0 active:shadow-lg transform transition duration-200 ease-in-out"
              style={notoSansDisplay.style}
            >
              Explore Upcoming Events
            </button>
          </Link>
        </div>

        <Image
          src="/illustration2.png"
          alt="Illustration"
          width={313}
          height={333}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;

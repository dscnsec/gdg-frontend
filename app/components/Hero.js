import React from "react";
import Image from "next/image";
import { Noto_Sans_Display } from 'next/font/google';
import Link from "next/link";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <div className="mt-12 px-4 mb-10">
      <div className="mx-auto text-center flex flex-col justify-center items-center my-5 h-auto md:h-56 ">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-tight flex gap-3 flex-col pb-3">
          <div>
            <span className="text-[#E94436]">Learn,</span>{" "}
            <span className="text-[#FABC05]">Build,</span>{" "}
            <span className="text-[#109D58]">Connect</span> and{" "}
            <span className="text-[#4385F3]">Network</span>
          </div>
          <div>with Google Developers Group</div>
        </h1>
        <p className="mt-8 font-light text-center text-lg md:text-2xl lg:text-[28px]  md:tracking-tight w-full max-w-screen-lg">
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
          <Link href={"/"} className="w-full flex justify-center">
            <SecondaryButton
              text={"Join Us"}
              className=" max-xl:text-3xl max-lg:text-2xl max-md:text-xl bg-[#4385F3] text-white px-14"
            />
          </Link>
          <Link href={"/events"} className="w-full flex justify-center">
            <SecondaryButton
              text={"Explore Upcoming Events"}
              textColor="#4385F3"
              className=" max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-w-[662px] max-lg:w-fit w-full px-6"
            />
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

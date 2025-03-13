"use client";
import React from "react";
import Image from "next/image";
import landingRight from "../public/landingRight.png";
import landingLeft from "../public/landingLeft.png";
import Link from "next/link";
import SecondaryButton from "./SecondaryButton";

const OurTeam = () => {
  return (
    // Main Container
    <div className="flex flex-col items-center gap-1">
      <div className="grid grid-cols-2 items-center w-full h-[50px] md:h-[25px]">
        {/* left pattern */}
        <div className="flex justify-start">
          <Image
            src={landingLeft}
            alt="Left"
            className="md:h-auto"
            width={150}
          />
        </div>
        {/* right pattern */}
        <div className="flex justify-end">
          <Image
            src={landingRight}
            alt="Right"
            className="md:h-auto"
            width={150}
          />
        </div>
      </div>

      {/* Heading  */}
      <div className="w-full text-center">
        <h3 className="text-6xl font-bold leading-[100px] max-lg:text-4xl max-md:text-3xl max-[400px]:text-2xl">
          Our Team
        </h3>
      </div>
      <p className="font-normal text-[20px] text-center mb-4 sm:mb-6 lg:mb-8 pt-0 pb-0">
        Our community consists of passionate developers and motivated young
        students.
      </p>

      <div className="w-[75vw] h-[16vw] grid grid-cols-3 grid-rows-1 gap-6 mt-8 mb-16 max-lg:mt-6 max-lg:mb-12 max-[650px]:grid-rows-3 max-[650px]:grid-cols-1 max-[650px]:w-[250px] max-[650px]:h-[768px] max-[450px]:w-[200px] max-[450px]:h-[618px]  border-black">
        <Card>
          <div className="w-1/2 h-auto">
            <h5 className="text-8xl text-center font-bold  max-xl:text-6xl max-lg:text-[2.5rem]">
              1
            </h5>
          </div>
          <p className="text-4xl font-bold leading-[44px] pt-2  max-xl:text-3xl max-lg:text-2xl max-md:text-xl">
            Organizer
          </p>
        </Card>
        <Card>
          <div className="w-1/2 h-auto">
            <h5 className="text-8xl text-center font-bold  max-xl:text-6xl max-lg:text-[2.5rem]">
              11
            </h5>
          </div>
          <p className="text-4xl font-bold leading-[44px] pt-2  max-xl:text-3xl max-lg:text-2xl max-md:text-xl">
            Domain Leads
          </p>
        </Card>
        <Card>
          <div className="w-1/2 h-auto">
            <h5 className="text-8xl text-center font-bold  max-xl:text-6xl max-lg:text-[2.5rem]">
              55
            </h5>
          </div>
          <p className="text-4xl font-bold leading-[44px] pt-2  max-xl:text-3xl max-lg:text-2xl max-md:text-xl">
            Core Members
          </p>
        </Card>
      </div>

      {/* Full team button */}
      <Link href={"/team"} className="w-full flex justify-center ">
        <SecondaryButton
          text={"View  Full Team"}
          textColor="#4285F4"
          className=" max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-w-[662px] max-lg:w-fit w-full "
        />
      </Link>
    </div>
  );
};

export default OurTeam;

const Card = ({ children }) => {
  return (
    <div className="border-4 shadow-[0_6px] shadow-black rounded-2xl flex flex-col justify-center items-center hover:bg-[#FDE293] transition-colors ease-out duration-500 text-[#4285F4] dark:text-[#4285F4] border-black  ">
      {children}
    </div>
  );
};

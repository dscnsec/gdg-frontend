import React from "react";
import Image from "next/image";
import landingRight from "../public/landingRight.png";
import landingLeft from "../public/landingLeft.png";

const OurTeam = () => {
  return <div>Our Team</div>;
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
      <h1 className="font-bold font-sans text-[40px] text-center mb-4 sm:mb-6 lg:mb-8 pt-0">
        Our Team
      </h1>
      <p className="font-normal text-[20px] text-center mb-4 sm:mb-6 lg:mb-8 pt-0 pb-0">
        Our community consists of passionate developers and motivated young
        students.
      </p>

      {/* Members Cards */}
      <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center max-w-7xl pb-0">
        <a
          href="#"
          class="mt-8 sm:mt-10 lg:mt-12 relative border-b-8 px-7 py-3 shadow-xl text-center text-blue-600 font-semibold rounded-lg border-2 border-black dark:hover:bg-amber-200  transform transition duration-300 ease-in-out 
  hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:shadow-lg"
        >
          <h5 class="mb-2 text-[40px] font-bold tracking-tight text-blue-600 text-center">
            1
          </h5>
          <p class="font-bold text-[30px] text-blue-600 dark:text-blue-600 text-center">
            Organizer
          </p>
        </a>
        <a
          href="#"
          class="mt-8 sm:mt-10 lg:mt-12 relative border-b-8 px-7 py-3 shadow-xl text-center text-blue-600 font-semibold rounded-lg border-2 border-black dark:hover:bg-amber-200  transform transition duration-200 ease-in-out 
  hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:shadow-lg"
        >
          <h5 class="mb-2 text-[40px] font-bold tracking-tight text-blue-600 text-center">
            11
          </h5>
          <p class="font-bold text-[30px] text-blue-600 dark:text-blue-600 text-center">
            Domain Leads
          </p>
        </a>
        <a
          href="#"
          class="mt-8 sm:mt-10 lg:mt-12 relative border-b-8 px-7 py-3  shadow-xl text-center text-blue-600 font-semibold rounded-lg border-2 border-black dark:hover:bg-amber-200  transform transition duration-200 ease-in-out 
  hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:shadow-lg"
        >
          <h5 class="mb-2 text-[40px] font-bold tracking-tight text-blue-600 text-center">
            55
          </h5>
          <p class="font-bold text-[30px] text-blue-600 dark:text-blue-600 text-center">
            Core Members
          </p>
        </a>
      </div>

      {/* Full team button */}
      <button className="mt-8 sm:mt-10 lg:mt-12 relative border-b-8 px-7 py-3 hover:shadow-2xl hover:-translate-y-2 active:translate-y-0 active:shadow-lg transform transition duration-200 ease-in-out text-center text-blue-600 font-bold rounded-full border-2 border-black items-center justify-center w-[300px] hover:bg-amber-200">
        View Full Team
      </button>
    </div>
  );
};

export default OurTeam;

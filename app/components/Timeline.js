"use client";
import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="w-full text-center">
        <h3 className="text-6xl font-bold leading-[100px] max-lg:text-4xl max-md:text-3xl max-[400px]:text-2xl">
          Timeline
        </h3>
      </div>

      <div
        className="timeline hScroll md:flex md:flex-col md:items-center max-md:overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          .hScroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="w-[70vw] pt-14 max-lg:pt-12 max-md:w-[805px] max-md:mx-[50px]">
          <div className="flex justify-between items-center">
            <div className="w-[13vw] h-[13vw] border border-gray-200 rounded-full flex justify-center items-center max-md:w-[175px] max-md:h-[175px]">
              <div className="w-[9vw] h-[9vw] rounded-full border-4 border-[#EA4335] flex justify-center items-center max-md:w-[125px] max-md:h-[125px]">
                <Image
                  src="/buildwailogo 1.png"
                  width={85}
                  height={85}
                  alt="event logo"
                />
              </div>
            </div>

            <div className="w-[6vw] max-md:w-[35px]">
              <div className="bg-gray-200 h-2"></div>
              <div className="bg-gray-200 h-[2px] mt-[2px]"></div>
            </div>

            <div className="w-[13vw] h-[13vw] border border-gray-200 rounded-full flex justify-center items-center max-md:w-[175px] max-md:h-[175px]">
              <div className="w-[9vw] h-[9vw] rounded-full border-4 border-[#34A853] flex justify-center items-center max-md:w-[125px] max-md:h-[125px]">
                <Image
                  src="/buildwailogo 1.png"
                  width={85}
                  height={85}
                  alt="event logo"
                />
              </div>
            </div>

            <div className="w-[6vw] max-md:w-[35px]">
              <div className="bg-gray-200 h-2"></div>
              <div className="bg-gray-200 h-[2px] mt-[2px]"></div>
            </div>

            <div className="w-[13vw] h-[13vw] border border-gray-200 rounded-full flex justify-center items-center max-md:w-[175px] max-md:h-[175px]">
              <div className="w-[9vw] h-[9vw] rounded-full border-4 border-[#F9AB00] flex justify-center items-center max-md:w-[125px] max-md:h-[125px]">
                <Image
                  src="/buildwailogo 1.png"
                  width={85}
                  height={85}
                  alt="event logo"
                />
              </div>
            </div>

            <div className="w-[6vw] max-md:w-[35px]">
              <div className="bg-gray-200 h-2"></div>
              <div className="bg-gray-200 h-[2px] mt-[2px]"></div>
            </div>

            <div className="w-[13vw] h-[13vw] border border-gray-200 rounded-full flex justify-center items-center max-md:w-[175px] max-md:h-[175px]">
              <div className="w-[9vw] h-[9vw] rounded-full border-4 border-[#4285F4] flex justify-center items-center max-md:w-[125px] max-md:h-[125px]">
                <Image
                  src="/buildwailogo 1.png"
                  width={85}
                  height={85}
                  alt="event logo"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center mt-5 text-2xl font-medium max-lg:text-lg max-lg:mt-2">
            <div className="flex-1 flex flex-col justify-center items-center">
              <p>Event Name</p>
              <p>December&apos;24</p>
            </div>
            <div className="w-[6vw]"></div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <p>Event Name</p>
              <p>December&apos;24</p>
            </div>
            <div className="w-[6vw]"></div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <p>Event Name</p>
              <p>December&apos;24</p>
            </div>
            <div className="w-[6vw]"></div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <p>Event Name</p>
              <p>December&apos;24</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;

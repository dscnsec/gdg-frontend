import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className=" py-[10px] block px-[28px] w-[300px] border-[4px] border-b-[12px] border-[#000000] bg-[#4385F3] rounded-[50px] text-[35px] font-bold text-[#FFFFFF] transition-all duration-200 hover:bg-[#000000]">
      {text}
    </button>
  );
};

export default PrimaryButton;

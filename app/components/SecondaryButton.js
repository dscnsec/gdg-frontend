import React from "react";

const SecondaryButton = ({ text, textColor = "#4385F3", className = "" }) => {
  return (
    <button
      className={`py-[10px] px-[28px] border-[4px] border-b-[12px] border-[#000000]  rounded-[50px] text-[35px] font-bold text-[${textColor}] hover:text-[${textColor}] transition-all duration-200 hover:bg-[#000000] hover:shadow-2xl  transition duration-200 ease-in-out  ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;

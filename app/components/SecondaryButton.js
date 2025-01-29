import React from "react";

const SecondaryButton = ({ text, textColor = "#4385F3", className = "" }) => {
  return (
    <button
      className={`py-[10px] block px-[28px] max-w-[600px] border-[4px] border-b-[12px] border-[#000000] bg-transparent rounded-[50px] text-[35px] font-bold text-[${textColor}] hover:text-[${textColor}] transition-all duration-200 hover:bg-[#000000] ${className} hover:shadow-2xl hover:-translate-y-2 active:translate-y-0 active:shadow-lg transform transition duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;

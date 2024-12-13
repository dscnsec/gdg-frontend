import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className=" py-[10px] block  px-[28px] max-w-[600px] border-[4px] border-b-[12px] border-[#000000] bg-transparent rounded-[50px] text-[35px] font-bold text-[#4385F3] hover:text-[##4385F3] transition-all duration-200 hover:bg-[#000000]">
      {text}
    </button>
  );
};

export default SecondaryButton;

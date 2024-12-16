import React from "react";

const TeamCard = ({ children }) => {
  return (
    <div className="border-black border-4 shadow-[0_6px] rounded-2xl flex flex-col justify-center items-center hover:bg-[#FDE293] transition-colors ease-out duration-500">
      {children}
    </div>
  );
};

export default TeamCard;

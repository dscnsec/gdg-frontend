import React from "react";

const EventCard = () => {
  return (
    <div className="relative w-[600px] h-[500px] mt-5 rounded-[28px] border-4 border-black shadow-[0_12px_0_0_#000000]">
      {/* Upper div with image */}
      <div className="w-full h-[300px] rounded-t-[28px] overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/5c3b/9ec1/25e46aa63795c83545e61aa2aef5be91?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BFgRGsdBSxOQ5kJ9Xg9M03HpSCbUaXjK6jsF~s0uZ4x9UF90OWfy~wikau7jZQuxmnxO4LOa-Rdc7MScbc29Wd1ZKNuqh1itZjkTHLZcArTyVsKG9Xo9q8l~QrCJAGX2HH0afL8td5MuJ9t4YzS2~OTNbirIMynMPIjsx0MZTvR5-Y2y9eOIPlZle1mb2lzkkuI4qFUE-mNoJ8Rsmf6smEdFFjHNlI8qXLdxY9mJwjC4wy5uTynFKTR1sbSxATaZhJdtCa6jrTjF~oSlOq9aOB3PZxiqb88pRcW5uL6vV4PiTDETl6a~dYUhJbZHrYT5gLsXGEMdX9HuWinA9qAH9A__"
          alt="Open Source Header"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lower div with content */}
      <div className="p-6 bg-white rounded-b-[28px]">
        <h1 className="text-3xl font-bold mb-8">GETTING STARTED WITH OPEN SOURCE</h1>

        {/* Button container */}
        <div className="flex items-center justify-between mt-4">
          {/* Today button */}
          <button className="px-3 py-2 bg-[#FDE293] border-2 border-dotted border-[#FABC05] rounded-[50px] text-sm font-medium">
            TODAY
          </button>

          {/* Register button */}
          <button className="px-4 py-3 bg-[#4385F3] text-white rounded-[50px] text-sm font-medium">Register Now</button>
        </div>
      </div>
    </div>
  )
}



export default EventCard;


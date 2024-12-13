import React from "react";
import BlogCard from "./BlogCard";
const LatestBlogs = () => {
  return(
    // Main Container
      <div className="flex flex-col items-center gap-3 ">  
      {/* Heading  */}
        <h1 className="font-bold text-[30px] text-center">Latest Blogs</h1>
        {/* Grid for blogs */}
        <div className="grid grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>

        <button className="relative border-b-4 px-7 py-3 w-[300px] shadow-xl text-center text-greenTitle font-semibold rounded-full border-2 border-black ">
  View All Blogs
</button>

      </div>
  )
};

export default LatestBlogs;

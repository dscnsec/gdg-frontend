import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
const LatestBlogs = () => {
  return (
    // Main Container
    <div className="flex flex-col items-center gap-3 p-4">
      {/* Heading  */}
      <h1 className="font-bold text-[30px] text-center mb-4 sm:mb-6 lg:mb-8">
        Latest Blogs
      </h1>
      {/* Grid for blogs */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full max-w-7xl">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Link href={"/blogs"}>
        <button className="mt-8 sm:mt-10 lg:mt-12 relative border-b-8 px-7 py-3 w-[300px] shadow-xl text-center text-greenTitle font-semibold rounded-full border-2 border-black hover:shadow-2xl hover:-translate-y-2 active:translate-y-0 active:shadow-lg transform transition duration-200 ease-in-out ">
          View All Blogs
        </button>
      </Link>
    </div>
  );
};

export default LatestBlogs;

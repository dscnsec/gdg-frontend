import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import SecondaryButton from "./SecondaryButton";
const LatestBlogs = () => {
  return (
    // Main Container
    <div className="flex flex-col items-center gap-3 p-4">
      {/* Heading  */}
      <div className="w-full text-center py-6">
        <h3 className="text-6xl font-bold leading-[100px] max-lg:text-4xl max-md:text-3xl max-[400px]:text-2xl">
          Latest Blogs
        </h3>
      </div>

      {/* Grid for blogs */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Link href={"/blogs"} className="w-full flex justify-center mt-8 ">
        <SecondaryButton
          text={"View  All Blogs"}
          textColor="#109D58"
          className=" max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-w-[662px] max-lg:w-fit w-full "
        />
      </Link>
    </div>
  );
};

export default LatestBlogs;

import React from "react";
import BlogCard from "../components/BlogCard";

const index = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Heading */}
      <h1 className="font-bold text-center text-2xl md:text-3xl ">Stay Updated With Our Blogs</h1>
      {/* Bottom Container with blogs. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default index;

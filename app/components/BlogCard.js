const BlogCard = () => {
  return (
    <div className="flex cursor-pointer flex-col gap-4 border-2 border-b-8 border-black rounded-lg rounded-b-3xl rounded-t-3xl shadow-lg w-full max-w-[390px] min-h-[400px]">
      {/* img */}
      <img 
        className="w-full h-48 object-cover rounded-lg rounded-t-3xl  " 
        src="https://s3-alpha-sig.figma.com/img/1bbf/3a53/303668a9bfd0503050e1c33e0106e708?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEOyvNWY9kLgyeHt4qKXdzt0Lk0Sch4dd-j8NXI9q4F~4nspJgWTYKb9tAjEt1WeQq5T0NuqPiWN2jiHPaKdo8BHvtFj3XAFL01qU-oNwNcU65mO5hJ0sCQGOowx05A3amiJeKVYwVR6-uFw9I3cooA3DJBTE1a6K6lYytOODelg-9FRjPSCnTSHkoNA7EkxZWq1AlfeWPEeg0ZS6LluR8kRof3YREguMGyaOTw8DhEhOGvEczT7n0kkyikzy7DIk28tS1cmMZIbFP7ZonayfRyjDsFQdMzWreStSQ7n2BYO3w2~l1~YKdDrhT18-CV64PfOJlMFXemiEXP5d5pcbg__"
        alt="Blog thumbnail"
      />

    {/* Text In between */}
      <div className="w-full bg-white flex flex-col gap-2 p-4">
        <p className="text-greenTitle text-xs sm:text-sm">Oct 17, 2024 • 5 Min Read</p>
        <h1 className="font-bold text-xl sm:text-2xl">AI in product design: what to expect beyond the hype</h1>
        <p className="font-thin text-gray-700 text-xs sm:text-sm">AI in product design: what to expect beyond the hype</p>
      </div>


      {/* Tags */}
      <div className="flex rounded-b-3xl flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-black bg-green-200 rounded-full border-2 border-dashed border-green-500">
            UX
          </span>
          <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-black bg-green-200 rounded-full border-2 border-dashed border-green-500">
            AI
          </span>
        </div>

        <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  )
};

export default BlogCard;

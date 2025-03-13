import EventCard from "../components/EventCard";

const page = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Heading */}
      <div class="text-center">
        <h1 class="text-4xl font-bold leading-tight pb-10">
          Experience the Best GDG NSEC
          <span class="inline-block bg-red-300 px-4 py-2">Events:</span>
          <br />
          Stay Ahead in Tech
        </h1>
      </div>
      <div>
        <EventCard />
      </div>
    </div>
  );
};

export default page;

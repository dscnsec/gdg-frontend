import Domains from "./components/Domains";
import Hero from "./components/Hero";
import LatestBlogs from "./components/LatestBlogs";
import OurTeam from "./components/OurTeam";
import Timeline from "./components/Timeline";
import WhatDoWeDo from "./components/WhatDoWeDo";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Hero />
      <WhatDoWeDo />
      <Timeline />
      <OurTeam />
      <LatestBlogs />
      <Domains />
    </div>
  );
}

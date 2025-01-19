import React from 'react';
import GDGLOGO from "../../public/GDG_LOGO.png";
import BellLogo from "../../public/fi-br-bell-ring.png";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between shadow-md w-full p-4 bg-white">
        {/* LOGO+TITLE */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={GDGLOGO}
            className="object-contain w-10 h-10"
            alt="GDG logo"
          />
          <h1 className="font-bold text-lg">GDG NSEC</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center gap-8">
          <Link href="/events" className="font-semibold hover:text-blue-500">
            EVENTS
          </Link>
          <Link href="/team" className="font-semibold hover:text-blue-500">
            TEAM
          </Link>
          <Link href="/blogs" className="font-semibold hover:text-blue-500">
            BLOGS
          </Link>
          <Link href="/about" className="font-semibold hover:text-blue-500">
            ABOUT
          </Link>
        </div>

        {/* Notifications */}
        <div className="outline outline-yellow-300 outline-3 p-4  rounded-full flex items-center">
          <Image
            className="object-contain size-5"
            src={BellLogo}
            alt="bell-logo"
          />
        </div>
      </div>
      <hr className="w-full drop-shadow-[0px_2px_0px_rgba(0,0,0,1)]" />
    </>
  );
};

export default Navbar;

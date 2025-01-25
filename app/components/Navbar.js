'use client';
import React, { useState, useEffect } from 'react';
import GDGLOGO from "../../public/GDG_LOGO.png";
import BellLogo from "../../public/fi-br-bell-ring.png";
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Re-enable scroll
    }
  }, [showSidebar]);

  return (
    <>
      <nav className="flex items-center justify-between shadow-md w-full p-4 bg-white fixed top-0 z-50">
        {/* LOGO+TITLE */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={GDGLOGO}
            className="object-contain w-10 h-10"
            alt="GDG logo"
          />
          <h1 className="font-bold text-2xl md:text-lg">GDG NSEC</h1>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div
          onClick={() => setShowSidebar((prev) => !prev)}
          className="md:hidden cursor-pointer"
        >
          <GiHamburgerMenu size={24} />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
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

        {/* Notifications (Desktop) */}
        <div className="hidden outline outline-yellow-300 outline-3 p-2 rounded-full md:flex items-center">
          <Image
            className="object-contain w-6 h-6"
            src={BellLogo}
            alt="bell-logo"
          />
        </div>
      </nav>

      {/* Horizontal Divider */}
      <hr className="w-full drop-shadow-[0px_2px_0px_rgba(0,0,0,1)] fixed top-16 z-40" />

      {/* Sidebar */}
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
    </>
  );
};

export default Navbar;

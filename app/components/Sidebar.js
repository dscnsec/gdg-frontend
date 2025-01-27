import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import BellLogo from "../../public/fi-br-bell-ring.png";
import Image from 'next/image';

const Sidebar = ({ show, setShow }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-screen w-64 bg-white p-4 flex flex-col gap-8 shadow-lg transform transition-transform duration-300 z-50 ${show ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Close Icon */}
            <div className="flex justify-end">
                <IoMdClose
                    size={24}
                    className="font-bold cursor-pointer"
                    onClick={() => setShow(false)}
                />
            </div>

            {/* Sidebar Links */}
            <Link href="/events" className="font-semibold text-lg hover:text-blue-500">
                EVENTS
            </Link>
            <Link href="/team" className="font-semibold text-lg hover:text-blue-500">
                TEAM
            </Link>
            <Link href="/blogs" className="font-semibold text-lg hover:text-blue-500">
                BLOGS
            </Link>
            <Link href="/about" className="font-semibold text-lg hover:text-blue-500">
                ABOUT
            </Link>

            {/* Notifications (Desktop) */}
            <div className="outline outline-yellow-300 outline-4 p-4 w-fit mx-auto rounded-full">
                <Image
                    className="object-contain w-6 h-6"
                    src={BellLogo}
                    alt="bell-logo"
                />
            </div>
        </div>
    );
};

export default Sidebar;

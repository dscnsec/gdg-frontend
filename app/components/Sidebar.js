import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

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
    );
};

export default Sidebar;

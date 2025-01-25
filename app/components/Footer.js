import GDGLogo from "../../public/GDG_LOGO.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col items-center my-8 px-8 md:px-14">
            <div className="flex flex-col w-full p-6 md:p-8 gap-12 outline outline-8 rounded-lg mx-auto">

                {/* Logo and Navigation */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo Section */}
                    <div className="flex gap-4 items-center">
                        <Image
                            src={GDGLogo}
                            className="object-contain h-28 w-16 md:h-[192px] md:w-[113px]"
                            alt="GDG logo"
                        />
                        <div className="font-bold text-3xl md:text-4xl">
                            <h1>GDG</h1>
                            <h1>NSEC</h1>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
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
                </div>

                {/* Blank Space */}
                <div className="h-8 md:h-24"></div>

                {/* Footer Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright Section */}
                    <p className="font-bold flex items-center gap-1 text-center md:text-left">
                        <FaRegCopyright />
                        Google Developers Group, NSEC
                    </p>

                    {/* Social Media Handles */}
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.instagram.com/"
                            className="outline p-2 rounded-full outline-red-500 hover:bg-red-500 hover:text-white transition"
                        >
                            <AiFillInstagram size={20} />
                        </a>
                        <a
                            href="https://x.com/"
                            className="outline p-2 rounded-full outline-orange-500 hover:bg-orange-500 hover:text-white transition"
                        >
                            <FaSquareXTwitter size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            className="outline p-2 rounded-full outline-green-500 hover:bg-green-500 hover:text-white transition"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            className="outline p-2 rounded-full outline-blue-500 hover:bg-blue-500 hover:text-white transition"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

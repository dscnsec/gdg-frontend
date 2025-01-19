import GDGLogo from "../../public/GDG_LOGO.png"
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
// import { Link } from 'react-router';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className='flex justify-center items-end my-8 px-8'>

            <div className='flex w-full p-8 flex-col items-around gap-12 outline outline-8 rounded-lg'>

                {/*  LOGO and Title */}
                <div className='flex items-center gap-48 justify-between'>

                    <div className='flex gap-4 items-center'>
                        <Image src={GDGLogo} className='inline object-contain h-[192px] w-[113px] ' alt='GDG logo' />
                        <div className='font-bold text-4xl'>
                            <h1 >GDG </h1>
                            <h1 >NSEC</h1>
                        </div>
                    </div>

                    {/* Navigation Links */}

                    <div className='w-full flex justify-evenly gap-4 '>
                        <Link href="/events" className='font-semibold'>EVENTS</Link>
                        <Link href="/team" className='font-semibold'>TEAM</Link>
                        <Link href="/blogs" className='font-semibold'>BLOGS</Link>
                        <Link href="/about" className='font-semibold'>ABOUT</Link>
                    </div>
                </div>

                {/* Blank Space */}
                <div className='h-24'></div>


                {/* Footer */}
                <div className='flex items-center justify-between'>
                    <p className='font-bold flex items-center gap-1'>
                        <FaRegCopyright />
                        Google Developers Group, NSEC
                    </p>

                    {/* Social Media Handles */}
                    <div className='flex justify-center gap-4'>

                        <a href="https://www.instagram.com/" className='outline p-2 rounded-full outline-red-500'>
                            <AiFillInstagram />
                        </a>
                        <a href='https://x.com/' className='outline p-2 rounded-full outline-orange-500'>
                            <FaSquareXTwitter />
                        </a>
                        <a href='https://www.facebook.com/' className='outline p-2 rounded-full outline-green-500'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.Linkedin.com" className='outline p-2 rounded-full outline-blue-500'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

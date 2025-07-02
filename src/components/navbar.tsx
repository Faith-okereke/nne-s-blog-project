"use client";
import React, { useState } from "react";
import {  FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "My Portfolio" },
    {
      href: "/about",
      label: "About",
    },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];
  const [openNav, setOpenNav] = useState(true);
  return (
    <>
    <GiHamburgerMenu onClick={()=> setOpenNav(true)} className="lg:hidden"/>
      {openNav && (
        <div className="sticky top-0 z-30 flex lg:justify-between lg:items-center bg-white lg:h-20 h-screen p-2 lg:flex-row flex-col justify-normal">
          <div className="flex lg:block justify-between w-full items-center">
            <img
              src="/images/blogLogoNne.png"
              alt="logo"
              className="lg:h-32 h-16 w-16 lg:w-auto"
            />
            <MdClose className="lg:hidden" onClick={() => setOpenNav(false)} />
          </div>

          <ul className="w-full flex lg:flex-row flex-col lg:items-center justify-normal gap-6 text-lg font-semibold text-black">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? `text-[#ef9b60] underline`
                    : "text-black"
                }  hover:text-[#ef9b60] transition-colors active:underline`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
          <div className="flex lg:items-center gap-3 lg:justify-end pr-12">
            <div className="flex items-center justify-normal gap-2 absolute">
              <input
                type="text"
                className="border-[1px] p-1 rounded-md border-black block lg:hidden"
              />
              <FaSearch
                fill="#000000"
                className="absolute lg:sticky right-3 lg:right-0"
              />
            </div>

            <img
              className="rounded-full w-10 h-fit object-cover mt-12 lg:mt-0 lg:mr-6"
              src="/images/no-pfp.png"
              alt="pfp"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

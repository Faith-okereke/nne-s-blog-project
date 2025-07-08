"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "My Portfolio" },
    {
      href: "/about",
      label: "About",
    },
    { href: "https://www.github.com/Faith-okereke", label: "Github" },
    { href: "/blog", label: "Blog" },
  ];
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="hidden sticky top-0 z-30 lg:flex w-full justify-between items-center bg-white h-20 p-2">
        <div className="flex items-center justify-between w-full gap-72">
          <img
            src="/images/blogLogoNne.png"
            alt="logo"
            className="h-32 w-32 "
          />

          <ul className="w-full flex items-center  gap-6 text-lg font-semibold text-black">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${
                    item.href === pathname
                      ? `text-[#ef9b60] border-b-2 border-b-[#ef9b60]`
                      : "text-black"
                  }  hover:text-[#ef9b60] transition-colors active:underline`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex items-center gap-3 justify-end pr-12">
          <div className="flex items-center justify-normal gap-2 relative">
            <input
              type="text"
              className="border-[1px] p-1 rounded-md border-black block"
            />
            <FaSearch fill="#000000" className="absolute right-3 " />
          </div>

          <img
            className="rounded-full border-[#ef9b60] border-2 w-10 h-10 object-contain "
            src="/images/no-pfp.png"
            alt="pfp"
          />
        </div> */}
      </div>
      {/* <---------------------------------------------------MOBILE NAVBAR  --------------------------------------------->*/}
      <div className="lg:hidden">
        <div className="sticky top-0 z-30 flex justify-between w-full items-center bg-[#ef9b60] h-16">
          <GiHamburgerMenu
            fill="#ffffff"
            onClick={() => setOpenNav(true)}
            className="ml-3"
          />
            <img
                src="/images/blogLogoNne.png"
                alt="logo"
                className="h-20 w-20"
              />
          <div className="flex items-center justify-normal gap-2 relative">
            <input
              type="text"
              className="hidden border-[1px] p-1 rounded-md border-black"
            />
            <FaSearch fill="#ffffff" className="absolute right-3 " />
          </div>
        </div>

        {openNav && (
          <div className="fixed top-0 z-40 flex w-full bg-white pt-0 h-screen p-2  flex-col justify-normal">
            <div className="flex justify-between w-full items-center">
              <img
                src="/images/blogLogoNne.png"
                alt="logo"
                className="h-20 w-20"
              />
              <MdClose className="w-6 h-6" onClick={() => setOpenNav(false)} />
            </div>

            <ul className="w-full flex flex-col justify-normal gap-6 text-lg font-semibold text-black">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${
                      item.href === pathname
                        ? `text-[#ef9b60] underline`
                        : "text-black"
                    }  hover:text-[#ef9b60] transition-colors active:underline`}
                    onClick={()=> setOpenNav(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profile"
                  className={`${
                    pathname === "/profile"
                      ? `text-[#ef9b60] underline`
                      : "text-black"
                  }  hover:text-[#ef9b60] transition-colors active:underline`}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

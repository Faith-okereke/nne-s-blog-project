"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="relative w-full">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/BlogBag.jpg"
          alt="Background"
          className="w-full h-[400px] object-cover"
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="font-bold lg:text-6xl text-5xl text-nowrap playwrite-au-vic-guides-regular text-[#0b2f53]">
            Faith Okereke
          </h1>
          <p className="font-semibold lg:text-2xl text-lg opacity-80 text-[#0b2f53]">
            Front-end Developer
          </p>
          <p className="font-semibold lg:text-lg text-[#0b2f53]">
            3+ years of experience
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ef9b60] text-white rounded-md py-2 px-5 mt-4 border hover:border-[#ef9b60] hover:text-[#ef9b60] hover:bg-transparent transition-colors"
          >
            <a target="blank" href="mailto:faithokereke26@gmail.com">
              Contact Me
            </a>
          </motion.button>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="p-6">
        <h1 className="lg:text-3xl text-xl underline text-center text-[#0b2f53] font-bold">
          PROJECTS
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pt-10 lg:px-12 px-5">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} // 👈 Smooth scaling
              className="rounded-lg cursor-pointer w-full transition-transform duration-20 hover:shadow-2xl hover:shadow-[#ef9b60]/40
"
            >
              <div className="p-4 shadow-xl border-[2px] border-gray-200 transition-colors rounded-lg">
                <div className="flex gap-2 pb-2">
                  {["HTML", "CSS", "TAILWIND"].map((tech) => (
                    <p
                      key={tech}
                      className="bg-[#ef9b60]/20 px-3 py-1 text-black text-xs rounded"
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                <h2 className="font-bold text-lg pb-2">
                  Calendy Clone Project
                </h2>
                <img
                  src="/images/projectImage.png"
                  alt="project preview"
                  className="rounded w-full h-auto"
                />

                <p className="text-gray-600 py-3 text-sm">
                  A scheduling tool clone built with responsive design and
                  modern CSS frameworks. This project mimics core calendar
                  functionalities.
                </p>

                <div className="flex gap-3 items-center text-sm">
                  <a
                    target="_blank"
                    href="https://www.calnedy.com"
                    className="bg-[#0b2f53]/10 text-[#0b2f53] rounded-md p-2 flex items-center gap-1 hover:underline"
                  >
                    Live site <BsArrowUpRight />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.github.com/Faith-okereke"
                    className="bg-[#0b2f53]/10 text-[#0b2f53] rounded-md p-2 flex items-center gap-1 hover:underline"
                  >
                    Github code <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

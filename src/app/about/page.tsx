"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative w-full px-6 lg:px-32 py-20 overflow-hidden bg-[#172745]">
      <div className="flex lg:flex-row flex-col gap-24 lg:justify-around items-center w-full z-10 relative">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/meee.jpg"
            alt="Faith Okereke"
            className="w-[300px] lg:w-[500px] object-contain rounded-[100%] shadow-lg "
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full text-left text-white"
        >
          <p className="text-4xl lg:text-5xl font-bold pb-4">
            Hi 👋🏾, I’m Faith Okereke,
          </p>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              A passionate and detail-driven Front-End Developer with a knack
              for turning ideas into intuitive, responsive, and beautiful web
              experiences.
            </p>
            <p>
              I specialize in{" "}
              <strong className="text-[#ef9b60]">
                React, Next.js, and Tailwind CSS
              </strong>
              , building modern interfaces that are both user-focused and
              technically sound.
            </p>
            <p>
              I enjoy solving real-world problems through code and am constantly
              evolving — currently growing toward full-stack development by
              expanding my backend skills. Though introverted by nature, I
              communicate clearly, collaborate effectively, and deeply value
              meaningful user interactions.
            </p>
            <p>
              Outside of coding, I’m a huge movie lover and often find
              inspiration in storytelling and visual aesthetics. My goal? To
              build products that not only work well but feel right while
              balancing creativity with functionality.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8"
          >
            <a target="blank" href="mailto:faithokereke26@gmail.com">
              <button className="bg-[#ef9b60] text-white font-medium rounded-md py-2 px-6 border border-[#ef9b60] hover:bg-transparent hover:text-[#ef9b60] transition-colors duration-300">
                Contact Me
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;

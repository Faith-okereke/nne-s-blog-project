"use client";
import React, { useState, useEffect } from "react";

type Props = {};

type Posts = {};
type Authors = {};
type PortfolioData = {
  posts: Posts[];
  authors: Authors[];
};
const HomePage = (props: Props) => {
  const [blogsData, setBlogsData] = useState<PortfolioData[]>([]);


  return (
    <>
      <div className="relative w-full">
        <img
          src="/images/BlogBag.jpg"
          alt="Background"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-1/2 left-[40%] transform -translate-y-1/2 text-center">
          <h1 className="font-bold text-6xl playwrite-au-vic-guides-regular">
            Okereke Faith
          </h1>
          <p className="font-semibold text-2xl playwrite-au-vic-guides-regular opacity-70">
            Front-end Developer
          </p>
          <p className="font-semibold text-lg playwrite-au-vic-guides-regular">
            3+ years of experience
          </p>
        </div>
       
      </div>
       <div className="p-3">
          <h1 className="text-5xl">PROJECTS</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center pt-10 px-4">
            <div>
              <div className={` rounded-lg px-2 py-3 cursor-pointer`}>
                <div className="p-2 h-[400px] md:h-[400px]  shadow-2xl border-[2px] border-off-white hover:border-primary transition-colors rounded-lg">
                  <div
                    className={`flex gap-1 text-[9px] rounded-sm p-1 w-fit bg-[#a5a5a5] text-white ml-2`}
                  ></div>
                  <div className="p-2 flex flex-col justify-end items-end">
                    {/* <img src={BlogImage} alt="" /> */}
                    <div>
                      <h1 className="font-bold">Title of Project</h1>
                      <p>Content goes here</p>
                    </div>

                    <div className="flex flex-col justify-between mb-auto items-center text-sm align-text-bottom">
                      <p className="">Name</p>

                      <p>2/07/2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default HomePage;

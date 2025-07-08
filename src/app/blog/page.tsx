"use client";
import Tiptap from "@/components/tiptap";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Footer from "@/components/footer";
type Props = {};

const page = () => {
  return (
    <div>
      <form className="flex flex-col justify-start p-5 pt-8">
        <div className="flex justify-between w-full items-center">
          <h2 className="font-bold text-2xl">Create New Post</h2>
          <button
            type="submit"
            className="bg-[#ef9b60] rounded-lg p-2 text-sm text-white hover:bg-lightGray hover:text-black  hover:bg-white hover:border-secondary border-2 transition-colors "
          >
            Publish blog
          </button>
        </div>

        <div className="mt-10">
          {/* <Tiptap content={currentBlog.title} onChange={handleChange} /> */}
          <div className="flex justify-start gap-1 flex-col">
            {/* <ImageUpload image={image} setImage={setImage} /> */}
            {/* <Tiptap content={currentBlog.content} onChange={handleChange} /> */}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default page;

"use client";
import Tiptap from "@/components/tiptap";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Footer from "@/components/footer";
type Props = {};

const page = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  //State to store the blog details post
  const [blogData, setBlogData] = useState([]);
  //State to mange the details of the blog input
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    content: "",
    image: image,
  });

  const addBlog = (blog: any) => {
    const newBlog = {
      ...blog,
      id: uuid(),
      createdAt: new Date().toISOString(),
      image: image,
    };
    setBlogData((prevBlogs) => ({ ...prevBlogs, newBlog }));
    return newBlog.id;
  };

  useEffect(() => {
    // Load saved blogs from localStorage on mount
    const savedBlogs = localStorage.getItem("blogData");
    if (savedBlogs) {
      setBlogData(JSON.parse(savedBlogs));
    }
  }, []);

  useEffect(() => {
    // Save blogs to localStorage whenever they change
    localStorage.setItem("blogData", JSON.stringify(blogData));
  }, []);
  const route = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCurrentBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!currentBlog.title.trim()) {
      setError("Please provide a title");
      return false;
    }
    if (!currentBlog.content.trim()) {
      setError("Please provide content for your blog");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const blogId = addBlog({
        ...currentBlog,
        image: image,
      });

      // resetBlogForm();
      route.push(`/blog/${blogId}`);
    } catch (err) {
      setError("Failed to create blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col justify-start p-5 pt-8"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between w-full items-center">
          <h2 className="font-bold text-2xl">Create New Post</h2>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ef9b60] rounded-lg p-2 text-sm text-white hover:bg-lightGray hover:text-black  hover:bg-white hover:border-secondary border-2 transition-colors "
          >
            {isSubmitting ? "Publishing..." : "Publish blog"}
          </button>
        </div>

        <div className="mt-10">
          <Tiptap content={currentBlog.title} onChange={handleChange} />
          <div className="flex justify-start gap-1 flex-col">
            {/* <ImageUpload image={image} setImage={setImage} /> */}
            <Tiptap content={currentBlog.content} onChange={handleChange} />
          </div>
        </div>
      </form>
        <Footer />
    </div>
  );
};

export default page;

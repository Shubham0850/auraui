"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPost {
  id: number;
  image: string;
  heading: string;
  subheading: string;
  link: string;
}

const Blog3 = () => {
  const blog: BlogPost[] = [
    {
      id: 1,
      image: "https://www.auraui.com/images/analytic_image.avif",
      heading:
        "ESG Essentials for Businesses: Definition, Frameworks, Criteria, and More",
      subheading: "Download E-book",
      link: "/",
    },
    {
      id: 2,
      image: "https://www.auraui.com/images/feedback.jpeg",
      heading:
        "Sustainable Supplier Checklist: A Self-Assesment for Green Supply Chain Managers",
      subheading: "Download Template",
      link: "/",
    },
    {
      id: 3,
      image: "https://www.auraui.com/images/audience.avif",
      heading: "Choosing the Best ESG Software for your Business",
      subheading: "Read Blog",
      link: "/",
    },
    {
      id: 4,
      image: "https://www.auraui.com/images/digitization.webp",
      heading:
        "Looking for an ESG Software? Ask Yourself These 10 Questions Before You Buy One",
      subheading: "Take Quiz",
      link: "/",
    },
  ];

  return (
    <div className="max-w-[1600px] bg-white mx-auto px-4 pb-20 pt-12">
      <h1 className="text-xl md:text-[36px] font-bold mb-10">
        Latest in the World of ESG
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-6  gap-8">
        {blog.map((post) => (
          <div
            key={post.id}
            className="bg-[#D9D9D9]  border border-[#00000080] shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={post.image}
              alt="Blog image"
              width={320}
              height={200}
              className="w-full  "
            />

            <h2 className="text-[18px] text-[#000000CC] leading-[20px] py-2 px-4 font-bold">
              {post.heading}
            </h2>
            <Link href={"/"}>
              {" "}
              <h3 className="text-blue-500  pb-2 px-4 underline">
                {post.subheading}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog3;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const Blog2 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogdata = [
    {
      id: 1,
      img: "https://www.auraui.com/images/team.jpg",
      link: "https://medium.com/@techinsights/ai-redefining-productivity-in-modern-workspaces",
      title: "AI in the Workspace: Redefining Productivity",
      description:
        "Discover how artificial intelligence is transforming workflows, automating repetitive tasks, and enhancing creativity in modern workplaces.",
    },
    {
      id: 2,
      img: "https://www.auraui.com/images/digitization.webp",
      link: "https://medium.com/@blockchaintech/the-future-of-blockchain-beyond-cryptocurrency",
      title: "The Future of Blockchain: Beyond Cryptocurrency",
      description:
        "Explore the evolving applications of blockchain technology in industries like healthcare, finance, and supply chain management.",
    },
    {
      id: 3,
      img: "https://www.auraui.com/images/laptop.jpg",
      link: "https://medium.com/@devhub/10-must-have-tools-for-modern-developers-in-2024",
      title: "Top 10 Tools for Modern Developers in 2024",
      description:
        "A comprehensive guide to the best tools and technologies every developer needs to stay ahead in the fast-paced tech world.",
    },
  ];

  return (
    <div className="mt-24 md:mt-40 max-w-6xl mx-auto px-4">
      <header>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
          Blogs
        </h2>
      </header>
      <div className="flex flex-col md:flex-row gap-8">
        {blogdata.map((item) => (
          <div
            key={item.id}
            className="relative group md:h-[460px] p-2 bg-black rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:w-1/3"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                src={item.img}
              />
            </div>
            {/* Content Section */}
            <div className="p-5 bg-black text-white">
              <h3 className="text-lg font-medium md:text-xl hover:underline">
                <Link href={item.link} target="_blank">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm text-gray-400">{item.description}</p>
            </div>
            {/* Hover Action */}
            {hoveredId === item.id && (
              <div className="absolute bottom-4 left-5">
                <Link
                  href={item.link}
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  Read More
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog2;

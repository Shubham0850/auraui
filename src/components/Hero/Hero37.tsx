"use client";

import React, { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

const Hero37: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [industry, setIndustry] = useState("All Industries");
  const [rating, setRating] = useState("All Ratings");

  return (
    <div
      style={{
        backgroundImage: "url(https://www.auraui.com/images/bg.png)",
        backgroundSize: "cover",
      }}
      className="  flex justify-center "
    >
      <div className="py-12 md:py-0 md:h-[720px] flex max-w-[1400px] w-full flex-col justify-center items-center px-4">
        {/* Heading */}
        <div className="text-center pb-8 md:pb-32">
          <h1 className="font-bold text-[30px] leading-[40px] md:leading-[80px] md:text-[60px] mb-4">
            Find the ESG score of companies in France
          </h1>
          <h2 className="font-normal md:w-[68%] mx-auto text-[#000000CC] text-[18px] md:text-[24px] md:leading-[30px] ">
            Explore and compare sustainability profile of all major companies in
            France -- across industries, ESG ratings, and environmental
            certificates.
          </h2>
        </div>

        {/* Search Filters */}
        <div className="flex lg:flex-row flex-col w-full max-w-[1400px]">
          <div className="w-full border-4 border-[#18A0FB] flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-md">
            {/* Company Name Input */}
            <input
              type="text"
              placeholder="Company Name"
              className="px-4 py-4 w-full font-medium  lg:text-[24px] leading-[30px] placeholder-[#CCCCCC] md:w-auto flex-1 rounded-l-md border-r border-[#18A0FB] focus:outline-none"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            {/* Country Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4 font-normal  lg:text-[24px] leading-[30px] py-4 w-full bg-white border-r border-[#18A0FB] focus:outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>All Countries</option>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2  pointer-events-none" />
            </div>

            {/* Industry Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4  font-normal lg:text-[24px] leading-[30px] py-4 w-full bg-white border-r border-[#18A0FB] focus:outline-none"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Rating Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4 py-4 w-full font-normal   lg:text-[24px] leading-[30px] bg-white border-r border-[#18A0FB] focus:outline-none"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2  pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <button className="px-9 py-4 font-normal  text-[24px] leading-[30px] bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full md:w-auto mt-4 lg:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero37;

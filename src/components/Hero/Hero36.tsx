"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { WiDirectionRight } from "react-icons/wi";

const Hero36 = () => {
  const [numLines, setNumLines] = useState(0);

  useEffect(() => {
    const calculateLines = () => {
      const screenWidth =
        window.innerWidth || document.documentElement.clientWidth;
      setNumLines(Math.ceil(screenWidth / 50));
    };

    calculateLines();
    window.addEventListener("resize", calculateLines);

    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: numLines }).map((_, index) => (
          <div
            key={index}
            className="absolute h-full w-[1px] bg-gray-300 opacity-15"
            style={{ left: `${index * 50}px` }}
          />
        ))}
      </div>

      <div className="relative md:px-4 z-10 flex flex-col justify-center items-center pb-4 h-full">
        <div className="container max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-9 md:pt-0">
          <div className="text-white pt-0 md:pt-[110px] md:w-[70%] px-4 md:px-0">
            <div className="hidden md:flex flex-col text-center md:text-left text-4xl md:text-6xl font-semibold leading-tight mb-6">
              <span>Welcome to</span>
              <span className="text-[#C2F36F]">Auraui</span>
              <span>Your Gateway to Innovation</span>
            </div>
            <div className="flex md:hidden flex-col text-center text-4xl font-semibold leading-tight mb-6">
              <span>Welcome to</span>
              <span className="text-[#C2F36F]">Auraui</span>
              <span>Your Gateway to Innovation</span>
            </div>
            <p className="text-lg md:text-xl text-center md:text-left text-gray-400 mb-6 md:mb-20">
              Auraui is at the forefront of technological innovation, providing
              cutting-edge solutions that empower businesses and individuals to
              reach new heights. Join us in exploring the future of technology
              and creativity.
            </p>
            <button className="flex items-center justify-center w-full md:w-96 bg-[#C2F36F] text-black text-lg font-semibold py-2">
              Discover More
              <WiDirectionRight size={40} className="ml-2" />
            </button>
          </div>
          <div className="flex px-4 justify-center md:justify-end w-full md:w-auto">
            <Image
              src="/uyt.webp"
              alt="Auraui hero image"
              className="w-[300px] md:w-[700px] mt-10 md:mt-0"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero36;

import React from "react";
import { FaPlay } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

function Hero7() {
  const commonStyles = {
    button:
      "inline-flex items-center justify-center px-6 py-2 font-sans text-base font-semibold transition-all duration-200 rounded-full sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
    focusRing: "focus:ring-primary focus:ring-offset-black",
  };

  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full opacity-40 blur-[1px] saturate-150"
          src="/memeimage/working-women-3.jpg"
          alt="AuraUI Background"
        />
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <a
              href="#"
              title="AuraUI"
              className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-primary"
            >
              <img
                className="w-auto h-8"
                src="https://www.auraui.com/logo-dark.png"
                alt="AuraUI Logo"
              />
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-black"
              >
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              {["About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-base text-white/80 hover:text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-black"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tight text-white">
              <span className="font-sans font-normal text-5xl sm:text-6xl lg:text-7xl">
                Discover
              </span>
              <br />
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                AuraUI
              </span>
            </h1>

            <p className="mt-6 font-sans text-base sm:text-lg text-white text-opacity-70 leading-relaxed">
              Build seamless UI experiences using AuraUI components. Enhance
              your workflow with high-performance, modern designs.
            </p>

            <div className="flex items-center justify-center mt-10 space-x-4 sm:space-x-6">
              <a
                href="#"
                className={`${commonStyles.button} bg-white text-black border-2 border-transparent hover:bg-opacity-90 ${commonStyles.focusRing}`}
              >
                Get Started
              </a>

              <a
                href="#"
                className={`${commonStyles.button} text-white border-2 border-white hover:bg-white hover:text-black group ${commonStyles.focusRing}`}
              >
                <FaPlay className="h-4 w-4 mr-2 group-hover:scale-105 transition-transform duration-200" />
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#"
          className="inline-flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-full bg-black border border-white/20 hover:bg-white hover:text-black  -translate-x-[14px]"
        >
          <IoIosArrowDown className="h-5 w-5 mt-1 " />
        </a>
      </motion.div>
    </div>
  );
}

export default Hero7;

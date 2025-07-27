import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero6() {
  const commonStyles = {
    focusRing:
      "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600 focus:ring-offset-black",
    container: "container px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
    button:
      "inline-flex items-center justify-center text-base font-semibold transition-all duration-200 rounded-full sm:text-lg sm:leading-8",
  };

  return (
    <div className="relative pt-32 overflow-hidden bg-black xl:pt-40">
      {/* Subtle glowing radial background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between">
            <a
              href="#"
              title="AuraUI"
              className={`inline-flex rounded-md ${commonStyles.focusRing}`}
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
                className={`p-2 -m-2 text-white rounded-full ${commonStyles.focusRing}`}
              >
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              {["Home", "Components", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-base font-normal text-white/80 hover:text-white transition-all duration-200 rounded ${commonStyles.focusRing}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className={commonStyles.container}>
          <div className="text-left md:max-w-xl md:mx-auto md:text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-sans text-5xl sm:text-6xl lg:text-7xl">
                Elevate Coding
              </span>
              <br />
              <span className="font-serif italic text-6xl sm:text-7xl lg:text-8xl">
                with AuraUI
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg font-normal leading-7 text-white/70">
              Discover components that bring design consistency and ease to your
              Next.js projects. Build faster with ready-to-use designs.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className={`${commonStyles.button} px-8 py-3 text-black bg-white border-2 border-transparent hover:bg-opacity-90 ${commonStyles.focusRing}`}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase video */}
      <motion.div
        className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="overflow-hidden rounded-2xl aspect-video relative group">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AuraUI Background"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <button
              type="button"
              className="flex flex-col items-center group/play"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 text-white transition-all duration-200 border-2 rounded-full border-indigo-600 group-hover/play:bg-white/10">
                <FaPlay className="h-4 w-4 ml-1" />
              </span>
              <span className="mt-4 text-sm font-medium text-white">
                Play overview
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero6;

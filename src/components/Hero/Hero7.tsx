import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Hero7() {
  const commonStyles = {
    button:
      "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 rounded-full sm:leading-8 sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
    focusRing: "focus:ring-primary focus:ring-offset-secondary",
  };

  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <a
              href="#"
              title="AuraUI"
              className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
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
                className="p-2 -m-2 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              {["About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-base font-normal text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-60"
          src="/memeimage/working-women-3.jpg"
          alt="AuraUI Background"
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">Discover</span>
              <br />
              <span className="font-serif italic font-normal text-8xl">
                AuraUI
              </span>
            </h1>
            <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
              Building seamless UI experiences with AuraUI components. Enhance
              your projects effortlessly with our high-performance solutions.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
              <a
                href="#"
                className={`${commonStyles.button} bg-white text-black hover:bg-opacity-90 ${commonStyles.focusRing} border-2 border-transparent`}
              >
                Get started
              </a>

              <a
                href="#"
                className={`${commonStyles.button} bg-transparent text-white border-primary hover:bg-white hover:text-black ${commonStyles.focusRing} border-2`}
              >
                <FaPlay className="h-5 w-5 mr-2" />
                Watch trailer
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
        <a
          href="#"
          className="inline-flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-full bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
        >
          <IoIosArrowDown className="h-5 w-5 mt-2" />
        </a>
      </div>
    </div>
  );
}

export default Hero7;

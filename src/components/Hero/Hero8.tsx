import React from "react";
import { FaPlay } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";

function Hero8() {
  const commonClasses = {
    focusRing: "focus:outline-none focus:ring-2 focus:ring-offset-2",
    button:
      "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 rounded-full sm:leading-8 sm:text-lg",
    headerLink:
      "font-sans text-base font-normal transition-all duration-200 rounded text-white",
  };

  return (
    <div className="relative pt-40 pb-56 bg-black">
      <div className="absolute inset-0 lg:hidden"></div>

      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <a
                href="#"
                title="AuraUI"
                className={`inline-flex rounded-md ${commonClasses.focusRing} focus:ring-offset-secondary focus:ring-primary`}
              >
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-dark.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className={`p-2 -m-2 rounded-full text-white ${commonClasses.focusRing} focus:ring-offset-secondary focus:ring-primary`}
              >
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a href="#" title="Courses" className={commonClasses.headerLink}>
                Courses
              </a>

              <a
                href="#"
                title="Sign Up"
                className={`${commonClasses.button} border-2 border-primary text-white hover:bg-white hover:text-black focus:ring-primary focus:ring-offset-secondary`}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2">
            <div>
              <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                Elevate your design skills
              </h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-sans font-normal text-7xl">
                  Design your
                </span>
                <br />
                <span className="font-serif italic font-normal text-8xl">
                  perfect interface
                </span>
              </p>
              <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Discover the art of seamless design and development with AuraUI.
                Empower your projects with stunning interfaces.
              </p>
            </div>

            <div className="hidden lg:block">
              <img
                className="w-full mx-auto"
                src="https://www.auraui.com/memeimage/laptop-working-men.jpg"
                alt="AuraUI Visual"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="relative py-8 bg-white">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="md:flex md:items-center md:justify-between">
              <p className="font-sans text-xl font-normal tracking-tight text-black">
                Starting at $9.99/month
              </p>

              <div className="flex items-center justify-start mt-4 space-x-3 md:mt-0 md:justify-end sm:space-x-4">
                <a
                  href="#"
                  title="Get started"
                  className={`${commonClasses.button} bg-black text-white hover:bg-opacity-90 focus:ring-secondary focus:ring-offset-primary`}
                >
                  Get started
                </a>

                <a
                  href="#"
                  title="Watch trailer"
                  className={`${commonClasses.button} border-2 border-secondary bg-transparent text-black hover:bg-black hover:text-white focus:ring-secondary focus:ring-offset-primary`}
                >
                  <FaPlay className="h-5 w-5 mr-2" />
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero8;

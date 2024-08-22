import React from "react";
import { FaPlay } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";

function Hero16() {
  const commonClasses = {
    button:
      "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 rounded-full sm:leading-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary",
    buttonPrimary:
      "border-2 border-transparent bg-white text-black hover:bg-opacity-90",
    buttonSecondary:
      "bg-transparent border-2 text-white border-primary hover:bg-white hover:text-black",
  };

  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <a
                href="#"
                title="AuraUI"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-dark.png"
                  alt="AuraUI"
                />
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#"
                title="Components"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                Components
              </a>

              <a
                href="#"
                title="Sign Up"
                className={`${commonClasses.button} ${commonClasses.buttonSecondary}`}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-60"
          src="https://www.auraui.com/memeimage/web-dev.jpeg"
          alt="Background"
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
              Elevate Your Web Development
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">
                Design with
              </span>
              <br />
              <span className="font-serif italic font-normal text-8xl">
                AuraUI
              </span>
            </p>
            <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              AuraUI is your gateway to intuitive and high-performance web
              design. Build with flexibility, backed by powerful components and
              seamless integration.
            </p>
            <p className="mt-8 font-sans text-xl font-normal text-white">
              Starting at $9.99/month
            </p>

            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <a
                href="#"
                title="Get Started"
                className={`${commonClasses.button} ${commonClasses.buttonPrimary}`}
                role="button"
              >
                Get started
              </a>

              <a
                href="#"
                title="Watch Trailer"
                className={`${commonClasses.button} ${commonClasses.buttonSecondary}`}
                role="button"
              >
                <FaPlay className="h-5 w-5 mr-2" />
                Watch trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero16;

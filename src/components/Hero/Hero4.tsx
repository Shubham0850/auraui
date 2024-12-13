import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import Image from "next/image";

const commonStyles = {
  link: "text-base font-normal text-gray-400 transition-all duration-200 hover:text-white",
  button:
    "inline-flex items-center  justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full",
  gradientButton:
    "relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full",
};

const Hero4 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" className="flex">
                <Image
                  className="w-auto h-9"
                  src="https://www.auraui.com/logo-dark.png"
                  alt="AuraUI Logo"
                  width={100}
                  height={66}
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaTimes className="w-7 h-7" />
                ) : (
                  <FaBars className="w-7 h-7" />
                )}
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a href="#" className={commonStyles.link}>
                Products
              </a>
              <a href="#" className={commonStyles.link}>
                Features
              </a>
              <a href="#" className={commonStyles.link}>
                Pricing
              </a>
              <a href="#" className={commonStyles.link}>
                Support
              </a>
            </nav>

            <div className="relative  hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a href="#" className={commonStyles.gradientButton} role="button">
                Start Free Trial
              </a>
            </div>
          </div>

          <nav className={`md:hidden ${expanded ? "block" : "hidden"}`}>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a href="#" className={commonStyles.link}>
                Products
              </a>
              <a href="#" className={commonStyles.link}>
                Features
              </a>
              <a href="#" className={commonStyles.link}>
                Pricing
              </a>
              <a href="#" className={commonStyles.link}>
                Support
              </a>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  className={commonStyles.gradientButton}
                  role="button"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Connecting Devs with Employers
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                AuraUI connects top developers with the best opportunities.
                Discover your next big project or join a dynamic team today.
              </p>

              <form
                action="#"
                method="POST"
                className="relative mt-8 rounded-full sm:mt-12"
              >
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <FaSearch className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      placeholder="Try React Dev, etc."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <div className="inline-flex cursor-pointer items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-gray-200 rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                    Find A Developer
                  </div>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 50k+ users
                </p>
                <div className="flex items-center mt-3">
                  <div className="flex">
                    <HiOutlineStar className="w-5 h-5 text-gradient" />
                    <HiOutlineStar className="w-5 h-5 text-gradient" />
                    <HiOutlineStar className="w-5 h-5 text-gradient" />
                    <HiOutlineStar className="w-5 h-5 text-gradient" />
                    <HiOutlineStar className="w-5 h-5 text-gray-500" />
                    <span className="ml-2 text-base font-normal text-white">
                      4.1/5
                    </span>
                    <span className="ml-1 text-base font-normal text-gray-500">
                      (14k Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur-lg z-0"></div>
              <Image
                src="https://auraui.com/memeimage/devss.jpg"
                alt="Hero Image"
                width={600}
                height={600}
                objectFit="cover"
                className="rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero4;

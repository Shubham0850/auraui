import React from "react";
import {
  FaCreditCard,
  FaCheck,
  FaLock,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const commonStyles = {
  link: "text-base text-white transition-all duration-200 hover:text-opacity-80",
  button:
    "inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700",
  icon: "flex-shrink-0 ml-3 text-sm text-white",
};

function Hero24() {
  return (
    <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://example.com/auraui-logo.png"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className={commonStyles.link}>
                {" "}
                Features{" "}
              </a>
              <a href="#" title="" className={commonStyles.link}>
                {" "}
                Solutions{" "}
              </a>
              <a href="#" title="" className={commonStyles.link}>
                {" "}
                Resources{" "}
              </a>
              <a href="#" title="" className={commonStyles.link}>
                {" "}
                Pricing{" "}
              </a>
            </div>

            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <a
                href="#"
                title=""
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                {" "}
                Log in{" "}
              </a>
              <a href="#" title="" className={commonStyles.button}>
                Apply for free
                <HiOutlineArrowRight className="w-6 h-6 ml-8 -mr-2" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <FaBars className="block w-6 h-6" />
              <FaTimes className="hidden w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
          <img
            className="hidden w-full lg:block"
            src="https://example.com/auraui-background.png"
            alt="Auraui Background"
          />
          <img
            className="block w-full lg:hidden"
            src="https://example.com/auraui-background-mobile.png"
            alt="Auraui Background Mobile"
          />
        </div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                {" "}
                Simplified financial solutions with Auraui{" "}
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              Experience seamless financial management with Auraui&apos;s innovative
              tools and solutions designed for modern users.
            </p>

            <a href="#" title="" className={commonStyles.button}>
              Apply for free
              <HiOutlineArrowRight className="w-6 h-6 ml-8 -mr-2" />
            </a>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <FaCreditCard className={commonStyles.icon} />
                <p className="ml-3 text-sm text-white">
                  Over 12,000 users on board
                </p>
              </div>

              <div className="flex items-center">
                <FaCheck className={commonStyles.icon} />
                <p className="ml-3 text-sm text-white">
                  No yearly charges, high limits
                </p>
              </div>

              <div className="flex items-center">
                <FaLock className={commonStyles.icon} />
                <p className="ml-3 text-sm text-white">
                  Secure & reliable financial services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero24;

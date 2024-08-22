import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const commonStyles = "transition-all duration-200 hover:text-opacity-80";

const Hero26: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="AuraUI" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <AiOutlineMenu className="block w-6 h-6" />
              <AiOutlineClose className="hidden w-6 h-6" />
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title="Features"
                className={`text-base text-black ${commonStyles}`}
              >
                Features
              </a>
              <a
                href="#"
                title="Solutions"
                className={`text-base text-black ${commonStyles}`}
              >
                Solutions
              </a>
              <a
                href="#"
                title="Resources"
                className={`text-base text-black ${commonStyles}`}
              >
                Resources
              </a>
              <a
                href="#"
                title="Pricing"
                className={`text-base text-black ${commonStyles}`}
              >
                Pricing
              </a>
            </div>

            <a
              href="#"
              title="Join Now"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 bg-black text-white rounded-full hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black font-semibold"
              role="button"
            >
              Join Now
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A hub for innovative minds
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Connect & Innovate with AuraUI
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Accelerate your growth with expert insights and cutting-edge
                tools. Join a thriving community of innovators.
              </p>
              <a
                href="#"
                title="Join for free"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join for free
                <BsArrowRight className="w-6 h-6 ml-3" />
              </a>
              <p className="mt-5 text-gray-600">
                Already part of AuraUI?{" "}
                <a
                  href="#"
                  title="Log in"
                  className={`text-black ${commonStyles}`}
                >
                  Log in
                </a>
              </p>
            </div>
            <div>
              <img
                className="w-full"
                src="https://www.auraui.com/memeimage/hero26.png"
                alt="AuraUI Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero26;

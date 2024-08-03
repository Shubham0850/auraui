import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { HiOutlineClipboardList } from "react-icons/hi";

const commonStyles = "transition-all duration-200 hover:text-opacity-80";

const Hero25: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <header className="relative">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="Auraui" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <AiOutlineMenu className="block w-6 h-6" />
              <AiOutlineClose className="hidden w-6 h-6" />
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title="Features"
                className={`text-base font-semibold text-black ${commonStyles}`}
              >
                Features
              </a>
              <a
                href="#"
                title="Solutions"
                className={`text-base font-semibold text-black ${commonStyles}`}
              >
                Solutions
              </a>
              <a
                href="#"
                title="Resources"
                className={`text-base font-semibold text-black ${commonStyles}`}
              >
                Resources
              </a>
              <a
                href="#"
                title="Pricing"
                className={`text-base font-semibold text-black ${commonStyles}`}
              >
                Pricing
              </a>
              <div className="w-px h-5 bg-black/20"></div>
              <a
                href="#"
                title="Log in"
                className={`text-base font-semibold text-black ${commonStyles}`}
              >
                <IoMdLogIn className="inline mr-2" /> Log in
              </a>
              <a
                href="#"
                title="Try for free"
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                Try for free <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Collaborate seamlessly with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Auraui
                  </h1>
                </div>
              </h1>
              <p className="mt-8 text-base text-black sm:text-xl">
                Empower your team with Auraui&apos;s tools for effortless
                collaboration and productivity. Streamline your workflow with
                our cutting-edge solutions.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title="Start exploring"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  Start exploring
                </a>
                <a
                  href="#"
                  title="Watch video"
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <BiPlayCircle className="w-10 h-10 mr-3 text-orange-500" />
                  Watch video
                </a>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt="Auraui Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero25;

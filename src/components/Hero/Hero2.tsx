import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const commonStyles =
  "text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0";
const commonButtonStyles =
  "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-lg";

const images = {
  logo: "https://www.auraui.com/logo-light.png",
  hero: "https://www.auraui.com/memeimage/no-bg-woman.png",
};

const Hero2: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="Auraui" className="flex">
                <img className="w-24" src={images.logo} alt="Auraui Logo" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <FiX className="w-7 h-7" />
                ) : (
                  <FiMenu className="w-7 h-7" />
                )}
              </button>
            </div>

            <div className="hidden md:flex md:space-x-10 md:items-center md:justify-center">
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Services
              </a>
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Latest Collections
              </a>
              <a
                href="#"
                className={`text-xs font-bold tracking-widest text-gray-900 uppercase ${commonStyles} hover:text-indigo-600`}
              >
                Blog
              </a>
            </div>

            <div className="hidden md:flex">
              <a
                href="#"
                className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                role="button"
              >
                Join Email List
              </a>
            </div>
          </nav>

          {expanded && (
            <nav>
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  <a href="#" className={commonStyles}>
                    Services
                  </a>
                  <a href="#" className={commonStyles}>
                    Latest Collections
                  </a>
                  <a href="#" className={commonStyles}>
                    Blog
                  </a>
                  <a
                    href="#"
                    className={`${commonButtonStyles} bg-gray-900 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                    role="button"
                  >
                    Join Email List
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-center max-w-md mx-auto gap-6 lg:max-w-none">
            <div className="self-center w-full lg:w-[70%]">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Welcome to AuraUI
                <p> your gateway to modern UI components.</p>
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Discover the latest in web design, NFT integration, and more
                with Auraui. Your one-stop solution for sleek and functional UI.
              </p>
              <div className="relative inline-flex mt-8 group">
                <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  Explore Auraui Blog
                </a>
              </div>
            </div>

            <div className="self-end w-full lg:w-1/2">
              <Image
                className="rounded-sm"
                src={images.hero}
                alt="Auraui Hero"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;

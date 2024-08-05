import React, { useState } from "react";
import { FaPlay, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const commonButtonStyles =
  "inline-flex items-center justify-center px-4 py-2 text-base font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

const Hero3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui">
                <Image
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Auraui Logo"
                  width={100}
                  height={32}
                />
              </a>
            </div>

            <nav className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              {["Products", "Features", "Pricing", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <a
                href="#"
                className={`${commonButtonStyles} text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900`}
              >
                Start free trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className={`${commonButtonStyles} p-1 text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900`}
              >
                {menuOpen ? (
                  <FaTimes className="w-3 h-4" />
                ) : (
                  <FaBars className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="lg:hidden">
              <div className="flex flex-col items-start p-4 mt-4 space-y-4 bg-white rounded-lg shadow-lg">
                {["Products", "Features", "Pricing", "Support"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className={`${commonButtonStyles} w-full text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900`}
                >
                  Start free trial
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="pb-8 bg-white sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="lg:mt-16">
              <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">
                  Discover Auraui: Your Ultimate UI Kit
                </h1>
                <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                  Auraui provides the components you need to create a
                  professional website, landing page, or admin panel for your
                  web applications.
                </p>
              </div>

              <div className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap">
                <a
                  href="#"
                  className={`${commonButtonStyles} text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 focus:ring-blue-700`}
                >
                  Start using Auraui
                </a>

                <a
                  href="#"
                  className={`${commonButtonStyles} text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300`}
                >
                  <FaPlay className="w-6 h-6 mr-3 -ml-1 text-blue-600" />
                  Watch 1 min intro
                </a>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24">
                <Image
                  className="w-full shadow-2xl rounded-xl lg:rounded-2xl ring-[24px] lg:ring-[48px] ring-blue-100 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dashboard Mockup"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero3;

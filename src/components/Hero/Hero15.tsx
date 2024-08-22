import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";

// Common styles
const buttonStyle =
  "inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
const linkStyle =
  "inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300";

function Hero15() {
  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <a href="#" title="" className={linkStyle}>
                Products
              </a>

              <a href="#" title="" className={linkStyle}>
                Features
              </a>

              <a href="#" title="" className={linkStyle}>
                Pricing
              </a>

              <a href="#" title="" className={linkStyle}>
                Support
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <a
                href="#"
                title=""
                className={`${buttonStyle} bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-blue-700`}
                role="button"
              >
                Start Free Trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button type="button" aria-expanded="false">
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 overflow-hidden bg-white sm:py-16 lg:pb-20 xl:pb-48">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl sm:tracking-tight">
                Transform Your Great Web Presence with AuraUI
              </h1>
              <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                AuraUI provides innovative tools and components to craft a
                professional and modern web experience quickly and efficiently.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className={`${buttonStyle} bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-blue-700`}
                  role="button"
                >
                  Explore AuraUI
                </a>
              </div>

              <ul className="mt-10 space-y-4">
                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Access to cutting-edge design components.
                </li>

                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Create stunning web experiences in minutes.
                </li>

                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Built for developers seeking high performance.
                </li>
              </ul>
            </div>

            <div>
              <div className="relative mx-auto">
                <img
                  className="w-full mx-auto md:scale-150 sm:mb-20"
                  src="https://www.auraui.com/memeimage/manwithoutbg.png"
                  alt="AuraUI Demo"
                />
                <div className="md:absolute top-80 right-[-50px] bg-gray-900 rounded-br-none sm:-translate-x-16 xl:-translate-x-24 rounded-2xl sm:scale-100">
                  <div className="px-4 py-5 sm:p-6">
                    <blockquote>
                      <p className="text-base font-normal leading-6 text-white">
                        AuraUI has revolutionized our web design process. The
                        components are incredibly intuitive and have
                        significantly streamlined workflow.
                      </p>
                    </blockquote>
                    <p className="mt-4 text-base font-semibold text-white">
                      Jamie Lee
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-400">
                      Lead Designer - Web Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero15;

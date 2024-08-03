import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

function Hero18() {
  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="Auraui Home">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <a
                href="#"
                title="Products"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Products
              </a>

              <a
                href="#"
                title="Features"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Features
              </a>

              <a
                href="#"
                title="Pricing"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Pricing
              </a>

              <a
                href="#"
                title="Support"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Support
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <a
                href="#"
                title="Start Free Trial"
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
              >
                Start Free Trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <span aria-hidden="true">
                  <FaPlay className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 bg-white sm:py-16 lg:pt-20 lg:pb-96 xl:pt-24 xl:pb-72">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover object-top w-full h-full"
            src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/4/avatars-background.png"
            alt="Background"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">
              Communicate Better
            </h1>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
              Auraui gives you the tools you need to build a professional
              website effortlessly.
            </p>
            <div className="flex flex-col items-center gap-5 mt-8">
              <a
                href="#"
                title="Start Our 14 Days Free Trial"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Start Our 14 Days Free Trial
              </a>

              <a
                href="#"
                title="Watch 1 min intro"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                <FaPlay className="w-6 h-6 mr-3 -ml-1 text-blue-600" />
                Watch 1 Min Intro
              </a>
            </div>
          </div>

          <div className="-mt-4 sm:-mt-16 md:-mt-32 lg:hidden">
            <img
              className="object-cover object-top w-full h-full"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/4/avatars-background.png"
              alt="Background"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero18;

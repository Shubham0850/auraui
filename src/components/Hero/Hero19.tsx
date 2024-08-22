import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuShoppingBag } from "react-icons/lu";

function Hero19() {
  const commonStyles = {
    sectionPadding: "py-12 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
    headerLink:
      "text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white",
    buttonBase:
      "inline-flex items-center justify-center px-3 py-3 text-base font-bold leading-7 transition-all duration-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
  };

  return (
    <section>
      <header className="bg-gray-900 border-b border-gray-800">
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <a href="#" title="AuraUI" className="inline-flex">
                <span className="sr-only">AuraUI logo</span>
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-dark.png"
                  alt="AuraUI logo"
                />
              </a>
            </div>
            <div className="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
              {["Components", "Features", "Docs", "Support"].map((text) => (
                <a href="#" title={text} className={commonStyles.headerLink}>
                  {text}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-end space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200"
              >
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
              <button
                type="button"
                className="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200"
              >
                <LuShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`bg-gray-900 ${commonStyles.sectionPadding}`}>
        <div
          className={`flex justify-between items-center ${commonStyles.container}`}
        >
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
              Design Stunning UIs Effortlessly with AuraUI
            </h1>
            <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
              AuraUI offers high-quality components and templates, helping you
              build beautiful websites faster. No complex setup required—just
              focus on your creativity.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <a
                href="#"
                title="Get UI Kit"
                className={`${commonStyles.buttonBase} bg-white text-gray-900 focus:ring-offset-gray-900 focus:ring-white hover:bg-gray-200 sm:px-6`}
                role="button"
              >
                Get UI Kit Now
              </a>
              <a
                href="#"
                title="Live Preview"
                className={`${commonStyles.buttonBase} text-white bg-transparent focus:ring-offset-gray-900 focus:ring-gray-700 hover:bg-gray-700 sm:px-4`}
                role="button"
              >
                Check Live Preview
              </a>
            </div>
          </div>
          <div className="w-[60%] rounded-2xl hidden lg:block overflow-hidden">
            <img
              className="object-cover object-right-bottom w-full h-full rounded-2xl"
              src="/memeimage/ui.jpg"
              alt="AuraUI showcase"
            />
          </div>
        </div>
        <div className="mt-8 w-[90%] mx-auto lg:hidden">
          <img
            className="object-cover object-right-bottom w-full h-full rounded-2xl"
            src="/memeimage/ui.jpg"
            alt="AuraUI showcase"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero19;

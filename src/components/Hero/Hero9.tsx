import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuShoppingBag } from "react-icons/lu";

function Hero9() {
  const commonStyles = {
    headerLink:
      "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
    button:
      "relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700",
    sectionContainer: "px-4 mx-auto sm:px-6 lg:px-8 xl:px-12",
    headingText: "text-base font-bold text-gray-900",
    inputField:
      "block w-full px-4 py-3 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md focus:ring-gray-900 focus:border-gray-900",
    submitButton:
      "cursor-pointer inline-flex w-full lg:w-auto items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 focus:ring-offset-[#FFE942]",
  };

  return (
    <section>
      <header className="bg-[#FFE942]">
        <div className={commonStyles.sectionContainer}>
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:justify-center lg:ml-16 lg:space-x-8 xl:space-x-14">
              {["All Artworks", "All Artists", "Sell Your Artwork"].map(
                (text) => (
                  <a
                    href="#"
                    title=""
                    className={commonStyles.headerLink}
                    key={text}
                  >
                    {text}
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center justify-end ml-auto">
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {["Create Free Account", "Login"].map((text) => (
                  <a
                    href="#"
                    title=""
                    className={commonStyles.headerLink}
                    key={text}
                  >
                    {text}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-end space-x-5">
                <button
                  type="button"
                  className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                >
                  <HiOutlineBars3 className="w-7 h-7" />
                </button>

                <button type="button" className={commonStyles.button}>
                  <LuShoppingBag className="h-5 w-5" />
                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative py-12 bg-[#FFE942] overflow-hidden sm:py-16 lg:py-20">
        <div className={commonStyles.sectionContainer + " max-w-7xl"}>
          <div className="max-w-6xl mx-auto">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
              <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:order-2 lg:text-left">
                <p className="text-base font-medium text-gray-600">
                  The only book you’ll need to earn more
                </p>
                <h1 className=" text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight">
                  Learn to earn more money💰without losing time.
                </h1>

                <div className="mt-6">
                  <p className={commonStyles.headingText}>
                    Get your free chapter now
                  </p>

                  <form action="#" className="mt-4 lg:mt-5">
                    <div>
                      <input
                        type="email"
                        placeholder="Your email where we’ll send the book"
                        className={commonStyles.inputField}
                      />
                    </div>

                    <div className="mt-3">
                      <div className={commonStyles.submitButton}>
                        Send My Free Chapter
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="relative lg:order-1">
                <div className="absolute -inset-24">
                  <img
                    className="w-full h-full"
                    src="https://www.auraui.com/memeimage/hero-9-cover.png"
                    alt=""
                  />
                </div>

                <div className="relative">
                  <img
                    className="w-full max-w-xs mx-auto xl:max-w-sm"
                    src="https://www.auraui.com/memeimage/hero-9-book.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero9;

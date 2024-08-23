import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi"; // Substitute for the lightning bolt SVG
import { AiOutlineHome } from "react-icons/ai";

const commonStyles = {
  sectionHeading: "text-4xl font-bold text-black sm:text-6xl xl:text-8xl",
  textBase:
    "text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80",
  buttonPrimary:
    "inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600",
};

function Hero28() {
  return (
    <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
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
            >
              <FaBars className="block w-6 h-6" />
              <FaTimes className="hidden w-6 h-6" />
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  title={item}
                  className={commonStyles.textBase}
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                title="Try for free"
                className={commonStyles.buttonPrimary}
                role="button"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-yellow-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                className="object-contain w-auto h-48"
                src="https://www.auraui.com/memeimage/curved-image.png"
                alt=""
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className={commonStyles.sectionHeading}>
                Get it done.
                <br />
                Fast, Easy.
              </h1>
              <p className="mt-8 text-xl text-black">
                We help you to make your remote work life easier. Build a
                distraction-free working experience.
              </p>

              <form
                action="#"
                method="POST"
                className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl"
              >
                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                  <div className="flex flex-col items-start sm:flex-row">
                    <div className="flex-1 w-full min-w-0">
                      <div className="relative text-gray-400 focus-within:text-gray-600">
                        <label className="sr-only">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email to get started"
                          className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={
                        "inline-flex items-center justify-center px-5 py-4 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600 w-full mt-4 sm:w-auto sm:ml-4 sm:mt-0 p-10"
                      }
                    >
                      Try 14 days free
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-5 text-base text-black">
                Instant access. No credit card required
              </p>
            </div>

            <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img
                className="w-32 h-32 md:w-40 md:h-40"
                src="https://www.auraui.com/memeimage/round-text.png"
                alt="Circular text"
              />
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full scale-150"
                src="https://www.auraui.com/memeimage/working-women-2.jpg"
                alt="Man working on laptop"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <HiOutlineLightningBolt className="w-10 h-10 text-orange-500" />
                  <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white">
                  Professionals have organized their desk via PostCra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero28;

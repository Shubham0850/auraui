import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const commonStyles = {
  container:
    "relative flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]",
  section: "bg-yellow-50 overflow-hidden",
  header: "absolute inset-x-0 top-0 z-10 w-full",
  headerInner: "px-4 mx-auto sm:px-6 lg:px-8",
  headerContent: "flex items-center justify-between h-16 lg:h-20",
  logo: "w-auto h-8",
  navButton:
    "inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100",
  navMenu: "hidden lg:flex lg:items-center lg:justify-center lg:space-x-10",
  navLink:
    "text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80",
  ctaButton:
    "inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600",
  form: "max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl",
  input:
    "block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500",
  submitButton:
    "inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600",
  text: "mt-5 text-base text-black",
  imgContainer:
    "relative flex items-center justify-center w-full lg:order-2 lg:w-7/12",
  imgLg: "absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20",
  imgSm: "absolute inset-0",
  imgOverlay:
    "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent",
  statContainer: "absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8",
  statIcon: "w-10 h-10 text-orange-500",
  statText: "max-w-xs mt-1.5 text-xl text-white",
};

function Hero28() {
  return (
    <div className={commonStyles.section}>
      <header className={commonStyles.header}>
        <div className={commonStyles.headerInner}>
          <div className={commonStyles.headerContent}>
            <div className="flex-shrink-0">
              <a href="#" title="Auraui" className="flex">
                <img
                  className={commonStyles.logo}
                  src="https://your-logo-url.com/logo.svg"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <button type="button" className={commonStyles.navButton}>
              <FaBars className="block w-6 h-6" />
              <FaTimes className="hidden w-6 h-6" />
            </button>

            <div className={commonStyles.navMenu}>
              <a
                href="#features"
                title="Features"
                className={commonStyles.navLink}
              >
                Features
              </a>
              <a
                href="#solutions"
                title="Solutions"
                className={commonStyles.navLink}
              >
                Solutions
              </a>
              <a
                href="#resources"
                title="Resources"
                className={commonStyles.navLink}
              >
                Resources
              </a>
              <a
                href="#pricing"
                title="Pricing"
                className={commonStyles.navLink}
              >
                Pricing
              </a>
              <a
                href="#try"
                title="Try for free"
                className={commonStyles.ctaButton}
                role="button"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={commonStyles.container}>
        <div className="relative flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className={commonStyles.imgContainer}>
            <div className={commonStyles.imgLg}>
              <img
                className="object-contain w-auto h-48"
                src="https://your-image-url.com/curved-lines.png"
                alt="Curved Lines"
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                Empower Your Digital Experience.
                <br />
                Fast & Secure.
              </h1>
              <p className="mt-8 text-xl text-black">
                Auraui revolutionizes the way you interact with digital
                platforms. Enhance your experience with our cutting-edge
                solutions.
              </p>

              <form action="#" method="POST" className={commonStyles.form}>
                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                  <div className="flex flex-col items-start sm:flex-row">
                    <div className="flex-1 w-full min-w-0">
                      <div className="relative text-gray-400 focus-within:text-gray-600">
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className={commonStyles.input}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className={commonStyles.submitButton}>
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </form>
              <p className={commonStyles.text}>
                Instant access. No credit card required.
              </p>
            </div>

            <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img
                className="w-32 h-32 md:w-40 md:h-40"
                src="https://your-image-url.com/circular-text.png"
                alt="Circular Text"
              />
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className={commonStyles.imgSm}>
              <img
                className="object-cover w-full h-full scale-150"
                src="https://your-image-url.com/man-working.jpg"
                alt="Man Working"
              />
            </div>

            <div className={commonStyles.imgOverlay}></div>

            <div className={commonStyles.statContainer}>
              <div className="flex items-center">
                <HiOutlineCake className={commonStyles.statIcon} />
                <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
              </div>
              <p className={commonStyles.statText}>
                Professionals have upgraded their digital experience with
                Auraui.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero28;

import React from "react";
import { FaUser, FaDollarSign } from "react-icons/fa";
import { Button } from "../ui/button";
import { BsArrowRight } from "react-icons/bs";

// Common styles
const commonStyles = {
  container: "px-4 mx-auto sm:px-6 lg:px-8",
  header: "relative py-4 md:py-6",
  headerLogo: "w-auto h-8",
  navLink:
    "text-base font-medium text-gray-900 transition duration-200 rounded focus:outline-none font-pj hover:text-opacity-60 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  signInButton:
    "px-5 py-2 text-base font-bold leading-7 text-white bg-gray-900 transition duration-200 rounded-xl hover:bg-gray-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  heroSection: "relative py-14 sm:py-20 lg:py-24",
  heroHeading:
    "text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj",
  heroDescription:
    "mt-4 text-lg text-gray-600 sm:mt-8 sm:text-xl font-inter max-w-xl",
  formContainer:
    "relative p-2 group border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900",
  inputField:
    "block w-full px-4 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 sm:border-none sm:focus:ring-0 sm:focus:border-transparent",
  submitButton:
    "inline-flex px-6 py-3 text-base font-semibold text-white  rounded-xl hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj",
  statsContainer:
    "flex flex-wrap justify-center mt-10 space-x-6 lg:justify-start sm:space-x-10",
  statsText: "text-3xl font-semibold text-gray-900 font-pj",
  statsSubText: "ml-3 text-sm text-gray-700 font-pj leading-tight",
  image: "w-full max-w-lg mx-auto lg:mx-0",
  overlayImage:
    "absolute bottom-0 right-0 overflow-hidden lg:inset-y-0 pointer-events-none opacity-10",
};

const Hero12 = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className={commonStyles.overlayImage}>
        <img
          className="w-auto h-full object-cover"
          src="https://www.auraui.com/memeimage/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      {/* Header */}
      <header className={commonStyles.header}>
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between">
            <a
              href="#"
              title="Auraui Logo"
              className="flex items-center rounded focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img
                className={commonStyles.headerLogo}
                src="https://www.auraui.com/logo-light.png"
                alt="Auraui Logo"
              />
            </a>

            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FaUser className="w-6 h-6" />
              </button>
            </div>

            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-16">
              {["Solutions", "Industries", "Fees", "About"].map((link) => (
                <a key={link} href="#" className={commonStyles.navLink}>
                  {link}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className={commonStyles.navLink}>
                Sign in
              </a>
              <a href="#" className={commonStyles.signInButton}>
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.container}>
          <div className="grid lg:grid-cols-2 gap-y-14 lg:gap-x-12 max-w-7xl mx-auto items-center">
            {/* Text Section */}
            <div>
              <h1 className={commonStyles.heroHeading}>
                A special credit card made for Developers.
              </h1>
              <p className={commonStyles.heroDescription}>
                AuraUI offers a tailored credit card for developers,
                streamlining expenses and providing rewards for tech
                enthusiasts.
              </p>

              {/* Form */}
              <form action="#" method="POST" className="mt-8 sm:mt-10">
                <div className={commonStyles.formContainer}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className={commonStyles.inputField}
                    required
                  />
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-2 sm:flex sm:items-center ">
                    <Button size="lg" className="text-lg px-8">
                      Shop Now
                      <BsArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </form>

              {/* Stats */}
              <div className={commonStyles.statsContainer}>
                <div className="flex items-center">
                  <p className={commonStyles.statsText}>2,943</p>
                  <p className={commonStyles.statsSubText}>
                    Cards <br />
                    Delivered
                  </p>
                </div>

                <div className="hidden sm:flex items-center text-gray-400">
                  <FaDollarSign className="w-5 h-5" />
                </div>

                <div className="flex items-center">
                  <p className={commonStyles.statsText}>$1M+</p>
                  <p className={commonStyles.statsSubText}>
                    Transaction <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative z-10">
              <img
                className={commonStyles.image}
                src="https://www.auraui.com/memeimage/credit-card-removebg.png"
                alt="Credit Card"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero12;

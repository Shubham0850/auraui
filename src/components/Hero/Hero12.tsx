import React from "react";
import { FaCreditCard, FaUser, FaDollarSign } from "react-icons/fa";

// Common styles
const commonStyles = {
  container: "px-4 mx-auto sm:px-6 lg:px-8",
  header: "relative py-4 md:py-6",
  headerLogo: "w-auto h-8",
  navLink:
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  signInButton:
    "px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  heroSection: "relative py-12 sm:py-16 lg:py-20 lg:pb-36",
  heroHeading:
    "text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj",
  heroDescription: "mt-2 text-lg text-gray-600 sm:mt-8 font-inter",
  formContainer:
    "relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900",
  inputField:
    "block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent",
  submitButton:
    "inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600",
  statsContainer:
    "flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8",
  statsText: "text-3xl font-medium text-gray-900 sm:text-4xl font-pj",
  statsSubText: "ml-3 text-sm text-gray-900 font-pj",
  image: "w-full",
  overlayImage: "absolute bottom-0 right-0 overflow-hidden lg:inset-y-0",
};

// Hero12 component
const Hero12 = () => {
  return (
    <div className="relative bg-gray-50">
      <div className={commonStyles.overlayImage}>
        <img
          className="w-auto h-full"
          src="https://www.auraui.com/memeimage/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      <header className={commonStyles.header}>
        <div className={commonStyles.container}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title="Auraui Logo"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className={commonStyles.headerLogo}
                  src="https://www.auraui.com/logo-light.png"
                  alt="Auraui Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <FaUser className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
              <a href="#" title="Solutions" className={commonStyles.navLink}>
                Solutions
              </a>
              <a href="#" title="Industries" className={commonStyles.navLink}>
                Industries
              </a>
              <a href="#" title="Fees" className={commonStyles.navLink}>
                Fees
              </a>
              <a href="#" title="About Auraui" className={commonStyles.navLink}>
                About
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
              <a href="#" title="Sign In" className={commonStyles.navLink}>
                Sign in
              </a>
              <a
                href="#"
                title="Create Free Account"
                className={commonStyles.signInButton}
                role="button"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={commonStyles.heroSection}>
        <div className={commonStyles.container}>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left">
                <h1 className={commonStyles.heroHeading}>
                  A special credit card made for Developers.
                </h1>
                <p className={commonStyles.heroDescription}>
                  Auraui offers a tailored credit card for developers,
                  streamlining expenses and providing rewards for tech
                  enthusiasts.
                </p>

                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className={commonStyles.formContainer}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className={commonStyles.inputField}
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className={commonStyles.submitButton}
                      >
                        Get Free Card
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className={commonStyles.statsContainer}>
                <div className="flex items-center">
                  <p className={commonStyles.statsText}>2943</p>
                  <p className={commonStyles.statsSubText}>
                    Cards
                    <br />
                    Delivered
                  </p>
                </div>

                <div className="hidden sm:block">
                  <FaDollarSign className="text-gray-400" />
                </div>

                <div className="flex items-center">
                  <p className={commonStyles.statsText}>$1M+</p>
                  <p className={commonStyles.statsSubText}>
                    Transaction
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                className={commonStyles.image}
                src="https://www.auraui.com/memeimage/credit-card-removebg.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero12;

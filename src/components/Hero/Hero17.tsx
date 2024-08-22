import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

function Hero17() {
  const commonStyles = {
    headerLink:
      "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
    button:
      "inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600",
    statText: "text-3xl font-medium text-gray-900 sm:text-4xl font-pj",
    statLabel: "ml-3 text-sm text-gray-900 font-pj",
  };

  return (
    <div className="bg-gray-50">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title="AuraUI"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
              {["New Arrivals", "Trending", "Collections", "About Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    title={item}
                    className={commonStyles.headerLink}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
              <a href="#" title="Sign in" className={commonStyles.headerLink}>
                Sign in
              </a>

              <a
                href="#"
                title="Create free account"
                className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Elevate Your Aura with Trending Fashion Styles.
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Discover the latest trends in fashion with a touch of
                  tech-savvy elegance. Shop smart, look stunning.
                </p>

                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email for fashion updates"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button type="submit" className={commonStyles.button}>
                        Get Updates
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className={commonStyles.statText}>5K+</p>
                  <p className={commonStyles.statLabel}>
                    Happy
                    <br />
                    Customers
                  </p>
                </div>

                <div className="hidden sm:block">
                  <p className="text-gray-400">{"//////////"}</p>
                </div>

                <div className="flex items-center">
                  <p className={commonStyles.statText}>$10M+</p>
                  <p className={commonStyles.statLabel}>
                    Sales
                    <br />
                    Achieved
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                className="w-full rounded-lg"
                src="/memeimage/hero-17.jpeg"
                alt="Fashion Style"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero17;

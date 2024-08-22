import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

function Hero23() {
  const linkClasses =
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";
  const buttonClasses =
    "px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white";

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <header className="relative py-4 md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title="AuraUI Logo"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <HiOutlineBars3 className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
              <a href="#" title="Experts" className={linkClasses}>
                Experts
              </a>

              <a href="#" title="Community Groups" className={linkClasses}>
                Community Groups
              </a>

              <a href="#" title="Support" className={linkClasses}>
                Support
              </a>

              <a href="#" title="Login" className={linkClasses}>
                Login
              </a>

              <a
                href="#"
                title="Join Community"
                className={buttonClasses}
                role="button"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
              100x your development speed
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Quality Resources Shared by AuraUI
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
              Discover the power of AuraUI with our curated collection of
              developer tools and community insights.
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

              <a
                href="#"
                title="Get Access"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get Access to 4,958 Resources
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <img
            className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
            src="https://www.auraui.com/memeimage/hero23.png"
            alt="Hero Illustration"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero23;

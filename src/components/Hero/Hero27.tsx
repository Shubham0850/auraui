import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxArrowTopRight, RxCross2 } from "react-icons/rx";

function Hero27() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);

  const navLinks = ["Features", "Pricing", "Support"];

  const commonClasses = {
    navLink:
      "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600",
    button:
      "inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
    card: "relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1",
    cardLink: "flex shrink-0 aspect-w-4 aspect-h-3",
    cardContent: "flex-1 px-4 py-5 sm:p-6",
    cardFooter: "px-4 py-5 mt-auto border-t border-gray-100 sm:px-6",
    mobileMenu:
      "flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0",
    header: "py-4 bg-white sm:py-5",
    container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  };

  return (
    <div>
      <header className={commonClasses.header}>
        <div className={commonClasses.container}>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <a href="#" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="AuraUI Logo"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={toggleMenu}
              >
                {expanded ? (
                  <RxCross2 className="w-7 h-7" />
                ) : (
                  <HiOutlineBars3 className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10">
              {navLinks.map((link) => (
                <a key={link} href="#" className={commonClasses.navLink}>
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <a href="#" className={commonClasses.button}>
                Join AuraUI Community
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="md:hidden">
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  {navLinks.map((link) => (
                    <a key={link} href="#" className={commonClasses.mobileMenu}>
                      {link}
                    </a>
                  ))}
                  <a href="#" className={commonClasses.button}>
                    Join AuraUI Community
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Community of Devlopers{" "}
                <span className="inline text-[30px]">🔥</span> for the Devlopers{" "}
                <span className="inline text-[30px]">⚡</span>
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                At AuraUI, we believe in crafting beautiful, intuitive UI
                components that make development faster and more enjoyable.
                Transform your ideas into reality with our flexible and
                accessible designs.
              </p>

              <p className="text-gray-300 mt-4 text-center md:text-left">
                {"///////////////////////////////////"}
              </p>

              <p className="mt-8 text-base font-bold text-gray-900">
                Join us for free weekly updates and insights
              </p>
              <form action="#" method="post" className="relative mt-4">
                <div className="absolute opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className={
                      "inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    }
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                >
                  <div className={commonClasses.card + " w-60 md:w-80"}>
                    <a href="#" className={commonClasses.cardLink}>
                      <img
                        className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                        src={`https://www.auraui.com/memeimage/square-image${i}.png`}
                        alt={`AuraUI content thumbnail-${i}`}
                      />
                    </a>
                    <div className={commonClasses.cardContent}>
                      <a href="#">
                        <p className="text-lg font-bold text-gray-900">
                          Design Smarter, Not Harder: Tips for Developers
                        </p>
                        <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                          Discover how AuraUI can streamline your development
                          process with intuitive and responsive components.
                        </p>
                      </a>
                    </div>
                    <div className={commonClasses.cardFooter}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#">Innovation</a>
                          </p>
                          <span className="text-sm font-medium text-gray-900">
                            •
                          </span>
                          <p className="text-sm font-medium text-gray-900">
                            7 Mins Read
                          </p>
                        </div>
                        <a href="#" role="button">
                          <RxArrowTopRight className="w-5 h-5 text-gray-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero27;

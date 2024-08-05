import React, { useState } from "react";
import { FaBars, FaTimes, FaCheck } from "react-icons/fa";

const commonStyles = {
  button:
    "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  navLink:
    "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600",
  card: "overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1",
};

const links = ["Features", "Pricing", "Support"];

function Hero1() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Auraui Logo"
                />
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <FaTimes className="w-7 h-7" />
                ) : (
                  <FaBars className="w-7 h-7" />
                )}
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-10">
              {links.map((link) => (
                <a key={link} href="#" className={commonStyles.navLink}>
                  {link}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <a href="#" className={commonStyles.button}>
                Join Email List
              </a>
            </div>
          </nav>
          {expanded && (
            <nav className="md:hidden">
              <div className="px-1 pt-8 pb-4">
                <div className="grid gap-y-6">
                  {links.map((link) => (
                    <a key={link} href="#" className={commonStyles.navLink}>
                      {link}
                    </a>
                  ))}
                  <a href="#" className={commonStyles.button}>
                    Join Email List
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
      <section className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1699891730676-037bed3c1bed?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl lg:text-5xl">
              Welcome to Auraui: Empowering Developers to Succeed
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Auraui helps developers achieve their career goals with insightful
              articles, industry news, and more. Join our community today!
            </p>
            <form className="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <button
                  type="button"
                  className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Join Now
                </button>
              </div>
            </form>
            <ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-xs font-medium text-gray-300 sm:text-sm">
                  Weekly new articles
                </span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-xs font-medium text-gray-300 sm:text-sm">
                  Join other 1600+ Devs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero1;

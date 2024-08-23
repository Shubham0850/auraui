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
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="/memeimage/hero1.jpg"
          alt=""
        />
      </div>
      <section className=" py-12 bg-white sm:py-16 lg:py-20">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Welcome to AuraUI Empowering Developers to Succeed
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-white">
              AuraUI helps developers achieve their career goals with insightful
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
                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-white placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900 bg-gray-900"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="inline-flex cursor-pointer relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                  Join Now
                </div>
              </div>
            </form>
            <ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 mr-2 text-white" />
                <span className="text-xs font-medium text-white sm:text-sm">
                  Weekly new articles
                </span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 mr-2 text-white" />
                <span className="text-xs font-medium text-white sm:text-sm">
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

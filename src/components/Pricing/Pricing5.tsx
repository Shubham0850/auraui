import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { MdOutlineStorage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";

const commonStyles = "flex items-center text-base font-normal text-white";

const Pricing5 = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Choose the Plan that Fits Your Needs
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg font-normal text-gray-400">
            Discover the best plan for you with our tailored pricing options.
            Enjoy premium features and exceptional support with Auraui.
          </p>

          <div className="inline-flex items-center justify-center mt-8 overflow-hidden border border-gray-800 rounded-md sm:mt-12">
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
            >
              Monthly
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black hover:bg-gray-900"
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="relative max-w-md mx-auto mt-12 sm:mt-16 lg:max-w-none">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full opacity-50"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
              alt="Background Pattern"
            />
          </div>

          <div className="relative grid grid-cols-1 border border-gray-900 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-black sm:p-8">
              <div className="flex-1">
                <RiVipCrownFill className="w-10 h-10 text-cyan-500" />
                <h3 className="mt-8 text-2xl font-normal text-white">Basic</h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  Essential features to get started with Auraui.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Full Access to Auraui Platform</span>
                  </li>

                  <li className={commonStyles}>
                    <MdOutlineStorage className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">100 GB Free Storage</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Unlimited Visitors</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">5 Team Members</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">24/7 Customer Support</span>
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Starting from <span className="text-white">$49/month</span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-black border-t border-gray-900 bg-opacity-70 backdrop-blur-lg lg:border-t-0 sm:p-8 lg:border-l">
              <div className="flex-1">
                <GiTrophyCup className="w-10 h-10 text-cyan-500" />
                <h3 className="mt-8 text-2xl font-normal text-white">
                  Professional
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  Advanced features to elevate your business with Auraui.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Full Access to Auraui Platform</span>
                  </li>

                  <li className={commonStyles}>
                    <MdOutlineStorage className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">500 GB Free Storage</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Unlimited Visitors</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">20 Team Members</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">24/7 Priority Support</span>
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Starting from <span className="text-white">$199/month</span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-black border-t border-gray-900 lg:border-t-0 sm:p-8 lg:border-l">
              <div className="flex-1">
                <RiVipCrownFill className="w-10 h-10 text-cyan-500" />
                <h3 className="mt-8 text-2xl font-normal text-white">
                  Enterprise
                </h3>
                <p className="mt-3 text-base font-normal text-gray-400">
                  Premium features and dedicated support for large-scale needs.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Full Access to Auraui Platform</span>
                  </li>

                  <li className={commonStyles}>
                    <MdOutlineStorage className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Unlimited Storage</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Unlimited Visitors</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Unlimited Team Members</span>
                  </li>

                  <li className={commonStyles}>
                    <FaCheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="ml-2">Dedicated Account Manager</span>
                  </li>
                </ul>

                <p className="mt-10 text-xl font-normal text-gray-100">
                  Contact us for pricing
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing5;

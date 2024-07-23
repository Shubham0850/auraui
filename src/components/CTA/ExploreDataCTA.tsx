import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ExploreDataCTA = () => {
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const headingStyles =
    "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl";
  const buttonContainerStyles =
    "flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0";
  const primaryButtonStyles =
    "inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700";
  const secondaryButtonStyles =
    "inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white";
  const linkStyles =
    "text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className="text-center">
          <h2 className={headingStyles}>Get full access to AuraUI</h2>
          <p className="mt-4 text-2xl font-medium text-gray-500">
            100+ Hand Crafted Coded Blocks
          </p>

          <div className={buttonContainerStyles}>
            <a href="#" className={primaryButtonStyles} role="button">
              Try For Free
            </a>

            <a href="#" className={secondaryButtonStyles} role="button">
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Sales
            </a>
          </div>

          <p className="mt-6 text-base text-black">
            Already have an account?{" "}
            <a href="#" className={linkStyles} role="button">
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreDataCTA;

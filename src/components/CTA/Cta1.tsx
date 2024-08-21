import React from "react";
import { FaUser } from "react-icons/fa";

const CTA1 = () => {
  const containerStyles = "py-10 bg-white sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const textContainerStyles = "max-w-2xl mx-auto text-center";
  const headingStyles =
    "mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl";
  const descriptionStyles =
    "max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10";
  const buttonStyles =
    "inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={textContainerStyles}>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="/memeimage/girl2.jpeg"
                alt="Female Avatar 1"
              />
            </div>

            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="/memeimage/boy1.jpeg"
                alt="Male Avatar"
              />
            </div>

            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="/memeimage/girl3.webp"
                alt="Female Avatar 2"
              />
            </div>
          </div>

          <h2 className={headingStyles}>
            Join <span className="border-b-8 border-yellow-300">5,482</span>{" "}
            other developers
          </h2>
          <p className={descriptionStyles}>
            Experience our community and stay updated with the latest trends and
            discussions. Join now to connect with like-minded professionals.
          </p>

          <a href="#" className={buttonStyles} role="button">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Get instant access
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA1;

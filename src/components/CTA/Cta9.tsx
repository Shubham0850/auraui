import React from "react";
import { FaLock } from "react-icons/fa";

const CTA9 = () => {
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const headingStyles =
    "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl";
  const descriptionStyles =
    "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600";
  const formStyles = "max-w-xl mx-auto mt-12";
  const inputStyles =
    "block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:bg-white";
  const buttonStyles =
    "inline-flex items-center cursor-pointer justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700";
  const iconStyles = "flex-shrink-0 w-5 h-5 text-gray-600";
  const secureTextStyles = "ml-2 text-sm text-gray-600";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={headingStyles}>Unlock Full Potential with AuraUI</h2>
          <p className={descriptionStyles}>
            Subscribe to AuraUI for exclusive updates and insights into our
            latest features. Stay at the forefront of design innovation and
            performance.
          </p>
        </div>

        <form action="#" method="POST" className={formStyles}>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className={inputStyles}
                required
              />
            </div>

            <div className={buttonStyles}>
              Get instant access
              <svg
                className="w-5 h-5 ml-3 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
          <FaLock className={iconStyles} />
          <span className={secureTextStyles}>
            Your data is completely secure with AuraUI. We value your privacy
            and do not share your information with anyone.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA9;

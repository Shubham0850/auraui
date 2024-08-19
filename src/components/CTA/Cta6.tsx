import React from "react";

const CTA6 = () => {
  const containerStyles =
    "py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const textContainerStyles =
    "text-center sm:flex sm:items-center sm:justify-center sm:text-left";
  const headingStyles = "text-4xl font-bold text-white";
  const buttonStyles =
    "inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-yellow-300 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={textContainerStyles}>
          <h2 className={headingStyles}>Get full access to AuraUI</h2>
          <a href="#" className={buttonStyles} role="button">
            Get instant access
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA6;

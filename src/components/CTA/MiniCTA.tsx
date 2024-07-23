import React from "react";

const MiniCTA = () => {
  const containerStyles = "py-10 bg-[#F3F4F6] sm:py-16 lg:py-20";
  const innerContainerStyles = "max-w-5xl px-4 mx-auto sm:px-6 lg:px-8";
  const headingStyles = "text-4xl font-bold text-black lg:max-w-md";
  const formStyles = "px-10 mt-8 lg:mt-0 lg:px-0";
  const inputStyles =
    "block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";
  const buttonStyles =
    "inline-flex cursor-pointer items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <h2 className={headingStyles}>Unlock Your AuraUI Experience</h2>

          <form action="#" method="POST" className={formStyles}>
            <div className="sm:flex sm:justify-center lg:justify-end">
              <div>
                <label htmlFor="email" className="sr-only border">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email to get started"
                  className={inputStyles}
                  required
                />
              </div>
              <div className={buttonStyles}>Get Started Free</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MiniCTA;

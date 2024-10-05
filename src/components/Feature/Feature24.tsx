import React from "react";

const headingStyle =
  "text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj";
const textStyle =
  "max-w-xl mx-auto mt-4 text-base leading-7 text-gray-100 sm:mt-8 font-pj";
const buttonStyle = `
  inline-flex items-center justify-center px-6 py-3 mt-8 text-lg font-bold text-white transition-all duration-200 
  bg-transparent border border-white sm:mt-11 hover:bg-white hover:text-gray-900 focus:bg-white 
  focus:text-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 
  focus:ring-white focus:ring-offset-gray-900
`;

function Feature24() {
  return (
    <section className="relative pt-12 bg-gray-800 sm:pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="object-cover object-top w-full h-full transform opacity-20 -translate-y-80"
          src="https://www.auraui.com/images/bgline.png"
          alt="Background pattern"
        />
      </div>

      {/* Content Section */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
          <h2 className={headingStyle}>
            Enhance Your Development Experience with Auraui
          </h2>
          <p className={textStyle}>
            Auraui provides expert insights and a comprehensive set of tools
            designed to help developers grow their skills efficiently, ensuring
            that your projects are built with best practices and modern
            technologies.
          </p>

          <a href="#" title="Get started" className={buttonStyle} role="button">
            Get started now
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative max-w-6xl mx-auto mt-4">
        <img
          className="w-full rounded-[30%] py-6 px-3 md:px-4 md:py-16 mx-auto"
          src="https://www.auraui.com/images/feedback.jpeg"
          alt="Auraui development tools"
        />
      </div>
    </section>
  );
}

export default Feature24;

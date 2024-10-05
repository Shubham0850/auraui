import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing a React Icon for the arrow

const commonHeadingStyle = "text-lg font-medium text-gray-900";
const commonTextStyle =
  "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:leading-8";
const linkStyle =
  "inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline";

function Feature25() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-16 xl:gap-x-24 gap-y-12">
          <div className="lg:col-span-5 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-base font-semibold text-gray-500">
                Premium UI Kits by Auraui
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl">
                Build Modern Web Apps Effortlessly with Auraui
              </h2>
              <p className={`${commonTextStyle} lg:pr-24 lg:mt-6`}>
                Auraui provides you with the components and resources you need
                to quickly create a professional website, landing page, or
                dashboard for your web projects.
              </p>
            </div>

            <div className="grid grid-cols-1 pt-8 mt-8 border-t border-gray-200 sm:grid-cols-2 md:mt-16 xl:mt-24 gap-x-16 gap-y-8">
              <h3 className={commonHeadingStyle}>
                Unlock endless design possibilities and streamline your
                workflow.
              </h3>

              <h3 className={commonHeadingStyle}>
                Access 20+ premium Tailwind UI kits and supercharge your product
                development.
              </h3>
            </div>

            <div className="mt-12">
              <a href="#" title="Start using Auraui" className={linkStyle}>
                Start using Auraui
                <FiArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full xl:h-full xl:object-cover rounded-3xl"
              src="https://www.auraui.com/images/girl.webp"
              alt="Auraui UI Kit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature25;

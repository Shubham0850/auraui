import React from "react";
import { FaCopy, FaCogs, FaHeart } from "react-icons/fa"; // Import icons from react-icons

const Feature17: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            130+ Custom UI Components
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Auraui helps you build stunning, modern interfaces
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          {/* Left Section */}
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <FaCopy className="flex-shrink-0 text-green-500 w-9 h-9" />{" "}
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Simply Copy & Paste
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Auraui provides ready-to-use components that can easily be
                  copied and integrated into your project, saving time and
                  effort.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCogs className="flex-shrink-0 text-blue-600 w-9 h-9" />{" "}
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Easy to Customize
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Auraui's components are highly customizable, allowing
                  developers to easily adapt them to fit any design or brand
                  requirement.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaHeart className="flex-shrink-0 text-red-500 w-9 h-9" />{" "}
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Built with Love and TailwindCSS
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Auraui is crafted with precision, using TailwindCSS to deliver
                  modern, responsive, and flexible components for developers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://www.auraui.com/images/analytic_image.avif"
              alt="Auraui Dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature17;

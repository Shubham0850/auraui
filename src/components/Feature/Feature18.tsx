import React from "react";
import { FaRocket, FaPaintBrush } from "react-icons/fa"; // Importing React Icons

function Feature18() {
  return (
    <section className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Auraui helps you build beautiful and modern interfaces
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-100">
            Auraui offers an extensive library of customizable UI components to
            help you create powerful web applications efficiently and
            effortlessly.
          </p>

          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center px-6 py-4 mt-10 text-base font-semibold bg-white rounded-md"
          >
            <FaRocket className="w-5 h-5 mr-2 -ml-1 text-fuchsia-600" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
              Explore Auraui
            </span>
          </a>
        </div>

        <img
          className="w-full max-w-3xl mx-auto mt-8 rounded-lg shadow-xl sm:mt-20"
          src="https://www.auraui.com/images/analytics.webp"
          alt="Auraui Dashboard"
        />

        <div className="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
          <div className="flex items-center flex-1">
            <FaRocket className="flex-shrink-0 text-white/50 w-14 h-14" />
            <p className="ml-4 text-lg font-semibold leading-snug text-white">
              Create powerful websites fast
            </p>
          </div>

          <div className="flex items-center flex-1">
            <FaPaintBrush className="flex-shrink-0 text-white/50 w-14 h-14" />
            <p className="ml-4 text-lg font-semibold leading-snug text-white">
              Easy to customize, ready to launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature18;

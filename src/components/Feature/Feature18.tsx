import React from "react";
import { FaRocket, FaPaintBrush } from "react-icons/fa";

function Feature18() {
  return (
    <section className="py-20 bg-[#f7f8fa]">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-6xl font-extrabold text-gray-700 ">
            Modern interfaces
          </h2>
          <p className="mt-5 text-sm text-gray-600">
            Auraui offers a library of customizable UI components to help you
            create powerful, scalable web applications efficiently.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-medium text-white bg-gradient-to-r from-gray-400 to-gray-200 rounded-lg shadow-md hover:opacity-90"
          >
            <FaRocket className="w-5 h-5 mr-2" />
            Explore Auraui
          </a>
        </div>

        {/* Center Image */}
        <img
          className="w-full max-w-2xl mx-auto mt-16 rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1695671538019-0b45bdb5b608?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Auraui Dashboard"
        />

        {/* Feature Highlights */}
        <div className="flex flex-col items-center justify-center gap-10 mt-12 sm:flex-row sm:gap-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white shadow-inner rounded-full">
              <FaRocket className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-gray-800 text-lg font-medium">
              Create powerful websites fast
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white shadow-inner rounded-full">
              <FaPaintBrush className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-gray-800 text-lg font-medium">
              Easy to customize, ready to launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature18;

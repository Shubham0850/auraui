import React from "react";
import { FiSettings, FiFilter, FiBarChart } from "react-icons/fi";

function Feature19() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl px-6 mx-auto sm:px-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Say hello to Auraui
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            auraUI provides the building blocks & components you need to create
            a stunning and professional web experience.
          </h2>
        </div>

        {/* Feature List */}
        <div className="flex flex-col items-center justify-between max-w-4xl mx-auto mt-14 space-y-10 border-t pt-10 sm:flex-row sm:space-y-0 sm:space-x-8 border-gray-200">
          {[
            {
              icon: <FiSettings className="w-5 h-5 text-blue-600" />,
              label: "Easily customize with Auraui",
            },
            {
              icon: <FiFilter className="w-5 h-5 text-blue-600" />,
              label: "Filter components efficiently",
            },
            {
              icon: <FiBarChart className="w-5 h-5 text-blue-600" />,
              label: "Get insights with detailed reports",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-center sm:text-left"
            >
              <div className="p-3 bg-blue-50 rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-gray-800 leading-snug sm:text-lg">
                {feature.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature19;

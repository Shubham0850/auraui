import React from "react";
import { FiSettings, FiFilter, FiBarChart } from "react-icons/fi";

function Feature19() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-blue-600">
            Say hello to Auraui
          </p>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-3xl lg:text-4xl">
            Auraui provides the building blocks & components you need to create
            a stunning and professional web experience.
          </h2>

          <div className="flex justify-center mt-12 sm:mt-16">
            <div className="flex flex-col items-center justify-center flex-1 pt-8 space-y-6 border-t border-gray-200 lg:inline-flex md:flex-row md:space-y-0 lg:space-x-12 md:space-x-10">
              <div className="flex items-center">
                <FiSettings className="w-6 h-6 text-blue-600" />
                <h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">
                  Easily customize with Auraui
                </h3>
              </div>

              <div className="flex items-center">
                <FiFilter className="w-6 h-6 text-blue-600" />
                <h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">
                  Filter components efficiently
                </h3>
              </div>

              <div className="flex items-center">
                <FiBarChart className="w-6 h-6 text-blue-600" />
                <h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">
                  Get insights with detailed reports
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature19;

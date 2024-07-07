import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";

type Props = {};

const MomentumCTA: React.FC<Props> = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24 2xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black max-w-7xl mx-auto p-6 sm:p-12 lg:p-16 rounded-xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="lg:order-2">
              <img
                className="w-full rounded-xl shadow-lg"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/6/dashboard-screenshot.png"
                alt="Dashboard Screenshot"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Are you ready to join Auraui?
              </h2>
              <ul className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">150+ Pre-built Components</span>
                </li>
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">Fully Responsive</span>
                </li>
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">Tailwind CSS Integration</span>
                </li>
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">Dark & Light Mode</span>
                </li>
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">Customizable Components</span>
                </li>
                <li className="flex items-center text-white">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="ml-3">Free Lifetime Updates</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 mb-3 sm:mb-0 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  <FaDownload className="w-5 h-5 mr-2" />
                  Download Now
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white rounded-md hover:bg-white hover:text-black"
                >
                  Explore UI Blocks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumCTA;

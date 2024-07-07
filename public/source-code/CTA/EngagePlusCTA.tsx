import React from "react";
import { FaEnvelope, FaUserPlus } from "react-icons/fa";

type Props = {};

const EngagePlusCTA: React.FC<Props> = (props: Props) => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Get Full Access to Auraui
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Unlock 150+ meticulously crafted coded blocks for your projects.
          </p>

          <div className="flex flex-col items-center justify-center px-8 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
            <a
              href="#"
              title="Try For Free"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              <FaUserPlus className="w-5 h-5 mr-2" />
              Try For Free
            </a>

            <a
              href="#"
              title="Contact Sales"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </div>

          <p className="mt-6 text-base text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              title="Log in"
              className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagePlusCTA;

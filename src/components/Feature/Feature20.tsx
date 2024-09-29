import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

function Feature20() {
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center max-w-5xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          <div>
            <Image
              className="mx-auto rounded-md"
              src="https://www.auraui.com/images/pc1.jpg"
              alt="Auraui Feature"
              width={320}
              height={320}
            />
          </div>

          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
            <h2 className="text-4xl font-bold text-white">
              Unlock exclusive features
              <br />
              with Auraui
            </h2>
            <p className="mt-6 text-base font-medium text-gray-400">
              Auraui empowers developers with flexible and powerful components.
              Start your next project with seamless integration and create
              stunning, modern UIs.
            </p>
            <div className="mt-10">
              <a
                href="#"
                title=""
                className="inline-flex items-center text-base font-bold text-white transition-all duration-200 group hover:text-gray-300"
              >
                Explore Auraui
                <FiArrowRight className="w-6 h-6 ml-3 transition-all duration-200 transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature20;

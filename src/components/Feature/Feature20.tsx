import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

function Feature20() {
  return (
    <section className="py-20 bg-[#0b1222]">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="https://www.auraui.com/images/pc1.jpg"
              alt="Auraui Feature"
              width={800}
              height={600}
              layout="responsive"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Unlock exclusive features <br /> with Auraui
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Auraui empowers developers with flexible and powerful components.
              Start your next project with seamless integration and create
              stunning, modern UIs.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-base font-semibold text-white hover:text-blue-400 group"
              >
                Explore Auraui
                <FiArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature20;

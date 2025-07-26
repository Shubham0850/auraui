import React from "react";
import Image from "next/image";
import { FaChartLine } from "react-icons/fa";

const Feature11: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Grow your business
              <br />
              <span className="text-yellow-300">with auraUI.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              AuraUI helps you build beautiful, high-performance websites
              quickly and efficiently. With our extensive library of
              pre-designed components, advanced responsiveness, and modern
              aesthetics, you can focus on what matters most: growing your
              business.
            </p>

            <ul className="mt-6 space-y-3 text-base text-gray-700 list-disc list-inside">
              <li>Prebuilt layout sections</li>
              <li>Fast integration with Tailwind</li>
              <li>Conversion-driven structure</li>
              <li>Modern, professional aesthetic</li>
            </ul>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <Image
                className="ml-auto"
                src="https://images.unsplash.com/photo-1604858757869-29a18d0d9c5d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Working Women"
                layout="responsive"
                width={500}
                height={500}
              />
              <div className="absolute -bottom-10 -left-16 bg-yellow-300">
                <div className="px-8 py-10">
                  <span className="block text-4xl font-bold text-black lg:text-5xl">
                    77%
                  </span>
                  <span className="block mt-2 text-base leading-tight text-black">
                    High Conversions
                    <br />
                    with AuraUI
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <FaChartLine className="text-black w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature11;

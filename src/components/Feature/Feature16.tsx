import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const commonStyles =
  "inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90";

const Feature16: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* First Image */}
            <div className="overflow-hidden relative aspect-w-3 aspect-h-4">
              <Image
                className="object-cover object-top origin-top"
                src="https://www.auraui.com/memeimage/laptop-working-men.jpg"
                alt="Teamwork at Auraui"
                layout="responsive"
                width={400}
                height={500}
              />
            </div>

            {/* Second Image */}
            <div className="relative">
              <div className="overflow-hidden relative aspect-w-3 aspect-h-4">
                <Image
                  className="object-cover origin-bottom-right"
                  src="https://www.auraui.com/memeimage/hero8.jpg"
                  alt="Woman working on Auraui project"
                  layout="responsive"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Scale your business with Auraui.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Auraui empowers developers to build fast, scalable, and elegant
              frontend applications. Harness the power of modern UI components
              and deliver top-notch user experiences with ease.
            </p>

            <a
              href="#"
              className={`${commonStyles} bg-gradient-to-r from-fuchsia-600 to-blue-600 lg:mt-auto`}
              role="button"
            >
              Get started now
              <FaPlay className="w-5 h-5 ml-8 -mr-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature16;

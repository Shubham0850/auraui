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
                src="https://images.unsplash.com/photo-1653035212611-de3d136086a8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-extrabold text-black sm:text-5xl leading-tight tracking-tight">
              Scale your business
              <br />
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                auraui
              </span>
              .
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Auraui empowers developers to build fast, scalable, and elegant
              frontend applications. Harness the power of modern UI components
              and deliver top-notch user experiences with ease.
            </p>

            <a
              href="#"
              className={`${commonStyles} bg-gradient-to-r from-fuchsia-600 to-blue-600 shadow-md`}
              role="button"
            >
              Get started now
              <FaPlay className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature16;

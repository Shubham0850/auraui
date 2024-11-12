import React from "react";
import { HiArrowRight } from "react-icons/hi";

const logos = [
  "https://www.auraui.com/logos/logo15.svg",
  "https://www.auraui.com/logos/logo.svg",
  "https://www.auraui.com/logos/logo8.svg",
  "https://www.auraui.com/logos/logo6.svg",
  "https://www.auraui.com/logos/logo2.svg",
  "https://www.auraui.com/logos/logo2.webp",
  "https://www.auraui.com/logos/logo5.svg",
  "https://www.auraui.com/logos/logo16.svg",
  "https://www.auraui.com/logos/logo4.svg",
  "https://www.auraui.com/logos/logo15.png",
  "https://www.auraui.com/logos/logo24.svg",
  "https://www.auraui.com/logos/logo20.svg",
];

function LogoCloud12() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 max-w-md mx-auto lg:max-w-none gap-y-12 lg:grid-cols-6 lg:gap-x-16 xl:gap-x-32">
          <div className="lg:col-span-2">
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal">
                Trusted by companies from{" "}
              </span>
              <span className="font-serif italic text-5xl">
                all over the world
              </span>
            </h2>

            <div className="mt-8">
              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-semibold
                  transition-all
                  duration-200
                  bg-transparent
                  border-2
                  rounded-full
                  sm:leading-8
                  text-white
                  border-primary
                  hover:bg-white
                  hover:text-black
                "
              >
                Learn More
                <HiArrowRight className="h-6 w-6 ml-2" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-14">
              {logos.map((logo, index) => (
                <div key={index}>
                  <img
                    className="h-10 w-auto mx-auto opacity-70 object-contain"
                    src={logo}
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud12;

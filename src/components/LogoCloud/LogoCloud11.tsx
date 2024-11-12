import React from "react";
import { HiArrowRight } from "react-icons/hi";

const logos = [
  "https://www.auraui.com/logos/logo2.svg",
  "https://www.auraui.com/logos/logo.svg",
  "https://www.auraui.com/logos/logo14.png",
  "https://www.auraui.com/logos/logo13.png",
  "https://www.auraui.com/logos/logo12.png",
  "https://www.auraui.com/logos/logo2.webp",
  "https://www.auraui.com/logos/logo10.png",
  "https://www.auraui.com/logos/logo16.svg",
  "https://www.auraui.com/logos/logo4.svg",
  "https://www.auraui.com/logos/logo15.png",
];

function LogoCloud11() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid max-w-md mx-auto lg:max-w-none grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 place-items-center">
          {logos.slice(0, 4).map((src, index) => (
            <div key={index}>
              <img
                className="h-10 w-auto mx-auto opacity-70 object-contain"
                src={src}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}

          {/* Centered "Trusted by companies from all over the world" section */}
          <div className="col-span-2 lg:col-span-1 lg:row-span-2 rounded-lg bg-dark-gray p-6 xl:p-10 text-center">
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal">
                Trusted by companies from
              </span>
              <span className="font-serif italic text-5xl">
                all over the world
              </span>
            </h2>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Learn More
                <HiArrowRight className="h-6 w-6 ml-2" />
              </a>
            </div>
          </div>

          {logos.slice(4).map((src, index) => (
            <div key={index + 4} className="hidden lg:block">
              <img
                className="h-10 w-auto mx-auto opacity-70 object-contain"
                src={src}
                alt={`Logo ${index + 5}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud11;

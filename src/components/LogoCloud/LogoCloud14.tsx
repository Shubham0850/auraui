import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Example icon from React Icons, replace if needed

function LogoCloud14() {
  const commonImageClasses = "w-auto h-14 mx-auto object-contain opacity-70";
  const logos = [
    "https://www.auraui.com/logos/logo.svg",
    "https://www.auraui.com/logos/logo1.webp",
    "https://www.auraui.com/logos/logo.webp",
    "https://www.auraui.com/logos/logo2.svg",
  ];

  return (
    <section className="relative pt-12 sm:pt-16 md:pb-16 lg:py-20 bg-black">
      <div className="block absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://www.auraui.com/memeimage/curved-line.png"
          alt=""
        />
      </div>

      <div className="px-6 relative sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-24">
          <div className="max-w-lg">
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
                title="Learn more"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  font-sans
                  text-base
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
                  sm:text-lg
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
                role="button"
              >
                Learn More
                <FiArrowRight className="h-6 w-6 ml-2" />
              </a>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {logos.map((logo, index) => (
                <div key={index}>
                  <img
                    className={commonImageClasses}
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

export default LogoCloud14;

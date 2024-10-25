import React from "react";

// Logos data with local fallback
const logos = [
  { src: "https://www.auraui.com/logos/logo12.svg", alt: "Logo 1" },
  { src: "https://www.auraui.com/logos/logo11.svg", alt: "Logo 2" },
  { src: "https://www.auraui.com/logos/logo13.svg", alt: "Logo 3" },
  { src: "https://www.auraui.com/logos/logo14.svg", alt: "Logo 4" },
  { src: "https://www.auraui.com/logos/logo15.svg", alt: "Logo 5" },
  { src: "https://www.auraui.com/logos/logo16.svg", alt: "Logo 6" },
  { src: "https://www.auraui.com/logos/logo17.svg", alt: "Logo 7" },
  { src: "https://www.auraui.com/logos/logo18.svg", alt: "Logo 8" },
  { src: "https://www.auraui.com/logos/logo19.svg", alt: "Logo 9" },
  { src: "https://www.auraui.com/logos/logo20.svg", alt: "Logo 10" },
  { src: "https://www.auraui.com/logos/logo21.svg", alt: "Logo 11" },
  { src: "https://www.auraui.com/logos/logo22.svg", alt: "Logo 12" },
];

const LogoCloud6 = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Endorsed by AuraUI, innovative design teams, and Gangs of AuraUI.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-16 max-w-4xl mx-auto mt-12 md:mt-20 md:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${index >= 4 ? "hidden md:block" : ""}`}
            >
              <img
                className="object-contain w-full h-14 mx-auto"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div>

        <p className="mt-10 text-base text-center text-gray-500 md:mt-20">
          and, 100+ Components
        </p>
      </div>
    </section>
  );
};

export default LogoCloud6;

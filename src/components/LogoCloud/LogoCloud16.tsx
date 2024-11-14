import React from "react";

const logos = [
  "https://www.auraui.com/logos/logo15.png",
  "https://www.auraui.com/logos/logo1.webp",
  "https://www.auraui.com/logos/logo.webp",
  "https://www.auraui.com/logos/logo4.svg",
  "https://www.auraui.com/logos/logo2.svg",
];

function LogoCloud16() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-normal text-white sm:text-3xl">
            100+ Startups trust AuraUI for their regular projects
          </h2>
        </div>
      </div>

      <div className="flex justify-center w-full gap-4 mt-12 overflow-x-auto pointer-events-none scroll-px-4 snap-mandatory snap-x">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center px-4 py-5 bg-gray-900 snap-center rounded-xl sm:p-6 shrink-0 first:ml-4 last:mr-4"
          >
            <img
              className="object-contain h-8 max-w-full sm:h-10 w-44"
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoCloud16;

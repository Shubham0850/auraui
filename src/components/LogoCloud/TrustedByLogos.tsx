import Image from "next/image";
import React from "react";

// Logos data with local fallback
const logos = Array.from({ length: 12 }, (_, index) => ({
  src: "/logo-light.png",
  alt: `Logo ${index + 1}`,
}));

const TrustedByLogos = () => {
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
              <Image
                className="object-contain w-full h-8 mx-auto"
                src={logo.src}
                alt={logo.alt}
                height={40}
                width={40}
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

export default TrustedByLogos;

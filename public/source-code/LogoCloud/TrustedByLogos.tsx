import React from "react";

const logos = [
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png",
    alt: "Logo 1",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png",
    alt: "Logo 2",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png",
    alt: "Logo 3",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png",
    alt: "Logo 4",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png",
    alt: "Logo 5",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png",
    alt: "Logo 6",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png",
    alt: "Logo 7",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png",
    alt: "Logo 8",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png",
    alt: "Logo 9",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png",
    alt: "Logo 10",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png",
    alt: "Logo 11",
  },
  {
    src: "https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png",
    alt: "Logo 12",
  },
];

const TrustedByLogos = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Endorsed by AuraUI, innovative design teams, and Gangs of AuraUI.
          </h2>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${index >= 4 ? "hidden md:block" : ""}`}
            >
              <img
                className="object-contain w-full h-8 mx-auto"
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

export default TrustedByLogos;

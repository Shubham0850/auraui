import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
  {
    src: "https://www.auraui.com/logo-dark.png",
    alt: "AurauiLogo",
  },
];

const commonStyle = "object-contain w-32 max-w-full sm:w-44";

const LogoCloud2 = () => (
  <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center bg-gray-900 rounded-2xl">
        <div className="px-6 py-12 md:py-16 lg:p-20">
          <h2 className="text-sm font-normal tracking-widest text-gray-300 uppercase">
            Join over 200+ tech companies already using Auraui
          </h2>
          <div className="flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto mt-12 sm:mt-16 sm:gap-y-12 md:gap-16">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                className={`${commonStyle} sm:h-8 md:h-10`}
                src={logo.src}
                alt={logo.alt}
                width={176} // setting a fixed width based on sm:w-44
                height={40} // setting a fixed height based on sm:h-8
                objectFit="contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LogoCloud2;

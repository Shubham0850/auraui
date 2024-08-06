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

const LogoCloud1 = () => (
  <section className="relative py-12 overflow-hidden bg-violet-700 sm:py-16 lg:py-20 xl:py-24">
    <div className="absolute top-0 left-0 -translate-x-2/3 -translate-y-[75%]">
      <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20"></div>
    </div>
    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-[85%]">
      <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20 sm:opacity-100"></div>
    </div>
    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col items-center justify-between text-center lg:text-left lg:flex-row gap-x-16">
        <div className="max-w-sm px-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Trusted by businesses of all scales
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 sm:mt-16 lg:mt-0 sm:gap-y-12 md:gap-12">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              className={`${commonStyle} sm:h-8 md:h-10`}
              src={logo.src}
              alt={logo.alt}
              width={176}
              height={40} 
              objectFit="contain"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoCloud1;

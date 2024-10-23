import React from "react";

const logos = [
  { src: "https://www.auraui.com/logos/logo.svg", alt: "Another Logo" },
  { src: "https://www.auraui.com/logos/logo2.svg", alt: "Another Logo 2" },
  { src: "https://www.auraui.com/logos/logo1.svg", alt: "Another Logo 1" },
  { src: "https://www.auraui.com/logos/logo4.svg", alt: "Another Logo 4" },
  { src: "https://www.auraui.com/logos/kirak.png", alt: "Kirak logo" },
  { src: "https://www.auraui.com/logos/logo10.png", alt: "Another logo" },
  { src: "https://www.auraui.com/logo-dark.png", alt: "Auraui Dark logo" },
  { src: "https://www.auraui.com/logos/microsoft.png", alt: "Microsoft logo" },
];

function LogoCloud7() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left">
            <p className="text-base font-normal text-white sm:text-lg">
              2000+ Developers trust Auraui for building stunning websites
            </p>
            <h2 className="mt-4 text-3xl font-normal text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              Auraui empowers developers and brands to scale their web presence
            </h2>
          </div>

          <hr className="mt-8 border-gray-800 sm:mt-12" />

          <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-4 sm:gap-12 sm:mt-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                className="object-contain h-8 max-w-full sm:h-10 w-44"
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud7;

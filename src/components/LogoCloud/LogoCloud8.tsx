import React from "react";

type Logo = {
  src: string;
  alt: string;
  hidden?: boolean;
  height?: string;
};

const logos: Logo[] = [
  {
    src: "https://www.auraui.com/logo-light.png",
    alt: "Auraui Light",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo10.png",
    alt: "Auraui Logo 10",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/cocacola.svg",
    alt: "Coca-Cola",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/kirak.png",
    alt: "Kirak",
    height: "h-7",
  },
  {
    src: "https://www.auraui.com/logos/logo1.svg",
    alt: "Auraui Logo 1",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo2.webp",
    alt: "Auraui Logo 2",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo3.svg",
    alt: "Auraui Logo 3",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo13.png",
    alt: "Auraui Logo 13",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/microsoft.png",
    alt: "Microsoft",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo12.png",
    alt: "Auraui Logo 12",
    hidden: true,
    height: "h-7",
  },
  {
    src: "https://www.auraui.com/logos/logo14.png",
    alt: "Auraui Logo 14",
    hidden: true,
    height: "h-8",
  },
];

const logoStyles = {
  container: "object-contain w-full mx-auto",
  hidden: "hidden lg:block",
};

function LogoCloud8() {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              1 mission.
              <br />
              6+ years. 300+ successful projects.
              <br />
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Auraui has been at the forefront of helping developers and brands
              create remarkable digital experiences. From enterprise solutions
              to web3 innovations, we have empowered projects across the globe.
            </p>
          </div>

          <div className="lg:col-span-3 xl:col-span-4">
            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={logo.hidden ? logoStyles.hidden : ""}
                >
                  <img
                    className={`${logoStyles.container} ${
                      logo.height || "h-8"
                    }`}
                    src={logo.src}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud8;

import React from "react";

const logos = [
  {
    src: "https://www.auraui.com/logos/logo21.svg",
    alt: "Vertex Logo",
  },
  {
    src: "https://www.auraui.com/logos/logo20.svg",
    alt: "Squarestone Logo",
  },
  {
    src: "https://www.auraui.com/logos/logo22.svg",
    alt: "Martino Logo",
  },
  {
    src: "https://www.auraui.com/logos/logo24.svg",
    alt: "Waverio Logo",
  },
];

const commonStyles = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading: "text-xl font-bold text-center text-gray-400 xl:text-left font-pj",
  logoGrid:
    "grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8",
  logoImage: "object-contain w-auto mx-auto h-16",
};

function LogoCloud10() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="xl:flex xl:items-center xl:justify-between">
          <h2 className={commonStyles.heading}>1000+ Big brands trust us</h2>

          <div className={commonStyles.logoGrid}>
            {logos.map((logo, index) => (
              <img
                key={index}
                className={commonStyles.logoImage}
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

export default LogoCloud10;

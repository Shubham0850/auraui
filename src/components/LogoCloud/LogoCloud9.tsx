import React from "react";

const logos = [
  "https://www.auraui.com/logos/logo10.svg",
  "https://www.auraui.com/logos/logo9.svg",
  "https://www.auraui.com/logos/logo12.svg",
  "https://www.auraui.com/logos/logo13.svg",
  "https://www.auraui.com/logos/logo14.svg",
  "https://www.auraui.com/logos/logo15.svg",
];

function LogoCloud9() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="object-contain w-auto mx-auto h-14"
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud9;

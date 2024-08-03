import React from "react";

function LogoCloud5() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2">
        <svg
          className="blur-3xl filter"
          style="filter: blur(64px)"
          width="643"
          height="408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z"
            fill="url(#a)"
          />
          <defs>
            <linearGradient
              id="a"
              x1="663.766"
              y1="168.785"
              x2="303.65"
              y2="469.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" style="stop-color: var(--color-cyan-500)" />
              <stop offset="100%" style="stop-color: var(--color-purple-500)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Trusted by 1000+ popular brands.
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 gap-y-8 sm:gap-y-12 lg:grid-cols-2">
          <div className="lg:pr-16">
            <div className="text-center sm:flex sm:items-start sm:text-left">
              <img
                className="object-cover w-16 h-16 mx-auto rounded-full shrink-0"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/avatar-male.png"
                alt=""
              />
              <div className="mt-5 sm:mt-0 sm:ml-6">
                <blockquote>
                  <p className="text-lg font-normal text-white">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vitae et ultricies sapien mauris, urna. Arcu justo,
                    tellus in tellus, sed sed venenatis velit. Nisl nam augue
                    elit at viverra euismod vitae.
                  </p>
                </blockquote>
                <p className="mt-6 text-lg font-bold text-gray-300 sm:mt-8">
                  Ralph Edwards
                </p>
                <p className="mt-1 text-base font-normal text-gray-400">
                  CEO @ Matrixon
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 lg:hidden"></div>

          <div className="lg:border-l lg:border-gray-800 lg:pl-16">
            <div className="inline-grid grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10 sm:grid-cols-3">
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-waverio.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-logoipsum.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-alterbone.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-tinygone.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-preso.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-ridoria.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-carbonia.svg"
                alt=""
              />
              <img
                className="object-contain h-8 max-w-full sm:h-10 w-44 filter grayscale"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/2/logo-incanto.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud5;

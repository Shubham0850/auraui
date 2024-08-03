import React from "react";

function Hero6() {
  return (
    <div className="relative pt-32 overflow-hidden xl:pt-40 bg-black">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <a
                href="#"
                title="BakerStreet"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg"
                  alt="BakerStreet"
                />
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#"
                title=""
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                About{" "}
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                Services{" "}
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                Contacts{" "}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-left md:max-w-xl md:mx-auto md:text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-sans font-normal text-7xl">Master</span>
              <br />
              <span className="font-serif italic font-normal text-8xl">
                Bread making
              </span>
            </h1>
            <p className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              penatibus pellentesque dolor consequat ligula egestas massa
              gravida. Porttitor venenatis enim praesent.
            </p>

            <div className="mt-8">
              <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
        <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80"
            src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/4/background.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <button type="button" className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-white border-primary hover:bg-white hover:bg-opacity-20">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.0416 4.91926C7.37507 4.51934 6.5271 4.99945 6.5271 5.77675L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8575C19.061 12.4691 19.061 11.5309 18.4137 11.1425L8.0416 4.91926Z"
                />
              </svg>
            </span>
            <span className="mt-5 text-base font-normal text-white">
              {" "}
              Play trailer{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero6;

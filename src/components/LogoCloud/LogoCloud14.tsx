import React from "react";

function LogoCloud14() {
  return (
    <section className="relative pt-12 sm:pt-16 md:pb-16 lg:py-20 bg-black">
      <div className="hidden md:block absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/background.png"
          alt=""
        />
      </div>

      <div className="px-6 relative sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-24">
          <div className="max-w-lg">
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal">
                {" "}
                Trusted by companies from{" "}
              </span>
              <span className="font-serif italic text-5xl">
                {" "}
                all over the world{" "}
              </span>
            </h2>
            <div className="mt-8">
              <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                role="button"
              >
                Learn More
                <svg
                  className="h-6 w-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <img
                  className="w-auto h-14 mx-auto object-contain opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/logo-light-ai.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="w-auto h-14 mx-auto object-contain opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/logo-goldline.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="w-auto h-14 mx-auto object-contain opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/logo-kyan.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="w-auto h-14 mx-auto object-contain opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/logo-treva.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <img
          className="w-full"
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/5/background-mobile.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default LogoCloud14;

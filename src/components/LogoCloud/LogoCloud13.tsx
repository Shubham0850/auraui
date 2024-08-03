import React from "react";

function LogoCloud13() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full filter grayscale opacity-30 saturate-0 object-cover"
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/4/background.png"
          alt=""
        />
      </div>

      <div className="px-6 relative sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 gap-x-16">
            <div>
              <img
                className="w-auto h-14 mx-auto object-contain opacity-70"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/4/logo-light-ai.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-auto h-14 mx-auto object-contain opacity-70"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/4/logo-goldline.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-auto h-14 mx-auto object-contain opacity-70"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/4/logo-kyan.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-auto h-14 mx-auto object-contain opacity-70"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/4/logo-treva.png"
                alt=""
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-normal font-sans text-white text-opacity-70 leading-8">
              Eu pellentesque fermentum, sit pellentesque sit aliquet. Pretium
              pretium, vitae at varius. Ut hac tellus cursus malesuada.
              Pellentesque ac arcu risus hac eu venenatis tellus praesent diam.
              Eu pellentesque fermentum, sit pellentesque sit aliquet. Pretium
              pretium, vitae at varius. Ut hac tellus cursus malesuada.
              Pellentesque ac arcu risus hac eu venenatis tellus praesent diam.
            </p>
            <div className="mt-16">
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
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud13;

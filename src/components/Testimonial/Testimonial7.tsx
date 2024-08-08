import React from "react";

function Testimonial7() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 text-center gap-y-8 lg:text-left lg:grid-cols-6">
          <div className="lg:col-span-4">
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                {" "}
                Recommended{" "}
              </span>
              <span className="block font-serif text-5xl italic sm:text-6xl md:text-7xl">
                {" "}
                by our members{" "}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="font-sans text-lg font-normal leading-8 text-opacity-50 text-white">
              Urna, in est malesuada arcu massa posuere convallis. Id tristique
              sed velit tellus lorem pellentesque id ut ultrices.
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 lg:grid-cols-3 lg:mt-16 lg:max-w-none">
          <div className="relative overflow-hidden border rounded-lg border-neutral">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/5/member-1.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="px-8 pb-6">
                <blockquote>
                  <p className="font-serif text-2xl italic leading-tight xl:text-4xl text-white">
                    “Sed vitae egestas maecenas arcu ultrices ipsum suspendisse
                    amet consequat.”
                  </p>
                </blockquote>
                <p className="mt-6 font-sans text-base font-normal xl:mt-8 text-white">
                  Cymone Magdalina
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border rounded-lg border-neutral">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/5/member-2.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="px-8 pb-6">
                <blockquote>
                  <p className="font-serif text-2xl italic leading-tight xl:text-4xl text-white">
                    “Sed vitae egestas maecenas arcu ultrices ipsum suspendisse
                    amet consequat.”
                  </p>
                </blockquote>
                <p className="mt-6 font-sans text-base font-normal xl:mt-8 text-white">
                  Sophia Ella
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border rounded-lg border-neutral">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/5/member-3.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="px-8 pb-6">
                <blockquote>
                  <p className="font-serif text-2xl italic leading-tight xl:text-4xl text-white">
                    “Sed vitae egestas maecenas arcu ultrices ipsum suspendisse
                    amet consequat.”
                  </p>
                </blockquote>
                <p className="mt-6 font-sans text-base font-normal xl:mt-8 text-white">
                  Hyeon Vivek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial7;

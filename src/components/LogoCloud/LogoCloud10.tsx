import React from "react";

function LogoCloud10() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <h2 className="text-xl font-bold text-center text-gray-400 xl:text-left font-pj">
            1000+ Big brands trust us
          </h2>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            <img
              className="object-contain w-auto mx-auto h-9"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud10;

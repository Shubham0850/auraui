import React from "react";

function Feature9() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Build your solid team with the perfect time management
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-16 md:max-w-md md:mx-auto">
          <div className="absolute inset-0">
            <div
              className="w-full h-full max-w-lg rotate-180 opacity-30 blur-lg filter"
              style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
            ></div>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-16">
            <div className="flex items-center">
              <p className="text-4xl font-medium text-gray-900 font-pj">
                Unlimited
              </p>
              <p className="ml-5 text-sm text-gray-900 font-pj">
                Task
                <br />
                Creation
              </p>
            </div>

            <div className="flex items-center mt-6 sm:mt-0">
              <p className="text-4xl font-medium text-gray-900 font-pj">
                100GB+
              </p>
              <p className="ml-5 text-sm text-gray-900 font-pj">
                Cloud
                <br />
                Storage
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 sm:mt-16">
          <img
            className="w-full"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/features/5/illustration.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Feature9;

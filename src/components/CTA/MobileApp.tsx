import React from "react";

type Props = {};

const MobileApp = (props: Props) => {
  return (
    <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
      <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Experience Superior Performance with Aura UI Mobile App
              </h2>
              <p className="mt-4 text-base text-gray-50">
                Enjoy a seamless and efficient mobile experience with our Aura
                UI Mobile App. Designed to meet all your needs, it provides
                unmatched performance and user-friendly features.
              </p>

              <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                <a href="#" title="" className="flex" role="button">
                  <img
                    className="w-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                    alt="Download on the App Store"
                  />
                </a>

                <a href="#" title="" className="flex" role="button">
                  <img
                    className="w-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
            </div>

            <div className="relative px-12">
              <svg
                className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              <img
                className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                alt="iPhone mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;

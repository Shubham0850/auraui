import React from "react";

const One = () => {
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16">
            <div className="lg:col-span-4">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                <img
                  className="object-cover w-full h-full"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/8/image.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col justify-between lg:col-span-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Roadmap
                </h2>
                <p className="mt-4 text-base font-medium text-gray-500">
                  In a creative workplace, employees with responsibly try
                  different solutions
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 sm:mt-16 xl:gap-x-16">
                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 1</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">Launch</p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 2</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    Investment
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 3</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    Connection
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 4</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">Growth</p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default One;

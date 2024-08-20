import React from "react";

function Feature15() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-16 xl:gap-x-24 gap-y-12">
          <div className="lg:col-span-5 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-base font-semibold text-gray-500">
                The best UI Kit in town
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl">
                Build a website without building it yourself!
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:pr-24 lg:mt-6 lg:leading-8">
                Clarity gives you the blocks & components you need to create a
                truly professional website, landing page or admin panel for your
                SaaS.
              </p>
            </div>

            <div className="grid grid-cols-1 pt-8 mt-8 border-t border-gray-200 sm:grid-cols-2 md:mt-16 xl:mt-24 gap-x-16 gap-y-8">
              <h3 className="text-lg font-medium text-gray-900">
                Get unlimited design inspirations. Level up your design.
              </h3>

              <h3 className="text-lg font-medium text-gray-900">
                14+ Premium tailwind UI kits. Start with unlimited product
                downloads.
              </h3>
            </div>

            <div className="mt-12">
              <a
                href="#"
                title=""
                className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline"
              >
                Start using Landingfolio
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full xl:h-full xl:object-cover rounded-3xl"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/2/feature-2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature15;

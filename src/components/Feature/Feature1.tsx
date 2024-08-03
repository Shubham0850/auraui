import React from "react";

function Feature1() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Clarity helps to grow
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <nav className="flex flex-col items-center justify-center space-y-5 text-center sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-16">
            <a
              href="#"
              title=""
              className="pb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase transition-all duration-200 border-b border-blue-600"
            >
              {" "}
              One click analytics{" "}
            </a>

            <a
              href="#"
              title=""
              className="pb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
            >
              {" "}
              Create Products{" "}
            </a>

            <a
              href="#"
              title=""
              className="pb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
            >
              {" "}
              Sales Alert{" "}
            </a>

            <a
              href="#"
              title=""
              className="pb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
            >
              {" "}
              File Storages{" "}
            </a>
          </nav>

          <div className="mt-6 sm:mt-8">
            <img
              className="w-full shadow-2xl rounded-2xl"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/4/dashboard-mockup.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1;

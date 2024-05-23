import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto lg:grid-cols-2 gap-y-12 lg:gap-x-24">
            <div className="lg:order-2">
              <p className="text-base font-semibold text-blue-600">
                Grow, Improve, Get Job
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8">
                Every week on your inbox with new tips.
              </h2>

              <form
                action="#"
                method="POST"
                className="flex flex-col justify-between mt-8 rounded-xl sm:items-center sm:border sm:border-gray-300 sm:p-1 sm:flex-row sm:mt-12 sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600"
              >
                <div className="flex-1">
                  <label  className="sr-only">
                    {" "}
                    Email address{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="block w-full px-6 py-4 text-base font-normal text-gray-900 placeholder-gray-500 bg-transparent border border-gray-300 rounded-xl focus:outline-none sm:border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-600 sm:focus:ring-0 sm:focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl sm:mt-0 sm:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="flex items-center mt-8">
                <div className="relative z-0 flex -space-x-3 overflow-hidden">
                  <img
                    className="relative z-30 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/5/avatar-male-1.png"
                    alt=""
                  />
                  <img
                    className="relative z-20 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/5/avatar-female-1.png"
                    alt=""
                  />
                  <img
                    className="relative z-10 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/5/avatar-male-2.png"
                    alt=""
                  />
                </div>

                <p className="w-40 ml-4 text-base font-medium text-gray-500">
                  <span className="text-gray-900">18K recruiters</span> have
                  already subscribed
                </p>
              </div>
            </div>

            <div className="lg:order-1">
              <img
                className="w-full max-w-sm mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/5/portrait-male.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

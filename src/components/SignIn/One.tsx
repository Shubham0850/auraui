import React from "react";

const One = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Sign in to your account
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
          </div>

          <div className="max-w-lg mx-auto mt-8 bg-white shadow-xl rounded-2xl sm:mt-12">
            <div className="p-6 sm:px-8">
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label className="sr-only"> Email address </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="block w-full px-6 py-4 text-base text-center text-gray-900 placeholder-gray-600 bg-white border border-gray-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="sr-only"> Password </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create Password"
                    className="block w-full px-6 py-4 text-base text-center text-gray-900 placeholder-gray-600 bg-white border border-gray-200 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        className="w-4 h-4 text-blue-600 border border-gray-200 rounded focus:outline-none focus:ring-blue-600"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-sm font-normal text-gray-700">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <a
                    href="#"
                    title=""
                    className="text-sm font-normal text-gray-900 hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 space-y-6 text-center">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  role="button"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5194 9.91355L13.7299 9.91309C13.2977 9.91309 12.9473 10.2634 12.9473 10.6957V13.823C12.9473 14.2552 13.2977 14.6056 13.7299 14.6056H19.2427C18.639 16.1722 17.5124 17.4842 16.0749 18.3178L18.4255 22.387C22.1963 20.2062 24.4256 16.3799 24.4256 12.0965C24.4256 11.4866 24.3806 11.0506 24.2907 10.5597C24.2224 10.1867 23.8985 9.91355 23.5194 9.91355Z"
                      fill="#167EE6"
                    />
                    <path
                      d="M12.4241 19.3043C9.72629 19.3043 7.37109 17.8303 6.10616 15.649L2.03711 17.9944C4.10782 21.5832 7.98694 24 12.4241 24C14.6009 24 16.6548 23.4139 18.4242 22.3925V22.387L16.0735 18.3177C14.9983 18.9414 13.754 19.3043 12.4241 19.3043Z"
                      fill="#12B347"
                    />
                    <path
                      d="M18.4258 22.3925V22.387L16.0752 18.3177C14.9999 18.9413 13.7558 19.3043 12.4258 19.3043V24C14.6025 24 16.6566 23.4139 18.4258 22.3925Z"
                      fill="#0F993E"
                    />
                    <path
                      d="M5.12146 12C5.12146 10.6702 5.48437 9.42613 6.10786 8.35096L2.03881 6.00562C1.01182 7.76938 0.425781 9.81773 0.425781 12C0.425781 14.1824 1.01182 16.2307 2.03881 17.9945L6.10786 15.6491C5.48437 14.5739 5.12146 13.3298 5.12146 12Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M12.4241 4.69566C14.1834 4.69566 15.7994 5.32078 17.0616 6.36061C17.373 6.61711 17.8256 6.59859 18.1108 6.31336L20.3266 4.09758C20.6502 3.77395 20.6272 3.24422 20.2815 2.94431C18.1667 1.10967 15.4151 0 12.4241 0C7.98694 0 4.10782 2.41673 2.03711 6.00558L6.10616 8.35092C7.37109 6.16969 9.72629 4.69566 12.4241 4.69566Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M17.0632 6.36061C17.3746 6.61711 17.8273 6.5986 18.1125 6.31336L20.3282 4.09758C20.6518 3.77395 20.6288 3.24422 20.2831 2.94431C18.1683 1.10963 15.4168 0 12.4258 0V4.69566C14.185 4.69566 15.801 5.32078 17.0632 6.36061Z"
                      fill="#D93F21"
                    />
                  </svg>
                  Sign in with Google
                </a>

                <p className="text-sm font-normal text-gray-500">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default One;

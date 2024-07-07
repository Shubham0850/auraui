import React from "react";

type Props = {};

const five = (props: Props) => {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute top-0 left-0 -translate-x-48 -translate-y-36">
        <svg
          className="blur-3xl filter"
          width="756"
          height="202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M434.095 21.875c185.823 0 321.414-55.288 321.414 9.929S268.41 201.855 82.588 201.855c-185.822 0 0-104.834 0-170.051 0-65.217 165.685-9.929 351.507-9.929Z"
            fill="url(#b)"
          />
          <defs>
            <linearGradient
              id="b"
              x1="0"
              y1="201.855"
              x2="8.923"
              y2="-28.873"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-cyan-500)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-purple-500)" }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Need help? Get in touch
          </h2>
          <p className="mt-4 text-base font-normal text-gray-400 sm:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 lg:grid-cols-6 lg:gap-x-24 gap-y-12">
          <div className="space-y-8 lg:space-y-12 lg:col-span-2 lg:order-last">
            <div>
              <h3 className="text-xl font-normal text-white sm:text-2xl">
                <a href="#" title="" className="">
                  {" "}
                  +1 (483) 299 1400{" "}
                </a>
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Call us directly if you need any urgent help. Our agents will
                help you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal text-white sm:text-2xl">
                <a href="#" title="" className="">
                  {" "}
                  contact@example.com{" "}
                </a>
              </h3>
              <p className="mt-4 text-base font-normal text-gray-400">
                Email us directly if you need any help. Our agents will help
                you.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <div>
                <label htmlFor="" className="text-base font-normal text-white">
                  {" "}
                  Your name{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your full name"
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="text-base font-normal text-white">
                  {" "}
                  Your email{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="" className="text-base font-normal text-white">
                  {" "}
                  What kind of service are you looking for?{" "}
                </label>
                <div className="mt-2">
                  <select
                    name=""
                    id=""
                    className="block w-full py-4 pl-5 pr-10 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1"
                  >
                    <option value="">Select a subject</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="" className="text-base font-normal text-white">
                  {" "}
                  Message{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Write your message"
                    rows={4}
                    className="block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md resize-y focus:border-white focus:ring-white focus:ring-1"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150 filter"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default five;

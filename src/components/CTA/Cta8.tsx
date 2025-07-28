import React from "react";
import Image from "next/image";

type Props = {};

const Cta8 = (props: Props) => {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://www.auraui.com/memeimage/laptop-girl.jpeg"
          alt="Girl working on laptop"
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
          className="md:object-left md:scale-100 md:origin-top-left"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Get Full Access to Aura UI
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Join the Aura UI community and unlock all the features to create
            stunning, responsive web applications. Subscribe now and elevate
            your development experience.
          </p>

          <form action="#" method="POST" className="mt-10 lg:mt-14">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Email Input */}
              <div className="relative w-full max-w-md">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  required
                  className="w-full py-3 pl-12 pr-4 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-lg transition">
                Access
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cta8;

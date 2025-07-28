import React from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const iconClass = "flex-shrink-0 text-orange-400 w-7 h-7";
const headingClass = "text-xl font-semibold text-black";
const textClass = "mt-1.5 text-base text-gray-600";

const Cta7 = (props: Props) => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Get Full Access to Aura UI
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Unlock the full potential of Aura UI and create stunning web
            applications with ease. Join our community and start building today.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
          <div className="flex items-start">
            <FaCheckCircle className={iconClass} />
            <div className="ml-4">
              <h3 className={headingClass}>130+ Blocks</h3>
              <p className={textClass}>Ready to use</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCheckCircle className={iconClass} />
            <div className="ml-4">
              <h3 className={headingClass}>14 Pages</h3>
              <p className={textClass}>Make it live</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCheckCircle className={iconClass} />
            <div className="ml-4">
              <h3 className={headingClass}>Easy Access</h3>
              <p className={textClass}>Anyone can use</p>
            </div>
          </div>
        </div>

        <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
          <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600">
            <div className="flex flex-col items-start sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 bg-white border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600"
                    required
                  />
                </div>
              </div>

              <button className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                Get Instant Access
                <FaArrowRight className="w-5 h-5 ml-3 -mr-1" />
              </button>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
          <FaLock className="flex-shrink-0 w-5 h-5 text-gray-600" />
          <span className="ml-2 text-sm text-gray-600">
            Your data is completely secure with us. We don’t share it with
            anyone.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cta7;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

type Props = {};

const FusionFooter = (props: Props) => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src="https://www.auraui.com/logo-light.png"
              alt="Auraui Logo"
            />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Auraui brings minimal design with unparalleled performance to your
              digital presence. Experience the seamless integration of
              functionality and aesthetics.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Github"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Auraui
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="About"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Features"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Works"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Career"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Support
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="Customer Support"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Delivery Details"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Delivery Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Terms & Conditions"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Privacy Policy"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by Auraui
        </p>
      </div>
    </section>
  );
};

export default FusionFooter;

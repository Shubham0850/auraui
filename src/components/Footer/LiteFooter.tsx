import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type Props = {};

const LiteFooter: React.FC<Props> = () => {
  return (
    <footer className="py-12 bg-black lg:py-20 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <a href="#" title="Auraui" className="flex">
              <img
                className="w-auto mx-auto h-9 lg:mx-0"
                src="https://www.auraui.com/logo-dark.png"
                alt="Auraui Logo"
              />
            </a>
            <p className="mt-6 text-base font-normal text-gray-400 lg:max-w-xs">
              Auraui: Empowering your digital presence with innovative
              solutions.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center justify-center px-5 py-4 border border-gray-800 lg:w-auto rounded-2xl">
                <FaEnvelope className="w-6 h-6 text-gray-600 shrink-0" />
                <a
                  href="mailto:hello@auraui.com"
                  className="ml-4 text-lg font-normal text-white"
                >
                  hello@auraui.com
                </a>
              </div>
            </div>

            <ul className="flex items-center justify-center mt-8 space-x-6 lg:justify-start sm:space-x-12">
              <li>
                <a
                  href="#"
                  className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"
                >
                  Pricing & Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-10 flex justify-center space-x-6 lg:justify-start">
              <a
                href="https://facebook.com"
                className="text-white transition-all duration-200 hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-white transition-all duration-200 hover:text-gray-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-white transition-all duration-200 hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white transition-all duration-200 hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LiteFooter;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {};

const NeoFooter: React.FC<Props> = () => {
  return (
    <footer className="relative py-12 overflow-hidden bg-black lg:py-20 sm:py-16">
      <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2">
        {/* Gradient background or decorative element */}
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt="Background"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="items-center space-y-8 text-center lg:justify-between lg:flex lg:text-left lg:space-y-0 lg:space-x-8">
          <div>
            <a href="#" title="Auraui" className="flex">
              <img
                className="w-auto mx-auto h-9 lg:mx-0"
                src="https://www.auraui.com/logo-dark.png"
                alt="Auraui Logo"
              />
            </a>
          </div>

          <div className="max-w-md mx-auto lg:mx-0">
            <p className="text-lg font-normal text-gray-400">
              Welcome to Auraui, where innovation meets elegance. Explore our
              features and resources.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-10 lg:justify-end">
            <a
              href="#"
              title="Terms & Conditions"
              className="pb-2 text-base font-normal transition-all duration-200 border-b border-gray-600 text-gray-50 hover:text-white hover:border-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              title="Privacy Policy"
              className="pb-2 text-base font-normal transition-all duration-200 border-b border-gray-600 text-gray-50 hover:text-white hover:border-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm font-normal text-gray-400">
              © {new Date().getFullYear()}, All Rights Reserved by Auraui
            </p>

            <ul className="flex items-center justify-center mt-6 space-x-3 md:mt-0">
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-pink-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NeoFooter;

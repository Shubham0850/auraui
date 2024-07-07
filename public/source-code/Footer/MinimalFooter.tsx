import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type Props = {};

const MinimalFooter: React.FC<Props> = () => {
  return (
    <footer className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h5 className="max-w-xl text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            Build beautiful landing pages fast using Rareblocks Kit.
          </h5>
          <div className="max-w-sm mt-8 md:mt-0">
            <ul className="space-y-7">
              <li className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 w-6 h-6 text-white" />
                <span className="ml-5 text-xl font-normal text-white">
                  8502 Preston Rd. Inglewood, Maine 98380, USA
                </span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="flex-shrink-0 w-6 h-6 text-white" />
                <span className="ml-5 text-xl font-normal text-white">
                  support@rareblocks.xyz
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-12 border-gray-600 md:mt-20" />
        <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
          <ul className="flex items-center space-x-6 sm:space-x-12">
            <li>
              <a
                href="#"
                title="About"
                className="text-lg font-medium text-white transition-all duration-200 hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Features"
                className="text-lg font-medium text-white transition-all duration-200 hover:text-gray-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Works"
                className="text-lg font-medium text-white transition-all duration-200 hover:text-gray-300"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Support"
                className="text-lg font-medium text-white transition-all duration-200 hover:text-gray-300"
              >
                Support
              </a>
            </li>
          </ul>
          <p className="mt-8 text-lg font-normal text-white lg:mt-0">
            © Copyright 2021, All Rights Reserved
          </p>
        </div>
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="#"
            title="Facebook"
            className="text-white transition-all duration-200 hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            title="Twitter"
            className="text-white transition-all duration-200 hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            title="Instagram"
            className="text-white transition-all duration-200 hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            title="LinkedIn"
            className="text-white transition-all duration-200 hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;

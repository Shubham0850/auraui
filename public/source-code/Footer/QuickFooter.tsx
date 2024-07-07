import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

type Props = {};

const QuickFooter: React.FC<Props> = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 gap-x-8">
          <div className="lg:col-span-3">
            <img
              className="w-auto h-8"
              src="https://www.auraui.com/logo-dark.png"
              alt="Auraui Logo"
            />
            <p className="max-w-xs mt-4 text-sm text-opacity-50 text-white">
              Auraui: Innovating your digital presence with advanced solutions.
            </p>
            <div className="mt-4 flex space-x-6">
              <FaMapMarkerAlt className="text-white" />
              <p className="text-sm text-opacity-50 text-white">
                123 Auraui Street, Tech City
              </p>
            </div>
            <div className="mt-2 flex space-x-6">
              <FaPhoneAlt className="text-white" />
              <p className="text-sm text-opacity-50 text-white">
                +1 234 567 890
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <h6 className="text-lg font-semibold text-white">Resources</h6>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-white">Company</h6>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-lg font-semibold text-white">Contact Us</h6>
            <p className="mt-4 text-sm text-opacity-50 text-white">
              Have questions or feedback? Reach out to us!
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:support@auraui.com"
                className="text-sm text-opacity-50 text-white hover:text-opacity-100"
              >
                support@auraui.com
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-gray-700" />

        <div className="mt-12 sm:flex sm:items-center sm:justify-between">
          <ul className="flex items-center justify-center space-x-6 sm:justify-end sm:order-2">
            <li>
              <a
                href="https://twitter.com/auraui"
                className="transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              >
                <FaTwitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/auraui"
                className="transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              >
                <FaLinkedinIn className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/auraui"
                className="transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              >
                <FaFacebookF className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/auraui"
                className="transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              >
                <FaInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm text-opacity-50 text-center sm:mt-0 sm:text-left sm:order-1 text-white">
            &copy; {new Date().getFullYear()} Auraui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuickFooter;

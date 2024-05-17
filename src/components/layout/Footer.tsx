import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="px-6 mx-auto sm:px-8 lg:px-12">
        <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="md:order-1">
            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="" />
          </div>

          <div className="md:order-3">
            <ul className="flex items-center justify-end space-x-6">
              <li>
                <a href="#" title="" target="_blank" rel="noopener" className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                  <span className="sr-only"> Twitter </span>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" target="_blank" rel="noopener" className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                  <span className="sr-only"> LinkedIn </span>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" target="_blank" rel="noopener" className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                  <span className="sr-only"> Google </span>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 md:order-2">
            <ul className="flex items-center justify-center sm:justify-between md:justify-center space-x-9 lg:space-x-16">
              <li>
                <a href="#" title="" className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                  About
                </a>
              </li>

              <li>
                <a href="#" title="" className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                  Courses
                </a>
              </li>

              <li>
                <a href="#" title="" className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                  Services
                </a>
              </li>

              <li>
                <a href="#" title="" className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

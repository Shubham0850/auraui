import Link from "next/link";
import { useTheme, ThemeSwitch, Navbar } from "nextra-theme-docs";
import React, { useEffect } from "react";

const Footer = () => {
  const { theme } = useTheme();

  useEffect(() => { }, [theme]);

  return (
    <footer className="w-full">
      <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        <div className="md:order-1">
          {theme === "light" ? (
            <img className="w-auto h-8" src="/logo-light.png" alt="" />
          ) : (
            <img className="w-auto h-8" src="/logo-dark.png" alt="" />
          )}
        </div>

        <div className="md:order-3">
          <ul className="flex items-center justify-end space-x-6">
            <li>
              <a
                href="https://x.com/aura__ui"
                title=""
                target="_blank"
                rel="noopener"
                className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/auraui/about/?viewAsMember=true"
                title=""
                target="_blank"
                rel="noopener"
                className="inline-flex transition-all duration-200 rounded text-gray-900 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <span className="sr-only"> LinkedIn </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 md:order-2">
          <ul className="flex items-center justify-center sm:justify-between md:justify-center space-x-9 lg:space-x-16">
            <li>
              <Link
                href="/"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/components"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Components
              </Link>
            </li>

            <li>
              <Link
                href="/components"
                title=""
                className="text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-gray-900 dark:text-gray-400 hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

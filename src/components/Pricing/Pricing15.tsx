import React from "react";
import { FaCheck } from "react-icons/fa";

function Pricing15() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Try AuraUI for 30 days, completely free. No credit card required.
          </h2>
        </div>

        <div className="flex sm:inline-flex px-5 py-4 rounded border border-gray-300 items-center justify-center sm:justify-start space-x-2.5 mt-12">
          <span className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
            Monthly
          </span>
          <div
            className="relative inline-flex flex-shrink-0 w-20 h-4 transition-colors duration-200 ease-in-out bg-gray-100 rounded cursor-pointer focus:outline-none"
            role="switch"
          >
            <span
              aria-hidden="true"
              className="inline-block w-10 h-4 transition duration-200 ease-in-out translate-x-0 bg-gray-900 rounded shadow pointer-events-none"
            ></span>
          </div>
          <span className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 px-12 mt-8 text-center sm:text-left sm:px-0 gap-x-12 gap-y-16 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Startup Plan */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 font-pj">Startup</h3>
            <p className="mt-3 text-sm font-normal text-gray-600 font-pj">
              Ideal for freelancers or small projects.
            </p>
            <p className="mt-6 text-5xl font-bold text-gray-900 font-pj">
              FREE
            </p>
            <ul className="mt-6 space-y-3 text-base font-medium text-gray-900">
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Up to 5 projects
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Basic support
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> 1GB Storage
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 mt-10 text-base font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-400 rounded font-pj hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Start for free
            </a>
          </div>

          {/* Pro Plan */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 font-pj">Pro</h3>
            <p className="mt-3 text-sm font-normal text-gray-600 font-pj">
              Best for growing businesses needing advanced features.
            </p>
            <div className="flex items-end justify-center mt-6 sm:justify-start">
              <p className="text-5xl font-bold text-gray-900 font-pj">$79</p>
              <p className="text-lg font-medium text-gray-400 font-pj">/mo</p>
            </div>
            <ul className="mt-6 space-y-3 text-base font-medium text-gray-900">
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Up to 50 projects
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Priority support
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> 10GB Storage
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Custom themes
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> API access
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 mt-10 text-base font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-400 rounded font-pj hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get 30 days free trial
            </a>
          </div>

          {/* Company Plan */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 font-pj">Company</h3>
            <p className="mt-3 text-sm font-normal text-gray-600 font-pj">
              Tailored for larger teams with complex needs.
            </p>
            <div className="flex items-end justify-center mt-6 sm:justify-start">
              <p className="text-5xl font-bold text-gray-900 font-pj">$149</p>
              <p className="text-lg font-medium text-gray-400 font-pj">/mo</p>
            </div>
            <ul className="mt-6 space-y-3 text-base font-medium text-gray-900">
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Unlimited projects
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Dedicated support
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> 50GB Storage
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Custom themes
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> API access
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Advanced integrations
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Custom widgets
              </li>
            </ul>
            <div className="relative inline-flex mt-10 group">
              <div
                className="absolute duration-1000 transition-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded font-pj hover:bg-gray-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get 30 days free trial
              </a>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 font-pj">
              Enterprise
            </h3>
            <p className="mt-3 text-sm font-normal text-gray-600 font-pj">
              Perfect for large organizations with extensive needs.
            </p>
            <p className="mt-6 text-5xl font-bold text-gray-900 uppercase font-pj">
              Custom
            </p>
            <ul className="mt-6 space-y-3 text-base font-medium text-gray-900">
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Unlimited projects
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> 24/7 support
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Up to 100TB Storage
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Custom themes
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> API access
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Advanced integrations
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Custom widgets
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Dedicated account manager
              </li>
              <li className="flex items-center">
                <FaCheck className="w-4 h-4 mr-2" /> Bulk importer
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 mt-10 text-base font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-400 rounded font-pj hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get 30 days free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing15;

import React from "react";

type Props = {};

const two = (props: Props) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-xl font-medium text-gray-900">
            Numbers tell the hard works we’ve done in last 6 years
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-4xl font-bold text-gray-900">6+</h4>
                  <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Years in business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-4xl font-bold text-gray-900">37+</h4>
                  <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Team members
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-4xl font-bold text-gray-900">3,274</h4>
                  <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Projects delivered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                  <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Customer success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default two;

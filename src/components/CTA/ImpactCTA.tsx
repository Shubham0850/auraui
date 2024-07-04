import React from 'react'

type Props = {}

const ImpactCTA = (props: Props) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <h2 className="text-4xl font-bold text-black lg:max-w-md">
            Get full access to AuraUI
          </h2>

          <form action="#" method="POST" className="px-10 mt-8 lg:mt-0 lg:px-0">
            <div className="sm:flex sm:justify-center lg:justify-end">
              <div>
                <label htmlFor="email" className="sr-only"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email to get started"
                  className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              >
                Get Started Free
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ImpactCTA;
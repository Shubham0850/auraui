import React from 'react'

type Props = {}

function VerticleSteps({ }: Props) {
	return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Steps to Use AuraUI
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-lg font-normal text-gray-600 font-pj">
           Always use AuraUI,"Aura Aura"
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-12 sm:px-10">
          <div className="relative pb-10">
            <span
              className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
              aria-hidden="true"
            ></span>

            <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-start sm:items-center">
                <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                  1
                </div>
                <p className="ml-6 text-xl font-medium text-gray-900 font-pj">
               Determine which component from the
                  AuraUI library you need for your project. 
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-10">
            <span
              className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
              aria-hidden="true"
            ></span>

            <div className="absolute -mt-10 inset-y-8 -inset-x-1">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-start sm:items-center">
                <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                  2
                </div>
                <p className="ml-6 text-xl font-medium text-gray-900 font-pj">
                Once you have identified the required
                  component, copy its code from the AuraUI library.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-10">
            <span
              className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
              aria-hidden="true"
            ></span>

            <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-start sm:items-center">
                <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                  3
                </div>
                <p className="ml-6 text-xl font-medium text-gray-900 font-pj">
                Open your project in VS Code and paste the
                  copied code into the appropriate file or section of your
                  project.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-start sm:items-center">
                <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                  4
                </div>
                <p className="ml-6 text-xl font-medium text-gray-900 font-pj">
                Modify the component as needed to fit
                  the specific requirements and design of your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticleSteps
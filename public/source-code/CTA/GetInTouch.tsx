import React from "react";

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <section className="pt-10 bg-amber-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
      <div className="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
        <div className="2xl:pl-24">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="text-center md:py-16 xl:py-24 md:text-left">
              <blockquote>
                <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                  “Celebrate every moment with Aura UI. It&apos;s not just a UI
                  library; it&apos;s a companion in your web development
                  journey.”
                </p>
              </blockquote>
              <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                <p className="text-base font-semibold text-gray-900">
                  Ananya Sharma
                </p>
                <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                  Senior Web Developer at Tech Solutions
                </p>
              </div>
              <p className="mt-12 text-base text-gray-900 lg:mt-20">
                Ready to experience the power of Aura UI?
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Get started now{" "}
              </a>
            </div>

            <div className="relative">
              <img
                className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

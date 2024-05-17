import React from "react";

type Props = {};

const five = (props: Props) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Grow business with Celebration.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                className="ml-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt=""
              />

              <img
                className="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                alt=""
              />

              <div className="absolute -bottom-10 -left-16">
                <div className="bg-yellow-300">
                  <div className="px-8 py-10">
                    <span className="block text-4xl font-bold text-black lg:text-5xl">
                      {" "}
                      53%{" "}
                    </span>
                    <span className="block mt-2 text-base leading-tight text-black">
                      {" "}
                      High Conversions
                      <br />
                      Everything{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default five;

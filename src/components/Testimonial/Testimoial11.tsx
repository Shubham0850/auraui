import React from "react";

function Testimoial11() {
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-left md:text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
            What our customer are saying 😍
          </h2>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-10 mx-auto mt-8 md:grid-cols-2 md:mt-20 md:gap-16">
          <div>
            <p className="text-xl font-bold text-white font-pj">
              The best UI Kit for developers. So easy to implement and publish.
            </p>
            <blockquote className="mt-5">
              <p className="text-lg font-normal leading-relaxed text-gray-200 font-pj">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>
            </blockquote>
            <div className="flex items-center mt-6">
              <img
                className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/7/avatar-female.png"
                alt=""
              />
              <div className="ml-4">
                <p className="text-base font-bold text-white font-pj">
                  Theresa Webb
                </p>
                <p className="text-sm font-pj text-gray-400 mt-0.5">
                  Medical Assistant
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-bold text-white font-pj">
              Rareblocks helps you optimize for engagement.
            </p>
            <blockquote className="mt-5">
              <p className="text-lg font-normal leading-relaxed text-gray-200 font-pj">
                “Must have tools for developers, who want to be Product
                Designer, UX Designer, or Interaction Designer.”
              </p>
            </blockquote>
            <div className="flex items-center mt-6">
              <img
                className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/7/avatar-male.png"
                alt=""
              />
              <div className="ml-4">
                <p className="text-base font-bold text-white font-pj">
                  Dianne Russell
                </p>
                <p className="text-sm font-pj text-gray-400 mt-0.5">
                  Marketing Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoial11;

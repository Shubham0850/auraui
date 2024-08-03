import React from "react";

function Testimoial2() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Don't just take our words. Over 1000+ people trust us.
          </h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none">
          <div className="bg-gray-100 rounded-2xl xl:-rotate-2">
            <div className="p-8">
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  "We love Landingfolio! Our designers were using it for their
                  projects, so clients already knew what Landingfolio was and
                  how to use it."
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900">
                Bessie Cooper
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                Co-Founder, CEO
              </p>
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                <img
                  className="w-auto h-7"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/alterbone.svg"
                  alt=""
                />
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-male-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl xl:rotate-2">
            <div className="p-8">
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  "I didn’t know designing in Figma could be this
                  individualized. I’d never considered it before, but
                  Landingfolio changed my mind."
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900">
                Albert Flores
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                Senior Product Manager
              </p>
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                <img
                  className="w-auto h-7"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/ridoria.svg"
                  alt=""
                />
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl xl:-rotate-2">
            <div className="p-8">
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  "We love Landingfolio! Our designers were using it for their
                  projects, so clients already knew what Landingfolio was and
                  how to use it."
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                Head of Marketing
              </p>
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                <img
                  className="w-auto h-7"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/incanto.svg"
                  alt=""
                />
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoial2;

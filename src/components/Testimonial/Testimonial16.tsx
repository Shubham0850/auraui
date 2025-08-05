import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { RxArrowTopRight } from "react-icons/rx";

const commonButtonClasses =
  "inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white pointer-events-auto h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20";
const commonTextClasses = "text-base font-semibold text-white";
const commonSubTextClasses = "mt-1 text-sm font-normal text-gray-300";

function Testimonial16() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Over 1000+ people trust us
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            AuraUI gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10">
          {[
            {
              imgSrc: "https://www.auraui.com/memeimage/woman-potrait.webp",
              name: "Albert Flores",
              title: "Founder of GearUp",
            },
            {
              imgSrc: "https://www.auraui.com/memeimage/woman-potrait-3.jpeg",
              name: "Leslie Alexander",
              title: "Co-Founder of Womenia",
            },
            {
              imgSrc: "https://www.auraui.com/memeimage/man-potrait.jpg",
              name: "Courtney Henry",
              title: "Founder of CH Beauty",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-2xl"
            >
              <img
                className="object-cover w-full transition-all duration-200 group-hover:scale-110 group-hover:-rotate-2"
                src={testimonial.imgSrc}
                alt=""
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={commonTextClasses}>{testimonial.name}</p>
                    <p className={commonSubTextClasses}>{testimonial.title}</p>
                  </div>

                  <button type="button" className={commonButtonClasses}>
                    <CiPlay1 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            title=""
            className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline"
          >
            See all reviews by our customers
            <RxArrowTopRight className="h-4 w-4 font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial16;

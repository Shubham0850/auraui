import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props = {};

const DynamicFeedback = (props: Props) => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
          <div className="flex justify-center">
            <img
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1589571894960-20bbe2828f32"
              alt="Testimonial"
            />
          </div>

          <div className="xl:pr-24">
            <div className="flex items-center mb-4">
              <FaQuoteLeft className="text-blue-600 text-3xl" />
              <img
                className="ml-3 w-auto h-7"
                src="https://via.placeholder.com/150"
                alt="Company Logo"
              />
              <FaQuoteRight className="ml-3 text-blue-600 text-3xl" />
            </div>

            <blockquote className="mt-8 md:mt-16">
              <p className="text-xl font-medium leading-relaxed text-gray-900">
                “Auraui transformed our digital presence. Their intuitive design
                and seamless integration have been game-changers for our
                business.”
              </p>
            </blockquote>

            <blockquote className="mt-5 md:mt-7">
              <p className="text-lg font-normal leading-relaxed text-gray-900">
                “The Auraui platform is incredibly user-friendly. Updates are
                instantaneous and the performance is unmatched.”
              </p>
            </blockquote>

            <p className="mt-5 text-base font-bold text-gray-400 md:mt-7">
              Alex Johnson, CTO at InnovateCorp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicFeedback;

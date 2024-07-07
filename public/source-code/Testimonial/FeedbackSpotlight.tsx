import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props = {};

const FeedbackSpotlight: React.FC<Props> = (props) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg"
              alt="Testimonial Avatar"
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote className="relative p-4 text-xl text-black bg-gray-100 rounded-lg shadow-lg">
              <FaQuoteLeft className="absolute w-6 h-6 text-blue-500 -top-3 -left-3" />
              <p>
                “Auraui made it incredibly easy to manage our projects. The
                interface is intuitive and the features are exactly what we
                needed.”
              </p>
              <FaQuoteRight className="absolute w-6 h-6 text-blue-500 -bottom-3 -right-3" />
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">
              Alex Johnson
            </p>
            <p className="mt-1 text-base text-gray-600">
              Lead Developer at TechCorp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSpotlight;

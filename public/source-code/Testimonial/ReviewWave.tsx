import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type Props = {};

const ReviewWave: React.FC<Props> = (props) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            className="object-cover w-32 h-32 mx-auto rounded-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
            alt="Mark Tanker"
          />
          <p className="mt-6 text-lg font-semibold text-black">
            Mark Tanker,{" "}
            <span className="font-normal text-gray-600">California</span>
          </p>
          <blockquote className="max-w-xl mx-auto mt-7">
            <FaQuoteLeft className="w-8 h-8 mx-auto text-blue-500" />
            <p className="mt-4 text-xl leading-relaxed text-black">
              “The level of professionalism and dedication was outstanding. They
              exceeded my expectations and delivered a fantastic product. Highly
              recommended!”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ReviewWave;

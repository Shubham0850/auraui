import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const ReviewDisplay: React.FC<Props> = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            <span className="border-b-4 border-yellow-400">
              Trusted by 1200+ world class businesses
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-16 text-center md:mt-24 md:grid-cols-2 gap-y-10 gap-x-24">
          <div>
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-8 h-8 text-orange-500" />
              ))}
            </div>
            <blockquote className="mt-7">
              <p className="text-xl leading-relaxed text-gray-800">
                “Auraui has transformed our workflow and increased our
                productivity significantly. We couldn't be happier with the
                results.”
              </p>
            </blockquote>
            <img
              className="w-auto h-8 mx-auto mt-6 md:mt-10"
              src="https://example.com/logo1.png"
              alt="Company Logo 1"
            />
          </div>

          <div>
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-8 h-8 text-orange-500" />
              ))}
            </div>
            <blockquote className="mt-7">
              <p className="text-xl leading-relaxed text-gray-800">
                “The support from Auraui has been phenomenal. They helped us
                every step of the way to ensure our success.”
              </p>
            </blockquote>
            <img
              className="w-auto h-8 mx-auto mt-6 md:mt-10"
              src="https://example.com/logo2.png"
              alt="Company Logo 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewDisplay;

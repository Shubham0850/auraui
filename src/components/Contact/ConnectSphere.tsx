import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define common styles
const style = {
  commonInputStyles:
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500",
  commonButtonStyles:
    "inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none bg-orange-500 hove:bg-orange-600",
  commonSectionStyles: "py-10 sm:py-16 lg:py-24",
  commonContainerStyles: "max-w-6xl px-4 mx-auto sm:px-6 lg:px-8",
  commonTitleStyles:
    "text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl",
  commonTextStyles:
    "max-w-xl mx-auto mt-4 text-base leading-relaxed text-white",
};

const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <FaStar key={index} className="w-6 h-6 text-yellow-400" />
    ))}
  </div>
);

const Testimonial = () => (
  <div>
    <StarRating />
    <blockquote className="mt-6">
      <p className="text-lg leading-relaxed text-white">
        Building my new site with AuraUI was a breeze! It's faster and easier
        now—I just pick a page, make changes, and hit save.
      </p>
    </blockquote>
    <div className="flex items-center mt-8">
      <div className="w-10 h-10 relative rounded-full overflow-hidden">
        <Image
          src="/memeimage/babubhaiya.jpg"
          alt="Babu Bhaiya"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="ml-4">
        <p className="text-base font-semibold text-white">Babu Bhaiya</p>
        <p className="mt-px text-sm text-gray-400">UI Developer</p>
      </div>
    </div>
  </div>
);

const Form = () => {
  return (
    <div className="overflow-hidden bg-white rounded-md">
      <div className="p-6 sm:p-10">
        <h3 className="text-3xl font-semibold text-black">Get a free quote</h3>
        <p className="mt-4 text-base text-gray-600">
          Fill all details about your Project
        </p>
        <form action="#" method="POST" className="mt-4">
          <div className="space-y-6">
            <input
              type="text"
              name="Your name"
              id="Your name"
              placeholder="Enter your name"
              className={style.commonInputStyles}
            />
            <input
              type="text"
              name="Email address"
              id="Email address"
              placeholder="Enter your email address"
              className={style.commonInputStyles}
            />
            <textarea
              name="Project brief"
              id="Project brief"
              placeholder="Enter your project brief"
              className={`${style.commonInputStyles} resize-y`}
              rows={4}
            />
            <button className={style.commonButtonStyles}>Get Free Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ConnectSphere = () => {
  return (
    <section className={`bg-gray-900 ${style.commonSectionStyles}`}>
      <div className={style.commonContainerStyles}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className={style.commonTitleStyles}>
                It's time to build something exciting!
              </h2>
              <p className={style.commonTextStyles}>
                Use Aura UI and start creating projects by copying and pasting
                codes.
              </p>
            </div>
            <div className="hidden md:mt-auto md:block">
              <Testimonial />
            </div>
          </div>
          <div className="lg:pl-12">
            <Form />
          </div>
          <div className="md:hidden">
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSphere;

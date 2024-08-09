import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    username: "@rahul_s",
    avatar: "/memeimage/boy1.jpeg",
    quote:
      "Aura UI made it so simple. My new site is so much faster and easier to work with than my old site. #easy_to_use",
  },
  {
    name: "Abhishek Singh",
    username: "@priya_singh",
    avatar: "/memeimage/girl3.webp",
    quote:
      "Simply the best. Better than all the rest. I'd recommend Aura UI to beginners and advanced users. #top_quality",
  },
  {
    name: "Ananya Patel",
    username: "@ananya_patel",
    avatar: "/memeimage/girl2.jpeg",
    quote:
      "Aura UI is fantastic! It's both fast and efficient, perfect for my needs. #super_fast",
  },
  {
    name: "Vikram Rao",
    username: "@vikram_rao",
    avatar: "/memeimage/udayshetty.jpg",
    quote:
      "Couldn't have asked for a better service. Aura UI is simply amazing. #amazing_service",
  },
];

const Testimonial22 = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our customers love Aura UI for its simplicity and ease of use.
            Here&apos;s what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <Image
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    width={40}
                    height={40}
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {testimonial.username}
                    </p>
                  </div>
                  {/* Replace the anchor tag with Twitter icon */}
                  <FaXTwitter className="w-6 h-6 ml-2 text-black cursor-pointer" />
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">{testimonial.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial22;

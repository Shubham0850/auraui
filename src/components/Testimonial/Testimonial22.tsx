import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const testimonials = [
  {
    name: "Rahul",
    username: "@rahul_s",
    avatar: "/memeimage/boy1.jpeg",
    quote:
      "AuraUI made it so simple. My new site is so much faster with AuraUI.",
  },
  {
    name: "Priya",
    username: "@priya_singh",
    avatar: "/memeimage/woman1.jpg",
    quote: "The best. I'd recommend AuraUI to beginners & advanced users.",
  },
  {
    name: "Ananya",
    username: "@ananya_patel",
    avatar: "/memeimage/girl2.jpeg",
    quote:
      "Aura UI is fantastic! It's both fast and efficient, perfect for my needs.",
  },
  {
    name: "Vikram",
    username: "@vikram_rao",
    avatar: "/memeimage/man4.jpg",
    quote:
      "Couldn't have asked for a better service. AuraUI is simply amazing.",
  },
];

const Testimonial22 = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 sm:py-20 lg:py-28">
      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -top-16 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-pink-200 via-yellow-200 to-red-200 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              customers
            </span>{" "}
            say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our customers love AuraUI for its simplicity and ease of use. Here’s
            what they have to say.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="px-6 py-6">
                <div className="flex items-center">
                  {/* Avatar */}
                  <img
                    className="object-cover w-12 h-12 rounded-full ring-2 ring-blue-500/40"
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                  />

                  {/* Name + Handle */}
                  <div className="ml-3 mr-auto">
                    <p className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.username}
                    </p>
                  </div>

                  {/* Twitter icon */}
                  <button className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100 hover:text-black">
                    <FaXTwitter className="w-5 h-5" />
                  </button>
                </div>

                {/* Quote */}
                <blockquote className="mt-5">
                  <p className="text-base italic leading-relaxed text-gray-800">
                    “{testimonial.quote}”
                  </p>
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

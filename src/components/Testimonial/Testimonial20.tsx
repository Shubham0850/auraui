import React from "react";
import { CgPlayButton } from "react-icons/cg";

function Testimonial20() {
  const imageSrc = "https://www.auraui.com/memeimage/woman3.jpg";
  const person = {
    name: "Jenny Wilson",
    position: "Senior Developer, AuraUI",
    quote:
      "auraUI has transformed our development process. The speed and ease of use are unparalleled. Updating our site is now a breeze, saving us time and effort at every step.",
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-yellow-200 via-pink-200 to-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-6xl px-6 mx-auto lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={imageSrc}
                alt="Jenny Wilson"
              />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center w-20 h-20 transition-all duration-300 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40"
              >
                <CgPlayButton className="w-12 h-12 text-purple-600" />
              </button>
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col justify-center">
            <blockquote className="relative">
              <p className="text-2xl leading-relaxed text-gray-900 sm:text-3xl lg:text-4xl font-medium">
                “{person.quote}”
              </p>
            </blockquote>

            <div className="mt-8">
              <p className="text-xl font-bold text-gray-900">{person.name}</p>
              <p className="mt-1 text-base text-gray-600">{person.position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial20;

import React from "react";
import { CgPlayButton } from "react-icons/cg";

function Testimonial20() {
  const imageSrc = "https://www.auraui.com/memeimage/woman3.jpg";
  const person = {
    name: "Jenny Wilson",
    position: "Senior Devloper, AuraUI",
    quote:
      "AuraUI has transformed our development process. The speed and ease of use are unparalleled. Updating our site is now a breeze, saving us time and effort at every step.",
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src={imageSrc}
                alt=""
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white/20">
                <button
                  type="button"
                  className="flex items-center justify-center w-20 h-20 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90"
                >
                  <CgPlayButton className="w-12 h-12" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between md:py-5">
            <blockquote>
              <p className="text-2xl mb-4 leading-relaxed text-black">
                {person.quote}
              </p>
            </blockquote>
            <div className="mt-6 lg:mt-auto">
              <p className="text-xl font-semibold text-black">{person.name}</p>
              <p className="mt-2 text-base text-gray-600">{person.position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial20;

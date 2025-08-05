import React from "react";
import { FaStar } from "react-icons/fa6";

function renderStars(count: number) {
  return Array.from({ length: count }, (_, index) => (
    <FaStar
      key={index}
      className="transition-transform duration-300 hover:scale-110 hover:text-yellow-400"
    />
  ));
}

const testimonials = [
  {
    text: "AuraUI is a game-changer for our front-end development. The components are easy to use and beautifully designed.",
    imgSrc: "https://www.auraui.com/logo-light.png",
  },
  {
    text: "Using AuraUI has significantly improved our workflow. The integration with Next.js is seamless!",
    imgSrc: "https://www.auraui.com/logo-light.png",
  },
];

const sharedClasses = {
  stars:
    "flex items-center justify-center gap-2 text-2xl text-yellow-500 drop-shadow-sm",
  quote: "mt-6 text-lg leading-relaxed text-gray-700 font-medium font-pj",
  img: "w-auto h-10 mx-auto mt-6 md:mt-10 transition-all duration-300 grayscale hover:grayscale-0",
};

function Testimonial19() {
  return (
    <section className="relative py-16 bg-white sm:py-20 lg:py-28">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-yellow-200 via-pink-200 to-blue-200 rounded-full opacity-30 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-200 via-pink-100 to-yellow-100 rounded-full opacity-30 blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="px-2 pb-1 border-b-4 border-yellow-400">
              Trusted by 1200+ world-class businesses
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 mt-16 text-center md:mt-24 md:grid-cols-2 gap-y-12 gap-x-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 transition-all duration-300 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={sharedClasses.stars}>{renderStars(5)}</div>

              <blockquote className={sharedClasses.quote}>
                <p>{testimonial.text}</p>
              </blockquote>

              <img
                className={sharedClasses.img}
                src={testimonial.imgSrc}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial19;

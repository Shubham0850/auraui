import React from "react";
import { FaStar } from "react-icons/fa6";

function renderStars(count: number) {
  return Array.from({ length: count }, (_, index) => <FaStar key={index} />);
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
  stars: "flex items-center gap-2 text-2xl text-orange-500",
  quote: "mt-7 text-xl leading-relaxed text-gray-800",
  img: "w-auto h-8 mx-auto mt-6 md:mt-10",
};

function Testimonial19() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            <span className="border-b-4 border-yellow-400">
              Trusted by 1200+ world-class businesses
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-16 text-center md:mt-24 md:grid-cols-2 gap-y-10 gap-x-24">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex items-center justify-center">
                <div className={sharedClasses.stars}>{renderStars(5)}</div>
              </div>
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

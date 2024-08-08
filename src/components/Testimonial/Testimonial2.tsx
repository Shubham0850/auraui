import React from "react";

const classNames = {
  container: "max-w-7xl mx-auto",
  header: "text-center",
  grid: "grid max-w-md mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none",
  card: "bg-gray-100 rounded-2xl p-8",
  footer:
    "flex items-center justify-between pt-5 mt-5 border-t border-gray-200",
};

const testimonials = [
  {
    quote:
      '"AuraUI has completely transformed our design workflow. The components are easy to use and integrate perfectly."',
    name: "Bessie Cooper",
    role: "Co-Founder, CEO",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/man1.jpg",
  },
  {
    quote:
      '"With AuraUI, designing in Figma became much more individualized and intuitive. It\'s a game-changer and components are easy to use"',
    name: "Albert Flores",
    role: "Senior Product Manager",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/woman1.jpg",
  },
  {
    quote:
      '"AuraUI has been instrumental in improving our marketing efforts. Our designs now have a polished, professional look."',
    name: "Jenny Wilson",
    role: "Head of Marketing",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/woman2.jpg",
  },
];

function Testimonial2() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className={`px-4 sm:px-6 lg:px-8 ${classNames.container}`}>
        <div className={`max-w-3xl mx-auto ${classNames.header}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Don&apos;t just take our words. Over 1000+ people trust us.
          </h2>
        </div>

        <div className={`grid-cols-1 gap-5 ${classNames.grid}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${classNames.card} ${
                index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
              }`}
            >
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  {testimonial.quote}
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                {testimonial.role}
              </p>
              <div className={classNames.footer}>
                <img
                  className="w-auto h-7"
                  src={testimonial.logoSrc}
                  alt={`${testimonial.name} logo`}
                />
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={testimonial.avatarSrc}
                  alt={`${testimonial.name} avatar`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial2;

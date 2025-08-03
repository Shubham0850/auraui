import React from "react";

const classNames = {
  container: "max-w-7xl mx-auto",
  header: "text-center",
  grid: "grid max-w-md mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none gap-8",
  card: "relative rounded-2xl p-8 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl",
  footer:
    "flex items-center justify-between pt-6 mt-6 border-t border-white/30",
};

const testimonials = [
  {
    quote:
      '"AuraUI has completely transformed our design workflow. The components are easy to use and integrate perfectly."',
    name: "Bessie Cooper",
    role: "Co-Founder, CEO",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/man1.jpg",
    bg: "bg-gradient-to-br from-fuchsia-50 to-pink-100",
  },
  {
    quote:
      '"With AuraUI, designing in Figma became much more individualized and intuitive. It\'s a game-changer and components are easy to use."',
    name: "Albert Flores",
    role: "Senior Product Manager",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/woman1.jpg",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    quote:
      '"AuraUI has been instrumental in improving our marketing efforts. Our designs now have a polished, professional look."',
    name: "Jenny Wilson",
    role: "Head of Marketing",
    logoSrc: "https://www.auraui.com/logo-light.png",
    avatarSrc: "https://www.auraui.com/memeimage/woman2.jpg",
    bg: "bg-gradient-to-br from-green-50 to-emerald-100",
  },
];

function Testimonial2() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className={`px-6 sm:px-8 lg:px-12 ${classNames.container}`}>
        {/* Header */}
        <div className={`max-w-3xl mx-auto ${classNames.header}`}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Don&apos;t just take our words.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-blue-600 to-indigo-600">
              Over 1000+ people trust us.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className={classNames.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${classNames.card} ${testimonial.bg} ${
                index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
              }`}
            >
              <blockquote>
                <p className="text-lg font-medium leading-relaxed text-gray-900">
                  {testimonial.quote}
                </p>
              </blockquote>

              <div className="mt-6">
                <p className="text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-gray-700">{testimonial.role}</p>
              </div>

              <div className={classNames.footer}>
                <img
                  className="w-auto h-7 opacity-80"
                  src={testimonial.logoSrc}
                  alt={`${testimonial.name} logo`}
                />
                <img
                  className="object-cover w-12 h-12 rounded-full ring-2 ring-white/50"
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

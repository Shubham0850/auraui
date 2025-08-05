import React from "react";

const testimonies = [
  {
    name: "Uday Shetty",
    position: "Frontend Developer at Tech Solutions",
    image: "https://www.auraui.com/memeimage/udayshetty.jpg",
    quote:
      "AuraUI is the best component library I've ever used. It's easy to integrate with Next.js. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    position: "UI/UX Designer at Creative Minds",
    image: "https://www.auraui.com/memeimage/girl2.jpeg",
    quote:
      "The ease of use and the variety of components in AuraUI is simply amazing. It made our development process much smoother.",
  },
  {
    name: "Majnu Bhai",
    position: "Software Engineer at Innovatech",
    image: "https://www.auraui.com/memeimage/majnubhai.jpeg",
    quote:
      "AuraUI has become an essential part of our toolkit. The components are top-notch and the integration is seamless.",
  },
];

const Testimonial21 = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-24 -left-24"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-pink-200 via-yellow-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-0 right-0"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              30k+
            </span>{" "}
            companies & design teams worldwide
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid max-w-xl grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-20 lg:grid-cols-3 gap-x-8 gap-y-10">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="relative p-8 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="object-cover w-24 h-24 mx-auto rounded-full ring-4 ring-offset-2 ring-blue-500/50"
                  src={testimony.image}
                  alt={testimony.name}
                />
              </div>

              {/* Quote */}
              <blockquote className="mt-7">
                <p className="text-lg italic text-gray-800">
                  “{testimony.quote}”
                </p>
              </blockquote>

              {/* Name + Role */}
              <p className="mt-8 text-lg font-semibold text-gray-900">
                {testimony.name}
              </p>
              <p className="mt-1 text-sm text-gray-600">{testimony.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial21;

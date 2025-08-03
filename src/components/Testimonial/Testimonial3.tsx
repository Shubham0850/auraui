import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    img: "https://www.auraui.com/memeimage/woman1.jpg",
    quote:
      "AuraUI transformed our workflow. The prebuilt components gave our projects a sleek, professional look instantly.",
    name: "Jenny Wilson",
    role: "Product Designer @ Grower.io",
  },
  {
    img: "https://www.auraui.com/memeimage/man1.jpg",
    quote:
      "Our dev team shipped projects twice as fast. AuraUI is the toolkit every frontend developer dreams of.",
    name: "Devon Lane",
    role: "Founder @ DLDesign.co",
  },
];

function Testimonial3() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-fuchsia-50 via-white to-blue-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-fuchsia-300/30 to-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl px-6 mx-auto lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 text-lg font-semibold">
            3900+ Developers trust AuraUI
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Real Stories. Real Impact.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-12 mt-20 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-10"
            >
              {/* Quote */}
              <blockquote className="text-xl italic font-medium text-gray-800 leading-relaxed">
                “{t.quote}”
              </blockquote>

              {/* Stars */}
              <div className="flex items-center justify-start mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Profile */}
              <div className="flex items-center mt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-fuchsia-200"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial3;

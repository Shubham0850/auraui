import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "AuraUI transformed our workflow. The prebuilt components gave our projects a sleek, professional look instantly.",
    name: "Jenny Wilson",
    role: "Product Designer @ Grower.io",
    imgSrc: "https://www.auraui.com/memeimage/woman2.jpg",
    color: "from-pink-500/30 to-purple-500/30",
  },
  {
    quote:
      "Our dev team shipped projects twice as fast. AuraUI is the toolkit every frontend developer dreams of.",
    name: "Devon Lane",
    role: "Founder @ DLDesign.co",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
    color: "from-blue-500/30 to-cyan-500/30",
  },
];

function Testimonial4() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
          Loved by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
            developers
          </span>{" "}
          worldwide
        </h2>

        <div className="grid gap-10 mt-16 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl border border-white/30 shadow-lg bg-white/20 backdrop-blur-xl transition-transform duration-500 hover:scale-105`}
            >
              {/* Glow Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${t.color} opacity-30 blur-2xl -z-10`}
              ></div>

              {/* Icon */}
              <FaQuoteLeft className="w-10 h-10 text-gray-700/70" />

              {/* Quote */}
              <blockquote className="mt-6">
                <p className="text-xl font-medium text-gray-900 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </blockquote>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white/60"
                  src={t.imgSrc}
                  alt={t.name}
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-700">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial4;

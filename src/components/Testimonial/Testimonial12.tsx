import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const commonTextClasses = "text-white font-pj";

function Testimonial12() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#0f0f1a] to-[#1a1027] py-20 sm:py-28">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {/* Text Content */}
          <div className="relative">
            {/* Decorative Quote Icon */}
            <FaQuoteLeft className="absolute -top-8 -left-6 text-6xl text-purple-500/30" />

            <blockquote className="relative bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 sm:p-10">
              <p
                className={`text-2xl sm:text-3xl font-normal leading-relaxed ${commonTextClasses}`}
              >
                “AuraUI made it incredibly easy. Our new site is more beautiful
                and user-friendly than ever. I simply select the page, make the
                changes, and it’s done!”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/50"
                  src="https://www.auraui.com/memeimage/manwithoutbg.png"
                  alt="John Doe"
                />
                <div>
                  <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-400">
                    Director of Technology, AuraUI Inc.
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full  transform rounded-full transition-transform duration-500 hover:scale-105"
              src="https://images.unsplash.com/photo-1655815666672-c03f67fc746a?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Testimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial12;

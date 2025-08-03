"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    imgSrc: "https://www.auraui.com/memeimage/man4.jpg",
    text: "AuraUI has transformed our development process with its elegant and highly customizable components. The seamless integration with Next.js is unmatched.",
    name: "Oliver James",
    role: "Lead Developer at AuraUI",
  },
  {
    imgSrc: "https://www.auraui.com/memeimage/woman1.jpg",
    text: "Implementing AuraUI's components into our project was a breeze. The performance is top-notch, and the open-source nature is a huge plus for our team.",
    name: "Emily Grace",
    role: "UX Designer at AuraUI",
  },
  {
    imgSrc: "https://www.auraui.com/memeimage/man3.jpg",
    text: "AuraUI’s components are a game-changer. They are intuitive and well-documented, making it easy to create beautiful and responsive designs quickly.",
    name: "James Alexander",
    role: "Frontend Engineer at AuraUI",
  },
  {
    imgSrc: "https://www.auraui.com/memeimage/woman2.jpg",
    text: "The support from the AuraUI team has been exceptional. The quality of the components is excellent, making our workflow smoother and more efficient.",
    name: "Charlotte Elizabeth",
    role: "Product Manager at AuraUI",
  },
];

function Testimonial9() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-[#0a0a0a] to-[#141414] overflow-hidden">
      {/* subtle glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

      <div className="relative px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl font-semibold sm:text-5xl md:text-6xl">
              See what
            </span>{" "}
            <span className="block font-serif italic text-5xl sm:inline sm:text-6xl md:text-7xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              our members
            </span>{" "}
            <span className="block font-sans text-4xl font-semibold sm:inline sm:text-5xl md:text-6xl">
              are saying
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 25px rgba(0,255,255,0.2), 0 0 45px rgba(168,85,247,0.15)",
              }}
              className="relative p-8 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-md transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial9;

"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "“AuraUI's components have significantly streamlined our development process. The performance optimizations are top-notch.”",
    name: "Arjun Patel",
    title: "Lead Developer at Tech Innovations",
  },
  {
    text: "“The design and functionality of AuraUI's library make it a breeze to integrate with our Next.js projects.”",
    name: "Ananya Sharma",
    title: "UX/UI Designer at Creative Studio",
  },
  {
    text: "“AuraUI provides a beautiful and high-performance set of components that have enhanced our user experience.”",
    name: "Ravi Kumar",
    title: "Product Manager at Web Solutions",
  },
  {
    text: "“With AuraUI, we’ve been able to deliver stunning websites faster than ever. Highly recommend!”",
    name: "Maya Gupta",
    title: "Front-End Engineer at StartUp Hub",
  },
  {
    text: "“The level of customization and ease of use with AuraUI is impressive. It’s become an essential tool for our team.”",
    name: "Siddharth Rao",
    title: "Full Stack Developer at DevWorks",
  },
  {
    text: "“AuraUI's components are not only visually appealing but also incredibly performant. Great for rapid development.”",
    name: "Nisha Desai",
    title: "Senior Developer at AppCraft",
  },
];

function Testimonial8() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-[#0a0a0a] to-[#141414] overflow-hidden">
      {/* floating gradient glows */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl font-semibold sm:text-5xl md:text-6xl">
              Recommended
            </span>
            <span className="block font-serif text-5xl italic sm:text-6xl md:text-7xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              by our members
            </span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative rounded-xl border border-white/10 bg-[#111111] p-8 shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6">
                <p className="font-sans text-lg sm:text-xl font-normal text-gray-200 leading-relaxed">
                  {review.text}
                </p>
              </blockquote>

              {/* Name + Title */}
              <p className="mt-6 font-sans text-lg font-semibold text-white">
                {review.name}
              </p>
              <p className="mt-1 font-sans text-sm font-normal text-gray-400">
                {review.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial8;

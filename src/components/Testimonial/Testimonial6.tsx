"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const classes = {
  section: "relative py-16 bg-black sm:py-20 lg:py-28 overflow-hidden",
  container: "px-6 mx-auto max-w-7xl lg:px-12 relative z-10",
  header: "text-center",
  heading: "text-sm font-medium tracking-[0.2em] text-gray-300 uppercase",
  grid: "grid max-w-6xl mx-auto mt-14 gap-12 md:grid-cols-2",
  card: "relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300",
  logo: "w-auto h-10 opacity-90",
  quote: "mt-8 text-xl font-light text-gray-200 leading-relaxed",
  linkWrapper:
    "inline-flex items-center mt-6 text-base font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200",
  arrow: "ml-2 w-4 h-4",
  glow: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-20",
};

function Testimonial6() {
  const testimonials = [
    {
      logo: "https://www.auraui.com/logo-dark.png",
      quote:
        "“AuraUI has been spotlighted for its innovative design and ease of use, making it a top choice for modern developers.”",
      link: "#",
    },
    {
      logo: "https://www.auraui.com/logo-dark.png",
      quote:
        "“The clean and versatile components of AuraUI make it an essential tool for rapid and efficient development.”",
      link: "#",
    },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.heading}>In the Media</p>
        </div>

        <div className={classes.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={classes.card}
            >
              <div className={classes.glow}></div>
              <img
                src={t.logo}
                alt="AuraUI media logo"
                className={classes.logo}
              />
              <blockquote>
                <p className={classes.quote}>{t.quote}</p>
              </blockquote>
              <a href={t.link} className={classes.linkWrapper}>
                Read the article
                <FaArrowRight className={classes.arrow} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}

export default Testimonial6;

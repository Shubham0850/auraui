"use client";
import React from "react";
import { motion } from "framer-motion";

const classes = {
  section: "py-16 lg:py-24 bg-black relative overflow-hidden",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  heading:
    "tracking-tighter text-white font-sans text-4xl sm:text-5xl md:text-6xl",
  subHeading:
    "block font-serif text-5xl italic sm:text-6xl md:text-7xl text-white",
  description:
    "font-sans text-lg font-normal leading-8 text-gray-400 max-w-md mx-auto lg:mx-0",
  grid: "grid max-w-md grid-cols-1 gap-8 mx-auto mt-14 lg:grid-cols-3 lg:mt-20 lg:max-w-none",
  card: "relative overflow-hidden rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl bg-white/5 group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 min-h-[420px]",
  img: "object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
  content: "absolute inset-x-0 bottom-0 p-6 sm:p-8",
  quote:
    "font-serif text-lg sm:text-xl italic leading-snug text-white drop-shadow-md xl:text-2xl",
  name: "mt-4 text-base font-medium text-gray-200 xl:mt-6",
  glow: "absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500",
};

function Testimonial7() {
  const testimonials = [
    {
      name: "Cymone Magdalina",
      image: "https://www.auraui.com/memeimage/woman-potrait.webp",
      quote:
        "“AuraUI’s design tools have significantly improved our project turnaround time, making our workflow more efficient.”",
    },
    {
      name: "Sophia Ella",
      image:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "“With AuraUI, our design team can quickly prototype and deploy high-quality components with ease.”",
    },
    {
      name: "Hyeon Vivek",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "“The versatility of AuraUI’s components has revolutionized our development process and enhanced our end products.”",
    },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Heading */}
        <div className="grid grid-cols-1 text-center gap-y-8 lg:text-left lg:grid-cols-6">
          <div className="lg:col-span-4">
            <h2 className={classes.heading}>
              Recommended{" "}
              <span className={classes.subHeading}>by our members</span>
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className={classes.description}>
              AuraUI provides an exceptional experience, enhancing design
              workflows and achieving greater efficiency in development.
            </p>
          </div>
        </div>

        {/* Members grid */}
        <div className={classes.grid}>
          {testimonials.map(({ name, image, quote }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={classes.card}
            >
              <div className={classes.glow}></div>
              <img src={image} alt={name} className={classes.img} />
              <div className={classes.gradientOverlay}></div>
              <div className={classes.content}>
                <blockquote>
                  <p className={classes.quote}>{quote}</p>
                </blockquote>
                <p className={classes.name}>{name}</p>
              </div>
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

export default Testimonial7;

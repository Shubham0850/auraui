"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight, FaArrowRight } from "react-icons/fa";

const classes = {
  section:
    "relative py-20 bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 overflow-hidden",
  container: "px-6 mx-auto max-w-7xl lg:px-12 relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
  card: "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-white",
  quoteIcon: "text-4xl text-pink-300 mb-6",
  quoteText: "text-2xl font-semibold leading-snug sm:text-3xl",
  description: "mt-4 text-lg text-gray-200",
  profile: "flex items-center gap-4 mt-8",
  avatar: "w-14 h-14 rounded-full object-cover border-2 border-pink-400",
  name: "text-lg font-bold",
  role: "text-sm text-gray-600",
  link: "inline-flex items-center text-sm font-semibold text-gray-600 transition-transform hover:scale-105",
  arrow: "ml-2 w-4 h-4",
  imgWrapper: "relative overflow-hidden rounded-3xl shadow-2xl h-[400px] group",
  img: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
};

const Testimonial5 = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={classes.grid}
        >
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={classes.imgWrapper}
          >
            <img
              className={classes.img}
              src="https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Testimonial"
            />
            <div className={classes.gradientOverlay}></div>
          </motion.div>

          {/* QUOTE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={classes.card}
          >
            <FaQuoteRight className={classes.quoteIcon} />
            <p className={classes.quoteText}>
              “AuraUI completely redefined how our team approaches design. We
              went from endless iterations to pixel-perfect results in days.”
            </p>
            <p className={classes.description}>
              With AuraUI, collaboration became seamless, and the prebuilt
              components gave us the confidence to ship faster than ever before.
            </p>

            <div className={classes.profile}>
              <img
                className={classes.avatar}
                src="https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Albert Flores"
              />
              <div>
                <p className={classes.name}>Albert Flores</p>
                <p className={classes.role}>Product Manager @ AuraUI</p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#" className={classes.link}>
                Read full success story{" "}
                <FaArrowRight className={classes.arrow} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating gradient shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Testimonial5;

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

const stats = [
  { label: "Design Kits", value: "25+" },
  { label: "Components", value: "500+" },
  { label: "Users", value: "20K+" },
];

const Cta10 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 bg-gradient-to-br from-[#06080f] via-[#0a0f1f] to-[#181a24] overflow-hidden">
      {/* Background radial grid glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[1000px] h-[1000px] bg-gradient-radial from-[#60efff20] via-transparent to-transparent rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-3xl px-8 py-14 sm:px-12 sm:py-16">
        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          Be the First to Experience
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#60efff] to-[#0061ff] text-transparent bg-clip-text mt-3"
        >
          AuraUI Pro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-gray-300 text-lg sm:text-xl"
        >
          Sign up to access exclusive UI kits, design systems and early
          features.
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 space-y-4"
        >
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-12 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-12 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:brightness-110 transition"
          >
            Join the Waitlist
          </button>
        </motion.form>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {stats.map((item, idx) => (
            <div key={idx} className="text-center px-6">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-gray-400 mt-1 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center space-x-5 text-gray-400"
        >
          {[FaXTwitter, FaFacebookF, FaInstagram, FaYoutube].map(
            (Icon, idx) => (
              <Icon
                key={idx}
                size={22}
                className="hover:text-white hover:scale-110 transition-transform cursor-pointer"
              />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Cta10;

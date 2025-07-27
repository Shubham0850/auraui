import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";

// Framer motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonStyle =
  "inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
const linkStyle =
  "inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-gray-100 rounded-full transition hover:bg-gray-200/10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1";

function Hero15() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white">
      {/* Background Blurred Glow */}
      <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-blue-600 opacity-30 blur-[160px] -translate-x-1/2 pointer-events-none" />

      <header className="py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <a href="#" title="AuraUI">
              <img
                className="w-auto h-8"
                src="https://www.auraui.com/logo-dark.png"
                alt="AuraUI Logo"
              />
            </a>

            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {["Products", "Features", "Pricing", "Support"].map((link) => (
                <a key={link} href="#" className={linkStyle}>
                  {link}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <a
                href="#"
                className={`${buttonStyle} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`}
              >
                Start Free Trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button type="button" aria-expanded="false">
                <HiOutlineBars3 className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 lg:py-32">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl grid items-center lg:grid-cols-2 gap-y-16 gap-x-16">
          {/* Left content */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-white leading-tight">
              Transform Your Great Web Presence with AuraUI
            </h1>
            <p className="mt-6 text-lg leading-7 text-slate-300 lg:text-xl">
              AuraUI provides innovative tools and components to craft a
              professional and modern web experience quickly and efficiently.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className={`${buttonStyle} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`}
              >
                Explore AuraUI
              </a>
            </div>

            <ul className="mt-10 space-y-4 text-slate-200">
              {[
                "Access to cutting-edge design components.",
                "Create stunning web experiences in minutes.",
                "Built for developers seeking high performance.",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <AiOutlineCheck className="w-6 h-6 mr-3 text-indigo-500" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right image/testimonial */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none -mt-12 lg:-mt-32">
              {/* Image */}
              <img
                className="w-full md:scale-125"
                src="https://www.auraui.com/memeimage/manwithoutbg.png"
                alt="AuraUI Testimonial"
              />

              {/* Testimonial Box */}
              <div className="absolute right-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-xl rounded-2xl  p-6 border border-gray-700 max-w-2xl">
                <blockquote className="text-white">
                  <p className="text-sm sm:text-base leading-relaxed text-white/90">
                    “AuraUI has revolutionized our web design process. The
                    components are incredibly intuitive and have significantly
                    streamlined workflow.”
                  </p>
                  <footer className="mt-4">
                    <p className="font-semibold text-white">Jamie Lee</p>
                    <p className="text-sm text-gray-400">
                      Lead Designer – Web Innovations
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero15;

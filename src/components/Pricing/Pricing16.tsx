import React from "react";
import { FaStar, FaCheck, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Pricing16 = () => {
  const features = [
    "1 Domain License",
    "Full Celebration Library",
    "120+ Coded Blocks",
    "Design Files Included",
    "Premium Support",
  ];

  return (
    <section className="relative py-20 bg-gray-900 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-30 blur-sm"
        style={{
          background:
            "linear-gradient(135deg, #44ff9a, #44b0ff, #8b44ff, #ff6644, #ebff70)",
        }}
      ></div>

      <div className="relative max-w-6xl px-6 mx-auto sm:px-8 lg:px-12">
        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
          {/* Left Side - Testimonial & Heading */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl font-pj">
                Get thousands of web components with{" "}
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AuraUI
                </span>
              </h2>
            </div>

            <div className="mt-10">
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar
                      key={index}
                      className="w-6 h-6 text-yellow-400 drop-shadow"
                    />
                  ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-gray-200 sm:text-xl font-medium">
                  “AuraUI made my workflow so much faster and cleaner. I can
                  build pages in minutes with pre-coded blocks. This is a true
                  game-changer for developers.”
                </p>
              </blockquote>

              <div className="flex items-center mt-8">
                <Image
                  className="flex-shrink-0 object-cover w-12 h-12 rounded-full ring-2 ring-white/40"
                  src="https://www.auraui.com/memeimage/majnubhai.jpeg"
                  alt="Majnu Bhai"
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-white">
                    Majnu Bhai
                  </p>
                  <p className="mt-px text-sm text-gray-400">Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Card */}
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl opacity-50 blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, #44ff9a, #44b0ff, #8b44ff, #ff6644, #ebff70)",
              }}
            ></div>
            <div className="relative z-10 p-10 bg-white shadow-2xl rounded-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300">
              <h3 className="text-xs font-semibold tracking-widest text-purple-600 uppercase">
                Single Pack
              </h3>
              <p className="mt-4 text-6xl font-extrabold text-gray-900">$99</p>
              <p className="mt-1 text-gray-500 text-sm">
                One-time payment, lifetime access
              </p>

              <ul className="flex flex-col mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center text-gray-800"
                  >
                    <FaCheck className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 text-base font-bold text-white transition-all duration-200 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90 shadow-lg"
                href="#"
              >
                Get full access
              </Link>

              <div className="flex items-center mt-6">
                <FaLock className="w-4 h-4 text-gray-500" />
                <span className="ml-2 text-sm text-gray-500">
                  30-day money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing16;

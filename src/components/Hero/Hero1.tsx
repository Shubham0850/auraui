import React from "react";
import { FaCheck } from "react-icons/fa";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
    <FaCheck className="w-5 h-5 mr-3 text-green-400" />
    <span className="text-sm font-medium text-gray-200 sm:text-base">
      {text}
    </span>
  </div>
);

function Hero1() {
  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
          {/* Floating shapes for visual interest */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <section className="relative py-20 sm:py-24 lg:py-32 flex items-center min-h-screen">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl animate-fade-in-up">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  AuraUI
                </span>{" "}
                Empowering Developers to Succeed
              </h1>
              <p
                className="max-w-2xl mx-auto mt-8 text-lg font-normal leading-8 text-gray-200 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                AuraUI helps developers achieve their career goals with
                insightful articles, industry news, and more. Join our community
                today and accelerate your development journey!
              </p>
              <form
                className="max-w-lg mx-auto mt-12 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-6 py-4 text-lg font-medium text-white placeholder-gray-300 border border-gray-600 rounded-xl sm:text-base focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="relative group">
                  <div className="absolute transition-all duration-500 opacity-75 inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:blur-md"></div>
                  <button
                    type="submit"
                    className="inline-flex relative items-center justify-center w-full sm:w-auto px-10 py-4 text-lg sm:text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 border-0 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 hover:shadow-2xl"
                  >
                    🚀 Join Now
                  </button>
                </div>
              </form>
              <div
                className="flex items-center justify-center mt-12 space-x-8 sm:space-x-12 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <FeatureItem text="📈 Weekly new articles" />
                <FeatureItem text="👥 Join other 1600+ Devs" />
              </div>

              {/* Stats section */}
              <div
                className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-4 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1600+</div>
                  <div className="text-sm text-gray-300">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-300">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero1;

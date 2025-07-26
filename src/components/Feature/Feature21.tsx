import React from "react";
import { FaChartLine, FaFilter, FaBolt, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    title: "Predictive Insights",
    description:
      "Auraui offers advanced predictive insights to help you make informed decisions and enhance your strategies with ease.",
    bg: "bg-blue-100",
  },
  {
    icon: <FaFilter className="w-6 h-6 text-purple-600" />,
    title: "Filtered Data",
    description:
      "Efficiently filter and analyze your data with Auraui to extract meaningful insights and drive better outcomes.",
    bg: "bg-purple-100",
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-500" />,
    title: "Fastest Speed",
    description:
      "Experience lightning-fast performance with Auraui, ensuring your workflows are optimized and highly efficient.",
    bg: "bg-yellow-100",
  },
  {
    icon: <FaCloud className="w-6 h-6 text-teal-600" />,
    title: "Everything in Cloud",
    description:
      "Auraui leverages cloud technology to provide seamless access to your data, ensuring you stay connected and productive from anywhere.",
    bg: "bg-teal-100",
  },
];

const Feature21 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Take the next step without any hassle & get results fast
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:ring-2 hover:ring-gray-100"
            >
              {/* Icon with Circle Background */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.bg}`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature21;

import React from "react";
import { FaChartLine, FaFilter, FaBolt, FaCloud } from "react-icons/fa";

// Common styles
const commonStyles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading:
    "text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  grid: "grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left",
  card: "overflow-hidden bg-white shadow-md rounded-xl p-9",
  icon: "w-12 h-12 mx-auto text-gray-400 sm:mx-0",
  title: "mt-8 text-2xl font-bold text-gray-900 font-pj",
  description: "mt-6 text-base text-gray-600 font-pj",
};

const features = [
  {
    icon: <FaChartLine />,
    title: "Predictive Insights",
    description:
      "Auraui offers advanced predictive insights to help you make informed decisions and enhance your strategies with ease.",
  },
  {
    icon: <FaFilter />,
    title: "Filtered Data",
    description:
      "Efficiently filter and analyze your data with Auraui to extract meaningful insights and drive better outcomes.",
  },
  {
    icon: <FaBolt />,
    title: "Fastest Speed",
    description:
      "Experience lightning-fast performance with Auraui, ensuring your workflows are optimized and highly efficient.",
  },
  {
    icon: <FaCloud />,
    title: "Everything in Cloud",
    description:
      "Auraui leverages cloud technology to provide seamless access to your data, ensuring you stay connected and productive from anywhere.",
  },
];

const Feature21 = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className={commonStyles.heading}>
            Take the next step without any hassle & get results fast
          </h2>
        </div>

        <div className={commonStyles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={commonStyles.card}>
              <div className={commonStyles.icon}>{feature.icon}</div>
              <h3 className={commonStyles.title}>{feature.title}</h3>
              <p className={commonStyles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature21;

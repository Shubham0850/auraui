import React from "react";
import {
  FaChartLine,
  FaUserAlt,
  FaEnvelope,
  FaBrush,
  FaComments,
} from "react-icons/fa";

// Common styles
const commonStyles = {
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headingWrapper: "max-w-2xl mx-auto text-center",
  subheading: "text-sm font-normal tracking-widest uppercase",
  gradientText:
    "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500",
  heading:
    "mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  description: "mt-6 text-lg font-normal text-gray-400",
  grid: "grid max-w-4xl grid-cols-2 mx-auto mt-12 text-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 sm:mt-16 lg:mt-20 sm:gap-x-12",
  card: "flex flex-col items-center",
  iconWrapper: "relative w-24 h-24 rounded-xl group",
  iconBackground:
    "absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-cyan-500 to-purple-500",
  iconContainer:
    "relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900",
  icon: "w-12 h-12 text-white transition-all duration-200 group-hover:text-white",
  title: "mt-6 text-lg font-normal text-white",
};

const features = [
  {
    icon: <FaChartLine className={commonStyles.icon} />,
    title: "Daily Analytics",
  },
  {
    icon: <FaUserAlt className={commonStyles.icon} />,
    title: "Unlimited User",
  },
  {
    icon: <FaEnvelope className={commonStyles.icon} />,
    title: "Email Alerts",
  },
  {
    icon: <FaBrush className={commonStyles.icon} />,
    title: "Custom Themes",
  },
  {
    icon: <FaComments className={commonStyles.icon} />,
    title: "Chat Service",
  },
];

const Feature22 = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.headingWrapper}>
          <p className={commonStyles.subheading}>
            <span className={commonStyles.gradientText}>
              What&apos;s inside Auraui
            </span>
          </p>
          <h2 className={commonStyles.heading}>
            Your ultimate frontend development toolkit
          </h2>
          <p className={commonStyles.description}>
            Auraui simplifies the development of modern web applications,
            providing everything from reusable components to optimized workflows
            for developers.
          </p>
        </div>

        <div className={commonStyles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={commonStyles.card}>
              <div className={commonStyles.iconWrapper}>
                <div className={commonStyles.iconBackground}></div>
                <div className={commonStyles.iconContainer}>{feature.icon}</div>
              </div>
              <h3 className={commonStyles.title}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature22;

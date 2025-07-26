import React from "react";
import { FaUsers, FaRocket } from "react-icons/fa";
import Link from "next/link";

const iconStyles = "text-white w-10 h-10";

const features = [
  {
    icon: <FaUsers className={iconStyles} />,
    title: "Auraui Community",
    description:
      "Join the vibrant Auraui community, where developers collaborate to build cutting-edge web interfaces.",
  },
  {
    icon: <FaRocket className={iconStyles} />,
    title: "Rapid Development",
    description:
      "Accelerate your development process with Auraui's optimized components and responsive design.",
  },
  {
    icon: <FaUsers className={iconStyles} />,
    title: "Collaborative Projects",
    description:
      "Work on collaborative projects and contribute to the growing library of Auraui components.",
  },
  {
    icon: <FaRocket className={iconStyles} />,
    title: "Innovative Tools",
    description:
      "Utilize Auraui's innovative tools to create sleek and modern web applications with ease.",
  },
];

function Feature7() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-20">
          {/* Left Column */}
          <div>
            <h2 className="text-white tracking-tight">
              <span className="block text-4xl md:text-5xl font-light">
                Accelerate Your Development with
              </span>
              <span className="block text-5xl md:text-6xl font-serif italic mt-2">
                auraui components
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Auraui provides a suite of powerful and responsive components,
              enabling developers to create modern web applications with ease
              and efficiency.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition-all text-lg font-medium"
              >
                <FaRocket className="w-5 h-5" />
                Watch trailer
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:bg-gray-900 hover:shadow-md"
              >
                <div>{feature.icon}</div>
                <h3 className="text-white text-xl font-semibold mt-4">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature7;

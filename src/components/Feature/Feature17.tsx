import React from "react";
import { FaCopy, FaCogs, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaCopy className="w-6 h-6 text-green-600" />,
    title: "Simply Copy & Paste",
    description:
      "Auraui provides ready-to-use components that can be easily integrated into your project, saving time and effort.",
    bg: "bg-green-100",
  },

  {
    icon: <FaHeart className="w-6 h-6 text-red-500" />,
    title: "Built with Love and TailwindCSS",
    description:
      "Crafted with precision, Auraui uses TailwindCSS to deliver modern, responsive, and flexible components.",
    bg: "bg-red-100",
  },
];

const Feature17: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-28">
      <div className="max-w-7xl px-6 mx-auto lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            130+ Custom UI Components
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-black">
            auraui helps you build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              stunning, modern interfaces
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 mt-16 lg:grid-cols-5">
          {/* Features List */}
          <div className="space-y-10 lg:col-span-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-5 rounded-xl bg-gray-100 shadow-lg hover:bg-gray-200 transition duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${feature.bg}`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="lg:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1659018966825-43297e655ccf?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Auraui dashboard preview"
              className="w-full rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature17;

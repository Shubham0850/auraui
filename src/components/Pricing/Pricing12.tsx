import React from "react";
import { FaCloud, FaCode, FaComments, FaCheckCircle } from "react-icons/fa";

const Pricing12 = () => {
  const plans = [
    {
      title: "Basic",
      description: "Perfect for personal projects and small teams",
      price: 49,
      features: ["50GB Cloud Storage", "Single API Access", "Basic Support"],
      icon: (
        <FaCloud className="w-6 h-6 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
      ),
      buttonColor:
        "bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg",
    },
    {
      title: "Pro",
      description: "Advanced features for growing businesses",
      price: 99,
      features: [
        "200GB Cloud Storage",
        "Advanced API Access",
        "Priority Support",
      ],
      icon: (
        <FaCode className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
      ),
      buttonColor:
        "bg-purple-500 hover:bg-purple-600 text-white shadow-md hover:shadow-lg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Discover auraUI
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our innovative plans and features tailored for modern web
            development.
          </p>
        </div>

        {/* Pricing Container with Glow */}
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="absolute -inset-6">
            <div
              className="w-full h-full opacity-40 blur-2xl rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-xl">
            <div className="p-8 md:px-12 md:py-12">
              <div className="grid gap-8 md:grid-cols-2">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                      {plan.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-end justify-center space-x-1">
                      <span className="text-lg font-semibold text-gray-400">
                        $
                      </span>
                      <span className="text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg font-semibold text-gray-400">
                        /month
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 text-gray-700 text-sm w-full">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center md:justify-start"
                        >
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`mt-8 px-6 py-3 w-full font-semibold text-base rounded-xl transition ${plan.buttonColor}`}
                    >
                      Start Free Trial
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing12;

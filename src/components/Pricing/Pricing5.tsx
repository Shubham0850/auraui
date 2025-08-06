import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const plans = [
  {
    icon: <RiVipCrownFill className="w-12 h-12 text-cyan-400 drop-shadow-md" />,
    title: "Basic",
    description: "Essential features to get started with AuraUI.",
    price: "$49/month",
    features: [
      "Full Access to AuraUI Platform",
      "100 GB Free Storage",
      "Unlimited Visitors",
      "5 Team Members",
      "24/7 Customer Support",
    ],
    buttonText: "Learn More",
    buttonStyle:
      "inline-flex cursor-pointer items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 hover:scale-[1.02]",
  },
  {
    icon: <GiTrophyCup className="w-12 h-12 text-purple-400 drop-shadow-md" />,
    title: "Professional",
    description: "Advanced features to elevate your business with AuraUI.",
    price: "$199/month",
    features: [
      "Full Access to AuraUI Platform",
      "500 GB Free Storage",
      "Unlimited Visitors",
      "20 Team Members",
      "24/7 Priority Support",
    ],
    buttonText: "Learn More",
    buttonStyle:
      "inline-flex items-center cursor-pointer justify-center w-full px-6 py-4 text-base font-medium text-black transition-all duration-200 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg hover:opacity-90 hover:scale-[1.02]",
  },
  {
    icon: (
      <RiVipCrownFill className="w-12 h-12 text-indigo-400 drop-shadow-md" />
    ),
    title: "Enterprise",
    description:
      "Premium features and dedicated support for large-scale needs.",
    price: "Contact us for pricing",
    features: [
      "Full Access to AuraUI Platform",
      "Unlimited Storage",
      "Unlimited Visitors",
      "Unlimited Team Members",
      "Dedicated Account Manager",
    ],
    buttonText: "Contact Us",
    buttonStyle:
      "cursor-pointer inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-black transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:opacity-90 hover:scale-[1.02]",
  },
];

const Pricing5 = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black sm:py-24 lg:py-28">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/30 blur-[180px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[180px] rounded-full"></div>
      </div>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Choose the Plan that Fits Your Needs
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg font-normal text-gray-400 sm:text-xl">
            Discover the best plan for you with our tailored pricing options.
            Enjoy premium features and exceptional support with AuraUI.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center justify-center mt-10 overflow-hidden rounded-full border border-gray-800 sm:mt-14">
            <div className="cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-cyan-400 to-purple-500 hover:contrast-150 rounded-l-full">
              Monthly
            </div>
            <div className="inline-flex cursor-pointer items-center justify-center px-8 py-3 text-base font-medium text-gray-300 transition-all duration-200 bg-black hover:bg-gray-900 rounded-r-full">
              Yearly
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="relative max-w-md mx-auto mt-16 lg:max-w-none">
          <div className="relative grid grid-cols-1 border border-gray-800 lg:grid-cols-3 rounded-xl overflow-hidden">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 bg-black/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  index !== 0 ? "lg:border-l border-t border-gray-800" : ""
                }`}
              >
                <div className="flex-1">
                  {plan.icon}
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-base font-normal text-gray-400">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-base text-gray-200"
                      >
                        <FaCheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <p className="mt-10 text-xl font-semibold text-gray-100">
                    {plan.price.startsWith("Contact")
                      ? plan.price
                      : `Starting from ${plan.price}`}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button className={plan.buttonStyle}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing5;

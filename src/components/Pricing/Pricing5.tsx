import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const plans = [
  {
    icon: <RiVipCrownFill className="w-10 h-10 text-cyan-500" />,
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
      "inline-flex cursor-pointer items-center justify-center w-full px-5 py-4 text-base text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800",
  },
  {
    icon: <GiTrophyCup className="w-10 h-10 text-cyan-500" />,
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
      "inline-flex items-center cursor-pointer justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80",
  },
  {
    icon: <RiVipCrownFill className="w-10 h-10 text-cyan-500" />,
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
      "cursor-pointer inline-flex items-center justify-center w-full px-5 py-4 text-base text-black transition-all duration-200 bg-white border border-transparent rounded-md hover:opacity-80",
  },
];

const Pricing5 = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Choose the Plan that Fits Your Needs
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg font-normal text-gray-400">
            Discover the best plan for you with our tailored pricing options.
            Enjoy premium features and exceptional support with AuraUI.
          </p>
          <div className="inline-flex items-center justify-center mt-8 overflow-hidden border border-gray-800 rounded-md sm:mt-12">
            <div className="cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150">
              Monthly
            </div>
            <div className="inline-flex cursor-pointer items-center justify-center px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black hover:bg-gray-900">
              Yearly
            </div>
          </div>
        </div>
        <div className="relative max-w-md mx-auto mt-12 sm:mt-16 lg:max-w-none">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full opacity-50"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
              alt="Background Pattern"
            />
          </div>
          <div className="relative grid grid-cols-1 border border-gray-900 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-6 bg-black ${
                  index !== 0 ? "lg:border-l border-t border-gray-900" : ""
                } ${
                  index === 1
                    ? "bg-opacity-70 backdrop-blur-lg"
                    : "lg:border-t-0"
                } sm:p-8`}
              >
                <div className="flex-1">
                  {plan.icon}
                  <h3 className="mt-8 text-2xl font-normal text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-3 text-base font-normal text-gray-400">
                    {plan.description}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-base font-normal text-white"
                      >
                        <FaCheckCircle className="w-5 h-5 text-gray-500" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-10 text-xl font-normal text-gray-100">
                    {plan.price.startsWith("Contact")
                      ? plan.price
                      : `Starting from ${plan.price}`}
                  </p>
                </div>
                <div className="mt-6">
                  <div className={plan.buttonStyle}>{plan.buttonText}</div>
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

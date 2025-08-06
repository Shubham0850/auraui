import React from "react";
import { FiCheckCircle, FiMoon, FiStar, FiAward } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

function Pricing1() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      features: [
        "Access to AuraUI Components",
        "100 GB Free Storage",
        "Unlimited Visitors",
        "10 Team Members",
        "Community Support",
      ],
      buttonLabel: "Start for Free",
      buttonText: "No credit card required",
    },
    {
      name: "Standard",
      price: "$29",
      features: [
        "Full Access to AuraUI Library",
        "500 GB Storage",
        "Unlimited Visitors",
        "30 Team Members",
        "Priority Support",
      ],
      buttonLabel: "Start 14 days Trial",
      buttonText: "No credit card required",
      popular: true,
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Full Access to AuraUI",
        "1 TB Storage",
        "Unlimited Visitors",
        "Unlimited Team Members",
        "Dedicated Support",
      ],
      buttonLabel: "Get Started",
      buttonText: "No credit card required",
    },
    {
      name: "Pro+",
      price: "$99",
      features: [
        "Full Access to AuraUI",
        "Unlimited Storage",
        "Unlimited Visitors",
        "Unlimited Team Members",
        "Dedicated Support",
      ],
      buttonLabel: "Get Started",
      buttonText: "No credit card required",
    },
  ];

  const renderFeatureIcon = () => (
    <FiCheckCircle className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
  );

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 sm:py-20 lg:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Scalable Plans for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:mt-6">
            AuraUI provides you with the tools you need to build stunning
            websites, landing pages, or admin panels effortlessly.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full p-8 rounded-2xl shadow-sm transition-all duration-500 group ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white scale-105 shadow-lg"
                  : "bg-white border border-gray-200 hover:shadow-xl"
              } hover:scale-[1.02]`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute inset-x-0 -top-4 flex justify-center">
                  <span className="px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase bg-blue-500 rounded-full shadow-md animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-100 shadow-inner">
                {index === 0 ? (
                  <FiMoon className="w-7 h-7 text-blue-600" />
                ) : index === 1 ? (
                  <FiStar className="w-7 h-7 text-yellow-400" />
                ) : index === 2 ? (
                  <FiAward className="w-7 h-7 text-purple-600" />
                ) : (
                  <MdVerified className="w-7 h-7 text-green-600" />
                )}
              </div>

              {/* Title & Price */}
              <h3
                className={`mt-6 text-xl font-semibold ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-6 text-5xl font-bold ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`mt-1 text-sm ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                per month
              </p>

              {/* Features */}
              <ul
                className={`mt-8 space-y-4 text-left text-base flex-1 ${
                  plan.popular ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group">
                    {renderFeatureIcon()}
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium transition-all duration-300 rounded-xl shadow-md ${
                    plan.popular
                      ? "text-blue-600 bg-white hover:bg-gray-100"
                      : "text-gray-900 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.buttonLabel}
                </a>
              </div>

              {/* Note */}
              <p
                className={`mt-5 text-sm ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.buttonText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing1;

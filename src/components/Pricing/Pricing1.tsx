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
      buttonLabel: "Start 14 Days Trial",
      buttonText: "No credit card required",
      popular: true,
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Full Access to AuraUI ",
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
    <FiCheckCircle className="w-5 h-5 mr-2 text-blue-600 shrink-0" />
  );

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Scalable Plans for Growing Businesses
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            AuraUI provides you with the tools you need to build stunning
            websites, landing pages, or admin panels effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 text-center sm:grid-cols-2 xl:grid-cols-4 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 sm:mt-16 lg:mt-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border ${
                plan.popular ? "border-blue-600" : "border-gray-200"
              } rounded-2xl sm:rounded-3xl`}
            >
              {plan.popular && (
                <div className="absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex px-4 py-1 text-xs font-semibold tracking-widest text-white uppercase bg-blue-600 rounded-full ring-4 ring-white">
                      Popular choice
                    </span>
                  </div>
                </div>
              )}

              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                  {index === 0 ? (
                    <FiMoon className="w-6 h-6 text-blue-600" />
                  ) : index === 1 ? (
                    <FiStar className="w-6 h-6 text-blue-600" />
                  ) : index === 2 ? (
                    <FiAward className="w-6 h-6 text-blue-600" />
                  ) : (
                    <MdVerified className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-6 text-5xl font-semibold text-gray-900">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm font-normal text-gray-500">
                  per month
                </p>
                <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {renderFeatureIcon()}
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium transition-all duration-200 rounded-xl ${
                      plan.popular
                        ? "text-white bg-blue-600 hover:bg-blue-700"
                        : "text-gray-900 border border-gray-300 hover:bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                      plan.popular ? "blue-700" : "gray-300"
                    }`}
                  >
                    {plan.buttonLabel}
                  </a>
                </div>
                <p className="mt-5 text-sm font-normal text-gray-500">
                  {plan.buttonText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing1;

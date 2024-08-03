import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoRocketSharp, IoFlashSharp, IoEyeSharp } from "react-icons/io5";

const commonStyles = "flex items-center text-base font-medium text-gray-900";
const pricingPlans = [
  {
    title: "Startup",
    description: "Ideal for small teams and startups",
    price: 99,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Limited Reporting",
      "Custom Domain",
    ],
    icon: <IoRocketSharp className="text-4xl" />,
    buttonColor: "bg-gray-100",
    buttonTextColor: "text-gray-900",
  },
  {
    title: "Agency",
    description: "Best for growing agencies",
    price: 199,
    features: [
      "Everything from Startup",
      "10 Domain Licenses",
      "20 Email Accounts",
      "Advanced Reporting",
      "Custom Domain",
      "Priority Support",
    ],
    icon: <IoFlashSharp className="text-4xl" />,
    buttonColor: "bg-gray-900",
    buttonTextColor: "text-white",
    badge: "Most Popular",
  },
  {
    title: "Developer",
    description: "Designed for independent developers",
    price: 69,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Limited Reporting",
      "Custom Domain",
    ],
    icon: <IoEyeSharp className="text-4xl" />,
    buttonColor: "bg-gray-100",
    buttonTextColor: "text-gray-900",
  },
];

const Pricing10 = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Find the perfect plan for your needs
          </h2>
          <p className="mt-6 text-base text-gray-600">
            Choose a plan that fits your business needs and enjoy a suite of
            features to elevate your experience with Auraui.
          </p>
        </div>

        <div className="grid gap-y-6 mt-8 md:mt-16 md:grid-cols-3 max-w-md mx-auto md:max-w-5xl">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg p-6 ${
                plan.title === "Agency" ? "ring-2 ring-gray-900" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 bg-gray-700 text-center py-2 text-xs font-bold text-white uppercase">
                  {plan.badge}
                </div>
              )}
              <div className="text-center">
                {plan.icon}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <div className="flex items-end justify-center mt-6">
                  <span className="text-lg font-bold text-gray-400">$</span>
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg font-bold text-gray-400">/year</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center ${
                      idx >= 3 ? "text-gray-400" : ""
                    }`}
                  >
                    <AiOutlineCheckCircle className="w-5 h-5 mr-2.5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className={`block w-full px-4 py-3 text-base font-bold transition-colors duration-200 ${plan.buttonColor} ${plan.buttonTextColor} border border-transparent rounded-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                >
                  Start 14 Days Trial
                </a>
                <p className="mt-4 text-sm text-gray-600">
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-md mx-auto text-base text-center text-gray-500">
          Enjoy peace of mind with our transparent pricing and no hidden fees.
        </p>
      </div>
    </section>
  );
};

export default Pricing10;

import React from "react";
import { FaCloud, FaCode, FaComments } from "react-icons/fa";

const Pricing12 = () => {
  const plans = [
    {
      title: "Basic",
      description: "Perfect for personal projects and small teams",
      price: 49,
      features: ["50GB Cloud Storage", "Single API Access", "Basic Support"],
      icon: <FaCloud className="w-5 h-5 text-gray-900" />,
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
      icon: <FaCode className="w-5 h-5 text-gray-900" />,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h2 className="ml-3 text-6xl font-bold text-gray-900">
              Discover AuraUI
            </h2>
          </div>
          <p className="mt-4 text-base font-medium text-gray-600">
            Explore our innovative plans and features tailored for modern web
            development.
          </p>
        </div>

        <div className="relative max-w-sm mx-auto mt-8 md:mt-12 md:max-w-3xl">
          <div className="absolute -inset-4">
            <div
              className="w-full h-full opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div className="p-6 md:px-10 md:py-9">
              <div className="flex flex-wrap gap-8 justify-center">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow-lg w-full max-w-xs"
                  >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full">
                      {plan.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-lg font-bold text-gray-900">
                        {plan.title}
                      </p>
                      <p className="mt-1 text-sm font-normal text-gray-600">
                        {plan.description}
                      </p>
                      <div className="mt-4 flex items-center justify-center ">
                        <span className="text-lg font-bold text-gray-400">
                          $
                        </span>
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-lg font-bold text-gray-400">
                          /month
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-center text-gray-600"
                          >
                            <FaCloud className="w-4 h-4 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
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

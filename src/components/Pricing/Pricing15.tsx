import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

type Plan = {
  title: string;
  description: string;
  price: string;
  suffix?: string;
  features: string[];
  button: string;
  highlight?: boolean;
};

const plans: Record<"monthly" | "yearly", Plan[]> = {
  monthly: [
    {
      title: "Startup",
      description: "For freelancers exploring AuraUI.",
      price: "Free",
      features: ["Up to 5 projects", "Basic support", "1GB Storage"],
      button: "Start for free",
    },
    {
      title: "Pro",
      description: "For growing teams building with AuraUI.",
      price: "$79",
      suffix: "/mo",
      features: [
        "Up to 50 projects",
        "Priority support",
        "10GB Storage",
        "Custom themes",
        "API access",
      ],
      button: "Start free trial",
      highlight: true,
    },
    {
      title: "Enterprise",
      description: "For large organizations needing custom solutions.",
      price: "Custom",
      features: [
        "Unlimited projects",
        "24/7 support",
        "100TB Storage",
        "Custom themes",
        "API access",
        "Dedicated manager",
      ],
      button: "Contact Sales",
    },
  ],
  yearly: [
    {
      title: "Startup",
      description: "For freelancers exploring AuraUI.",
      price: "Free",
      features: ["Up to 5 projects", "Basic support", "1GB Storage"],
      button: "Start for free",
    },
    {
      title: "Pro",
      description: "For growing teams building with AuraUI.",
      price: "$790",
      suffix: "/yr",
      features: [
        "Up to 50 projects",
        "Priority support",
        "10GB Storage",
        "Custom themes",
        "API access",
      ],
      button: "Start free trial",
      highlight: true,
    },
    {
      title: "Enterprise",
      description: "For large organizations needing custom solutions.",
      price: "Custom",
      features: [
        "Unlimited projects",
        "24/7 support",
        "100TB Storage",
        "Custom themes",
        "API access",
        "Dedicated manager",
      ],
      button: "Contact Sales",
    },
  ],
};

const PricingLight: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const commonStyles = {
    card: "flex flex-col h-full rounded-2xl p-8 border shadow-sm hover:shadow-md transition",
    highlight: "border-indigo-500 shadow-md bg-white ring-2 ring-indigo-100",
    button:
      "block w-full text-center px-6 py-3 text-base font-semibold rounded-lg transition",
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your team and start building with{" "}
            <span className="font-semibold text-indigo-600">AuraUI</span>.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            {["monthly", "yearly"].map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt as "monthly" | "yearly")}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  billing === opt
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {opt === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 mt-14 md:grid-cols-3">
          {plans[billing].map((plan, index) => (
            <div
              key={index}
              className={`${commonStyles.card} ${
                plan.highlight ? commonStyles.highlight : "bg-white"
              }`}
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{plan.description}</p>

              {/* Price */}
              <div className="flex items-end mt-6">
                <p className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </p>
                {plan.suffix && (
                  <span className="ml-1 text-lg text-gray-500">
                    {plan.suffix}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 mt-6 space-y-3 text-base text-gray-700">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#"
                  className={`${commonStyles.button} ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.button}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-14 text-center text-gray-600">
          Need a tailored solution?{" "}
          <a href="#" className="font-semibold text-indigo-600 hover:underline">
            Let’s talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingLight;

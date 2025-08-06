import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Record<"monthly" | "yearly", Plan[]> = {
  monthly: [
    {
      name: "Beginner",
      price: "$19",
      description: "Great for individuals starting with AuraUI.",
      features: [
        "10 Video Courses",
        "Limited Slack Access",
        "Up to 3 Projects",
        "Basic Support",
      ],
    },
    {
      name: "Intermediate",
      price: "$29",
      description: "Perfect for growing teams & projects.",
      features: [
        "Unlimited Video Courses",
        "Unlimited Slack Access",
        "Up to 10 Projects",
        "Priority Support",
        "Zoom Calls",
      ],
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$59",
      description: "Advanced tools for professionals.",
      features: [
        "Unlimited Courses",
        "Unlimited Slack Access",
        "Unlimited Projects",
        "24/7 Support",
        "Beta Features",
      ],
    },
  ],
  yearly: [
    {
      name: "Beginner",
      price: "$190",
      description: "Great for individuals starting with AuraUI.",
      features: [
        "10 Video Courses",
        "Limited Slack Access",
        "Up to 3 Projects",
        "Basic Support",
      ],
    },
    {
      name: "Intermediate",
      price: "$290",
      description: "Perfect for growing teams & projects.",
      features: [
        "Unlimited Video Courses",
        "Unlimited Slack Access",
        "Up to 10 Projects",
        "Priority Support",
        "Zoom Calls",
      ],
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$590",
      description: "Advanced tools for professionals.",
      features: [
        "Unlimited Courses",
        "Unlimited Slack Access",
        "Unlimited Projects",
        "24/7 Support",
        "Beta Features",
      ],
    },
  ],
};

function Pricing7(): JSX.Element {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative py-20 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center blur-3xl opacity-30">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full" />
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>{" "}
            Options
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a plan that grows with you. Unlock AuraUI&apos;s full
            potential with premium features.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            <span
              className={`text-sm ${
                billing === "monthly" ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
              className="relative inline-flex w-14 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1 transition"
            >
              <span
                className={`inline-block w-5 h-5 transform bg-white rounded-full shadow-md transition ${
                  billing === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                billing === "yearly" ? "text-white" : "text-gray-400"
              }`}
            >
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          {plans[billing].map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 ${
                plan.highlighted
                  ? "ring-2 ring-cyan-500 ring-offset-2 ring-offset-black"
                  : ""
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-gray-400">{plan.description}</p>

              {/* Price */}
              <p className="mt-6 text-4xl font-bold text-white">{plan.price}</p>
              <p className="text-sm text-gray-500">
                per {billing === "monthly" ? "month" : "year"}
              </p>

              {/* Features */}
              <ul className="flex-1 mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <FaCheck className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white rounded-xl 
                           bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 
                           shadow-lg shadow-indigo-500/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing7;

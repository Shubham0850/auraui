import React from "react";
import { FaCheck } from "react-icons/fa";

const commonStyles = {
  section: "relative py-20 bg-black",
  container: "px-6 mx-auto max-w-7xl lg:px-12",
  title:
    "text-4xl font-bold text-white sm:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent",
  subtitle: "mt-4 text-lg text-gray-400 sm:mt-6 max-w-xl mx-auto",
  grid: "grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-16 lg:grid-cols-3",
  card: "relative flex flex-col p-8 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20",
  header: "text-2xl font-semibold text-white",
  price: "mt-4 text-5xl font-bold text-white",
  period: "ml-1 text-lg font-normal text-gray-500",
  description: "mt-3 text-base text-gray-400",
  divider: "mt-6 border-gray-800",
  list: "mt-6 space-y-4",
  listItem: "flex items-center text-gray-300",
  listIcon: "w-5 h-5 text-cyan-400 shrink-0",
  listText: "ml-3 text-base",
  gradientButton:
    "mt-8 inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 hover:scale-105 hover:shadow-xl transition-all duration-300",
  badge:
    "absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-md",
};

const plans = [
  {
    title: "Personal",
    price: "$19",
    description: "Essential tools to kickstart your freelance journey.",
    features: [
      "Full Access to AuraUI",
      "100 GB Free Storage",
      "Unlimited Visitors",
      "10 Agents",
      "Live Chat Support",
    ],
  },
  {
    title: "Professional",
    price: "$49",
    description: "Advanced features for growing teams and projects.",
    features: [
      "Full Access to AuraUI",
      "500 GB Free Storage",
      "Unlimited Visitors",
      "50 Agents",
      "Priority Support",
    ],
    popular: true,
  },
  {
    title: "Business",
    price: "$99",
    description: "Premium features and dedicated support for enterprises.",
    features: [
      "Full Access to AuraUI",
      "Unlimited Storage",
      "Unlimited Visitors",
      "Unlimited Agents",
      "Dedicated Account Manager",
    ],
  },
];

function Pricing8(): JSX.Element {
  return (
    <section className={commonStyles.section}>
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center blur-3xl opacity-20">
        <div className="w-[700px] h-[700px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full" />
      </div>

      <div className={commonStyles.container}>
        <div className="text-center">
          <h2 className={commonStyles.title}>Simple, Transparent Pricing</h2>
          <p className={commonStyles.subtitle}>
            Choose the plan that matches your needs and scale with AuraUI.
          </p>
        </div>

        <div className={commonStyles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={commonStyles.card}>
              {plan.popular && (
                <span className={commonStyles.badge}>Most Popular</span>
              )}

              <h3 className={commonStyles.header}>{plan.title}</h3>

              <div className="flex items-end mt-2">
                <p className={commonStyles.price}>{plan.price}</p>
                <span className={commonStyles.period}>/ month</span>
              </div>

              <p className={commonStyles.description}>{plan.description}</p>

              <hr className={commonStyles.divider} />

              <ul className={commonStyles.list}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={commonStyles.listItem}>
                    <FaCheck className={commonStyles.listIcon} />
                    <span className={commonStyles.listText}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={commonStyles.gradientButton}>
                Get 14 Days Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing8;

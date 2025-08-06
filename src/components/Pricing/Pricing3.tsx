import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { GiArmoredBoomerang } from "react-icons/gi";

const commonStyles = {
  section: "py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading:
    "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent",
  paragraph:
    "mt-4 text-lg font-normal leading-8 text-gray-600 sm:mt-6 sm:text-xl max-w-2xl mx-auto",
  radioContainer: "flex items-center",
  radioInput:
    "appearance-none w-5 h-5 rounded-full border border-gray-300 checked:bg-gradient-to-r checked:from-blue-600 checked:to-indigo-600 focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer",
  radioLabel: "ml-3 text-sm font-medium text-gray-900 sm:text-base",
  radioSpan:
    "ml-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
  cardContainer:
    "grid max-w-6xl grid-cols-1 mx-auto mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-3",
  card: "relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-600",
  cardHeader: "px-6 py-6 bg-gray-50/60 rounded-t-3xl flex items-start",
  cardBody: "px-6 py-8",
  cardTitle: "text-xl font-semibold text-gray-900",
  cardDescription: "mt-2 text-sm font-normal text-gray-500",
  price: "text-5xl font-extrabold text-gray-900",
  priceLabel: "ml-2 text-base font-medium text-gray-500",
  button:
    "mt-6 inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-200",
  tag: "absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold uppercase rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow",
  featureItem: "flex items-center text-gray-700",
  featureIcon: "w-5 h-5 mr-2 text-blue-600 shrink-0",
  footerText:
    "mt-6 text-xs font-semibold tracking-widest text-gray-500 uppercase text-center",
};

const plans = [
  {
    icon: GiArmoredBoomerang,
    title: "Basic",
    description:
      "Perfect for startups and small teams looking to explore AuraUI Library.",
    price: 0,
    footerText: "Best for free",
  },
  {
    icon: IoMdRocket,
    title: "Pro",
    description:
      "Ideal for growing teams and businesses requiring more features and flexibility.",
    price: 49,
    footerText: "Most popular",
    tag: "Most popular",
  },
  {
    icon: IoMdRocket,
    title: "Exclusive",
    description:
      "For enterprises and advanced users needing premium support and features.",
    price: 99,
    footerText: "Exclusive plan",
  },
];

const FeatureList = () => (
  <ul className="mt-8 space-y-4">
    {[
      "Full Access to AuraUI",
      "100 GB Free Storage",
      "Unlimited Visitors",
      "10 Agents",
      "Live Chat Support",
    ].map((feature, index) => (
      <li key={index} className={commonStyles.featureItem}>
        <FaCheckCircle className={commonStyles.featureIcon} />
        {feature}
      </li>
    ))}
  </ul>
);

const PricingCard = ({ plan, yearly }: any) => {
  const price = yearly ? plan.price * 10 : plan.price; // save 20% yearly
  return (
    <div className={commonStyles.card}>
      {plan.tag && <span className={commonStyles.tag}>{plan.tag}</span>}
      <div className={commonStyles.cardHeader}>
        <plan.icon className="text-4xl text-blue-600 drop-shadow-sm" />
        <div className="ml-4">
          <h3 className={commonStyles.cardTitle}>{plan.title}</h3>
          <p className={commonStyles.cardDescription}>{plan.description}</p>
        </div>
      </div>
      <div className={commonStyles.cardBody}>
        <div className="flex items-end">
          <p className={commonStyles.price}>
            {price === 0 ? "Free" : `$${price}`}
          </p>
          {price !== 0 && (
            <p className={commonStyles.priceLabel}>
              {yearly ? "/yr/user" : "/mo/user"}
            </p>
          )}
        </div>
        <a href="#" className={commonStyles.button}>
          Get 14 days free trial
        </a>
        <p className={commonStyles.footerText}>{plan.footerText}</p>
        <FeatureList />
      </div>
    </div>
  );
};

function Pricing3() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={commonStyles.heading}>Plans that scale with auraUI</h2>
          <p className={commonStyles.paragraph}>
            AuraUI offers scalable plans designed to meet the needs of any
            project, providing essential tools for creating and managing your
            web3 applications.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mt-10 space-x-6">
          <div className={commonStyles.radioContainer}>
            <input
              type="radio"
              id="monthly"
              name="pricing-plans"
              checked={!yearly}
              onChange={() => setYearly(false)}
              className={commonStyles.radioInput}
            />
            <label htmlFor="monthly" className={commonStyles.radioLabel}>
              Monthly Plan
            </label>
          </div>
          <div className={commonStyles.radioContainer}>
            <input
              type="radio"
              id="yearly"
              name="pricing-plans"
              checked={yearly}
              onChange={() => setYearly(true)}
              className={commonStyles.radioInput}
            />
            <label htmlFor="yearly" className={commonStyles.radioLabel}>
              Yearly Plan
            </label>
            <span className={commonStyles.radioSpan}>(Save 20%)</span>
          </div>
        </div>

        {/* Cards */}
        <div className={commonStyles.cardContainer}>
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} yearly={yearly} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing3;

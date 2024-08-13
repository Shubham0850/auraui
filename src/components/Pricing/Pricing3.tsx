import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { GiArmoredBoomerang } from "react-icons/gi";

const commonStyles = {
  section: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading:
    "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
  paragraph:
    "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
  radioContainer: "flex items-center",
  radioInput:
    "w-4 h-4 text-blue-600 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-blue-600",
  radioLabel: "block ml-3 text-sm font-medium text-gray-900 sm:text-base",
  radioSpan: "ml-1 text-sm font-medium text-blue-600",
  cardContainer:
    "grid max-w-5xl grid-cols-1 mx-auto mt-12 lg:grid-cols-3 lg:gap-8 sm:mt-16 lg:mt-20",
  card: "bg-white border border-gray-200 divide-y divide-gray-200 rounded-2xl sm:rounded-3xl",
  cardHeader: "px-4 py-5 bg-gray-50 sm:p-6 rounded-t-2xl sm:rounded-t-3xl",
  cardBody: "px-4 py-5 sm:p-6",
  cardFooter: "mt-8 space-y-4",
  cardTitle: "text-lg font-semibold text-gray-900",
  cardDescription: "mt-2 text-sm font-normal text-gray-500",
  price: "text-5xl font-semibold text-gray-900",
  priceLabel: "py-1 text-sm font-normal text-gray-500",
  button:
    "inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700",
  tag: "ml-2 -mt-2 text-sm font-semibold text-blue-600",
  featureItem: "flex items-center",
  featureIcon: "w-5 h-5 mr-2 text-blue-600 shrink-0",
  footerText:
    "mt-8 text-xs font-semibold tracking-widest text-gray-500 uppercase",
};

const plans = [
  {
    icon: GiArmoredBoomerang,
    title: "Basic",
    description:
      "Perfect for startups and small teams looking to explore AuraUI Library.",
    price: "$0",
    label: "/mo/user",
    footerText: "Best for free",
  },
  {
    icon: IoMdRocket,
    title: "Pro",
    description:
      "Ideal for growing teams and businesses requiring more features and flexibility.",
    price: "$49",
    label: "/mo/user",
    footerText: "Most popular",
    tag: "Most popular",
  },
  {
    icon: IoMdRocket,
    title: "Exclusive",
    description:
      "For enterprises and advanced users needing premium support and features.",
    price: "$99",
    label: "/mo/user",
    footerText: "Exclusive plan",
  },
];

const FeatureList = () => (
  <ul className={commonStyles.cardFooter}>
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

const PricingCard = ({ plan }: any) => (
  <div
    className={`${commonStyles.card} ${
      plan.tag ? "relative mt-14 lg:mt-0" : "mt-6 lg:mt-0"
    }`}
  >
    {plan.tag && (
      <div className="absolute top-0 right-8 flex items-start -mt-8">
        <plan.icon className="w-auto h-16 text-blue-600" />
        <span className={commonStyles.tag}>{plan.tag}</span>
      </div>
    )}
    <div className={commonStyles.cardHeader}>
      <div className="flex items-start">
        <plan.icon className="text-3xl shrink-0" />
        <div className="ml-6">
          <h3 className={commonStyles.cardTitle}>{plan.title}</h3>
          <p className={commonStyles.cardDescription}>{plan.description}</p>
        </div>
      </div>
    </div>
    <div className={commonStyles.cardBody}>
      <div className="flex items-end">
        <p className={commonStyles.price}>{plan.price}</p>
        <p className={commonStyles.priceLabel}>{plan.label}</p>
      </div>
      <div className="mt-6">
        <a href="#" title="" className={commonStyles.button}>
          Get 14 days free trial
        </a>
      </div>
      <p className={commonStyles.footerText}>{plan.footerText}</p>
      <FeatureList />
    </div>
  </div>
);

function Pricing3() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={commonStyles.heading}>Plans that scale with AuraUI</h2>
          <p className={commonStyles.paragraph}>
            AuraUI offers scalable plans designed to meet the needs of any
            project, providing essential tools for creating and managing your
            web3 applications.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 space-x-6 sm:mt-12">
          <div className={commonStyles.radioContainer}>
            <input
              type="radio"
              id="monthly"
              name="pricing-plans"
              className={commonStyles.radioInput}
              defaultChecked
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
              className={commonStyles.radioInput}
            />
            <label htmlFor="yearly" className={commonStyles.radioLabel}>
              Yearly Plan
            </label>
            <span className={commonStyles.radioSpan}>(Save 20%)</span>
          </div>
        </div>
        <div className={commonStyles.cardContainer}>
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing3;

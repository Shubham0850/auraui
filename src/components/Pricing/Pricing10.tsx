import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoRocketSharp, IoFlashSharp, IoEyeSharp } from "react-icons/io5";

const styles = {
  section: "relative py-20 bg-gray-50",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header: "max-w-2xl mx-auto text-center",
  heading:
    "text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight",
  subheading: "mt-6 text-lg text-gray-600",
  grid: "grid gap-10 mt-16 md:grid-cols-3 max-w-6xl mx-auto",
  card: "relative flex flex-col p-8 bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300",

  badge:
    "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white rounded-full shadow-md",
  cardHeader: "text-center",
  icon: "text-5xl mx-auto",
  cardTitle: "mt-6 text-2xl font-semibold text-gray-900",
  cardDescription: "mt-2 text-base text-gray-600",
  cardPrice: "flex items-end justify-center mt-6",
  priceSign: "text-xl font-semibold text-gray-400",
  priceValue: "text-5xl font-bold text-gray-900",
  pricePeriod: "text-lg font-normal text-gray-500 ml-1",
  featureList: "mt-8 space-y-4",
  featureItem: "flex items-center text-gray-700",
  featureIcon: "w-5 h-5 mr-3 text-green-500",
  buttonBase:
    "inline-flex items-center justify-center w-full px-6 py-3 mt-10 text-base font-semibold rounded-xl shadow-md transition-all duration-300",
  buttonPrimary:
    "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105",
  buttonSecondary:
    "border border-gray-300 text-gray-800 hover:border-indigo-500 hover:text-indigo-600",
  noCredit: "mt-4 text-sm text-gray-500",
  footer:
    "mt-20 max-w-xl mx-auto text-base text-center text-gray-500 border-t border-gray-200 pt-8",
};

const pricingPlans = [
  {
    title: "Starter",
    description: "Ideal for small teams and startups",
    price: 99,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Reporting Dashboard",
      "Custom Domain",
    ],
    icon: <IoRocketSharp className={`${styles.icon} text-cyan-500`} />,
    buttonStyle: styles.buttonSecondary,
  },
  {
    title: "Growth",
    description: "Best for growing agencies",
    price: 199,
    features: [
      "Everything in Starter",
      "10 Domain Licenses",
      "20 Email Accounts",
      "Advanced Reporting",
      "Custom Domain",
      "Priority Support",
    ],
    icon: <IoFlashSharp className={`${styles.icon} text-indigo-500`} />,
    buttonStyle: styles.buttonPrimary,
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-indigo-500 to-purple-600",
  },
  {
    title: "Professional",
    description: "Perfect for independent developers",
    price: 69,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Reporting Dashboard",
      "Custom Domain",
    ],
    icon: <IoEyeSharp className={`${styles.icon} text-pink-500`} />,
    buttonStyle: styles.buttonSecondary,
  },
];

const Pricing10 = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Find the perfect plan for your needs
          </h2>
          <p className={styles.subheading}>
            Choose a plan that fits your business and enjoy premium features
            with AuraUI.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                plan.title === "Growth"
                  ? "border-indigo-500 border-t-4"
                  : "border-gray-200 border-t-4"
              }`}
            >
              {plan.badge && (
                <div className={`${styles.badge} ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
              )}
              <div className={styles.cardHeader}>
                {plan.icon}
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardDescription}>{plan.description}</p>
                <div className={styles.cardPrice}>
                  <span className={styles.priceSign}>$</span>
                  <span className={styles.priceValue}>{plan.price}</span>
                  <span className={styles.pricePeriod}>/year</span>
                </div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <AiOutlineCheckCircle className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col items-center">
                <a
                  href="#"
                  className={`${styles.buttonBase} ${plan.buttonStyle}`}
                >
                  Start 14 Days Trial
                </a>
                <p className={`${styles.noCredit} text-center`}>
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footer}>
          Transparent pricing with no hidden fees — ever.
        </p>
      </div>
    </section>
  );
};

export default Pricing10;

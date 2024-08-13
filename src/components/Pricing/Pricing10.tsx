import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoRocketSharp, IoFlashSharp, IoEyeSharp } from "react-icons/io5";

const styles = {
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header: "max-w-xl mx-auto text-center",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl",
  subheading: "mt-6 text-base text-gray-600",
  grid: "grid gap-y-6 mt-8 md:mt-16 md:grid-cols-3 max-w-md mx-auto md:max-w-5xl",
  card: "relative bg-white shadow-lg rounded-lg p-6",
  badge:
    "absolute top-0 left-0 right-0 bg-gray-700 text-center py-2 text-xs font-bold text-white uppercase",
  cardHeader: "text-center",
  icon: "text-4xl",
  cardTitle: "mt-6 text-lg font-semibold text-gray-900",
  cardDescription: "mt-2 text-sm text-gray-600",
  cardPrice: "flex items-end justify-center mt-6",
  priceSign: "text-lg font-bold text-gray-400",
  priceValue: "text-4xl font-bold text-gray-900",
  pricePeriod: "text-lg font-bold text-gray-400",
  featureList: "mt-8 space-y-3",
  featureItem: "flex items-center",
  featureIcon: "w-5 h-5 mr-2.5 text-green-500",
  button:
    "block w-full px-4 py-3 text-base font-bold transition-colors duration-200 border border-transparent rounded-md",
  buttonText: "border border-transparent rounded-md",
  buttonTrial:
    "hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  noCredit: "mt-4 text-sm text-gray-600",
  footer: "mt-8 max-w-md mx-auto text-base text-center text-gray-500",
};

const pricingPlans = [
  {
    title: "Starter",
    description: "Ideal for small teams and startups",
    price: 99,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Limited Reporting",
      "Custom Domain",
    ],
    icon: <IoRocketSharp className={styles.icon} />,
    buttonColor: "bg-gray-100",
    buttonTextColor: "text-gray-900",
  },
  {
    title: "Growth",
    description: "Best for growing agencies",
    price: 199,
    features: [
      "Everything from Starter",
      "10 Domain Licenses",
      "20 Email Accounts",
      "Advanced Reporting",
      "Custom Domain",
      "Priority Support",
    ],
    icon: <IoFlashSharp className={styles.icon} />,
    buttonColor: "bg-gray-900",
    buttonTextColor: "text-white",
    badge: "Most Popular",
  },
  {
    title: "Professional",
    description: "Designed for independent developers",
    price: 69,
    features: [
      "1 Domain License",
      "5 Email Accounts",
      "Limited Reporting",
      "Custom Domain",
    ],
    icon: <IoEyeSharp className={styles.icon} />,
    buttonColor: "bg-gray-100",
    buttonTextColor: "text-gray-900",
  },
];

const Pricing10 = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Find the perfect plan for your needs
          </h2>
          <p className={styles.subheading}>
            Choose a plan that fits your business needs and enjoy a suite of
            features to elevate your experience with AuraUI.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                plan.title === "Growth" ? "ring-2 ring-gray-900" : ""
              }`}
            >
              {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
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
                  <li
                    key={idx}
                    className={`${styles.featureItem} ${
                      idx >= 3 ? "text-gray-400" : ""
                    }`}
                  >
                    <AiOutlineCheckCircle className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className={`${styles.button} ${plan.buttonColor} ${plan.buttonTextColor} ${styles.buttonTrial}`}
                >
                  Start 14 Days Trial
                </a>
                <p className={styles.noCredit}>No credit card required</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footer}>
          Enjoy peace of mind with our transparent pricing and no hidden fees.
        </p>
      </div>
    </section>
  );
};

export default Pricing10;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const commonStyles = {
  section: "py-16 bg-gray-50 sm:py-20 lg:py-24",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl",
  subheading: "mt-4 text-lg font-normal text-gray-600",
  cardWrapper: "relative rounded-2xl", // wrapper for card + overlay
  card: "relative z-10 bg-white shadow-md rounded-2xl transition-transform duration-300 hover:-translate-y-2",
  cardContent: "p-8 lg:px-10 lg:py-10",
  cardTitle: "text-xl font-semibold text-gray-900",
  price: "mt-3 text-5xl font-bold text-gray-900",
  description: "mt-4 text-base font-normal leading-7 text-gray-600",
  button:
    "inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-semibold transition-all duration-200 rounded-xl shadow-sm",
  buttonBasic:
    "text-gray-900 border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
  buttonPremium:
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90",
  buttonEnterprise:
    "text-gray-900 border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
  featuresTitle: "mt-8 text-base font-semibold text-gray-900",
  featureList: "mt-4 space-y-3 text-base font-medium text-gray-600",
  gradientOverlay:
    "absolute inset-0 w-full h-full rounded-2xl blur-xl opacity-30 pointer-events-none",
  gradient:
    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
};

const plans = [
  {
    name: "Basic",
    price: "$99",
    description:
      "Perfect for small teams and freelancers just getting started with AuraUI.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers ",
      "Made with TailwindCSS",
      "Lifetime Access",
      "Component License",
    ],
    buttonClass: commonStyles.buttonBasic,
  },
  {
    name: "Premium",
    price: "$199",
    description:
      "Great for growing startups and agencies who need advanced support and updates.",
    features: [
      "130+ Coded Blocks",
      "Premium Support",
      "Made with TailwindCSS",
      "Future Updates",
      "Unlimited Projects",
    ],
    buttonClass: commonStyles.buttonPremium,
    gradient: commonStyles.gradient,
  },
  {
    name: "Enterprise",
    price: "$399",
    description:
      "Best for large companies and enterprises that need full power of AuraUI.",
    features: [
      "130+ Coded Blocks",
      "Dedicated Support",
      "Made with TailwindCSS",
      "Future Updates",
      "Custom Licensing",
    ],
    buttonClass: commonStyles.buttonEnterprise,
  },
];

const Pricing11 = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className={commonStyles.heading}>
            Make the wise decision for your business
          </h2>
          <p className={commonStyles.subheading}>
            Choose from our affordable packages at AuraUI
          </p>
        </div>

        <div className="grid max-w-sm grid-cols-1 gap-8 mx-auto mt-12 md:mt-16 md:max-w-6xl md:grid-cols-3">
          {plans.map((plan, index) => (
            <div className={commonStyles.cardWrapper} key={index}>
              {plan.gradient && (
                <div
                  className={commonStyles.gradientOverlay}
                  style={{ background: plan.gradient }}
                />
              )}
              <div
                className={`${commonStyles.card} ${
                  plan.name === "Premium" ? "ring-2 ring-purple-400" : ""
                }`}
              >
                <div className={commonStyles.cardContent}>
                  <h3 className={commonStyles.cardTitle}>{plan.name}</h3>
                  <p className={commonStyles.price}>{plan.price}</p>
                  <p className={commonStyles.description}>{plan.description}</p>
                  <a
                    href="#"
                    className={`${commonStyles.button} ${plan.buttonClass}`}
                    role="button"
                  >
                    Get Started
                  </a>
                  <p className={commonStyles.featuresTitle}>
                    What&apos;s included:
                  </p>
                  <ul className={commonStyles.featureList}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing11;

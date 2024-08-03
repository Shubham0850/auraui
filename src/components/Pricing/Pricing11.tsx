import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// Common styles
const commonStyles = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl",
  subheading: "mt-6 text-lg font-normal text-gray-600",
  card: "overflow-hidden bg-white border border-gray-200 rounded-2xl",
  cardContent: "p-6 lg:px-10 lg:py-8",
  cardTitle: "text-lg font-bold text-gray-900",
  price: "mt-3 text-5xl font-bold text-gray-900",
  description: "mt-5 text-base font-normal leading-7 text-gray-600",
  button:
    "inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold transition-all duration-200 rounded-xl",
  buttonBasic:
    "text-gray-900 border-2 border-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900",
  buttonPremium:
    "bg-white text-gray-900 border-2 border-transparent hover:bg-opacity-90",
  buttonEnterprise:
    "text-gray-900 border-2 border-gray-400 hover:bg-gray-900 hover:text-white hover:border-gray-900",
  featuresTitle: "mt-8 text-base font-bold text-gray-900",
  featureList: "mt-4 space-y-3 text-base font-medium text-gray-600",
  gradientOverlay:
    "absolute inset-0 w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter",
};

const plans = [
  {
    name: "Basic",
    price: "$99",
    description:
      "Best for small business owners, startups who need a landing page for their business.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
    ],
    buttonClass: commonStyles.buttonBasic,
  },
  {
    name: "Premium",
    price: "$199",
    description:
      "Best for medium business owners, startups who need a landing page for their business.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
    buttonClass: commonStyles.buttonPremium,
    gradient:
      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
  },
  {
    name: "Enterprise",
    price: "$399",
    description:
      "Best for large companies, business owners who need a landing page for their business.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
    buttonClass: commonStyles.buttonEnterprise,
  },
];

const Pricing11 = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-xl px-8 mx-auto text-center md:px-0">
          <h2 className={commonStyles.heading}>
            Make the wise decision for your business
          </h2>
          <p className={commonStyles.subheading}>
            Choose from our affordable packages at Auraui
          </p>
        </div>

        <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
          {plans.map((plan, index) => (
            <div className="relative" key={index}>
              {plan.gradient && (
                <div
                  className={commonStyles.gradientOverlay}
                  style={{ background: plan.gradient }}
                ></div>
              )}
              <div className={commonStyles.card}>
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

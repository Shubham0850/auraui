import React, { useState } from "react";

const styles = {
  section: "relative py-20 bg-black",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  header: "tracking-tighter text-white text-center",
  heading:
    "block font-sans text-4xl font-bold md:text-6xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent",
  subheading: "block font-serif text-5xl italic md:text-7xl text-white",
  paragraph:
    "mt-6 font-sans text-lg font-normal text-gray-400 max-w-xl mx-auto",
  buttonGroup:
    "inline-flex items-center justify-center p-1 mt-10 rounded-full bg-gray-800/50 backdrop-blur-md",
  button:
    "px-6 py-2 text-sm sm:text-base rounded-full transition-all duration-300",
  buttonActive: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white",
  buttonInactive: "text-gray-300 hover:text-white",
  grid: "grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2",
  card: "relative flex flex-col p-8 transition-all duration-300 border rounded-2xl bg-gradient-to-b from-gray-900 to-black hover:scale-105 hover:shadow-2xl",
  cardHeader: "flex-1",
  cardTitle: "text-2xl font-semibold text-white",
  cardDescription: "mt-3 text-base font-normal text-gray-400",
  cardPrice: "mt-6 text-5xl font-bold text-white",
  cardPeriod: "mt-1 text-base font-normal text-gray-500",
  popularBadge:
    "absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md",
  cta: "mt-12 inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
};

function Pricing9(): JSX.Element {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      title: "Starter",
      description:
        "Get started with AuraUI and explore the basics of our components.",
      monthly: "$19.99",
      yearly: "$199.99",
      border: "border-cyan-500/50",
    },
    {
      title: "Advanced",
      description:
        "Unlock premium features and advanced components with AuraUI.",
      monthly: "$99.99",
      yearly: "$999.99",
      border: "border-purple-500/50",
      popular: true,
    },
  ];

  return (
    <section className={styles.section}>
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center blur-3xl opacity-20">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full" />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            <span className={styles.heading}>Pricing</span>
            <span className={styles.subheading}> Options</span>
          </h2>
          <p className={styles.paragraph}>
            Discover the perfect pricing plan for your needs with AuraUI&apos;s
            flexible options.
          </p>

          {/* Toggle */}
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setBilling("yearly")}
              className={`${styles.button} ${
                billing === "yearly"
                  ? styles.buttonActive
                  : styles.buttonInactive
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className={`${styles.button} ${
                billing === "monthly"
                  ? styles.buttonActive
                  : styles.buttonInactive
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.border}`}>
              {plan.popular && (
                <span className={styles.popularBadge}>Most Popular</span>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardDescription}>{plan.description}</p>
                <p className={styles.cardPrice}>
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </p>
                <p className={styles.cardPeriod}>
                  per {billing === "monthly" ? "month" : "year"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#" className={styles.cta}>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing9;

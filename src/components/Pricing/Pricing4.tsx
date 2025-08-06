import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const commonStyles = {
  container:
    "relative py-16 overflow-hidden bg-black sm:py-20 lg:py-24 xl:py-28",
  header:
    "text-sm font-medium tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500",
  title:
    "mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg",
  description:
    "mt-6 text-lg font-normal text-gray-400 sm:mt-8 max-w-2xl md:max-w-3xl",
  planContainer:
    "overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300",
  planContent: "p-6",
  planHeader: "flex items-center",
  radioButton:
    "appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-transparent checked:bg-gradient-to-r checked:from-cyan-500 checked:to-purple-500 focus:ring-2 focus:ring-cyan-400 cursor-pointer transition-all duration-200",
  planDetails: "flex-1 ml-4 shrink-0",
  planPrice: "text-2xl font-bold text-black",
  planLabel: "mt-1 text-sm font-medium text-gray-600",
  saveBadge:
    "absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 blur-md opacity-30",
  saveText:
    "relative px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-md bg-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 shadow-sm",
  button:
    "inline-flex items-center justify-center w-full px-8 py-4 mt-6 text-base font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-[1.02] hover:shadow-lg",
  footerText:
    "mt-8 text-base font-normal text-center text-gray-400 md:text-left",
  link: "text-cyan-400 hover:text-cyan-300 hover:underline transition-colors",
};

const Pricing4 = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className={commonStyles.container}>
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 transform translate-x-20 translate-y-80">
        <FaCheckCircle
          className="blur-3xl"
          style={{
            filter: "blur(64px)",
            width: "568px",
            height: "479px",
            color: "var(--color-cyan-500)",
          }}
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto md:mx-0 md:max-w-3xl">
          {/* Heading */}
          <div className="max-w-xl text-center md:text-left">
            <p className={commonStyles.header}>Choose a subscription</p>
            <h2 className={commonStyles.title}>Get Premium Access</h2>
            <p className={commonStyles.description}>
              Experience premium features with AuraUI&apos;s exclusive
              subscription plans. Select the plan that suits your needs and
              enjoy enhanced functionalities.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 sm:mt-16 lg:mt-20">
            {/* Monthly */}
            <div className={commonStyles.planContainer}>
              <div className={commonStyles.planContent}>
                <div className={commonStyles.planHeader}>
                  <input
                    type="radio"
                    name="billingType"
                    id="monthlyBilling"
                    checked={billing === "monthly"}
                    onChange={() => setBilling("monthly")}
                    className={commonStyles.radioButton}
                  />
                  <div className={commonStyles.planDetails}>
                    <p className={commonStyles.planPrice}>$29/month</p>
                    <label
                      htmlFor="monthlyBilling"
                      className={commonStyles.planLabel}
                    >
                      Simple monthly billing
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Yearly */}
            <div className={commonStyles.planContainer}>
              <div className={commonStyles.planContent}>
                <div className="flex items-start justify-between">
                  <div className={commonStyles.planHeader}>
                    <input
                      type="radio"
                      name="billingType"
                      id="yearlyBilling"
                      checked={billing === "yearly"}
                      onChange={() => setBilling("yearly")}
                      className={commonStyles.radioButton}
                    />
                    <div className={commonStyles.planDetails}>
                      <p className={commonStyles.planPrice}>$19/month</p>
                      <label
                        htmlFor="yearlyBilling"
                        className={commonStyles.planLabel}
                      >
                        $228 billed in a year
                      </label>
                    </div>
                  </div>

                  {/* Save badge */}
                  <div className="relative ml-4">
                    <div className={commonStyles.saveBadge}></div>
                    <div className={commonStyles.saveText}>Save 20%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button className={commonStyles.button}>
                Start A 30 Days Free Trial
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className={commonStyles.footerText}>
            Confused?{" "}
            <a href="#" className={commonStyles.link}>
              Check all features
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing4;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const commonStyles = {
  container:
    "relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24",
  header:
    "text-sm font-normal tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500",
  title:
    "mt-6 text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl",
  description: "mt-6 text-lg font-normal text-gray-400 sm:mt-8",
  planContainer: "overflow-hidden bg-white rounded-lg",
  planContent: "p-5",
  planHeader: "flex items-center",
  radioButton: "w-8 h-8 text-purple-500 border-gray-300 focus:ring-purple-500",
  planPrice: "text-xl font-semibold text-black",
  planLabel: "mt-1 text-base font-normal text-gray-600",
  saveBadge:
    "absolute rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 -inset-px",
  saveText:
    "relative px-2 pt-0.5 pb-1 bg-white rounded-md text-xs leading-none tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500",
  button:
    "inline-flex items-center justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150",
  footerText:
    "mt-6 text-base font-normal text-center text-gray-500 md:text-left",
  link: "text-white hover:underline",
};

const Pricing4 = () => {
  return (
    <section className={commonStyles.container}>
      <div className="absolute bottom-0 right-0 transform translate-x-20 translate-y-80">
        <FaCheckCircle
          className="blur-3xl filter"
          style={{
            filter: "blur(64px)",
            width: "568px",
            height: "479px",
            color: "var(--color-cyan-500)",
          }}
        />
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt="Background noise"
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto md:mx-0 md:max-w-3xl">
          <div className="max-w-xl text-center md:text-left">
            <p className={commonStyles.header}>Choose a subscription</p>
            <h2 className={commonStyles.title}>Get Premium Access</h2>
            <p className={commonStyles.description}>
              Experience premium features with Auraui&apos;s exclusive subscription
              plans. Select the plan that suits your needs and enjoy enhanced
              functionalities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 sm:mt-16 lg:mt-20">
            <div className={commonStyles.planContainer}>
              <div className={commonStyles.planContent}>
                <div className={commonStyles.planHeader}>
                  <input
                    type="radio"
                    name="billingType"
                    id="monthlyBilling"
                    className={commonStyles.radioButton}
                  />
                  <div className="flex-1 ml-5 shrink-0">
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

            <div className={commonStyles.planContainer}>
              <div className={commonStyles.planContent}>
                <div className="flex items-start justify-between">
                  <div className={commonStyles.planHeader}>
                    <input
                      type="radio"
                      name="billingType"
                      id="yearlyBilling"
                      className={commonStyles.radioButton}
                    />
                    <div className="flex-1 ml-5 shrink-0">
                      <p className={commonStyles.planPrice}>$19/month</p>
                      <label
                        htmlFor="yearlyBilling"
                        className={commonStyles.planLabel}
                      >
                        $228 billed in a year
                      </label>
                    </div>
                  </div>

                  <div className="relative ml-4">
                    <div className={commonStyles.saveBadge}></div>
                    <div className={commonStyles.saveText}>Save 20%</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button type="button" className={commonStyles.button}>
                Start A 30 Days Free Trial
              </button>
            </div>
          </div>

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

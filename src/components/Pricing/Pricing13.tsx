import React from "react";
import { FaDollarSign, FaCreditCard, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const commonStyles = {
  container: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  innerContainer: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl",
  subheader: "mt-5 text-lg font-normal text-gray-900",
  card: "overflow-hidden bg-white border border-gray-200 rounded-2xl",
  cardContent: "p-6 md:p-10",
  planTitle: "text-lg font-bold text-gray-900",
  planDescription: "mt-4 text-base font-normal leading-7 text-gray-600",
  pricing: "mt-8 text-xl font-bold text-gray-900",
  button:
    "inline-flex items-center justify-center px-8 py-3.5 mt-10 text-base font-bold text-white transition-all duration-200 rounded-xl",
  buttonMonthly:
    "border-2 border-gray-400 bg-gray-900 hover:bg-opacity-90 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  buttonYearly:
    "bg-gray-900 hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  backgroundGradient:
    "absolute -inset-2 w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter",
  gradient:
    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
  footer:
    "max-w-md mx-auto mt-10 text-base font-normal leading-7 text-center text-gray-600",
  footerLink: "font-bold",
};

function Pricing13() {
  return (
    <section className={commonStyles.container}>
      <div className={commonStyles.innerContainer}>
        <div className="text-center">
          <h2 className={commonStyles.header}>Choose your plan</h2>
          <p className={commonStyles.subheader}>
            Discover Auraui’s exclusive pricing for our advanced web3 solutions.
          </p>
        </div>

        <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:grid-cols-2 sm:mt-16 gap-y-5 gap-x-10">
          <div className={commonStyles.card}>
            <div className={commonStyles.cardContent}>
              <p className={commonStyles.planTitle}>Pay monthly</p>
              <p className={commonStyles.planDescription}>
                Enjoy the flexibility of our monthly plan. Perfect for trying
                out Auraui’s features.
              </p>
              <p className={commonStyles.pricing}>
                <FaDollarSign className="inline-block" /> $19/month
              </p>
              <p className={commonStyles.pricing}>
                <FaCreditCard className="inline-block" /> $228/year
              </p>
              <a
                href="#"
                title="Get monthly plan"
                className={`${commonStyles.button} ${commonStyles.buttonMonthly}`}
                role="button"
              >
                Get monthly plan
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className={commonStyles.backgroundGradient}
              style={{ background: commonStyles.gradient }}
            ></div>

            <div className={commonStyles.card}>
              <div className={commonStyles.cardContent}>
                <p className={commonStyles.planTitle}>Pay yearly</p>
                <p className={commonStyles.planDescription}>
                  Opt for our yearly plan and save more while accessing all the
                  advanced features of Auraui.
                </p>
                <p className={commonStyles.pricing}>
                  <FaDollarSign className="inline-block" /> $12/month
                </p>
                <p className={commonStyles.pricing}>
                  <FaCreditCard className="inline-block" /> $144/year
                </p>
                <a
                  href="#"
                  title="Get yearly plan"
                  className={`${commonStyles.button} ${commonStyles.buttonYearly}`}
                  role="button"
                >
                  Get yearly plan
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className={commonStyles.footer}>
          Looking for a bigger commitment?{" "}
          <a href="#" title="Let’s talk" className={commonStyles.footerLink}>
            Let’s talk
          </a>{" "}
          and we’ll customize a plan just for you.
        </p>
      </div>
    </section>
  );
}

export default Pricing13;

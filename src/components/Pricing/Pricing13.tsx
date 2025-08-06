import React from "react";
import { FaDollarSign, FaCreditCard } from "react-icons/fa";

const commonStyles = {
  section: "py-16 bg-gray-50 sm:py-20 lg:py-24",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header: "text-3xl font-extrabold text-gray-900 sm:text-4xl xl:text-5xl",
  subheader: "mt-4 text-lg text-gray-600 max-w-2xl mx-auto",
  grid: "grid max-w-4xl grid-cols-1 mx-auto mt-12 gap-8 sm:grid-cols-2",
  card: "relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300",
  cardContent: "p-8 text-center",
  badge:
    "absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md",
  title: "text-xl font-semibold text-gray-900",
  description: "mt-3 text-base text-gray-600 leading-relaxed",
  priceContainer: "mt-6 space-y-2",
  price:
    "flex items-center justify-center text-4xl font-extrabold text-gray-900",
  priceIcon: "w-5 h-5 mr-1 text-gray-500",
  priceSub: "text-sm text-gray-500",
  button:
    "inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold rounded-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
  buttonMonthly:
    "border-2 border-gray-400 text-gray-900 bg-white hover:bg-gray-900 hover:text-white focus:ring-gray-900",
  buttonYearly:
    "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg focus:ring-purple-500",
  gradientGlow:
    "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 blur-xl group-hover:opacity-80 transition",
  footer:
    "max-w-lg mx-auto mt-12 text-base text-gray-600 text-center leading-relaxed",
  footerLink:
    "font-semibold text-purple-600 hover:text-purple-700 transition-colors",
};

function Pricing13() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        {/* Header */}
        <div className="text-center">
          <h2 className={commonStyles.header}>Choose your plan</h2>
          <p className={commonStyles.subheader}>
            Discover AuraUI’s exclusive pricing for our advanced solutions.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className={commonStyles.grid}>
          {/* Monthly Plan */}
          <div className={commonStyles.card}>
            <div className={commonStyles.cardContent}>
              <p className={commonStyles.title}>Pay Monthly</p>
              <p className={commonStyles.description}>
                Enjoy the flexibility of our monthly plan. Perfect for trying
                out AuraUI’s features.
              </p>

              <div className={commonStyles.priceContainer}>
                <p className={commonStyles.price}>
                  <FaDollarSign className={commonStyles.priceIcon} />
                  19
                </p>
                <p className={commonStyles.priceSub}>per month</p>
              </div>

              <div className={commonStyles.priceContainer}>
                <p className={commonStyles.price}>
                  <FaCreditCard className={commonStyles.priceIcon} />
                  228
                </p>
                <p className={commonStyles.priceSub}>per year</p>
              </div>

              <a
                href="#"
                className={`${commonStyles.button} ${commonStyles.buttonMonthly}`}
              >
                Get Monthly Plan
              </a>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="relative group">
            {/* Glow */}
            <div className={commonStyles.gradientGlow}></div>

            <div className={commonStyles.card}>
              <div className={commonStyles.cardContent}>
                {/* Badge */}
                <div className={commonStyles.badge}>Best Value</div>

                <p className={commonStyles.title}>Pay Yearly</p>
                <p className={commonStyles.description}>
                  Opt for our yearly plan and save more while accessing all
                  advanced features of AuraUI.
                </p>

                <div className={commonStyles.priceContainer}>
                  <p className={commonStyles.price}>
                    <FaDollarSign className={commonStyles.priceIcon} />
                    12
                  </p>
                  <p className={commonStyles.priceSub}>per month</p>
                </div>

                <div className={commonStyles.priceContainer}>
                  <p className={commonStyles.price}>
                    <FaCreditCard className={commonStyles.priceIcon} />
                    144
                  </p>
                  <p className={commonStyles.priceSub}>per year</p>
                </div>

                <a
                  href="#"
                  className={`${commonStyles.button} ${commonStyles.buttonYearly}`}
                >
                  Get Yearly Plan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className={commonStyles.footer}>
          Looking for a bigger commitment?{" "}
          <a href="#" className={commonStyles.footerLink}>
            Let’s talk
          </a>{" "}
          and we’ll customize a plan just for you.
        </p>
      </div>
    </section>
  );
}

export default Pricing13;

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

function Pricing3() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={commonStyles.heading}>Plans that scale with Auraui</h2>
          <p className={commonStyles.paragraph}>
            Auraui offers scalable plans designed to meet the needs of any
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
          <div className={commonStyles.card}>
            <div className={commonStyles.cardHeader}>
              <div className="flex items-start">
                <GiArmoredBoomerang className="text-3xl shrink-0" />
                <div className="ml-6">
                  <h3 className={commonStyles.cardTitle}>Basic</h3>
                  <p className={commonStyles.cardDescription}>
                    Perfect for startups and small teams looking to explore
                    Auraui.
                  </p>
                </div>
              </div>
            </div>

            <div className={commonStyles.cardBody}>
              <div className="flex items-end">
                <p className={commonStyles.price}>$0</p>
                <p className={commonStyles.priceLabel}>/mo/user</p>
              </div>

              <div className="mt-6">
                <a href="#" title="" className={commonStyles.button}>
                  Get 14 days free trial
                </a>
              </div>

              <p className={commonStyles.footerText}>Best for free</p>

              <ul className={commonStyles.cardFooter}>
                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Full Access to Auraui
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  100 GB Free Storage
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Unlimited Visitors
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  10 Agents
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Live Chat Support
                </li>
              </ul>
            </div>
          </div>

          <div className={`${commonStyles.card} relative mt-14 lg:mt-0`}>
            <div className="absolute top-0 right-0 flex items-start -mt-8">
              <IoMdRocket className="w-auto h-16 text-blue-600" />
              <span className={commonStyles.tag}>Most popular</span>
            </div>

            <div className={commonStyles.cardHeader}>
              <div className="flex items-start">
                <IoMdRocket className="text-3xl shrink-0" />
                <div className="ml-6">
                  <h3 className={commonStyles.cardTitle}>Pro</h3>
                  <p className={commonStyles.cardDescription}>
                    Ideal for growing teams and businesses requiring more
                    features and flexibility.
                  </p>
                </div>
              </div>
            </div>

            <div className={commonStyles.cardBody}>
              <div className="flex items-end">
                <p className={commonStyles.price}>$49</p>
                <p className={commonStyles.priceLabel}>/mo/user</p>
              </div>

              <div className="mt-6">
                <a href="#" title="" className={commonStyles.button}>
                  Get 14 days free trial
                </a>
              </div>

              <p className={commonStyles.footerText}>Most popular</p>

              <ul className={commonStyles.cardFooter}>
                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Full Access to Auraui
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  100 GB Free Storage
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Unlimited Visitors
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  10 Agents
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Live Chat Support
                </li>
              </ul>
            </div>
          </div>

          <div className={`${commonStyles.card} mt-6 lg:mt-0`}>
            <div className={commonStyles.cardHeader}>
              <div className="flex items-start">
                <IoMdRocket className="text-3xl shrink-0" />
                <div className="ml-6">
                  <h3 className={commonStyles.cardTitle}>Exclusive</h3>
                  <p className={commonStyles.cardDescription}>
                    For enterprises and advanced users needing premium support
                    and features.
                  </p>
                </div>
              </div>
            </div>

            <div className={commonStyles.cardBody}>
              <div className="flex items-end">
                <p className={commonStyles.price}>$99</p>
                <p className={commonStyles.priceLabel}>/mo/user</p>
              </div>

              <div className="mt-6">
                <a href="#" title="" className={commonStyles.button}>
                  Get 14 days free trial
                </a>
              </div>

              <p className={commonStyles.footerText}>Exclusive plan</p>

              <ul className={commonStyles.cardFooter}>
                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Full Access to Auraui
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  100 GB Free Storage
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Unlimited Visitors
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  10 Agents
                </li>

                <li className={commonStyles.featureItem}>
                  <FaCheckCircle className={commonStyles.featureIcon} />
                  Live Chat Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing3;

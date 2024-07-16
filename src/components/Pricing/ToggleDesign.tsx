import React from "react";
import { FaStar, FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";

const styles = {
  section: "py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  textBase: "text-base font-normal leading-7 text-gray-800 lg:text-lg lg:leading-8",
  heading: "mt-6 text-3xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl",
  subHeading: "mt-1 text-sm font-normal text-gray-600",
  featureList: "mt-8 space-y-4 text-base text-gray-600 font-medium text-left",
  button: "inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700",
  starIcon: "w-5 h-5 text-yellow-400",
  checkIcon: "w-5 h-5 mr-2 text-green-600 shrink-0",
  timesIcon: "w-5 h-5 mr-2 text-gray-400 shrink-0",
};

const PricingSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 gap-y-12 lg:gap-x-8 xl:gap-x-16">
          <div className="flex flex-col justify-between lg:col-span-2 xl:col-span-3">
            <div className="flex-1">
              <p className="text-base font-semibold text-blue-600">Say hello to AuraUI</p>
              <h2 className={styles.heading}>Pricing that scales with your business</h2>
              <p className={`mt-4 ${styles.textBase} lg:pr-24 lg:mt-6`}>
                AuraUI gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
              </p>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 lg:mt-0">
              <p className="text-base font-semibold text-gray-900">Trusted by 50k+ customers</p>
              <div className="flex items-center mt-3 space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={styles.starIcon} />
                  ))}
                </div>
                <p className="text-base font-normal text-gray-900">4.4/5</p>
                <p className="text-base font-normal text-gray-600">•</p>
                <p className="text-base font-normal text-gray-600">3,841 Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 text-center lg:col-span-3 xl:col-span-4 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 shadow-xl rounded-2xl sm:rounded-3xl">
              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Pro</h3>
                <p className={styles.subHeading}>Best for startups</p>

                <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-end justify-center space-x-0.5">
                      <p className="pb-1 text-xl font-semibold text-gray-900">$</p>
                      <p className="text-5xl font-semibold tracking-tight text-gray-900">39</p>
                      <p className="pb-1 text-xl font-semibold text-gray-900">/mo</p>
                    </div>
                    <p className="mt-2 text-sm font-normal text-gray-500">Billed Annually</p>
                  </div>
                </div>

                <ul className={styles.featureList}>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    Full Access to AuraUI
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    100 GB Free Storage
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    Unlimited Visitors
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    10 Agents
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaTimes className={styles.timesIcon} />
                    Live Chat Support
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="#" className={styles.button} role="button">
                    Get 14 days free trial
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl">
              <div className="px-4 py-5 sm:px-6 sm:py-8">
                <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Exclusive</h3>
                <p className={styles.subHeading}>Best for big teams</p>

                <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-end justify-center space-x-0.5">
                      <p className="pb-1 text-xl font-semibold text-gray-900">$</p>
                      <p className="text-5xl font-semibold tracking-tight text-gray-900">99</p>
                      <p className="pb-1 text-xl font-semibold text-gray-900">/mo</p>
                    </div>
                    <p className="mt-2 text-sm font-normal text-gray-500">Billed Annually</p>
                  </div>
                </div>

                <ul className={styles.featureList}>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    Full Access to AuraUI
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    100 GB Free Storage
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    Unlimited Visitors
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    10 Agents
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} />
                    Live Chat Support
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="#" className={styles.button} role="button">
                    Get 14 days free trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

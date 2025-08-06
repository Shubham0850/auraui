import React from "react";
import { FaStar, FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";

const styles = {
  section: "relative py-16 lg:py-24 bg-gray-50 overflow-hidden",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10",
  heading:
    "mt-4 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl",
  subHeading: "mt-2 text-base font-medium text-gray-600 lg:text-lg",
  featureList: "mt-8 space-y-4 text-base text-gray-700 font-medium text-left",
  button:
    "inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",
  starIcon: "w-5 h-5 text-yellow-400",
  checkIcon: "w-5 h-5 mr-2 text-green-600 shrink-0",
  timesIcon: "w-5 h-5 mr-2 text-gray-400 shrink-0",
};

const Pricing17: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Soft gradient background glow */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #44ff9a, #44b0ff, #8b44ff, #ff6644, #ebff70)",
        }}
      ></div>

      <div className={styles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 gap-y-12 lg:gap-x-10 xl:gap-x-16">
          {/* Left Info Section */}
          <div className="flex flex-col justify-between lg:col-span-2 xl:col-span-3">
            <div>
              <p className="text-base font-semibold text-indigo-600 uppercase tracking-wider">
                Say hello to AuraUI
              </p>
              <h2 className={styles.heading}>
                Pricing that scales with your business
              </h2>
              <p className={`mt-4 ${styles.subHeading} lg:pr-20`}>
                AuraUI gives you everything you need to craft stunning websites,
                landing pages, and SaaS dashboards with ease.
              </p>
            </div>

            {/* Ratings */}
            <div className="pt-10 mt-10 border-t border-gray-200 lg:mt-12">
              <p className="text-base font-semibold text-gray-900">
                Trusted by 50k+ customers
              </p>
              <div className="flex items-center mt-3 space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={styles.starIcon} />
                  ))}
                </div>
                <p className="text-base font-medium text-gray-900">4.4/5</p>
                <span className="text-gray-400">•</span>
                <p className="text-base text-gray-600">3,841 Reviews</p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center lg:col-span-3 xl:col-span-4">
            {/* Pro Plan */}
            <div className="relative bg-white border border-gray-200 shadow-xl rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="px-6 py-8 sm:px-8">
                <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
                  Pro
                </h3>
                <p className={styles.subHeading}>Best for startups</p>

                <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                  <div className="px-6 py-6">
                    <div className="flex items-end justify-center">
                      <p className="pb-1 text-xl font-semibold text-gray-900">
                        $
                      </p>
                      <p className="text-5xl font-extrabold tracking-tight text-gray-900">
                        39
                      </p>
                      <p className="pb-1 text-xl font-semibold text-gray-900">
                        /mo
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Billed Annually
                    </p>
                  </div>
                </div>

                <ul className={styles.featureList}>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> Full Access to
                    AuraUI
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> 100 GB Free Storage
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> Unlimited Visitors
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> 10 Agents
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaTimes className={styles.timesIcon} /> Live Chat Support
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="#" className={styles.button}>
                    Get 14 days free trial
                  </Link>
                </div>
              </div>
            </div>

            {/* Exclusive Plan */}
            <div className="relative bg-white border-2 border-indigo-600 shadow-xl rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="px-6 py-8 sm:px-8">
                <h3 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
                  Exclusive
                </h3>
                <p className={styles.subHeading}>Best for big teams</p>

                <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                  <div className="px-6 py-6">
                    <div className="flex items-end justify-center">
                      <p className="pb-1 text-xl font-semibold text-gray-900">
                        $
                      </p>
                      <p className="text-5xl font-extrabold tracking-tight text-gray-900">
                        99
                      </p>
                      <p className="pb-1 text-xl font-semibold text-gray-900">
                        /mo
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Billed Annually
                    </p>
                  </div>
                </div>

                <ul className={styles.featureList}>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> Full Access to
                    AuraUI
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> 100 GB Free Storage
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> Unlimited Visitors
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> 10 Agents
                  </li>
                  <li className="flex items-center">
                    <FaCheck className={styles.checkIcon} /> Live Chat Support
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="#" className={styles.button}>
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

export default Pricing17;

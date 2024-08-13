import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const commonStyles = {
  card: "flex flex-col p-8 transition-transform duration-200 transform bg-gray-900 rounded-md hover:-translate-y-2",
  header: "text-lg font-normal text-white",
  price: "text-6xl font-normal text-white",
  period: "ml-1 text-base font-normal text-gray-500",
  description: "mt-4 text-base font-normal text-gray-400",
  divider: "mt-8 border-gray-800",
  listItem: "flex items-center",
  listIcon: "w-5 h-5 text-gray-500",
  listText: "ml-2 text-base font-normal text-white",
  button:
    "relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-gray-900 border border-transparent rounded-md",

  gradientButton:
    "inline-flex items-center cursor-pointer justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150",
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  title: "text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  subtitle: "mt-6 text-lg font-normal text-gray-400",
  grid: "grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 lg:grid-cols-3 xl:gap-8 sm:mt-16 lg:max-w-6xl",
  listButton:
    "flex items-center ml-2 text-gray-500 transition-all duration-200 hover:text-white",
};

function Pricing8() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={commonStyles.title}>Simple, easy pricing</h2>
          <p className={commonStyles.subtitle}>
            Get the proper information about pricing for AuraUI
          </p>
        </div>

        <div className={commonStyles.grid}>
          {[
            {
              title: "Personal",
              price: "$19",
              features: [
                "Full Access to AuraUI",
                "100 GB Free Storage",
                "Unlimited Visitors",
                "10 Agents",
                "Live Chat Support",
              ],
            },
            {
              title: "Professional",
              price: "$49",
              features: [
                "Full Access to AuraUI",
                "100 GB Free Storage",
                "Unlimited Visitors",
                "10 Agents",
                "Live Chat Support",
              ],
            },
            {
              title: "Business",
              price: "$99",
              features: [
                "Full Access to AuraUI",
                "100 GB Free Storage",
                "Unlimited Visitors",
                "10 Agents",
                "Live Chat Support",
              ],
            },
          ].map((plan, index) => (
            <div key={index} className={`${commonStyles.card} relative`}>
              <div className="relative flex-1">
                <h3 className={commonStyles.header}>{plan.title}</h3>

                <div className="flex items-end mt-3">
                  <p className={commonStyles.price}>{plan.price}</p>
                  <p className={commonStyles.period}>/ month</p>
                </div>
                <p className={commonStyles.description}>
                  All the basic features to boost your freelance career
                </p>

                <hr className={commonStyles.divider} />

                <ul className="mt-8 space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={commonStyles.listItem}>
                      <FaCheck className={commonStyles.listIcon} />
                      <span className={commonStyles.listText}> {feature} </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8">
                <div className={commonStyles.gradientButton}>
                  Get 14 Days Free Trial
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing8;

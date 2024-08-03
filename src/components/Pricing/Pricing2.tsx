import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const commonStyles = {
  section: "py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headingContainer: "max-w-2xl mx-auto text-center",
  headingTitle:
    "mt-6 text-3xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl",
  headingSubtitle:
    "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
  table: "w-full",
  tableHead: "py-8 pr-4",
  tableHeader: "px-4 py-8 text-left",
  tableBody: "px-4 py-4 border-b border-gray-200",
  icon: "w-5 h-5 text-green-600",
  emptyIcon: "w-5 h-5 text-gray-300",
  gridContainer: "grid grid-cols-4 divide-x divide-gray-200",
  gridItem: "px-2 py-2 sm:px-4",
  gridText: "text-sm font-medium text-gray-500",
  gridPrice: "mt-2 text-base font-semibold text-gray-900",
};

function Pricing2() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.headingContainer}>
          <p className="text-base font-semibold text-blue-600">
            Compare Auraui plans with each other
          </p>
          <h2 className={commonStyles.headingTitle}>
            Choose the perfect plan for your needs
          </h2>
          <p className={commonStyles.headingSubtitle}>
            Auraui provides comprehensive solutions tailored to your business
            needs. Our plans offer scalable features and benefits to help you
            thrive in the modern web landscape.
          </p>
        </div>

        {/* lg+ */}
        <div className="hidden mt-16 lg:block">
          <table className={commonStyles.table}>
            <thead>
              <tr>
                <th className={commonStyles.tableHead}></th>
                <th className={commonStyles.tableHeader}>
                  <span className="text-base font-medium text-gray-500">
                    Starter
                  </span>
                  <p className="mt-3 text-2xl font-semibold text-gray-900">
                    $99/mo
                  </p>
                </th>
                <th className={commonStyles.tableHeader}>
                  <span className="text-base font-medium text-gray-500">
                    Pro
                  </span>
                  <p className="mt-3 text-2xl font-semibold text-gray-900">
                    $199/mo
                  </p>
                </th>
                <th className={commonStyles.tableHeader}>
                  <span className="text-base font-medium text-gray-500">
                    Company
                  </span>
                  <p className="mt-3 text-2xl font-semibold text-gray-900">
                    $349/mo
                  </p>
                </th>
                <th className={commonStyles.tableHeader}>
                  <span className="text-base font-medium text-gray-500">
                    Enterprise
                  </span>
                  <p className="mt-3 text-2xl font-semibold text-gray-900">
                    $499/mo
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Common Inbox",
                  starter: true,
                  pro: true,
                  company: true,
                  enterprise: true,
                },
                {
                  feature: "Cloud Storage",
                  starter: "50 GB",
                  pro: "100 GB",
                  company: "500 GB",
                  enterprise: "1 TB",
                },
                {
                  feature: "Ads Management",
                  starter: true,
                  pro: true,
                  company: true,
                  enterprise: true,
                },
                {
                  feature: "Instant Data Refresh",
                  starter: false,
                  pro: true,
                  company: true,
                  enterprise: true,
                },
                {
                  feature: "Team Members",
                  starter: "2",
                  pro: "5",
                  company: "10",
                  enterprise: "Unlimited",
                },
                {
                  feature: "Advanced Reporting",
                  starter: false,
                  pro: true,
                  company: true,
                  enterprise: true,
                },
              ].map(({ feature, starter, pro, company, enterprise }, idx) => (
                <tr key={idx}>
                  <td className="py-4 pr-4 text-base font-normal text-gray-900 border-b border-gray-200">
                    {feature}
                  </td>
                  <td className={commonStyles.tableBody}>
                    {typeof starter === "boolean" ? (
                      starter ? (
                        <FaCheck className={commonStyles.icon} />
                      ) : (
                        <FaTimes className={commonStyles.emptyIcon} />
                      )
                    ) : (
                      starter
                    )}
                  </td>
                  <td className={commonStyles.tableBody}>
                    {typeof pro === "boolean" ? (
                      pro ? (
                        <FaCheck className={commonStyles.icon} />
                      ) : (
                        <FaTimes className={commonStyles.emptyIcon} />
                      )
                    ) : (
                      pro
                    )}
                  </td>
                  <td className={commonStyles.tableBody}>
                    {typeof company === "boolean" ? (
                      company ? (
                        <FaCheck className={commonStyles.icon} />
                      ) : (
                        <FaTimes className={commonStyles.emptyIcon} />
                      )
                    ) : (
                      company
                    )}
                  </td>
                  <td className={commonStyles.tableBody}>
                    {typeof enterprise === "boolean" ? (
                      enterprise ? (
                        <FaCheck className={commonStyles.icon} />
                      ) : (
                        <FaTimes className={commonStyles.emptyIcon} />
                      )
                    ) : (
                      enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* xs to lg */}
        <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
          <div className={commonStyles.gridContainer}>
            {["Starter", "Pro", "Company", "Enterprise"].map((plan, idx) => (
              <div className={commonStyles.gridItem} key={idx}>
                <span className={commonStyles.gridText}>{plan}</span>
                <p className={commonStyles.gridPrice}>
                  {plan === "Starter" && "$99/mo"}
                  {plan === "Pro" && "$199/mo"}
                  {plan === "Company" && "$349/mo"}
                  {plan === "Enterprise" && "$499/mo"}
                </p>
              </div>
            ))}
          </div>

          <div className={commonStyles.gridItem}>
            <p className="text-base font-medium text-gray-900">Common Inbox</p>
          </div>

          <div className={commonStyles.gridContainer}>
            {[
              { starter: true, pro: true, company: true, enterprise: true },
              {
                starter: "50 GB",
                pro: "100 GB",
                company: "500 GB",
                enterprise: "1 TB",
              },
              { starter: true, pro: true, company: true, enterprise: true },
              { starter: false, pro: true, company: true, enterprise: true },
              {
                starter: "2",
                pro: "5",
                company: "10",
                enterprise: "Unlimited",
              },
              { starter: false, pro: true, company: true, enterprise: true },
            ].map((row, idx) => (
              <div className={commonStyles.gridContainer} key={idx}>
                {Object.values(row).map((value, subIdx) => (
                  <div className={commonStyles.gridItem} key={subIdx}>
                    {typeof value === "boolean" ? (
                      value ? (
                        <FaCheck className={commonStyles.icon} />
                      ) : (
                        <FaTimes className={commonStyles.emptyIcon} />
                      )
                    ) : (
                      value
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing2;

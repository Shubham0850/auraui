import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Pricing2 = () => {
  const plans = ["Starter", "Pro", "Company", "Enterprise"];
  const prices = ["$99/mo", "$199/mo", "$349/mo", "$499/mo"];

  const features = [
    {
      feature: "Common Inbox",
      values: [true, true, true, true],
    },
    {
      feature: "Cloud Storage",
      values: ["50 GB", "100 GB", "500 GB", "1 TB"],
    },
    {
      feature: "Ads Management",
      values: [true, true, true, true],
    },
    {
      feature: "Instant Data Refresh",
      values: [false, true, true, true],
    },
    {
      feature: "Team Members",
      values: ["2", "5", "10", "Unlimited"],
    },
    {
      feature: "Advanced Reporting",
      values: [false, true, true, true],
    },
  ];

  const renderIcon = (value: boolean) =>
    value ? (
      <FaCheck className="w-5 h-5 text-green-500 transition-transform duration-300 group-hover:scale-125" />
    ) : (
      <FaTimes className="w-5 h-5 text-red-400 opacity-70 group-hover:rotate-12 transition-transform duration-300" />
    );

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 sm:py-20 lg:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base font-semibold text-blue-600">
            Compare AuraUI Plans
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              perfect plan
            </span>{" "}
            for your team
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            AuraUI provides comprehensive solutions tailored to your business
            needs. Explore and find what fits best.
          </p>
        </div>

        {/* Table View (lg+) */}
        <div className="hidden mt-16 lg:block overflow-hidden rounded-2xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 via-white to-purple-50">
                <th className="px-6 h-28 text-left align-middle"></th>
                {plans.map((plan, idx) => (
                  <th
                    key={plan}
                    className={`px-6 h-28 text-center align-middle ${
                      plan === "Enterprise"
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-xl"
                        : "text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-lg font-semibold">{plan}</span>
                      <p
                        className={`mt-2 text-2xl font-bold ${
                          plan === "Enterprise" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {prices[idx]}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map(({ feature, values }, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-50/80 transition-colors duration-300"
                >
                  <td className="px-6 py-6 text-base font-medium text-gray-900">
                    {feature}
                  </td>
                  {values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-6 py-6 text-center align-middle ${
                        plans[i] === "Enterprise" && idx === features.length - 1
                          ? "rounded-b-xl bg-blue-50/30"
                          : plans[i] === "Enterprise"
                          ? "bg-blue-50/30"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center h-full">
                        {typeof val === "boolean" ? (
                          val ? (
                            <FaCheck className="w-5 h-5 text-green-500" />
                          ) : (
                            <FaTimes className="w-5 h-5 text-red-400 opacity-70" />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">
                            {val}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (xs - lg) */}
        <div className="mt-12 space-y-8 lg:hidden">
          {plans.map((plan, idx) => (
            <div
              key={plan}
              className={`rounded-xl shadow-md border p-6 ${
                plan === "Enterprise"
                  ? "border-2 border-transparent bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan}</h3>
                <p
                  className={`text-lg font-bold ${
                    plan === "Enterprise" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {prices[idx]}
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {features.map(({ feature, values }, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        plan === "Enterprise"
                          ? "text-blue-100"
                          : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                    {typeof values[idx] === "boolean"
                      ? renderIcon(values[idx] as boolean)
                      : values[idx]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;

import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const anchorStyles =
  "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

const cardStyles =
  "flex flex-col justify-between flex-shrink-0 w-4/5 divide-y-2 rounded-2xl bg-dark-gray sm:w-3/5 lg:w-full md:w-2/5 divide-neutral divide-opacity-50";
const textBase = "font-sans text-base font-normal text-white";
const textHeading = "font-sans text-2xl font-normal text-white";
const textPrice = "mt-5 font-sans text-4xl font-normal text-white";
const textSmall = "mt-2 font-sans text-base font-normal text-white";
const iconSize = "h-4 w-4 ml-2 text-white";
const checkIconSize = "text-white h-5 w-5 ml-2";

function Pricing7() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mx-auto text-center lg:text-left sm:max-w-lg lg:mx-0">
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal md:text-6xl">
                Pricing
              </span>
              <span className="font-serif text-5xl italic md:text-7xl">
                {" "}
                Options
              </span>
            </h2>
            <p className="mt-6 font-sans text-lg font-normal text-opacity-50 text-white">
              Discover our flexible pricing plans tailored to your needs.
            </p>
          </div>

          <div className="flex items-center mt-8 lg:mt-0 justify-center lg:justify-end space-x-2.5">
            <span className="font-sans text-base font-normal text-white">
              Monthly
            </span>
            <button
              type="button"
              className="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-primary rounded-full cursor-pointer w-12 focus:outline-none"
              role="switch"
            >
              <span
                aria-hidden="true"
                className="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-[26px] rounded-full shadow pointer-events-none bg-white"
              ></span>
            </button>
            <span className="font-sans text-base font-normal text-white">
              Yearly
            </span>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="flex w-full gap-5 mt-12 overflow-auto lg:overflow-hidden lg:gap-6 whitespace-nowrap lg:grid lg:grid-cols-3 flex-nowrap">
            {[
              {
                plan: "Beginner",
                price: "$9",
                details: [
                  "Lorem ipsum Up to 3",
                  "Cancel anytime",
                  "Lorem ipsum",
                ],
              },
              {
                plan: "Pro",
                price: "$59",
                details: [
                  "Lorem ipsum Up to 3",
                  "Cancel anytime",
                  "Lorem ipsum",
                ],
              },
              {
                plan: "Intermediate",
                price: "$29",
                details: [
                  "Lorem ipsum Up to 3",
                  "Cancel anytime",
                  "Lorem ipsum",
                  "Zoom Call",
                ],
              },
            ].map((item, index) => (
              <div key={index} className={cardStyles}>
                <div className="flex-1 p-6 lg:px-10 lg:py-8">
                  <h3 className={textHeading}>{item.plan}</h3>
                  <h1 className={textPrice}>{item.price}</h1>
                  <h1 className={textSmall}>per month</h1>
                </div>
                {item.details.map((detail, i) => (
                  <div key={i} className="px-6 py-3">
                    <p className={textBase}>
                      {detail}
                      {detail.includes("Zoom Call") && (
                        <MdOutlineInfo className={iconSize} />
                      )}
                    </p>
                  </div>
                ))}
                <div className="px-6 py-6 text-center">
                  <a href="#" className={anchorStyles}>
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-neutral"></div>
          </div>
        </div>

        <div className="hidden mt-24 lg:block">
          <table className="w-full text-left divide-y-2 divide-neutral">
            <thead>
              <tr>
                <td className="w-[20%] xl:w-[30%] pr-10 py-6">
                  <p className="font-sans text-base font-bold text-white">
                    Plans
                  </p>
                </td>
                {["Beginner", "Intermediate", "Pro"].map((plan, i) => (
                  <td
                    key={i}
                    className={
                      i === 1 ? "px-10 py-6 bg-dark-gray" : "px-10 py-6"
                    }
                  >
                    <p className="font-sans text-2xl font-normal text-white">
                      {plan}
                    </p>
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                { label: "Pricing", values: ["$19", "$29", "$59"] },
                {
                  label: "Video courses",
                  values: ["10", "Unlimited", "Unlimited"],
                },
                {
                  label: "Slack",
                  values: ["Limited access", "Unlimited", "Unlimited"],
                },
                {
                  label: "Lorem ipsum",
                  values: ["Up to 3", "Up to 10", "Up to 10"],
                },
                {
                  label: "Cancel anytime",
                  values: ["Unlimited", "Unlimited", "Unlimited"],
                },
                {
                  label: "Lorem ipsum",
                  values: [
                    <FaCheck className={checkIconSize} />,
                    <FaCheck className={checkIconSize} />,
                    <FaCheck className={checkIconSize} />,
                  ],
                },
                {
                  label: "Zoom Call",
                  values: [
                    "",
                    <FaCheck className={checkIconSize} />,
                    <FaCheck className={checkIconSize} />,
                  ],
                },
                {
                  label: "Lorem ipsum",
                  values: [
                    <FaCheck className={checkIconSize} />,
                    <FaCheck className={checkIconSize} />,
                    "",
                  ],
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="py-3 pr-10">
                    <div className="flex items-center">
                      <p className={textBase}>{row.label}</p>
                      {row.label.includes("Zoom Call") && (
                        <MdOutlineInfo className={iconSize} />
                      )}
                    </div>
                  </td>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className={
                        i === 1 ? "px-10 py-3 bg-dark-gray" : "px-10 py-3"
                      }
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-3 pr-10"></td>
                {["Buy", "Buy", "Buy"].map((text, index) => (
                  <td
                    key={index}
                    className={
                      index === 1
                        ? "px-10 pt-3 pb-8 bg-dark-gray"
                        : "px-10 pt-3 pb-8"
                    }
                  >
                    <a href="#" className={anchorStyles}>
                      {text}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Pricing7;

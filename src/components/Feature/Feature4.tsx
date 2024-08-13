import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading:
    "text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  subHeading: "mt-8 text-xl font-normal text-white",
  paragraph: "mt-8 text-lg font-normal text-gray-400",
  hr: "mt-8 border-gray-800 sm:mt-12",
  listItem: "flex items-start text-lg font-normal text-white",
  icon: "w-6 h-6 shrink-0 text-cyan-500",
  button:
    "inline-flex items-center px-5 py-3 text-base font-normal bg-black bg-gradient-to-r from-cyan-500 to-purple-500",
  buttonText:
    "ml-4  bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500",
};

const featureItems = [
  "Get unlimited design inspirations. Level up your design.",
  "14+ Premium Tailwind UI kits. Start with unlimited product downloads.",
  "Submit your design. Get extra exposure on works to grow fast.",
];

const Feature4: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20">
          <div className="lg:col-span-3 lg:order-last">
            <div className="relative overflow-hidden">
              <Image
                className="object-cover rounded-md w-full h-full"
                src="/images/man.webp"
                alt="Secure Data with Auraui"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute bottom-0 left-0">
                <Link
                  href="#"
                  title="Start Securing All Data"
                  className={commonStyles.button}
                  role="button"
                >
                  <span className={commonStyles.buttonText}>
                    Start Securing All Data
                  </span>
                  <FaCheckCircle className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className={commonStyles.heading}>Secure your data</h2>
            <p className={commonStyles.subHeading}>
              <span className={commonStyles.buttonText}>
                Keep control on your projects.
              </span>{" "}
              Don&apos;t make the same mistakes.
            </p>
            <p className={commonStyles.paragraph}>
              Auraui provides cutting-edge solutions to secure your data and
              ensure you have full control over your projects. With our
              innovative tools, you can prevent costly mistakes and elevate your
              designs to the next level.
            </p>

            <hr className={commonStyles.hr} />

            <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 sm:mt-12 gap-x-12 gap-y-8 sm:gap-y-12">
              {featureItems.map((item, index) => (
                <li key={index} className={commonStyles.listItem}>
                  <FaCheckCircle className={commonStyles.icon} />
                  <span className="ml-4">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;

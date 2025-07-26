import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-16 bg-black sm:py-20 lg:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading: "text-4xl font-semibold text-white sm:text-5xl lg:text-6xl",
  subHeading: "mt-6 text-xl font-normal text-white",
  paragraph: "mt-6 text-lg text-gray-400",
  hr: "mt-10 border-gray-800",
  listItem: "flex items-start text-lg text-white",
  icon: "w-6 h-6 text-cyan-400 mt-1",
  buttonWrapper: "mt-10 flex justify-center",
  button:
    "inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-all",
};

const featureItems = [
  "Get unlimited design inspirations. Level up your design.",
  "14+ Premium Tailwind UI kits. Start with unlimited product downloads.",
  "Submit your design. Get extra exposure on works to grow fast.",
  "Access to community feedback. Improve and iterate faster.",
];

const Feature4: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-12 lg:gap-x-20 items-center">
          {/* Image */}
          <div className="lg:col-span-3 lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1617518016627-d73dd26e8ab0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working creatively"
                width={500}
                height={600}
                layout="responsive"
                className="rounded-3xl w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className={commonStyles.buttonWrapper}>
              <Link href="#" className={commonStyles.button}>
                Start Securing All Data <FaCheckCircle className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-4">
            <h2 className={commonStyles.heading}>Secure your data</h2>
            <p className={commonStyles.subHeading}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
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

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mt-10">
              {featureItems.map((item, index) => (
                <li key={index} className={commonStyles.listItem}>
                  <FaCheckCircle className={commonStyles.icon} />
                  <span className="ml-3">{item}</span>
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

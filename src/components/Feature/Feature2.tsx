import React from "react";
import Image from "next/image";
import { FiRefreshCw, FiDownload, FiMonitor } from "react-icons/fi";

function Feature2() {
  const commonStyles = {
    section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
    grid: "grid items-center max-w-md grid-cols-1 mx-auto md:max-w-5xl gap-y-8 md:grid-cols-2 gap-x-12 xl:gap-x-16",
    listItem: "flex items-start py-6 sm:py-10",
    iconWrapper:
      "relative w-10 h-10 shrink-0 bg-base-900 inline-flex items-center justify-center rounded-full",
    iconBackground:
      "absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500",
    icon: "w-5 h-5 text-white",
    text: "ml-6 text-lg font-normal text-white sm:text-xl",
  };

  const features = [
    {
      icon: <FiRefreshCw className={commonStyles.icon} />,
      description:
        "Unlock endless design possibilities with Auraui. Enhance your development workflow.",
    },
    {
      icon: <FiDownload className={commonStyles.icon} />,
      description:
        "Access premium Auraui UI kits. Kickstart your projects with seamless integrations.",
    },
    {
      icon: <FiMonitor className={commonStyles.icon} />,
      description:
        "Showcase your designs with Auraui. Elevate your exposure and grow faster.",
    },
  ];

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.grid}>
          <div>
            <Image
              className="w-full max-w-xs mx-auto"
              src="https://www.auraui.com/images/phone.avif"
              alt="Phone Mockup"
              width={400}
              height={300}
            />
          </div>

          <div>
            <ul className="divide-y divide-gray-800">
              {features.map((feature, index) => (
                <li key={index} className={commonStyles.listItem}>
                  <div className="relative w-10 h-10 shrink-0">
                    <div className={commonStyles.iconBackground}></div>
                    <div className={commonStyles.iconWrapper}>
                      {feature.icon}
                    </div>
                  </div>
                  <p className={commonStyles.text}>{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature2;

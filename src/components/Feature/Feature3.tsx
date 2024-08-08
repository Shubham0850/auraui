import React from "react";
import Image from "next/image";
import Link from "next/link";

function Feature3() {
  const commonStyles = {
    section: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
    grid: "grid grid-cols-1 lg:grid-cols-7 gap-x-20 gap-y-12",
    content: "lg:order-2 lg:col-span-4 max-w-lg lg:max-w-none",
    title:
      "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:pr-8",
    description:
      "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:pr-24 lg:leading-8",
    buttonContainer: "mt-8",
    button:
      "inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700",
    featuresGrid:
      "grid grid-cols-1 gap-8 pt-8 mt-8 border-t border-gray-200 sm:grid-cols-2 md:mt-16 xl:mt-24",
    featureItem: "mt-6",
    featureTitle: "text-lg font-medium text-gray-900",
    featureText: "mt-4 text-sm font-normal text-gray-600",
    featureLink:
      "text-sm font-semibold text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline",
    imageContainer:
      "grid p-12 bg-blue-100 lg:order-1 lg:col-span-3 rounded-3xl place-items-center",
  };

  const features = [
    {
      title: "Unlimited Resources",
      text: "Auraui provides a vast array of resources for modern web development.",
      linkText: "Download Free Resources",
      linkHref: "#",
    },
    {
      title: "Figma Included",
      text: "Access the Figma file for seamless design collaboration.",
      linkText: "Access to Figma File",
      linkHref: "#",
    },
  ];

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.grid}>
          <div className={commonStyles.content}>
            <h2 className={commonStyles.title}>
              Auraui is here to simplify your web development journey.
            </h2>
            <p className={commonStyles.description}>
              Auraui equips you with the blocks and components you need to build
              professional websites, landing pages, and admin panels with ease.
            </p>
            <div className={commonStyles.buttonContainer}>
              <a href="#" className={commonStyles.button} role="button">
                Start using Auraui
              </a>
            </div>

            <div className={commonStyles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className={commonStyles.featureTitle}>{feature.title}</h3>
                  <p className={commonStyles.featureText}>{feature.text}</p>
                  <div className={commonStyles.featureItem}>
                    <Link
                      href={feature.linkHref}
                      className={commonStyles.featureLink}
                    >
                      {feature.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={commonStyles.imageContainer}>
            <Image
              className="w-full shadow-xl rounded-xl sm:max-w-xs"
              src="https://images.unsplash.com/photo-1585247226801-bc613c441316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
              alt="Auraui Feature"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature3;

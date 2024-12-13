import React from "react";
import { FaVideo, FaSlack, FaFilePdf } from "react-icons/fa";
import Image from "next/image";

// Common styles
const commonStyles = {
  section: "lg:relative bg-black",
  container: "w-full pt-16 mx-auto sm:pb-12 max-w-7xl lg:py-32 xl:py-48",
  textContainer: "px-6 lg:w-1/2 sm:px-8 lg:px-12",
  heading: "tracking-tighter text-white",
  headingMain: "font-sans text-4xl md:text-6xl",
  headingHighlight: "font-serif text-5xl italic md:block md:text-7xl",
  description:
    "mt-6 font-sans text-base font-normal leading-7 text-opacity-50 lg:mt-8 text-white",
  list: "mt-12 space-y-5 font-serif text-3xl italic tracking-tight lg:mt-16 text-white",
  listItem:
    "flex items-center group transition-all duration-300 rounded-full bg-dark-gray group-hover:bg-white group-hover:text-black text-white",
  iconContainer:
    "inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-5",
  imageWrapper:
    "relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full",
  image: "absolute inset-0 object-cover w-full h-full",
};

const Feature10 = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.textContainer}>
          <h2 className={commonStyles.heading}>
            <span className={commonStyles.headingMain}>
              {" "}
              The easiest way to{" "}
            </span>
            <span className={commonStyles.headingHighlight}>
              {" "}
              optimize your workflow{" "}
            </span>
          </h2>

          <p className={commonStyles.description}>
            Auraui empowers your team with professional video lessons, a
            supportive Slack community, and comprehensive PDF guides. Streamline
            your projects and elevate your team&apos;s efficiency.
          </p>

          <ul className={commonStyles.list}>
            <li className={commonStyles.listItem}>
              <div className={commonStyles.iconContainer}>
                <FaVideo />
              </div>
              Video lessons from professionals
            </li>

            <li className={commonStyles.listItem}>
              <div className={commonStyles.iconContainer}>
                <FaSlack />
              </div>
              Slack community
            </li>

            <li className={commonStyles.listItem}>
              <div className={commonStyles.iconContainer}>
                <FaFilePdf />
              </div>
              PDF lessons
            </li>
          </ul>
        </div>
      </div>

      <div className={commonStyles.imageWrapper}>
        <Image
          className={commonStyles.image}
          src="https://auraui.com/images/women.jpg"
          alt="Auraui feature image"
          layout="fill"
        />
        <Image
          className={`${commonStyles.image} lg:hidden`}
          src="https://auraui.com/images/analytic_image.avif"
          alt="Auraui feature image mobile"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Feature10;

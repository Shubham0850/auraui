import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-12 sm:py-16 lg:py-20 bg-black",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  heading: "tracking-tighter text-white text-center sm:text-left",
  titlePrimary: "font-sans text-4xl md:text-6xl",
  titleSecondary: "font-serif text-5xl italic md:text-7xl",
  description:
    "max-w-2xl mx-auto mt-6 font-sans text-lg font-normal leading-8 text-opacity-50 lg:mt-8 text-white",
  featureCard:
    "relative overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray group",
  featureImageContainer: "overflow-hidden aspect-w-16 aspect-h-9",
  featureImage:
    "object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125",
  featureContent: "p-6 xl:px-8 xl:py-6",
  featureTitle: "font-sans text-2xl font-normal text-white",
  featureText: "mt-2 text-lg font-normal text-opacity-50 text-white",
  readMore:
    "inline-flex items-center justify-center mt-10 font-sans text-base font-normal text-white",
  exploreButton:
    "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary",
};

const features = [
  {
    title: "Interactive Lessons",
    description: "Learn with hands-on lessons in a dynamic environment.",
    image: "https://www.auraui.com/images/pc.jpg",
  },
  {
    title: "Community Support",
    description: "Join our community of developers and innovators.",
    image: "https://www.auraui.com/images/pc1.jpg",
  },
  {
    title: "Exclusive Resources",
    description: "Access our vast library of resources and guides.",
    image: "https://www.auraui.com/images/laptop.jpg",
  },
];

const Feature8: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.heading}>
          <h2>
            <span className={commonStyles.titlePrimary}>
              Empower Your Development
            </span>
            <span className={commonStyles.titleSecondary}>
              with Auraui Features
            </span>
          </h2>
          <p className={commonStyles.description}>
            Auraui offers a range of tools to help you build and scale your
            applications seamlessly. From interactive lessons to a supportive
            community, Auraui has it all.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-16 text-center lg:grid-cols-3 lg:max-w-none">
          {features.map((feature, index) => (
            <div key={index} className={commonStyles.featureCard}>
              <div className={commonStyles.featureImageContainer}>
                <Image
                  className={commonStyles.featureImage}
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                />
              </div>
              <div className={commonStyles.featureContent}>
                <h3 className={commonStyles.featureTitle}>{feature.title}</h3>
                <p className={commonStyles.featureText}>
                  {feature.description}
                </p>
                <Link href="#" title="Read More" className={commonStyles.readMore}>
                  Read More
                  <div className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-all duration-200 bg-transparent rounded-full group-hover:bg-neutral">
                    <FaArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            title="Explore All"
            className={commonStyles.exploreButton}
          >
            Explore All
            <FaArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature8;

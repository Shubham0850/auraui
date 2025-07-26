import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-20 bg-black ",
  container: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
  heading: "text-center sm:text-left",
  titlePrimary: "block font-sans text-4xl md:text-5xl text-white",
  titleSecondary:
    "block font-serif italic text-5xl md:text-6xl text-white mt-2",
  description:
    "mt-6 text-lg text-gray-400 leading-7 max-w-3xl mx-auto sm:mx-0 sm:mt-8",
  featureCard:
    "relative group overflow-hidden rounded-xl border border-neutral bg-[#111111] transition-all duration-300 hover:shadow-xl hover:border-gray-700",
  featureImageContainer: "relative w-full aspect-[16/10] overflow-hidden",
  featureImage:
    "object-cover transition-transform duration-500 group-hover:scale-110",
  featureContent: "p-6 text-left",
  featureTitle: "text-white text-2xl font-semibold",
  featureText: "mt-3 text-base text-gray-400",
  readMore:
    "inline-flex items-center gap-2 text-sm font-medium mt-5 text-white hover:underline transition",
  arrowIcon:
    "w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1",
  exploreButton:
    "inline-flex items-center justify-center px-6 py-3 mt-12 text-lg font-semibold text-black bg-white rounded-full hover:bg-opacity-90 transition",
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
        {/* Heading */}
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className={commonStyles.featureCard}>
              <div className={commonStyles.featureImageContainer}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  className={commonStyles.featureImage}
                />
              </div>
              <div className={commonStyles.featureContent}>
                <h3 className={commonStyles.featureTitle}>{feature.title}</h3>
                <p className={commonStyles.featureText}>
                  {feature.description}
                </p>
                <Link href="#" className={commonStyles.readMore}>
                  Read More
                  <FaArrowRight className={commonStyles.arrowIcon} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="#" className={commonStyles.exploreButton}>
            Explore All <FaArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature8;

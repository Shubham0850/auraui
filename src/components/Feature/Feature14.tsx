import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";

const Feature14 = () => {
  const sectionStyles = "py-10 bg-gray-50 sm:py-16 lg:py-24";
  const containerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const textCenterStyles = "text-center";
  const headingStyles =
    "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl";
  const cardContainerStyles = "px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16";
  const gridStyles = "grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2";
  const iconStyles = "flex-shrink-0 w-16 h-16 text-fuchsia-600";
  const cardTextContainerStyles = "ml-5";
  const cardHeadingStyles = "text-lg font-semibold text-black";
  const cardParagraphStyles = "mt-4 text-base text-gray-600";

  const cards = [
    {
      icon: (
        <>
          <FaUser className="flex-shrink-0 w-16 h-16 text-fuchsia-600 " />
        </>
      ),
      title: "Made for Developers",
      description:
        "AuraUI provides a library of components designed to make your development process faster and easier. Whether you are building a small project or a large-scale application, our components are here to help.",
    },
    {
      icon: (
        <>
          <IoIosVideocam className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
        </>
      ),
      title: "Helpful Video Tutorials",
      description:
        "We offer a collection of video tutorials to help you get started quickly with AuraUI. From basic setup to advanced usage, our tutorials cover everything you need to know.",
    },
    {
      icon: (
        <>
          <FaLaptopCode className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
        </>
      ),
      title: "120+ Coded Blocks",
      description:
        "Our library includes over 120 pre-coded blocks, making it easy to build complex layouts and designs quickly. Each block is optimized for performance and responsiveness.",
    },
    {
      icon: (
        <>
          <RiSecurePaymentFill className="flex-shrink-0 w-16 h-16 text-fuchsia-600" />
        </>
      ),
      title: "Secured Payments",
      description:
        "We prioritize your security. AuraUI ensures that all transactions are secure, giving you peace of mind while you focus on building your projects.",
    },
  ];

  return (
    <section className={sectionStyles}>
      <div className={containerStyles}>
        <div className={textCenterStyles}>
          <h2 className={headingStyles}>3,583 Customers are using AuraUI</h2>
        </div>
        <div className={cardContainerStyles}>
          <div className={gridStyles}>
            {cards.map((card, index) => (
              <div className="flex items-start" key={index}>
                {card.icon}
                <div className={cardTextContainerStyles}>
                  <h3 className={cardHeadingStyles}>{card.title}</h3>
                  <p className={cardParagraphStyles}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature14;

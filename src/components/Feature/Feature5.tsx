import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-20 bg-black",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  heading:
    "text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight",
  paragraph: "mt-6 text-lg leading-relaxed text-gray-400 max-w-xl sm:text-xl",
  buttonContainer:
    "relative inline-flex items-center justify-center mt-10 sm:mt-14 group",
  gradientBg:
    "absolute inset-0 z-0 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all",
  subHeading: "text-lg font-semibold text-white sm:text-xl mb-2",
  subParagraph: "text-base text-gray-400",
};

function Feature5() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className={commonStyles.heading}>
              auraui - 1400+ Unique Coded Blocks
            </h2>
            <p className={commonStyles.paragraph}>
              Auraui offers a vast collection of unique coded blocks to
              streamline your development process. Each block is crafted with
              precision to meet modern design standards and improve
              productivity.
            </p>
            <div className="relative inline-flex items-center justify-center mt-10 group">
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all"></div>
              <Link
                href="#"
                className="relative z-10 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-transparent border border-transparent rounded-md hover:opacity-90 transition"
              >
                Explore Auraui Blocks <FiExternalLink className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://www.auraui.com/images/digitization.webp"
                alt="Auraui Blocks"
                width={800}
                height={500}
                className="object-cover w-full"
              />
            </div>

            {/* Subfeatures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 text-center sm:text-left">
              <div>
                <h3 className={commonStyles.subHeading}>Unlimited Usages</h3>
                <p className={commonStyles.subParagraph}>
                  Auraui blocks can be used in unlimited projects, giving you
                  flexibility to build stunning designs across various
                  applications.
                </p>
              </div>
              <div>
                <h3 className={commonStyles.subHeading}>
                  Built with TailwindCSS
                </h3>
                <p className={commonStyles.subParagraph}>
                  Each block is built using TailwindCSS, ensuring a smooth and
                  responsive experience across all devices and screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature5;

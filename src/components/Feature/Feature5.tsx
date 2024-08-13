import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  heading:
    "text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  paragraph: "mt-8 text-lg font-normal text-gray-400",
  buttonContainer:
    "relative inline-flex items-center justify-center mt-8 sm:mt-12 group",
  button:
    "relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md",
  gradientBg:
    "absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50",
  subHeading: "text-xl font-normal text-white",
  subParagraph: "mt-3 text-base font-normal text-gray-400",
};

function Feature5() {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12">
          <div className="text-center lg:col-span-5 sm:text-left">
            <h2 className={commonStyles.heading}>
              Auraui - 1400+ Unique Coded Blocks
            </h2>
            <p className={commonStyles.paragraph}>
              Auraui offers a vast collection of unique coded blocks to
              streamline your development process. Each block is crafted with
              precision to meet modern design standards and improve
              productivity.
            </p>
            <div className={commonStyles.buttonContainer}>
              <div className={commonStyles.gradientBg}></div>
              <Link
                href="#"
                title="Explore Auraui Blocks"
                className={commonStyles.button}
                role="button"
              >
                Explore Auraui Blocks <FiExternalLink className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Image
              className="w-full rounded-sm "
              src="/images/digitization.webp"
              alt="Auraui Blocks"
              width={600}
              height={400}
            />

            <div className="grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 gap-x-16 sm:text-left">
              <div>
                <h3 className={commonStyles.subHeading}>Unlimited Usages</h3>
                <p className={commonStyles.subParagraph}>
                  Auraui blocks can be used in unlimited projects, giving you
                  the flexibility to create stunning designs across various
                  applications.
                </p>
              </div>

              <div>
                <h3 className={commonStyles.subHeading}>
                  Built with TailwindCSS
                </h3>
                <p className={commonStyles.subParagraph}>
                  Each block is built using TailwindCSS, ensuring a seamless and
                  responsive experience across all devices.
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

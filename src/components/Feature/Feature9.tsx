import React from "react";
import Image from "next/image";
import { FaTasks, FaCloud } from "react-icons/fa";

const commonStyles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headingContainer: "max-w-xl mx-auto text-center xl:max-w-3xl",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  description:
    "max-w-xl mx-auto mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj",
  relativeWrapper: "relative mt-8 sm:mt-16 md:max-w-md md:mx-auto",
  overlay:
    "absolute inset-0 w-full h-full max-w-lg rotate-180 opacity-30 blur-lg filter",
  textContainer:
    "flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-16",
  textBox: "flex items-center",
  textMain: "text-4xl font-medium text-gray-900 font-pj",
  textSub: "ml-5 text-sm text-gray-900 font-pj",
  imageContainer: "max-w-4xl mx-auto mt-10 sm:mt-16",
  image: "w-full rounded-sm",
};

const Feature9: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.headingContainer}>
          <h2 className={commonStyles.heading}>
            Build your solid team with the perfect time management
          </h2>
          <p className={commonStyles.description}>
            Auraui enhances your team&apos;s productivity with effortless task
            management and robust cloud storage solutions. Keep your team
            organized and your projects on track.
          </p>
        </div>

        <div className={commonStyles.relativeWrapper}>
          <div
            className={commonStyles.overlay}
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>

          <div className={commonStyles.textContainer}>
            <div className={commonStyles.textBox}>
              <FaTasks className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Unlimited</p>
                <p>Task Creation</p>
              </div>
            </div>

            <div className={`${commonStyles.textBox} mt-6 sm:mt-0`}>
              <FaCloud className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>100GB+</p>
                <p>Cloud Storage</p>
              </div>
            </div>
          </div>
        </div>

        <div className={commonStyles.imageContainer}>
          <Image
            className={commonStyles.image}
            src="/images/team.jpg"
            alt="Feature illustration"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature9;

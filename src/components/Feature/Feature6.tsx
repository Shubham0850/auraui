import React from "react";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const commonStyles = {
  heading: "font-sans text-2xl font-normal text-white",
  paragraph:
    "mt-3 font-sans text-lg font-normal leading-8 text-opacity-50 text-white",
  button:
    "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary",
};

const features = [
  {
    title: "Beginner and Pro levels",
    description:
      "Auraui offers a versatile learning experience, catering to both beginners and professionals, with resources to advance your skills in web development.",
  },
  {
    title: "Community Support",
    description:
      "Join the Auraui community on Slack for real-time support, discussions, and collaboration with fellow developers.",
  },
  {
    title: "Accessible Anywhere",
    description:
      "Access Auraui from any device, with our app available on both App Store and Google Play.",
  },
];

function Feature6() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-16 xl:gap-x-36">
          <div>
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl md:text-6xl">
                {" "}
                Elevate your{" "}
              </span>
              <span className="font-serif text-5xl italic lg:block md:text-7xl">
                {" "}
                development{" "}
              </span>
              <span className="font-sans text-4xl lg:block md:text-6xl">
                {" "}
                skills with Auraui.{" "}
              </span>
            </h2>
            <p className="mt-6 font-sans text-lg font-normal leading-8 text-opacity-50 lg:mt-8 text-white">
              Auraui is your gateway to mastering modern web development, with
              resources that adapt to your pace and level.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                title="Learn More"
                className={commonStyles.button}
                role="button"
              >
                Learn More
                <HiArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>

          <div>
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li key={index}>
                  <h3 className={commonStyles.heading}>{feature.title}</h3>
                  <p className={commonStyles.paragraph}>
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-16 group">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button
              type="button"
              className="flex flex-col items-center text-center"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 rounded-full text-black bg-white hover:bg-opacity-90">
                <HiPlay className="w-6 h-6" />
              </span>
              <span className="mt-5 text-2xl font-normal text-white">
                {" "}
                Watch the trailer{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature6;

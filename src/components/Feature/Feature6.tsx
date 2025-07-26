import React from "react";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import Link from "next/link";

const commonStyles = {
  heading: "text-lg sm:text-xl font-semibold text-white",
  paragraph: "mt-3 text-base text-gray-400 leading-relaxed",
  button:
    "inline-flex items-center gap-2 px-6 py-2.5 mt-8 text-lg font-semibold text-black bg-white rounded-full shadow hover:bg-opacity-90 transition",
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
    <section className="py-20 bg-black rounded-xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-x-24 xl:gap-x-36">
          {/* Left Section */}
          <div>
            <h2 className="text-white leading-tight">
              <span className="block font-sans text-4xl sm:text-5xl md:text-6xl">
                Elevate your{" "}
              </span>
              <span className="block font-serif italic text-5xl md:text-6xl lg:text-7xl">
                development{" "}
              </span>
              <span className="block font-sans text-4xl sm:text-5xl md:text-6xl">
                skills with auraui.
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-lg leading-8">
              Auraui is your gateway to mastering modern web development, with
              resources that adapt to your pace and level.
            </p>

            <Link href="#" className={commonStyles.button}>
              Learn More <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Section */}
          <div className="space-y-10">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className={commonStyles.heading}>{feature.title}</h3>
                <p className={commonStyles.paragraph}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Trailer */}
        <div className="flex flex-col items-center justify-center mt-20">
          <button
            type="button"
            className="flex flex-col items-center text-white text-center"
          >
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-black hover:bg-opacity-90 transition-all">
              <HiPlay className="w-6 h-6" />
            </span>
            <span className="mt-5 text-xl font-medium">
              Resume your journey
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feature6;

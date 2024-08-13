import React from "react";
import { FaUsers, FaRocket } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const commonStyles = "text-white h-11 w-11";

const features = [
  {
    icon: <FaUsers className={commonStyles} />,
    title: "Auraui Community",
    description:
      "Join the vibrant Auraui community, where developers collaborate to build cutting-edge web interfaces.",
  },
  {
    icon: <FaRocket className={commonStyles} />,
    title: "Rapid Development",
    description:
      "Accelerate your development process with Auraui's optimized components and responsive design.",
  },
  {
    icon: <FaUsers className={commonStyles} />,
    title: "Collaborative Projects",
    description:
      "Work on collaborative projects and contribute to the growing library of Auraui components.",
  },
  {
    icon: <FaRocket className={commonStyles} />,
    title: "Innovative Tools",
    description:
      "Utilize Auraui's innovative tools to create sleek and modern web applications with ease.",
  },
];

function Feature7() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32 gap-y-12">
          <div>
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl md:text-6xl">
                Accelerate Your Development with
              </span>
              <span className="font-serif text-5xl italic md:block md:text-7xl">
                Auraui Components
              </span>
            </h2>
            <p className="mt-8 font-sans text-lg font-normal leading-8 text-opacity-50 text-white">
              Auraui provides a suite of powerful and responsive components,
              enabling developers to create modern web applications with ease
              and efficiency.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                title="Watch trailer"
                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary"
                role="button"
              >
                <FaRocket className="w-6 h-6 mr-2" />
                Watch trailer
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="space-y-5 overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
                >
                  <div className="px-4 py-5 sm:p-6 lg:p-8">
                    {feature.icon}
                    <h3 className="mt-3 font-sans text-2xl font-normal text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base font-normal text-opacity-50 text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature7;

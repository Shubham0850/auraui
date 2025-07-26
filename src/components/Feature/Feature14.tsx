import React from "react";
import { FaUser, FaLaptopCode } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";

const Feature14 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-300 tracking-tight">
            3,583 Customers are using{" "}
            <span className="text-fuchsia-600 text-6xl">auraUI</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 bg-gradient-to-br from-white via-fuchsia-50 to-white rounded-xl shadow-md px-6 py-12 lg:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex items-start group transition-transform hover:-translate-y-1"
              >
                <div className="min-w-[64px] min-h-[64px] bg-fuchsia-100 text-fuchsia-600 rounded-full shadow-sm flex items-center justify-center transition group-hover:bg-fuchsia-200">
                  {card.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Cards Content
const cards = [
  {
    icon: <FaUser className="w-6 h-6" />,
    title: "Made for Developers",
    description:
      "AuraUI provides a library of components to streamline development. Whether you're building a small app or a scalable SaaS product, we’ve got you covered.",
  },
  {
    icon: <IoIosVideocam className="w-6 h-6" />,
    title: "Helpful Video Tutorials",
    description:
      "From basic setup to advanced workflows, our bite-sized video tutorials help you get up and running quickly and confidently.",
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "120+ Coded Blocks",
    description:
      "With 120+ carefully built blocks, you can create layouts in minutes and skip the boilerplate without sacrificing flexibility.",
  },
  {
    icon: <RiSecurePaymentFill className="w-6 h-6" />,
    title: "Secured Payments",
    description:
      "Built-in security ensures safe transactions, encrypted communication, and peace of mind for you and your customers.",
  },
];

export default Feature14;

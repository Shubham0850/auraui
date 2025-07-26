import React from "react";
import {
  FaFingerprint,
  FaBolt,
  FaMoon,
  FaHeadset,
  FaShieldAlt,
  FaSlidersH,
} from "react-icons/fa";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <FaFingerprint className="w-6 h-6 text-indigo-600" />,
    title: "Reliable Transfers",
    description:
      "Seamless, secure money transfers powered by cutting-edge encryption, ensuring safety and speed.",
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-500" />,
    title: "Instant Notifications",
    description:
      "Stay updated with real-time alerts about your account activity and financial updates.",
  },
  {
    icon: <FaMoon className="w-6 h-6 text-green-500" />,
    title: "User-Friendly Interface",
    description:
      "Our intuitive design offers a smooth and enjoyable experience across all devices.",
  },
  {
    icon: <FaHeadset className="w-6 h-6 text-purple-500" />,
    title: "24/7 Support",
    description:
      "Our dedicated team is here around the clock to help you with any issues you encounter.",
  },
  {
    icon: <FaSlidersH className="w-6 h-6 text-gray-600" />,
    title: "Customizable Plans",
    description:
      "Select from flexible plans tailored to your business goals and user expectations.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
    title: "Advanced Security",
    description:
      "Your data is protected with the highest-grade protocols and end-to-end encryption.",
  },
];

const Feature13: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-100 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature13;

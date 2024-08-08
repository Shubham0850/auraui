import React from "react";
import { FaFingerprint, FaBolt, FaMoon, FaShieldAlt } from "react-icons/fa";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <FaFingerprint className="text-blue-600 w-7 h-7" />,
    title: "Reliable Transfers",
    description:
      "Enjoy seamless and secure money transfers with our state-of-the-art technology ensuring your transactions are always safe and efficient.",
  },
  {
    icon: <FaBolt className="text-orange-600 w-8 h-8" />,
    title: "Instant Notifications",
    description:
      "Stay informed with instant notifications on your account activity, ensuring you are always aware of your financial transactions.",
  },
  {
    icon: <FaMoon className="text-green-600 w-8 h-8" />,
    title: "User-Friendly Interface",
    description:
      "Experience our intuitive and easy-to-use interface designed to provide a smooth and enjoyable user experience for all your payment needs.",
  },
  {
    icon: <FaMoon className="text-purple-600 w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Get assistance anytime with our dedicated 24/7 support team, always ready to help you with any issues or inquiries you may have.",
  },
  {
    icon: (
      <svg
        className="text-gray-600 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m0-4v8m0-8L9.447 7.724A2 2 0 008 9.618v4.764a2 2 0 001.553 1.894L15 14m0-4H9m6 0v8m0-8L9 14"
        />
      </svg>
    ),
    title: "Customizable Plans",
    description:
      "Choose from a variety of plans and customize them to suit your specific business needs, ensuring you only pay for what you use.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 w-8 h-8" />,
    title: "Advanced Security",
    description:
      "Protect your transactions with our advanced security protocols and encryption, ensuring your data is always secure.",
  },
];

const commonStyle = "relative flex items-center justify-center mx-auto";

const PaymentsApp: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index}>
              <div className={commonStyle}>
                <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentsApp;

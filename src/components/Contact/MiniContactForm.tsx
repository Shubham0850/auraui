import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const MiniContactForm = () => {
  const iconStyles = {
    base: "flex-shrink-0 w-10 h-10 text-blue-600",
  };

  const contactInfo = [
    {
      icon: <FiPhone className={iconStyles.base} />,
      label: "Call us",
      details: ["+91 98200 00000", "+91 98200 00001"],
    },
    {
      icon: <FiMail className={iconStyles.base} />,
      label: "Email us",
      details: ["contact@company.com", "support@company.com"],
    },
    {
      icon: <FiMapPin className={iconStyles.base} />,
      label: "Location",
      details: ["1234 Connaught Place, New Delhi, Delhi 110001"],
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex items-start">
              {item.icon}
              <div className="ml-6">
                <p className="text-base font-medium text-black/50">
                  {item.label}
                </p>
                {item.details.map((detail, detailIdx) => (
                  <p
                    key={detailIdx}
                    className="mt-4 text-xl font-medium text-gray-900"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniContactForm;

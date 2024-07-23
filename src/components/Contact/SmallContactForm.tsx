import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";

const SmallContactForm = () => {
  const iconStyles = {
    base: "flex-shrink-0 text-blue-600 w-7 h-7",
  };

  const addressInfo = [
    {
      location: "Mumbai Office",
      address: "123 Marine Drive, Mumbai, Maharashtra 400020",
      email: "info@mumbaioffice.com",
    },
    {
      location: "Bengaluru Office",
      address: "456 Brigade Road, Bengaluru, Karnataka 560025",
      email: "support@bengaluruoffice.com",
    },
    {
      location: "Delhi Office",
      address: "789 Connaught Place, Delhi 110001",
      email: "contact@delhoffice.com",
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
          {addressInfo.map((office, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-black">
                {office.location}
              </h3>
              <p className="mt-3 text-base text-gray-600">
                For any queries or support, please reach out to us at the
                following address.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start">
                  <FiMapPin className={iconStyles.base} />
                  <span className="block ml-3 text-base font-medium text-gray-900">
                    {office.address}
                  </span>
                </div>

                <div className="flex items-start">
                  <FiMail className={iconStyles.base} />
                  <span className="block ml-3 text-base font-medium text-gray-900">
                    {office.email}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallContactForm;

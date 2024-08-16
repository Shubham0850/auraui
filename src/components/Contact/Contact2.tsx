import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

const Contact2 = () => {
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
  const headerStyles = "max-w-2xl mx-auto text-center";
  const titleStyles =
    "text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl";
  const descriptionStyles =
    "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500";

  const cardStyles = "overflow-hidden bg-white rounded-xl";
  const cardContentStyles = "p-6";
  const iconStyles = "flex-shrink-0 w-10 h-10 mx-auto text-gray-400";

  const formContainerStyles = "mt-6 overflow-hidden bg-white rounded-xl";
  const formContentStyles = "px-6 py-12 sm:p-12";
  const formTitleStyles = "text-3xl font-semibold text-center text-gray-900";
  const inputStyles =
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600";
  const buttonStyles =
    "inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={headerStyles}>
          <h2 className={titleStyles}>Contact Us</h2>
          <p className={descriptionStyles}>
            Get in touch with us for any inquiries or support. We&apos;re here
            to help you with any questions you may have.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className={cardStyles}>
              <div className={cardContentStyles}>
                <FiPhone className={iconStyles} />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +91-76879-06978
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +91-76879-06878
                </p>
              </div>
            </div>

            <div className={cardStyles}>
              <div className={cardContentStyles}>
                <FiMail className={iconStyles} />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  contact@auraui.com
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  hr@auraui.com
                </p>
              </div>
            </div>

            <div className={cardStyles}>
              <div className={cardContentStyles}>
                <FiMapPin className={iconStyles} />
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  8502, Sector 28, Ingle Colony, Patna, India
                </p>
              </div>
            </div>
          </div>

          <div className={formContainerStyles}>
            <div className={formContentStyles}>
              <h3 className={formTitleStyles}>Send Us a Message</h3>

              <form action="#" method="POST" className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      Your Name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email Address
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-base font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-base font-medium text-gray-900"
                    >
                      Company Name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        id="company"
                        placeholder="Enter your company name"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        id="message"
                        placeholder="Enter your message"
                        className={`${inputStyles} resize-y`}
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className={buttonStyles}>Send</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;

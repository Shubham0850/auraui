import React from "react";
import {
  FaCheckCircle,
  FaCloud,
  FaRegHandshake,
  FaPlug,
  FaBox,
} from "react-icons/fa";
import { IoMdStar, IoMdPeople } from "react-icons/io";

const commonStyles =
  "flex items-center text-base font-medium text-white font-pj";
const iconStyles = "w-5 h-5 mr-2";

const gradientStyles = {
  background:
    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
};

const Pricing14 = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gray-50 sm:py-20 lg:py-28">
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            All features. One price. <br /> Experience AuraUI for free!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple pricing, no hidden costs — just everything you need.
          </p>
        </div>

        {/* Pricing Box */}
        <div className="relative max-w-5xl mx-auto mt-12 md:mt-20">
          <div className="absolute inset-0">
            <div
              className="w-full h-full mx-auto opacity-30 blur-xl filter rounded-2xl"
              style={gradientStyles}
            ></div>
          </div>

          <div className="relative overflow-hidden bg-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(139,68,255,0.5)] transition-all duration-500">
            <div className="px-8 py-10 lg:px-16 lg:py-14">
              <div className="md:flex md:items-center md:space-x-16 lg:space-x-24">
                {/* Features */}
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-12 xl:gap-x-24">
                  <ul className="space-y-4">
                    <li className={commonStyles}>
                      <FaCheckCircle className={iconStyles} />
                      Unlimited members
                    </li>
                    <li className={commonStyles}>
                      <IoMdPeople className={iconStyles} />3 admin accounts
                    </li>
                    <li className={commonStyles}>
                      <FaCloud className={iconStyles} />
                      100GB Storage
                    </li>
                  </ul>

                  <ul className="space-y-4">
                    <li className={commonStyles}>
                      <FaPlug className={iconStyles} />
                      Custom domain
                    </li>
                    <li className={commonStyles}>
                      <FaBox className={iconStyles} />
                      API access
                    </li>
                    <li className={commonStyles}>
                      <FaRegHandshake className={iconStyles} />
                      Bulk importer
                    </li>
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="mt-10 md:mt-0 md:w-1/3 text-center md:text-left">
                  <div className="flex items-end justify-center md:justify-start">
                    <p className="text-6xl font-extrabold text-white font-pj">
                      $19
                    </p>
                    <p className="ml-2 text-lg font-medium text-gray-400 font-pj">
                      /month
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-10 py-4 mt-6 text-base font-bold text-gray-900 transition-all duration-300 bg-white hover:bg-gray-100 rounded-xl shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-white font-pj"
                  >
                    Get started now
                  </a>
                  <p className="mt-4 text-sm text-gray-400">
                    Cancel anytime. No hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-16 text-center sm:mt-20">
          <img
            className="flex-shrink-0 object-cover mx-auto rounded-full w-28 h-28 shadow-lg"
            src="https://www.auraui.com/memeimage/man1.jpg"
            alt="AuraUI user"
          />
          <blockquote className="mt-6">
            <p className="text-lg leading-relaxed text-gray-900 font-pj">
              “AuraUI has transformed the way we manage our projects. The
              intuitive design and extensive features make it an essential tool
              for our team.”
            </p>
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <IoMdStar key={i} className="w-5 h-5" />
            ))}
          </div>
          <p className="mt-5 text-base font-bold text-gray-900 font-pj">
            Alex Johnson
          </p>
          <p className="text-sm text-gray-600 font-pj">CTO, AuraUI</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing14;

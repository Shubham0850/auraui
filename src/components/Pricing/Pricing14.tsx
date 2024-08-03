import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

const commonStyles =
  "flex items-center text-base font-medium text-white font-pj";
const iconStyles = "w-5 h-5 mr-2";

function Pricing14() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            All features for one price. Experience Auraui for free!
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto mt-8 md:mt-16">
          <div className="absolute inset-0">
            <div
              className="w-full h-full mx-auto opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative overflow-hidden bg-gray-900 rounded-2xl">
            <div className="px-16 py-8 sm:px-8 lg:px-16 lg:py-14">
              <div className="md:flex md:items-center md:space-x-12 lg:space-x-24">
                <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-12 xl:gap-x-24">
                  <div>
                    <ul className="space-y-3">
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
                  </div>

                  <div>
                    <ul className="space-y-3">
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
                </div>

                <div className="mt-10 md:mt-0">
                  <div className="flex items-end">
                    <p className="text-5xl font-bold text-white font-pj">$19</p>
                    <p className="text-lg font-medium text-gray-400 font-pj">
                      /month
                    </p>
                  </div>

                  <a
                    href="#"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-9
                      py-3.5
                      mt-5
                      text-base
                      font-bold
                      text-gray-900
                      transition-all
                      duration-200
                      bg-white
                      border border-transparent
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                      font-pj
                      hover:bg-opacity-90
                      rounded-xl
                    "
                  >
                    Get started now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center sm:mt-16 sm:flex sm:items-start sm:justify-center sm:text-left">
          <img
            className="flex-shrink-0 object-cover mx-auto rounded-full w-28 h-28 sm:mx-0"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/pricing/6/avatar-male.png"
            alt="Auraui user"
          />
          <div className="mt-6 sm:mt-0 sm:ml-12">
            <blockquote>
              <p className="text-lg font-normal leading-relaxed text-gray-900 font-pj">
                “Auraui has transformed the way we manage our projects. The
                intuitive design and extensive features make it an essential
                tool for our team.”
              </p>
            </blockquote>
            <p className="mt-5 text-base font-bold text-gray-900 font-pj">
              Alex Johnson
            </p>
            <p className="text-sm font-normal text-gray-600 font-pj mt-0.5">
              CTO, InnovateTech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing14;

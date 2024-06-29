import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

interface Props {}

const InfinityFooter: React.FC<Props> = () => {
  return (
    <section className="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
          <div>
            <img
              className="w-auto h-7"
              src="https://www.auraui.com/logo-dark.png"
              alt="Company Logo"
            />
            <ul className="mt-8 space-y-4">
              {["About", "Features", "Works", "Career"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Help</p>
            <ul className="mt-8 space-y-4">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Resources</p>
            <ul className="mt-8 space-y-4">
              {[
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "YouTube Playlist",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Extra Links</p>
            <ul className="mt-8 space-y-4">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 2xl:mt-32">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
              <ul className="flex items-center justify-start space-x-8">
                {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map(
                  (Icon, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        title=""
                        className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    </li>
                  )
                )}
              </ul>

              <ul className="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                {["Privacy Policy", "Terms & Conditions", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        title={item}
                        className="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <p className="mt-6 text-sm text-blue-200 lg:mt-0">
              © Copyright 2024, All Rights Reserved by AuraUI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfinityFooter;

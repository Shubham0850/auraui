import React from "react";
import Image from "next/image";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

const Footer4 = () => {
  const iconStyles = {
    base: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7",
    hoverFocus: "hover:bg-blue-600 focus:bg-blue-600",
  };

  const linkClasses = {
    base: "flex text-base text-black transition-all duration-200",
    hoverFocus: "hover:text-blue-600 focus:text-blue-600",
  };

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image
              className="w-auto h-9"
              src="https://auraui.com/logo-light.png"
              alt="AuraUI Logo"
              width={150}
              height={36}
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Explore how AuraUI can elevate your web projects with exceptional
              components and seamless integration.
            </p>
            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  <FiTwitter className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  <FiFacebook className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  <FiInstagram className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="GitHub"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  <FiGithub className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {[
            {
              title: "Company",
              links: ["About", "Features", "Works", "Career"],
            },
            {
              title: "Help",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "Resources",
              links: [
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "YouTube Playlist",
              ],
            },
            {
              title: "Extra Links",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                {section.title}
              </p>
              <ul className="mt-6 space-y-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      title={link}
                      className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2024, All Rights Reserved by AuraUI
        </p>
      </div>
    </section>
  );
};

export default Footer4;

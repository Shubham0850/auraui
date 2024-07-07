import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaComments,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

type Props = {};

const ElegantFooter: React.FC<Props> = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Add your functionality here
    console.log("Link clicked");
  };

  return (
    <section className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-1 md:col-span-4 xl:pr-8">
            <img
              className="w-auto h-9"
              src="https://www.auraui.com/logo-light.png"
              alt=""
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <a
              href="#"
              onClick={handleClick}
              className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
            >
              <FaComments className="w-6 h-6" />
              <span className="ml-2">Start Live Chat</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Company</p>
            <ul className="mt-6 space-y-5">
              {["About", "Features", "Works", "Career"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Help</p>
            <ul className="mt-6 space-y-5">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Resources</p>
            <ul className="mt-6 space-y-5">
              {[
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "YouTube Playlist",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Extra Links</p>
            <ul className="mt-6 space-y-5">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map(
              (Icon, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={handleClick}
                    className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ElegantFooter;

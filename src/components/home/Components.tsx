// components/ComponentSection.js
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md w-full max-w-md mx-auto">
          <div className="scale-50">
            <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Join the mailing list
            </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const baseCategories = [
  {
    name: "Hero",
    img: "/components/Hero1.png",
    link: "/components/Hero",
    items: 4,
  },
  {
    name: "Header",
    img: "/components/Navbar1.png",
    link: "/components/Header",
    items: 5,
  },
  {
    name: "Footer",
    img: "/components/Footer1.png",
    link: "/components/Footer",
    items: 2,
  },
  {
    name: "Signup",
    img: "/components/SignUp1.png",
    link: "/components/SignUp",
    items: 1,
  },
  {
    name: "Signin",
    img: "/components/SignIn1.png",
    link: "/components/SignIn",
    items: 1,
  },
];

const marketingCategories = [
  {
    name: "Team",
    link: "/components/Teams",
    items: 1,
    img: "/components/Teams1.png",
  },
  {
    name: "Stats",
    link: "/components/Stats",
    items: 1,
    img: "/components/Stats1.png",
  },
  { name: "Steps", items: 69, img: "/components/coming-soon.png" },
  {
    name: "FAQ",
    link: "/components/FAQs",
    items: 1,
    img: "/components/FAQs1.png",
  },
  {
    name: "Contact",
    link: "/components/Contact",
    items: 1,
    img: "/components/Contact1.png",
  },
  { name: "Text Input", items: 69, img: "/components/coming-soon.png" },
  { name: "Featured Drops", items: 69, img: "/components/coming-soon.png" },
  { name: "Logo Cloud", items: 69, img: "/components/coming-soon.png" },
  {
    name: "Pricing",
    link: "/components/Pricing",
    items: 5,
    img: "/components/Pricing1.png",
  },
  {
    name: "Testimonial",
    link: "/components/Testimonial",
    items: 5,
    img: "/components/Testimonials1.png",
  },
  {
    name: "Call To Action",
    link: "/components/CTA",
    items: 5,
    img: "/components/CTA1.png",
  },
  {
    name: "Feature",
    link: "/components/Feature",
    items: 1,
    img: "/components/Feature1.png",
  },
];

const animationCategories = [
  { name: "Slider", items: 69 },
  { name: "Carousel", items: 69 },
  { name: "Tabs", items: 69 },
  { name: "Accordion", items: 69 },
  { name: "Modal", items: 69 },
  { name: "Tooltip", items: 69 },
  { name: "Popover", items: 69 },
];

const web3Categories = [
  { name: "Wallet", items: 69 },
  { name: "Connect", items: 69 },
  { name: "Transactions", items: 69 },
  { name: "Tokens", items: 69 },
  { name: "NFTs", items: 69 },
  { name: "Profile", items: 69 },
];

const aiCategories = [
  { name: "Chat", items: 69 },
  { name: "Code", items: 69 },
  { name: "Copilot", items: 69 },
  { name: "GPT-4", items: 69 },
  { name: "GPT-3.5", items: 69 },
];

const reactNativeCategories = [
  { name: "Button", items: 69 },
  { name: "Input", items: 69 },
  { name: "Text", items: 69 },
  { name: "Image", items: 69 },
  { name: "ScrollView", items: 69 },
];

const ComponentSection = () => {
  return (
    <div className="py-20" id="global">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            Global
          </h2>
          <p>Components which can be used for a wide variaty of websites.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {baseCategories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full h-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src={category.img}
                  alt="img"
                  className=" rounded-xl w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </a>
          ))}
        </div>

        <div className="text-left mt-24">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            Sections
          </h2>
          <p>
            Components specifically used for marketing websites and landing
            pages.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {marketingCategories.map((category) => (
            <a
              href={category.link}
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full h-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src={category.img}
                  alt="hero"
                  className="rounded-xl w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </a>
          ))}
        </div>

        <div className="text-left mt-24">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            Animation
          </h2>
          <p>Components specifically used for animations.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {animationCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src="/components/coming-soon.png"
                  alt="hero"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </div>
          ))}
        </div>

        <div className="text-left mt-24">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            Web3 Components
          </h2>
          <p>Components specifically used for web3 applications.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {web3Categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src="/components/coming-soon.png"
                  alt="hero"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </div>
          ))}
        </div>

        <div className="text-left mt-24">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            AI Components
          </h2>
          <p>Components specifically used for AI applications.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {aiCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src="/components/coming-soon.png"
                  alt="hero"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </div>
          ))}
        </div>

        <div className="text-left mt-24">
          <h2 className="text-3xl font-semibold tracking-wide uppercase">
            React Native Components
          </h2>
          <p>Components specifically used for React Native applications.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {reactNativeCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src="/components/coming-soon.png"
                  alt="hero"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items available
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentSection;

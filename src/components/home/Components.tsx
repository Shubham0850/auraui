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
  { name: "Hero", link: "/introduction/Hero/Elements", items: 57 },
  { name: "Header", link: "/introduction/Header/Elements", items: 57 },
  { name: "Footer", link: "/introduction/Footer/Elements", items: 37 },
  { name: "Signup", link: "", items: 34 },
  { name: "Signin", link: "", items: 31 },
];

const marketingCategories = [
  { name: "Team", link: "/introduction/Teams/Elements", items: 25 },
  { name: "Stats", link: "/introduction/Stats/Elements", items: 23 },
  { name: "Steps", items: 22 },
  { name: "FAQ", link: "/introduction/FAQs/Elements", items: 22 },
  { name: "Contact", link: "/introduction/Contact/Elements", items: 17 },
  { name: "Text Input", items: 15 },
  { name: "Featured Drops", items: 15 },
  { name: "Logo Cloud", items: 20 },
  { name: "Pricing", items: 18 },
  {
    name: "Testimonial",
    link: "/introduction/Testimonial/Elements",
    items: 18,
  },
  { name: "Call To Action", link: "/introduction/CTA/Elements", items: 18 },
  { name: "Feature", items: 18 },
];

const animationCategories = [
  { name: "Slider", items: 25 },
  { name: "Carousel", items: 23 },
  { name: "Tabs", items: 22 },
  { name: "Accordion", items: 22 },
  { name: "Modal", items: 17 },
  { name: "Tooltip", items: 15 },
  { name: "Popover", items: 15 },
];

const web3Categories = [
  { name: "Wallet", items: 25 },
  { name: "Connect", items: 23 },
  { name: "Transactions", items: 22 },
  { name: "Tokens", items: 22 },
  { name: "NFTs", items: 17 },
  { name: "Profile", items: 15 },
];

const aiCategories = [
  { name: "Chat", items: 25 },
  { name: "Code", items: 23 },
  { name: "Copilot", items: 22 },
  { name: "GPT-4", items: 22 },
  { name: "GPT-3.5", items: 17 },
];

const reactNativeCategories = [
  { name: "Button", items: 25 },
  { name: "Input", items: 23 },
  { name: "Text", items: 22 },
  { name: "Image", items: 22 },
  { name: "ScrollView", items: 17 },
];

const ComponentSection = () => {
  return (
    <div className="py-20 ">
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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
              <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-2xl mb-4"></div>
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

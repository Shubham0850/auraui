import React from "react";

const baseCategories = [
  {
    name: "Hero",
    img: "/components/hero.png",
    link: "/components/hero",
    items: 4,
  },
  {
    name: "Header",
    img: "/components/header.png",
    link: "/components/header",
    items: 5,
  },
  {
    name: "Footer",
    img: "/components/footer.png",
    link: "/components/footer",
    items: 2,
  },
  {
    name: "Signup",
    img: "/components/signup.png",
    link: "/components/sign-up",
    items: 1,
  },
  {
    name: "Signin",
    img: "/components/signin.png",
    link: "/components/sign-in",
    items: 1,
  },
];

const marketingCategories = [
  {
    name: "Team",
    link: "/components/teams",
    items: 1,
    img: "/components/teams.png",
  },
  {
    name: "Stats",
    link: "/components/stats",
    items: 1,
    img: "/components/stats.png",
  },
  {
    name: "Steps",
    items: 1,
    img: "/components/steps.png",
    link: "/components/steps",
  },
  {
    name: "FAQ",
    link: "/components/faqs",
    items: 1,
    img: "/components/faq.png",
  },
  {
    name: "Contact",
    link: "/components/contact",
    items: 1,
    img: "/components/contact.png",
  },
  // { name: "Text Input", items: 69, img: "/components/coming-soon.png" },
  // { name: "Featured Drops", items: 69, img: "/components/coming-soon.png" },
  {
    name: "Logo Cloud",
    items: 1,
    img: "/components/logocloud.png",
    link: "/components/logocloud",
  },
  {
    name: "Pricing",
    link: "/components/pricing",
    items: 5,
    img: "/components/pricing.png",
  },
  {
    name: "Testimonial",
    link: "/components/testimonial",
    items: 5,
    img: "/components/testimonial.png",
  },
  {
    name: "Call To Action",
    link: "/components/cta",
    items: 5,
    img: "/components/cta.png",
  },
  {
    name: "Feature",
    link: "/components/feature",
    items: 1,
    img: "/components/Feature.png",
  },
  {
    name: "Article",
    link: "/components/article",
    items: 1,
    img: "/components/article.png",
  },
  {
    name: "Blog",
    link: "/components/article",
    items: 1,
    img: "/components/blog.png",
  },

  {
    name: "Gallery",
    link: "/components/gallery",
    items: 1,
    img: "/components/gallery.png",
  },
  {
    name: "Integration",
    link: "/components/integration",
    items: 1,
    img: "/components/integration.png",
  },
  {
    name: "News Letter",
    link: "/components/newsletter",
    items: 1,
    img: "/components/newsletter.png",
  },
  {
    name: "Roadmap",
    link: "/components/roadmap",
    items: 1,
    img: "/components/roadmap.png",
  },
  {
    name: "Settings",
    link: "/components/setting",
    items: 1,
    img: "/components/setting.png",
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
  {
    name: "Wallet Connect",
    link: "/components/web3/WalletConnect",
    items: 2,
    img: "/components/walletconnect.png",
  },
  // { name: "Connect", items: 69 },
  // { name: "Transactions", items: 69 },
  // { name: "Tokens", items: 69 },
  {
    name: "NFTs",
    link: "/components/web3/Nft",
    items: 1,
    img: "/components/nft.png",
  },
  // { name: "Profile", items: 69 },
];

const aiCategories = [
  { name: "Chat", items: 69 },
  // { name: "Code", items: 69 },
  // { name: "Copilot", items: 69 },
  // { name: "GPT-4", items: 69 },
  // { name: "GPT-3.5", items: 69 },
];

const reactNativeCategories = [
  {
    name: "Signin",
    items: 69,
    link: "/components/sign-in",
    img: "/components/signin.png",
  },
  {
    name: "Signup",
    items: 69,
    link: "/components/sign-up",
    img: "/components/signup.png",
  },
  // { name: "Text", items: 69 },
  // { name: "Image", items: 69 },
  // { name: "ScrollView", items: 69 },
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
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img
                  src={category.img}
                  alt="img"
                  className=" rounded-xl w-full"
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
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4 ">
                <img
                  src={category.img}
                  alt="hero"
                  className="rounded-xl w-full"
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
            <a
              href={category.link}
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img src={category.img} alt="hero" className="rounded-xl" />
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
            <a
              href={category.link}
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <div className="w-full p-2 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-4">
                <img src={category.img} alt="hero" className="rounded-xl" />
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
      </div>
    </div>
  );
};

export default ComponentSection;

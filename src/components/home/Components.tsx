import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

// Custom component to generate motion.div with desired animation
const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const baseCategories = [
  {
    name: "Hero",
    img: "/components/hero.png",
    link: "/all-components/hero",
    items: 8,
  },
  {
    name: "Header",
    img: "/components/header.png",
    link: "/all-components/header",
    items: 4,
  },
  {
    name: "Footer",
    img: "/components/footer.png",
    link: "/all-components/footer",
    items: 5,
  },
  {
    name: "Signup",
    img: "/components/signup.png",
    link: "/all-components/sign-up",
    items: 1,
  },
  {
    name: "Signin",
    img: "/components/signin.png",
    link: "/all-components/sign-in",
    items: 1,
  },
];

const marketingCategories = [
  {
    name: "Team",
    link: "/all-components/teams",
    items: 3,
    img: "/components/teams.png",
  },
  {
    name: "Stats",
    link: "/all-components/stats",
    items: 4,
    img: "/components/stats.png",
  },
  {
    name: "Steps",
    items: 1,
    img: "/components/steps.png",
    link: "/all-components/steps",
  },
  {
    name: "FAQ",
    link: "/all-components/faqs",
    items: 5,
    img: "/components/faq.png",
  },
  {
    name: "Contact",
    link: "/all-components/contacts",
    items:4,
    img: "/components/contact.png",
  },
  // { name: "Text Input", items: 69, img: "/components/coming-soon.png" },
  // { name: "Featured Drops", items: 69, img: "/components/coming-soon.png" },
  {
    name: "Logo Cloud",
    items: 6,
    img: "/components/logocloud.png",
    link: "/all-components/logocloud",
  },
  {
    name: "Pricing",
    link: "/all-components/pricing",
    items: 2,
    img: "/components/pricing.png",
  },
  {
    name: "Testimonial",
    link: "/all-components/testimonial",
    items: 12,
    img: "/components/testimonial.png",
  },
  {
    name: "Call To Action",
    link: "/all-components/cta",
    items: 9,
    img: "/components/cta.png",
  },
  {
    name: "Feature",
    link: "/all-components/feature",
    items: 8,
    img: "/components/Feature.png",
  },
  {
    name: "Article",
    link: "/all-components/article",
    items: 1,
    img: "/components/article.png",
  },
  {
    name: "Blog",
    link: "/all-components/blog",
    items: 1,
    img: "/components/blog.png",
  },

  {
    name: "Gallery",
    link: "/all-components/gallery",
    items: 1,
    img: "/components/gallery.png",
  },
  {
    name: "Integration",
    link: "/all-components/integration",
    items: 1,
    img: "/components/integration.png",
  },
  {
    name: "News Letter",
    link: "/all-components/newsletter",
    items: 1,
    img: "/components/newsletter.png",
  },
  {
    name: "Roadmap",
    link: "/all-components/roadmap",
    items: 4,
    img: "/components/roadmap.png",
  },
  // {
  //   name: "Settings",
  //   link: "/components/setting",
  //   items: 1,
  //   img: "/components/setting.png",
  // },
];

const animationCategories = [
  {
    name: "Toggle",
    link: "/components/animation/toggle",
    items: 1,
    img: "/components/toggle.png",
  },
  {
    name: "Cards",
    link: "/components/animation/cards",
    items: 1,
    img: "/components/cards.png",
  },
  {
    name: "Tabs",
    link: "/components/animation/tabs",
    items: 1,
    img: "/components/tabs.png",
  },
  // { name: "Accordion", items: 69, img: "/components/accordion.png" },
  // { name: "Modal", items: 69, img: "/components/modal.png" },
  // { name: "Tooltip", items: 69, img: "/components/tooltip.png" },
  // { name: "Popover", items: 69, img: "/components/popover.png" },
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
  {
    name: "Chat",
    items: 1,
    link: "/components/ai/support-chat",
    img: "/components/chat.png",
  },
  // { name: "Code", items: 69 },
  // { name: "Copilot", items: 69 },
  // { name: "GPT-4", items: 69 },
  // { name: "GPT-3.5", items: 69 },
];

const reactNativeCategories = [
  {
    name: "Signin",
    items: 69,
    link: "/components/reactnative",
    img: "/components/signin.png",
  },
  {
    name: "Signup",
    items: 69,
    link: "/components/reactnative",
    img: "/components/signup.png",
  },
  // { name: "Text", items: 69 },
  // { name: "Image", items: 69 },
  // { name: "ScrollView", items: 69 },
];

const ComponentSection = () => {
  return (
    <div className="py-32" id="global">
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
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="Category Image"
                    width={400} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="rounded-xl"
                  />
                </div>
              </AnimatedDiv>

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
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="Category Hero"
                    layout="responsive"
                    width={1200}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </AnimatedDiv>

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
            <a
              href={category.link}
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="hero"
                    className="rounded-xl"
                    height={600}
                    width={1200}
                  />
                </div>
              </AnimatedDiv>

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
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="hero"
                    className="rounded-xl"
                    height={600}
                    width={1200}
                  />
                </div>
              </AnimatedDiv>

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
            <a
              href={category.link}
              key={category.name}
              className="flex flex-col items-left cursor-pointer"
            >
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="hero"
                    className="rounded-xl"
                    height={600}
                    width={1200}
                  />
                </div>
              </AnimatedDiv>

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
              <AnimatedDiv>
                <div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl mb-4">
                  <Image
                    src={category.img}
                    alt="hero"
                    className="rounded-xl"
                    height={600}
                    width={1200}
                  />
                </div>
              </AnimatedDiv>

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.items} items ComingSoon...
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentSection;

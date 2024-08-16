import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";

// Define common styles
const style = {
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headerContainer: "max-w-3xl text-center lg:text-left",
  subtitle: "text-lg text-gray-400",
  title: "mt-6 text-3xl text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  grid: "grid grid-cols-1 mt-12 gap-y-12 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20 xl:mt-24",
  card: "relative group",
  imageContainer: "overflow-hidden rounded-md aspect-w-4 aspect-h-3",
  image: "object-cover w-full h-full max-h-[150px] transition-all duration-200 group-hover:scale-110 group-hover:rotate-3",
  category: "mt-6 text-base text-gray-500",
  headline: "mt-3 text-xl text-white",
  linkContainer: "mt-6",
  link: "flex items-center text-gray-400",
  linkText: "w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100",
  icon: "w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0",
};

const Blog1: React.FC = () => {
  const articles = [
    {
      src: "https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Article 1",
      category: "Developer",
      headline: "Seven great lessons you can learn from podcast.",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661284852147-c2454d4c1ec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Article 2",
      category: "Travel",
      headline: "5 secrets about podcast that nobody will tell you.",
    },
    {
      src: "https://images.unsplash.com/photo-1579389083175-247ef703006f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2plY3RzfGVufDB8fDB8fHww",
      alt: "Article 3",
      category: "Food",
      headline: "Learn all about podcast from this politician.",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Article 4",
      category: "Tech",
      headline: "The ten secrets about podcast people know.",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <p className={style.subtitle}>Amet minim mollit non deserunt ullamco.</p>
          <h2 className={style.title}>Everything you need to know about development</h2>
        </div>

        <div className={style.grid}>
          {articles.map((article, index) => (
            <div key={index} className={style.card}>
              <div className={style.imageContainer}>
                <img
                  className={style.image}
                  src={article.src}
                  alt={article.alt}
                />
              </div>
              <p className={style.category}>{article.category}</p>
              <p className={style.headline}>{article.headline}</p>
              <div className={style.linkContainer}>
                <Link href="#" className={style.link}>
                  <span className={style.linkText}>Read Full Article</span>
                  <LuChevronRight className={style.icon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog1;

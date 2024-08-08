import React from "react";
import { FaUserCircle } from "react-icons/fa";

const classNames = {
  section: "py-12 sm:py-16 lg:py-20 bg-black",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  heading: "text-center",
  title: "tracking-tighter text-white",
  titleSpan: "font-sans text-4xl font-normal sm:text-5xl md:text-6xl",
  italicSpan:
    "block font-serif text-5xl italic sm:inline sm:text-6xl md:text-7xl",
  content:
    "block font-sans text-4xl font-normal sm:inline sm:text-5xl md:text-6xl",
  grid: "grid grid-cols-1 gap-16 mt-12 lg:grid-cols-2 md:mt-16 lg:gap-y-20",
  testimonial: "sm:flex sm:items-start",
  avatar: "flex-shrink-0 object-cover w-24 h-24 rounded-full",
  blockquote: "mt-6 sm:ml-6 sm:mt-0",
  quoteText: "font-sans text-xl font-normal text-opacity-50 text-white",
  name: "mt-6 font-sans text-2xl font-normal text-white",
  role: "mt-1.5 text-white text-sm font-sans font-normal text-opacity-50",
};

function Testimonial9() {
  return (
    <section className={classNames.section}>
      <div className={classNames.container}>
        <div className={classNames.heading}>
          <h2 className={classNames.title}>
            <span className={classNames.titleSpan}>See what </span>
            <span className={classNames.italicSpan}>our members </span>
            <span className={classNames.content}>are saying.</span>
          </h2>
        </div>

        <div className={classNames.grid}>
          {[
            {
              imgSrc: "https://www.auraui.com/memeimage/man4.jpg",
              text: "AuraUI has transformed our development process with its elegant and highly customizable components. The seamless integration with Next.js.",
              name: "Oliver James",
              role: "Lead Developer at AuraUI",
            },
            {
              imgSrc: "https://www.auraui.com/memeimage/woman1.jpg",
              text: "Implementing AuraUI's components into our project was a breeze. The performance is top-notch, and the open-source nature is a huge plus for our team.",
              name: "Emily Grace",
              role: "UX Designer at AuraUI",
            },
            {
              imgSrc: "https://www.auraui.com/memeimage/man3.jpg",
              text: "AuraUI’s components are a game-changer. They are intuitive and well-documented, making it easy to create beautiful and responsive designs quickly.",
              name: "James Alexander",
              role: "Frontend Engineer at AuraUI",
            },
            {
              imgSrc: "https://www.auraui.com/memeimage/woman2.jpg",
              text: "The support from the AuraUI team has been exceptional. They are always available to assist with any issues, the quality of the components is excellent.",
              name: "Charlotte Elizabeth",
              role: "Product Manager at AuraUI",
            },
          ].map((testimonial, index) => (
            <div key={index} className={classNames.testimonial}>
              <img
                src={testimonial.imgSrc}
                className="rounded-full h-20 w-20"
                alt="images"
              />
              <div className={classNames.blockquote}>
                <blockquote>
                  <p className={classNames.quoteText}>{testimonial.text}</p>
                </blockquote>
                <p className={classNames.name}>{testimonial.name}</p>
                <p className={classNames.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial9;

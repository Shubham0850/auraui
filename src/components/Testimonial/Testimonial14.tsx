import React from "react";
import Image from "next/image";

// Common styles
const styles = {
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  subHeading: "mt-4 text-lg font-medium text-gray-600 sm:mt-8",
  quoteBox: "py-6 bg-gray-100 rounded-2xl px-7",
  blockquote: "text-lg font-normal leading-relaxed text-gray-900 font-pj",
  avatar: "flex-shrink-0 object-cover rounded-full w-11 h-11",
  textBase: "text-base font-bold text-gray-900 font-pj",
  textSm: "text-sm text-gray-600",
  gridContainer:
    "grid max-w-lg grid-cols-1 gap-10 mx-auto mt-8 md:max-w-4xl md:mt-16 md:grid-cols-2 md:gap-x-16",
  testimonialWrapper: "space-y-10",
  avatarWrapper: "flex items-center mt-5",
  avatarImage: "flex-shrink-0 object-cover rounded-full w-11 h-11",
  textWrapper: "ml-2",
};

const testimonials = [
  {
    quote:
      "Auraui has transformed our web presence with its intuitive and efficient design. Our site now performs better than ever.",
    name: "Devon Lane",
    role: "Account Assistant",
    imgSrc: "https://www.auraui.com/memeimage/boy1.jpeg",
  },
  {
    quote:
      "AuraUI has elevated our user experience to new heights. Seamless design and performance improvements are best.",
    name: "Christian Gray",
    role: "Frontend dev",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
  },
];

const Testimonial14 = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className={styles.container}>
        <div className="text-center">
          <h2 className={styles.heading}>What our clients say about AuraUI</h2>
          <p className={styles.subHeading}>
            2,157 people have shared their positive experiences with us
          </p>
        </div>

        <div className={styles.gridContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialWrapper}>
              <div>
                <blockquote className={styles.quoteBox}>
                  <p className={styles.blockquote}>{testimonial.quote}</p>
                </blockquote>
                <div className={styles.avatarWrapper}>
                  <img
                    className={styles.avatarImage}
                    src={testimonial.imgSrc}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div className={styles.textWrapper}>
                    <p className={styles.textBase}>{testimonial.name}</p>
                    <p className={styles.textSm}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial14;

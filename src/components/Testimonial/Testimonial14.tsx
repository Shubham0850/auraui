import React from "react";

const styles = {
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  heading:
    "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj tracking-tight",
  subHeading: "mt-3 text-lg font-medium text-gray-600 sm:mt-5",
  gridContainer:
    "grid max-w-lg grid-cols-1 gap-8 mx-auto mt-12 md:max-w-4xl md:grid-cols-2 md:gap-10",
  cardWrapper:
    "relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl",
  cardInner: "h-full flex flex-col justify-between bg-white rounded-3xl p-8",
  blockquote: "text-lg italic leading-relaxed text-gray-800 font-pj sm:text-xl",
  avatarWrapper: "flex items-center mt-6",
  avatarImage:
    "flex-shrink-0 object-cover rounded-full w-12 h-12 border-2 border-gray-200",
  textWrapper: "ml-3",
  textBase: "text-base font-semibold text-gray-900 font-pj",
  textSm: "text-sm text-gray-500 font-pj",
};

const testimonials = [
  {
    quote:
      "AuraUI has transformed our web presence with its intuitive and efficient design. Our site now performs better than ever.",
    name: "Devon Lane",
    role: "Account Assistant",
    imgSrc: "https://www.auraui.com/memeimage/boy1.jpeg",
  },
  {
    quote:
      "AuraUI has elevated our user experience to new heights. Seamless design and performance improvements are unmatched.",
    name: "Christian Gray",
    role: "Frontend Developer",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
  },
];

const Testimonial14 = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white sm:py-20 lg:py-24">
      <div className={styles.container}>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={styles.heading}>What our clients say about auraUI</h2>
          <p className={styles.subHeading}>
            2,157 people have shared their positive experiences with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.gridContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                <blockquote>
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

import React from "react";

const testimonialData = [
  {
    text: "AuraUI is a game-changer for our front-end development. The components are easy to use and beautifully designed.",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
    name: "Jordan Smith",
    age: "Senior Developer, San Francisco",
  },
  {
    text: "Using AuraUI has significantly improved our workflow. The integration with Next.js is seamless!",
    imgSrc: "https://www.auraui.com/memeimage/man2.jpg",
    name: "Alex Johnson",
    age: "Tech Lead, New York",
  },
];

const styles = {
  section:
    "py-16 bg-gradient-to-b from-white via-gray-50 to-white sm:py-20 lg:py-28",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header:
    "text-3xl font-extrabold text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center",
  testimonialContainer:
    "grid max-w-3xl grid-cols-1 gap-10 mx-auto mt-10 sm:mt-16 sm:grid-cols-2 lg:gap-16",
  card: "relative group bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden p-6",
  blockquote:
    "text-lg font-medium text-gray-900 font-pj text-center sm:text-left leading-relaxed",
  imageWrapper:
    "relative mt-6 overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:scale-[1.03]",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-2xl opacity-25 rounded-full",
  playButton:
    "absolute inline-flex items-center justify-center transition-all duration-300 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2 top-1/2 w-14 h-14 hover:bg-gray-100 shadow-md",
  userInfo: "flex items-center justify-between mt-6",
  userName: "text-base font-bold text-gray-900 font-pj",
  userAge: "text-sm text-gray-600 font-pj",
};

function Testimonial17() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <h2 className={styles.header}>See what students are saying</h2>

        {/* Testimonial Grid */}
        <div className={styles.testimonialContainer}>
          {testimonialData.map(({ text, imgSrc, name, age }, index) => (
            <div key={index} className={styles.card}>
              {/* Quote */}
              <blockquote className={styles.blockquote}>“{text}”</blockquote>

              {/* Image + Overlay */}
              <div className={styles.imageWrapper}>
                <img
                  className="w-full h-full object-cover"
                  src={imgSrc}
                  alt={name}
                />
                <div className={styles.gradientOverlay}></div>

                {/* Play Button */}
                <button type="button" className={styles.playButton}>
                  <svg
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.18 18.676C7.86 19.642 6 18.698 6 17.061V5.939C6 4.302 7.86 3.358 9.18 4.324l7.61 5.561c1.094.799 1.094 2.431 0 3.23L9.18 18.676Z" />
                  </svg>
                </button>
              </div>

              {/* User Info */}
              <div className={styles.userInfo}>
                <p className={styles.userName}>{name}</p>
                <p className={styles.userAge}>{age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial17;

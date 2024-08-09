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

const commonClasses = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header:
    "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center",
  testimonialContainer:
    "grid max-w-3xl grid-cols-1 gap-10 mx-auto mt-8 sm:mt-16 sm:grid-cols-2 md:gap-16 lg:gap-20",
  blockquote:
    "text-xl font-medium text-gray-900 font-pj text-center sm:text-left",
  imageContainer: "relative mt-6 overflow-hidden rounded-xl",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter rounded-full opacity-20 w-full h-full",
  playButton:
    "absolute inline-flex items-center justify-center transition-all duration-200 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2 top-1/2 w-14 h-14 hover:bg-opacity-90",
  userInfo: "flex items-center justify-between mt-5",
  userName: "text-base font-bold text-gray-900 font-pj",
  userAge: "text-sm text-gray-600 font-pj",
};

function Testimonial17() {
  return (
    <section className={commonClasses.section}>
      <div className={commonClasses.container}>
        <h2 className={commonClasses.header}>See what students are saying</h2>

        <div className={commonClasses.testimonialContainer}>
          {testimonialData.map(({ text, imgSrc, name, age }, index) => (
            <div key={index}>
              <blockquote
                className={commonClasses.blockquote}
              >{`"${text}"`}</blockquote>

              <div className={commonClasses.imageContainer}>
                <img className="w-full h-full" src={imgSrc} alt="" />
                <div className={commonClasses.gradientOverlay}></div>

                <button type="button" className={commonClasses.playButton}>
                  <svg
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.18003 18.6761C7.8586 19.6418 6 18.698 6 17.0613V5.93865C6 4.30198 7.8586 3.35821 9.18003 4.32387L16.7903 9.88522C17.8836 10.6842 17.8836 12.3158 16.7903 13.1148L9.18003 18.6761Z" />
                  </svg>
                </button>
              </div>

              <div className={commonClasses.userInfo}>
                <p className={commonClasses.userName}>{name}</p>
                <p className={commonClasses.userAge}>{age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial17;

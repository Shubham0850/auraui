import React from "react";

const classNames = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-y-10",
  imageWrapper: "relative -mx-4 md:order-2 sm:mx-0 xl:max-w-lg xl:ml-auto",
  image: "object-cover w-full h-full",
  quoteWrapper:
    "absolute -bottom-12 inset-x-4 md:inset-x-4 md:bottom-4 lg:inset-x-7 lg:bottom-7 xl:bottom-7",
  quoteBox: "bg-white shadow-xl bg-opacity-70 backdrop-blur-lg filter",
  quoteContent: "p-6 lg:px-9 lg:py-7",
  quoteText: "text-xl italic font-medium leading-relaxed text-gray-900 font-pj",
  name: "mt-6 text-base font-bold text-gray-900 font-pj",
  role: "mt-1 text-sm font-normal text-gray-600 font-pj",
  textContent: "md:pr-16 md:order-1",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  description: "mt-6 text-base leading-7 text-gray-900 font-pj",
  svg: "w-auto h-4 text-gray-300",
  stars: "w-5 h-5 text-[#FDB241]",
  reviews: "mt-5 text-base font-normal leading-7 text-gray-900 font-pj",
};

function Testimonial10() {
  return (
    <section className={classNames.section}>
      <div className={classNames.container}>
        <div className={classNames.grid}>
          <div className={classNames.imageWrapper}>
            <img
              className={classNames.image}
              src="https://www.auraui.com/memeimage/woman1.jpg"
              alt="Testimonial"
            />
            <div className={classNames.quoteWrapper}>
              <div className={classNames.quoteBox}>
                <div className={classNames.quoteContent}>
                  <blockquote>
                    <p className={classNames.quoteText}>
                      “Simply the best. Better than all the rest. I’d recommend
                      this product to beginners and all users.”
                    </p>
                  </blockquote>
                  <p className={classNames.name}>Leslie Alexander</p>
                  <p className={classNames.role}>
                    Director of Technology, AuraUI
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames.textContent}>
            <div className="flex flex-col justify-between h-full py-16">
              <div>
                <h2 className={classNames.heading}>
                  2800+ customers shared their love for AuraUI.
                </h2>
                <p className={classNames.description}>
                  Create custom landing pages with AuraUI that convert more
                  visitors than any website. With a wide variety of unique
                  components, you can easily build a stunning page.
                </p>
              </div>

              <div className="mt-8 lg:mt-16">
                <svg
                  className={classNames.svg}
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG lines here */}
                </svg>

                <div className="flex items-center justify-start mt-12">
                  <svg
                    className={classNames.stars}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* Repeat stars as needed */}
                </div>

                <p className={classNames.reviews}>
                  <span className="font-bold">4.7 out of 5 stars</span> from
                  2.8k reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial10;

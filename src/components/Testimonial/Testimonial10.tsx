import React from "react";

const classNames = {
  section: "py-20 bg-gradient-to-br from-[#1e1e3f] via-[#232347] to-[#1b1b2f]",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-y-14 items-center",
  imageWrapper:
    "relative rounded-3xl overflow-hidden md:order-2 shadow-xl shadow-blue-900/30",
  image: "object-cover w-full h-full rounded-3xl",
  quoteWrapper: "absolute bottom-6 left-6 right-6",
  quoteBox:
    "bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md",
  quoteContent: "px-6 py-5 md:px-8 md:py-6",
  quoteText: "text-lg italic text-white leading-relaxed font-medium",
  name: "mt-4 text-base font-semibold text-white",
  role: "text-sm text-white/70",
  textContent: "md:pr-12",
  heading:
    "text-4xl font-bold text-white sm:text-5xl xl:text-6xl leading-tight tracking-tight",
  description: "mt-6 text-base text-white/80 leading-relaxed max-w-xl",
  stars: "w-5 h-5 text-yellow-400",
  reviews: "mt-5 text-base text-white/80",
};

function Testimonial10() {
  return (
    <section className={classNames.section}>
      <div className={classNames.container}>
        <div className={classNames.grid}>
          {/* Image + Glassy Quote */}
          <div className={classNames.imageWrapper}>
            <img
              className={classNames.image}
              src="https://images.unsplash.com/photo-1665686440627-936e9700a100?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Testimonial"
            />
            <div className={classNames.quoteWrapper}>
              <div className={classNames.quoteBox}>
                <div className={classNames.quoteContent}>
                  <blockquote>
                    <p className={classNames.quoteText}>
                      “Simply the best. Better than all the rest. I’d recommend
                      AuraUI to beginners and experts alike.”
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

          {/* Text Content */}
          <div className={classNames.textContent}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className={classNames.heading}>
                  2800+ people absolutely love AuraUI.
                </h2>
                <p className={classNames.description}>
                  With AuraUI, building interfaces has never been more
                  efficient. From beautiful components to easy integrations,
                  create high-performing websites that convert.
                </p>
              </div>

              {/* Rating section */}
              <div className="mt-12">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={classNames.stars}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={classNames.reviews}>
                  <span className="font-semibold text-white">4.7 out of 5</span>{" "}
                  from 2.8k+ reviews
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

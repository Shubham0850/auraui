import React from "react";
import { FaStar } from "react-icons/fa";

const classNames = {
  container: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
  innerContainer: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  header: "max-w-2xl mx-auto text-center",
  stats: "text-base font-semibold text-blue-600",
  title:
    "mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8",
  grid: "grid max-w-3xl grid-cols-1 gap-12 mx-auto mt-16 text-center lg:mt-20 xl:mt-20 xl:grid-cols-2 xl:max-w-none sm:text-left",
  card: "flex flex-col sm:flex-row lg:items-center",
  image:
    "object-cover w-48 h-48 mx-auto sm:mx-0 lg:w-60 lg:h-60 shrink-0 rounded-2xl",
  icons: "w-5 h-5 text-blue-600",
  blockquote: "mt-8 text-lg font-medium leading-8 text-gray-900",
  footer:
    "flex flex-col flex-wrap items-center justify-center gap-1 mt-5 sm:flex-row sm:justify-start sm:gap-4",
  name: "text-base font-semibold text-gray-900",
  role: "text-base font-normal text-gray-600",
};

function Testimonial3() {
  return (
    <section className={classNames.container}>
      <div className={classNames.innerContainer}>
        <div className={classNames.header}>
          <p className={classNames.stats}>3940+ Happy AuraUI Users</p>
          <h2 className={classNames.title}>Don&apos;t just take our words</h2>
        </div>

        <div className={classNames.grid}>
          <div className={classNames.card}>
            <img
              className={classNames.image}
              src="https://www.auraui.com/memeimage/woman1.jpg"
              alt="Woman"
            />
            <div className="mt-8 sm:mt-0 sm:ml-10">
              <div className="flex items-center justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-blue-600" />
                ))}
              </div>
              <blockquote className={classNames.blockquote}>
                <p>
                  &quot;We love AuraUI! Our designers were using it for their
                  projects, so we already knew what kind of design they
                  want.&quot;
                </p>
              </blockquote>
              <div className={classNames.footer}>
                <p className={classNames.name}>Jenny Wilson</p>
                <p className={classNames.role}>Grower.io</p>
              </div>
            </div>
          </div>

          <div className={classNames.card}>
            <img
              className={classNames.image}
              src="https://www.auraui.com/memeimage/man1.jpg"
              alt="Man"
            />
            <div className="mt-8 sm:mt-0 sm:ml-10">
              <div className="flex items-center justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-blue-600" />
                ))}
              </div>
              <blockquote className={classNames.blockquote}>
                <p>
                  &quot;We love AuraUI! Our designers were using it for their
                  projects, so we already knew what kind of design they
                  want.&quot;
                </p>
              </blockquote>
              <div className={classNames.footer}>
                <p className={classNames.name}>Devon Lane</p>
                <p className={classNames.role}>DLDesign.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial3;

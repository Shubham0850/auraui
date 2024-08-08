import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const classes = {
  section: "py-12 bg-gray-100 sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  image: "object-cover w-full h-full rounded-3xl mt-4",
  iconContainer:
    "inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full",
  icon: "w-auto h-6 text-white",
  blockquote: "mt-10",
  quoteText: "text-3xl font-normal leading-snug text-gray-900",
  details: "flex flex-wrap items-center gap-4 mt-6",
  name: "text-base font-semibold text-gray-900",
  role: "text-base font-normal text-gray-600",
  logoContainer: "inline-flex px-3 py-2 bg-white rounded-full",
};

function Testimonial4() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24">
          <div>
            <img
              className={classes.image}
              src="https://www.auraui.com/memeimage/woman2.jpg"
              alt="Testimonial"
            />
          </div>

          <div className="xl:pr-16">
            <div className={classes.iconContainer}>
              <FaQuoteLeft className={classes.icon} />
            </div>
            <blockquote className={classes.blockquote}>
              <p className={classes.quoteText}>
                &quot;We love AuraUI! Our designers were using it for their
                projects, so clients already knew what AuraUI was and how to use
                it.&quot;
              </p>
            </blockquote>

            <div className={classes.details}>
              <p className={classes.name}>Jenny Wilson</p>
              <p className={classes.role}>Frontend Devloper</p>

              <img
                className="w-auto h-7 mb-2"
                src="https://www.auraui.com/logo-light.png"
                alt="Waverio Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial4;

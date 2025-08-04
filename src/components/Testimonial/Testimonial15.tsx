import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const styles = {
  section:
    "py-16 bg-gradient-to-b from-white via-gray-50 to-white sm:py-20 lg:py-28",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  videoWrapper:
    "relative overflow-hidden aspect-square sm:aspect-video rounded-3xl group shadow-xl",
  videoImage:
    "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110",
  overlay:
    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl",
  playButton:
    "inline-flex items-center justify-center w-20 h-20 text-white transition-all duration-300 border-2 border-white rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105",
  caption:
    "absolute bottom-0 left-1/2 -translate-x-1/2 px-6 py-6 sm:py-8 text-center max-w-2xl",
  captionText:
    "text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl",
  grid: "grid grid-cols-1 gap-10 mt-16 md:grid-cols-3 sm:mt-20 lg:mt-24",
  cardWrapper:
    "relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
  card: "h-full flex flex-col justify-between bg-white rounded-2xl p-8 text-center",
  quote:
    "text-lg italic font-medium leading-relaxed text-gray-800 font-pj sm:text-xl",
  name: "mt-6 text-base font-semibold text-gray-900 font-pj",
  role: "mt-1 text-sm font-normal text-gray-600 font-pj",
};

function Testimonial15() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero Video Section */}
        <div className={styles.videoWrapper}>
          <img
            className={styles.videoImage}
            src="https://www.auraui.com/memeimage/laptop-girl.jpeg"
            alt="AuraUI Showcase"
          />
          <div className={styles.overlay}></div>
          <div className="absolute inset-0 grid place-items-center">
            <button type="button" className={styles.playButton}>
              <FaPlayCircle className="w-10 h-10" />
            </button>
          </div>
          <div className={styles.caption}>
            <p className={styles.captionText}>
              Discover how{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                AuraUI
              </span>{" "}
              is revolutionizing user experiences
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.grid}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <blockquote className={styles.quote}>
                “AuraUI transformed the way we interact with web applications.
                It’s a{" "}
                <span className="text-purple-600 font-semibold">
                  game-changer
                </span>{" "}
                for both beginners and advanced users.”
              </blockquote>
              <p className={styles.name}>Alex Johnson</p>
              <p className={styles.role}>Lead Developer at AuraUI</p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <blockquote className={styles.quote}>
                “The flexibility and power of AuraUI’s tools are unmatched. It
                gives us{" "}
                <span className="text-pink-600 font-semibold">
                  freedom & speed
                </span>{" "}
                in our projects.”
              </blockquote>
              <p className={styles.name}>Samantha Green</p>
              <p className={styles.role}>Senior UX Designer</p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <blockquote className={styles.quote}>
                “AuraUI’s innovative approach has streamlined our development
                and elevated our{" "}
                <span className="text-orange-500 font-semibold">
                  design capabilities
                </span>
                .”
              </blockquote>
              <p className={styles.name}>Jordan Smith</p>
              <p className={styles.role}>Product Manager at AuraUI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial15;

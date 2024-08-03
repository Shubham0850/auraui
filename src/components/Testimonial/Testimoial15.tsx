import React from "react";
import { FaPlayCircle } from "react-icons/fa";

// Common Styles
const containerStyles = "py-12 bg-white sm:py-16 lg:py-20 xl:py-24";
const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl";
const testimonialGridStyles =
  "grid grid-cols-1 gap-12 mt-12 text-center md:grid-cols-3 sm:mt-16";
const blockquoteStyles = "text-lg font-medium leading-8 text-gray-900";
const nameStyles = "mt-8 text-base font-semibold text-gray-900";
const roleStyles = "mt-1 text-sm font-normal text-gray-500";
const overlayStyles =
  "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-2xl lg:rounded-3xl opacity-80";

function Testimoial15() {
  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className="relative">
          <div className="overflow-hidden aspect-square sm:aspect-video rounded-2xl lg:rounded-3xl group">
            <img
              className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
              src="https://example.com/auraui-video-cover.png" // Update with actual image URL
              alt="Auraui Showcase"
            />
          </div>
          <div className={overlayStyles}></div>
          <div className="absolute inset-0 grid w-full h-full place-items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center w-20 h-20 text-white transition-all duration-200 border-2 border-white rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20"
            >
              <FaPlayCircle className="w-auto h-8" />
            </button>
          </div>
          <div className="absolute bottom-0 w-full px-4 py-8 text-center -translate-x-1/2 left-1/2 lg:p-12">
            <p className="text-lg font-semibold text-white sm:text-xl lg:text-3xl">
              Discover how Auraui is revolutionizing user experiences
            </p>
          </div>
        </div>

        <div className={testimonialGridStyles}>
          <div>
            <blockquote className={blockquoteStyles}>
              &quot;Auraui has transformed the way we interact with web
              applications. The intuitive design and seamless integration have
              significantly improved our workflow. &quot;
            </blockquote>
            <p className={nameStyles}>Alex Johnson</p>
            <p className={roleStyles}>Lead Developer at Auraui</p>
          </div>

          <div>
            <blockquote className={blockquoteStyles}>
              &quot;The flexibility and power of Auraui&apos;s tools are
              unmatched. It&apos;s a game-changer for both beginners and
              advanced users. &quot;
            </blockquote>
            <p className={nameStyles}>Samantha Green</p>
            <p className={roleStyles}>Senior UX Designer</p>
          </div>

          <div>
            <blockquote className={blockquoteStyles}>
              &quot;Auraui&apos;s innovative approach has streamlined our
              development process and elevated our design capabilities.&quot;
            </blockquote>
            <p className={nameStyles}>Jordan Smith</p>
            <p className={roleStyles}>Product Manager at Auraui</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoial15;

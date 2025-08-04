import React from "react";
import { FaStar } from "react-icons/fa";

const commonStyles = {
  container:
    "flex flex-col overflow-hidden rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl bg-white/90 backdrop-blur-lg border border-gray-200",
  card: "flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7",
  rating: "flex items-center text-[#FDB241] space-x-1",
  testimonial: "flex-1 mt-6",
  testimonialText: "text-lg leading-relaxed text-gray-800 font-pj italic",
  profile: "flex items-center mt-8",
  profileImage:
    "flex-shrink-0 object-cover rounded-full w-12 h-12 ring-2 ring-offset-2 ring-offset-white ring-gray-200",
  profileInfo: "ml-4",
  profileName: "text-base font-semibold text-gray-900 font-pj",
  profileRole: "mt-0.5 text-sm font-pj text-gray-500",
  link: "pb-1 text-base font-semibold leading-7 text-gray-800 transition-all duration-200 border-b border-gray-400 hover:border-gray-800 hover:text-gray-900 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
};

// Creating stars
function renderStars(count: number) {
  return Array.from({ length: count }, (_, index) => (
    <FaStar key={index} className="w-5 h-5" />
  ));
}

function Testimonial13() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">
            2,157 people have said how good AuraUI is
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>
        </div>

        {/* Link */}
        <div className="mt-6 text-center">
          <a href="#" className={commonStyles.link}>
            Check all 2,157 reviews
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mt-14">
          {/* Background Gradient Glow */}
          <div className="absolute -inset-x-8 inset-y-16 md:-inset-x-12 md:-inset-y-8">
            <div
              className="w-full h-full max-w-6xl mx-auto rounded-[3rem] opacity-40 blur-3xl filter"
              style={{
                background:
                  "linear-gradient(135deg, #44b0ff 0%, #8b44ff 40%, #ff6644 80%, #ebff70 100%)",
              }}
            ></div>
          </div>

          <div className="relative grid max-w-2xl grid-cols-1 gap-8 mx-auto md:max-w-none md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className={commonStyles.container}>
              <div className={commonStyles.card}>
                <div className={commonStyles.testimonial}>
                  <div className={commonStyles.rating}>{renderStars(5)}</div>
                  <blockquote className={commonStyles.testimonialText}>
                    “You made it so simple. My new site is faster and easier to
                    work with than my old site. I just choose the page, make the
                    change, and it’s done.”
                  </blockquote>
                </div>
                <div className={commonStyles.profile}>
                  <img
                    className={commonStyles.profileImage}
                    src="https://www.auraui.com/memeimage/man2.jpg"
                    alt="Leslie Alexander"
                  />
                  <div className={commonStyles.profileInfo}>
                    <p className={commonStyles.profileName}>Leslie Alexander</p>
                    <p className={commonStyles.profileRole}>
                      Freelance React Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={commonStyles.container}>
              <div className={commonStyles.card}>
                <div className={commonStyles.testimonial}>
                  <div className={commonStyles.rating}>{renderStars(5)}</div>
                  <blockquote className={commonStyles.testimonialText}>
                    “Simply the best. Better than all the rest. I&apos;d
                    recommend AuraUI to both beginners and advanced users.”
                  </blockquote>
                </div>
                <div className={commonStyles.profile}>
                  <img
                    className={commonStyles.profileImage}
                    src="https://www.auraui.com/memeimage/man1.jpg"
                    alt="Jacob Jones"
                  />
                  <div className={commonStyles.profileInfo}>
                    <p className={commonStyles.profileName}>Jacob Jones</p>
                    <p className={commonStyles.profileRole}>Digital Marketer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={commonStyles.container}>
              <div className={commonStyles.card}>
                <div className={commonStyles.testimonial}>
                  <div className={commonStyles.rating}>{renderStars(5)}</div>
                  <blockquote className={commonStyles.testimonialText}>
                    “Great product with fantastic support. AuraUI has made a
                    huge difference in my workflow and client satisfaction.”
                  </blockquote>
                </div>
                <div className={commonStyles.profile}>
                  <img
                    className={commonStyles.profileImage}
                    src="https://www.auraui.com/memeimage/boy1.jpeg"
                    alt="Chris Johnson"
                  />
                  <div className={commonStyles.profileInfo}>
                    <p className={commonStyles.profileName}>Chris Johnson</p>
                    <p className={commonStyles.profileRole}>Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial13;

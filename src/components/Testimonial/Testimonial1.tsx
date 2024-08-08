import React from "react";

const classNames = {
  container: "flex flex-col bg-white border border-gray-200 rounded-md",
  contentWrapper: "flex flex-col justify-between flex-1 p-8",
  quote: "text-lg text-gray-800",
  separator: "w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted",
  profileImg: "flex-shrink-0 object-cover w-10 h-10 rounded-full",
  profileName: "text-base font-semibold text-gray-800 truncate",
  profileRole: "text-base text-gray-500 truncate",
};

const testimonials = [
  {
    quote:
      "“AuraUI has significantly streamlined our development process. The components are intuitive and easy to use, saving us countless hours.”",
    name: "Devon Lane",
    role: "President of Sales",
    imgSrc: "https://www.auraui.com/memeimage/boy1.jpeg",
  },
  {
    quote:
      "“The best UI library I've ever used. AuraUI is a must-have for any serious developer.”",
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    imgSrc: "https://www.auraui.com/memeimage/boy2.avif",
  },
  {
    quote:
      "“AuraUI's components are top-notch. They integrate perfectly with our Next.js projects.”",
    name: "Jane Cooper",
    role: "Dog Trainer",
    imgSrc: "https://www.auraui.com/memeimage/girl2.jpeg",
  },
  {
    quote:
      "“Launching our website was a breeze with AuraUI. We were live in days, not months.”",
    name: "Theresa Webb",
    role: "Web Designer",
    imgSrc: "https://www.auraui.com/memeimage/woman1.jpg",
  },
  {
    quote:
      "“AuraUI makes managing our site so simple and efficient. It's a game-changer.”",
    name: "Darlene Robertson",
    role: "Medical Assistant",
    imgSrc: "https://www.auraui.com/memeimage/man2.jpg",
  },
  {
    quote:
      "“With AuraUI, our development workflow has become faster and smoother. Highly recommended!”",
    name: "Floyd Miles",
    role: "Nursing Assistant",
    imgSrc: "https://www.auraui.com/memeimage/man1.jpg",
  },
];

function Testimonial1() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={classNames.container}>
              <div className={classNames.contentWrapper}>
                <blockquote>
                  <p className={classNames.quote}>{testimonial.quote}</p>
                </blockquote>
                <div className="mt-8">
                  <div className={classNames.separator}></div>
                  <div className="flex items-center">
                    <img
                      className={classNames.profileImg}
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                    />
                    <div className="ml-3">
                      <p className={classNames.profileName}>
                        {testimonial.name}
                      </p>
                      <p className={classNames.profileRole}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial1;

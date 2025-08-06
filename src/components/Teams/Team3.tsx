import React from "react";
import Link from "next/link";

const style = {
  section: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  gridContainer: "overflow-hidden bg-gray-100 rounded-3xl",
  grid: "grid grid-cols-2 lg:grid-cols-4",
  textContainer:
    "col-span-2 px-8 py-12 text-center xl:px-12 xl:pr-24 lg:text-left lg:order-1",
  title:
    "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
  description:
    "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
  imageContainer: "relative overflow-hidden lg:order-2 group",
  image:
    "object-cover w-full h-full transition-all duration-300 group-hover:scale-110",
  gradientOverlay:
    "absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80",
  infoContainer: "absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6",
  infoContent: "scale-90 sm:scale-100",
  name: "text-base font-semibold text-white",
  position: "mt-1 text-sm font-normal text-gray-300",
  linkContainer: "flex items-end justify-start px-8 py-8 xl:px-12 lg:order-4",
  link: "inline-flex items-center text-sm font-semibold text-gray-900 transition-all duration-200 group hover:text-gray-700 hover:underline",
  linkIcon:
    "w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200",
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      src: "https://auraui.com/memeimage/man1.jpg",
      alt: "Ethan Carter",
      name: "Ethan Carter",
      position: "Founder & CEO",
    },
    {
      src: "https://auraui.com/memeimage/man3.jpg",
      alt: "Liam Johnson",
      name: "Liam Johnson",
      position: "Chief Technology Officer",
    },
    {
      src: "https://auraui.com/memeimage/man2.jpg",
      alt: "Noah Mitchell",
      name: "Noah Mitchell",
      position: "Head of Product",
    },
    {
      src: "https://auraui.com/memeimage/man4.jpg",
      alt: "Mason Wright",
      name: "Mason Wright",
      position: "Lead Engineer",
    },
    {
      src: "https://auraui.com/memeimage/man5.jpg",
      alt: "James Anderson",
      name: "James Anderson",
      position: "Head of Design",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.gridContainer}>
          <div className={style.grid}>
            {/* Left Intro Section */}
            <div className={style.textContainer}>
              <h2 className={style.title}>Meet the Team</h2>
              <p className={style.description}>
                AuraUI is built by a team of passionate creators and engineers
                who aim to redefine frontend development with speed, design, and
                simplicity.
              </p>
            </div>

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <div key={index} className={style.imageContainer}>
                <img
                  className={style.image}
                  src={member.src}
                  alt={member.alt}
                />
                <div className={style.gradientOverlay}></div>
                <div className={style.infoContainer}>
                  <div className={style.infoContent}>
                    <p className={style.name}>{member.name}</p>
                    <p className={style.position}>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* See All Members */}
            <div className={style.linkContainer}>
              <Link href="#" title="See All Members" className={style.link}>
                See All Members
                <svg
                  className={style.linkIcon}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

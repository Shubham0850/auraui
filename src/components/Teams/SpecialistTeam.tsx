import React from "react";
import Image from "next/image";

const styles = {
  section: "py-12 sm:py-16 lg:py-20 bg-black",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  headerContainer: "text-center lg:text-left lg:flex lg:items-end lg:justify-between",
  title: "tracking-tighter text-white",
  titlePart1: "text-4xl font-normal sm:text-5xl md:text-6xl",
  titlePart2: "font-serif text-5xl italic sm:text-6xl md:text-7xl",
  subtitle: "max-w-md mx-auto lg:mx-0 mt-6 text-lg font-normal leading-8 text-opacity-50 text-white",
  button: `
    inline-flex
    items-center
    justify-center
    px-5
    py-2
    text-sm
    font-semibold
    transition-all
    duration-200
    border-2 border-transparent
    rounded-full
    bg-white
    text-black
    hover:bg-opacity-90
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
  `,
  grid: "grid grid-cols-1 gap-6 sm:gap-8 mt-12 md:mt-16 text-center lg:grid-cols-4",
  memberContainer: "relative overflow-hidden rounded-lg",
  gradientOverlay: "absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80",
  memberInfoContainer: "absolute inset-x-0 bottom-0 px-4 py-6",
  memberName: "font-sans text-base sm:text-2xl font-normal text-white",
  memberRole: "mt-1 font-serif text-sm sm:text-xl italic text-white",
};

const members = [
  {
    name: "Cymone Magdalina",
    role: "Chef",
    image: "https://auraui.com/memeimage/akshay1.webp",
  },
  {
    name: "Veronika Inaya",
    role: "Business owner",
    image: "https://auraui.com/memeimage/babubhaiya.jpg",
  },
  {
    name: "Hyeon Vivek",
    role: "Cooking Teacher",
    image: "https://auraui.com/memeimage/udayshetty.jpg",
  },
  {
    name: "Sophia Ella",
    role: "Professional Baker",
    image: "https://auraui.com/memeimage/akshay1.webp",
  },
];

const SpecialistTeam = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div>
            <h2 className={styles.title}>
              <span className={styles.titlePart1}> A Team of </span>
              <span className={styles.titlePart2}> specialists </span>
            </h2>
            <p className={styles.subtitle}>
              Tortor, eget vitae at malesuada donec. Egestas et tincidunt dictumst non.
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <a href="#" title="" className={styles.button} role="button">
              Learn More
              <svg className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.memberContainer}>
              <div className="aspect-w-3 aspect-h-5">
                <img className="object-cover w-full h-full" src={member.image} alt={member.name} width={320} height={400} />
              </div>
              <div className={styles.gradientOverlay}></div>
              <div className={styles.memberInfoContainer}>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistTeam;

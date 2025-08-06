import React from "react";

const styles = {
  section: "py-16 bg-black sm:py-20 lg:py-28",
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  headerContainer:
    "text-center lg:text-left lg:flex lg:items-end lg:justify-between",
  title: "tracking-tighter text-white",
  titlePart1: "text-4xl font-light sm:text-5xl md:text-6xl",
  titlePart2:
    "font-serif text-5xl italic sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400",
  subtitle:
    "max-w-lg mx-auto lg:mx-0 mt-6 text-lg font-normal leading-8 text-gray-300",
  button: `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-200
    rounded-full
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
    text-white
    shadow-md
    hover:shadow-lg
    hover:opacity-90
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `,
  grid: "grid grid-cols-1 gap-8 mt-14 md:mt-20 text-center sm:grid-cols-2 lg:grid-cols-4",
  memberContainer:
    "relative overflow-hidden rounded-2xl shadow-lg group transform transition duration-300 hover:-translate-y-2",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-all duration-300",
  memberInfoContainer: "absolute inset-x-0 bottom-0 px-5 py-6 text-left",
  memberName: "font-sans text-lg sm:text-xl font-semibold text-white",
  memberRole: "mt-1 font-serif text-sm sm:text-base italic text-gray-200",
};

const members = [
  {
    name: "Cymone Magdalina",
    role: "Chef",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Veronika Inaya",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hyeon Emily",
    role: "Cooking Teacher",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Ella",
    role: "Professional Baker",
    image:
      "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SpecialistTeam = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerContainer}>
          <div>
            <h2 className={styles.title}>
              <span className={styles.titlePart1}>A Team of </span>
              <span className={styles.titlePart2}>Specialists</span>
            </h2>
            <p className={styles.subtitle}>
              Meet the passionate experts behind AuraUI, combining creativity,
              strategy, and craftsmanship to deliver world-class design
              solutions.
            </p>
          </div>

          <div className="mt-10 lg:mt-0">
            <a href="#" title="Learn More" className={styles.button}>
              Learn More
              <svg
                className="h-5 w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Members Grid */}
        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.memberContainer}>
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                  src={member.image}
                  alt={member.name}
                />
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

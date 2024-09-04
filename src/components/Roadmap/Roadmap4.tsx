import React from "react";

// Define common styles
const style = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  gridContainer:
    "grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16",
  imageContainer: "aspect-w-4 aspect-h-3 lg:aspect-none",
  image: "object-cover rounded-md h-[520px]",
  contentContainer: "flex flex-col justify-between lg:col-span-8",
  headerContainer: "max-w-md",
  header: "text-3xl font-bold text-gray-900",
  subHeader: "mt-4 text-base font-medium text-gray-500",
  phasesGrid:
    "grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 sm:mt-16 xl:gap-x-16",
  phaseTitle: "text-sm font-medium text-gray-500",
  phaseName: "mt-4 text-xl font-bold text-gray-900",
  phaseDescription: "mt-4 text-base font-medium text-gray-500",
};

const Roadmap4: React.FC = () => {
  const phases = [
    {
      title: "Phase 1",
      name: "Launch",
      description:
        "Initiate the project with essential resources and define key milestones to ensure a strong start.",
    },
    {
      title: "Phase 2",
      name: "Investment",
      description:
        "Secure funding and invest in critical areas to drive growth and innovation.",
    },
    {
      title: "Phase 3",
      name: "Connection",
      description:
        "Establish partnerships and connect with stakeholders to expand our reach and impact.",
    },
    {
      title: "Phase 4",
      name: "Growth",
      description:
        "Scale the project by leveraging resources, optimizing processes, and reaching new markets.",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.gridContainer}>
          <div className="lg:col-span-4">
            <div className={style.imageContainer}>
              <img
                className={style.image}
                src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Roadmap Illustration"
              />
            </div>
          </div>

          <div className={style.contentContainer}>
            <div className={style.headerContainer}>
              <h2 className={style.header}>Our Roadmap to Success</h2>
              <p className={style.subHeader}>
                Explore our strategic roadmap to achieve our vision and goals,
                ensuring a creative and collaborative journey.
              </p>
            </div>

            <div className={style.phasesGrid}>
              {phases.map((phase, index) => (
                <div key={index}>
                  <p className={style.phaseTitle}>{phase.title}</p>
                  <p className={style.phaseName}>{phase.name}</p>
                  <p className={style.phaseDescription}>{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap4;

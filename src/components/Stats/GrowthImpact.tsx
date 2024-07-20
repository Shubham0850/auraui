import React from "react";

const styles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  contentWrapper: "flex flex-col max-w-6xl gap-12 mx-auto lg:items-center lg:justify-between lg:flex-row",
  titleWrapper: "lg:max-w-md xl:max-w-xl",
  title: "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
  description: "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
  statsGrid: "grid grid-cols-2",
  statBox: "pt-4 pb-8 sm:pb-12 sm:px-4",
  statBoxBorder: "border-gray-200",
  statValue: "text-5xl font-semibold tracking-tight text-gray-900",
  statLabel: "mt-3 text-base font-semibold text-blue-600",
};

const stats = [
  { value: "36K+", label: "Satisfied clients" },
  { value: "79%", label: "Download range" },
  { value: "64K+", label: "Success projects" },
  { value: "25+", label: "Awards winning" },
];

const GrowthImpact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Our strength is expressed in numbers</h2>
            <p className={styles.description}>
              AuraUI gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${styles.statBox} ${
                  index % 2 === 1 ? "sm:pl-12 sm:pr-4" : "sm:pr-12 sm:pl-4"
                } ${index > 1 ? "border-t" : ""} ${index % 2 === 1 ? "border-l" : ""} ${styles.statBoxBorder}`}
              >
                <p className={styles.statValue}>{stat.value}</p>
                <h3 className={styles.statLabel}>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthImpact;

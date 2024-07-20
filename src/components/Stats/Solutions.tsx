import React from "react";
import { FaUsers, FaEnvelope, FaChartLine, FaAward } from "react-icons/fa";

const styles = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  titleWrapper: "lg:max-w-xl lg:mx-auto sm:text-center",
  title: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl",
  description: "mt-8 text-lg font-normal text-gray-600",
  statsGrid: "grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-12 lg:mt-16 xl:mt-20 sm:grid-cols-4 lg:gap-x-12 xl:gap-x-10",
  statBox: "overflow-hidden bg-white border border-gray-300 rounded-2xl",
  statContent: "p-6 lg:py-10 lg:px-9",
  icon: "w-16 h-16 text-gray-900",
  statValue: "mt-24 text-5xl font-bold text-gray-900",
  statLabel: "mt-4 text-lg font-normal leading-tight text-gray-900",
};

const stats = [
  { icon: FaUsers, value: "430k", label: "Active customers" },
  { icon: FaEnvelope, value: "149k", label: "Email subscribers" },
  { icon: FaChartLine, value: "$1M+", label: "Monthly transaction" },
  { icon: FaAward, value: "25+", label: "Awards winning" },
];

const SolutionsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>We create solutions that make dev life easier</h2>
          <p className={styles.description}>You can easily build anything with AuraUI</p>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.statContent}>
                <stat.icon className={styles.icon} />
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

import React from "react";

const styles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headerContainer: "max-w-xl mx-auto text-center",
  headerTitle: "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
  headerSubtitle: "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
  achievementsContainer: "relative max-w-2xl mx-auto mt-12 overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 sm:mt-16 lg:max-w-3xl xl:max-w-none rounded-2xl",
  circleDecoration: "border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100",
  circleLeft: "absolute top-0 left-0 -translate-x-2/3 -translate-y-[75%]",
  circleRight: "absolute bottom-0 right-0 translate-x-1/3 translate-y-[85%]",
  content: "relative px-8 py-12 lg:px-12 lg:py-16 xl:py-20",
  grid: "grid grid-cols-1 gap-8 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4",
  achievementItem: "flex items-center",
  achievementNumber: "w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0",
  achievementText: "ml-5 text-base font-normal leading-tight text-blue-200",
};

const achievements = [
  { number: "483", text: "Satisfied global clients" },
  { number: "78%", text: "Download total range" },
  { number: "854", text: "Finish success projects" },
  { number: "315", text: "Branding awards winning" },
];

const AchievementsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.headerTitle}>Our achievements</h2>
          <p className={styles.headerSubtitle}>
            AuraUI gives you the blocks & components you need to create a truly professional website for your SaaS and gives the blocks.
          </p>
        </div>

        <div className={styles.achievementsContainer}>
          <div className={`${styles.circleDecoration} ${styles.circleLeft}`}></div>
          <div className={`${styles.circleDecoration} ${styles.circleRight}`}></div>

          <div className={styles.content}>
            <div className={styles.grid}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementItem}>
                  <p className={styles.achievementNumber}>{achievement.number}</p>
                  <h3 className={styles.achievementText}>{achievement.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

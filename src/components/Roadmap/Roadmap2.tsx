import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

const styles = {
  section: "py-12 bg-gray-900 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headerContainer: "text-center lg:text-left lg:flex lg:items-center lg:justify-between",
  headerTitle: "text-3xl font-bold text-white",
  headerSubtitle: "max-w-xs mx-auto mt-4 text-base font-medium text-gray-400 lg:mx-0 lg:mt-0",
  roadmapContainer: "mt-12 sm:px-16 lg:px-0",
  roadmapGrid: "grid grid-cols-1 overflow-hidden border border-gray-700 divide-y divide-gray-700 lg:divide-y-0 lg:divide-x lg:grid-cols-3 rounded-xl",
  phaseContainer: "p-6 sm:p-8 lg:px-10",
  phaseTitle: "text-sm font-semibold tracking-wide text-gray-400 uppercase",
  phaseName: "mt-3 text-xl font-bold text-white",
  taskList: "space-y-3 mt-7",
  taskItem: "flex items-center px-4 py-3 bg-gray-800 rounded-lg",
  icon: "w-5 h-5 text-white shrink-0",
  taskText: "flex-1 ml-2 text-base font-medium text-white",
};

const roadmapPhases = [
  {
    title: "Phase 1",
    name: "Launch",
    tasks: [
      { name: "Launching Time", completed: true },
      { name: "Social Launch", completed: true },
      { name: "Giveaways & Promos", completed: true },
    ],
  },
  {
    title: "Phase 2",
    name: "Investment",
    tasks: [
      { name: "Publish Whitepaper", completed: false },
      { name: "Website Launch", completed: false },
      { name: "Mega Advertisement", completed: false },
    ],
  },
  {
    title: "Phase 3",
    name: "Growth",
    tasks: [
      { name: "Opening Collections", completed: false },
      { name: "Influencer Marketing", completed: false },
      { name: "Public Release", completed: false },
    ],
  },
];

const Roadmap2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.headerTitle}>Full Roadmap</h2>
          <p className={styles.headerSubtitle}>
            In a creative workplace, employees responsibly try different
            solutions.
          </p>
        </div>

        <div className={styles.roadmapContainer}>
          <div className={styles.roadmapGrid}>
            {roadmapPhases.map((phase, index) => (
              <div key={index} className={styles.phaseContainer}>
                <p className={styles.phaseTitle}>{phase.title}</p>
                <p className={styles.phaseName}>{phase.name}</p>
                <ul className={styles.taskList}>
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className={styles.taskItem}>
                      {task.completed ? (
                        <FaRegCheckCircle className={styles.icon} />
                      ) : (
                        <FaRegCircle className={styles.icon} />
                      )}
                      <span className={styles.taskText}>{task.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap2;

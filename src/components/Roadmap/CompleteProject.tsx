import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const styles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headingContainer: "max-w-md mx-auto text-center",
  heading: "text-3xl font-bold text-gray-900",
  subHeading: "mt-4 text-base font-medium text-gray-500",
  grid: "grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:mt-16 lg:mt-20 sm:grid-cols-2 lg:grid-cols-4",
  phaseContainer: "mt-6 overflow-hidden bg-white rounded-lg",
  phaseContent: "px-4 py-5 sm:p-6",
  phaseTitle: "text-sm font-semibold tracking-wide text-gray-400 uppercase",
  phaseSubtitleContainer: "relative mt-2",
  phaseSubtitleLine: "absolute inset-0 flex items-center",
  phaseSubtitleTextContainer: "relative flex justify-start",
  phaseSubtitle: "pr-5 text-xl font-bold text-gray-900 bg-gray-50",
  iconContainer: "flex items-center",
  icon: "w-5 h-5 text-gray-900 shrink-0",
  textBase: "ml-2 text-base font-medium text-gray-900",
};

const roadmapPhases = [
  {
    title: "Phase 1",
    name: "Initialization",
    tasks: [
      "Project Kickoff",
      "Req Gathering",
      "Initial Design Mockups",
      "Development Setup",
      "Prototype Creation",
      "Initial Testing",
    ],
    completedTasks: [0, 1, 2],
  },
  {
    title: "Phase 2",
    name: "Development",
    tasks: [
      "Feature Development",
      "UI/UX Enhancements",
      "API Integration",
      "Database Setup",
      "Beta Testing",
      "Bug Fixing",
    ],
    completedTasks: [0, 1],
  },
  {
    title: "Phase 3",
    name: "Launch Preparation",
    tasks: [
      "Final Testing",
      "Marketing Campaign",
      "Documentation",
      "User Training",
      "Pre-Launch Feedback",
      "Launch Event Planning",
    ],
    completedTasks: [0],
  },
  {
    title: "Phase 4",
    name: "Post-Launch",
    tasks: [
      "Live Support",
      "User Feedback",
      "Cont. Improvement",
      "New Feature",
      "Perf. Optimization",
      "Customer Stories",
    ],
    completedTasks: [],
  },
];

const CompleteProject = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Full Roadmap</h2>
          <p className={styles.subHeading}>
            Follow our detailed project roadmap to see how we bring AuraUI to life.
          </p>
        </div>

        <div className={styles.grid}>
          {roadmapPhases.map((phase, index) => (
            <div key={index}>
              <p className={styles.phaseTitle}>{phase.title}</p>
              <div className={styles.phaseSubtitleContainer}>
                <div className={styles.phaseSubtitleLine} aria-hidden="true">
                  <div className="w-full border-t border-gray-300 border-dashed"></div>
                </div>
                <div className={styles.phaseSubtitleTextContainer}>
                  <span className={styles.phaseSubtitle}>{phase.name}</span>
                </div>
              </div>

              <div className={styles.phaseContainer}>
                <div className={styles.phaseContent}>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className={styles.iconContainer}>
                        {phase.completedTasks.includes(taskIndex) ? (
                          <FaCircleCheck className={styles.icon} />
                        ) : (
                          <FaRegCircle className={styles.icon} />
                        )}
                        <span className={styles.textBase}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteProject;

import React from "react";

// Define common styles
const style = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headerContainer: "max-w-2xl mx-auto text-center xl:max-w-4xl",
  title: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  relativeContainer: "relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto",
  gradientBackground: "absolute -inset-2",
  gradientDiv: "w-full h-full mx-auto opacity-30 blur-lg filter",
  contentContainer: "relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20",
  itemContainer: "flex flex-col items-center",
  itemNumber: "text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj",
  itemTitle: "mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj",
};

const StatsSection: React.FC = () => {
  const stats = [
    { title: "Blocks", number: "110+" },
    { title: "Templates", number: "29" },
    { title: "Customers", number: "3400+" },
    { title: "Support Tickets", number: "2844" },
  ];

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <h2 className={style.title}>
            AuraUI Crafting Unique & Rare UI Kits with TailwindCSS
          </h2>
        </div>

        <div className={style.relativeContainer}>
          <div className={style.gradientBackground}>
            <div
              className={style.gradientDiv}
              style={{
                background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className={style.contentContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={style.itemContainer}>
                <p className={style.itemNumber}>{stat.number}</p>
                <h3 className={style.itemTitle}>{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

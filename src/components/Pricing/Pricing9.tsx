import React from "react";

// Consolidate repetitive class names into objects
const styles = {
  container: "px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl",
  header: "tracking-tighter text-white",
  heading: "font-sans text-4xl font-normal md:text-6xl",
  subheading: "font-serif text-5xl italic md:text-7xl",
  paragraph: "mt-6 font-sans text-lg font-normal text-opacity-50 text-white",
  buttonGroup:
    "inline-flex items-center justify-center p-1 mt-8 rounded-full bg-neutral-light bg-opacity-20",
  button: "px-8 py-2 font-sans text-base rounded-full",
  buttonYearly: "bg-white text-black",
  buttonMonthly: "bg-transparent text-white",
  card: "transition-all duration-200 border-2 rounded-2xl hover:bg-dark-gray",
  cardHeader: "p-6 sm:px-10 sm:py-8",
  cardTitle: "font-sans text-2xl font-normal text-white",
  cardDescription:
    "mt-2 font-sans text-lg font-normal text-opacity-50 text-white lg:px-8",
  cardPrice: "mt-6 font-sans text-6xl font-normal text-white",
  cardPeriod: "mt-2 font-sans text-base font-normal text-white",
  cta: "inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary",
};

function Pricing9() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className={styles.container}>
        <div className="max-w-lg mx-auto text-left sm:text-center">
          <h2 className={styles.header}>
            <span className={styles.heading}>Pricing</span>
            <span className={styles.subheading}>Options</span>
          </h2>
          <p className={styles.paragraph}>
            Discover the perfect pricing plan for your needs with AuraUI&apos;s
            flexible options.
          </p>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonYearly}`}
            >
              Yearly
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonMonthly}`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-12 text-left sm:gap-8 sm:text-center sm:grid-cols-2">
          <div className={`${styles.card} border-primary`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Starter</h3>
              <p className={styles.cardDescription}>
                Get started with AuraUI and explore the basics of our
                components.
              </p>
              <p className={styles.cardPrice}>$19.99</p>
              <p className={styles.cardPeriod}>per month</p>
            </div>
          </div>

          <div className={`${styles.card} border-neutral`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Advanced</h3>
              <p className={styles.cardDescription}>
                Unlock premium features and advanced components with AuraUI.
              </p>
              <p className={styles.cardPrice}>$99.99</p>
              <p className={styles.cardPeriod}>per month</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#" title="" className={styles.cta}>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing9;

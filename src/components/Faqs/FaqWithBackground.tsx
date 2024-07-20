import React from "react";

const styles = {
  section: "relative overflow-hidden bg-white",
  absoluteInset: "absolute inset-0",
  halfBgBlue: "absolute inset-y-0 left-0 w-1/2 bg-green-600",
  topLeftCircle: "absolute top-0 left-0 -translate-x-[60%] -translate-y-[75%] z-10",
  circle: "border-[8px] border-white rounded-full opacity-20 lg:opacity-100",
  relativeContainer: "relative mx-auto max-w-7xl lg:grid lg:grid-cols-5",
  blueBgSection: "relative px-4 py-16 bg-green-600 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24",
  bottomRightCircle: "absolute bottom-0 right-0 translate-x-[25%] translate-y-[75%]",
  whiteBgSection: "px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12",
  maxWidthLg: "max-w-lg mx-auto lg:mr-auto lg:max-w-md",
  maxWidthXl: "max-w-lg mx-auto xl:max-w-xl",
  heading: "text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl",
  subText: "mt-4 text-base font-normal leading-7 text-green-300 lg:text-lg lg:mt-6 lg:leading-8",
  flowRoot: "flow-root",
  divide: "-my-10 divide-y divide-gray-200",
  py: "py-10",
  question: "text-xl font-semibold text-gray-900",
  answer: "mt-3 text-base font-normal text-gray-600",
};

const faqs = [
  {
    question: "Q. How this theme is different from others in market?",
    answer: "AuraUI provides unique, customizable components designed to simplify the development process and enhance user experience.",
  },
  {
    question: "Q. What payment method do you support?",
    answer: "AuraUI supports various payment methods including credit cards, PayPal, and cryptocurrencies.",
  },
  {
    question: "Q. Will I get money back if I am not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee if you are not satisfied with AuraUI.",
  },
  {
    question: "Q. How do you provide support for plugins?",
    answer: "Our team provides extensive documentation and 24/7 support for all plugins included in AuraUI.",
  },
];

const FAQSectionWithBackground = () => {
  return (
    <section className={styles.section}>
      <div className={styles.absoluteInset}>
        <div className={styles.halfBgBlue}></div>
      </div>

      <div className={styles.topLeftCircle}>
        <div className={`${styles.circle} w-80 h-80`}></div>
      </div>

      <div className={styles.relativeContainer}>
        <div className={styles.blueBgSection}>
          <div className={styles.bottomRightCircle}>
            <div className={`${styles.circle} w-96 h-96`}></div>
          </div>

          <div className={styles.maxWidthLg}>
            <h2 className={styles.heading}>Frequently asked questions</h2>
            <p className={styles.subText}>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
        </div>

        <div className={styles.whiteBgSection}>
          <div className={styles.maxWidthXl}>
            <div className={styles.flowRoot}>
              <div className={styles.divide}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.py}>
                    <h3 className={styles.question}>{faq.question}</h3>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionWithBackground;

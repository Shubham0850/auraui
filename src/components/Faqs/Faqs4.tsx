import React from "react";
import Link from "next/link";

const styles = {
  section: "py-10 bg-white sm:py-16 lg:py-24",
  container: "max-w-6xl px-4 mx-auto sm:px-6 lg:px-8",
  title: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",
  flowRoot: "flow-root mt-12 sm:mt-16",
  divide: "divide-y divide-gray-200 -my-9",
  py: "py-9",
  question: "text-xl font-semibold text-black",
  answer: "mt-3 text-base text-gray-600",
  link: "text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",
};

const faqs = [
  {
    question: "How to create an account?",
    answers: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    question: "What payment method do you support?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.",
    ],
  },
  {
    question: "What payment method do you support?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    question: "How do you provide support?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      <Link href="#" key="support" className={styles.link}>
        support@auraui.com
      </Link>,
    ],
  },
];

const Faqs4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.flowRoot}>
          <div className={styles.divide}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.py}>
                <p className={styles.question}>{faq.question}</p>
                {faq.answers.map((answer, i) => (
                  <p key={i} className={styles.answer}>
                    {answer}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs4;

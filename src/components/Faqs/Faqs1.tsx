import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faqs1 = () => {
  const faqs = [
    {
      id: 1,
      question: "Q. How this theme is different from others in the market?",
      answer:
        "AuraUI provides unique, customizable components designed to simplify the development process and enhance user experience.",
    },
    {
      id: 2,
      question: "Q. Does this theme support plugins?",
      answer:
        "AuraUI supports various plugins to extend the functionality of your projects, making development faster and easier.",
    },
    {
      id: 3,
      question: "Q. Do you provide any moneyback guarantee for this product?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you are not satisfied with AuraUI.",
    },
    {
      id: 4,
      question: "Q. What payment method do you support?",
      answer:
        "AuraUI supports various payment methods including credit cards, PayPal, and cryptocurrencies.",
    },
    {
      id: 5,
      question: "Q. How do you provide support?",
      answer:
        "Our team provides extensive documentation and 24/7 support for all products and plugins included in AuraUI.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Ask everything you need to know about our products and services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
          {faqs.map((faq) => (
            <div key={faq.id} role="region">
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeId === faq.id}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    {activeId === faq.id ? (
                      <FaMinus className="w-6 h-6 text-gray-900" />
                    ) : (
                      <FaPlus className="w-6 h-6 text-gray-900" />
                    )}
                  </span>
                </button>
              </h3>
              {activeId === faq.id && (
                <div>
                  <div className="px-6 pb-6">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 overflow-hidden text-center bg-gray-100 sm:mt-12 rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <div className="max-w-sm mx-auto">
              <div className="relative z-0 flex items-center justify-center -space-x-2 overflow-hidden">
                <img
                  className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                  src="https://auraui.com/memeimage/akshay1.webp"
                  alt=""
                />
                <img
                  className="relative z-30 inline-block w-16 h-16 rounded-full ring-4 ring-gray-100"
                  src="https://auraui.com/memeimage/babubhaiya.jpg"
                  alt=""
                />
                <img
                  className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                  src="https://auraui.com/memeimage/jack.jpg"
                  alt=""
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Still have questions?
              </h3>
              <p className="mt-2 text-base font-normal text-gray-600">
                {"Can't find the answer you're looking for? Please chat with our friendly team."}
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  role="button"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs1;

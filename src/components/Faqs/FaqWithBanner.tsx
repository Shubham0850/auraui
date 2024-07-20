import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqWithBanner = () => {
  const faqs = [
    {
      id: 1,
      question: "How to create an account?",
      answer:
        "Creating an account on AuraUI is simple and quick. Just click on the 'Sign Up' button and follow the instructions.",
    },
    {
      id: 2,
      question: "Do you provide any support for this kit?",
      answer:
        "Yes, AuraUI offers comprehensive support for all its components and kits. You can reach out to us anytime.",
    },
    {
      id: 3,
      question: "How long do you provide support?",
      answer:
        "We provide lifetime support for all our products, ensuring you have access to assistance whenever you need it.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16 xl:gap-x-24">
          <div>
            <img
              className="object-cover w-full rounded-2xl"
              src="https://images.unsplash.com/photo-1707002752319-2eca7b2f3551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              alt="Man with laptop smiling"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              FAQs
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white lg:mt-8 sm:text-4xl lg:text-5xl">
              Looking for answers?
            </h2>

            <div className="flow-root mt-12 sm:mt-16">
              <div className="-my-8 divide-y divide-gray-700">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="py-2"
                    role="region"
                  >
                    <h3>
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={activeId === faq.id}
                        className="flex items-center justify-between w-full py-6 text-xl font-medium text-left text-gray-100"
                      >
                        <span>{faq.question}</span>
                        <span className="ml-4">
                          {activeId === faq.id ? (
                            <FaChevronUp className="w-6 h-6 text-gray-500" />
                          ) : (
                            <FaChevronDown className="w-6 h-6 text-gray-500" />
                          )}
                        </span>
                      </button>
                    </h3>

                    {activeId === faq.id && (
                      <div>
                        <div className="pb-6">
                          <p className="text-base text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
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

export default FaqWithBanner;

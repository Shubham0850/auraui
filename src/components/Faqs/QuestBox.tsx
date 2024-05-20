import React from "react";

interface Question {
  question: string;
  answer: string;
}

interface QuestionItemProps {
  question: string;
  answer: string;
}

const questions = [
  {
    question: "How do I get started?",
    answer:
      "Pehle jakr google pr search kro uske baad youtube pe search kro uske baad start krdo aura bhai",
  },
  {
    question: "How can I make payment?",
    answer:
      "Payment krne ki koi jarurt nhi hai dost bs aao use kro paltform or chale jao",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "Kyu nhi bahut discounts milega jitna jyada iss AuraUI ko share kroge utna milega",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "Bs AuraUI ka contact form fill up krdo ya email pe message krdo bhai",
  },
];

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => (
  <div className="flex items-start">
    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
      <span className="text-lg font-semibold text-white">?</span>
    </div>
    <div className="ml-4">
      <p className="text-xl font-semibold text-white">{question}</p>
      <p className="mt-4 text-base text-gray-400">{answer}</p>
    </div>
  </div>
);

const QuestBox: React.FC = () => {
  return (
    <section className="py-10 bg-[#0d3645] sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Questions & Answers..
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
            Explore the common questions and answers about AuraUI
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {questions.map((item, index) => (
            <QuestionItem key={index} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
              Didn’t find the answer you need?
              <a
                href="#"
                title=""
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Contact AuraUI
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestBox;

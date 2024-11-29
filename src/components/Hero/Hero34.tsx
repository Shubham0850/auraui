import React, { useState, useEffect } from "react";
import Image from "next/image";

const sentences = [
  "Product Description.",
  "SEO Content.",
  "Technical Writing.",
  "News Article.",
];

const Hero34 = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const sentence = sentences[currentSentenceIndex];
    let index = 0;
    const interval = setInterval(() => {
      if (index < sentence.length) {
        setCurrentText(sentence.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          );
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentSentenceIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prevValue) => !prevValue);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-10">
          <div className="grid text-center gap-4 px-4">
            <div>
              <p className="text-lg text-yellow-400">
                Best AI Copywriting Tool
              </p>
              <h1 className="text-4xl py-5 md:text-5xl font-bold text-white">
                A 10X Faster Way To Write Your
              </h1>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-yellow-600 bg-clip-text text-transparent">
                {currentText}
                <span
                  className={`ml-1 ${isBlinking ? "opacity-100" : "opacity-0"}`}
                >
                  |
                </span>
              </div>
            </div>
          </div>

          <div className="text-center py-4">
            <button className="w-52 md:w-64 py-4 text-sm md:text-base font-semibold rounded-lg bg-gradient-to-r from-purple-700 to-red-500 hover:from-purple-800 hover:to-red-600 text-white">
              Start Writing - It&apos;s Free
            </button>
          </div>

          <div className="flex justify-center py-8">
            <div className="border border-yellow-400 rounded-3xl overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src="https://www.auraui.com/images/screen1.webp"
                alt="AI Tool Screen"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="flex flex-col md:flex-row justify-center items-center gap-6 py-4">
            <li className="list-disc">Write Blogs 10X Faster</li>
            <li className="list-disc">Write Higher Converting Posts</li>
            <li className="list-disc">Write More Engaging Emails</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero34;

import React from "react";
import Image from "next/image";
import { FaTasks, FaCloud, FaUsers } from "react-icons/fa";

const Feature9: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
            Productivity Suite
          </p>
          <h2 className="mt-2 text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Build your solid team
          </h2>
          <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Auraui enhances your team's workflow with effortless task
            management, centralized cloud storage, and built-in collaboration
            tools to keep everything aligned and efficient.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="relative mt-14 flex flex-col sm:flex-row justify-center items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-[#fef2f2] via-[#e0f2fe] to-[#dcfce7] shadow-md max-w-4xl mx-auto">
          {/* Task Creation */}
          <div className="flex items-center gap-4">
            <div className="bg-white text-blue-600 p-4 rounded-full shadow-md text-xl">
              <FaTasks />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800">Unlimited</p>
              <p className="text-sm text-gray-600">Task Creation</p>
            </div>
          </div>

          {/* Cloud Storage */}
          <div className="flex items-center gap-4">
            <div className="bg-white text-indigo-600 p-4 rounded-full shadow-md text-xl">
              <FaCloud />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800">100GB+</p>
              <p className="text-sm text-gray-600">Cloud Storage</p>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="flex items-center gap-4">
            <div className="bg-white text-emerald-600 p-4 rounded-full shadow-md text-xl">
              <FaUsers />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800">
                Collaboration
              </p>
              <p className="text-sm text-gray-600">Real-time Teamwork</p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            {
              title: "Cross-functional Teams",
              desc: "Coordinate efforts across departments with seamless task handoffs.",
            },
            {
              title: "Live Progress Updates",
              desc: "Monitor real-time updates and project visibility with ease.",
            },
            {
              title: "Secure Permissions",
              desc: "Assign roles and control access without slowing down workflows.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition font-semibold">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature9;

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
          <h2 className="mt-2 text-4xl sm:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Build your solid team
          </h2>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Auraui enhances your team's workflow with effortless task
            management, centralized cloud storage, and built-in collaboration
            tools to keep everything aligned and efficient.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="relative mt-14 flex flex-col sm:flex-row justify-center items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-[#fef2f2] via-[#e0f2fe] to-[#dcfce7] shadow-md max-w-3xl mx-auto">
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

        {/* Team Image */}
        <div className="mt-14 max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <Image
            src="https://www.auraui.com/images/team.jpg"
            alt="Team productivity illustration"
            width={800}
            height={480}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature9;

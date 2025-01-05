import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";

const Footer8 = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-[1600px] mx-auto  flex-col lg:flex-row flex gap-10  xl:gap-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[350px] ">
          <div>
            <Image
              src="https://www.auraui.com/logo-light.png"
              alt="logoImage"
              width={140}
              height={28}
            />
          </div>
          <p className="text-[20px] leading-[30px] font-normal text-[#000000CC] mt-4">
            Our mission is to empower and guide businesses on their journey to
            sustainable practices. We do this by providing tailored,
            transparent, and cost-effective ESG solutions, ensuring companies
            thrive in compliance with CSRD regulations while maintaining their
            financial health.
          </p>
          <h3 className=" font-bold text-[20px] leading-[24px] text-[#000000CC] mt-8 ">
            Get the latest ESG news of your industry
          </h3>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Your business email ID"
              className="w-full border rounded outline-none  px-4 text-center py-2 text-sm border-[#A0A7AD] text-gray-900 mb-4"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-4 py-6 lg:py-0 ">
          <div>
            <h3 className="text-[20px] leading-[24px] font-bold text-[#000000CC] ">
              Top Sustainable Companies
            </h3>
            <ul className="mt-4 space-y-5">
              {Array(7)
                .fill("Decathlon")
                .map((company, index) => (
                  <li
                    key={index}
                    className="text-[20px] leading-[20px] font-normal text-[#000000CC] "
                  >
                    {company}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[24px] font-bold text-[#000000CC] ">
              Regulations
            </h3>
            <ul className="mt-4 space-y-5 text-[20px] leading-[20px] font-normal text-[#000000CC]  ">
              <li>CSRD</li>
              <li>SFDR</li>
              <li>CSDDD</li>
              <li>EU Taxonomy Reporting</li>
              <li>Double Materiality Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[24px] font-bold text-[#000000CC] ">
              Resources
            </h3>
            <ul className="mt-4 space-y-5 text-[20px] leading-[20px] font-normal text-[#000000CC]  ">
              <li>Learn ESG</li>
              <li>Blogs</li>
              <li>E-books</li>
              <li>Webinars</li>
              <li>Templates</li>
              <li>Glossary</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[24px] font-bold text-[#000000CC] ">
              Company
            </h3>
            <ul className="mt-4 space-y-5 text-[20px] leading-[20px] font-normal text-[#000000CC]  ">
              <li>About</li>
              <li>Team</li>
              <li>Partners</li>
              <li>Media Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] leading-[24px] font-bold text-[#000000CC] ">
              Important Links
            </h3>
            <ul className="mt-4 space-y-5 text-[20px] leading-[20px] font-normal text-[#000000CC] ">
              <li>REACTOR PRO</li>
              <li>REACTOR MEDIA</li>
              <li>ESG for Businesses</li>
              <li>CSRD for Business</li>
              <li>Supply Chain Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center   gap-4  ">
        <div className="flex gap-3  ">
          <FaFacebookF className="size-6" /> <FaXTwitter className="size-6" />
          <FaSquareInstagram className="size-6" />
          <FaRss className="size-6" />
        </div>
        <div>
          <h3 className="font-normal text-[15px] leading-[24px] ">
            © REACTOR, LLC, 2024. All rights reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer8;

"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact5: FC = () => {
  return (
    <div id="contact" className="w-full bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        {/* Section Heading */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-center mb-12">
          Contact
        </h2>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 rounded-xl bg-black border p-6 shadow-lg">
            <Image
              src="https://www.auraui.com/images/contact.webp"
              alt="Contact Us"
              className="rounded-xl mb-4"
              layout="responsive"
              width={500}
              height={300}
            />
            <p className="text-lg md:text-xl mb-6">
              For any queries, contact us here:
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  href: "https://www.linkedin.com/",
                  icon: <FaLinkedin size={30} />,
                  bgColor: "bg-blue-600",
                },
                {
                  href: "https://twitter.com/",
                  icon: <FaTwitter size={30} />,
                  bgColor: "bg-blue-400",
                },
                {
                  href: "https://github.com/",
                  icon: <FaGithub size={30} />,
                  bgColor: "bg-gray-800",
                },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className={`flex items-center justify-center ${link.bgColor} rounded-full shadow-md p-3 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-black border rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <form action="https://getform.io/" method="POST">
              <div className="space-y-4">
                {/* Form Fields */}
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Phone", type: "text", name: "phone" },
                  { label: "Email", type: "email", name: "email" },
                  {
                    label: "Message",
                    type: "textarea",
                    name: "message",
                    rows: 6,
                  },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-md font-normal text-slate-200 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        rows={field.rows || 4}
                        className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="group bg-blue-200 text-green-900 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact5;

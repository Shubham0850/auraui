"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Header6: React.FC = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPageScroll(window.scrollY >= 90);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links: { id: number; link: string }[] = [
    { id: 1, link: "home" },
    { id: 2, link: "projects" },
    { id: 3, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`w-full h-20 z-10  bg-black text-white duration-300 ease-in ${
        pageScroll ? "bg-blur" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <a href="#" className="flex items-center space-x-2">
          <img
            className="w-auto h-8"
            src="https://www.auraui.com/logo-dark.png"
            alt="AuraUI Logo"
          />
        </a>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link href={`/#${link}`}>
                  <span className="ml-10 text-md uppercase cursor-pointer duration-200 ease-out hover:scale-105 hover:text-green-500 tracking-wider">
                    {link}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={`fixed top-0 ${
            navigation ? "left-0" : "left-[-100%]"
          } w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
                >
                  AuraUI
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link href={`/#${link}`}>
                    <span
                      onClick={() => setNavigation(false)}
                      className="py-4 text-2xl tracking-wider cursor-pointer"
                    >
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <Link
                  href="https://www.linkedin.com/company/auraui/about/?viewAsMember=true"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <FaLinkedin size={25} />
                  </div>
                </Link>
                <Link href="https://x.com/aura__ui" target="_blank">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <FaTwitter size={25} />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/aura__ui/"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <FaInstagram size={25} />
                  </div>
                </Link>
                <Link
                  href="https://github.com/Shubham0850/auraui/"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                    <FaGithub size={25} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header6;

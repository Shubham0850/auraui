import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WiDirectionRight } from "react-icons/wi";

const LogoCloud17 = () => {
  const partnerData = [
    {
      id: 1,
      img: "https://www.auraui.com/logos/logo16.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 2,
      img: "https://www.auraui.com/logos/logo5.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 3,
      img: "https://www.auraui.com/logos/logo4.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 4,
      img: "https://www.auraui.com/logos/logo3.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 5,
      img: "https://www.auraui.com/logos/logo2.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 6,
      img: "https://www.auraui.com/logos/logo1.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 7,
      img: "https://www.auraui.com/logos/logo.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 8,
      img: "https://www.auraui.com/logos/logo6.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 9,
      img: "https://www.auraui.com/logos/logo8.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 10,
      img: "https://www.auraui.com/logos/logo19.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 11,
      img: "https://www.auraui.com/logos/logo11.svg",
      link: "https://www.auraui.com/",
    },
    {
      id: 12,
      img: "https://www.auraui.com/logos/logo10.svg",
      link: "https://www.auraui.com/",
    },
  ];

  return (
    <div className="bg-black text-white my-20 py-8 rounded-lg max-w-[1180px] px-4 mx-auto">
      <h1 className="text-4xl md:text-[54px] font-semibold mb-6">
        Our Partners
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {partnerData.map((partner) => (
          <div
            key={partner.id}
            className="group relative p-4 border border-gray-600 h-[200px] bg-[#222222] flex items-center justify-center hover:bg-[#FFFFFF33] transition duration-300"
          >
            <Image
              src={partner.img}
              alt={`Partner logo ${partner.id}`}
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
            <Link
              href={partner.link}
              target="_blank"
              className="absolute bottom-0 w-full h-full opacity-0 group-hover:opacity-100 flex justify-end items-end p-4"
            >
              <WiDirectionRight className="text-[50px] text-white" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud17;

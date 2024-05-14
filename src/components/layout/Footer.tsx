import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto max-w-6xl ">
      <div className="flex md:w-[700px]  lg:w-[1024px] justify-between ">
        <span>Aura UI 2024</span>
        <div className="  ">
          <Link href={"/introduction/zcomponents/"}>
            <h1>Components</h1>
          </Link>
          <Link href={"/pricings/"}>
            <h1>Pricing</h1>
          </Link>
          <Link href={"https://twitter.com/Jayjeet_100"} target="_blank">
            <h1>Twitter</h1>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/"}
            target="_blank"
          >
            <h1>Linkedin</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

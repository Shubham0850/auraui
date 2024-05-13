import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="py-20  ">
      <Link href={"/introduction"}>
        <button className="p-2  bg-black text-white ">Browse Components</button>
      </Link>
    </div>
  );
}

export default Hero;

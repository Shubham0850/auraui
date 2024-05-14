import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="py-20  ">
      <Link href={"/introduction"}>
        <button className="px-4 py-2 rounded-lg bg-black text-white ">Browse Components</button>
      </Link>
    </div>
  );
}

export default Hero;

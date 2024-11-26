import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header5() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed z-50 bg-black text-white w-full">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 py-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            ⚡️ Web3<b>Campus</b>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/learn" className="text-xl hover:text-yellow-400">
            👨‍💻 Learn
          </Link>
          <Link href="/earn" className="text-xl hover:text-yellow-400">
            💰 Earn
          </Link>
          <Link href="/explore" className="text-xl hover:text-yellow-400">
            Explore
          </Link>
          <Link href="/newsletter" className="text-xl hover:text-yellow-400">
            News
          </Link>
          <Link href="/contact" className="text-xl hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menu ? (
            <AiOutlineClose className="text-white text-3xl cursor-pointer" />
          ) : (
            <AiOutlineMenu className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden bg-gray-900 px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/learn"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              👨‍💻 Learn
            </Link>
            <Link
              href="/earn"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              💰 Earn
            </Link>
            <Link
              href="/explore"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Explore
            </Link>
            <Link
              href="/newsletter"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-lg hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

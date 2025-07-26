import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header5 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define menu items with explicit paths
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "👨‍💻 Learn", path: "/learn" },
    { label: "💰 Earn", path: "/earn" },
    { label: "Explore", path: "/explore" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className=" top-0 w-full bg-black text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            className="w-auto h-8"
            src="https://www.auraui.com/logo-dark.png"
            alt="AuraUI Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.path}
                className="text-xl hover:text-yellow-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="text-lg hover:text-yellow-400 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header5;

import React from "react";
import { useTheme, ThemeSwitch, Navbar } from "nextra-theme-docs";
import ComponentSection from "../home/Components";

function Nav() {
  const compo = {};

  return (
    <div className="relative">
      <div className="relative">
        <Navbar items={[]} flatDirectories={[]} />
      </div>
    </div>
  );
}

export default Nav;

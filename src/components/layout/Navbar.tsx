import React from "react";
import { useTheme,ThemeSwitch, Navbar } from "nextra-theme-docs";
import ComponentSection from "../home/Components";

function Nav() {

  const compo ={

  }

  return (
    <div>
      <ThemeSwitch/>
      <Navbar items={[]} flatDirectories={[]} />
    </div>
  );
}

export default Nav;

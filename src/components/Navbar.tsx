"use client";

import React, { useState } from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: .5,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  };

  return (
    <>
      <motion.header
        variants={nav}
        initial="initial"
        animate="animate"
        className="z-[99] duration-300 sticky top-0 bg-transparent mix-blend-multiply dark:mix-blend-difference"
      >
        <div className="flex justify-between items-center py-3 2xl:py-4">
          {/* AUREXIS LOGO */}
          <Link href={"/"} aria-label="Aurexis Digital Studio home" className="block">
            <Logo className="h-14 md:h-16 2xl:h-24" />
          </Link>
          {/* DARK MODE/LIGHT MODE TOGGLE */}
          <DarkLightSwitch />
          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className="2xl:text-[26px]"
          >
            Menu
          </button>
        </div>
      </motion.header>
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  );
}

export default Navbar;

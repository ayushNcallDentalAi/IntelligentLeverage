/**
 * Navbar Component
 *
 * Main navigation bar component following SOLID principles:
 * - Single Responsibility: Orchestrates navbar sub-components
 * - Open/Closed: Extensible via configuration without modification
 * - Dependency Inversion: Depends on navigationConfig abstraction
 */

"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarCTA } from "./NavbarCTA";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { navigationConfig } from "@/config/navigation";
import type { NavbarProps } from "@/lib/types";

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={cn("flex justify-center w-full py-6 px-4", className)}>
      <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-zinc-900/90 backdrop-blur-xl rounded-full shadow-lg w-full max-w-3xl relative z-10 border border-gray-200/50 dark:border-white/10">
        {/* Logo */}
        <NavbarLogo
          alt={navigationConfig.logo.alt}
          href={navigationConfig.logo.href}
        />

        {/* Desktop Navigation */}
        <NavbarLinks items={navigationConfig.navItems} />

        {/* Desktop CTA Button */}
        <NavbarCTA
          label={navigationConfig.cta.label}
          href={navigationConfig.cta.href}
        />

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <NavbarMobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        items={navigationConfig.navItems}
        cta={navigationConfig.cta}
      />
    </div>
  );
};

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

export interface NavbarComponentProps extends NavbarProps {
  showLogo?: boolean;
}

export const Navbar: React.FC<NavbarComponentProps> = ({ className, showLogo = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Pill Navbar (no logo) */}
      <div className={cn(
        "hidden md:flex items-center justify-between px-8 py-3",
        "bg-white/30 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full",
        "shadow-lg border border-gray-200/30 dark:border-white/10",
        "w-auto max-w-3xl relative z-10",
        className
      )}>
        {/* Desktop Navigation */}
        <NavbarLinks items={navigationConfig.navItems} className="mr-8" />

        {/* Desktop CTA Button */}
        <NavbarCTA
          label={navigationConfig.cta.label}
          href={navigationConfig.cta.href}
        />
      </div>

      {/* Mobile Navbar (with logo and hamburger) */}
      <div className={cn(
        "md:hidden flex items-center justify-between w-full px-6 py-4",
        "bg-white dark:bg-zinc-900/90 backdrop-blur-xl",
        "shadow-lg border-b border-gray-200/50 dark:border-white/10",
        className
      )}>
        {/* Mobile Logo */}
        {showLogo && (
          <NavbarLogo
            alt={navigationConfig.logo.alt}
            href={navigationConfig.logo.href}
          />
        )}

        {/* Mobile Menu Button */}
        <motion.button
          className="flex items-center ml-auto"
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
    </>
  );
};

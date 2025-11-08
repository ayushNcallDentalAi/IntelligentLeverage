/**
 * Header Component
 *
 * Top-level header that orchestrates logo and navbar positioning.
 * Following SOLID principles:
 * - Single Responsibility: Manages header layout and positioning
 * - Open/Closed: Extensible via props without modification
 * - Composition: Composes NavbarLogo and Navbar sub-components
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { NavbarLogo } from "./NavbarLogo";
import { Navbar } from "./Navbar";
import { navigationConfig } from "@/config/navigation";

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between w-full py-6 px-12">
        {/* Logo - Fixed Left Position */}
        <div className="absolute left-12">
          <NavbarLogo
            alt={navigationConfig.logo.alt}
            href={navigationConfig.logo.href}
          />
        </div>

        {/* Centered Navbar Pill */}
        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <Navbar showLogo={true} />
      </div>
    </div>
  );
};

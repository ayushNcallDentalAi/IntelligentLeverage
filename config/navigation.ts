/**
 * Navigation Configuration
 *
 * Centralized configuration for navigation items and links.
 * Following the Single Responsibility Principle (SRP) - this file only handles navigation configuration.
 */

export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  logo: {
    alt: "IntelligentLeverage.AI Logo",
    href: "/",
  },

  navItems: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
    { label: "Projects", href: "#projects" },
  ] as NavigationItem[],

  cta: {
    label: "Get Started",
    href: "#get-started",
  },
} as const;

export type NavigationConfig = typeof navigationConfig;

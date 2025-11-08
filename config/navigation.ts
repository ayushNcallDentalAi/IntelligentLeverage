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

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const navigationConfig = {
  logo: {
    alt: "IntelligentLeverage.AI Logo",
    href: "/",
  },

  navItems: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Founder", href: "#founder" },
  ] as NavigationItem[],

  cta: {
    label: "Get Started",
    href: "#get-started",
  },

  footer: {
    tagline: "Multiply your impact with AI-powered leverage",
    company: "THYNK Unlimited",
    year: 2025,

    navigation: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ] as NavigationItem[],

    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ] as NavigationItem[],

    social: [
      { name: "Twitter", href: "https://twitter.com/intelligentleverage", icon: "twitter" },
      { name: "LinkedIn", href: "https://linkedin.com/company/intelligentleverage", icon: "linkedin" },
      { name: "YouTube", href: "https://youtube.com/@intelligentleverage", icon: "youtube" },
      { name: "GitHub", href: "https://github.com/intelligentleverage", icon: "github" },
    ] as SocialLink[],
  },
} as const;

export type NavigationConfig = typeof navigationConfig;

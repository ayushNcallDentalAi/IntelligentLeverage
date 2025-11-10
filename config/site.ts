/**
 * Site Configuration
 *
 * Centralized configuration for site metadata, content, and settings.
 * Following the Single Responsibility Principle (SRP) - this file only handles site configuration.
 */

export const siteConfig = {
  name: "IntelligentLeverage.AI",
  description: "Multiply Your Future with Intelligent AI Leverage",
  url: "https://intelligentleverage.ai",

  hero: {
    announcement: {
      emoji: "✨",
      text: "New: AI-Powered Intelligence Platform",
    },
    headline: "Multiply Your Future with Intelligent AI Leverage",
    subheading: "Transform your business with cutting-edge AI solutions that scale with your ambitions",
    cta: {
      primary: {
        text: "Get Started",
        href: "https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL",
      },
      secondary: {
        text: "Learn More",
        href: "#about",
      },
    },
  },

  about: {
    title: "About Us",
    subtitle: "Empowering businesses with intelligent solutions",
    description: "We leverage cutting-edge AI technology to help businesses scale efficiently and achieve their goals faster.",
  },

  resources: {
    title: "Resources",
    subtitle: "Everything you need to succeed",
    description: "Access our comprehensive library of guides, tutorials, and documentation.",
  },

  product: {
    title: "Our Products",
    subtitle: "Built for modern businesses",
    description: "Discover our suite of AI-powered tools designed to accelerate your growth.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

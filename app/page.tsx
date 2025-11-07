/**
 * Home Page Component
 *
 * Clean, modular landing page following SOLID principles:
 * - Single Responsibility: Orchestrates sections, delegates rendering to components
 * - Open/Closed: Extensible via configuration without modification
 * - Dependency Inversion: Depends on siteConfig abstraction
 *
 * Architecture:
 * - Hero section with navbar, headline, and CTAs
 * - About section
 * - Resources section
 * - Product section
 */

import React from "react";
import { Hero } from "@/components/features/hero";
import { About } from "@/components/features/about";
import { Resources } from "@/components/features/resources";
import { Product } from "@/components/features/product";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero
        headline={siteConfig.hero.headline}
        subheading={siteConfig.hero.subheading}
        cta={siteConfig.hero.cta}
      />

      <About
        title={siteConfig.about.title}
        subtitle={siteConfig.about.subtitle}
        description={siteConfig.about.description}
      />

      <Resources
        title={siteConfig.resources.title}
        subtitle={siteConfig.resources.subtitle}
        description={siteConfig.resources.description}
      />

      <Product
        title={siteConfig.product.title}
        subtitle={siteConfig.product.subtitle}
        description={siteConfig.product.description}
      />
    </>
  );
}

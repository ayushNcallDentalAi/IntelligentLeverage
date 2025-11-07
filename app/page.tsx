/**
 * Home Page Component
 *
 * Complete IntelligentLeverage.AI landing page with all sections:
 * - Hero with navbar and CTAs
 * - Problem section (About)
 * - Solution section (Resources)
 * - How It Works with timeline
 * - Programs with pricing cards
 * - Founder bio and achievements
 * - Final CTA
 * - Footer with newsletter
 */

import React from "react";
import {
  Hero,
  Problem,
  Solution,
  HowItWorks,
  Programs,
  Founder,
  FinalCTA,
  Footer,
} from "@/components/features";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={siteConfig.hero.headline}
        subheading={siteConfig.hero.subheading}
        cta={siteConfig.hero.cta}
      />

      {/* Problem Section - AI Overwhelm Pain Points */}
      <Problem />

      {/* Solution Section - Four Pillars */}
      <Solution />

      {/* How It Works Timeline */}
      <HowItWorks />

      {/* Programs/Pricing */}
      <Programs />

      {/* Founder Section */}
      <Founder />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </>
  );
}

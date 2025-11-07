/**
 * Hero Section Component
 *
 * Main hero section that orchestrates all hero sub-components.
 * Following SOLID principles:
 * - Single Responsibility: Composes hero section from smaller components
 * - Open/Closed: Extensible via props, closed for modification
 * - Dependency Inversion: Depends on HeroProps interface abstraction
 */

"use client";

import React from "react";
import { AuroraBackground, Container } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { HeroHeadline } from "./HeroHeadline";
import { HeroSubheading } from "./HeroSubheading";
import { HeroCTA } from "./HeroCTA";
import { HeroTrustLine } from "./HeroTrustLine";
import type { HeroProps } from "@/lib/types";

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheading,
  cta,
}) => {
  return (
    <AuroraBackground>
      {/* Navbar positioned at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-24 pt-[50vh] md:pt-[50vh] lg:pt-[40vh]">
        <Container maxWidth="lg" centered className="flex flex-col text-center space-y-4 md:space-y-7 lg:space-y-4 gap-[8px]">
          {/* Main Headline - Split into 3 lines */}
          <HeroHeadline>
            <span className="whitespace-nowrap">Multiply Your Future</span>
            <br />
            with Intelligent
            <br />
            AI Leverage
          </HeroHeadline>

          {/* Subheading */}
          <HeroSubheading>{subheading}</HeroSubheading>

          {/* CTA Buttons */}
          {cta && <HeroCTA primary={cta.primary} secondary={cta.secondary} />}

          {/* Trust Line */}
          <HeroTrustLine />
        </Container>
      </div>
    </AuroraBackground>
  );
};

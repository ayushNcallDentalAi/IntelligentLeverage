/**
 * Solution Section Component
 * Displays the four pillars of the solution
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { SolutionPillar } from "./SolutionPillar";
import { staggerContainer } from "@/config/animations";
import { TrendingUp, Zap, ArrowUpRight, Users } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Make time, capital, and energy exponentially more valuable",
  },
  {
    icon: Zap,
    title: "Multiplication",
    description: "AI that compounds results, not just automates tasks",
  },
  {
    icon: ArrowUpRight,
    title: "Transformation",
    description: "Evolve from entrepreneur → system builder → market leader",
  },
  {
    icon: Users,
    title: "Community",
    description: "Intelligence compounds when shared in aligned ecosystems",
  },
];

export const Solution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Section Heading */}
          <div className="text-center space-y-4">
            <Heading level="h2" className="text-3xl md:text-4xl lg:text-5xl">
              Intelligent Leverage Transforms AI Chaos into Strategic Mastery
            </Heading>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((pillar) => (
              <SolutionPillar
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

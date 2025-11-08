/**
 * Problem Section Component
 * Displays the pain points that the product solves
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { ProblemCard } from "./ProblemCard";
import { staggerContainer } from "@/config/animations";
import { AlertCircle, Clock, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Drowning in AI Tools",
    description: "You know AI is the future, but which tools actually deliver ROI?",
  },
  {
    icon: Clock,
    title: "Working Harder, Not Smarter",
    description: "You're still trading time for money instead of building leverage systems",
  },
  {
    icon: TrendingDown,
    title: "Falling Behind",
    description: "While you hesitate, competitors are using AI to 10x their output",
  },
];

export const Problem: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
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
              AI Overwhelm is Costing You Millions in Unrealized Potential
            </Heading>
          </div>

          {/* Pain Point Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point) => (
              <ProblemCard
                key={point.title}
                icon={point.icon}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>

          {/* Transition Text */}
          <motion.div
            variants={staggerContainer}
            className="text-center pt-8"
          >
            <p className="text-lg md:text-xl text-foreground/80 font-medium">
              What if you could turn AI from overwhelming to inevitable?
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

/**
 * HowItWorks Section Component
 *
 * Displays the 5-step process with timeline visualization
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "./ProcessTimeline";
import { fadeInUp } from "@/config/animations";
import { processSteps } from "@/config/how-it-works";

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-[#fafafa]"
    >
      <Container maxWidth="2xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-24"
        >
          <Heading level="h2" className="mb-6">
            Multiply
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scale your AI leverage across your business. Achieve exponential growth while reclaiming your time and energy.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <ProcessTimeline steps={processSteps} />

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 lg:mt-24 text-center"
        >
          <Button size="lg" asChild>
            <a href="/apply">Start Your Application</a>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Limited to 50 new members per quarter
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

HowItWorks.displayName = "HowItWorks";

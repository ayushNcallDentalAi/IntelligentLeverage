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
      className="relative min-h-screen bg-[#fafafa] py-12 md:py-16 lg:py-20 flex items-center"
    >
      <Container maxWidth="2xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-6 lg:mb-8"
        >
          <Heading level="h2" className="mb-6">
            Your Path to AI Mastery
          </Heading>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
          className="mt-6 lg:mt-8 text-center"
        >
          <Button size="lg" asChild>
            <a href="https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL">Start Your Application</a>
          </Button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Limited to 50 new members per quarter
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

HowItWorks.displayName = "HowItWorks";

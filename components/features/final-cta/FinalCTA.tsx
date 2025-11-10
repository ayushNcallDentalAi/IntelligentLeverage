/**
 * FinalCTA Section Component
 *
 * Final call-to-action section with urgency messaging
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/config/animations";
import { ArrowRight, Calendar } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative py-24 lg:py-32 bg-[#fafafa] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <Container maxWidth="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Urgency Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge
              variant="default"
              className="bg-gradient-to-r from-gray-900 to-gray-600 text-white px-6 py-3 text-sm"
            >
              Limited to 50 new members per quarter
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <Heading level="h2" className="mb-6 max-w-4xl mx-auto">
              Ready to Multiply Your Potential?
            </Heading>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join the movement teaching humanity how to leverage intelligence—human and artificial—toward exponential evolution
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button size="lg" className="group" asChild>
              <a href="https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL" className="flex items-center gap-2">
                Apply to Join
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-500"
          >
            No credit card required • Free consultation available
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

FinalCTA.displayName = "FinalCTA";

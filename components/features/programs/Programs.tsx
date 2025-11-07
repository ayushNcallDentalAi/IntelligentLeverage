/**
 * Programs Section Component
 *
 * Displays the three program offerings with pricing cards
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ProgramCard } from "./ProgramCard";
import { programs } from "@/config/programs";
import { staggerContainer, fadeInUp } from "@/config/animations";

export const Programs: React.FC = () => {
  return (
    <section
      id="programs"
      className="relative py-24 lg:py-32 bg-white"
    >
      <Container maxWidth="2xl">
        {/* Program Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start"
        >
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              isPopular={program.popular}
            />
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            All programs include access to our community and resource library.
            <br />
            <span className="font-semibold text-gray-700">
              Not sure which program is right for you?
            </span>{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Schedule a consultation
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

Programs.displayName = "Programs";

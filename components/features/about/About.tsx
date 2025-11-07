/**
 * About Section Component
 *
 * About section following SOLID principles:
 * - Single Responsibility: Handles about section content only
 * - Open/Closed: Extensible via props without modification
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { sectionVariants } from "@/config/animations";
import type { SectionProps } from "@/lib/types";

export const About: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  children,
  className,
}) => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className={className}
    >
      <Container maxWidth="xl" centered className="py-20 md:py-32">
        <div className="text-center space-y-6">
          <Heading level="h2">{title}</Heading>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </motion.section>
  );
};

/**
 * ProcessTimeline Component
 *
 * Responsive grid display for the process steps
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProcessStep } from "./ProcessStep";
import { staggerContainer } from "@/config/animations";
import type { ProcessStep as ProcessStepType } from "@/config/how-it-works";
import { cn } from "@/lib/utils";

export interface ProcessTimelineProps {
  steps: ProcessStepType[];
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  className,
}) => {
  // Define which cards should span 2 columns on large screens
  // Using indices 0 and 3 for a balanced alternating pattern
  const largeCardIndices = [0, 3];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
    >
      {steps.map((stepData, index) => {
        const isLargeCard = largeCardIndices.includes(index);

        return (
          <ProcessStep
            key={stepData.id}
            step={stepData.step}
            title={stepData.title}
            description={stepData.description}
            icon={stepData.icon}
            className={cn(
              isLargeCard && "lg:col-span-2 lg:aspect-auto aspect-square"
            )}
          />
        );
      })}
    </motion.div>
  );
};

ProcessTimeline.displayName = "ProcessTimeline";

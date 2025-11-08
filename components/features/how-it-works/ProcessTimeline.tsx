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
  // Bento grid layout configuration for each step
  const gridSpans: Record<string, string> = {
    apply: "lg:col-span-2",
    onboard: "lg:col-span-2",
    learn: "lg:col-span-2",
    implement: "lg:col-span-4 lg:row-span-2",
    multiply: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4",
        className
      )}
    >
      {steps.map((stepData) => (
        <ProcessStep
          key={stepData.id}
          step={stepData.step}
          title={stepData.title}
          description={stepData.description}
          icon={stepData.icon}
          className={gridSpans[stepData.id]}
        />
      ))}
    </motion.div>
  );
};

ProcessTimeline.displayName = "ProcessTimeline";

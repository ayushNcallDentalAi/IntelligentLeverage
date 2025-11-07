/**
 * ProcessStep Component
 *
 * Individual step card in the "How It Works" process with modern grid layout
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeInUp } from "@/config/animations";
import { cn } from "@/lib/utils";

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon: Icon,
  className,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn("bg-muted rounded-md aspect-square p-6 flex justify-between flex-col border border-gray-200 shadow-md", className)}
    >
      {/* Icon at Top */}
      <Icon className="w-8 h-8 stroke-1" />

      {/* Content at Bottom */}
      <div className="flex flex-col">
        <h3 className="text-xl tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground max-w-xs text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

ProcessStep.displayName = "ProcessStep";

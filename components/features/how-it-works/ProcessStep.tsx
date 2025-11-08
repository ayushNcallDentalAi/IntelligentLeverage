/**
 * ProcessStep Component
 *
 * Individual step card in the "How It Works" process with bento card design
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Plus } from "lucide-react";
import { fadeInUp } from "@/config/animations";
import { cn } from "@/lib/utils";

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const CornerPlusIcons = () => (
  <>
    <div className="absolute -top-3 -left-3 w-6 h-6 bg-white dark:bg-black flex items-center justify-center">
      <Plus className="w-4 h-4 text-zinc-400 dark:text-zinc-700" strokeWidth={1} />
    </div>
    <div className="absolute -top-3 -right-3 w-6 h-6 bg-white dark:bg-black flex items-center justify-center">
      <Plus className="w-4 h-4 text-zinc-400 dark:text-zinc-700" strokeWidth={1} />
    </div>
    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white dark:bg-black flex items-center justify-center">
      <Plus className="w-4 h-4 text-zinc-400 dark:text-zinc-700" strokeWidth={1} />
    </div>
    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white dark:bg-black flex items-center justify-center">
      <Plus className="w-4 h-4 text-zinc-400 dark:text-zinc-700" strokeWidth={1} />
    </div>
  </>
);

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
      className={cn(
        "relative border-2 border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between",
        className
      )}
    >
      <CornerPlusIcons />

      {/* Icon at Top */}
      <Icon className="w-8 h-8 stroke-1 text-gray-900 dark:text-gray-100" />

      {/* Content at Bottom */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

ProcessStep.displayName = "ProcessStep";

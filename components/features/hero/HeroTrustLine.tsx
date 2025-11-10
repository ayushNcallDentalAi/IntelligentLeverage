/**
 * Hero Trust Line component
 * Displays social proof metrics in the hero section
 */

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/config/animations";

export interface HeroTrustLineProps {
  metrics?: string[];
}

export const HeroTrustLine: React.FC<HeroTrustLineProps> = ({
  metrics = [
    "Active Community",
    "Expert Network",
    "Collaborative Learning",
  ],
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground"
    >
      {metrics.map((metric, index) => (
        <React.Fragment key={metric}>
          <span className="font-medium text-foreground/80">{metric}</span>
          {index < metrics.length - 1 && (
            <span className="text-border" aria-hidden="true">
              |
            </span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

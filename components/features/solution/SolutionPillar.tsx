/**
 * Solution Pillar Component
 * Displays a single solution pillar card
 */

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/config/animations";
import type { LucideIcon } from "lucide-react";

export interface SolutionPillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SolutionPillar: React.FC<SolutionPillarProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
            <Icon className="w-7 h-7 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

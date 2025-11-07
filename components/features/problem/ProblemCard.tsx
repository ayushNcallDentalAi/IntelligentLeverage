/**
 * Problem Card Component
 * Displays a single pain point card
 */

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/config/animations";
import type { LucideIcon } from "lucide-react";

export interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10">
            <Icon className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

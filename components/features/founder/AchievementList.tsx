/**
 * AchievementList Component
 *
 * Displays founder achievements as badge cards
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, fadeInUp } from "@/config/animations";

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface AchievementListProps {
  achievements: Achievement[];
  className?: string;
}

export const AchievementList: React.FC<AchievementListProps> = ({
  achievements,
  className,
}) => {
  return (
    <motion.div
      variants={staggerContainer}
      className={className}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
          >
            <Card className="h-full border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300 bg-white shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0" role="img">
                    {achievement.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

AchievementList.displayName = "AchievementList";

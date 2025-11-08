/**
 * ProgramCard Component
 *
 * Pricing card for program offerings
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/config/animations";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { Program } from "@/config/programs";

export interface ProgramCardProps {
  program: Program;
  isPopular?: boolean;
  className?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  isPopular = false,
  className,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "relative",
        isPopular && "lg:scale-105 lg:z-10",
        className
      )}
    >
      <Card
        className={cn(
          "relative h-full flex flex-col border-2 bg-white transition-all duration-300",
          isPopular
            ? "border-blue-500 shadow-2xl shadow-blue-500/20"
            : "border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl"
        )}
      >
        {/* Header */}
        <CardHeader className="text-center pb-8">
          {program.badge && (
            <Badge variant="secondary" className="mx-auto mb-4">
              {program.badge}
            </Badge>
          )}
          <CardTitle className="text-3xl font-bold mb-2">
            {program.title}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            {program.tagline}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          {/* Description */}
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            {program.description}
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {program.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="pt-8">
          <Button
            size="lg"
            variant={isPopular ? "primary" : "secondary"}
            className="w-full"
            asChild
          >
            <a href={program.cta.href}>{program.cta.text}</a>
          </Button>
        </CardFooter>

        {/* Bottom Accent */}
        {isPopular && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
        )}
      </Card>
    </motion.div>
  );
};

ProgramCard.displayName = "ProgramCard";

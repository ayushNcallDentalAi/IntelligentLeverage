/**
 * FounderBio Component
 *
 * Displays founder information with avatar and bio text
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fadeInUp } from "@/config/animations";

export interface FounderBioProps {
  name: string;
  title: string;
  bio: string[];
  avatarUrl?: string;
  className?: string;
}

export const FounderBio: React.FC<FounderBioProps> = ({
  name,
  title,
  bio,
  avatarUrl,
  className,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
    >
      {/* Avatar */}
      <div className="mb-8">
        <Avatar className="w-32 h-32 border-4 border-blue-500 shadow-xl">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Name & Title */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-black mb-2">{name}</h3>
        <p className="text-lg text-blue-600 font-semibold">{title}</p>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4">
        {bio.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-600 text-base leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

FounderBio.displayName = "FounderBio";

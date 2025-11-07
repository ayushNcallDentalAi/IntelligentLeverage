/**
 * FooterSocial Component
 *
 * Social media links with icons
 */

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Github } from "lucide-react";
import type { SocialLink } from "@/config/navigation";

export interface FooterSocialProps {
  title: string;
  links: SocialLink[];
  className?: string;
}

const iconMap = {
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
};

export const FooterSocial: React.FC<FooterSocialProps> = ({
  title,
  links,
  className,
}) => {
  return (
    <div className={className}>
      <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">
        {title}
      </h4>
      <div className="flex gap-4">
        {links.map((link) => {
          const Icon = iconMap[link.icon as keyof typeof iconMap];
          return (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 group"
              aria-label={link.name}
            >
              <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

FooterSocial.displayName = "FooterSocial";

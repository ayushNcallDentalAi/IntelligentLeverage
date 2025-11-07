/**
 * FooterNav Component
 *
 * Navigation links column in footer
 */

import React from "react";
import Link from "next/link";
import type { NavigationItem } from "@/config/navigation";

export interface FooterNavProps {
  title: string;
  items: NavigationItem[];
  className?: string;
}

export const FooterNav: React.FC<FooterNavProps> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className={className}>
      <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterNav.displayName = "FooterNav";

/**
 * Footer Component
 *
 * Minimal footer with logo, email, about link, and copyright
 */

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container maxWidth="2xl">
        <div className="py-12 text-center space-y-6">
          {/* Logo - Black text */}
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold text-black">
                IntelligentLeverage.AI
              </h2>
            </Link>
          </div>

          {/* Email */}
          <div>
            <a
              href="mailto:info@intelligentleverage.ai"
              className="text-gray-600 hover:text-black transition-colors"
            >
              info@intelligentleverage.ai
            </a>
          </div>

          {/* About Link */}
          <div>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} THYNK Unlimited. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

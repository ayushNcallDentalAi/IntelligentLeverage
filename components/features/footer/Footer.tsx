/**
 * Footer Component
 *
 * Main footer with 4-column layout: Logo/tagline, Navigation, Social, Newsletter
 */

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { FooterNav } from "./FooterNav";
import { FooterSocial } from "./FooterSocial";
import { FooterNewsletter } from "./FooterNewsletter";
import { navigationConfig } from "@/config/navigation";

export const Footer: React.FC = () => {
  const { footer } = navigationConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container maxWidth="2xl">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Logo & Tagline */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  IntelligentLeverage.AI
                </div>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                {footer.tagline}
              </p>
            </div>

            {/* Column 2: Navigation */}
            <FooterNav
              title="Navigation"
              items={footer.navigation}
            />

            {/* Column 3: Social */}
            <FooterSocial
              title="Connect"
              links={footer.social}
            />

            {/* Column 4: Newsletter */}
            <FooterNewsletter
              title="Newsletter"
              description="Get the latest AI leverage strategies delivered to your inbox."
            />
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {currentYear} {footer.company}. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footer.legal.map((item, index) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {index < footer.legal.length - 1 && (
                    <span className="text-gray-300">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

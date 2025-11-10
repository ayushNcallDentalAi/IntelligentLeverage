/**
 * Footer component with links and social icons
 */

import Link from 'next/link';
import { SITE_NAME, FOOTER_LINKS } from '@/app/lib/constants';

export function Footer() {
  return (
    <footer className="relative mt-16 md:mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-lg font-semibold tracking-tight text-black transition-colors group-hover:text-blue-600">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Scale your AI leverage across your business
            </p>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-sm font-medium text-black mb-3">Ecosystem</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.ecosystem.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

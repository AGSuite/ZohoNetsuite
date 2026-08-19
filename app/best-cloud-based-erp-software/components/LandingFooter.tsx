"use client";

import React from "react";
import Image from "next/image";

export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative h-8 w-36">
              <Image
                src="/images/logos/agsuite_logo.webp"
                alt="AGSuite Technologies"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <span className="text-xs text-slate-400">
              © {new Date().getFullYear()} AGSuite Technologies Pvt. Ltd. All rights reserved.
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-xs font-medium">
            <a
              href="https://agsuitetech.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://agsuitetech.com/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Terms and Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

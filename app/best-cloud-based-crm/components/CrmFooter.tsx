"use client";

import React from "react";

export default function CrmFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Copyright */}
          <span className="text-xs text-slate-400">
            © {new Date().getFullYear()} AGSuite Technologies Pvt. Ltd. All rights reserved.
          </span>

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

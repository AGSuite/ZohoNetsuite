"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CrmFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Copyright & ISO Certification */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs text-slate-400">
              © {new Date().getFullYear()} AGSuite Technologies Pvt. Ltd. All rights reserved.
            </span>
            <div className="inline-block bg-white rounded-md p-1 shadow-sm">
              <Image
                src="/images/iso-27001-certified.png"
                alt="ISO 27001:2022 (ISMS) Certified"
                width={140}
                height={70}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-xs font-medium">
            <Link
              href="/privacy-policy"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/terms-conditions"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[120px]" />
        
        {/* Large faint '404' text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] sm:text-[30rem] font-black text-white/[0.02] select-none">
          404
        </div>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Ghost className="w-20 h-20 text-blue-500/50" />
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-blue-500/10 rounded-full blur-sm animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            The link you followed might be broken, or the page may have been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-blue-600/20 w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/zoho" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Zoho Solutions</Link>
            <Link href="/netsuite" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">NetSuite Solutions</Link>
            <Link href="/netsuite/insights" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Insights Center</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

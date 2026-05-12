"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Hammer, Clock, ArrowLeft, Mail, Globe } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#000814] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Icon Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 inline-block"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/10 group">
            <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-[spin_8s_linear_infinite]" />
            <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 absolute -bottom-1 -right-1 bg-[#000814] rounded-full p-1.5 border border-white/10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Service Status</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-medium text-white mb-6 leading-tight tracking-tight">
            Page Under{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Maintenance
            </span>
            {" "}or Not Found
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            The page you are looking for is either undergoing scheduled maintenance or could not be found. Our team is working to bring everything back online shortly.
          </p>

          {/* Details Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <Clock className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Estimated Time</h3>
              <p className="text-gray-500 text-sm">Usually 2-4 hours. Check back soon!</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <Globe className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Global Services</h3>
              <p className="text-gray-500 text-sm">All regions are being synchronized.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-[1.03] shadow-xl w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a 
              href="mailto:support@agsuitetech.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </motion.div>

        {/* Footer branding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 text-gray-600 text-sm"
        >
          &copy; {new Date().getFullYear()} AGSuite Technologies. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}

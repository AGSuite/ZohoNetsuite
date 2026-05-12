"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000814]">
      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
      
      <div className="relative flex flex-col items-center">
        {/* Animated Logo / Circle */}
        <div className="relative w-24 h-24">
          {/* Inner pulsating circle */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
          />
          
          {/* Rotating outer ring */}
          <svg className="w-full h-full animate-[spin_3s_linear_infinite]" viewBox="0 0 100 100">
            <circle
              className="text-white/10"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            <circle
              className="text-blue-500"
              strokeWidth="4"
              strokeDasharray="280"
              strokeDashoffset="210"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
          </svg>

          {/* Center Logo / Initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-2xl tracking-tighter">AG</span>
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-white/80 text-sm font-medium tracking-[0.2em] uppercase">
            Initializing
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

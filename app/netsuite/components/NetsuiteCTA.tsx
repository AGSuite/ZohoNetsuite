"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NetsuiteCTA = () => {
  return (
    <section className="relative w-full py-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/netsuiteimages/background/netsuiteCTA.webp" /* <-- Matches actual filename case */
          alt="NetSuite Calculator CTA"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay: dark left → medium → transparent right */}
      <div
        className="
          absolute inset-0 
          bg-linear-to-r 
          from-black/85 
          via-black/55 
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl">
          {/* Heading */}
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight drop-shadow-lg"
          >
            Calculate Your NetSuite ROI Instantly
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg text-gray-200 leading-relaxed"
          >
            Use our intelligent NetSuite Calculator to estimate pricing, ROI,  
            and implementation timelines tailored to your business.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="/netsuite-calculator"
              className="
                inline-flex items-center px-7 py-4 
                bg-white text-black font-semibold 
                rounded-xl shadow-lg hover:bg-gray-200 transition
              "
            >
              Open NetSuite Calculator →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetsuiteCTA;

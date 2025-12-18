"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ZohoCTA = () => {
  return (
    <section className="relative w-full py-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/zohoimages/background/ZohoCTA.webp" 
          alt="Zoho Savings CTA"
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
            Maximize Savings with Zoho One
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg text-gray-200 leading-relaxed"
          >
            Switch to the operating system for business. Calculate your potential savings by replacing multiple apps with the unified Zoho One suite.
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
              href="/zoho-calculator"
              className="
                inline-flex items-center px-7 py-4 
                bg-white text-black font-semibold 
                rounded-xl shadow-lg hover:bg-gray-200 transition
              "
            >
              Calculate Savings →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZohoCTA;

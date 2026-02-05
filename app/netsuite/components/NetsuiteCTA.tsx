"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NetSuitePricingCalculator from "./NetSuitePricingCalculator";
import { X } from "lucide-react";

const NetsuiteCTA = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
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
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight drop-shadow-lg"
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
              <button
                onClick={() => setIsCalculatorOpen(true)}
                suppressHydrationWarning={true}
                className="
                  inline-flex items-center px-7 py-4 
                  bg-white text-black font-semibold 
                  rounded-xl shadow-lg hover:bg-gray-200 transition
                "
              >
                Open NetSuite Calculator →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isCalculatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsCalculatorOpen(false)}
                className="absolute top-6 right-6 z-[60] p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-900 shadow-sm"
              >
                <X size={24} />
              </button>
              <div className="max-h-[90vh] overflow-y-auto">
                <NetSuitePricingCalculator />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NetsuiteCTA;


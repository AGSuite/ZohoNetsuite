"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LocalizationChallenges() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const challenges = [
    {
      title: "Compliance Complexity",
      description:
        "India Localization for NetSuite simplifies compliance by providing a customizable, cloud-based solution tailored to meet the specific GST and TDS requirements of Indian businesses.",
      image: "/images/netsuiteimages/india_tax_compliance_complexity.png",
    },
    {
      title: "Data Accuracy and Compliance Risk",
      description:
        "India Localization for NetSuite automates tax calculations and transaction identification, reducing the risk of inaccuracies and ensuring compliance with regulatory requirements.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
    },
    {
      title: "Scalability and Adaptability",
      description:
        "India Localization for NetSuite offers scalability and flexibility to accommodate the changing needs of businesses, allowing them to seamlessly adjust to new GST and TDS regulations and scale their operations without disruption.",
      image: "/images/netsuiteimages/scalability_and_adaptability.png",
    },
  ];

  return (
    <section
      id="challenges"
      ref={ref}
      className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24 font-['DM_Sans',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
            Global Hurdles
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Addressing Global Challenges
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            How our India Localization solution solves critical compliance hurdles for growing enterprises.
          </p>
        </motion.div>

        {/* 3 Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container with Title Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-white font-bold text-xl leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

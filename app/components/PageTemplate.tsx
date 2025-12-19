"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterFormSection from './home/FooterFormSection';

interface Feature {
  title: string;
  description: string;
}

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  ctaText: string;
  theme?: 'zoho' | 'netsuite';
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  ctaText,
  theme = 'zoho',
}) => {
  const brandColor = theme === 'zoho' ? 'red' : 'blue';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className={`inline-block text-xs font-bold tracking-[0.2em] text-${brandColor}-600 uppercase py-2 px-4 bg-${brandColor}-50 border border-${brandColor}-100 rounded-full mb-6`}>
              {subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-950 mb-8 leading-[1.05] tracking-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('zoho') || word.toLowerCase().includes('netsuite') ? `text-${brandColor}-600` : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-${brandColor}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                   <div className={`w-6 h-6 rounded bg-${brandColor}-500 opacity-20`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`bg-gray-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden`}
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-3xl -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-3xl -ml-32 -mb-32" />

               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                 {ctaText}
               </h2>
               
               <div className="flex flex-wrap justify-center gap-6">
                 <Link href="/free-consultation" className={`px-10 py-4 bg-${brandColor}-600 text-white font-bold rounded-2xl hover:bg-${brandColor}-700 transition shadow-xl shadow-${brandColor}-900/20`}>
                   Talk to an Expert
                 </Link>
                 <Link href="/contact-us" className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md">
                   View Portfolio
                 </Link>
               </div>
            </motion.div>
         </div>
      </section>

      <FooterFormSection />
    </div>
  );
};

export default PageTemplate;

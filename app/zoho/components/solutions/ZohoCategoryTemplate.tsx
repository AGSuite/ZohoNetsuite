"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2,
  LucideIcon
} from "lucide-react";

interface SubSolution {
  title: string;
  description: string;
  link: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
}

interface ZohoCategoryTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  heroImage: string;
  breadcrumb: { label: string; href: string }[];
  solutions: SubSolution[];
  stats?: { label: string; value: string | number; icon: LucideIcon }[];
}

export default function ZohoCategoryTemplate({
  title,
  subtitle,
  description,
  category,
  heroImage,
  breadcrumb,
  solutions,
  stats
}: ZohoCategoryTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#000814]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000814] via-[#000814]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 pb-12">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-2 text-sm font-medium mb-8"
          >
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <Link href={item.href} className="text-blue-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
                {i < breadcrumb.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              </React.Fragment>
            ))}
          </motion.nav>

          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6"
            >
              {category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100/80 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#solutions" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-xl flex items-center gap-2 group">
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/zoho/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition">
                Consult an Expert
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── STATS SECTION ─────────────── */}
      {stats && (
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="flex justify-center mb-4 text-blue-200 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────── SOLUTIONS GRID ─────────────── */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive {category} Portfolio
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-20">
            {solutions.map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex p-3 rounded-2xl bg-blue-100 text-blue-600 mb-2">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {solution.highlights.map((item, hi) => (
                      <li key={hi} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link 
                      href={solution.link} 
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      Learn More about {solution.title}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className={`relative h-80 md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA SECTION ─────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-[3rem] bg-[#000814] p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready to transform your <span className="text-blue-500 lowercase">{category}</span> operations?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Connect with our certified Zoho consultants for a personalized demonstration and implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link href="/zoho/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Talk to an Expert
                </Link>
                <Link href="/zoho/solutions" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition">
                  Explore All Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

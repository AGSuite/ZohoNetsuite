"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { ArrowRight, CheckCircle2, ExternalLink, LucideIcon } from 'lucide-react';
import FooterFormSection from './home/FooterFormSection';
import ServiceExploreSection from './ServiceExploreSection';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cardTitle?: string;
  cardText?: string;
  quote?: string;
}

interface IntroData {
  title: string;
  subtitle: string;
  description: string;
  description2?: string;
  image: string;
  linkText?: string;
  linkHref?: string;
}

interface StatData {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

interface SectionItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface GridItem {
  title: string;
  description: string;
  image: string;
  cardTitle?: string;
  cardText?: string;
  quote?: string;
  linkHref?: string;
}

interface AccordionItem {
  title: string;
  description: string;
  image: string;
}

interface CTAData {
  title: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

interface SolutionPageTemplateProps {
  theme: 'zoho' | 'netsuite';
  hero: HeroData;
  intro?: IntroData;
  stats?: StatData[];
  sections?: {
    title: string;
    subtitle: string;
    description: string;
    items: SectionItem[];
  };
  gridItems?: {
    title: string;
    subtitle?: string;
    description: string;
    items: GridItem[];
  };
  challenges?: {
    title: string;
    subtitle: string;
    items: AccordionItem[];
  };
  benefits?: {
    title: string;
    subtitle: string;
    items: AccordionItem[];
  };
  cta: CTAData;
  showExtraServices?: boolean;
}

export default function SolutionPageTemplate({
  theme,
  hero,
  intro,
  stats,
  sections,
  gridItems,
  challenges,
  benefits,
  cta,
  showExtraServices = true
}: SolutionPageTemplateProps) {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  
  const isNetSuite = theme === 'netsuite';
  const brandColor = isNetSuite ? 'blue' : 'red';
  const bgGradient = isNetSuite 
    ? 'from-[#000b21] via-[#000b21] to-[#0a0a0a]' 
    : 'from-[#fff5f5] via-[#fffaf2] to-white';

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className={`min-h-screen selection:bg-gray-900 selection:text-white bg-linear-to-b ${bgGradient}`}>
      {/* Premium Hero Section */}
      <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${isNetSuite ? 'text-white' : 'text-gray-900'}`}>
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${isNetSuite ? 'bg-blue-600/10' : 'bg-red-600/10'} rounded-full blur-[120px]`} />
          <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] ${isNetSuite ? 'bg-indigo-600/10' : 'bg-orange-600/10'} rounded-full blur-[120px]`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >
              <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 ${isNetSuite ? 'text-blue-400 bg-blue-900/40 border border-blue-800' : 'text-orange-400 bg-red-900/40 border border-red-800'}`}>
                {hero.subtitle}
              </span>
              <h1 className={`text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight ${isNetSuite ? 'text-white' : 'text-gray-950'}`}>
                {hero.title.split(' ').map((word, i) => {
                  const isHighlight = i === 1 || i === 2; // Simple heuristic for highlighting
                  return (
                    <span key={i} className={isHighlight ? (isNetSuite ? 'text-blue-500' : 'text-red-500') : ""}>
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>
              <p className={`text-xl leading-relaxed font-light ${isNetSuite ? 'text-gray-300' : 'text-gray-600'}`}>
                {hero.description}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={cta.primaryBtnHref} className={`px-8 py-4 ${isNetSuite ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/40' : 'bg-red-600 hover:bg-red-700 shadow-red-900/40'} text-white font-bold rounded-2xl transition shadow-xl`}>
                  {cta.primaryBtnText}
                </Link>
                {cta.secondaryBtnText && (
                  <Link href={cta.secondaryBtnHref || "#"} className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                    {cta.secondaryBtnText}
                  </Link>
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
            >
              <div className={`w-full h-full rounded-[3rem] bg-linear-to-br ${isNetSuite ? 'from-blue-600/20 to-indigo-900/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]' : 'from-red-600/20 to-orange-900/20 shadow-[0_0_50px_rgba(220,38,38,0.2)]'} overflow-hidden border border-white/10 relative group`}>
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-linear-to-t ${isNetSuite ? 'from-[#000b21]/60' : 'from-[#fff5f5]/60'} to-transparent`} />
              </div>
              
              {/* Top Right Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className={`absolute top-10 -right-6 lg:-right-12 ${isNetSuite ? 'bg-blue-500/30' : 'bg-red-500/30'} backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-[260px] z-30`}
              >
                <div className="flex items-center gap-3 mb-3">
                   <div className={`p-2.5 ${isNetSuite ? 'bg-blue-600' : 'bg-red-600'} rounded-xl`}>
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-wider">{hero.cardTitle || "Premium Solution"}</h4>
                </div>
                <p className={`text-xs ${isNetSuite ? 'text-blue-50/90' : 'text-red-50/90'} leading-relaxed font-medium`}>
                  {hero.cardText || "Tailored excellence for your business growth."}
                </p>
              </motion.div>

              {/* Bottom Center Quote Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-4xl shadow-2xl w-[92%] z-30 border border-white/20"
              >
                 <div className="flex flex-col items-center text-center">
                   <svg className={`w-8 h-8 ${isNetSuite ? 'text-blue-600' : 'text-red-600'} mb-1 opacity-40`} fill="currentColor" viewBox="0 0 24 24">
                     <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                   </svg>
                   <p className="text-gray-900 text-xs italic font-black uppercase tracking-tight leading-tight">
                     {hero.quote || "Innovation defines the bridge between today and tomorrow."}
                   </p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      {intro && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className={`${isNetSuite ? 'text-blue-600' : 'text-red-600'} font-bold uppercase tracking-wider text-sm`}>{intro.subtitle}</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    {intro.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {intro.description}
                </p>
                {intro.description2 && (
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {intro.description2}
                  </p>
                )}
                {intro.linkText && intro.linkHref && (
                  <div className="pt-4">
                    <Link href={intro.linkHref} className={`inline-flex items-center gap-2 ${isNetSuite ? 'text-blue-600' : 'text-red-600'} font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm`}>
                      {intro.linkText} <ArrowRight size={18} />
                    </Link>
                  </div>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <Image 
                  src={intro.image} 
                  alt={intro.title} 
                  fill 
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${isNetSuite ? 'bg-blue-600/10' : 'bg-red-600/10'} mix-blend-multiply`} />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {stats && (
        <section ref={statsRef} className={`py-16 ${isNetSuite ? 'bg-[#000b21] border-y border-blue-900/30' : 'bg-[#fff5f5] border-y border-red-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-12 h-12 ${isNetSuite ? 'bg-blue-600/20' : 'bg-red-600/20'} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`${isNetSuite ? 'text-blue-500' : 'text-red-500'}`} size={24} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-black ${isNetSuite ? 'text-white' : 'text-gray-900'} mb-2 flex justify-center items-center gap-1`}>
                    <FlipNumbers
                      height={32}
                      width={22}
                       color={isNetSuite ? "white" : "#111827"}
                      background="transparent"
                      play={statsInView}
                      numbers={stat.value.toString()}
                    />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className={`${isNetSuite ? 'text-gray-400' : 'text-gray-500'} text-sm uppercase tracking-widest font-bold`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services/Section Items Grid */}
      {sections && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className={`${isNetSuite ? 'text-blue-600' : 'text-red-600'} font-bold uppercase tracking-wider text-sm`}>{sections.subtitle}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900">{sections.title}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                {sections.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 ${isNetSuite ? 'bg-blue-50 group-hover:bg-blue-600' : 'bg-red-50 group-hover:bg-red-600'} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                    <item.icon className={`${isNetSuite ? 'text-blue-600' : 'text-red-600'} group-hover:text-white transition-colors`} size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                    {item.description}
                  </p>
                  <Link href={item.href} className={`font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm ${isNetSuite ? 'text-blue-600' : 'text-red-600'}`}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Grid Items Section */}
      {gridItems && (
        <section id="solutions" className={`py-24 border-y ${isNetSuite ? 'bg-[#000b21] border-blue-900/30' : 'bg-[#fff8f8] border-red-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              {gridItems.subtitle && (
                <h2 className={`${isNetSuite ? 'text-blue-600' : 'text-red-600'} font-bold uppercase tracking-wider text-sm`}>{gridItems.subtitle}</h2>
              )}
              <h3 className={`text-3xl md:text-5xl font-black ${isNetSuite ? 'text-white' : 'text-gray-900'} mb-6`}>{gridItems.title}</h3>
              <p className={`${isNetSuite ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto font-light`}>
                {gridItems.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {gridItems.items.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group flex flex-col"
                >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${isNetSuite ? 'from-blue-900/60' : 'from-red-900/60'} to-transparent`} />
                  </div>

                  <div className="space-y-4 flex-1">
                    {feature.cardTitle && (
                      <span className={`${isNetSuite ? 'text-blue-400' : 'text-red-400'} text-[10px] font-bold uppercase tracking-[0.2em]`}>{feature.cardTitle}</span>
                    )}
                    <h3 className={`text-2xl font-bold ${isNetSuite ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                      {feature.title}
                    </h3>
                    <div className={`w-12 h-1 ${isNetSuite ? 'bg-blue-500' : 'bg-red-500'} rounded-full`} />
                    {feature.quote && (
                        <p className={`${isNetSuite ? 'text-gray-400' : 'text-gray-600'} leading-relaxed font-light text-sm italic`}>
                        "{feature.quote}"
                      </p>
                    )}
                    <p className={`${isNetSuite ? 'text-gray-300' : 'text-gray-600'} leading-relaxed font-light`}>
                      {feature.description}
                    </p>
                  </div>

                  {feature.linkHref && (
                    <Link href={feature.linkHref} className={`mt-8 inline-flex items-center gap-2 ${isNetSuite ? 'text-blue-400 hover:text-blue-300' : 'text-red-400 hover:text-red-300'} font-bold transition group/link`}>
                      Learn more
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges Section */}
      {challenges && (
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{challenges.subtitle}</span>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">{challenges.title}</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="order-2 lg:order-1 space-y-4">
                {challenges.items.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveChallenge(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      activeChallenge === index ? 'bg-gray-50 border-gray-200' : 'bg-transparent border-transparent hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full transition-colors ${activeChallenge === index ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-gray-900' : 'text-gray-500'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <AnimatePresence>
                      {activeChallenge === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="order-1 lg:order-2 relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 h-full min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChallenge}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={challenges.items[activeChallenge].image}
                      alt={challenges.items[activeChallenge].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className={`bg-${brandColor}-50 text-${brandColor}-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest`}>{benefits.subtitle}</span>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">{benefits.title}</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBenefit}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={benefits.items[activeBenefit].image}
                      alt={benefits.items[activeBenefit].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                {benefits.items.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      activeBenefit === index ? 'bg-white border-blue-200 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${activeBenefit === index ? (isNetSuite ? 'bg-blue-600' : 'bg-red-600') + ' text-white' : 'bg-gray-100 text-gray-400'}`}>
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className={`text-xl font-bold ${activeBenefit === index ? 'text-gray-900' : 'text-gray-500'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <AnimatePresence>
                      {activeBenefit === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Extra Services Showcase */}
      {showExtraServices && (
        <ServiceExploreSection theme={theme} />
      )}

      {/* Modern CTA */}
      <section className={`py-24 overflow-hidden relative ${isNetSuite ? 'bg-[#000b21]' : 'bg-[#fff5f5]'}`}>
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${isNetSuite ? 'bg-blue-600/10 border-blue-500/20' : 'bg-white border-red-100'} border rounded-[3rem] p-12 lg:p-24 relative overflow-hidden`}
            >
               <div className={`absolute top-0 right-0 w-64 h-64 ${isNetSuite ? 'bg-blue-500/10' : 'bg-red-500/10'} blur-3xl -mr-32 -mt-32`} />
               <div className={`absolute bottom-0 left-0 w-64 h-64 ${isNetSuite ? 'bg-indigo-500/10' : 'bg-orange-600/10'} blur-3xl -ml-32 -mb-32`} />

               <h2 className={`text-3xl md:text-5xl font-bold ${isNetSuite ? 'text-white' : 'text-gray-900'} mb-8 leading-tight`}>
                 {cta.title}
               </h2>
               
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <Link href={cta.primaryBtnHref} className={`px-10 py-4 ${isNetSuite ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'} text-white font-bold rounded-2xl transition shadow-xl`}>
                   {cta.primaryBtnText}
                 </Link>
                 {cta.secondaryBtnText && (
                   <Link href={cta.secondaryBtnHref || "#"} className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/10">
                     {cta.secondaryBtnText}
                   </Link>
                 )}
               </div>
            </motion.div>
         </div>
      </section>

      <FooterFormSection />
    </div>
  );
}

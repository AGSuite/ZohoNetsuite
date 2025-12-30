"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FooterFormSection from './home/FooterFormSection';

interface Feature {
  title: string;
  description: string;
  image?: string;
  quote?: string;
  cardTitle?: string;
  cardText?: string;
}

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  ctaText: string;
  theme?: 'zoho' | 'netsuite';
  isSolutionPage?: boolean;
  heroImage?: string;
  heroQuote?: string;
  heroCardTitle?: string;
  heroCardText?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  ctaText,
  theme = 'zoho',
  isSolutionPage = false,
  heroImage,
  heroQuote,
  heroCardTitle,
  heroCardText,
}) => {
  const brandColor = theme === 'zoho' ? 'red' : 'blue';
  const isNetSuite = theme === 'netsuite';

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
    <div className={`min-h-screen selection:bg-gray-900 selection:text-white ${
      isNetSuite 
        ? 'bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]' 
        : theme === 'zoho' && isSolutionPage
          ? 'bg-linear-to-b from-[#1a0000] via-[#2a0505] to-[#0a0a0a]'
          : 'bg-white'
    }`}>
      {/* Premium Hero Section */}
      <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? 'text-white' : 'text-gray-900'}`}>
        <div className="absolute inset-0 z-0">
          {isNetSuite ? (
            <>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </>
          ) : theme === 'zoho' && isSolutionPage ? (
            <>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
            </>
          ) : (
            <>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse delay-700" />
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${isSolutionPage ? 'lg:items-start' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex-1 ${isSolutionPage ? 'max-w-2xl' : 'max-w-4xl'}`}
            >
              <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 ${
                isNetSuite 
                  ? 'text-blue-400 bg-blue-900/40 border border-blue-800' 
                  : theme === 'zoho' && isSolutionPage
                    ? 'text-orange-400 bg-red-900/40 border border-red-800'
                    : `text-${brandColor}-600 bg-${brandColor}-50 border border-${brandColor}-100`
              }`}>
                {subtitle}
              </span>
              <h1 className={`text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? 'text-white' : 'text-gray-950'}`}>
                {title.split(' ').map((word, i) => {
                  const isBrand = word.toLowerCase().includes('zoho') || word.toLowerCase().includes('netsuite');
                  return (
                    <span key={i} className={isBrand ? (isNetSuite ? 'text-blue-500' : theme === 'zoho' && isSolutionPage ? 'text-red-500' : `text-${brandColor}-600`) : ""}>
                      {word.replace(/netsuite/gi, 'NetSuite').replace(/zoho/gi, 'Zoho')}{" "}
                    </span>
                  );
                })}
              </h1>
              <p className={`text-xl leading-relaxed font-light ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
              </p>
              
              {isSolutionPage && (
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href={isNetSuite ? "/netsuite/contact" : "/zoho/contact"} className={`px-8 py-4 ${isNetSuite ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/40' : 'bg-red-600 hover:bg-red-700 shadow-red-900/40'} text-white font-bold rounded-2xl transition shadow-xl`}>
                    Get Started Now
                  </Link>
                  <Link href="#solutions" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                    View Features
                  </Link>
                </div>
              )}
            </motion.div>

            {isSolutionPage && heroImage && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
               >
                  <div className={`w-full h-full rounded-[3rem] ${isNetSuite ? 'bg-linear-to-br from-blue-600/20 to-indigo-900/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]' : 'bg-linear-to-br from-red-600/20 to-orange-900/20 shadow-[0_0_50px_rgba(220,38,38,0.2)]'} overflow-hidden border border-white/10 relative group`}>
                    <Image
                      src={heroImage}
                      alt={title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${isNetSuite ? 'from-[#000b21]/60' : 'from-[#1a0000]/60'} to-transparent`} />
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
                       <h4 className="text-sm font-bold text-white uppercase tracking-wider">{heroCardTitle || "Enterprise Scale"}</h4>
                    </div>
                    <p className={`text-xs ${isNetSuite ? 'text-blue-50/90' : 'text-red-50/90'} leading-relaxed font-medium`}>
                      {heroCardText || "Built for scaling businesses and global operations."}
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
                         {heroQuote || (isNetSuite ? "The ultimate cloud management platform." : "The operating system for business.")}
                       </p>
                     </div>
                  </motion.div>
               </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid / Solution Sections */}
      <section id="solutions" className={`py-24 border-y ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? (isNetSuite ? 'bg-[#000b21] border-blue-900/30' : 'bg-[#1a0000] border-red-900/30') : 'bg-gray-50/50 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {isSolutionPage && (isNetSuite || theme === 'zoho') ? (
            <div className="space-y-32">
              {features.map((feature, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Side: Image with floating cards */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full aspect-square max-w-[500px]"
                  >
                    {/* Main Image Placeholder */}
                    <div className={`w-full h-full rounded-[2.5rem] ${isNetSuite ? 'bg-linear-to-br from-blue-900/50 to-gray-800/50' : 'bg-linear-to-br from-red-900/50 to-orange-800/50'} overflow-hidden border border-white/10 shadow-2xl relative`}>
                      {feature.image ? (
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-blue-400/30">
                          <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Top Right Floating Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`absolute top-8 -right-8 ${isNetSuite ? 'bg-blue-600/40' : 'bg-red-600/40'} backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-[240px] z-30`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                         <div className={`p-2 ${isNetSuite ? 'bg-blue-500' : 'bg-red-500'} rounded-lg`}>
                           <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                         </div>
                         <h4 className="text-sm font-bold text-white uppercase tracking-wider">{feature.cardTitle || "Smart Feature"}</h4>
                      </div>
                      <p className={`text-xs ${isNetSuite ? 'text-blue-100/80' : 'text-red-100/80'} leading-relaxed font-medium`}>
                        {feature.cardText || "Optimized solution designed for enterprise scale."}
                      </p>
                    </motion.div>

                    {/* Bottom Center Quote Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/95 p-6 rounded-3xl shadow-2xl w-[90%] md:w-[80%] z-30 text-center border border-gray-100"
                    >
                       <svg className={`w-6 h-6 ${isNetSuite ? 'text-blue-600' : 'text-red-600'} mx-auto mb-2 opacity-30`} fill="currentColor" viewBox="0 0 24 24">
                         <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                       </svg>
                       <p className="text-gray-950 text-[10px] font-black uppercase tracking-widest leading-none mb-1 opacity-40">Insight</p>
                       <p className="text-gray-900 text-xs italic font-bold">"{feature.quote || "Transformation through technology."}"</p>
                    </motion.div>
                  </motion.div>

                  {/* Right Side: Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-8"
                  >
                    <div className="space-y-4">
                      <h3 className={`text-3xl md:text-5xl font-bold ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                        {feature.title}
                      </h3>
                      <div className={`w-20 h-1 ${isNetSuite ? 'bg-blue-500' : 'bg-red-500'} rounded-full`} />
                    </div>
                    <p className={`text-lg ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? 'text-gray-400' : 'text-gray-600'} leading-relaxed font-light max-w-xl`}>
                      {feature.description}
                    </p>
                    <Link href="/free-consultation" className={`inline-flex items-center gap-2 ${isNetSuite ? 'text-blue-400 hover:text-blue-300' : 'text-red-400 hover:text-red-300'} font-bold transition group`}>
                      Learn more about {feature.title.split(' ')[0]}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
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
                  className={`group relative p-8 rounded-3xl border transition-all duration-300 ${
                    isNetSuite 
                      ? 'bg-blue-900/20 border-blue-900/50 hover:bg-blue-900/30 hover:shadow-2xl hover:shadow-blue-900/20' 
                      : 'bg-white border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    isNetSuite ? 'bg-blue-500/20' : `bg-${brandColor}-50`
                  }`}>
                    <div className={`w-6 h-6 rounded opacity-40 ${isNetSuite ? 'bg-blue-400' : `bg-${brandColor}-500`}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 tracking-tight ${isNetSuite ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`leading-relaxed text-sm ${isNetSuite ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Modern CTA */}
      <section className={`py-24 overflow-hidden relative ${isNetSuite || (theme === 'zoho' && isSolutionPage) ? (isNetSuite ? 'bg-[#000b21]' : 'bg-[#1a0000]') : ''}`}>
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${isNetSuite || (theme === 'zoho' && isSolutionPage) ? (isNetSuite ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-red-600/10 border border-red-500/20') : 'bg-gray-900'} rounded-[3rem] p-12 lg:p-24 relative overflow-hidden`}
            >
               <div className={`absolute top-0 right-0 w-64 h-64 ${isNetSuite ? 'bg-blue-500/10' : 'bg-red-600/10'} blur-3xl -mr-32 -mt-32`} />
               <div className={`absolute bottom-0 left-0 w-64 h-64 ${isNetSuite ? 'bg-indigo-500/10' : 'bg-orange-600/10'} blur-3xl -ml-32 -mb-32`} />

               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                 {ctaText}
               </h2>
               
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <Link href={isNetSuite ? "/netsuite/contact" : "/zoho/contact"} className={`px-10 py-4 ${isNetSuite ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'} text-white font-bold rounded-2xl transition shadow-xl`}>
                   Talk to an Expert
                 </Link>
                 <Link href={isNetSuite ? "/netsuite/solutions" : "/zoho/solutions"} className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/10">
                   Explore Solutions
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

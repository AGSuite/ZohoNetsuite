"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import { TrendingUp, ShieldCheck, FileCheck, Zap } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import dynamic from "next/dynamic";

const NSCircularDesign = dynamic(() => import("./NSCircularDesign").then(mod => mod.NSCircularDesign), {
  ssr: false,
  loading: () => <div className="w-[350px] h-[350px] xl:w-[550px] xl:h-[550px] rounded-full bg-blue-50/50 animate-pulse mx-auto" />
});

interface NSHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const NSHero: React.FC<NSHeroProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [skipFirstAnimation, setSkipFirstAnimation] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const media = window.matchMedia("(max-width: 1023px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    // After mount, we allow animations for subsequent slides
    const timer = setTimeout(() => setSkipFirstAnimation(false), 1000);
    return () => {
      clearTimeout(timer);
      media.removeEventListener('change', listener);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden bg-white font-dm-sans`}>
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder - Simple and Fast */
            <div className="relative h-full w-full flex items-center">
              <div className="absolute inset-0 top-0 -z-10">
                <Image
                  src="/images/Background/herobluebg.webp"
                  alt="NetSuite Background"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="100vw"
                  quality={75}
                />
              </div>

              <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[52%_46%] gap-10 items-center -translate-y-4 lg:-translate-y-6">
                <div className="max-w-2xl text-left lg:-ml-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight bg-linear-to-r from-blue-950 via-blue-800 to-blue-900 bg-clip-text text-transparent pb-1">
                    Built for Your Industry. Powered by NetSuite.
                  </h1>

                  <p className="mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-700">
                    Empower your business with industry-specific NetSuite solutions designed to streamline operations, improve visibility, and accelerate growth across Software & Technology, Financial Services, AdTech, EdTech, MarTech, IT/ITES, Manufacturing, Retail, and more.
                  </p>

                  <div className="mt-5 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg" />
                    <Link
                      href="/netsuite/contact"
                      className="bg-gray-950 text-white relative px-10 py-4 rounded-xl font-medium shadow-2xl inline-block"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center lg:justify-end">
                   <div className="w-full relative">
                      <Image
                        src="/images/Dashboard/netsuitedash2.webp"
                        alt="NetSuite Dashboard"
                        width={1800}
                        height={1600}
                        className="w-[140%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)] -ml-[25%]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                   </div>
                </div>
              </div>
            </div>
          ) : (
            <Swiper
              className="hero-swiper w-full h-full"
              modules={[Pagination, Autoplay]}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              speed={700}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              watchSlidesProgress={true}
              touchStartPreventDefault={false}
            >
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 0}
                  bg="/images/Background/herobluebg.webp"
                  title="Built for Your Industry. Powered by NetSuite."
                  desc="Empower your business with industry-specific NetSuite solutions designed to streamline operations, improve visibility, and accelerate growth across Software & Technology, Financial Services, AdTech, EdTech, MarTech, IT/ITES, Manufacturing, Retail, and more."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  image="/images/Dashboard/netsuitedash2.webp"
                  priority={true}
                  multiColorShadow={true}
                  skipEntranceAnimation={skipFirstAnimation}
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 1}
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-slate-50">
                      <div className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-300/50 via-purple-300/40 to-transparent blur-[140px]" />
                      <div className="absolute -bottom-[15%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-emerald-300/50 via-cyan-300/40 to-transparent blur-[140px]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-100/60 blur-[100px]" />

                      {!isMobile && (
                        <>
                          <motion.div
                            animate={{
                              y: [0, -30, 0],
                              opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[30%] right-[30%] w-3 h-3 rounded-full bg-blue-500 blur-[2px]"
                          />
                          <motion.div
                            animate={{
                              y: [0, 30, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[20%] left-[40%] w-4 h-4 rounded-full bg-emerald-500 blur-[2px]"
                          />
                        </>
                      )}
                    </div>
                  }
                  title="Empowering CFOs with Real-Time Insights, Control, and Scalable Growth"
                  desc="Give your finance leaders a single, unified platform to monitor cash flow, close books faster, and drive confident decision-making — all while scaling seamlessly as your business evolves."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={<NSCircularDesign />}
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 2}
                  bg="/images/Background/herobg5.png"
                  title="Scale Your Tech Empire: NetSuite for IT & ITES"
                  desc="Ditch the fragmented tools and billing bottlenecks. Unify your project accounting, global financials, and resource management into one high-octane engine built for rapid growth."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full flex justify-center lg:justify-end">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[130%] -z-10 blur-[130px] opacity-30 select-none pointer-events-none">
                        <div className="absolute inset-0 animate-pulse">
                          <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-pink-300 rounded-full blur-[60px]" />
                          <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-orange-400 rounded-full blur-[60px]" />
                          <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-red-500 rounded-full blur-[60px]" />
                          <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-blue-400 rounded-full blur-[60px]" />
                        </div>
                      </div>
                      <Image
                        src="/images/lap/netsuitelap2.png"
                        alt="NetSuite for IT and ITES"
                        width={100}
                        height={1600}
                        className="w-[120%] lg:w-[130%] xl:w-[135%] max-w-none object-contain drop-shadow-[0_40px_80px_rgba(37,99,235,0.45)] -mr-[10%] transition-transform duration-700 hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 3}
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-slate-50">
                      <div className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50/10 via-purple-50/10 to-transparent blur-[140px]" />
                      <div className="absolute -bottom-[15%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-emerald-50/10 via-cyan-50/10 to-transparent blur-[140px]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-50/10 blur-[100px]" />

                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 300C200 200 400 400 700 300C1000 200 1200 400 1500 300" stroke="url(#wave-grad-2)" strokeWidth="2.5" strokeDasharray="2 10" />
                        <path d="M-100 450C200 350 400 550 700 450C1000 350 1200 550 1500 450" stroke="url(#wave-grad-1)" strokeWidth="2" strokeDasharray="1 20" />
                        <path d="M-100 600C200 500 400 700 700 600C1000 500 1200 700 1500 600" stroke="url(#wave-grad-2)" strokeWidth="3" strokeDasharray="4 20" />
                        <path d="M-100 750C200 650 400 850 700 750C1000 650 1200 850 1500 750" stroke="url(#wave-grad-1)" strokeWidth="2.5" />

                        <defs>
                          <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2563EB" stopOpacity="0.2" />
                            <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.7" />
                            <stop offset="1" stopColor="#7C3AED" stopOpacity="0.2" />
                          </linearGradient>
                          <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#059669" stopOpacity="0.2" />
                            <stop offset="0.5" stopColor="#0891B2" stopOpacity="0.6" />
                            <stop offset="1" stopColor="#059669" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {!isMobile && (
                        <>
                          <motion.div
                            animate={{
                              y: [0, -30, 0],
                              opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-blue-500 blur-[2px]"
                          />
                          <motion.div
                            animate={{
                              y: [0, 30, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-purple-500 blur-[2px]"
                          />
                        </>
                      )}
                    </div>
                  }
                  title="Precision at Every Decimal: NetSuite for Financial Services"
                  desc="Transform risk into opportunity. Automate complex global consolidations, ensure bulletproof regulatory compliance, and command your portfolio with a single, real-time source of truth."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <Image
                        src="/images/lap/lap10_11zon.webp"
                        alt="NetSuite Dashboard"
                        width={1900}
                        height={1900}
                        className="w-[100%] lg:w-[105%] xl:w-[110%] max-w-none object-contain filter drop-shadow-[0_20px_30px_rgba(219,39,119,0.4)] drop-shadow-[0_30px_60px_rgba(147,51,234,0.3)] transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 60vw"
                      />

                      <motion.div
                        initial={{ opacity: 0, x: -30, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="absolute -top-4 -left-6 bg-white p-2.5 rounded-xl shadow-xl z-40 flex items-center gap-3 border border-gray-100 min-w-[220px] lg:min-w-[240px]"
                      >
                        <div className="flex -space-x-3 shrink-0">
                          <div className="w-7.5 h-7.5 lg:w-8 lg:h-8 rounded-lg bg-[#005a5a] flex items-center justify-center p-1.5 shadow-lg ring-2 ring-white z-20">
                            <Image
                              src="/images/logos/oracle%20netsuite%20logo.png"
                              alt="Oracle NetSuite"
                              width={24}
                              height={24}
                              className="object-contain brightness-0 invert"
                              style={{ width: 'auto', height: 'auto' }}
                            />
                          </div>
                          <div className="w-7.5 h-7.5 lg:w-8 lg:h-8 rounded-lg bg-[#007b7b] flex items-center justify-center text-white shadow-lg ring-2 ring-white z-10">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="w-7.5 h-7.5 lg:w-8 lg:h-8 rounded-lg bg-[#95C93D] flex items-center justify-center text-white shadow-lg ring-2 ring-white">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-[11px] lg:text-[12px] font-bold text-gray-800 leading-tight">Operations, Financials, Analytics</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] bg-white p-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] z-40 flex items-center gap-3 border border-gray-50"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#f4f9eb] flex items-center justify-center shadow-inner">
                          <svg className="w-5 h-5 text-[#95C93D]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 11L14.017 8C14.017 6.89543 14.9124 6 16.017 6H19.017C20.1216 6 21.017 6.89543 21.017 8V11C21.017 12.1046 20.1216 13 19.017 13H16.017C14.9124 13 14.017 12.1046 14.017 11ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01699 16H8.01699C9.12156 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12156 23 8.01699 23H5.01699C3.91243 23 3.017 22.1046 3.017 21ZM3.017 11L3.017 8C3.017 6.89543 3.91243 6 5.01699 6H8.01699C9.12156 6 10.017 6.89543 10.017 8V11C10.017 12.1046 9.12156 13 8.01699 13H5.01699C3.91243 13 3.017 12.1046 3.017 11Z" />
                          </svg>
                        </div>
                        <p className="text-[13px] lg:text-[14px] font-medium text-[#1e3a5f] leading-snug">
                          &quot;NetSuite, the single source of truth that can make your operations seamless&quot;
                        </p>
                      </motion.div>
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 4}
                  gridClass="lg:grid-cols-[45%_55%]"
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-white">
                      {/* Dynamic Background: Data Constellation */}
                      {!isMobile && (
                        <div className="absolute inset-0">
                          {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ 
                                x: [Math.random() * 1000, Math.random() * 1000],
                                y: [Math.random() * 800, Math.random() * 800],
                                opacity: [0, 0.3, 0],
                                scale: [0.5, 0.8, 0.5]
                              }}
                              transition={{ duration: 12 + i, repeat: Infinity, ease: "linear" }}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
                            />
                          ))}
                        </div>
                      )}

                      {/* Moving Scanning Beams */}
                      {!isMobile && (
                        <motion.div 
                          animate={{ x: [-200, 1600] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-y-0 w-32 bg-linear-to-r from-transparent via-blue-600/5 to-transparent skew-x-12 pointer-events-none"
                        />
                      )}

                      {/* Strategic Graph Line Background */}
                      {!isMobile && (
                        <svg className="absolute inset-x-0 bottom-0 w-full h-[300px] opacity-[0.1]" viewBox="0 0 1440 300">
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                            d="M0 250C200 230 400 270 600 200C800 130 1000 150 1200 70C1400 0 1600 20 1800 -20" 
                            stroke="#2563eb" strokeWidth="2" fill="none" 
                          />
                        </svg>
                      )}
                    </div>
                  }
                  title="The CFO Strategic Command Center"
                  desc="Drive corporate strategy with unparalleled financial intelligence. NetSuite provides the single source of truth needed to navigate complex markets and scale with confidence."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      {/* Medium Balanced Scale (155%) */}
                      <div className="relative z-10 w-[110%] lg:w-[115%] xl:w-[120%] max-w-none">
                        <Image
                          src="/images/lap/group1.webp"
                          alt="Global Command Dashboards"
                          width={1900}
                          height={1400}
                          className="w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(37,99,235,0.25)] -mr-[10%] transition-transform duration-700 hover:scale-[1.01]" 
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        
                        {/* Interactive Data Nodes */}
                        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-[35%] left-[25%] w-6 h-6 bg-blue-400 rounded-full blur-md" />
                        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }} className="absolute bottom-[35%] right-[25%] w-6 h-6 bg-indigo-500 rounded-full blur-md" />
                      </div>

                      {/* Top Corner Card (Commerce Style) */}
                      <motion.div
                        initial={{ opacity: 0, x: -30, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="absolute -top-4 -left-6 bg-white p-2.5 rounded-xl shadow-xl z-40 flex items-center gap-3 border border-gray-100 min-w-[220px] lg:min-w-[240px]"
                      >
                        <div className="w-7.5 h-7.5 lg:w-8 lg:h-8 rounded-lg bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shrink-0">
                          <TrendingUp className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
                        </div>
                        <span className="text-[11px] lg:text-[12px] font-bold text-gray-800 leading-tight">Strategic Intelligence Platform</span>
                      </motion.div>

                      {/* Bottom-Center Power Card (Commerce Style) */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] bg-white p-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] z-40 flex items-center gap-3 border border-gray-50"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shadow-inner shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 11L14.017 8C14.017 6.89543 14.9124 6 16.017 6H19.017C20.1216 6 21.017 6.89543 21.017 8V11C21.017 12.1046 20.1216 13 19.017 13H16.017C14.9124 13 14.017 12.1046 14.017 11ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01699 16H8.01699C9.12156 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12156 23 8.01699 23H5.01699C3.91243 23 3.017 22.1046 3.017 21ZM3.017 11L3.017 8C3.017 6.89543 3.91243 6 5.01699 6H8.01699C9.12156 6 10.017 6.89543 10.017 8V11C10.017 12.1046 9.12156 13 8.01699 13H5.01699C3.91243 13 3.017 12.1046 3.017 11Z" />
                          </svg>
                        </div>
                        <p className="text-[13px] lg:text-[14px] font-medium text-[#1e3a5f] leading-snug">
                          &quot;NetSuite is the central source of strategic truth, empowering modern CFOs to lead with precision.&quot;
                        </p>
                      </motion.div>
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 5}
                  gridClass="lg:grid-cols-[45%_55%]"
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-white">
                      <div className="absolute inset-0 opacity-[0.05]" 
                        style={{ backgroundImage: 'linear-gradient(#2563eb 1.5px, transparent 1.5px), linear-gradient(90deg, #2563eb 1.5px, transparent 1.5px)', backgroundSize: '64px 64px' }} />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-tr from-blue-50/50 via-transparent to-indigo-50/50" />
                    </div>
                  }
                  title="Automated Precision in Every Transaction"
                  desc="Eliminate accounting bottlenecks and ensure 100% compliance. NetSuite's automated financial suite handles the complexity so you can focus on performance."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full max-w-[520px] mx-auto flex items-center justify-center p-4">
                      <div className="relative w-full">
                        <Image
                          src="/images/lap/netsuite_person_using_automated_dashboard.png"
                          alt="NetSuite Automated Financial Transactions Dashboard"
                          width={1900}
                          height={1900}
                          className="w-full h-auto rounded-2xl object-contain filter drop-shadow-[0_20px_35px_rgba(79,70,229,0.25)] transition-transform duration-700 hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        
                        {/* Top Corner Card (Commerce Style) */}
                        <motion.div
                          initial={{ opacity: 0, x: -30, y: -20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.8 }}
                          className="absolute -top-4 -left-6 bg-white p-3 rounded-xl shadow-2xl z-40 flex items-center gap-3 border border-gray-100 min-w-[260px]"
                        >
                          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-lg shrink-0">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-[14px] font-bold text-gray-800 leading-tight">Automated Accounting Engine</span>
                        </motion.div>

                        {/* Bottom-Center Power Card (Commerce Style) */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.1 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-40 flex items-center gap-4 border border-gray-50"
                        >
                          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center shadow-inner shrink-0">
                            <FileCheck className="w-6 h-6 text-indigo-600" />
                          </div>
                          <p className="text-[14px] font-medium text-[#1e3a5f] leading-snug">
                            &quot;Eliminate your accounting bottlenecks and ensure 100% compliance with automated financials.&quot;
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 6}
                  gridClass="lg:grid-cols-[45%_55%]"
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-slate-50">
                      <div className="absolute -top-[10%] -left-[10%] w-[65%] h-[65%] rounded-full bg-gradient-to-br from-violet-200/40 via-indigo-100/30 to-transparent blur-[130px]" />
                      <div className="absolute -bottom-[10%] -right-[10%] w-[65%] h-[65%] rounded-full bg-gradient-to-tl from-fuchsia-200/40 via-purple-100/30 to-transparent blur-[130px]" />
                      {!isMobile && (
                        <div className="absolute inset-0 opacity-[0.03]"
                          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                      )}
                    </div>
                  }
                  title="Unified Global Control: Multi-Entity Consolidation"
                  desc="Eliminate manual intercompany adjustments and complex currency translations. NetSuite automates consolidation across global subsidiaries, ensuring a faster and error-free financial close."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full max-w-[520px] mx-auto flex items-center justify-center p-4">
                      <div className="relative w-full">
                        <Image
                          src="/images/lap/netsuite_cfo_consolidation_dashboard.png"
                          alt="NetSuite Multi-Entity Consolidation Dashboard"
                          width={1900}
                          height={1900}
                          className="w-full h-auto rounded-2xl object-contain filter drop-shadow-[0_20px_35px_rgba(99,102,241,0.25)] transition-transform duration-700 hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        
                        {/* Top Corner Card */}
                        <motion.div
                          initial={{ opacity: 0, x: -30, y: -20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.8 }}
                          className="absolute -top-4 -left-6 bg-white p-3 rounded-xl shadow-2xl z-40 flex items-center gap-3 border border-gray-100 min-w-[260px]"
                        >
                          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shrink-0">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <span className="text-[14px] font-bold text-gray-800 leading-tight">Global Ledger Engine</span>
                        </motion.div>

                        {/* Bottom-Center Power Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.1 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-40 flex items-center gap-4 border border-gray-50"
                        >
                          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center shadow-inner shrink-0">
                            <ShieldCheck className="w-6 h-6 text-indigo-600" />
                          </div>
                          <p className="text-[14px] font-medium text-[#1e3a5f] leading-snug">
                            &quot;Consolidate multi-currency and multi-subsidiary financials instantly.&quot;
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 7}
                  gridClass="lg:grid-cols-[45%_55%]"
                  customBg={
                    <div className="absolute inset-0 overflow-hidden bg-white">
                      <div className="absolute top-0 right-0 w-[55%] h-[55%] rounded-full bg-linear-to-br from-emerald-100/40 via-teal-50/20 to-transparent blur-[120px]" />
                      <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-full bg-linear-to-tr from-blue-100/40 via-cyan-50/20 to-transparent blur-[120px]" />
                      <div className="absolute inset-0 opacity-[0.04]" 
                        style={{ backgroundImage: 'linear-gradient(#2563eb 1.5px, transparent 1.5px), linear-gradient(90deg, #2563eb 1.5px, transparent 1.5px)', backgroundSize: '80px 80px' }} />
                    </div>
                  }
                  title="Predictive AI: Smart Cash Flow Forecasting"
                  desc="Don't just track cash flow—predict it. Leverage NetSuite's built-in machine learning models to analyze trends, run scenarios, and navigate future markets with absolute certainty."
                  cta="Book a Demo"
                  link="/netsuite/contact"
                  customVisual={
                    <div className="relative w-full max-w-[520px] mx-auto flex items-center justify-center p-4">
                      <div className="relative w-full">
                        <Image
                          src="/images/lap/netsuite_cfo_predictive_cashflow.png"
                          alt="NetSuite Predictive Cash Flow Dashboard"
                          width={1900}
                          height={1900}
                          className="w-full h-auto rounded-2xl object-contain filter drop-shadow-[0_20px_35px_rgba(16,185,129,0.25)] transition-transform duration-700 hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        
                        {/* Top Corner Card */}
                        <motion.div
                          initial={{ opacity: 0, x: -30, y: -20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.8 }}
                          className="absolute -top-4 -left-6 bg-white p-3 rounded-xl shadow-2xl z-40 flex items-center gap-3 border border-gray-100 min-w-[260px]"
                        >
                          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shrink-0">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-[14px] font-bold text-gray-800 leading-tight">AI Financial Intelligence</span>
                        </motion.div>

                        {/* Bottom-Center Power Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.1 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-40 flex items-center gap-4 border border-gray-50"
                        >
                          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shadow-inner shrink-0">
                            <FileCheck className="w-6 h-6 text-emerald-600" />
                          </div>
                          <p className="text-[14px] font-medium text-[#1e3a5f] leading-snug">
                            &quot;Generate 12-month predictive cash demand models with a single click.&quot;
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  }
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section>
    </div>
  );
};

const HeroSlide = ({
  bg,
  customBg,
  title,
  subtitle,
  desc,
  cta,
  link,
  image,
  customVisual,
  showOverlay = true,
  textColor = 'light',
  priority = false,
  isActive = false,
  multiColorShadow = false,
  skipEntranceAnimation = false,
  textColumnClass = "lg:-ml-12",
  textWidthClass = "max-w-2xl",
  containerClass = "px-4 sm:px-6 lg:px-8",
  gridClass = "",
}: any) => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const defaultGridClass = image || customVisual ? 'lg:grid-cols-[52%_46%]' : 'lg:grid-cols-2';
  const activeGridClass = gridClass || defaultGridClass;

  return (
    <div className="relative h-full w-full flex items-center">
      <div className="absolute inset-0 top-0 -z-10">
        {customBg ? (
          customBg
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50 to-blue-200/40">
            {bg && (
              <Image
                src={bg}
                alt="Hero Background"
                fill
                priority={priority}
                fetchPriority={priority ? "high" : "auto"}
                className="object-cover"
                sizes="100vw"
              />
            )}
          </div>
        )}
      </div>

      {showOverlay && bg && (
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/55 to-transparent" />
      )}

      <div className={`relative z-10 mx-auto max-w-6xl ${containerClass} w-full grid grid-cols-1 ${activeGridClass} gap-10 lg:gap-27 items-center -translate-y-4 lg:-translate-y-6`}>
        <div className={`${textWidthClass} text-left ${textColumnClass}`}>
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={skipEntranceAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${textColor === 'dark'
                  ? "bg-linear-to-r from-blue-950 via-blue-800 to-blue-900 bg-clip-text text-transparent"
                  : "text-white"
                  }`}>
                  {title}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className={`mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${textColor === 'dark' ? 'text-gray-700' : 'text-white/90'
                    }`}>{desc}</motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="mt-5 relative inline-flex group"
                >
                  <div className={`absolute inset-0 rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700`} />
                  <Link
                    href={link || "#"}
                    className="bg-gray-950 text-white relative px-10 py-4 rounded-xl font-medium shadow-2xl hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105 inline-block text-center"
                  >
                    {cta}
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isMobile && (image || customVisual) && (
          <div className="hidden lg:flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  className="w-full relative"
                >
                  {multiColorShadow && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[110%] bg-linear-to-r from-blue-400/20 via-cyan-400/15 to-blue-300/10 blur-[120px] rounded-full -z-10" />
                  )}
                  {customVisual ? (
                    <div className="w-full flex justify-center lg:justify-end">
                      {customVisual}
                    </div>
                  ) : (
                    <Image
                      src={image!}
                      alt={title}
                      width={1800}
                      height={1600}
                      className="w-[115%] lg:w-[125%] xl:w-[130%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)] -ml-[10%] lg:-ml-[15%] xl:-ml-[20%] transition-transform duration-700 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};





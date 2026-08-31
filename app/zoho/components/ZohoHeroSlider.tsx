"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlide = ({
  bg,
  customBg,
  title,
  titleGradient,
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
  contentShiftLeft = false,
}: any) => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  return (
    <div className="relative h-full w-full flex items-center">
      <div className="absolute inset-0 top-0 -z-10">
        {customBg ? (
          customBg
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-white via-rose-50 to-rose-200/40">
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

      <div className={`relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 ${image || customVisual ? 'lg:grid-cols-[52%_46%]' : 'lg:grid-cols-2'} gap-10 lg:gap-27 items-center`}>
        <div className={`max-w-2xl text-left ${contentShiftLeft === 'extra' ? 'lg:-ml-28 xl:-ml-32' : (contentShiftLeft ? 'lg:-ml-20 xl:-ml-24' : 'lg:-ml-12')}`}>
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {priority ? (
                  <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${titleGradient ? titleGradient : (textColor === 'dark'
                    ? "bg-gradient-to-r from-gray-950 via-gray-800 to-red-600 bg-clip-text text-transparent"
                    : "text-white"
                    )}`}>
                    {title}
                  </h1>
                ) : (
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${titleGradient ? titleGradient : (textColor === 'dark'
                    ? "bg-gradient-to-r from-gray-950 via-gray-800 to-red-600 bg-clip-text text-transparent"
                    : "text-white"
                    )}`}>
                    {title}
                  </h2>
                )}

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
                  <div className={`absolute inset-0 rounded-xl bg-linear-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg group-hover:opacity-100 transition duration-700`} />
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[110%] bg-linear-to-r from-gray-400/20 via-gray-400/15 to-gray-300/10 blur-[120px] rounded-full -z-10" />
                  )}
                  {customVisual ? (
                    <div className="w-full flex justify-center lg:justify-end">
                      {customVisual}
                    </div>
                  ) : (
                    <Image
                      src={image!}
                      alt={title}
                      width={1200}
                      height={1000}
                      className="w-[140%] max-lg:h-auto max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)] -ml-[25%] transition-transform duration-700 hover:scale-[1.02]"
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

export default function ZohoHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
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
          bg="/images/Background/heropinkbg.webp"
          title="Turn Customer Relationships into Business Growth with Zoho CRM"
          titleGradient="bg-gradient-to-r from-gray-950 via-rose-900 to-rose-600 bg-clip-text text-transparent"
          desc="Build stronger customer relationships, streamline your sales process, and turn every opportunity into measurable growth with Zoho CRM."
          cta="Explore Zoho CRM"
          link="/zoho-crm"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper - Super Sized for Zoho CRM */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-rose-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(225,29,72,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-rose-950 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">crm.zoho.com/agreements</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-crm-updated-dashboard.png"
                      alt="Zoho CRM Agreements & Sales Analytics Dashboard"
                      width={1600}
                      height={1100}
                      quality={85}
                      priority
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-rose-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-rose-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-rose-950 block leading-tight">Customer Relationship Management</span>
                      <span className="text-[9px] font-semibold text-rose-600">Real-Time Analytics & Pipeline Automation</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Digital Transformation Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-rose-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-rose-950">⚡ Digital Transformation & Workflow Automation</span>
                  </motion.div>
                </div>
              </div>
            </div>
          }
          priority={true}
          multiColorShadow={true}
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide
          isActive={activeIndex === 1}
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-cyan-50/80 via-sky-50/50 to-indigo-50/60">
              <div className="absolute -top-[20%] -left-[10%] w-[65%] h-[85%] rounded-full bg-gradient-to-br from-cyan-100/60 via-sky-100/40 to-transparent blur-[140px]" />
              <div className="absolute -bottom-[20%] -right-[10%] w-[65%] h-[85%] rounded-full bg-gradient-to-tl from-indigo-100/60 via-blue-100/40 to-transparent blur-[140px]" />

              <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 1440 800" fill="none">
                <circle cx="720" cy="400" r="300" stroke="url(#proj-grad-cyan-1)" strokeWidth="1.5" strokeDasharray="6 8" />
                <circle cx="720" cy="400" r="450" stroke="url(#proj-grad-cyan-2)" strokeWidth="1" strokeDasharray="8 12" />
                <defs>
                  <linearGradient id="proj-grad-cyan-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="proj-grad-cyan-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0EA5E9" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#6366F1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ y: [0, -35, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[12%] right-[12%] w-3.5 h-3.5 rounded-full bg-cyan-500 blur-[2px]"
                  />
                  <motion.div
                    animate={{ y: [0, 35, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[12%] left-[12%] w-4 h-4 rounded-full bg-indigo-500 blur-[2px]"
                  />
                </>
              )}
            </div>
          }
          title="50+ Integrated Zoho Apps for Modern Businesses"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-600 bg-clip-text text-transparent"
          desc="Zoho Apps offer a complete set of tools to manage and streamline business operations. They help improve productivity, automate tasks, and support smarter business growth."
          cta="Explore Zoho One"
          link="/zoho-one"
          customVisual={
            <div className="relative w-full h-full flex items-center justify-center p-4 min-h-[400px] lg:min-h-[500px]">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center scale-[0.65] sm:scale-90 lg:scale-100">
                {/* Central Hub */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-20 w-28 h-28 md:w-36 md:h-36 bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] flex items-center justify-center p-6 border border-white/60"
                >
                  <Image src="/images/zoho-logos/zoho premium.png" alt="Zoho Premium Partner" width={120} height={60} className="object-contain max-lg:w-auto max-lg:h-auto max-lg:max-w-full max-lg:max-h-full" style={{ width: 'auto', height: 'auto' }} sizes="120px" />
                </motion.div>

                {/* Connection Lines Decor - Moving Orbits */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
                  <motion.circle
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    cx="250" cy="250" r="145" fill="none" stroke="black" strokeWidth="1" strokeDasharray="6 8"
                    style={{ transformOrigin: 'center' }}
                  />
                  <motion.circle
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    cx="250" cy="250" r="235" fill="none" stroke="black" strokeWidth="1" strokeDasharray="8 12"
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>

                {/* Inner Ring of Products - Orbiting */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ willChange: 'transform' }}
                >
                  {[
                    { src: "/images/zoho-logos/zoho Crm logo.png", angle: 0, name: "Zoho CRM" },
                    { src: "/images/zoho-logos/zoho finance logo.png", angle: 60, name: "Zoho Books" },
                    { src: "/images/zoho-logos/zoho desk logo.png", angle: 120, name: "Zoho Desk" },
                    { src: "/images/zoho-logos/zoho_creator.png", angle: 180, name: "Zoho Creator" },
                    { src: "/images/zoho-logos/zoho_analytics.png", angle: 240, name: "Zoho Analytics" },
                    { src: "/images/zoho-logos/zoho mail logo.png", angle: 300, name: "Zoho Mail" }
                  ].map((logo, i) => (
                    <motion.div
                      key={`inner-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: Math.cos((logo.angle * Math.PI) / 180) * 145,
                        y: Math.sin((logo.angle * Math.PI) / 180) * 145,
                      }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "backOut" }}
                      className="absolute z-10 pointer-events-auto"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col items-center justify-center group"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] flex items-center justify-center p-3 border border-gray-100 hover:scale-110 transition-transform">
                          <Image src={logo.src} alt={logo.name} width={40} height={40} className="object-contain w-8 h-8 md:w-9 md:h-9" sizes="40px" />
                        </div>
                        <span className="mt-1 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-extrabold text-gray-800 shadow-md border border-gray-100 whitespace-nowrap">
                          {logo.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Outer Ring of Services - Orbiting (Counter-direction) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ willChange: 'transform' }}
                >
                  {[
                    { src: "/images/zoho-logos/zoho people logo.png", angle: 0, name: "Zoho People" },
                    { src: "/images/zoho-logos/zoho project logo.png", angle: 45, name: "Zoho Projects" },
                    { src: "/images/zoho-logos/zoho cliq logo.png", angle: 90, name: "Zoho Cliq" },
                    { src: "/images/zoho-logos/zoho_inventory.png", angle: 135, name: "Zoho Inventory" },
                    { src: "/images/zoho-logos/zoho maarkiting logo.png", angle: 180, name: "Zoho Marketing" },
                    { src: "/images/zoho-logos/zoho_payroll.png", angle: 225, name: "Zoho Payroll" },
                    { src: "/images/zoho-logos/zoho drive logo.png", angle: 270, name: "Zoho WorkDrive" },
                    { src: "/images/zoho-logos/zoho_sign.png", angle: 315, name: "Zoho Sign" }
                  ].map((logo, i) => (
                    <motion.div
                      key={`outer-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: Math.cos((logo.angle * Math.PI) / 180) * 240,
                        y: Math.sin((logo.angle * Math.PI) / 180) * 240,
                      }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: "backOut" }}
                      className="absolute z-0 pointer-events-auto"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col items-center justify-center group"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center p-2.5 border border-white/80 hover:scale-110 transition-transform">
                          <Image src={logo.src} alt={logo.name} width={34} height={34} className="object-contain w-7 h-7 md:w-8 md:h-8" sizes="34px" />
                        </div>
                        <span className="mt-1 px-1.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-bold text-gray-800 shadow-sm border border-gray-100 whitespace-nowrap">
                          {logo.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
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
          isActive={activeIndex === 2}
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/50">
              <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent blur-[140px]" />
              <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-tl from-purple-100/40 via-indigo-100/30 to-transparent blur-[140px]" />

              {/* Decorative Geometric Square & Grid Line Pattern - Larger & More Visible */}
              <svg className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" viewBox="0 0 1440 800" fill="none">
                <pattern id="creator-square-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#creator-grid-grad)" strokeWidth="1.5" strokeDasharray="6 6" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#creator-square-grid)" />
                <path d="M-100 200C300 100 600 300 1000 150C1300 100 1500 250 1700 200" stroke="url(#creator-grad-1)" strokeWidth="2.5" strokeDasharray="4 8" />
                <path d="M-100 550C300 450 700 650 1100 500C1400 450 1600 600 1800 550" stroke="url(#creator-grad-2)" strokeWidth="3" />
                <defs>
                  <linearGradient id="creator-grid-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#6366F1" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="creator-grad-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" stopOpacity="0.5" />
                    <stop offset="0.5" stopColor="#818CF8" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#4F46E5" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="creator-grad-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" stopOpacity="0.4" />
                    <stop offset="0.5" stopColor="#6366F1" stopOpacity="0.75" />
                    <stop offset="1" stopColor="#4338CA" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[18%] right-[14%] w-4 h-4 rounded-full bg-indigo-400/80 blur-[2px]"
                  />
                  <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[22%] left-[16%] w-5 h-5 rounded-full bg-blue-400/70 blur-[2px]"
                  />
                </>
              )}
            </div>
          }
          title="Transform Your Business with Custom Zoho Creator Solutions"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-600 bg-clip-text text-transparent"
          desc="Streamline your unique business processes, automate repetitive tasks, and build powerful custom applications with Zoho Creator — designed to boost efficiency and drive growth."
          cta="Explore Zoho Creator"
          link="/zoho-creator"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper - Super Sized for Zoho Creator */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-indigo-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(99,102,241,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-indigo-950 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">creator.zoho.com/dashboard</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-creator-updated-dashboard.png"
                      alt="Zoho Creator Custom Apps Dashboard"
                      width={1600}
                      height={1100}
                      quality={85}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-indigo-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-indigo-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-indigo-950 block leading-tight">Custom Low-Code App Platform</span>
                      <span className="text-[9px] font-semibold text-indigo-600">Automated Workflows & Custom Reports</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Integration Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-indigo-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-indigo-950">⚡ Drag-and-Drop Enterprise App Builder</span>
                  </motion.div>
                </div>
              </div>
            </div>
          }
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide
          isActive={activeIndex === 3}
          bg="/images/Background/herobg5.png"
          title="Experience Zoho One — The Operating System for Business"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-600 bg-clip-text text-transparent"
          desc="Unify your sales, marketing, finance, HR, and operations on a single, secure cloud platform of over 50+ integrated applications."
          cta="Explore Zoho One"
          link="/zoho-one"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper - Super Sized for Zoho One with Extra Right Separation */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(59,130,246,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-blue-950 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">one.zoho.com/dashboard</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-one-updated-dashboard.png"
                      alt="Zoho One Business Operating System"
                      width={1600}
                      height={1100}
                      quality={85}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-blue-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-blue-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-blue-950 block leading-tight">Unified Business Operating System</span>
                      <span className="text-[9px] font-semibold text-blue-600">Sales, Marketing, Finance & HR</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Integration Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-blue-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-950">⚡ Complete Enterprise Suite Connected</span>
                  </motion.div>
                </div>
              </div>
            </div>
          }
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide
          isActive={activeIndex === 4}
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-slate-50">
              <div className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-red-50/10 via-pink-50/10 to-transparent blur-[140px]" />
              <div className="absolute -bottom-[15%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-rose-50/10 via-rose-100/10 to-transparent blur-[140px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-rose-50/10 blur-[100px]" />

              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 300C200 200 400 400 700 300C1000 200 1200 400 1500 300" stroke="url(#wave-grad-zoho-2)" strokeWidth="2.5" strokeDasharray="2 10" />
                <path d="M-100 450C200 350 400 550 700 450C1000 350 1200 550 1500 450" stroke="url(#wave-grad-zoho-1)" strokeWidth="2" strokeDasharray="1 20" />
                <path d="M-100 600C200 500 400 700 700 600C1000 500 1200 700 1500 600" stroke="url(#wave-grad-zoho-2)" strokeWidth="3" strokeDasharray="4 20" />
                <path d="M-100 750C200 650 400 850 700 750C1000 650 1200 850 1500 750" stroke="url(#wave-grad-zoho-1)" strokeWidth="2.5" />

                <defs>
                  <linearGradient id="wave-grad-zoho-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E91E63" stopOpacity="0.2" />
                    <stop offset="0.5" stopColor="#FF4081" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#C2185B" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="wave-grad-zoho-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AD1457" stopOpacity="0.2" />
                    <stop offset="0.5" stopColor="#D81B60" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#AD1457" stopOpacity="0.2" />
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
                    className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-red-500 blur-[2px]"
                  />
                  <motion.div
                    animate={{
                      y: [0, 30, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-pink-500 blur-[2px]"
                  />
                </>
              )}
            </div>
          }
          title="Master Your Financial Future with Zoho Books and Smart Automation"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-pink-600 bg-clip-text text-transparent"
          desc="Automate accounting, invoicing, and tax compliance so your team can focus on strategic growth."
          cta="Explore Zoho Books"
          link="/zoho-books-accounting-software"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper - Super Sized for Books */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-rose-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(233,30,99,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-rose-950 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">books.zoho.com/dashboard</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-books-updated-dashboard.png"
                      alt="Zoho Books Finance Dashboard"
                      width={1600}
                      height={1100}
                      quality={85}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-rose-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-rose-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 12v-2m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-rose-950 block leading-tight">Automated Accounting & Invoicing</span>
                      <span className="text-[9px] font-semibold text-rose-600">Real-Time Financial Insights</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Compliance Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-rose-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-rose-950">⚡ Tax & Multi-Currency Compliant</span>
                  </motion.div>
                </div>
              </div>
            </div>
          }
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide
          isActive={activeIndex === 5}
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-amber-50/60 via-orange-50/40 to-rose-50/50">
              <div className="absolute -top-[25%] -left-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-[150px]" />
              <div className="absolute -bottom-[25%] -right-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-tl from-rose-200/40 via-orange-100/30 to-transparent blur-[150px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-amber-100/30 blur-[120px]" />

              {/* Decorative Geometric SVG Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1440 800" fill="none">
                <path d="M-100 200C300 100 600 300 1000 150C1300 100 1500 250 1700 200" stroke="url(#erp-grad-1)" strokeWidth="2" strokeDasharray="4 8" />
                <path d="M-100 550C300 450 700 650 1100 500C1400 450 1600 600 1800 550" stroke="url(#erp-grad-2)" strokeWidth="2.5" />
                <defs>
                  <linearGradient id="erp-grad-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F97316" stopOpacity="0.4" />
                    <stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#EF4444" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="erp-grad-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580C" stopOpacity="0.3" />
                    <stop offset="0.5" stopColor="#F97316" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#D97706" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[18%] right-[12%] w-4 h-4 rounded-full bg-orange-400/80 blur-[2px]"
                  />
                  <motion.div
                    animate={{ y: [0, 35, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[22%] left-[15%] w-5 h-5 rounded-full bg-amber-400/70 blur-[2px]"
                  />
                </>
              )}
            </div>
          }
          title="Drive Smarter Growth with Powerful Zoho ERP Solutions"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-600 bg-clip-text text-transparent"
          desc="Simplify operations, boost efficiency, and scale your business confidently with smart, integrated Zoho ERP solutions."
          cta="Explore Zoho ERP"
          link="/zoho-erp"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper - Super Sized for ERP */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-orange-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(249,115,22,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-orange-950 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">erp.zoho.com/business-overview</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-erp-updated-dashboard.png"
                      alt="Zoho ERP Business Overview Dashboard"
                      width={1600}
                      height={1100}
                      quality={85}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-orange-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-orange-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-orange-950 block leading-tight">Supply Chain & Inventory</span>
                      <span className="text-[9px] font-semibold text-amber-600 font-mono">Real-Time Stock Management</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Operational Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-orange-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-orange-950">📦 Auto Procurement & Order Fulfillment Active</span>
                  </motion.div>
                </div>
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
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-teal-50/60 via-emerald-50/40 to-cyan-50/50">
              <div className="absolute -top-[25%] -left-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-br from-teal-200/40 via-emerald-100/30 to-transparent blur-[150px]" />
              <div className="absolute -bottom-[25%] -right-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-tl from-cyan-200/40 via-teal-100/30 to-transparent blur-[150px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-emerald-100/30 blur-[120px]" />

              {/* Decorative Geometric SVG Wave Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1440 800" fill="none">
                <path d="M-100 250C300 150 600 350 1000 200C1300 150 1500 300 1700 250" stroke="url(#hr-grad-1)" strokeWidth="2" strokeDasharray="6 10" />
                <path d="M-100 600C300 500 700 700 1100 550C1400 500 1600 650 1800 600" stroke="url(#hr-grad-2)" strokeWidth="2.5" />
                <defs>
                  <linearGradient id="hr-grad-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0D9488" stopOpacity="0.4" />
                    <stop offset="0.5" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#06B6D4" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="hr-grad-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14B8A6" stopOpacity="0.3" />
                    <stop offset="0.5" stopColor="#059669" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#0891B2" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] right-[15%] w-4 h-4 rounded-full bg-teal-400/80 blur-[2px]"
                  />
                  <motion.div
                    animate={{ y: [0, 35, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[20%] left-[12%] w-5 h-5 rounded-full bg-emerald-400/70 blur-[2px]"
                  />
                </>
              )}
            </div>
          }
          title="Power Your Workforce with Intelligent HRMS Solutions"
          titleGradient="bg-gradient-to-r from-slate-950 via-slate-900 to-teal-600 bg-clip-text text-transparent"
          desc="Empower your team, simplify HR processes, and boost workplace efficiency with smart, scalable HR solutions."
          cta="Explore Zoho People"
          link="/zoho-people"
          contentShiftLeft="extra"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Browser Card Frame Wrapper with Floating Cards directly on the edges */}
                <div className="relative w-[210%] max-w-none -ml-[5%] max-lg:ml-0 max-lg:w-full lg:scale-[1.35] translate-x-[18%] lg:origin-right rounded-2xl bg-white/95 backdrop-blur-xl border border-teal-200/80 shadow-[0_30px_75px_-10px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_95px_-10px_rgba(13,148,136,0.32)] transition-all duration-500 group">
                  {/* Browser Top Window Bar */}
                  <div className="h-9 px-4 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between rounded-t-2xl">
                    {/* macOS window control buttons */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 bg-white/90 border border-slate-200 px-3.5 py-1 rounded-md text-[11px] font-mono text-teal-900 max-w-[240px] sm:max-w-[320px] w-full justify-center shadow-xs">
                      <svg className="w-3 h-3 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate font-sans font-medium">people.zoho.com/hr-management</span>
                    </div>

                    {/* Right browser utility icons */}
                    <div className="flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Image Inside Frame */}
                  <div className="relative overflow-hidden rounded-b-2xl bg-slate-50">
                    <Image
                      src="/images/zoho-dashboards/zoho-people-updated.png"
                      alt="Zoho People HR Management Dashboard"
                      width={1600}
                      height={1100}
                      quality={85}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  {/* 1. Top-Left HR Feature Tag (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -15 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute -top-4 -left-3 sm:-left-5 lg:-left-7 bg-white/95 backdrop-blur-xl p-2 px-3.5 rounded-2xl shadow-xl z-40 flex items-center gap-2.5 border border-teal-100 min-w-max scale-90 lg:scale-[0.76] origin-top-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-teal-600 flex items-center justify-center shadow-xs text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[12px] font-extrabold text-teal-950 block leading-tight">Workforce & HR Management</span>
                      <span className="text-[9px] font-semibold text-teal-600">Automated Onboarding & Attendance</span>
                    </div>
                  </motion.div>

                  {/* 2. Bottom-Right Attendance Ribbon (No Numbers) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xl p-1.5 px-3.5 rounded-xl shadow-lg z-40 flex items-center gap-2 border border-teal-100 scale-90 lg:scale-[0.76] origin-bottom-right"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-teal-950">⏱️ Live Attendance & Leave Tracking Active</span>
                  </motion.div>
                </div>
              </div>
            </div>
          }
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>
    </Swiper>
  );
}

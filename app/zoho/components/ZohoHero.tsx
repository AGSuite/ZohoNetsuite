"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";



interface ZohoHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const ZohoHero: React.FC<ZohoHeroProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`relative w-full overflow-hidden bg-white font-dm-sans`}>
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            <div className="relative h-full w-full flex items-center">
              <div className="absolute inset-0 top-0 -z-10">
                <Image
                  src="/images/Background/heropinkbg.webp"
                  alt="Zoho Background"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[52%_46%] gap-10 items-center">
                <div className="max-w-2xl text-left lg:-ml-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight bg-linear-to-r from-gray-950 via-gray-800 to-red-600 bg-clip-text text-transparent pb-1">
                    Empower Your Business with Advanced Zoho Cloud Solutions
                  </h1>

                  <p className="mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-700">
                    Run your entire business operations on a single, unified cloud platform designed for growth and scale.
                  </p>

                  <div className="mt-5 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg" />
                    <Link
                      href="/zoho/solutions"
                      className="bg-gray-950 text-white relative px-10 py-4 rounded-xl font-medium shadow-2xl inline-block"
                    >
                      Experience Zoho One
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center lg:justify-end">
                   <div className="w-full relative">
                      <Image
                        src="/images/Dashboard/zohodash.webp"
                        alt="Empower Your Business with Advanced Zoho Cloud Solutions"
                        width={1200}
                        height={1000}
                        priority
                        fetchPriority="high"
                        className="w-[140%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)] -ml-[25%]"
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
              speed={900}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 0}
                  bg="/images/Background/heropinkbg.webp"
                  title="Empower Your Business with Advanced Zoho Cloud Solutions"
                  desc="Run your entire business operations on a single, unified cloud platform designed for growth and scale."
                  cta="Experience Zoho One"
                  link="/zoho/solutions"
                  image="/images/Dashboard/zohodash.webp"
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
                    <div className="absolute inset-0 overflow-hidden bg-white">
                      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-red-100/40 via-pink-50/30 to-transparent blur-[140px]" />
                      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-tl from-rose-100/40 via-fuchsia-50/30 to-transparent blur-[140px]" />


                      <motion.div
                        animate={{
                          y: [0, -40, 0],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[10%] right-[10%] w-3 h-3 rounded-full bg-red-400 blur-[2px]"
                      />
                      <motion.div
                        animate={{
                          y: [0, 40, 0],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[10%] left-[10%] w-4 h-4 rounded-full bg-pink-400 blur-[2px]"
                      />
                    </div>
                  }
                  title="Run Your Entire Business Seamlessly With 50+ Integrated Cloud Apps"
                  desc="Unify your sales, marketing, finance, and operations in a single, powerful suite designed to accelerate your growth."
                  cta="Explore All Apps"
                  link="/zoho/solutions"
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
                          <Image src="/images/zoho logos/zoho-logo.png" alt="Zoho Original" width={100} height={100} className="object-contain" />
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
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ willChange: 'transform' }}
                        >
                          {[
                            { src: "/images/zoho logos/zoho Crm logo.png", angle: 0 },
                            { src: "/images/zoho logos/zoho cliq logo.png", angle: 60 },
                            { src: "/images/zoho logos/zoho desk logo.png", angle: 120 },
                            { src: "/images/zoho logos/zoho finance logo.png", angle: 180 },
                            { src: "/images/zoho logos/zoho maarkiting logo.png", angle: 240 },
                            { src: "/images/zoho logos/zoho mail logo.png", angle: 300 }
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
                              className="absolute z-10"
                            >
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-white/80"
                              >
                                <Image src={logo.src} alt="logo" width={48} height={48} className="object-contain" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Outer Ring of Services - Orbiting (Counter-direction) */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ willChange: 'transform' }}
                        >
                          {[
                            { src: "/images/zoho logos/zoho people logo.png", angle: 30 },
                            { src: "/images/zoho logos/zoho project logo.png", angle: 90 },
                            { src: "/images/zoho logos/zoho sheets logo.png", angle: 150 },
                            { src: "/images/zoho logos/zoho drive logo.png", angle: 210 },
                            { src: "/images/zoho logos/zoho-logo.png", angle: 270 },
                            { src: "/images/zoho logos/zoho finance logo.png", angle: 330 }
                          ].map((logo, i) => (
                            <motion.div
                              key={`outer-${i}`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                x: Math.cos((logo.angle * Math.PI) / 180) * 235,
                                y: Math.sin((logo.angle * Math.PI) / 180) * 235,
                              }}
                              transition={{ duration: 0.6, delay: 1.0 + i * 0.1, ease: "backOut" }}
                              className="absolute z-0"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                                className="w-12 h-12 md:w-16 md:h-16 bg-white/70 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center p-3 border border-white/50"
                              >
                                <Image src={logo.src} alt="logo" width={38} height={38} className="object-contain" />
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
                  bg="/images/Background/herobg5.png"
                  title="Master Your Financial Future with Zoho Books and Smart Automation"
                  desc="Automate accounting, invoicing, and tax compliance so your team can focus on strategic growth."
                  cta="Upgrade Financial Ops"
                  link="/zoho/solutions/finance/zoho-books"
                  customVisual={
                    <div className="relative w-full flex justify-center lg:justify-end">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[130%] -z-10 blur-[130px] opacity-20 select-none pointer-events-none">
                        <div>
                          <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-gray-300 rounded-full blur-[60px]" />
                          <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gray-400 rounded-full blur-[60px]" />
                          <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-gray-500 rounded-full blur-[60px]" />
                          <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-gray-400 rounded-full blur-[60px]" />
                        </div>
                      </div>
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <Image
                          src="/images/zoho-dashboards/zoho-books.webp"
                          alt="Zoho Finance Automation"
                          width={1200}
                          height={1000}
                          className="w-[135%] max-w-none object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] -mr-[1%] transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 60vw"
                        />

                        <motion.div
                          initial={{ opacity: 0, x: -30, y: -20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.8 }}
                          className="absolute -top-6 -left-8 bg-white p-3.5 rounded-xl shadow-2xl z-40 flex items-center gap-4 border border-gray-100 min-w-[280px]"
                        >
                          <div className="flex shrink-0">
                            <div className="w-11 h-11 rounded-lg bg-red-600 flex items-center justify-center p-2 shadow-lg ring-2 ring-white z-20 text-white">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-[15px] font-bold text-gray-800 leading-tight">Zoho Books & Finance</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.1 }}
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[115%] bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-40 flex items-center gap-5 border border-gray-50"
                        >
                          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shadow-inner">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 11L14.017 8C14.017 6.89543 14.9124 6 16.017 6H19.017C20.1216 6 21.017 6.89543 21.017 8V11C21.017 12.1046 20.1216 13 19.017 13H16.017C14.9124 13 14.017 12.1046 14.017 11ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01699 16H8.01699C9.12156 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12156 23 8.01699 23H5.01699C3.91243 23 3.017 22.1046 3.017 21ZM3.017 11L3.017 8C3.017 6.89543 3.91243 6 5.01699 6H8.01699C9.12156 6 10.017 6.89543 10.017 8V11C10.017 12.1046 9.12156 13 8.01699 13H5.01699C3.91243 13 3.017 12.1046 3.017 11Z" />
                            </svg>
                          </div>
                          <p className="text-[17px] font-medium text-red-950 leading-snug">
                            &quot;Master your financial future with smart automation and real-time insights&quot;
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
                  isActive={activeIndex === 3}
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
                    </div>
                  }
                  title="Accelerate Your Growth with Expert Zoho Managed Services"
                  desc="Optimize performance, automate complex workflows, and scale your business with dedicated Zoho expertise."
                  cta="Optimize Your Zoho"
                  link="/zoho/services/managed-services"
                  customVisual={
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <Image
                        src="/images/lap/lap10_11zon.webp"
                        alt="Zoho Dashboard"
                        width={1200}
                        height={1000}
                        className="w-[135%] max-w-none object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] -mr-[1%] transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 60vw"
                      />

                      <motion.div
                        initial={{ opacity: 0, x: -30, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="absolute -top-6 -left-8 bg-white p-3.5 rounded-xl shadow-2xl z-40 flex items-center gap-4 border border-gray-100 min-w-[280px]"
                      >
                        <div className="flex shrink-0">
                          <div className="w-11 h-11 rounded-lg bg-pink-600 flex items-center justify-center text-white shadow-lg ring-2 ring-white z-10">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-[15px] font-bold text-gray-800 leading-tight">CRM, Books, Analytics</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[115%] bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-40 flex items-center gap-5 border border-gray-50"
                      >
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shadow-inner">
                          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 11L14.017 8C14.017 6.89543 14.9124 6 16.017 6H19.017C20.1216 6 21.017 6.89543 21.017 8V11C21.017 12.1046 20.1216 13 19.017 13H16.017C14.9124 13 14.017 12.1046 14.017 11ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.01699 16H8.01699C9.12156 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12156 23 8.01699 23H5.01699C3.91243 23 3.017 22.1046 3.017 21ZM3.017 11L3.017 8C3.017 6.89543 3.91243 6 5.01699 6H8.01699C9.12156 6 10.017 6.89543 10.017 8V11C10.017 12.1046 9.12156 13 8.01699 13H5.01699C3.91243 13 3.017 12.1046 3.017 11Z" />
                          </svg>
                        </div>
                        <p className="text-[17px] font-medium text-red-950 leading-snug">
                          &quot;Zoho One, the operating system for business that can make your operations seamless&quot;
                        </p>
                      </motion.div>
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
}: any) => {
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
        <div className="max-w-2xl text-left lg:-ml-12">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${textColor === 'dark'
                  ? "bg-linear-to-r from-gray-950 via-gray-800 to-red-600 bg-clip-text text-transparent"
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

        {(image || customVisual) && (
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
                      priority={priority}
                      className="w-[140%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)] -ml-[25%] transition-transform duration-700 hover:scale-[1.02]"
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

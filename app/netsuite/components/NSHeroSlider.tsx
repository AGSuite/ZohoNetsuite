"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
import { FileCheck, ShieldCheck, Zap, TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const NSCircularDesign = dynamic(() => import("./NSCircularDesign").then(mod => mod.NSCircularDesign), {
  ssr: false,
  loading: () => <div className="w-[350px] h-[350px] xl:w-[550px] xl:h-[550px] rounded-full bg-blue-50/50 animate-pulse mx-auto" />
});

const NSHeroNextAIVisual = dynamic(() => import("./NSHeroNextAIVisual").then(mod => mod.NSHeroNextAIVisual), {
  ssr: false,
  loading: () => <div className="w-full h-[450px] rounded-2xl bg-blue-50/50 animate-pulse mx-auto" />
});

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
  imageClass = "",
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
                {priority ? (
                  <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${textColor === 'dark'
                    ? "bg-linear-to-r from-blue-950 via-blue-800 to-blue-900 bg-clip-text text-transparent"
                    : "text-white"
                    }`}>
                    {title}
                  </h1>
                ) : (
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight pb-1 ${textColor === 'dark'
                    ? "bg-linear-to-r from-blue-950 via-blue-800 to-blue-900 bg-clip-text text-transparent"
                    : "text-white"
                    }`}>
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
                      className={imageClass || "w-[115%] lg:w-[125%] xl:w-[130%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)] -ml-[10%] lg:-ml-[15%] xl:-ml-[20%] transition-transform duration-700 hover:scale-[1.02]"}
                      sizes="(max-width: 1024px) 100vw, 100vw"
                      quality={85}
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

const NSComplianceCardDeck = ({ isActive }: { isActive: boolean }) => {
  const deckData = [
    {
      id: 0,
      badge: "⚡ 100% Tax Compliant",
      badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
      title: "Automated GST & E-Invoicing",
      subtitle: "Direct E-Way bill generation, auto TDS reconciliation & real-time GST filing directly inside NetSuite.",
      btnText: "Explore GST Engine →",
      btnGradient: "from-blue-600 to-indigo-600 shadow-blue-500/25",
      image: "/images/Dashboard/indian localization 2 dashboard.webp",
      accentBorder: "border-blue-200/90",
      shadowGlow: "shadow-[0_25px_60px_-10px_rgba(37,99,235,0.22)]",
    },
    {
      id: 1,
      badge: "🛡️ Audit Ready",
      badgeBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
      title: "Instant Audit Trails & Controls",
      subtitle: "Role-based permissions, automated SOC-1/SOC-2 logs, and tamper-proof approval workflows.",
      btnText: "View Audit Controls →",
      btnGradient: "from-emerald-600 to-teal-600 shadow-emerald-500/25",
      image: "/images/Dashboard/mca_compliance_illustration.webp",
      accentBorder: "border-emerald-200/90",
      shadowGlow: "shadow-[0_25px_60px_-10px_rgba(16,185,129,0.22)]",
    },
    {
      id: 2,
      badge: "🌐 Multi-Subsidiary Close",
      badgeBg: "bg-indigo-100 text-indigo-700 border-indigo-200",
      title: "Global Multi-Entity Consolidation",
      subtitle: "Real-time intercompany eliminations, multi-currency consolidation, and automated global financial statements.",
      btnText: "Explore Global Close →",
      btnGradient: "from-indigo-600 to-purple-600 shadow-indigo-500/25",
      image: "/images/lap/netsuite_cfo_consolidation_dashboard.webp",
      accentBorder: "border-indigo-200/90",
      shadowGlow: "shadow-[0_25px_60px_-10px_rgba(99,102,241,0.22)]",
    },
    {
      id: 3,
      badge: "📈 ASC 606 & IFRS Ready",
      badgeBg: "bg-cyan-100 text-cyan-700 border-cyan-200",
      title: "Automated Revenue Recognition",
      subtitle: "Complex multi-currency revenue schedules, subscription billing, and 1-click month-end close.",
      btnText: "Learn Revenue Engine →",
      btnGradient: "from-cyan-600 to-blue-600 shadow-cyan-500/25",
      image: "/images/Dashboard/planing and budgeting 2 dashboard.webp",
      accentBorder: "border-cyan-200/90",
      shadowGlow: "shadow-[0_25px_60px_-10px_rgba(6,182,212,0.22)]",
    },
  ];

  const [cardsOrder, setCardsOrder] = useState([0, 1, 2, 3]);
  const [isHovered, setIsHovered] = useState(false);

  const rotateNext = () => {
    setCardsOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  const rotatePrev = () => {
    setCardsOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  const bringToFront = (cardIndex: number) => {
    setCardsOrder((prev) => {
      const pos = prev.indexOf(cardIndex);
      if (pos <= 0) return prev;
      return [...prev.slice(pos), ...prev.slice(0, pos)];
    });
  };

  React.useEffect(() => {
    if (!isActive || isHovered) return;
    const timer = setInterval(() => {
      rotateNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isActive, isHovered]);

  const activeCardIndex = cardsOrder[0];

  return (
    <div
      className="relative w-full max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] mx-auto h-[430px] sm:h-[460px] lg:h-[480px] flex flex-col items-center justify-between select-none pt-2 pb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Playing Cards Fanned Deck */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        {cardsOrder.map((cardIndex, position) => {
          const item = deckData[cardIndex];

          const positionStyles = [
            { scale: 1, y: 4, x: -68, rotate: -0.5, zIndex: 40, opacity: 1 },
            { scale: 0.96, y: -8, x: -16, rotate: 1.2, zIndex: 30, opacity: 0.96 },
            { scale: 0.92, y: -20, x: 36, rotate: 2.8, zIndex: 20, opacity: 0.90 },
            { scale: 0.88, y: -32, x: 88, rotate: 4.2, zIndex: 10, opacity: 0.82 },
          ][position] || { scale: 0.84, y: -40, x: 110, rotate: 5.5, zIndex: 5, opacity: 0.7 };

          const isFront = position === 0;

          return (
            <motion.div
              key={item.id}
              layout
              initial={false}
              animate={{
                scale: positionStyles.scale,
                y: positionStyles.y,
                x: positionStyles.x,
                rotate: positionStyles.rotate,
                zIndex: positionStyles.zIndex,
                opacity: positionStyles.opacity,
              }}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => bringToFront(cardIndex)}
              className={`absolute top-2 left-0 right-0 mx-auto w-[74%] sm:w-[78%] bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-3xl border ${item.accentBorder} ${item.shadowGlow} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:brightness-105`}
            >
              {/* Top Header Badge & Card Counter */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                  {item.badge}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider">
                  0{item.id + 1} / 04
                </span>
              </div>

              {/* Card Image Frame */}
              <div className="relative w-full h-[145px] sm:h-[170px] lg:h-[190px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-950/10 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-center filter drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Card Content & Action Button */}
              <div className="text-left">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1 line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Action Button */}
                <div className="mt-3 flex items-center justify-between">
                  <Link
                    href="#contact-form"
                    className={`inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-linear-to-r ${item.btnGradient} shadow-md transition-all duration-300 hover:opacity-95`}
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Navigation Buttons & Progress Dots */}
      <div className="w-full flex items-center justify-between px-4 z-40 mt-3 pt-2 border-t border-slate-100">
        <button
          onClick={rotatePrev}
          type="button"
          className="text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-1 cursor-pointer"
        >
          ← Prev Card
        </button>

        {/* Progress Dots */}
        <div className="flex items-center gap-1.5">
          {deckData.map((d) => (
            <button
              key={d.id}
              onClick={() => bringToFront(d.id)}
              type="button"
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeCardIndex === d.id ? "w-6 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>

        <button
          onClick={rotateNext}
          type="button"
          className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 px-3.5 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-1 cursor-pointer"
        >
          Next Card →
        </button>
      </div>
    </div>
  );
};

export default function NSHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [skipFirstAnimation, setSkipFirstAnimation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
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
          title="AI-Powered, Future-Ready ERP Solutions Tailored for Your Industry"
          desc="Empower your business with AI-driven NetSuite solutions to automate operations, deliver predictive insights, and accelerate growth across your industry."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={<NSHeroNextAIVisual />}
          priority={true}
          multiColorShadow={true}
          skipEntranceAnimation={skipFirstAnimation}
          showOverlay={false}
          textColor="dark"
          gridClass="lg:grid-cols-[42%_58%]"
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
          title="One ERP. Complete Financial Control. Zero Guesswork."
          desc="Eliminate spreadsheets, manual reporting, and disconnected systems. AI-powered NetSuite gives CFOs real-time financial visibility, intelligent forecasting, automated compliance, and complete control—all from one unified ERP platform."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={<NSCircularDesign />}
          showOverlay={false}
          textColor="dark"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSlide
          isActive={activeIndex === 2}
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-white">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-tr from-blue-50/40 via-transparent to-emerald-50/30" />
            </div>
          }
          title="Your Finance Team Shouldn’t Be Working Until Midnight."
          desc="Eliminate manual reconciliations, delayed approvals, compliance chaos, and reporting bottlenecks with AI-enabled automation. NetSuite streamlines core financial processes and empowers finance leaders to focus on strategy, forecasting, and business growth—not operational firefighting."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[95%] -z-10 blur-[120px] opacity-35 select-none pointer-events-none">
                <div className="absolute inset-0 animate-pulse">
                  <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-blue-400/40 rounded-full blur-[60px]" />
                  <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-indigo-400/40 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-emerald-400/30 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-sky-400/40 rounded-full blur-[60px]" />
                </div>
              </div>

              {/* Image Card Container Wrapping Image - Increased Size & Light Glass BG */}
              <div className="relative w-[130%] lg:w-[138%] xl:w-[144%] max-w-none flex justify-center lg:justify-end -mr-[5%] lg:-mr-[10%] xl:-mr-[14%] p-2 lg:p-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_25px_65px_-12px_rgba(59,130,246,0.22)]">

                {/* Inner Image Frame */}
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner bg-slate-50/50">
                  <Image
                    src="/images/lap/group1.webp"
                    alt="Happy Corporate Finance Team Collaborating with Oracle NetSuite"
                    width={1500}
                    height={1000}
                    priority={true}
                    className="w-full h-auto rounded-xl object-contain filter drop-shadow-[0_14px_28px_rgba(37,99,235,0.2)] transition-transform duration-700 hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={85}
                  />
                </div>

                {/* Top Center Card - Dark Blue Icon, Rich Blue BG Shadow */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[92%] sm:w-[86%] lg:w-[88%] bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-[0_20px_45px_-8px_rgba(37,99,235,0.28)] border border-blue-100/90 flex items-center justify-center gap-4 select-none z-20">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-tight">90% Faster Close & Automated Reporting</p>
                    <p className="text-xs text-slate-500 font-normal leading-tight mt-1">Real-time ledger sync & automated compliance</p>
                  </div>
                </div>

                {/* Bottom Right Edge - Dark Emerald Icon, Rich Emerald BG Shadow */}
                <div className="absolute -bottom-8 right-4 lg:right-8 bg-white/95 backdrop-blur-md text-slate-900 px-6 py-3.5 rounded-2xl shadow-[0_20px_45px_-8px_rgba(16,185,129,0.28)] border border-emerald-100/90 flex items-center gap-4 select-none z-20">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/30 shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left border-l border-slate-100 pl-4">
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-tight">
                      Zero Midnight Reconciliations
                    </p>
                    <p className="text-xs text-slate-500 font-normal leading-tight mt-1">
                      Automated journal entries & end-of-day close
                    </p>
                  </div>
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
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-slate-50">
              <div className="absolute -top-[15%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50/10 via-purple-50/10 to-transparent blur-[140px]" />
              <div className="absolute -bottom-[15%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-emerald-50/10 via-cyan-50/10 to-transparent blur-[140px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-50/10 blur-[100px]" />
            </div>
          }
          title="Built for CFOs Who Can’t Afford Delays, Errors, or Blind Spots."
          desc="Manual reporting, delayed month-end close, and lack of real-time visibility keep CFOs stuck in operational challenges. AI-powered NetSuite transforms finance operations with intelligent automation, real-time dashboards, predictive analytics, streamlined compliance, and a single source of truth for scalable growth."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[95%] -z-10 blur-[120px] opacity-35 select-none pointer-events-none">
                <div className="absolute inset-0 animate-pulse">
                  <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-blue-400/30 rounded-full blur-[60px]" />
                  <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-cyan-400/30 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-indigo-400/30 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-emerald-400/30 rounded-full blur-[60px]" />
                </div>
              </div>

              {/* Image Card Container Wrapping Image - Medium Size, Clean White Glass BG */}
              <div className="relative w-[100%] lg:w-[105%] xl:w-[110%] max-w-none flex justify-center lg:justify-end p-1.5 lg:p-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.18)]">

                {/* Inner Image Frame */}
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner bg-slate-50/50">
                  <Image
                    src="/images/lap/happy_cfo_netsuite_office.webp"
                    alt="Happy Executive CFO in Oracle NetSuite Office"
                    width={1500}
                    height={1000}
                    className="w-full h-auto rounded-xl object-contain filter drop-shadow-[0_12px_24px_rgba(37,99,235,0.18)] transition-transform duration-700 hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={85}
                  />
                </div>

                {/* Top-Right Glass Executive Card (Slides down slowly from top after image load) */}
                <motion.div
                  initial={{ opacity: 0, y: -45 }}
                  animate={activeIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -45 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute -top-6 right-2 lg:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-indigo-100/90 flex items-center gap-3.5 select-none z-20 max-w-[240px] sm:max-w-[280px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Real-Time Visibility</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">Single source of truth</p>
                  </div>
                </motion.div>

                {/* Bottom-Left Compliance Badge (Slides up slowly from bottom after image load) */}
                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  animate={activeIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute -bottom-6 left-2 lg:left-4 bg-white/95 backdrop-blur-md text-slate-900 px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-emerald-200/90 flex items-center gap-3 select-none z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Automated Compliance</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">Streamlined audit trails</p>
                  </div>
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
          isActive={activeIndex === 4}
          gridClass="lg:grid-cols-[45%_55%]"
          customBg={
            <div className="absolute inset-0 overflow-hidden bg-white">
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
              {!isMobile && (
                <motion.div
                  animate={{ x: [-200, 1600] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-32 bg-linear-to-r from-transparent via-blue-600/5 to-transparent skew-x-12 pointer-events-none"
                />
              )}
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
          title="CFOs Need More Than Reports. They Need Real-Time Intelligence."
          desc="Make faster, data-driven decisions with AI-powered forecasting, live dashboards, automated MIS reporting, and real-time analytics. NetSuite transforms finance operations into a strategic command center for smarter planning and confident decision-making."
          cta="Book a Demo"
          link="#contact-form"
          showOverlay={false}
          textColor="dark"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Animated background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[95%] -z-10 blur-[130px] opacity-40 select-none pointer-events-none">
                <div className="absolute inset-0 animate-pulse">
                  <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[60px]" />
                  <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-cyan-500/30 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-indigo-600/30 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-teal-400/30 rounded-full blur-[60px]" />
                </div>
              </div>

              {/* Strategic Command Frame Wrapping Image - Medium Sizing */}
              <div className="relative w-[95%] lg:w-[102%] xl:w-[106%] max-w-none flex justify-center lg:justify-end mr-0 lg:mr-2 p-1.5 lg:p-2 bg-linear-to-br from-white/95 via-blue-50/70 to-slate-100/90 backdrop-blur-xl rounded-2xl border border-blue-200/80 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.2)]">

                {/* Right Indigo Curved Scribble Arrow facing Top-Right Card */}
                <svg className="absolute -top-4 -right-7 w-16 h-16 text-blue-600 pointer-events-none z-30 opacity-90" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M48,46 Q52,14 26,12" />
                  <path d="M34,6 L24,12 L32,20" />
                </svg>

                {/* Bottom Cyan Curved Scribble Arrow facing Bottom-Left Card */}
                <svg className="absolute -bottom-8 -left-6 w-16 h-16 text-cyan-500 pointer-events-none z-30 opacity-90" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12,10 Q6,42 36,46" />
                  <path d="M28,52 L38,46 L30,38" />
                </svg>

                {/* Inner Image Frame - Cropped top & bottom */}
                <div className="relative w-full h-[260px] sm:h-[310px] lg:h-[350px] overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner bg-slate-950/20">
                  <Image
                    src="/images/lap/netsuite_cfo_predictive_cashflow.webp"
                    alt="CFO Using Oracle NetSuite AI Financial Command Center & Cash Flow Forecast"
                    width={1500}
                    height={1000}
                    className="w-full h-full rounded-2xl object-cover object-center filter drop-shadow-[0_16px_32px_rgba(37,99,235,0.22)] transition-transform duration-700 hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    quality={85}
                  />

                  {/* Pulsing AI Intelligence Radar Nodes on Wall Screen */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[22%] left-[28%] w-5 h-5 bg-cyan-400 rounded-full blur-sm border border-white"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[38%] left-[42%] w-4 h-4 bg-emerald-400 rounded-full blur-sm border border-white"
                  />
                </div>

                {/* Top-Right Card: Faster Decisions (Still/Static Card) */}
                <div className="absolute -top-6 right-3 lg:right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_20px_45px_-8px_rgba(37,99,235,0.28)] border border-blue-200/90 flex items-center gap-3.5 select-none z-20 max-w-[250px] sm:max-w-[290px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">10x Faster Decisions</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-normal leading-tight mt-0.5">Automated MIS & Live Intelligence</p>
                  </div>
                </div>

                {/* Bottom-Left Card: AI Cash Flow Forecast (Still/Static Card) */}
                <div className="absolute -bottom-7 left-3 lg:left-6 bg-white/95 backdrop-blur-md text-slate-900 px-5 py-3.5 rounded-2xl shadow-[0_20px_45px_-8px_rgba(6,182,212,0.28)] border border-cyan-200/90 flex items-center gap-3.5 select-none z-20 max-w-[280px] sm:max-w-[320px]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left border-l border-slate-100 pl-3">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">AI Cash Flow Forecast</p>
                  </div>
                </div>

              </div>
            </div>
          }
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
          title="Turn Compliance Stress Into Automated Confidence."
          desc="Automate GST, TDS, e-Invoicing, approvals, audit trails, revenue recognition, and financial controls with AI-driven workflows in one unified ERP. Reduce compliance risk, eliminate manual dependencies, and stay audit-ready at all times."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={
            <NSComplianceCardDeck isActive={activeIndex === 5} />
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
              {!isMobile && (
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              )}
            </div>
          }
          title="Built to Support Growth Without Operational Chaos."
          desc="As your business expands, disconnected tools and manual processes become harder to manage. AI-powered NetSuite provides a scalable cloud ERP platform that supports growing teams, increasing transactions, and evolving business models—without adding complexity."
          cta="Book a Demo"
          link="#contact-form"
          customVisual={
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[95%] -z-10 blur-[120px] opacity-35 select-none pointer-events-none">
                <div className="absolute inset-0 animate-pulse">
                  <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-indigo-300 rounded-full blur-[60px]" />
                  <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-blue-300 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-purple-300 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-cyan-300 rounded-full blur-[60px]" />
                </div>
              </div>

              {/* Clean Laptop Image without background card/border - Large Prominent Size */}
              <div className="relative w-[138%] lg:w-[146%] xl:w-[154%] max-w-none flex justify-center lg:justify-end -mr-[6%] lg:-mr-[12%] xl:-mr-[16%]">
                <Image
                  src="/images/lap/netsuitelap2.webp"
                  alt="NetSuite for IT and ITES"
                  width={1900}
                  height={1900}
                  className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(99,102,241,0.25)] transition-transform duration-700 hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  quality={85}
                />
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

"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

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

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder - Simple and Fast */
            <div className="relative h-full w-full flex items-center">
              <Image
                src="/images/Background/herobluebg.webp"
                alt="NetSuite Background"
                fill
                priority
                fetchPriority="high"
                className="object-cover -z-10"
                sizes="100vw"
                quality={75}
              />

              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-4xl lg:text-4xl font-medium leading-snug text-gray-900">
                    NetSuite ERP Solutions
                    <br />
                    <span className="text-2xl sm:text-4xl lg:text-4xl font-medium text-gray-900">
                      For Modern Businesses
                    </span>
                  </h1>

                  <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
                    Run finance, operations & reporting in a single connected platform.
                  </p>

                  <div className="mt-8 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
                    <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                      Explore NetSuite ERP
                    </button>
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
                  bg="/images/Background/herobluebg.webp"
                  title="NetSuite ERP Solutions"
                  subtitle="For Modern Businesses"
                  desc="Run finance, operations & reporting in a single connected platform."
                  cta="Explore NetSuite ERP"
                  image="/images/Dashboard/netsuitedash2.webp"
                  showOverlay={false}
                  textColor="dark"
                  priority={true}
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 1}
                  bg="/images/Background/teambg.webp"
                  title="CFO Automation"
                  subtitle="Smarter Finance. Faster Growth"
                  desc="Automate closing, approvals & compliance—focus on strategy."
                  cta="Upgrade CFO Operations"
                  showOverlay={true}
                  textColor="light"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 2}
                  bg="/images/Background/teambg2.webp"
                  title="Maximize NetSuite Efficiency"
                  subtitle="Faster Data. Smarter Decisions"
                  desc="Optimize performance, automate workflows, and eliminate bottlenecks."
                  cta="Optimize Your NetSuite"
                  showOverlay={true}
                  textColor="light"
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
  title,
  subtitle,
  desc,
  cta,
  image,
  showOverlay = true,
  textColor = 'light',
  priority = false,
  isActive = false,
}: any) => {
  return (
    <div className="relative h-full w-full flex items-center">
      <Image
        src={bg}
        alt="Hero Background"
        fill
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        className="object-cover -z-10"
        sizes="100vw"
        quality={75}
      />
      
      {showOverlay && (
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="max-w-2xl text-left">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className={`text-4xl sm:text-4xl lg:text-4xl font-medium leading-snug ${
                  textColor === 'dark' ? 'text-gray-900' : 'text-white'
                }`}>
                  {title}
                  <br />
                  <span className={`text-2xl sm:text-4xl lg:text-4xl font-medium ${
                    textColor === 'dark' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {subtitle}
                  </span>
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className={`mt-3 text-base sm:text-lg font-medium ${
                  textColor === 'dark' ? 'text-gray-600' : 'text-white/80'
                }`}>{desc}</motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="mt-8 relative inline-flex group"
                >
                  <div className={`absolute inset-0 rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700`} />
                  <button className="bg-gray-900 text-white relative px-8 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform duration-300">
                    {cta}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          
        {image && (
          <div className="hidden lg:flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={1600}
                    height={1400}
                    priority={priority}
                    className="w-full max-w-4xl object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

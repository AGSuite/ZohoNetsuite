"use client";

import React from "react";
import Image from "next/image";
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
    <div className="relative w-full overflow-hidden bg-white">
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder - Simple and Fast */
            <div className="relative h-full w-full flex items-center">
              <Image
                src="/images/Background/heropinkbg.webp"
                alt="Zoho Background"
                fill
                priority
                fetchPriority="high"
                className="object-cover -z-10"
                sizes="100vw"
              />

              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-4xl lg:text-4xl font-medium leading-snug text-gray-900">
                    Zoho Cloud Suite
                    <br />
                    <span className="text-2xl sm:text-4xl lg:text-4xl font-medium text-gray-900">
                      All-in-One Platform for Business
                    </span>
                  </h1>

                  <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
                    Streamline CRM, projects & operations in a unified Zoho ecosystem.
                  </p>

                  <div className="mt-8 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
                    <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                      Explore Zoho Suite
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
              {/* SLIDE 1 - Zoho Cloud Suite */}
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 0}
                  bg="/images/Background/heropinkbg.webp"
                  title="Zoho Cloud Suite"
                  subtitle="All-in-One Platform for Business"
                  desc="Streamline CRM, projects & operations in a unified Zoho ecosystem."
                  cta="Explore Zoho Suite"
                  image="/images/Dashboard/zohodash.webp"
                  showOverlay={false}
                  textColor="dark"
                  priority={true}
                />
              </SwiperSlide>

              {/* SLIDE 2 - Zoho CRM */}
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 1}
                  bg="/images/Background/teambg.webp"
                  title="Zoho CRM Excellence"
                  subtitle="Transform Customer Relationships"
                  desc="Boost sales productivity with intelligent automation and insights."
                  cta="Discover Zoho CRM"
                  showOverlay={true}
                  textColor="light"
                />
              </SwiperSlide>

              {/* SLIDE 3 - Business Automation */}
              <SwiperSlide>
                <HeroSlide
                  isActive={activeIndex === 2}
                  bg="/images/Background/teambg2.webp"
                  title="Complete Business Automation"
                  subtitle="Work Smarter, Not Harder"
                  desc="Automate workflows across HR, finance, and operations with Zoho One."
                  cta="Automate Your Business"
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

/* ---------------- HELPERS ---------------- */

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
      {/* Optimized Background Image */}
      <Image
        src={bg}
        alt="Hero Background"
        fill
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        className="object-cover -z-10"
        sizes="100vw"
      />
      
      {/* Gradient overlay: dark left → light center → transparent right */}
      {showOverlay && (
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl text-left">
          <AnimatePresence>
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
                  <div className={`absolute inset-0 rounded-xl bg-linear-to-r ${textColor === 'light' ? 'from-[#E91E63] via-[#FF4081] to-[#F06292]' : 'from-[#E91E63] via-[#FF4081] to-[#F06292]'} opacity-70 blur-lg group-hover:opacity-100 transition duration-700`} />
                  <button className="bg-gray-900 text-white relative px-8 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform duration-300">
                    {cta}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          
        {/* Right Image (if provided) */}
        {image && (
          <div className="hidden lg:flex justify-center lg:justify-end">
            <AnimatePresence>
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

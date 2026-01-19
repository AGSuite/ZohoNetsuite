"use client";

import Image from "next/image";
import { Wrench, Users, TrendingUp, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ----------------------------------------------------
   🔢 COUNTER (Restart Every Time Section Appears)
---------------------------------------------------- */
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

const Counter = ({ end, suffix = "", duration = 2000, inView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const frames = duration / 16;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = ease(frame / frames);
      setCount(Math.round(progress * end));

      if (frame >= frames) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration, inView]);

  return (
    <div className="flex items-center justify-center">
      <span className="text-gray-900 text-3xl md:text-4xl font-semibold">
        {count}
      </span>
      <span className="text-gray-900 text-2xl md:text-3xl ml-1 font-bold">
        {suffix}
      </span>
    </div>
  );
};

/* ----------------------------------------------------
   🌈 PASTEL MULTI-SIDE GLOW SHADOW (Pink + Orange + Blue)
---------------------------------------------------- */
const glowShadow =
  "shadow-[0_-6px_18px_rgba(255,150,200,0.18),_0_8px_20px_rgba(255,180,120,0.18),_-8px_0_20px_rgba(150,200,255,0.18),_8px_0_20px_rgba(255,185,140,0.18)]";

/* ----------------------------------------------------
   🌟 MAIN SECTION WITH FRAMER MOTION ANIMATIONS
---------------------------------------------------- */
export default function NSMetrics() {
  const [isMobile, setIsMobile] = useState(false);

  // Disable animations on mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* -----------------------------------------------
             LEFT: TEXT + METRICS — Comes From LEFT
          ------------------------------------------------ */}
          <motion.div
            ref={textRef}
            initial={isMobile ? {} : { opacity: 0, x: -50 }}
            animate={
              textInView && !isMobile
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >

            <h2 className="text-3xl sm:text-3xl lg:text-5xl font-medium text-gray-900 leading-tight mb-5">
              We Simplify Your <span className="text-blue-900">Business</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              AGSuite Technologies is a leading specific Oracle NetSuite Solution Provider, helping businesses implement, customize, and optimize the world’s #1 cloud ERP.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mt-4">
              We streamline finance, operations, and reporting to drive efficiency, visibility, and scalable growth.
            </p>

            {/* ---------------------------------------
               METRICS CARD (Glow + Animation From Left)
            ---------------------------------------- */}
            <motion.div
              ref={metricsRef}
              initial={isMobile ? {} : { opacity: 0, x: -40 }}
              animate={
                metricsInView && !isMobile
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -40 }
              }
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className={`mt-6 sm:mt-8 bg-white/90 rounded-3xl p-6 border border-gray-100 ${glowShadow}`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="text-center space-y-1">
                  <Users className="w-9 h-9 text-rose-500 mx-auto mb-1" />
                  <Counter end={180} suffix="+" inView={metricsInView} />
                  <p className="text-rose-600 text-sm">Enterprises</p>
                </div>

                <div className="text-center space-y-1">
                  <Wrench className="w-9 h-9 text-purple-500 mx-auto mb-1" />
                  <Counter end={50} suffix="+" inView={metricsInView} />
                  <p className="text-purple-600 text-sm">Experts</p>
                </div>

                <div className="text-center space-y-1">
                  <Globe className="w-9 h-9 text-blue-500 mx-auto mb-1" />
                  <Counter end={50} suffix="+" inView={metricsInView} />
                  <p className="text-blue-600 text-sm">Rollouts</p>
                </div>

                <div className="text-center space-y-1">
                  <TrendingUp className="w-9 h-9 text-amber-500 mx-auto mb-1" />
                  <Counter end={15} suffix="+" inView={metricsInView} />
                  <p className="text-amber-600 text-sm">Years</p>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* -----------------------------------------------
             RIGHT: IMAGE COLLAGE — Comes From RIGHT
          ------------------------------------------------ */}
          <motion.div
            ref={imageRef}
            initial={isMobile ? {} : { opacity: 0, x: 50 }}
            animate={
              imageInView && !isMobile
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Mobile View - Single Image */}
            <div className="block md:hidden w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className={`h-64 sm:h-80 rounded-3xl overflow-hidden ${glowShadow}`}
              >
                <Image
                  src="/images/people/laptopgirl.webp"
                  alt="NetSuite Team"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </div>

            {/* Desktop View - Image Collage Grid */}
            <div className="hidden md:grid grid-cols-[1.7fr_1.3fr] gap-4 sm:gap-6 w-full max-w-lg lg:max-w-xl">

              {/* Top Left Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imageInView && !isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className={`h-36 sm:h-44 lg:h-48 rounded-3xl overflow-hidden ${glowShadow}`}
              >
                <Image
                  src="/images/people/fourteam.webp"
                  alt="NetSuite Team"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                  sizes="33vw"
                />
              </motion.div>

              {/* Tall Right Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imageInView && !isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className={`row-span-2 h-64 sm:h-80 lg:h-[430px] rounded-3xl overflow-hidden ${glowShadow}`}
              >
                <Image
                  src="/images/people/laptopgirl.webp"
                  alt="NetSuite Vision"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                  sizes="33vw"
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imageInView && !isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
                className={`h-56 sm:h-72 lg:h-[340px] rounded-3xl overflow-hidden ${glowShadow}`}
              >
                <Image
                  src="/images/people/threeteam.webp"
                  alt="Collaboration"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                  sizes="50vw"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

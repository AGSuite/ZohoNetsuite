"use client";

import React, { memo, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Globe2,
  Briefcase,
  Target,
  Award,
  Heart,
  ArrowUpRight,
  RefreshCcw,
  Users,
  Building2,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import LazySection from "@/app/components/shared/LazySection";

// Dynamically import map component with no SSR to pull simple-maps & d3 out of the main page bundle
const GlobalOfficeMap = dynamic(() => import("../components/GlobalOfficeMap"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-3xl" />
});

const FooterContactForm = dynamic(() => import("@/app/components/shared/FooterContactForm"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-3xl" />
});

const NSCustomerSuccess = dynamic(() => import("../components/NSCustomerSuccess"), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-slate-50/50 animate-pulse rounded-3xl" />
});

// ---------------- Static Stars Data ----------------
const STATIC_STARS_100 = Array.from({ length: 100 }, (_, i) => {
  const w = ((i * 3 + 1) % 2) + 1;
  const top = (i * 17) % 100;
  const left = (i * 23) % 100;
  const opacity = 0.1 + ((i * 3) % 7) / 10;
  const duration = 4 + ((i * 11) % 6);
  const delay = (i * 13) % 5;
  const xRange = ((i * 19) % 30) - 15;
  return { width: `${w}px`, height: `${w}px`, top: `${top}%`, left: `${left}%`, opacity, duration, delay, xRange };
});

const STATIC_STARS_40 = Array.from({ length: 40 }, (_, i) => {
  const w = ((i * 7 + 1) % 2) + 1;
  const top = (i * 19) % 100;
  const left = (i * 29) % 100;
  const opacity = 0.1 + ((i * 3) % 5) / 10;
  const duration = 5 + ((i * 11) % 6);
  const delay = (i * 13) % 5;
  const xRange = ((i * 23) % 30) - 15;
  return { width: `${w}px`, height: `${w}px`, top: `${top}%`, left: `${left}%`, opacity, duration, delay, xRange };
});

const STATIC_STARS_20 = Array.from({ length: 20 }, (_, i) => {
  const w = ((i * 5 + 1) % 2) + 1;
  const top = (i * 23) % 100;
  const left = (i * 31) % 100;
  const opacity = 0.2 + ((i * 2) % 6) / 10;
  const duration = 3 + ((i * 7) % 5);
  const delay = (i * 17) % 5;
  const xRange = ((i * 29) % 30) - 15;
  return { width: `${w}px`, height: `${w}px`, top: `${top}%`, left: `${left}%`, opacity, duration, delay, xRange };
});

// ---------------- Lightweight CountUp ----------------
type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  inView: boolean;
};

const CountUp = memo(function CountUp({ end, duration = 2, suffix = "", inView }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endValue), 30);

    const timer = setInterval(() => {
      start += Math.ceil(endValue / (totalMiliseconds / incrementTime));
      if (start >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
});

// ---------------- Static data ----------------
const coreValues = [
  {
    title: "Integrity First",
    description: "We uphold the highest ethical standards, fostering trust through unwavering transparency, honesty, and accountability in every interaction.",
    image: "/images/aboutus/integrity.webp",
    icon: Heart,
  },
  {
    title: "Commitment to Excellence",
    description: "We are passionately dedicated to delivering excellence in all aspects of our services, setting rigorous standards for quality, efficiency, and client satisfaction, every step of the way",
    image: "/images/aboutus/handshake.webp",
    icon: Award,
  },
  {
    title: "Client-Centric Innovation",
    description: "We prioritize our clients through adept problem-solving and an unwavering focus on their needs. Our solutions go beyond expectations, creating tangible value and fostering enduring partnerships that fuel success and growth.",
    image: "/images/aboutus/client.webp",
    icon: Target,
  },
  {
    title: "Agile Adaptability",
    description: "Embracing change with a proactive mindset, we swiftly adapt to evolving landscapes, turning challenges into opportunities and driving success through continuous innovation",
    image: "/images/aboutus/niche.webp",
    icon: RefreshCcw,
  },
  {
    title: "Empowering Growth Culture",
    description: "Rooted in empathy, we cultivate a culture that values work-life balance, mutual respect, and collaborative teamwork. We champion personal development, both individually and collectively, for sustained success and fulfillment.",
    image: "/images/aboutus/niche1.webp",
    icon: Users,
  },
] as const;

type CounterItem = {
  label: string;
  value: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  suffix: string;
};

const counters: CounterItem[] = [
  { label: "Projects Completed", value: 700, icon: Briefcase, suffix: "+" },
  { label: "Global Customers", value: 250, icon: Building2, suffix: "+" },
  { label: "Industry Expertise", value: 15, icon: Target, suffix: "+" },
  { label: "Customer Retention", value: 84, icon: Heart, suffix: "%" },
  { label: "Years Experience", value: 15, icon: Rocket, suffix: "+" },
  { label: "Countries Serving", value: 10, icon: Globe2, suffix: "+" },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const wordItem: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const partnerLogos = [
  { logo: "/images/assets/affle%20tech.webp", name: "Affle", pad: 4 },
  { logo: "/images/assets/tyfone%20tech.webp", name: "Tyfone", pad: 4 },
  { logo: "/images/assets/airling%20tech.webp", name: "Airling", pad: 4 },
  { logo: "/images/netuite%20client%20images/videoverse.png", name: "VideoVerse", pad: 1, unopt: true },
  { logo: "/images/assets/quickheal%20tech.webp", name: "Quick Heal", pad: 7 },
  { logo: "/images/assets/control%20service.webp", name: "Control Svc", pad: 4 },
  { logo: "/images/netuite%20client%20images/uniacco.png", name: "UniAcco", pad: 4 },
  { logo: "/images/assets/dlz%20service.webp", name: "DLZ", pad: 4 },
  { logo: "/images/netuite%20client%20images/Indovance-new-logo.webp", name: "Indovance", pad: 5 },
  { logo: "/images/assets/pace%20services.webp", name: "Pace", pad: 4 },
  { logo: "/images/netuite%20client%20images/aidashlogo.png", name: "AiDash", pad: 4, unopt: true },
  { logo: "/images/netuite%20client%20images/controlcase.png", name: "ControlCase", pad: 4 },
  { logo: "/images/netuite%20client%20images/escalent.webp", name: "Escalent", pad: 5 },
  { logo: "/images/netuite%20client%20images/FINN-Logo(1).jpg", name: "Finn", pad: 4 },
  { logo: "/images/netuite%20client%20images/flatworld.png", name: "Flatworld", pad: 9 },
  { logo: "/images/netuite%20client%20images/image%20(13).png", name: "Coastal", pad: 4 },
  { logo: "/images/netuite%20client%20images/kale.png", name: "Kale", pad: 8 },
  { logo: "/images/netuite%20client%20images/keycraft.png", name: "Keycraft", pad: 8 },
  { logo: "/images/netuite%20client%20images/modaxo.png", name: "Modaxo", pad: 5 },
  { logo: "/images/netuite%20client%20images/prioritytire.png", name: "Priority Tire", pad: 5 },
  { logo: "/images/netuite%20client%20images/signal.png", name: "Signal", pad: 5, unopt: true },
  { logo: "/images/netuite%20client%20images/traxon.png", name: "Traxon", pad: 4 },
  { logo: "/images/netuite%20client%20images/tsi-logo.png", name: "TSI", pad: 4 },
  { logo: "/images/netuite%20client%20images/loylogic.png", name: "LoyLogic", pad: 2 },
];

function WhoWeAreSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT: Text and Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 text-left flex flex-col justify-center"
        >
          {/* Main Heading */}
          <motion.h2 variants={slideInLeft} className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Accelerating Digital  <br />Transformation with<br />
            <span className="italic font-serif">AI-Powered ERP

            </span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={slideInLeft} className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
            AGSuite Technologies is a trusted Oracle NetSuite Solution Provider helping modern businesses eliminate operational chaos, automate critical processes, and gain real-time visibility through AI-powered cloud ERP solutions. From finance and compliance to inventory, procurement, and reporting, we enable organizations to scale faster with smarter decision-making and connected business operations.          </motion.p>

          {/* Feature Cards */}
          <motion.div variants={slideInLeft} className="space-y-3 pt-2">
            {/* Oracle NetSuite Solution Provider */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base mb-0.5">Certified Oracle NetSuite Solution Partner</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Trusted Solution Provider with 15+ years of expertise in NetSuite implementation and optimization.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[900px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aboutus/Agsuitedoor.webp"
                alt="AGSuite Technologies Team"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StrategicPartnersSection() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#020617] via-[#010b2a] to-black overflow-hidden">
      {/* Background Star Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STATIC_STARS_100.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, star.xRange, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT: Heading, Subline, Logo */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
              >
                Certified Oracle NetSuite Solution Provider
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-base md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Backed by 15+ years of ERP expertise, we specialize in NetSuite implementation, customization, automation, and integrations delivering intelligent, scalable, and future-ready ERP solutions tailored for growing enterprises.              </motion.p>
            </div>

            {/* Logo right after subline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="bg-transparent p-4 rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                  alt="Oracle NetSuite Partner Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Animated Counters Section */}
          <div ref={statsRef} className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {counters.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden text-center"
                  >
                    {/* Decorative faint icon bg */}
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <item.icon className="w-16 h-16 text-white" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600 transition-colors duration-300 text-blue-400 group-hover:text-white mb-4 border border-white/5">
                        <item.icon className="w-7 h-7" strokeWidth={1.2} />
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-400 font-medium text-[11px] group-hover:text-gray-200 transition-colors uppercase tracking-widest pb-1">
                          {item.label}
                        </p>
                        <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                          <CountUp end={item.value} suffix={item.suffix} duration={3} inView={statsInView} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-14 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,250,251,0.8)_0%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 text-3xl md:text-5xl font-medium"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          ref={marqueeRef}
          initial={{ opacity: 0, y: 30 }}
          animate={marqueeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full overflow-hidden py-8"
        >
          <div className="animate-marquee whitespace-nowrap flex items-center" style={{ willChange: "transform" }}>
            {partnerLogos.concat(partnerLogos).map((logo, index) => {
              const p = logo.pad ?? 4;
              return (
                <div key={index} className="inline-flex px-4">
                  <div
                    className="flex h-20 w-44 sm:h-24 sm:w-52 items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white"
                    style={{ padding: `${p * 2}px ${p * 3}px` }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.logo}
                        alt={`${logo.name} logo`}
                        fill
                        sizes="(max-width: 640px) 100px, 150px"
                        className="object-contain transition-all duration-300"
                        unoptimized={logo.unopt === true}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 120s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function AwardsAndRecognitionSection() {
  return (
    <section className="relative py-0 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-700 to-blue-500 leading-tight tracking-tight">
              Recognized Excellence in
              <span className="block italic font-serif mt-1">NetSuite Solutions</span>
            </h2>
          </motion.div>

          {/* RIGHT: Award images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src="/images/awards/Partner of the Year.png"
                alt="NetSuite Partner of the Year Award"
                width={400}
                height={400}
                className="w-64 h-64 md:w-[320px] md:h-[320px] object-contain"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const leadersData = [
  {
    name: "Ankur Goyal",
    title: "CEO",
    image: "/images/people/Ankur.jpg",
    linkedin: "https://www.linkedin.com/in/ankurgoyal2/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Rajat Goyal",
    title: "Director",
    image: "/images/people/Rajat_v2.png",
    linkedin: "https://www.linkedin.com/in/rajat-goyal-9007a6101/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Nikhil Jain",
    title: "CTO",
    image: "/images/people/Nikhil.png",
    linkedin: "#",
    imgClass: "object-contain p-2.5",
  },
  {
    name: "Shailesh Punse",
    title: "Head of Sales & Marketing",
    image: "/images/people/Shailesh.jpg",
    linkedin: "https://www.linkedin.com/in/shailesh-punse-79771413/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Mayuri Bharadi",
    title: "Project Delivery Manager",
    image: "/images/people/mayuri%20mam.png",
    linkedin: "#",
    imgClass: "object-contain p-2.5",
  }
];

function OurLeaders() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto items-stretch">
      {leadersData.map((leader, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-500 flex flex-col justify-between text-left w-full hover:-translate-y-2.5 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300"
        >
          {/* Top Accent Line Glow */}
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:via-blue-600 transition-all duration-500" />

          {/* Profile Image Box - Light Color Shadow on Hover ONLY */}
          <div className="relative w-full aspect-square max-w-[200px] mb-4 rounded-2xl overflow-hidden border border-gray-200 bg-slate-50 shadow-none group-hover:shadow-xl group-hover:shadow-blue-400/35 group-hover:border-blue-400/50 p-1 mx-auto flex items-center justify-center transition-all duration-500">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className={`${leader.imgClass} transition-transform duration-700 group-hover:scale-105`}
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>
          </div>

          {/* Leader Info Container */}
          <div className="w-full flex flex-col justify-between flex-grow pt-1">
            {/* Name on Left (Dark Blue Color), Social LinkedIn Icon on Right */}
            <div className="flex items-center justify-between gap-2 mb-1 w-full">
              <h3 className="text-base md:text-lg font-bold text-[#001e4d] group-hover:text-blue-600 transition-colors duration-300 text-left truncate">
                {leader.name}
              </h3>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#0077B5]/10 group-hover:bg-[#0077B5] text-[#0077B5] group-hover:text-white transition-all duration-300 shrink-0"
                aria-label={`${leader.name} LinkedIn`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Designation on Left */}
            <div className="w-full text-left">
              <span className="block text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-snug text-left">
                {leader.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AboutUsClient() {
  return (
    <>
      <LazySection height="600px">
        <WhoWeAreSection />
      </LazySection>

      <LazySection height="600px">
        <StrategicPartnersSection />
      </LazySection>

      <LazySection height="400px">
        <ClientsSection />
      </LazySection>

      <LazySection height="400px">
        <AwardsAndRecognitionSection />
      </LazySection>

      <LazySection height="500px">
        <section id="testimonials" className="bg-white">
          <NSCustomerSuccess />
        </section>
      </LazySection>

      {/* Mission / Vision */}
      <LazySection height="800px">
        <section className="relative py-20 w-full bg-white overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-16 space-y-28">
            {/* OUR MISSION */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 relative flex justify-center items-center pb-12"
              >
                <div className="relative rounded-2xl w-full max-w-[500px]">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/images/aboutus/ns_mission.png"
                      alt="AGSuite Mission"
                      width={700}
                      height={350}
                      className="object-cover w-full h-[300px] lg:h-[350px]"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-red-50 via-blue-50 to-emerald-50 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 w-[75%] flex items-center gap-4 border border-white/50">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-red-100/50">
                      <svg className="w-7 h-7 text-red-600 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7a5 5 0 00-5 5v5h5v-5H5.5A2.5 2.5 0 017 9.5V7zm12 0a5 5 0 00-5 5v5h5v-5h-1.5A2.5 2.5 0 0119 9.5V7z" />
                      </svg>
                    </div>
                    <div className="flex flex-col leading-snug">
                      <p className="text-[15px] font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                        Empowering businesses with NetSuite Cloud ERP.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 flex flex-col justify-center text-center lg:text-left"
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 bg-gradient-to-r from-[#000814] via-[#001535] to-black bg-clip-text text-transparent">Our Mission</motion.h2>
                <motion.div variants={wordContainer} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {(() => {
                    const text = "AGSuite Technologies thrives on empowering businesses through cutting-edge technology solutions, specializing in Oracle NetSuite ERP. Our passion is to streamline operations, enhance efficiency, and drive sustainable growth for our clients. Our commitment lies in being a catalyst for positive transformation, helping clients achieve their strategic goals in the dynamic digital landscape.";
                    const words = text.split(" ");
                    const groups = [];
                    for (let i = 0; i < words.length; i += 3) {
                      groups.push(words.slice(i, i + 3).join(" "));
                    }
                    return groups.map((group, i) => (
                      <motion.span key={i} variants={wordItem} className="inline-block mr-[0.35em]">
                        {group}
                      </motion.span>
                    ));
                  })()}
                </motion.div>
              </motion.div>
            </div>

            {/* OUR VISION */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 flex flex-col justify-center text-center lg:text-left"
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 bg-gradient-to-r from-[#000814] via-[#001535] to-black bg-clip-text text-transparent">Our Vision</motion.h2>
                <motion.div variants={wordContainer} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {(() => {
                    const text = "AGSuite Technologies envisions global leadership in NetSuite consulting, setting industry benchmarks for innovation, integrity, and client satisfaction. We aspire to be the preferred choice, renowned for transformative NetSuite solutions, agility, and empathetic growth. Our vision is to forge lasting partnerships, defining the zenith of excellence in the dynamic field of ERP technology.";
                    const words = text.split(" ");
                    const groups = [];
                    for (let i = 0; i < words.length; i += 3) {
                      groups.push(words.slice(i, i + 3).join(" "));
                    }
                    return groups.map((group, i) => (
                      <motion.span key={i} variants={wordItem} className="inline-block mr-[0.35em]">
                        {group}
                      </motion.span>
                    ));
                  })()}
                </motion.div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 relative flex justify-center items-center"
              >
                <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-[400px] relative z-10">
                  <Image
                    src="/images/aboutus/ns_vision.png"
                    alt="AGSuite Vision"
                    width={500}
                    height={350}
                    className="object-cover w-full h-[300px] lg:h-[350px] rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>

                <div className="absolute left-[10px] bottom-[20px] bg-gradient-to-br from-red-50/95 via-blue-50/95 to-emerald-50/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl max-w-[300px] z-20 border border-white/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-red-100/50">
                      <svg className="w-8 h-8 text-red-600 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7a5 5 0 00-5 5v5h5v-5H5.5A2.5 2.5 0 017 9.5V7zm12 0a5 5 0 00-5 5v5h5v-5h-1.5A2.5 2.5 0 0119 9.5V7z" />
                      </svg>
                    </div>
                    <p className="text-[17px] font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent leading-relaxed pt-1">
                      To lead globally with innovative, client-focused Cloud ERP technology
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* OUR NICHE */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 relative flex justify-center items-center"
              >
                <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-[500px]">
                  <Image
                    src="/images/aboutus/ns_niche1.png"
                    alt="AGSuite Niche"
                    width={600}
                    height={350}
                    className="object-cover w-full h-[300px] lg:h-[350px] rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>

                <div className="hidden lg:block absolute w-[55%] max-w-[290px] top-1/2 right-[-6%] transform -translate-y-1/2 rounded-2xl border-16 border-white overflow-hidden">
                  <Image
                    src="/images/aboutus/ns_niche2.png"
                    alt="AGSuite Niche 2"
                    width={400}
                    height={300}
                    className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 290px"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 flex flex-col justify-center text-center lg:text-left"
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 bg-gradient-to-r from-[#000814] via-[#001535] to-black bg-clip-text text-transparent">Our Niche</motion.h2>
                <motion.div variants={wordContainer} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {(() => {
                    const text = "AGSuite Technologies excels in Oracle NetSuite Implementation, offering top-notch Technology Consulting Services. Our specialization includes NetSuite Customizations, Managed Services, and Integrations, ensuring tailored solutions for clients. With a focus on client success, we leverage our expertise to lead in the dynamic landscape of cloud-based business solutions.";
                    const words = text.split(" ");
                    const groups = [];
                    for (let i = 0; i < words.length; i += 3) {
                      groups.push(words.slice(i, i + 3).join(" "));
                    }
                    return groups.map((group, i) => (
                      <motion.span key={i} variants={wordItem} className="inline-block mr-[0.35em]">
                        {group}
                      </motion.span>
                    ));
                  })()}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection height="400px">
        <section
          className="relative w-full py-24 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/aboutus/CTA2.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-0" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 text-left"
          >
            <div className="max-w-2xl">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white leading-tight">
                Scale Smarter with <span className="text-blue-400">AI-Driven Oracle NetSuite ERP</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg mb-8 text-gray-200 leading-relaxed max-w-xl">
                Partner with AGSuite Technologies to streamline operations, improve decision-making, and build a connected, future-ready enterprise powered by intelligent ERP automation.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex">
                <Link
                  href="#contact-form"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg shadow-blue-900/40"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </LazySection>

      <LazySection height="600px">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mt-2">
                Our Core Values
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
              {coreValues.map((val) => (
                <motion.div
                  variants={fadeInUp}
                  key={val.title}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200 hover:bg-blue-900 hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="flex flex-col justify-between p-6 pb-0 min-h-[170px] transition-colors duration-500">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-medium text-gray-900 group-hover:text-white transition-colors duration-500">
                          {val.title}
                        </h3>
                        <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors duration-500">
                          {val.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="relative mt-5 overflow-hidden rounded-2xl mx-6 mb-6">
                    <Image
                      src={val.image}
                      alt={val.title}
                      width={400}
                      height={260}
                      className="rounded-2xl w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />

                    <div className="absolute bottom-1 left-4 bg-white group-hover:bg-blue-600 border border-gray-200 group-hover:border-blue-900 p-3 rounded-xl shadow-sm transition-all duration-500">
                      <val.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* Global Leaders Section */}
      <LazySection height="600px">
        <section id="leaders" className="relative py-24 bg-black bg-gradient-to-b from-black via-[#050b18] to-black overflow-hidden">
          {/* Moving Stars Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {STATIC_STARS_40.map((star, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: star.width,
                  height: star.height,
                  top: star.top,
                  left: star.left,
                  opacity: star.opacity,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, star.xRange, 0],
                  opacity: [0.1, 0.8, 0.1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: star.delay,
                }}
              />
            ))}
          </div>

          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 blur-[150px] rounded-full -z-0 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col items-center text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              Meet Our Visionary Leaders
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl text-blue-200 mb-10 text-base md:text-lg leading-relaxed">
              Driving innovation and excellence with a passion for transformative technology.
            </motion.p>

            <OurLeaders />
          </motion.div>
        </section>
      </LazySection>

      {/* Global Presence Section */}
      <LazySection height="500px">
        <section id="offices" className="relative pt-24 pb-10 bg-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600"
            >
              Our Global Presence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-2xl text-gray-500 mb-6 text-base md:text-lg leading-relaxed"
            >
              Delivering excellence across continents with a strong and growing worldwide footprint.
            </motion.p>

            <div className="relative w-full overflow-hidden group">
              <GlobalOfficeMap contactPath="/netsuite/contact" />
            </div>
          </div>
        </section>
      </LazySection>

      {/* Premium CTA Section */}
      <LazySection height="300px">
        <section className=" pb-0 bg-white overflow-hidden w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden w-full bg-gradient-to-br from-[#0033ad] via-[#0055ff] to-[#00c2cb] px-6 md:px-26 py-24 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
          >
            {/* Background Star Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {STATIC_STARS_20.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: star.width,
                    height: star.height,
                    top: star.top,
                    left: star.left,
                    opacity: star.opacity,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, star.xRange, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: star.delay,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-3xl text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">Ready to scale your enterprise?</h3>
              <p className="text-white/90 text-lg md:text-xl font-medium">Join 75M+ users running their business on the world&apos;s most comprehensive cloud suite.</p>
            </div>

            <Link
              href="#contact-form"
              className="relative z-10 px-12 py-5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group text-xl whitespace-nowrap active:scale-95 shrink-0"
            >
              Get Started <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </LazySection>

      <FooterContactForm platform="NetSuite" />
    </>
  );
}

'use client';

import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Rocket,
  Globe2,
  Pause,
  Play,
  Target,
  Award,
  Heart,
  ArrowUpRight,
  Trophy,
  RefreshCcw,
  Users,
  UserCog,
  Building2,
  MapPin,
  Mail,
  Linkedin,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { motion, useAnimation, type Variants, useScroll, useTransform } from 'framer-motion';
import ContactFormDesign4 from '../components/ContactFormDesign4';
import NSCustomerSuccess from '../components/NSCustomerSuccess';
import { AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import GlobalOfficeMap from '../components/GlobalOfficeMap';




// ---------------- Address Data ----------------

interface Address {
  city: string;
  state: string;
  address: string;
  email?: string;
  label: string;
}

interface OfficeData {
  [key: string]: Address[];
}

const officeData: OfficeData = {
  INDIA: [
    {
      label: 'Pune, INDIA',
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Office No. 1110, 11th floor, Gera’s Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057.',
    },
    {
      label: 'Mumbai Location',
      city: 'Mumbai',
      state: 'Maharashtra',
      address: '3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051',
    },
    {
      label: 'Bangalore Location',
      city: 'Bangalore',
      state: 'Karnataka',
      address: 'Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001',
    },
    {
      label: 'Hyderabad Location',
      city: 'Hyderabad',
      state: 'Telangana',
      address: '6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq nagar, Hyderabad, Telangana, INDIA – 500081',
    },
    {
      label: 'Gurugram Location',
      city: 'Gurugram',
      state: 'Haryana',
      address: '07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002',
    },
    {
      label: 'India Rajasthan',
      city: 'Udaipur',
      state: 'Rajasthan',
      address: 'F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001.',
    },
  ],
  USA: [
    {
      label: 'Florida, USA',
      city: 'Fort Myers',
      state: 'Florida',
      address: '6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966',
      email: 'contact@agsuitetech.com',
    },
  ],
  UK: [
    {
      label: 'Cornwall, UK',
      city: 'St Austell',
      state: 'Cornwall',
      address: 'The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR',
      email: 'contact@agsuitetech.com',
    },
  ],
};

// ---------------- Flip Counter ----------------

type FlipCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  inView: boolean;
  color?: string;
};

const FlipCounter = memo(function FlipCounter({
  end,
  duration = 3,
  suffix = '',
  inView,
  color = '#2563EB',
}: FlipCounterProps) {
  const padNumber = (num: number) => num.toString().padStart(2, '0');
  const numberStr = padNumber(end);
  const staticPart = numberStr.slice(0, -2);
  const startNum = end - 2 >= 0 ? end - 2 : 0;

  const rollingNumbers = useMemo(() => {
    const arr: string[] = [];
    for (let i = startNum; i <= end; i += 1) {
      arr.push(padNumber(i).slice(-2));
    }
    return arr;
  }, [end, startNum]);

  const [currentNumber, setCurrentNumber] = useState(padNumber(startNum));
  const [rollingIndex, setRollingIndex] = useState(0);

  useEffect(() => {
    if (!inView) {
      setRollingIndex(0);
      setCurrentNumber(padNumber(startNum));
      return;
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setCurrentNumber(rollingNumbers[rollingNumbers.length - 1]);
      return;
    }

    const stepMs = (duration * 1000) / Math.max(rollingNumbers.length, 1);
    const interval = window.setInterval(() => {
      setRollingIndex((prev) => {
        if (prev >= rollingNumbers.length - 1) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, stepMs);

    return () => window.clearInterval(interval);
  }, [inView, duration, rollingNumbers, startNum]);

  useEffect(() => {
    setCurrentNumber(rollingNumbers[rollingIndex]);
  }, [rollingIndex, rollingNumbers]);

  return (
    <div className="flex items-center justify-center text-3xl md:text-5xl font-medium" style={{ color }}>
      {staticPart && <span className="mr-1">{staticPart}</span>}
      <FlipNumbers
        height={45}
        width={30}
        color={color}
        background="transparent"
        play={inView}
        duration={duration / Math.max(rollingNumbers.length, 1)}
        numbers={currentNumber}
      />
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
});

// ---------------- Static data (memoized) ----------------

const coreValues = [
  {
    title: 'Integrity First',
    description:
      'We uphold the highest ethical standards, fostering trust through unwavering transparency, honesty, and accountability in every interaction.',
    image: '/images/aboutus/integrity.webp',
    icon: Heart,
  },
  {
    title: 'Commitment to Excellence',
    description:
      'We are passionately dedicated to delivering excellence in all aspects of our services, setting rigorous standards for quality, efficiency, and client satisfaction, every step of the way',
    image: '/images/aboutus/handshake.webp',
    icon: Award,
  },
  {
    title: 'Client-Centric Innovation',
    description:
      'We prioritize our clients through adept problem-solving and an unwavering focus on their needs. Our solutions go beyond expectations, creating tangible value and fostering enduring partnerships that fuel success and growth.',
    image: '/images/aboutus/client.webp',
    icon: Target,
  },
  {
    title: 'Agile Adaptability',
    description:
      'Embracing change with a proactive mindset, we swiftly adapt to evolving landscapes, turning challenges into opportunities and driving success through continuous innovation',
    image: '/images/aboutus/niche.webp',
    icon: RefreshCcw,
  },
  {
    title: 'Empowering Growth Culture',
    description:
      'Rooted in empathy, we cultivate a culture that values work-life balance, mutual respect, and collaborative teamwork. We champion personal development, both individually and collectively, for sustained success and fulfillment.',
    image: '/images/aboutus/niche1.webp',
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
  { label: 'Projects Completed', value: 500, icon: Target, suffix: "+" },
  { label: 'Global Customers', value: 200, icon: Building2, suffix: "+" },
  { label: 'Industry Expertise', value: 10, icon: UserCog, suffix: "+" },
  { label: 'Customer Retention', value: 84, icon: Heart, suffix: "%" },
  { label: 'Years Experience', value: 15, icon: Rocket, suffix: "+" },
  { label: 'Countries Serving', value: 10, icon: Globe2, suffix: "+" },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const wordItem: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// ---------------- About stats section ----------------

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
            Empowering You<br />to Secure Your<br />
            <span className="italic font-serif">Business & Growth</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={slideInLeft} className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
            AGSuite Technologies is a trusted Oracle NetSuite Solution Provider helping businesses streamline operations with a unified cloud ERP platform. We specialize in NetSuite implementation, customization, and integration to improve efficiency and support scalable growth.
          </motion.p>

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
                <h3 className="text-gray-900 font-semibold text-base mb-0.5">Certified Oracle NetSuite Partner</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Trusted Solution Provider with 15+ years of expertise in NetSuite implementation and optimization.</p>
              </div>
            </div>

            {/* Comprehensive Services */}
            {/* <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base mb-0.5">End-to-End Business Solutions</h3>
                <p className="text-gray-600 text-xs leading-relaxed">From implementation to customization, integration, and ongoing support for sustainable growth.</p>
              </div>
            </div> */}
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
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const partnerLogos = [
  { logo: "/images/assets/affle%20tech.webp", name: "Affle" },
  { logo: "/images/assets/tyfone%20tech.webp", name: "Tyfone" },
  { logo: "/images/assets/airling%20tech.webp", name: "Airling" },
  { logo: "/images/assets/video%20verse%20tech.webp", name: "VideoVerse" },
  { logo: "/images/assets/quickheal%20tech.webp", name: "Quick Heal" },
  { logo: "/images/assets/uniAcco%20service.webp", name: "UniAcco" },
];

function StrategicPartnersSection() {
  const controls = useAnimation();
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    controls.start(statsInView ? 'visible' : 'hidden');
  }, [statsInView, controls]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#020617] via-[#010b2a] to-black overflow-hidden">
      {/* Background Star Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted && [...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
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
                className="text-gray-300 text-base md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                As a leading NetSuite Partner, we help you transform your business with scalable, innovative, and future-ready ERP solutions.
              </motion.p>
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
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner.webp"
                  alt="Oracle NetSuite Partner Logo"
                  width={400}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Animated Counters Section */}
          <div
            ref={statsRef}
            className="flex-1 w-full"
          >
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
                          <FlipCounter end={item.value} suffix={item.suffix} duration={3} inView={statsInView} color="#FFFFFF" />
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
  return (
    <section className="py-14 bg-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 text-2xl md:text-4xl lg:text-5xl font-medium"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex items-center gap-15 animate-marquee-slow whitespace-nowrap">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="flex-shrink-0  hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={180}
                  height={60}
                  className="h-18 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          animation: marquee-slow 10s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function AwardsAndRecognitionSection() {
  return (
    <section className="relative pt-0 pb-16 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
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

          {/* RIGHT: Award images horizontal - no card wrappers */}
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
                src="/images/awards/Netsuitepartneraward.png"
                alt="NetSuite Partner Award"
                width={280}
                height={280}
                className="w-64 h-64 object-contain "
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src="/images/awards/partnerofyear.png"
                alt="Partner of the Year Award"
                width={280}
                height={280}
                className="w-54 h-64 object-contain "
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutStatsSection() {
  return (
    <>
      <WhoWeAreSection />
      <StrategicPartnersSection />
      <ClientsSection />
      <section id="testimonials" className="bg-white">
        <NSCustomerSuccess />
      </section>
    </>
  );
}

// ---------------- Main component ----------------

export default function AboutClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState('/images/videos/aboutus.mp4');
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const padding = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect screen width and switch video for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc('/images/videos/mobileintro.mp4');
      } else {
        setVideoSrc('/images/videos/aboutus.mp4');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  return (
    <main id="main" role="main" className="flex flex-col bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[120vh] mt-0 overflow-visible isolate bg-white"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Background Video Container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center translate-z-0">
          <motion.div
            style={{
              scale,
              borderRadius,
              padding,
            }}
            className="relative w-full h-full overflow-hidden z-0 flex items-center justify-center bg-white"
          >
            <video
              key={videoSrc}
              ref={videoRef}
              className="w-full h-full object-cover shadow-2xl"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{ borderRadius: 'inherit' }}
            />

            {/* Radial Glow Effect */}
            <div
              className="pointer-events-none absolute -bottom-10 left-0 right-0 h-48 z-1"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(60% 60% at 30% 100%, rgba(37,99,235,0.25), transparent 70%)',
              }}
            />

            {/* Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              className="absolute bottom-10 right-10 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              suppressHydrationWarning={true}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Content (optional) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pointer-events-none">
          <h1 id="hero-title" className="sr-only">
            About AGSuite Technologies
          </h1>
        </div>
      </section>

      <AboutStatsSection />



      {/* Mission / Vision */}
      <section className="relative py-20 w-full bg-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            boxShadow: 'inset 0 0.5em 0.8em -1em #100000',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-16 space-y-28">
          {/* OUR MISSION */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left Image Section */}
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
                    src="/images/aboutus/mission3.webp"
                    alt="AGSuite Mission 1"
                    width={700}
                    height={300}
                    className="object-cover w-full h-100"
                  />
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-red-50 via-blue-50 to-emerald-50 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 w-[75%] flex items-center gap-4 border border-white/50">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-blue-600 stroke-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 7a5 5 0 00-5 5v5h5v-5H5.5A2.5 2.5 0 017 9.5V7zm12 0a5 5 0 00-5 5v5h5v-5h-1.5A2.5 2.5 0 0119 9.5V7z"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col leading-snug">
                    <p className="text-[15px] font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
                      Empowering businesses with scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text */}
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
                  const words = text.split(' ');
                  const groups = [];
                  for (let i = 0; i < words.length; i += 3) {
                    groups.push(words.slice(i, i + 3).join(' '));
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
                  const words = text.split(' ');
                  const groups = [];
                  for (let i = 0; i < words.length; i += 3) {
                    groups.push(words.slice(i, i + 3).join(' '));
                  }
                  return groups.map((group, i) => (
                    <motion.span key={i} variants={wordItem} className="inline-block mr-[0.35em]">
                      {group}
                    </motion.span>
                  ));
                })()}
              </motion.div>
            </motion.div>

            {/* Right Image Collage */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 relative flex justify-center items-center"
            >
              <svg
                className="absolute top-[-20px] right-[20px] w-22 h-22 text-black/50 z-0"
                viewBox="0 0 110 100"
                fill="currentColor"
              >
                {Array.from({ length: 10 }).map((_, row) =>
                  Array.from({ length: 10 }).map((_, col) => (
                    <circle key={`${row}-${col}`} cx={col * 10} cy={row * 10} r="2" />
                  )),
                )}
              </svg>

              <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-[400px] relative z-10">
                <Image
                  src="/images/aboutus/visiongirl.webp"
                  alt="AGSuite Vision"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              <div className="absolute left-[10px] bottom-[20px] bg-gradient-to-br from-red-50 via-blue-50 to-emerald-50 backdrop-blur-md p-5 rounded-2xl shadow-2xl max-w-[300px] z-20 border border-white/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600 stroke-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 7a5 5 0 00-5 5v5h5v-5H5.5A2.5 2.5 0 017 9.5V7zm12 0a5 5 0 00-5 5v5h5v-5h-1.5A2.5 2.5 0 0119 9.5V7z"
                      />
                    </svg>
                  </div>

                  <p className="text-[17px] font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent leading-relaxed pt-1">
                    To lead globally with innovative, client-focused technology
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* OUR NICHE */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left Image Section */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 relative flex justify-center items-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-[500px]">
                <Image
                  src="/images/aboutus/mission2.webp"
                  alt="AGSuite Niche 1"
                  width={600}
                  height={400}
                  className="object-cover w-full h-100 rounded-2xl"
                />
              </div>

              <div className="hidden lg:block absolute w-[55%] max-w-[290px] top-1/2 right-[-6%] transform -translate-y-1/2 rounded-2xl border-16 border-white overflow-hidden">
                <Image
                  src="/images/aboutus/vision.webp"
                  alt="AGSuite Niche 2"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Text */}
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
                  const words = text.split(' ');
                  const groups = [];
                  for (let i = 0; i < words.length; i += 3) {
                    groups.push(words.slice(i, i + 3).join(' '));
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

      <section
        className="relative w-full py-24 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/aboutus/CTA2.webp')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Gradient Overlay - Dark on left, lighter in middle, very little on right */}
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
              Empowering Global Enterprises with <span className="text-blue-400">Oracle NetSuite</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-lg mb-8 text-gray-200 leading-relaxed max-w-xl">
              Join AGSuite Technologies in driving innovation and operational excellence.
              Our expert consultants are ready to help you scale your business with the power of the cloud.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex">
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg shadow-blue-900/40"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

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




      {/* Global Leaders Section - dark theme with stars */}
      <section id="leaders" className="relative py-24 bg-gradient-to-br from-[#000814] via-[#001535] to-[#000814] overflow-hidden">
        {/* Moving Stars Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isMounted && [...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.8, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -z-0 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white"
          >
            Meet Our Visionary Leaders
          </motion.h2>

          <motion.p variants={fadeInUp} className="max-w-2xl text-blue-200 mb-10 text-base md:text-lg leading-relaxed">
            Driving innovation and excellence with a passion for transformative technology.
          </motion.p>

          <OurLeaders themeColor="blue" />
        </motion.div>
      </section>



      {/* Global Presence Section - white theme */}
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
            className="max-w-2xl text-gray-500 mb-12 text-base md:text-lg leading-relaxed"
          >
            Delivering excellence across continents with a strong and growing worldwide footprint.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-9xl overflow-hidden"
          >
            <GlobalOfficeMap />
          </motion.div>


        </div>
      </section>

      {/* Awards Recognition Section */}
      <AwardsAndRecognitionSection />

      {/* <section id="contact" className=" bg-white">
        <ContactFormDesign4 />
      </section> */}

      {/* Premium CTA Section */}
      {/* Premium CTA Section */}
      <section className=" pb-0 bg-white overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden w-full bg-gradient-to-br from-[#0033ad] via-[#0055ff] to-[#00c2cb] px-6 md:px-26 py-24 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
        >
          {/* Background Star Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isMounted && [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">Ready to scale your enterprise?</h3>
            <p className="text-white/90 text-lg md:text-xl font-medium">Join 43,000+ high-growth businesses running on the world's #1 Cloud ERP.</p>
          </div>

          <Link
            href="/netsuite/contact"
            className="relative z-10 px-12 py-5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group text-xl whitespace-nowrap active:scale-95 shrink-0"
          >
            Get Started <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <section className="bg-white">
        <ContactFormDesign4 />
      </section>
    </main>
  );
}


const leadersData = [
  {
    name: "Ankur Goyal",
    title: "CEO",
    image: "/images/people/Ankur.jpg",
    linkedin: "https://www.linkedin.com/in/ankurgoyal2/",
    bio: "Visionary leader driving AGSuite's strategic vision with 25+ years in enterprise technology solutions."
  },
  {
    name: "Rajat Goyal",
    title: "Director",
    image: "/images/people/Rajat_v2.png",
    linkedin: "https://www.linkedin.com/in/rajat-goyal-9007a6101/",
    bio: "Strategic business leader specializing in operational excellence and global expansion initiatives."
  },
  {
    name: "Nikhil Jain",
    title: "CTO",
    image: "/images/people/Nikhil.png",
    linkedin: "#",
    bio: "Technology innovator leading AGSuite's technical strategy and cloud architecture excellence."
  },
  {
    name: "Shailesh Punse",
    title: "Head of Sales & Marketing",
    image: "/images/people/Shailesh.jpg",
    linkedin: "#",
    bio: "Driving global revenue growth and strategic partnerships with 25+ years of cross-industry expertise."
  },
];

function OurLeaders({ themeColor }: { themeColor: 'blue' | 'rose' }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
      {leadersData.map((leader, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-gradient-to-br from-[#e6f0ff] to-[#f0f5ff] rounded-[2rem] p-4 hover:bg-gradient-to-br hover:from-[#001535] hover:to-[#002b6b] transition-all duration-500 overflow-hidden flex flex-col shadow-sm border border-transparent hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/40 text-left max-w-[310px] mx-auto w-full"
        >
          {/* Inner Image Container - No Background, Rounded Image */}
          <div className="relative w-full h-48 md:h-52 mb-6 overflow-hidden flex items-end justify-center">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group-hover:bg-white/50 transition-colors duration-500">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="px-2 flex-grow flex flex-col pt-2">
            {/* Name and LinkedIn Inline */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#001535] to-[#004e9a] bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
                {leader.name}
              </h3>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] group-hover:text-white hover:scale-110 transition-transform duration-300 flex-shrink-0"
                aria-label={`${leader.name} LinkedIn`}
              >
                <Linkedin className="w-6 h-6 fill-current" />
              </a>
            </div>

            {/* Title & Bio combined */}
            <div className="mb-2 flex-grow">
              <span className="block text-sm font-semibold bg-gradient-to-r from-[#001535] to-[#004e9a] bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-300 transition-all duration-500 mb-3 border-b border-gray-300 group-hover:border-blue-400/30 pb-3 w-max pr-6">
                {leader.title}
              </span>
              <p className="text-[13px] md:text-[14px] font-medium bg-gradient-to-r from-[#1e293b] to-[#334155] bg-clip-text text-transparent group-hover:from-white/80 group-hover:to-white/80 transition-all duration-500 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

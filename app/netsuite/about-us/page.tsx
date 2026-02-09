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
import { motion, useAnimation, type Variants } from 'framer-motion';
import ContactFormDesign4 from '../components/ContactFormDesign4';
import NSCustomerSuccess from '../components/NSCustomerSuccess';
import { AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

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
    <div className="flex items-center justify-center text-4xl md:text-6xl font-medium" style={{ color }}>
      {staticPart && <span className="mr-1">{staticPart}</span>}
      <FlipNumbers
        height={55}
        width={36}
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
};

const counters: CounterItem[] = [
  { label: 'Enterprises Served', value: 180, icon: Building2 },
  { label: 'NetSuite Experts', value: 50, icon: UserCog },
  { label: 'Global Roll-outs', value: 50, icon: Globe2 },
  { label: 'Years Experience', value: 15, icon: Rocket },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  }
};

// ---------------- About stats section ----------------

function WhoWeAreSection() {
  return (
    <section className="relative py-24 bg-linear-to-b from-white via-white to-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-14">
        {/* LEFT: Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-8 text-center lg:text-left lg:pr-8"
        >
          <motion.h2 variants={fadeInUp} className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-medium">
            Who We Are
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 text-2xl md:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            AGSuite Technologies is a trusted Oracle NetSuite Solution Provider helping businesses streamline operations with a unified cloud ERP platform. We specialize in NetSuite implementation, customization, and integration to improve efficiency and support scalable growth. Our expertise enables organizations to achieve seamless digital transformation and long-term success.          </motion.p>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="w-80 h-80 md:w-136 md:h-125 bg-blue-100 rounded-md overflow-hidden border-4 border-white ">
            <Image
              src="/images/aboutus/heroimg0.webp"
              alt="AGSuite Technologies Team"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const partnerLogos = [
  { logo: "/images/assets/png-logos/affle-png.png", name: "Affle" },
  { logo: "/images/assets/png-logos/tyfone_tech-removebg-preview.png", name: "Tyfone" },
  { logo: "/images/assets/png-logos/airling_tech-removebg-preview.png", name: "Airling" },
  { logo: "/images/assets/png-logos/video_verse_tech-removebg-preview.png", name: "VideoVerse" },
  { logo: "/images/assets/png-logos/quickheal-png.png", name: "Quick Heal" },
  { logo: "/images/assets/png-logos/uniAcco-png.png", name: "UniAcco" },
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
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-50 via-blue-500 to-blue-500 leading-tight"
              >
                Strategic Partners
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-base md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                We collaborate with world-class technology partners to deliver scalable, innovative, and
                future-ready business solutions that empower enterprises worldwide.
              </motion.p>
            </div>

            {/* Logo right after subline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                  alt="Oracle NetSuite Partner"
                  width={280}
                  height={120}
                  className="object-contain brightness-0 invert"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Animated Counters Section */}
          <div
            ref={statsRef}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {counters.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden text-center"
                  >
                    {/* Decorative faint icon bg */}
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <item.icon className="w-24 h-24 text-white" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-4 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300 text-blue-400 group-hover:text-white mb-6 border border-white/5">
                        <item.icon className="w-10 h-10" strokeWidth={1.2} />
                      </div>

                      <div className="space-y-3">
                        <p className="text-gray-400 font-medium text-sm group-hover:text-gray-200 transition-colors uppercase tracking-widest">
                          {item.label}
                        </p>
                        <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                          <FlipCounter end={item.value} suffix="+" duration={3} inView={statsInView} color="#FFFFFF" />
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
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
          <div className="flex items-center gap-16 animate-marquee-slow whitespace-nowrap">
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
          animation: marquee-slow 40s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function AboutStatsSection() {
  return (
    <>
      <WhoWeAreSection />
      <StrategicPartnersSection />
      <ClientsSection />
    </>
  );
}

// ---------------- Main component ----------------

export default function AboutClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState('/images/videos/aboutus.mp4');
  const [isMounted, setIsMounted] = useState(false);

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
    <main id="main" role="main" className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen overflow-hidden isolate"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Background Video */}
        <video
          key={videoSrc}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
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

        {/* Content (optional) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 id="hero-title" className="sr-only">
            About AGSuite Technologies
          </h1>
        </div>

        {/* Play / Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          suppressHydrationWarning={true}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
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

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-700 rounded-2xl shadow-lg px-3 py-2 w-[65%] flex items-center gap-4">
                  <div className="w-18 h-18 flex items-center justify-center rounded-xl text-white-600 stroke-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-white stroke-2"
                      fill="white"
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

                  <div className="flex flex-col leading-tight">
                    <p className="text-md text-gray-100">
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">Our Mission</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies thrives on empowering businesses through cutting-edge
                technology solutions, specializing in Oracle NetSuite and Zoho. Our passion is to
                streamline operations, enhance efficiency, and drive sustainable growth for our
                clients. Our commitment lies in being a catalyst for positive transformation,
                helping clients achieve their strategic goals in the dynamic digital landscape.
              </motion.p>
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">Our Vision</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies envisions global leadership in technology consulting, setting
                industry benchmarks for innovation, integrity, and client satisfaction. We aspire to
                be the preferred choice, renowned for transformative solutions, agility, and
                empathetic growth. Our vision is to forge lasting partnerships, defining the zenith
                of excellence in the dynamic field of technology.
              </motion.p>
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

              <div className="absolute left-[10px] bottom-[20px] bg-blue-600 text-white p-5 rounded-xl shadow-xl max-w-[300px] z-20">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-6 text-white stroke-2"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7a5 5 0 00-5 5v5h5v-5H5.5A2.5 2.5 0 017 9.5V7zm12 0a5 5 0 00-5 5v5h5v-5h-1.5A2.5 2.5 0 0119 9.5V7z"
                    />
                  </svg>

                  <p className="text-md leading-relaxed">
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">Our Niche</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies excels in Oracle NetSuite and Zoho Implementation, offering
                top-notch Technology Consulting Services. Our specialization includes Customizations,
                Managed Services, and Integrations, ensuring tailored solutions for clients. With a
                focus on client success, we leverage our expertise to lead in the dynamic landscape
                of cloud-based business solutions.
              </motion.p>
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


      <section id="testimonials" className="bg-white">
        <NSCustomerSuccess />
      </section>

      <section id="offices" className="relative py-24 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-0" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-0" />

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
            Our Global Presence
          </motion.h2>

          <motion.p variants={fadeInUp} className="max-w-2xl text-gray-400 mb-12 text-base md:text-lg leading-relaxed">
            Delivering excellence across continents with a strong and growing worldwide footprint.
          </motion.p>

          <div className="relative w-full max-w-6xl rounded-[40px] overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl group mb-20">
            <div className="relative w-full h-[45vh] sm:h-[60vh] lg:h-[85vh] rounded-[32px] overflow-hidden bg-slate-900/50">
              <Image
                src="/images/Dashboard/Presence.webp"
                alt="Global Presence Map"
                fill
                className="object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* <OfficeDisplay themeColor="blue" /> */}

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white"
          >
            Meet Our Visionary Leaders
          </motion.h2>

          <motion.p variants={fadeInUp} className="max-w-2xl text-gray-400 mb-12 text-base md:text-lg leading-relaxed">
            Driving innovation and excellence with a passion for transformative technology.
          </motion.p>

          <OurLeaders themeColor="blue" />
        </motion.div>
      </section>

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
            <p className="text-white/90 text-lg md:text-xl font-medium">Join 38,000+ high-growth businesses running on the world's #1 Cloud ERP.</p>
          </div>

          <Link
            href="/netsuite/contact"
            className="relative z-10 px-12 py-5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group text-xl whitespace-nowrap active:scale-95 shrink-0"
          >
            Get Started <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function OfficeDisplay({ themeColor }: { themeColor: 'blue' | 'rose' }) {
  const [activeTab, setActiveTab] = useState('INDIA');

  const colorConfig = {
    blue: {
      primary: 'bg-blue-600',
      secondary: 'text-blue-600',
      hover: 'hover:bg-blue-700',
      border: 'border-blue-600/30',
      light: 'bg-blue-500/10',
      activeTab: 'bg-blue-600',
    },
    rose: {
      primary: 'bg-rose-600',
      secondary: 'text-rose-600',
      hover: 'hover:bg-rose-700',
      border: 'border-rose-600/30',
      light: 'bg-rose-500/10',
      activeTab: 'bg-rose-600',
    },
  };

  const config = colorConfig[themeColor];

  return (
    <div className="w-full mt-20">
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl">
          {Object.keys(officeData).map((country) => (
            <button
              key={country}
              onClick={() => setActiveTab(country)}
              className={`px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === country
                ? `${config.activeTab} text-white shadow-lg`
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              suppressHydrationWarning={true}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[300px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {officeData[activeTab].map((office, index) => (
              <motion.div
                key={office.label + index}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Subtle light gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white via-white to-${themeColor === 'blue' ? 'blue' : 'rose'}-50/30 opacity-100`} />

                <div className={`absolute top-0 right-0 w-32 h-32 ${config.primary} opacity-[0.03] rounded-bl-full -mr-10 -mt-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.08]`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${config.light} rounded-2xl flex items-center justify-center mb-6 border border-${themeColor === 'blue' ? 'blue' : 'rose'}-100 transition-transform duration-500 group-hover:rotate-6`}>
                    <Building2 className={`w-7 h-7 ${config.secondary}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                    {office.label}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 font-medium mb-6">
                    <MapPin className={`w-4 h-4 ${config.secondary}`} />
                    <span className="text-sm">{office.city}, {office.state}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1.5 w-2 h-2 rounded-full ${config.primary} flex-shrink-0 animate-pulse`} />
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {office.address}
                      </p>
                    </div>

                    {office.email && (
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <Mail className={`w-5 h-5 ${config.secondary}`} />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                          {office.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const leadersData = [
  {
    name: "Anukr Goyal",
    title: "CEO",
    image: "/images/people/Ankur.jpg",
    linkedin: "https://www.linkedin.com/in/ankurgoyal2/",
  },
  {
    name: "Rajat Goyal",
    title: "Director",
    image: "/images/people/Rajat.jpg",
    linkedin: "https://www.linkedin.com/in/rajat-goyal-9007a6101/",
  },
  {
    name: "Nikhil Jain",
    title: "CTO",
    image: "/images/people/Nikhil.jpg",
    linkedin: "#",
  },
];

function OurLeaders({ themeColor }: { themeColor: 'blue' | 'rose' }) {
  const colorConfig = {
    blue: {
      primary: 'bg-blue-600',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-700',
      border: 'border-blue-600/30',
    },
    rose: {
      primary: 'bg-rose-600',
      text: 'text-rose-600',
      hover: 'hover:bg-rose-700',
      border: 'border-rose-600/30',
    },
  };

  const config = colorConfig[themeColor];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {leadersData.map((leader, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Social Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end p-3 bg-[#0077b5] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label={`${leader.name} LinkedIn`}
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
            <p className={`text-sm font-medium ${config.text} uppercase tracking-wider`}>{leader.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

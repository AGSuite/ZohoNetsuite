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
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { motion, useAnimation } from 'framer-motion';
import FooterFormSection from '@/app/components/home/FooterFormSection';
import NSTestimonialSection from '../components/NSTestimonialSection';

// ---------------- Flip Counter ----------------

type FlipCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  inView: boolean;
};

const FlipCounter = memo(function FlipCounter({
  end,
  duration = 3,
  suffix = '',
  inView,
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
    <div className="flex items-center justify-center text-4xl md:text-6xl font-medium text-blue-600">
      {staticPart && <span className="mr-1">{staticPart}</span>}
      <FlipNumbers
        height={55}
        width={36}
        color="#2563EB"
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
  { label: 'Enterprises Served', value: 180, icon: Trophy },
  { label: 'NetSuite Experts', value: 30, icon: Users },
  { label: 'Global Roll-outs', value: 50, icon: Globe2 },
  { label: 'Years Experience', value: 15, icon: Rocket },
];

// ---------------- About stats section ----------------

function AboutStatsSection() {
  const controls = useAnimation();
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    controls.start(statsInView ? 'visible' : 'hidden');
  }, [statsInView, controls]);

  return (
    <section className="relative py-20 bg-linear-to-b from-white via-white to-blue-50  overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-14">
        {/* LEFT: Text */}
        <div className="flex-1 space-y-8 text-center lg:text-left lg:pr-8">
          <h2 className="text-gray-950 text-3xl sm:text-4xl lg:text-5xl font-medium">
            Who We Are
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            AGSuite Technologies is a trusted Oracle NetSuite Solution Provider and Advanced Zoho
            Partner, helping businesses streamline operations with powerful ERP and CRM solutions.
            We specialize in NetSuite implementation, customization, and integration, enabling
            companies to boost efficiency and growth and achieve seamless digital transformation. 
            As an experienced partner, we also deliver tailored Zoho CRM and business automation 
            services designed for scalability and success. At AGSuite Tech, we empower 
            organizations to drive growth and achieve lasting results through innovative 
            Oracle NetSuite and Zoho solutions.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-80 h-80 md:w-136 md:h-125 bg-blue-100 rounded-md overflow-hidden border-4 border-white">
            <Image
              src="/images/aboutus/heroimg1.webp"
              alt="AGSuite Technologies Team"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-15 px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT: Text */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Strategic Partners
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            We collaborate with world-class technology partners to deliver scalable, innovative, and
            future-ready business solutions that empower enterprises worldwide.
          </p>
        </div>

        {/* RIGHT: Partner Logos in Box */}
        <div className="flex-1 grid grid-cols-1 justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/images/netsuiteimages/netsuitelogos/netsuiteblack.png"
              alt="Oracle NetSuite Partner"
              width={280}
              height={120}
              className="object-contain"
            />
          </div>
         
        </div>
      </div>

      {/* Animated Counters Section */}
      <div
        ref={statsRef}
        className="relative mx-auto max-w-6xl px-6 sm:px-10 md:px-12 lg:px-16 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border rounded-3xl border-gray-300 shadow-[-10px_0_30px_rgba(255,120,150,0.18),10px_0_30px_rgba(80,170,255,0.18),0_-10px_30px_rgba(255,140,200,0.14),0_10px_30px_rgba(255,180,90,0.14)]"
      >
        {counters.map((item, index) => (
          <motion.div
            // index is stable here as counters is static
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-3xl"
          >
            <div className="flex justify-center my-5">
              <item.icon strokeWidth={1} className="h-12 w-12 text-gray-800" />
            </div>
            <div className="mb-2">
              <FlipCounter end={item.value} suffix="+" duration={3} inView={statsInView} />
            </div>
            <p className="text-gray-700 text-sm font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------------- Main component ----------------

export default function AboutClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState('/images/videos/aboutus.mp4');

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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          >
            {/* Left Image Section */}
            <div className="flex-1 relative flex justify-center items-center pb-12">
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
            </div>

            {/* Right Text */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies thrives on empowering businesses through cutting-edge
                technology solutions, specializing in Oracle NetSuite and Zoho. Our passion is to
                streamline operations, enhance efficiency, and drive sustainable growth for our
                clients. Our commitment lies in being a catalyst for positive transformation,
                helping clients achieve their strategic goals in the dynamic digital landscape.
              </p>
            </div>
          </motion.div>

          {/* OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20"
          >
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies envisions global leadership in technology consulting, setting
                industry benchmarks for innovation, integrity, and client satisfaction. We aspire to
                be the preferred choice, renowned for transformative solutions, agility, and
                empathetic growth. Our vision is to forge lasting partnerships, defining the zenith
                of excellence in the dynamic field of technology.
              </p>
            </div>

            {/* Right Image Collage */}
            <div className="flex-1 relative flex justify-center items-center">
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
            </div>
          </motion.div>

          {/* OUR NICHE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          >
            <div className="flex-1 relative flex justify-center items-center">
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
            </div>

            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">Our Niche</h2>
              <p className="text-slate-700 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
                AGSuite Technologies excels in Oracle NetSuite and Zoho Implementation, offering
                top-notch Technology Consulting Services. Our specialization includes Customizations,
                Managed Services, and Integrations, ensuring tailored solutions for clients. With a
                focus on client success, we leverage our expertise to lead in the dynamic landscape
                of cloud-based business solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative w-full py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutus/CTA2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Let’s Create a Positive Social Impact Together
          </h2>
          <p className="text-md md:text-md mb-6">
            Join us in making a difference through innovation, responsibility, and action.
          </p>

          <Link
            href="#clients"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            scroll={false}
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {coreValues.map((val) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-white overflow-hidden"
        style={{
          boxShadow: 'inset 0 0.6em 0.8em -1em #100000',
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-14" />

        <section className="relative w-full h-[60vh] md:h-[65vh] mt-10 px-4 md:px-6 lg:px-8">
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: "url('/images/aboutus/child66.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-20 max-w-xl">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight">
                AGSuite <span className="font-bold italic">Technologies</span>
              </h2>

              <p className="mt-4 text-sm md:text-base lg:text-lg text-white/95 leading-relaxed">
                Empowering Businesses With Innovative Software Solutions.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 border-2 border-white/60 text-white px-6 py-2 text-sm rounded-full font-medium hover:bg-white/10 hover:border-white transition-all duration-300 w-fit group"
              >
                <span>Explore more</span>
                <span className="text-base transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      </section>

      <section
        className="relative py-10 sm:py-24 bg-white text-gray-900 overflow-hidden"
        style={{
          backgroundImage: "url('/images/backgroundimg/bg3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 sm:h-64 w-[80%] bg-linear-to-br from-blue-400/15 via-blue-300/15 to-blue-200/15 blur-2xl" />
          <div className="absolute -bottom-24 -right-16 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-linear-to-tr from-blue-400/25 to-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-1">
           
            <h2 className="mb-10 bg-linear-to-l leading-relaxed from-blue-100 via-blue-50 to-gray-50 text-transparent bg-clip-text mx-auto max-w-4xl font-medium text-3xl sm:text-4xl lg:text-5xl">
              Celebrating Excellence & Recognition
            </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        

            <div className=" flex justify-center">
              <Image
                src="/images/Dashboard/awards2.webp"
                alt="Awards and Recognition"
                width={900}
                height={500}
                className="rounded-2xl shadow-xl object-contain"
              />
            </div>
          </div>

          <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-blue-200 to-transparent" />
        </div>
      </section>

    

      <section id="testimonials" className="py-20 bg-white">
        <NSTestimonialSection />
      </section>

      <div className="w-full flex flex-col items-center text-center mt-10 mb-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-10 w-32 h-32 bg-blue-200/40 blur-3xl rounded-full -z-10" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/40 blur-3xl rounded-full -z-10" />

        <h2
          className="text-2xl sm:text-4xl font-bold mb-6 
          bg-linear-to-r from-gray-900 via-gray-900 to-gray-900 
          bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(37,99,235,0.35)]"
        >
          Our Global Presence
        </h2>

        <p className="max-w-2xl text-gray-600 mb-10 text-lg">
          Delivering excellence across continents with a strong and growing worldwide footprint.
        </p>

        <div className="relative w-full max-w-6xl shadow-2xl rounded-3xl overflow-hidden border border-gray-200/70 bg-white p-4">
          <div className="relative w-full h-[40vh] sm:h-[55vh] lg:h-[75vh] rounded-2xl overflow-hidden">
            <Image
              src="/images/Dashboard/Presence.webp"
              alt="Global Presence Map"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <section id="contact" className=" bg-white">
        <FooterFormSection />
      </section>
    </main>
  );
}

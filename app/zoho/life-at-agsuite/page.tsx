"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import OurLeaders from "@/app/components/OurLeaders";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  User,
  Heart,
  Coffee,
  Star,
  Trophy,
  Target,
  Sparkles,
  MapPin,
  Smile,
  Camera,
  Zap,
  Briefcase,
  Users,
  Play,
  Calendar,
  Linkedin,
} from "lucide-react";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

const STATIC_STARS = Array.from({ length: 40 }, (_, i) => {
  const w = ((i * 7 + 1) % 2) + 1; // 1px or 2px
  const top = (i * 17) % 100;
  const left = (i * 23) % 100;
  const opacity = 0.1 + ((i * 3) % 5) / 10;
  const duration = 5 + ((i * 11) % 6);
  const delay = (i * 13) % 5;
  const xRange = ((i * 19) % 30) - 15;
  return {
    width: `${w}px`,
    height: `${w}px`,
    top: `${top}%`,
    left: `${left}%`,
    opacity,
    duration,
    delay,
    xRange,
  };
});

export default function ZohoLifeAtAGSuite() {

  const leadersData = [
    {
      name: "Ankur Goyal",
      title: "Founder & CEO",
      image: "/images/people/Ankur.png",
      linkedin: "https://www.linkedin.com/in/ankurgoyal2/",
      bio: "Visionary leader driving AGSuite's strategic vision with 25+ years in enterprise technology solutions."
    },
    {
      name: "Rajat Goyal",
      title: "Director",
      image: "/images/people/Rajat.png",
      linkedin: "https://www.linkedin.com/in/rajat-goyal-9007a6101/",
      bio: "Strategic business leader specializing in operational excellence and global expansion initiatives."
    },
    {
      name: "Nikhil Jain",
      title: "CTO",
      image: "/images/people/Nikhil.png",
      linkedin: "https://www.linkedin.com/in/nikhil-jain-193a3b80/",
      bio: "Technology innovator leading AGSuite's technical strategy and cloud architecture excellence."
    },
    {
      name: "Shailesh Punse",
      title: "Head of Sales & Marketing",
      image: "/images/people/Shailesh.png",
      linkedin: "https://www.linkedin.com/in/shailesh-punse-79771413/",
      bio: "Driving global revenue growth and strategic partnerships with 25+ years of cross-industry expertise."
    },
    {
      name: "Mayuri More",
      title: "Project Delivery Manager",
      image: "/images/people/Mayuri.png",
      linkedin: "https://www.linkedin.com/in/mayuri-more-58770733/",
      bio: "Over 12 years of experience leading complex cloud migrations and delivery frameworks with agile execution."
    }
  ];

  const achievements = [
    {
      title: "Best Workplace Award",
      year: "2024",
      description:
        "Recognized for outstanding company culture, employee satisfaction, and inclusive environment.",
      image: "/images/life/achievement1.webp",
      icon: Trophy,
    },
    {
      title: "Top Zoho Partner",
      year: "2023",
      description:
        "Awarded for excellence in delivering Zoho enterprise cloud implementations globally.",
      image: "/images/life/achievement2.webp",
      icon: Star,
    },
    {
      title: "Innovation Excellence",
      year: "2023",
      description:
        "Honored for our proprietary Zoho integrations, pushing the boundaries of cloud business technology.",
      image: "/images/life/achievement3.webp",
      icon: Zap,
    },
  ];

  const officePhotos = [
    "/images/office/main office.webp",
    "/images/office/cafeteria.webp",
    "/images/office/conference.webp",
    "/images/office/building.webp",
    "/images/office/main conference.webp",
    "/images/office/door.webp",
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* ─────────────────────────────────────────────────────────
          MAIN HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        {/* Ambient glow effects */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Thin square grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left pt-12 lg:pt-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                Welcome to AGSuite Technologies
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Architecting scalable Zoho cloud solutions today to empower your business tomorrow. We believe in innovation, collaboration, and driving real impact through the Zoho ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#celebrations"
                className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Discover Our Culture
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Building Image with Border & Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] mt-8 lg:mt-12"
          >
            {/* The Image Box with solid white border */}
            <div className="absolute inset-x-0 inset-y-8 md:inset-x-8 md:inset-y-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/50">
              <Image
                src="/images/office/building.webp"
                alt="AGSuite Headquarters"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Stats Card (covering the bottom section of the image) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-4 left-4 right-4 md:bottom-[-20px] md:left-16 md:right-16 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col sm:flex-row items-center justify-around gap-6 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Target className="text-blue-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl font-medium text-gray-900">84%</h4>
                  <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Client Retention</p>
                </div>
              </div>

              {/* Divider (horizontal on mobile, vertical on desktop) */}
              <div className="w-full h-px sm:w-px sm:h-12 bg-gray-200" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Trophy className="text-indigo-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-3xl font-medium text-gray-900">500+</h4>
                  <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          TEAM CARD SECTION
      ────────────────────────────────────────────────────────── */}
      <section id="team" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden p-4 md:p-6 lg:p-8">
        {/* Team Background Card */}
        <div className="absolute inset-4 md:inset-6 lg:inset-8 z-0 rounded-[2rem] overflow-hidden border border-gray-300/50 dark:border-white/20 bg-[#000] shadow-2xl">
          <Image
            src="/images/team/team photo 2.webp"
            alt="Life at AGSuite Team"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 flex flex-col items-center justify-end" style={{ minHeight: 'calc(100vh - 120px)' }}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm border border-white/60 px-10 py-7 mb-8 shadow-2xl w-full max-w-3xl mx-auto"
            >
              {/* Corner circles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-200/40" />
              <div className="absolute top-4 -right-2 w-8 h-8 rounded-full bg-red-200/30" />
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-green-200/40" />
              <div className="absolute bottom-3 left-8 w-6 h-6 rounded-full bg-blue-200/30" />
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium leading-none text-gray-900 whitespace-nowrap">
                Together We Build Better Solutions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mt-4"
            >
              <Link
                href="#leaders"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 text-sm md:text-base rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
              >
                Meet the Team <ArrowRight size={16} />
              </Link>
              <Link
                href="#environment"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-3 text-sm md:text-base rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Tour Our Office
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          EVENTS & CULTURE HIGHLIGHTS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">

          {/* Row 1: 5th Anniversary */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Horizontal Marquee (No white card) */}
            <div className="relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
              <motion.div
                className="flex gap-4 absolute h-full top-0 left-0 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
              >
                {[
                  "/images/Events/5th aniversary/5thaniversary-1.jpg",
                  "/images/Events/5th aniversary/5thaniversary-2.jpg",
                  "/images/Events/5th aniversary/5thaniversary-3.jpg",
                  "/images/Events/5th aniversary/5thaniversary-4.jpg",
                  "/images/Events/5th aniversary/5thaniversary-5.jpg",
                  "/images/Events/5th aniversary/5thaniversary-6.jpg",
                  "/images/Events/5th aniversary/5thaniversary-1.jpg",
                  "/images/Events/5th aniversary/5thaniversary-2.jpg",
                  "/images/Events/5th aniversary/5thaniversary-3.jpg",
                  "/images/Events/5th aniversary/5thaniversary-4.jpg",
                  "/images/Events/5th aniversary/5thaniversary-5.jpg",
                  "/images/Events/5th aniversary/5thaniversary-6.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                    <Image
                      src={src}
                      alt="5th Anniversary"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Text & Value Propositions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-blue-100/50 w-max">
                <Trophy size={14} /> Heartbeat of AGSuite
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                5th Anniversary, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Celebrating Success.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                We celebrated five years of innovation, collaboration, and driving real impact for our clients. Our 5th Anniversary was a remarkable milestone recognizing the dedication of our diverse team and the trust of our partners.
              </p>
            </motion.div>
          </div>

          {/* Row 2: Zoho Event */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text & Value Propositions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-indigo-100/50 w-max">
                <Zap size={14} /> Empowering Connectivity
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Host CFO Event</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Showcasing our proprietary Zoho solutions and expanding our footprint. We actively participate in Zoho events to collaborate with the ecosystem, share insights, and connect with forward-thinking businesses.
              </p>
            </motion.div>

            {/* Right Side: Horizontal Marquee (No white card) */}
            <div className="order-1 lg:order-2 relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
              <motion.div
                className="flex gap-4 absolute h-full top-0 left-0 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
              >
                {[
                  "/images/Events/Netsuite-event/1773125723452.jpg",
                  "/images/Events/Netsuite-event/1773125723553.jpg",
                  "/images/Events/Netsuite-event/1773125723811.jpg",
                  "/images/Events/Netsuite-event/1773125724814.jpg",
                  "/images/Events/Netsuite-event/1773125725136.jpg",
                  "/images/Events/Netsuite-event/1773125725296.jpg",
                  "/images/Events/Netsuite-event/1773125725321.jpg",
                  "/images/Events/Netsuite-event/1773125735436.jpg",
                  "/images/Events/Netsuite-event/1773125723452.jpg",
                  "/images/Events/Netsuite-event/1773125723553.jpg",
                  "/images/Events/Netsuite-event/1773125723811.jpg",
                  "/images/Events/Netsuite-event/1773125724814.jpg",
                  "/images/Events/Netsuite-event/1773125725136.jpg",
                  "/images/Events/Netsuite-event/1773125725296.jpg",
                  "/images/Events/Netsuite-event/1773125725321.jpg",
                  "/images/Events/Netsuite-event/1773125735436.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                    <Image
                      src={src}
                      alt="Zoho Event"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Row 3: Indian Taxation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Horizontal Marquee (No white card) */}
            <div className="relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
              <motion.div
                className="flex gap-4 absolute h-full top-0 left-0 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
              >
                {[
                  "/images/Events/indian taxation/india-taxation-summit-2023-1-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-2-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-3-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-4-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-5-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-6-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-7-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-8-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-1-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-2-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-3-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-4-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-5-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-6-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-7-600x400.jpg",
                  "/images/Events/indian taxation/india-taxation-summit-2023-8-600x400.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                    <Image
                      src={src}
                      alt="Indian Taxation Summit"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Text & Value Propositions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-purple-100/50 w-max">
                <Star size={14} /> Knowledge & Compliance
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                Indian Taxation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Summit.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                At the Indian Taxation Summit, our experts engaged deep into local compliance, sharing our knowledge on how modern Zoho solutions effortlessly solve complex Indian tax localization and empower businesses.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OUR ENVIRONMENT & OFFICE (Bento Grid)
      ────────────────────────────────────────────────────────── */}
      <section id="environment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-blue-100/50 w-max">
                Headquarters
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
                Our Workspace
              </h2>
              <p className="text-gray-600 text-lg">
                Step into an office where creativity flows. Designed for the
                modern hybrid worker, our spaces are equipped to inspire
                top-tier engineering and consulting focused on Zoho excellence.
              </p>
            </div>
            <Link
              href="/zoho/contact"
              className="shrink-0 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Visit Us <ArrowRight size={18} />
            </Link>
          </div>

          {/* Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group min-h-[300px]"
            >
              <Image
                src={officePhotos[0]}
                alt="Office Space"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-medium text-2xl flex items-center gap-3">
                  <MapPin className="text-blue-400" /> Main Collaboration Hub
                </p>
              </div>
            </motion.div>
            {/* Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden group min-h-[250px]"
            >
              <Image
                src={officePhotos[1]}
                alt="Pantry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg flex items-center gap-2">
                  <Coffee className="text-blue-400 w-5 h-5" /> Cafeteria
                </p>
              </div>
            </motion.div>
            {/* Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden group min-h-[250px]"
            >
              <Image
                src={officePhotos[2]}
                alt="Meeting Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg flex items-center gap-2">
                  <Users className="text-blue-400 w-5 h-5" /> Conference Rooms
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OUR LEADERS
      ────────────────────────────────────────────────────────── */}
      <section id="leaders" className="relative py-24 bg-gradient-to-br from-[#000814] via-[#001535] to-[#000814] overflow-hidden">
        {/* Moving Stars Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {STATIC_STARS.map((star, i) => (
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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50/10 text-blue-200 text-[10px] font-medium uppercase tracking-widest mb-4 border border-blue-400/30 mx-auto">
            Our Leadership
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white"
          >
            Meet Our Visionary Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-blue-200 mb-6 text-base md:text-lg leading-relaxed"
          >
            Driving innovation and excellence with a passion for transformative technology.
          </motion.p>

          <OurLeaders />
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OFFICE EVENTS & CELEBRATIONS
      ────────────────────────────────────────────────────────── */}
      <section id="celebrations" className="py-24 bg-gray-50 overflow-hidden scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-blue-100/50 mx-auto">
            Life Beyond Work
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
            Events & Celebrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We celebrate milestones, festivals, and everyday victories.
            Explore some of our memorable moments.
          </p>
        </div>

        {/* Full-width Marquee of Celebration Images */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[
              "/images/celebrations/1.png",
              "/images/celebrations/2.png",
              "/images/celebrations/3.png",
              "/images/celebrations/4.png",
              "/images/celebrations/5.png",
              "/images/celebrations/6.png",
              "/images/celebrations/7.png",
              "/images/celebrations/Colourful Diwali Photo collage (1).png",
              "/images/celebrations/1.png",
              "/images/celebrations/2.png",
              "/images/celebrations/3.png",
              "/images/celebrations/4.png",
              "/images/celebrations/5.png",
              "/images/celebrations/6.png",
              "/images/celebrations/7.png",
              "/images/celebrations/Colourful Diwali Photo collage (1).png",
            ].map((src, i) => (
              <div key={i} className="relative h-72 md:h-80 w-[450px] rounded-3xl overflow-hidden shrink-0 shadow-xl">
                <Image
                  src={src}
                  alt={`AGSuite Celebration ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CONTACT SECTION (CTA)
      ────────────────────────────────────────────────────────── */}
      <FooterContactForm platform="Zoho" />
    </div>
  );
}





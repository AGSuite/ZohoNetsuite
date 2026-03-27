"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
import ZohoContactForm from "../components/ZohoContactForm";

export default function ZohoLifeAtAGSuite() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
                href="#team"
                className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
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
          />
          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-blue-200 to-indigo-400 sm:text-4xl md:text-5xl font-medium mb-6 leading-tight drop-shadow-lg"
            >
              Together We Build Better Solutions
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
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
                Zoho Events, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Global Presence.</span>
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
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
            className="max-w-2xl text-blue-200 mb-12 text-base md:text-lg leading-relaxed"
          >
            Driving innovation and excellence with a passion for transformative technology.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
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
                    <h3 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#001535] to-[#004e9a] bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
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
                    <span className="block text-sm font-medium bg-gradient-to-r from-[#001535] to-[#004e9a] bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-300 transition-all duration-500 mb-3 border-b border-gray-300 group-hover:border-blue-400/30 pb-3 w-max pr-6">
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
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OFFICE EVENTS & CELEBRATIONS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
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
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          ACHIEVEMENTS / AWARDS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-4 border border-blue-100/50 w-max">
                Milestones
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Proof that when you focus on people and processes, success
                naturally follows. We are proud to be recognized by the
                industry's best as a leading Zoho partner.
              </p>
              <Link
                href="/zoho/contact"
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-medium px-8 py-4 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all"
              >
                Partner With Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group ${i === 2 ? "sm:col-span-2 sm:w-1/2 justify-self-center" : ""}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                  <ach.icon className="w-10 h-10 text-blue-500 mb-6 relative z-10" />
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <h3 className="text-xl font-medium text-gray-900">
                      {ach.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CONTACT SECTION (CTA)
      ────────────────────────────────────────────────────────── */}
      <ZohoContactForm />
    </div>
  );
}

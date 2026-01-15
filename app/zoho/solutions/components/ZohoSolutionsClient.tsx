"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck, HeartHandshake, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';
import FlipNumbers from 'react-flip-numbers';

export default function ZohoSolutionsClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });



  const stats = [
    { label: 'Happy Clients', value: 250, suffix: '+', icon: Trophy },
    { label: 'Zoho Apps', value: 55, suffix: '+', icon: Globe2 },
    { label: 'Integrations', value: 45, suffix: '+', icon: Share2 },
    { label: 'Years Experience', value: 12, suffix: '+', icon: Rocket },
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Disconnected Applications",
      description: "Fragmented tools cause data silos and manual effort, hindering a unified business view.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Manual Data Entry",
      description: "Manual processes increase error rates and waste employee time. Automation enables focus on strategic growth.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Security & Governance Risk",
      description: "Disjointed apps create security blind spots. A unified platform provides centralized control and data protection.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Information Silos",
      description: "Trapped customer data prevents collaboration. Breaking these silos is critical for organizational agility.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Slow Operational Response",
      description: "Cluttered inboxes and manual workflows cause delays. Intelligent automation ensures every task is handled efficiently.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Unified Business Suite",
      description: "Connect sales, finance, and HR into one cohesive system, ensuring a single source of truth across your organization.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "End-to-End Automation",
      description: "Replace repetitive tasks with automated workflows, reducing human error and freeing teams for innovation.",
      image: "/images/aboutus/niche1.webp"
    },
    {
      title: "Simplified Management",
      description: "Centralized control for 55+ apps makes user management and security auditing effortless and compliant.",
      image: "/images/aboutus/visiongirl.webp"
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage advanced analytics to gain deep operational insights, enabling confident, strategic decisions.",
      image: "/images/aboutus/heroimg1.webp"
    },
    {
      title: "Cost-Effective Scaling",
      description: "Scale easily without the overhead of multiple software contracts using Zoho's flexible pricing models.",
      image: "/images/aboutus/mission.webp"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gray-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-12 pb-10 lg:pt-48 lg:pb-12 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >

              <h1 className="text-5xl md:text-6xl font-semibold mb-8 leading-[1.05] tracking-tight text-white">
                Zoho <span className="text-blue-500">Business</span> Integrated Solutions
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                AGSuite offers end-to-end Zoho implementation and consulting. From sales automation to payroll, unify your entire operational lifecycle with the world's most versatile cloud suite.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact-us" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
                  Get Started Now
                </Link>
                <Link href="#services" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Features
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
            >
              <div className="w-full h-[450px] rounded-2xl bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="Zoho Business Solutions"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>

              {/* Top Right Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -right-6 lg:-right-12 bg-gray-50 backdrop-blur-2xl border border-white/20 p-3 rounded-xl shadow-2xl max-w-[360px] z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-600 rounded-xl">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-semibold text-black uppercase tracking-wider">75M+ Users
                    The world's most comprehensive cloud suite.
                  </h4>
                </div>
              </motion.div>

              {/* Bottom Center Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl w-[85%] z-30 border border-white/30"
              >
                <div className="flex flex-col items-center text-center">
                  <svg className="w-7 h-7 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p className="text-gray-900 text-xs font-bold uppercase tracking-wide leading-tight">
                    A unified business is a powerful business
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 relative z-20 -translate-y-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 rounded-[3rem] border border-red-500/20 backdrop-blur-xl bg-red-600/5 shadow-2xl shadow-red-900/20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black text-white flex items-center">
                    <FlipNumbers
                      height={48}
                      width={32}
                      color="white"
                      play={statsInView}
                      numbers={stat.value.toString()}
                      duration={2}
                    />
                    {stat.suffix && <span className="ml-1 -translate-y-1 inline-block">{stat.suffix}</span>}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction / What is Zoho */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Introduction</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  What is Zoho?
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Zoho is an all-in-one business software suite designed to manage every part of your organization. With over 55+ integrated applications, it provides everything you need to run your business in the cloud.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                From sales and marketing to finance and HR, Zoho's unified approach eliminates data silos and empowers your team to collaborate more effectively. Trusted by over 75 million users worldwide.
              </p>
              <div className="pt-4">
                <Link href="/zoho/solutions" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Explore Zoho Products <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/images/aboutus/heroimg1.webp"
                alt="Zoho Unified Suite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Zoho Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/images/lap/group2.webp"
                alt="Why Choose Zoho for Business Growth"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
            </motion.div>

            {/* RIGHT SIDE - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Why Choose Us</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Why Zoho is the Right Choice for Your Business
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Discover why thousands of businesses worldwide trust Zoho as their unified business operating system. From startup to enterprise, Zoho scales with you—offering unparalleled flexibility, privacy, and cost-effectiveness in the cloud software market.
              </p>

              <div className="pt-4">
                <Link href="/contact-us" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Explore Zoho Benefits <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zoho Services Section */}
      <section id="services" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <h2 className="text-5xl font-semibold text-gray-900 text-center">
            Zoho Services
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl text-center">
            We provide end-to-end services to ensure your Zoho environment is perfectly aligned with your business needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
            {[
              {
                title: "Digital Transformation",
                description: "Modernize your business operations with Zoho's unified cloud operating system designed for scalability.",
                icon: Layout,
                href: "/zoho/services/digital-transformation"
              },
              {
                title: "Zoho Implementation",
                description: "Seamless setup and configuration of Zoho One, CRM, Books, and other apps tailored to your unique workflows.",
                icon: Database,
                href: "/zoho/services/implementation"
              },
              {
                title: "Integration Services",
                description: "Connect Zoho seamlessly with your existing third-party applications using Zoho Flow and custom API integrations.",
                icon: Share2,
                href: "/zoho/services/integration"
              },
              {
                title: "Custom App Development",
                description: "Build custom low-code applications with Zoho Creator to automate unique business processes and eliminate spreadsheets.",
                icon: Code,
                href: "/zoho/services/creator-development"
              },
              {
                title: "Training & Support",
                description: "Empower your team with comprehensive training and ongoing managed support to maximize your Zoho investment.",
                icon: ShieldCheck,
                href: "/zoho/services/training-services"
              },
              {
                title: "Zoho Consulting",
                description: "Strategic guidance to help you architect your business processes and leverage the full power of the Zoho ecosystem.",
                icon: HeartHandshake,
                href: "/zoho/services/consulting"
              }
            ].map((service, index) => {
              const cardBgColors = [
                "bg-linear-to-br from-[#ffffff] to-[#eef0ff]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]",
                "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
                "bg-linear-to-br from-[#ffffff] to-[#f9eaff]",
                "bg-linear-to-br from-[#ffffff] to-[#ffece8]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]",
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { scale: 1 },
                      hover: {
                        scale: 1.04,
                        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                      }
                    }}
                    className={`
                      relative group rounded-2xl p-7 border border-gray-200 
                      transition-all duration-300 h-full shadow-xl hover:shadow-red-100
                      ${cardBgColors[index % cardBgColors.length]}
                    `}
                  >
                    {/* ICON with rotation animation triggered by card hover */}
                    <motion.div
                      variants={{
                        initial: { rotate: 0, y: 0 },
                        hover: {
                          rotate: 360,
                          y: -6,
                          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
                        }
                      }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* TITLE */}
                    <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {service.description}
                    </p>

                    {/* LINK */}
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link
                        href={service.href}
                        className="text-black hover:text-red-600 text-sm font-medium transition-all"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        {/* Decorative elements matching hero section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Key Advantages of Zoho</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Discover how Zoho transforms business operations and drives growth</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE - BENEFITS LIST */}
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeBenefit === index
                    ? 'bg-white/10 border-red-400/50 shadow-lg backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeBenefit === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'bg-white/10 text-blue-300'
                      }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-white' : 'text-gray-300'
                      }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-red-100 mt-4 leading-relaxed pl-12">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        {/* Decorative elements matching hero section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Common Business Challenges</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Understanding the obstacles that Zoho helps you overcome</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - CHALLENGES LIST */}
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeChallenge === index
                    ? 'bg-white/10 border-red-400/50 shadow-lg backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeChallenge === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'bg-white/10 text-blue-300'
                      }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-white' : 'text-gray-300'
                      }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-red-100 mt-4 leading-relaxed pl-12">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={challenges[activeChallenge].image}
                    alt={challenges[activeChallenge].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src="/images/lap/group1.webp"
              alt="Zoho Solutions Background"
              fill
              className="object-cover"
            />

            {/* Gradient Overlay - Dark left to transparent right */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-transparent" />

            {/* Decorative blur elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />

            {/* Content - Left Aligned */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight text-left">
                Empower your team with Zoho. Ready to transform your business?
              </h2>

              <div className="flex justify-start">
                <Link href="/contact-us" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterFormSection />
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck, HeartHandshake, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import FooterFormSection from '../../../components/home/FooterFormSection';

export default function NetSuiteSolutionsClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const solutions = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "A complete cloud ERP system to manage your entire business, from accounting and financials to inventory and supply chain management. Gain real-time visibility and control.",
      image: "/images/lap/lap2.webp",
      cardTitle: "Core ERP",
      cardText: "The backbone of modern business operations.",
      quote: "NetSuite ERP transforms the way you run your business."
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "A 360-degree view of your customers. Streamline lead-to-cash processes, improve marketing automation, and provide exceptional customer service.",
      image: "/images/lap/lap3.webp",
      cardTitle: "360° View",
      cardText: "Connect every customer touchpoint effortlessly.",
      quote: "Relationships are the core of sustainable growth."
    },
    {
      title: "Global Business Management",
      description: "Scale your business globally with NetSuite OneWorld. Manage multiple subsidiaries, currencies, and tax regulations in a single system.",
      image: "/images/lap/lap4.webp",
      cardTitle: "OneWorld",
      cardText: "Manage local and global operations seamlessly.",
      quote: "The world is your market with NetSuite OneWorld."
    },
    {
      title: "Business Intelligence",
      description: "Turn data into actionable insights. Real-time dashboards, reporting, and analytics built into every module to help you make informed decisions.",
      image: "/images/lap/lap5.webp",
      cardTitle: "Analytics",
      cardText: "Data-driven decisions at the speed of business.",
      quote: "Visibility is the key to agility in today's economy."
    }
  ];

  const stats = [
    { label: 'Enterprises Served', value: 180, suffix: '+', icon: Trophy },
    { label: 'NetSuite Experts', value: 30, suffix: '+', icon: Users },
    { label: 'Global Roll-outs', value: 50, suffix: '+', icon: Globe2 },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
  ];

  const services = [
    {
      title: "Digital Transformation",
      description: "Empowering businesses with modern, scalable, and automated digital solutions that streamline operations and accelerate growth.",
      icon: Layout,
      href: "/netsuite/services/digital-transformation"
    },
    {
      title: "Implementation",
      description: "Expert NetSuite implementation services ensuring a smooth transition ensuring your business processes are optimized for success.",
      icon: Database,
      href: "/netsuite/services/implementation"
    },
    {
      title: "Integration Services",
      description: "Connect your apps, ERP, CRM, and workflows seamlessly using API-led, cloud-to-cloud, and hybrid integrations tailored for your business.",
      icon: Share2,
      href: "/netsuite/services/integration"
    },
    {
      title: "SuiteCloud Development",
      description: "Build fast, efficient, and scalable business apps with NetSuite's SuiteCloud platform to automate processes and improve productivity.",
      icon: Code,
      href: "/netsuite/services/suitecloud"
    },
    {
      title: "Managed Services",
      description: "End-to-end support, monitoring, and optimization of your NetSuite environment so your business runs smoothly without downtime.",
      icon: ShieldCheck,
      href: "/netsuite/services/managed-services"
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance to help you align NetSuite with your long-term business goals and industry best practices.",
      icon: HeartHandshake,
      href: "/netsuite/services/consulting"
    }
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Complexity Overload",
      description: "As businesses grow, managing multiple disconnected functions—finance, sales, and operations—leads to massive operational complexity. Traditional systems often fail to keep pace, resulting in fragmented data and inefficient communication across departments. This lack of a central platform causes significant delays in decision-making and project execution.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Reporting Friction",
      description: "Consolidating financial data manually from different business units can take weeks of painstaking manual work. By the time reports are finalized, the data is outdated, making real-time strategic decisions nearly impossible. Businesses lose their competitive edge when they cannot react quickly to market shifts due to stale reporting cycles.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Manual Process Errors",
      description: "Relying on legacy spreadsheets for critical business data is a recipe for disaster. Human errors in data entry, version control issues, and broken formulas can lead to costly financial discrepancies and data inconsistencies that undermine stakeholders' trust. Moving away from manual processes is essential for maintaining accurate, audit-ready records.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Visibility Gaps",
      description: "Without a unified view of the organization, leadership often lacks real-time insights into key performance indicators such as project profitability, resource allocation, and cash flow. These visibility gaps prevent proactive problem-solving, as issues are often discovered only after they have significantly impacted the bottom line.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Integration Debt",
      description: "Many organizations struggle with 'brittle' IT architectures where legacy systems are connected via custom scripts that break during software updates. This accumulation of integration debt slows down digital transformation initiatives and makes it difficult to adopt new technologies that could streamline operations and improve customer experiences.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Accelerated Growth",
      description: "NetSuite provides a highly scalable cloud-native foundation that empowers businesses to expand into new markets, launch new product lines, and manage multiple subsidiaries with ease. The platform grows with you, ensuring that your technology never becomes a bottleneck to your organizational ambitions.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "Total Visibility",
      description: "Gain a comprehensive 360-degree view of your organization with real-time dashboards and automated consolidated reporting. By having a single source of truth, stakeholders can make informed, data-driven decisions at the speed of business, improving agility and response times across the entire enterprise.",
      image: "/images/aboutus/niche.webp"
    },
    {
      title: "Future-Proof Platform",
      description: "Stay ahead of the curve with a platform that is automatically updated twice a year, ensuring you always have access to the latest features and security patches. This 'version-lock' free environment allows you to evolve with your industry without the fear of your business logic breaking due to platform updates.",
      image: "/images/aboutus/vision.webp"
    },
    {
      title: "Reduced Total Cost of Ownership",
      description: "Consolidating your business infrastructure on a single cloud platform significantly reduces IT maintenance costs and eliminates the need for expensive on-premise hardware refreshes. By reducing the number of disparate systems, organizations can lower their licensing fees and redirect resources toward strategic innovation.",
      image: "/images/aboutus/social.webp"
    },
    {
      title: "Operational Excellence",
      description: "Automate core business processes from lead-to-cash and procure-to-pay, significantly improving operational efficiency and reducing cycle times. By removing manual friction, teams can focus on strategic, high-value work that drives customer satisfaction and long-term organizational value.",
      image: "/images/aboutus/CTA2.webp"
    }
  ];

  const addons = [
    {
      title: "India Localization",
      description: "Handle GST, Tax Audit, and local compliance within NetSuite with our certified localization suite.",
      link: "/netsuite/solutions/addons/india-localization"
    },
    {
      title: "Smart Commission",
      description: "Automate complex sales commission calculations and incentive structures directly in NetSuite.",
      link: "/netsuite/solutions/addons/smart-commission"
    },
    {
      title: "Data Backup",
      description: "Ensure your critical NetSuite data is securely backed up and accessible whenever you need it.",
      link: "/netsuite/solutions/addons/data-backup"
    },
    {
      title: "E-Commerce Connectors",
      description: "Sync your Shopify, Magento, or WooCommerce store with NetSuite for real-time inventory and order management.",
      link: "/netsuite/solutions/addons/connectors"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gray-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
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
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 text-blue-400 bg-blue-900/40 border border-blue-800">
                Industry Leading Cloud Platform
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight text-white">
                Oracle <span className="text-blue-500">NetSuite</span> Business Solutions
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                AGSuite provides comprehensive NetSuite solutions tailored to your unique business needs. From core ERP to specialized add-ons, we help you scale with confidence.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
                  Get Started Now
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
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
              <div className="w-full h-full rounded-[3rem] bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="Oracle NetSuite Business Solutions"
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
                className="absolute top-10 -right-6 lg:-right-12 bg-blue-500/30 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-[260px] z-30"
              >
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2.5 bg-blue-600 rounded-xl">
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-wider">38,000+ Clients</h4>
                </div>
                <p className="text-xs text-blue-50/90 leading-relaxed font-medium">
                  The world's most deployed cloud ERP system.
                </p>
              </motion.div>

              {/* Bottom Center Quote Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-4xl shadow-2xl w-[92%] z-30 border border-white/20"
              >
                 <div className="flex flex-col items-center text-center">
                   <svg className="w-8 h-8 text-blue-600 mb-1 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                   </svg>
                   <p className="text-gray-900 text-xs italic font-black uppercase tracking-tight leading-tight">
                     A unified suite is the foundation of digital transformation.
                   </p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction / What is NetSuite */}
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
                  What is Oracle NetSuite?
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Oracle NetSuite is the world's most deployed cloud Enterprise Resource Planning (ERP) solution. 
                Built from the ground up for the cloud, it provides a single, unified platform to manage every aspect of your business—from financials and CRM to inventory and e-commerce.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                With real-time visibility and a single source of truth, NetSuite empowers over 38,000 organizations globally to scale faster, work smarter, and drive sustainable growth.
              </p>
              <div className="pt-4">
                <Link href="/netsuite/solutions/why-netsuite/main" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Deep Dive into NetSuite <ArrowRight size={18} />
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
                alt="NetSuite Unified Platform" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NetSuite Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">NetSuite Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide end-to-end services to ensure your NetSuite environment is perfectly aligned with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  {service.description}
                </p>
                <Link href={service.href} className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Solving Enterprise Friction</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1 space-y-4">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeChallenge === index ? 'bg-gray-50 border-gray-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-colors ${activeChallenge === index ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-gray-900' : 'text-gray-500'}`}>
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
                        <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2 relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={challenges[activeChallenge].image}
                    alt={challenges[activeChallenge].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Advantages of Unified ERP</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeBenefit === index ? 'bg-white border-blue-200 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-colors ${activeBenefit === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-gray-900' : 'text-gray-500'}`}>
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
                        <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
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

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-24 border-y bg-[#000b21] border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Core NetSuite Modules</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Explore the main components of the NetSuite ecosystem that form the foundation of your digital platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group flex flex-col"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 to-transparent" />
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full" />
                  <p className="text-gray-400 leading-relaxed font-light text-sm italic">
                    "{feature.quote}"
                  </p>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <Link href="/free-consultation" className="mt-8 inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition group/link">
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NetSuite Add-ons Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Beyond the Core</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">NetSuite Add-ons</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center leading-relaxed">
              Extend the power of NetSuite with our specialized add-ons designed to solve industry-specific challenges and local compliance needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ExternalLink size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{addon.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {addon.description}
                </p>
                <Link href={addon.link} className="mt-auto text-blue-600 font-bold text-sm uppercase tracking-widest hover:text-blue-700">
                  View Add-on
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-[#000b21]">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-blue-600/10 border border-blue-500/20 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-3xl -ml-32 -mb-32" />

               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                 Scale your business with the world's #1 Cloud ERP. Ready to get started?
               </h2>
               
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                   Talk to an Expert
                 </Link>
                 <Link href="/netsuite/solutions" className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/10">
                   Explore Solutions
                 </Link>
               </div>
            </motion.div>
         </div>
      </section>

      <FooterFormSection />
    </div>
  );
}

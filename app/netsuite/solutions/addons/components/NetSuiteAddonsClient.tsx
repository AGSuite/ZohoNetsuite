"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck, HeartHandshake, ExternalLink, ArrowRight, Settings, Zap, CheckCircle2 } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function NetSuiteAddonsClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const addons = [
    {
      title: "E-Commerce Connectors",
      description: "Seamlessly integrate NetSuite with Magento, Shopify, and Amazon. Synchronize inventory, orders, and pricing in real-time.",
      image: "/images/lap/lap2.webp",
      cardTitle: "Sync Pro",
      cardText: "Real-time data flow between your store and ERP.",
      quote: "Integration is the bridge to omnichannel success."
    },
    {
      title: "India Localization",
      description: "Automate GST, E-Invoicing, and TDS within NetSuite. Stay 100% compliant with Indian tax laws without leaving the system.",
      image: "/images/lap/lap3.webp",
      cardTitle: "GST Ready",
      cardText: "Pre-built reports and API registrations.",
      quote: "Compliance made simple for the Indian market."
    },
    {
      title: "Smart Commission",
      description: "Automate complex sales commission structures. Incentivize your team with accurate, real-time commission tracking.",
      image: "/images/lap/lap4.webp",
      cardTitle: "Incentive Sync",
      cardText: "Automated calculations for every sales tier.",
      quote: "Reward your performers with data-driven accuracy."
    },
    {
      title: "Data Backup Solution",
      description: "Ensure business continuity with secure, off-site backups of your NetSuite data. One-click recovery and long-term archiving.",
      image: "/images/lap/lap5.webp",
      cardTitle: "Secure Store",
      cardText: "Redundant cloud storage for enterprise data.",
      quote: "Peace of mind is the ultimate business continuity plan."
    }
  ];

  const stats = [
    { label: 'Enterprises Served', value: 180, suffix: '+', icon: Trophy },
    { label: 'Active Extensions', value: 25, suffix: '+', icon: Settings },
    { label: 'API Calls / Day', value: 1, suffix: 'M+', icon: Zap },
    { label: 'Compliance Rate', value: 100, suffix: '%', icon: ShieldCheck },
  ];

  const services = [
    {
      title: "Custom Integration",
      description: "Tailor-made connectors to bridge any gap between NetSuite and your legacy systems or niche third-party apps.",
      icon: Share2,
      href: "/netsuite/services/integration"
    },
    {
      title: "SuiteScript Dev",
      description: "Advanced scripting to automate complex business logic and extend the native functionality of your NetSuite environment.",
      icon: Code,
      href: "/netsuite/services/suitecloud"
    },
    {
      title: "Localization",
      description: "Adapting NetSuite for specific tax regimes and regulatory requirements, primarily focused on the Indian market (GST/TDS).",
      icon: Globe2,
      href: "/netsuite/solutions/addons/india-localization"
    },
    {
      title: "Performance Optimization",
      description: "Fine-tuning your NetSuite scripts and searches to ensure peak performance even as your data volume grows.",
      icon: Zap,
      href: "/netsuite/services/managed-services"
    },
    {
      title: "Add-on Support",
      description: "Dedicated maintenance and support for all installed extensions to ensure they evolve with NetSuite's bi-annual updates.",
      icon: ShieldCheck,
      href: "/netsuite/services/managed-services"
    },
    {
      title: "Strategic Consulting",
      description: "Expert advice on selecting the right add-ons and architecting a scalable multi-app ecosystem.",
      icon: HeartHandshake,
      href: "/netsuite/services/consulting"
    }
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Data Disconnection",
      description: "As organizations scale, managing separate systems for sales, inventory, and finance leads to dangerous data silos. This fragmentation often results in critical manual entry errors and a lack of real-time visibility into business-critical metrics. Bridging these gaps is essential for maintaining accurate records and making informed, data-driven decisions that impact the company's bottom line.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Compliance Hurdles",
      description: "Keeping up with local tax regulations, such as GST in India, manually is both time-consuming and prone to legal risks. Modern businesses require automated solutions that can handle complex tax calculations, E-invoicing, and TDS requirements without the need for constant manual intervention. Failing to automate compliance can lead to significant audit risks and financial penalties.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Scalability Roadblocks",
      description: "Basic entry-level tools often fail as order volumes grow, causing significant system slowdowns and widespread customer dissatisfaction. Without robust, scalable extensions, businesses struggle to handle peak loads during promotional seasons or periods of rapid growth. Scaling operations requires a technology stack that is built to handle high-frequency data transactions without compromising performance.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Integration Fragility",
      description: "Custom-built, ad-hoc connectors often lack robust error handling and fail when APIs are updated or network issues occur. This 'fragility' in the integration layer leads to frequent downtime, data loss, and double-entry of information. Our certified connectors are built to withstand platform updates and ensure a continuous, reliable flow of information between NetSuite and external apps.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Security & Data Governance",
      description: "Using unvetted third-party extensions can introduce significant security vulnerabilities and data governance issues. Protecting sensitive financial and customer information requires extensions that follow strict security protocols and regulatory standards. Our add-ons go through rigorous testing to ensure they meet the highest standards of data integrity and protection for enterprise use.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Unified Ecosystem",
      description: "Connect all your third-party applications and niche platforms directly to NetSuite to create a single source of truth across your entire enterprise. By unifying your technology stack, you eliminate communication gaps between departments and ensure that every team is working with the same real-time data, significantly improving organizational alignment.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "Automated Compliance",
      description: "Our localization add-ons are specifically designed to handle GST, E-invoicing, and TDS automatically, keeping your business 100% audit-ready in the Indian market. By automating these complex regulatory requirements, you free up your finance team to focus on strategic analysis rather than manual tax filing and compliance monitoring.",
      image: "/images/aboutus/niche1.webp"
    },
    {
      title: "Operational Efficiency",
      description: "Eliminate up to 90% of manual data entry with our smart connectors that synchronize orders, inventory, and payments in real-time. This level of automation significantly reduces human error, speeds up order fulfillment cycles, and lowers operational costs, allowing your business to operate with greater agility and precision in a competitive market.",
      image: "/images/aboutus/visiongirl.webp"
    },
    {
      title: "Real-time Synchronization",
      description: "Our high-performance connectors ensure that data flows between NetSuite and your external platforms instantly, eliminating the dangerous delays that lead to overselling or delayed shipments. Having an accurate, real-time pulse on your inventory and sales performance allows for better demand planning and improved customer service levels.",
      image: "/images/aboutus/heroimg1.webp"
    },
    {
      title: "Certified Reliability",
      description: "All our add-ons are built following NetSuite's best practices and SuiteCloud standards, ensuring they are stable, secure, and ready for future platform releases. You can grow your business with confidence, knowing that your critical extensions will continue to function seamlessly even as NetSuite evolves with its bi-annual updates.",
      image: "/images/aboutus/mission.webp"
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
              
              <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-[1.05] tracking-tight text-white">
                NetSuite <span className="text-blue-500">Add-Ons</span> & Extensions
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Extend the core power of NetSuite with our suite of tailor-made connectors and applications designed for high-growth businesses.
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
              <div className="w-full h-[450px] rounded-2xl bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="NetSuite Add-Ons & Extensions"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>
              
              {/* Top Left Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -left-6 lg:-left-12 bg-white/95 backdrop-blur-md border border-gray-200 p-6 rounded-3xl shadow-2xl max-w-[280px] z-30"
              >
                <div className="flex items-center gap-3">
                   <div className="p-2.5 bg-blue-600 rounded-xl">
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <h4 className="text-base font-bold text-gray-900 tracking-wide">Add-ons & Extensions</h4>
                </div>
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
                     A great system is made exceptional with the right extensions.
                   </p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction / Why Add-ons? */}
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
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Enhancement</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Maximize Your NetSuite ROI
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                While NetSuite provides a robust core, every business has unique requirements. Our add-ons and extensions are built to solve those specific "last mile" challenges—whether it's local tax compliance in India, complex commission structures, or high-volume e-commerce syncing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                By leveraging our pre-built solutions and SuiteCloud expertise, you can avoid costly custom development and deploy industry-standard functionalities in a fraction of the time.
              </p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Consult with an Expert <ArrowRight size={18} />
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
                src="/images/aboutus/niche1.webp" 
                alt="NetSuite Extensions" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Expansion Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Suite Extension Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just provide apps; we provide end-to-end expertise to ensure they work seamlessly with your specific configuration.
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
                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                  {service.description}
                </p>
                <Link href={service.href} className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Add-ons Grid */}
      <section id="solutions" className="py-24 border-y bg-[#000b21] border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Popular Add-ons</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Explore our highest-rated extensions used by market leaders across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addons.map((feature, index) => (
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
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">{feature.cardTitle}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <div className="w-10 h-1 bg-blue-500 rounded-full" />
                  <p className="text-gray-300 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>

                <Link href="/free-consultation" className="mt-8 inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition group/link text-xs uppercase tracking-widest">
                  View Specs
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
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
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Overcoming Growth Hurdles</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1 space-y-4">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeChallenge === index ? 'bg-gray-50 border-gray-200' : 'bg-transparent border-transparent hover:bg-gray-50/50'
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
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Advantages of Our Extension Suite</h3>
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
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
                    <div className={`p-2 rounded-full ${activeBenefit === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold ${activeBenefit === index ? 'text-gray-900' : 'text-gray-500'}`}>
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
                 Supercharge your NetSuite today. Ready to explore our apps?
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

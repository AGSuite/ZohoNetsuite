"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Network,
  Sliders,
  Headphones,
  Laptop,
  Users,
  Package,
  Megaphone,
  Newspaper,
  ShoppingCart,
  Truck,
  Factory,
  Building2,
  Phone,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------ SERVICES DATA (With Exact Images) ------------------ */
const services = [
  {
    title: "NetSuite Implementation",
    description:
      "The implementation process involves defining clear objectives and delivering a functional scope. A thorough fit gap analysis is conducted to customize the project work plan based on existing business processes.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bgImage: "/images/services/ns_service_digital_transformation_new.webp",
    href: "/netsuite-erp-and-crm-implementation",
  },
  {
    title: "NetSuite Integration",
    description:
      "Integration services seamlessly connect NetSuite with existing systems, facilitating smooth data flow and process synchronization. Operations are optimized, and access to consolidated data across platforms is provided.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    bgImage: "/images/services/ns_service_integration_new.webp",
    href: "/netsuite-integration",
  },
  {
    title: "NetSuite Customization",
    description:
      "Tailoring NetSuite to suit specific business needs maximizes its potential to meet unique requirements. Customization options range from configuring workflows to adapting reporting and dashboards.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    bgImage: "/images/services/ns_service_low_code_new.webp",
    href: "/netsuite-customization",
  },
  {
    title: "NetSuite Managed Support",
    description:
      "Comprehensive managed support services ensure smooth operation and continuous optimization of the NetSuite system. Proactive monitoring, troubleshooting, and maintenance address issues promptly.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bgImage: "/images/services/ns_service_managed_new.webp",
    href: "/netsuite-managed-support",
  },
];

/* ------------------ ICON MAPPING & ROUTES ------------------ */
const industryIconMap: Record<string, React.ElementType> = {
  "Software and Technology": Laptop,
  "IT and Professional Services": Users,
  "Wholesale Distribution": Package,
  "Advertising and Digital Marketing Agencies": Megaphone,
  "Media and Publishing": Newspaper,
  "Retail & E-Commerce": ShoppingCart,
  "Transportation and Logistics": Truck,
  "Manufacturing": Factory,
  "Financial Services": Building2,
  "Telecom": Phone,
};

const industryRoutes: Record<string, string> = {
  "Software and Technology": "/netsuite/software-and-technology",
  "IT and Professional Services": "/netsuite/it-and-professional-services",
  "Wholesale Distribution": "/netsuite/wholesale-distribution",
  "Advertising and Digital Marketing Agencies": "/netsuite/advertising-and-digital-marketing-agencies",
  "Media and Publishing": "/netsuite/media-and-publishing",
  "Retail & E-Commerce": "/netsuite/retail-and-e-commerce",
  "Transportation and Logistics": "/netsuite/transportation-and-logistics",
  "Manufacturing": "/netsuite/manufacturing",
  "Financial Services": "/netsuite/financial-services",
  "Telecom": "/netsuite/telecom-industry",
};

/* ------------------ LIGHT GRADIENTS ------------------ */
const cardBgColors = [
  "bg-gradient-to-br from-[#ffffff] to-[#eef0ff]",
  "bg-gradient-to-br from-[#ffffff] to-[#eaf6ff]",
  "bg-gradient-to-br from-[#ffffff] to-[#e8ffef]",
  "bg-gradient-to-br from-[#ffffff] to-[#f9eaff]",
  "bg-gradient-to-br from-[#ffffff] to-[#ffece8]",
  "bg-gradient-to-br from-[#ffffff] to-[#eaf8ff]",
  "bg-gradient-to-br from-[#ffffff] to-[#fff6da]",
  "bg-gradient-to-br from-[#ffffff] to-[#ededed]",
];

/* ------------------ INDUSTRIES DATA (NETSUITE) ------------------ */
const industries = [
  {
    id: 1,
    title: "Software and Technology",
    description: "Accelerate innovation, automate financial operations, and scale globally with AI-powered cloud ERP built for fast-growing software and technology businesses.",
  },
  {
    id: 2,
    title: "IT and Professional Services",
    description: "Streamline project delivery, resource utilization, billing, and profitability with real-time visibility across your entire services operation.",
  },
  {
    id: 3,
    title: "Wholesale Distribution",
    description: "Optimize inventory, warehousing, procurement, and supply chain operations with intelligent, real-time distribution management.",
  },
  {
    id: 4,
    title: "Advertising and Digital Marketing Agencies",
    description: "Manage campaigns, client billing, project profitability, and creative workflows seamlessly from a single unified platform.",
  },
  {
    id: 5,
    title: "Media and Publishing",
    description: "Drive subscription growth, automate revenue recognition, and manage digital content operations with complete business visibility.",
  },
  {
    id: 6,
    title: "Retail & E-Commerce",
    description: "Deliver connected omnichannel experiences with real-time inventory, order management, customer insights, and AI-driven commerce operations.",
  },
  {
    id: 7,
    title: "Transportation and Logistics",
    description: "Gain real-time visibility into fleet operations, logistics planning, shipment tracking, and supply chain performance.",
  },
  {
    id: 8,
    title: "Manufacturing",
    description: "Improve production planning, inventory control, procurement, and shop floor efficiency with intelligent manufacturing automation.",
  },
  {
    id: 9,
    title: "Financial Services",
    description: "Automate accounting, strengthen compliance, accelerate financial close, and gain real-time financial intelligence with AI-powered ERP.",
  },
  {
    id: 10,
    title: "Telecom",
    description: "Manage complex billing, subscriptions, financial operations, and multi-location telecom networks with a scalable cloud ERP platform.",
  },
];

/* ------------------ ANIMATIONS ------------------ */
const iconVariants: Variants = {
  initial: { rotate: 0, y: 0 },
  hover: {
    rotate: 360,
    y: -6,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const cardVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function LandingServicesIndustries() {
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        // Background fade
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(overlayRef.current, { opacity: 0.92, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 1, duration: 0.5 });
          },
          onLeave: () => {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(overlayRef.current, { opacity: 0.92, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
          },
        });

        // Title color switch
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to(".landing-services-title", { color: "#fff", duration: 0.5 }),
          onLeave: () => gsap.to(".landing-services-title", { color: "#0f172a", duration: 0.5 }),
          onEnterBack: () => gsap.to(".landing-services-title", { color: "#fff", duration: 0.5 }),
          onLeaveBack: () => gsap.to(".landing-services-title", { color: "#0f172a", duration: 0.5 }),
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div id="businessGrow" className="font-['DM_Sans',sans-serif]">

      {/* ── SECTION 1: OUR NETSUITE SERVICES (GSAP Background Fade & Hover Cards) ── */}
      <section ref={sectionRef} className="relative pt-16 pb-24 overflow-hidden">
        {/* Background Base */}
        <div className="absolute inset-0 bg-slate-50 z-0" />

        {/* GSAP Black Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-slate-950 opacity-0 z-1 transition-opacity pointer-events-none"
        />

        {/* GSAP Purple/Blue Glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 opacity-0 z-2 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.25),transparent_70%)] pointer-events-none transition-opacity"
        />

        {/* DESKTOP VIEW - Single Row of 4 Cards */}
        <div className="hidden lg:block relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xs">
              End-to-End Capabilities
            </span>
            <h2 className="landing-services-title text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 transition-colors duration-500 mb-5 leading-tight text-center">
              Our NetSuite Services
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-center">
              Tailored implementation, integration, customization, and continuous managed support for peak ERP performance.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex justify-center gap-5" onMouseLeave={() => setActiveIdx(-1)}>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`relative w-[300px] h-[480px] rounded-2xl overflow-hidden shadow-xl cursor-pointer shrink-0 transition-all duration-500 ${activeIdx === index ? "scale-[1.03] shadow-2xl z-30" : "scale-100 opacity-95"
                    }`}
                  onMouseEnter={() => setActiveIdx(index)}
                >
                  {/* Background Image - Visible by default, hidden when active */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 z-0 ${activeIdx === index ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <Image
                      src={service.bgImage}
                      alt={`Oracle NetSuite ${service.title} Services — AGSuite Technologies`}
                      fill
                      className="object-cover"
                      sizes="350px"
                      quality={80}
                    />
                    {/* Black gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                  </div>

                  {/* Default Inactive State - Image with Bottom-Aligned Content */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 z-10 p-6 flex flex-col justify-end ${activeIdx === index ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                  >
                    <div className="space-y-3">
                      <div className="text-white w-9 h-9">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/85 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover/Active State - White Background with Left-Aligned Content */}
                  <div
                    className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 p-7 flex flex-col justify-between ${activeIdx === index ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="space-y-4 pt-2">
                      <div className="text-black w-10 h-10">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-extrabold text-black leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA Button with Gradient Glow */}
                    <div className="relative inline-flex items-center group/btn w-fit">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 blur-sm opacity-80 group-hover/btn:opacity-100 transition duration-300" />
                      <Link
                        href="#hero"
                        onClick={scrollToHero}
                        className="relative px-6 py-3 bg-black hover:bg-slate-900 text-white rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-2 shadow-sm"
                      >
                        <span>Inquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TABLET VIEW - 2x2 Grid */}
        <div className="hidden md:block lg:hidden relative z-10">
          <div className="text-center mb-12 px-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
              End-to-End Capabilities
            </span>
            <h2 className="landing-services-title text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our NetSuite Services
            </h2>
          </div>

          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-6" onMouseLeave={() => setActiveIdx(-1)}>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`relative w-full h-[440px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ${activeIdx === index ? "scale-[1.02] shadow-2xl z-30" : "scale-100"
                    }`}
                  onMouseEnter={() => setActiveIdx(index)}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 z-0 ${activeIdx === index ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  <div
                    className={`absolute inset-0 transition-opacity duration-500 z-10 p-6 flex flex-col justify-end ${activeIdx === index ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                  >
                    <div className="space-y-3">
                      <div className="text-white w-9 h-9">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-xs text-white/85 line-clamp-3">{service.description}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 p-7 flex flex-col justify-between ${activeIdx === index ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="space-y-4 pt-2">
                      <div className="text-black w-10 h-10">{service.icon}</div>
                      <h3 className="text-2xl font-extrabold text-black">{service.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{service.description}</p>
                    </div>

                    <Link
                      href="#hero"
                      onClick={scrollToHero}
                      className="px-6 py-3 bg-black text-white rounded-full font-bold text-xs flex items-center gap-2 w-fit shadow-md"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden px-6 relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">
              End-to-End Capabilities
            </span>
            <h2 className="landing-services-title text-3xl font-extrabold text-slate-900">
              Our NetSuite Services
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={service.bgImage}
                  alt={`Oracle NetSuite ${service.title} Services — AGSuite Technologies`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 48px), 100vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2.5 text-white">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <div className="flex justify-between items-end gap-3">
                    <p className="text-xs text-white/90 leading-relaxed line-clamp-2 max-w-[65%]">
                      {service.description}
                    </p>
                    <Link
                      href="#hero"
                      onClick={scrollToHero}
                      className="px-4 py-2 bg-white text-black text-xs rounded-full font-bold flex items-center gap-1 shrink-0 shadow-md"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INDUSTRIES SECTION (With Moving Background Design) ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 relative overflow-hidden">
        {/* Dynamic Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <style>{`
            @keyframes blob-float-1 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(45px, -55px) scale(1.1); }
              66% { transform: translate(-35px, 35px) scale(0.95); }
            }
            @keyframes blob-float-2 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(-60px, 45px) scale(1.08); }
              66% { transform: translate(40px, -40px) scale(0.92); }
            }
            @keyframes blob-float-3 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(35px, 45px) scale(1.15); }
            }
            @keyframes dash-drift {
              to { stroke-dashoffset: -800; }
            }
            .animate-blob-1 { animation: blob-float-1 18s ease-in-out infinite; }
            .animate-blob-2 { animation: blob-float-2 22s ease-in-out infinite; }
            .animate-blob-3 { animation: blob-float-3 15s ease-in-out infinite; }
            .animate-dash-flow { animation: dash-drift 40s linear infinite; }
            .animate-dash-flow-rev { animation: dash-drift 55s linear infinite reverse; }
          `}</style>

          {/* Dot Matrix Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

          {/* Floating Gradient Orbs */}
          <div className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-300/15 to-indigo-400/20 blur-[110px] animate-blob-1" />
          <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-400/20 via-pink-300/15 to-indigo-300/20 blur-[120px] animate-blob-2" />
          <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-300/15 via-teal-300/15 to-blue-300/15 blur-[100px] animate-blob-3" />

          {/* Flowing Wave Curves */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ind-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="ind-wave-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M-100,120 C300,260 600,-40 1100,190 C1500,390 1800,100 2200,240"
              fill="none"
              stroke="url(#ind-wave-1)"
              strokeWidth="2"
              strokeDasharray="14 14"
              className="animate-dash-flow"
            />
            <path
              d="M-50,480 C400,290 800,620 1300,410 C1700,230 2000,530 2300,390"
              fill="none"
              stroke="url(#ind-wave-2)"
              strokeWidth="1.5"
              strokeDasharray="10 10"
              className="animate-dash-flow-rev"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-5 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Industry Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-5 leading-tight text-center">
              Industries We Serve with NetSuite
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-center">
              We specialize in tailored consulting and technology to empower businesses across diverse sectors with Oracle NetSuite.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mt-4">
            {industries.map((ind, idx) => {
              const Icon = industryIconMap[ind.title] || Laptop;
              const href = industryRoutes[ind.title] || "#hero";
              const cardBg = cardBgColors[idx % cardBgColors.length];

              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: "easeOut" }}
                  className="h-full"
                >
                  <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    className={`
                      relative group rounded-2xl p-7 border border-gray-200/90 
                      transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:border-blue-300
                      flex flex-col justify-between backdrop-blur-xs
                      ${cardBg}
                    `}
                  >
                    <div>
                      {/* ICON WITH 360 ROTATE */}
                      <motion.div
                        variants={iconVariants}
                        className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5 shadow-md"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* TITLE */}
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {ind.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">
                        {ind.description}
                      </p>
                    </div>

                    {/* LINK */}
                    <div className="mt-6 border-t border-gray-300/80 pt-3">
                      <Link
                        href={href}
                        className="text-black group-hover:text-blue-600 text-sm font-medium transition-all inline-flex items-center gap-1"
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

    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpCircle,
  Check,
  Compass,
  Database,
  GraduationCap,
  Headphones,
  Layers3,
  RefreshCw,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Odoo Consulting",
    description: "Define the right Odoo roadmap before configuration begins, grounded in business priorities, process realities, and measurable outcomes.",
    image: "/images/odoo-services/generated-v2/odoo-consulting-v2.webp",
    icon: Compass,
    points: ["Business process assessment", "Application and rollout roadmap", "Solution architecture planning"],
  },
  {
    title: "Odoo Implementation",
    description: "Translate business requirements into a phased Odoo setup with clear ownership, validation, and adoption milestones.",
    image: "/images/odoo-services/generated-v2/odoo-implementation-v2.webp",
    icon: Layers3,
    points: ["Process discovery and design", "Configuration and data migration", "Testing, training, and launch"],
  },
  {
    title: "Odoo Customization",
    description: "Configure workflows, permissions, screens, and reports around the way your teams actually work.",
    image: "/images/odoo-services/generated-v2/odoo-customization-v2.webp",
    icon: Wrench,
    points: ["Role-based screens", "Tailored workflows and approvals", "Custom operational reports"],
  },
  {
    title: "Odoo Integration",
    description: "Connect Odoo with the systems that need to remain part of your operating landscape.",
    image: "/images/odoo-services/generated-v2/odoo-integration-v2.webp",
    icon: RefreshCw,
    points: ["API and third-party integrations", "Reliable cross-platform flows", "Connected business operations"],
  },
  {
    title: "Data Migration",
    description: "Move essential business data into Odoo through controlled cleansing, mapping, validation, and reconciliation.",
    image: "/images/odoo-services/generated-v2/odoo-data-migration-v2.webp",
    icon: Database,
    points: ["Data audit and cleansing", "Secure staged migration", "Validation and reconciliation"],
  },
  {
    title: "Version Upgrade",
    description: "Modernize an existing Odoo environment while protecting custom modules, integrations, data quality, and business continuity.",
    image: "/images/odoo-services/generated-v2/odoo-version-upgrade-v2.webp",
    icon: ArrowUpCircle,
    points: ["Upgrade assessment", "Module compatibility checks", "Controlled release and testing"],
  },
  {
    title: "Training & Adoption",
    description: "Prepare administrators and business users with practical role-based training for confident day-to-day adoption.",
    image: "/images/odoo-services/generated-v2/odoo-training-adoption-v2.webp",
    icon: GraduationCap,
    points: ["Role-based user training", "Administrator enablement", "Guides and adoption support"],
  },
  {
    title: "Managed Support",
    description: "Keep the platform dependable with user support, monitoring, performance improvements, and structured enhancement releases.",
    image: "/images/odoo-services/generated-v2/odoo-managed-support-v2.webp",
    icon: Headphones,
    points: ["Functional and technical support", "Platform monitoring", "Continuous optimization"],
  },
];

export default function OdooServicesBenefits() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const copyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const context = gsap.context(() => {
        const setDarkTheme = (isDark: boolean) => {
          gsap.to(overlayRef.current, { opacity: isDark ? 0.96 : 0, duration: 0.5 });
          gsap.to(glowRef.current, { opacity: isDark ? 1 : 0, duration: 0.5 });
          gsap.to(titleRef.current, { color: isDark ? "#ffffff" : "#0f172a", duration: 0.5 });
          gsap.to(copyRef.current, { color: isDark ? "rgba(255,255,255,0.68)" : "#475569", duration: 0.5 });
        };

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setDarkTheme(true),
          onLeave: () => setDarkTheme(false),
          onEnterBack: () => setDarkTheme(true),
          onLeaveBack: () => setDarkTheme(false),
        });
      }, sectionRef);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative scroll-mt-28 overflow-hidden bg-white px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />
      <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-0" />
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_10%,rgba(100,59,159,0.28),transparent_42%),radial-gradient(circle_at_90%_70%,rgba(37,99,235,0.14),transparent_32%)] opacity-0" />
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 ref={titleRef} className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em] text-slate-900 transition-colors duration-500">
            Our Odoo Services
          </h2>
          <p ref={copyRef} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 transition-colors duration-500 sm:text-lg">
            End-to-end expertise for every stage of your Odoo journey, from strategy and implementation to training and continuous optimization.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                onMouseEnter={() => setActiveService(index)}
                onFocusCapture={() => setActiveService(index)}
                className={`group relative h-[430px] overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-all duration-500 focus-within:ring-2 focus-within:ring-[#a78bfa] ${
                  isActive ? "z-10 scale-[1.02] shadow-2xl shadow-[#643b9f]/25" : "opacity-95 hover:opacity-100"
                }`}
              >
                <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isActive ? "md:opacity-0" : "opacity-100"}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5" />
                </div>

                <div className={`absolute inset-0 z-10 flex flex-col justify-end p-6 transition-opacity duration-500 ${isActive ? "md:pointer-events-none md:opacity-0" : "opacity-100"}`}>
                  <div className="space-y-3">
                    <Icon className="h-10 w-10 text-white" strokeWidth={1.8} />
                    <h3 className="text-xl font-bold leading-tight text-white">{service.title}</h3>
                    <p className="line-clamp-3 text-sm leading-6 text-white/80">{service.description}</p>
                    <a href="#contact" className="inline-flex rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur md:hidden">
                      Know More
                    </a>
                  </div>
                </div>

                <div className={`absolute inset-0 z-20 hidden flex-col justify-between bg-white p-6 transition-opacity duration-500 md:flex ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                  <div>
                    <Icon className="h-11 w-11 text-black" strokeWidth={1.7} />
                    <h3 className="mt-5 text-xl font-extrabold leading-tight text-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                          <Check size={14} className="mt-0.5 shrink-0 text-[#643b9f]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative w-fit">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 opacity-80 blur-sm transition group-hover:opacity-100" />
                    <a href="#contact" className="relative inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-900">
                      Know More
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
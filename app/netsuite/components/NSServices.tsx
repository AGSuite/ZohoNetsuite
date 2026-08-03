"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  title: string;
  heading: string;
  description: string;
  bgImage: string;
  href: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Digital Transformation",
    heading: "",
    description: "Modernize your business with our strategic digital transformation roadmap.",
    bgImage: "/images/Services/ns_service_digital_transformation_new.png",
    href: "/netsuite/services/digital-transformation",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Integration Services",
    heading: "",
    description: "Seamlessly connect NetSuite with your entire tech ecosystem via robust APIs.",
    bgImage: "/images/Services/ns_service_integration_new.png",
    href: "/netsuite/services/integration-services",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Training Services",
    heading: "",
    description: "Upskill your team with expert-led NetSuite training to maximize platform adoption.",
    bgImage: "/images/Services/ns_service_training_new.png",
    href: "/netsuite/services/training-services",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Low-Code Development",
    heading: "",
    description: "Build custom SuiteApps and extend your ERP faster with minimal coding.",
    bgImage: "/images/Services/ns_service_low_code_new.png",
    href: "/netsuite/services/low-code",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Managed Services",
    heading: "",
    description: "End-to-end support and dedicated management for smooth NetSuite operations.",
    bgImage: "/images/Services/ns_service_managed_new.png",
    href: "/netsuite/services/managed-services",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];


export default function NSServices() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
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
            gsap.to(overlayRef.current, { opacity: 0.9, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 1, duration: 0.5 });
          },
          onLeave: () => {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(overlayRef.current, { opacity: 0.9, duration: 0.5 });
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
          onEnter: () => gsap.to(".services-title", { color: "#fff", duration: 0.5 }),
          onLeave: () => gsap.to(".services-title", { color: "#1f2937", duration: 0.5 }),
          onEnterBack: () => gsap.to(".services-title", { color: "#fff", duration: 0.5 }),
          onLeaveBack: () => gsap.to(".services-title", { color: "#1f2937", duration: 0.5 }),
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 z-1 transition-opacity"
      />

      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 z-2
        bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.25),transparent_70%)]
        pointer-events-none transition-opacity"
      />

      {/* DESKTOP VIEW - Single Row */}
      <div className="hidden lg:block relative z-10">
        <div className="text-center mb-12">
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 transition-colors duration-500">
            Our NetSuite Services
          </h2>
        </div>

        <div className="max-w-[1450px] mx-auto px-8">
          <div className="flex justify-center gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`relative w-[260px] h-[460px] rounded-2xl overflow-hidden shadow-xl cursor-pointer shrink-0 transition-all duration-500 ${activeIdx === index ? "scale-[1.03] shadow-2xl z-30" : "scale-100 opacity-95"}`}
                onMouseEnter={() => setActiveIdx(index)}
              >
                {/* Background Image - Visible by default, hidden when active */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-0 ${activeIdx === index ? "opacity-0" : "opacity-100"
                    }`}
                >
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                    quality={75}
                  />
                  {/* Black gradient overlay - transparent top to dark bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Default State - Image with Bottom-Aligned Content */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-10 p-5 flex flex-col justify-end ${activeIdx === index ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                  <div className="space-y-2.5">
                    <div className="text-white w-9 h-9">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover/Active State - White Background with Left-Aligned Content */}
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 p-6 flex flex-col justify-between ${activeIdx === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <div className="space-y-3.5 pt-2">
                    <div className="text-black w-10 h-10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-black leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button with Light Gradient Shadow */}
                  <div className="relative inline-flex items-center group/btn w-fit">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 blur-sm opacity-80 group-hover/btn:opacity-100 transition duration-300" />
                    <Link href={service.href} className="relative">
                      <button
                        suppressHydrationWarning={true}
                        className="relative px-5 py-2.5 bg-black hover:bg-gray-900 text-white rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Know More</span>
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABLET VIEW - 2 columns */}
      <div className="hidden md:block lg:hidden relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
            Our NetSuite Services
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ${activeIdx === index ? "scale-[1.02] shadow-2xl z-30" : "scale-100"}`}
                onMouseEnter={() => setActiveIdx(index)}
              >
                {/* Background Image */}
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
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Default State */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-10 p-5 flex flex-col justify-end ${activeIdx === index ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                  <div className="space-y-2.5">
                    <div className="text-white w-9 h-9">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover/Active State */}
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 p-6 flex flex-col justify-between ${activeIdx === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <div className="space-y-3.5 pt-2">
                    <div className="text-black w-10 h-10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-black leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative inline-flex items-center group/btn w-fit">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 blur-sm opacity-80 group-hover/btn:opacity-100 transition duration-300" />
                    <Link href={service.href} className="relative">
                      <button
                        suppressHydrationWarning={true}
                        className="relative px-5 py-2.5 bg-black hover:bg-gray-900 text-white rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Know More</span>
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
            Our NetSuite Services
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative w-full h-[260px] bg-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src={service.bgImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) calc(100vw - 48px), 100vw"
                quality={75}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2.5 text-white">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <div className="flex justify-between items-end gap-3">
                  <p className="text-xs text-white/90 leading-relaxed line-clamp-2 max-w-[65%]">{service.description}</p>
                  <div className="relative inline-flex items-center group/btn shrink-0">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 blur-xs opacity-70" />
                    <Link href={service.href} className="relative">
                      <button
                        suppressHydrationWarning={true}
                        className="relative px-4 py-2 bg-black text-white text-xs rounded-full font-bold flex items-center gap-1 transition-all"
                      >
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

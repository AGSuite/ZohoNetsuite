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
    description:
      "Modernize your business operations with Zoho's unified cloud operating system designed for scalability.",
    bgImage: "/images/Services/Digitalservices.webp",
    href: "/zoho/services/digital-transformation",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Zoho Implementation",
    heading: "",
    description:
      "Seamless setup and configuration of Zoho One, CRM, Books, and other apps tailored to your unique workflows.",
    bgImage: "/images/Services/managedservices.webp",
    href: "/zoho/services/implementation",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Integration Services",
    heading: "",
    description:
      "Connect Zoho seamlessly with your existing third-party applications using Zoho Flow and custom API integrations.",
    bgImage: "/images/Services/integrationservices.webp",
    href: "/zoho/services/integration",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Custom App Development",
    heading: "",
    description:
      "Build custom low-code applications with Zoho Creator to automate unique business processes and eliminate spreadsheets.",
    bgImage: "/images/Services/lowcodeservices.webp",
    href: "/zoho/services/creator-development",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Training & Support",
    heading: "",
    description:
      "Empower your team with comprehensive training and ongoing managed support to maximize your Zoho investment.",
    bgImage: "/images/Services/trainingservices.webp",
    href: "/zoho/services/training-services",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ZohoServices() {
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
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 1, duration: 0.5 });
          },
          onLeave: () => {
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
            gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.5 });
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
      ScrollTrigger.killAll();
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
        bg-[radial-gradient(circle_at_50%_20%,rgba(225,29,72,0.25),transparent_70%)]
        pointer-events-none transition-opacity"
      />

      {/* DESKTOP VIEW - Single Row */}
      <div className="hidden lg:block relative z-10">
        <div className="text-center mb-12">
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 transition-colors duration-500">
            Our Zoho Services
          </h2>
        </div>

        <div className="max-w-[1450px] mx-auto px-8">
          <div className="flex justify-center gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative w-[260px] h-[480px] rounded-2xl overflow-hidden shadow-xl cursor-pointer shrink-0 transition-all duration-500"
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
                  />
                  {/* Black gradient overlay - transparent top to dark bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
                </div>

                {/* Default State - Image with Left-Aligned Content */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-10 px-5 ${activeIdx === index ? "opacity-0" : "opacity-100"
                    }`}
                >
                  {/* Icon - Positioned lower in default state */}
                  <div className="absolute bottom-[170px] left-5 transition-all duration-500">
                    <div className="text-white w-12 h-12">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content - Positioned at bottom in default state */}
                  <div className="absolute bottom-6 left-5 right-5 text-left transition-all duration-500">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description - Equal length */}
                    <p className="text-base text-white/90 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover/Active State - White Background with Left-Aligned Content */}
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 px-5 ${activeIdx === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {/* Icon - Fixed position from bottom, No background */}
                  <div className="absolute bottom-[260px] left-5">
                    <div className="text-rose-600 w-12 h-12">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content - Fixed position from bottom */}
                  <div className="absolute bottom-[100px] left-5 right-5 text-left">
                    {/* Title */}
                    <h3 className="text-2xl font-medium text-rose-600 mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed mb-0 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="absolute bottom-6 left-5">
                    <Link href={service.href}>
                      <button className="px-6 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 hover:shadow-lg transition-all duration-300 text-sm w-fit">
                        Know More
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
            Our Zoho Services
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500"
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
                  />
                  {/* Black gradient overlay - transparent top to dark bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
                </div>

                {/* Default State - Image with Left-Aligned Content */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-10 px-5 ${activeIdx === index ? "opacity-0" : "opacity-100"
                    }`}
                >
                  {/* Icon - Positioned lower in default state */}
                  <div className="absolute bottom-[170px] left-5 transition-all duration-500">
                    <div className="text-white w-12 h-12">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content - Positioned at bottom in default state */}
                  <div className="absolute bottom-6 left-5 right-5 text-left transition-all duration-500">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description - Equal length */}
                    <p className="text-base text-white/90 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover/Active State - White Background with Left-Aligned Content */}
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 px-5 ${activeIdx === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {/* Icon - Fixed position from bottom, No background */}
                  <div className="absolute bottom-[260px] left-5">
                    <div className="text-rose-600 w-12 h-12">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content - Fixed position from bottom */}
                  <div className="absolute bottom-[100px] left-5 right-5 text-left">
                    {/* Title */}
                    <h3 className="text-2xl font-medium text-rose-600 mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed mb-0 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="absolute bottom-6 left-5">
                    <Link href={service.href}>
                      <button className="px-6 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 hover:shadow-lg transition-all duration-300 text-sm w-fit">
                        Know More
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
            Our Zoho Services
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative w-full h-[280px] bg-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src={service.bgImage}
                alt={service.title}
                fill
                className="object-cover"
              />

              {/* Gradient overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              {/* Title + Button always visible on mobile */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 text-white">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <div className="flex justify-between items-end">
                  <p className="text-base opacity-90 line-clamp-2 max-w-[70%]">{service.description}</p>
                  <Link href={service.href}>
                    <button className="px-5 py-2.5 bg-white text-black text-sm rounded-full font-semibold shrink-0 hover:bg-rose-50 transition-all">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

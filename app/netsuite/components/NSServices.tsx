"use client";

import React, { useEffect, useRef } from "react";
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
}

const services: ServiceItem[] = [
  {
    title: "Digital Transformation",
    heading: "",
    description:
      "Empowering businesses with modern, scalable, and automated digital solutions that streamline operations and accelerate growth.",
    bgImage: "/images/Services/Digitalservices.webp",
    href: "/netsuite/services/digital-transformation",
  },
  {
    title: "Integration Services",
    heading: "",
    description:
      "Connect your apps, ERP, CRM, and workflows seamlessly using API-led, cloud-to-cloud, and hybrid integrations tailored for your business.",
    bgImage: "/images/lap/group2.webp",
    href: "/netsuite/services/integration",
  },
  {
    title: "Implementation",
    heading: "",
    description:
      "Expert NetSuite implementation services ensuring a smooth transition ensuring your business processes are optimized for success.",
    bgImage: "/images/Services/trainingservices.webp",
    href: "/netsuite/services/implementation",
  },
  {
    title: "SuiteCloud Development",
    heading: "",
    description:
      "Build fast, efficient, and scalable business apps with NetSuite's SuiteCloud platform to automate processes and improve productivity.",
    bgImage: "/images/Services/lowcodeservices.webp",
    href: "/netsuite/services/suitecloud",
  },
  {
    title: "Managed Services",
    heading: "",
    description:
      "End-to-end support, monitoring, and optimization of your NetSuite environment so your business runs smoothly without downtime.",
    bgImage: "/images/Services/managedservices.webp",
    href: "/netsuite/services/managed-services",
  },
];

export default function NSServices() {
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
        bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.25),transparent_70%)]
        pointer-events-none transition-opacity"
      />

      {/* DESKTOP VIEW - Single Row */}
      <div className="hidden lg:block relative z-10">
        <div className="text-center mb-12">
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 transition-colors duration-500">
            Our NetSuite Services
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-center gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative w-[240px] h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-lg cursor-pointer group shrink-0"
              >
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Hover overlay with background color change */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/85 to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* White box at bottom left with title (default view) */}
                <div className="absolute bottom-3 left-0 bg-white px-4 py-3 rounded-tr-lg shadow-md group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Center content on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 transform scale-100 group-hover:scale-110 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-sm">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABLET VIEW - 2 columns */}
      <div className="hidden md:block lg:hidden relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our NetSuite Services
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative w-full h-[340px] rounded-2xl overflow-hidden bg-gray-200 shadow-lg cursor-pointer group"
              >
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Hover overlay with background color change */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/85 to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Top title (default view) */}
                <div className="absolute top-5 left-5 right-5 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* Center content on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 transform scale-100 group-hover:scale-110 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-sm">
                      Know More
                    </button>
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
          <h2 className="text-3xl font-bold text-gray-900">
            Our NetSuite Services
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
                    <button className="px-5 py-2.5 bg-white text-black text-sm rounded-full font-semibold shrink-0 hover:bg-blue-50 transition-all">
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


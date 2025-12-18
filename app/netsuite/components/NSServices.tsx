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
    bgImage: "/images/services/Digitalservices.webp",
    href: "/netsuite/services/digital-transformation",
  },
  {
    title: "Integration Services",
    heading: "",
    description:
      "Connect your apps, ERP, CRM, and workflows seamlessly using API-led, cloud-to-cloud, and hybrid integrations tailored for your business.",
    bgImage: "/images/services/integrationservices.webp",
    href: "/netsuite/services/integration",
  },
  {
    title: "Implementation",
    heading: "",
    description:
      "Expert NetSuite implementation services ensuring a smooth transition ensuring your business processes are optimized for success.",
    bgImage: "/images/services/trainingservices.webp",
    href: "/netsuite/services/implementation",
  },
  {
    title: "SuiteCloud Development",
    heading: "",
    description:
      "Build fast, efficient, and scalable business apps with NetSuite's SuiteCloud platform to automate processes and improve productivity.",
    bgImage: "/images/services/lowcodeservices.webp",
    href: "/netsuite/services/suitecloud",
  },
  {
    title: "Managed Services",
    heading: "",
    description:
      "End-to-end support, monitoring, and optimization of your NetSuite environment so your business runs smoothly without downtime.",
    bgImage: "/images/services/managedservices.webp",
    href: "/netsuite/services/managed-services",
  },
];


export default function NSServices() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !rowRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          rowRef.current!.querySelectorAll(".service-card-wrapper")
        );

        const cardWidth = 360;
        const gap = 24;
        const sidePadding = 40;

        const totalCardsWidth =
          cards.length * cardWidth +
          (cards.length - 1) * gap +
          sidePadding * 2;

        const viewportWidth = window.innerWidth;
        const scrollLength = totalCardsWidth - viewportWidth;

        // Horizontal scroll with pin
        gsap.to(rowRef.current, {
          x: -scrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${scrollLength}`,
          },
        });

        // Background fade
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          onEnter: () => {
            gsap.set(overlayRef.current, { opacity: 1 });
            gsap.set(glowRef.current, { opacity: 1 });
          },
          onLeaveBack: () => {
            gsap.set(overlayRef.current, { opacity: 0 });
            gsap.set(glowRef.current, { opacity: 0 });
          },
        });

        // Title color switch
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          onEnter: () => gsap.set(".services-title", { color: "#fff" }),
          onLeaveBack: () => gsap.set(".services-title", { color: "#0f172a" }),
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
    <div className="pin-wrapper">
      <section ref={sectionRef} className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-white z-0" />

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 z-1"
        />

        {/* Glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 opacity-0 z-2
          bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.25),transparent_70%)]
          pointer-events-none"
        />

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex relative z-10 min-h-screen overflow-hidden flex-col">
          <div className="pt-10 pb-8 text-center">
            <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black transition-colors duration-500">
              Our NetSuite Services
            </h2>
          </div>

          <div className="flex-1 flex items-center overflow-hidden">
            <div ref={rowRef} className="flex gap-6 px-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service-card-wrapper shrink-0"
                >
                  <div className="relative w-[360px] h-[520px] rounded-3xl overflow-hidden bg-gray-200 shadow-xl cursor-pointer group">
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    {/* Hover overlay - Darker as requested */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 duration-500" />

                    {/* Top title (default view) */}
                    <div className="absolute top-8 left-8 right-8 text-white group-hover:opacity-0 duration-300">
                      <h3 className="text-3xl font-semibold drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>

                    {/* Center content on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white opacity-0 group-hover:opacity-100 duration-500">
                      <h3 className="text-2xl font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-base font-medium opacity-100">
                        {service.description}
                      </p>
                      <Link href={service.href}>
                        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                          Explore →
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
        <div className="lg:hidden px-6 py-20 space-y-14 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900">
            Our NetSuite Services
          </h2>

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
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

              {/* Title + Button always visible on mobile */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 text-white">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <div className="flex justify-between items-end">
                  <p className="text-sm opacity-90 line-clamp-2 max-w-[70%]">{service.description}</p>
                  <Link href={service.href}>
                    <button className="px-4 py-2 bg-white text-black text-sm rounded-full font-medium shrink-0">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

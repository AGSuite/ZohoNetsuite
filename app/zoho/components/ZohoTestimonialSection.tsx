"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Chen",
    role: "Sales Director",
    company: "Growth Marketing",
    content:
      "Zoho CRM has revolutionized our sales process. We've automated 80% of our lead follow-ups and seen a 30% conversion increase.",
    avatar:
      "/images/people/laptopmen.webp"
  },
  {
    id: 2,
    name: "Jennifer Wu",
    role: "HR Manager",
    company: "Global Tech Services",
    content:
      "Zoho People simplified our entire HR workflow. Onboarding new employees used to take days, now it's done in hours.",
    avatar:
      "/images/people/laptopgirl.webp"
  },
  {
    id: 3,
    name: "Robert Evans",
    role: "COO",
    company: "ServiceFirst Inc.",
    content:
      "Integrating Zoho Desk with our CRM gave us a 360-degree view of our customers. Support resolution times dropped by half.",
    avatar:
      "/images/people/laptopmen2.webp"
  },
  {
    id: 4,
    name: "Amanda Lewis",
    role: "Finance Head",
    company: "Creative Designs",
    content:
      "Zoho Books is incredibly intuitive. Invoicing and expense tracking are now effortless, giving us more time to focus on clients.",
    avatar:
      "/images/people/laptopgirl1.webp"
  }
];

const ZohoTestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [offsetX, setOffsetX] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Card width based on screen
  const cardWidth = useMemo(() => {
    if (typeof window === "undefined") return 800;
    const vw = window.innerWidth;
    if (vw >= 1024) return Math.floor(vw * 0.35);
    if (vw >= 768) return Math.floor(vw * 0.7);
    return Math.floor(vw * 0.9);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setIsReducedMotion(media.matches);

    apply();
    media.addEventListener("change", apply);

    return () => media.removeEventListener("change", apply);
  }, []);

  const extendedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    []
  );

  const speed = useMemo(() => (isReducedMotion ? 0.2 : 0.8), [isReducedMotion]);

  useEffect(() => {
    if (paused) return;

    const totalWidth = cardWidth * testimonials.length;

    const step = () => {
      setOffsetX((prev) => {
        const next = prev - speed;
        return next <= -totalWidth ? 0 : next;
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [paused, speed, cardWidth]);

  const handlePrev = () => {
    setPaused(true);
    setOffsetX((prev) => Math.min(prev + cardWidth, 0));
  };

  const handleNext = () => {
    setPaused(true);
    setOffsetX((prev) => prev - cardWidth);
  };

  return (
    <div className="w-full bg-linear-to-b from-gray-50 to-white relative overflow-hidden py-20">
      {/* Rainbow Glow Background (adjusted for Zoho Blue/Yellow/Red) */}
      <div
        className="absolute inset-x-0 top-20 h-64 mx-auto w-[90%] rounded-3xl opacity-20 blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, #ef4444 -0.55%, #f97316 22.86%, #facc15 48.36%, #fb923c 73.33%, #dc2626 99.34%)"
        }}
      />

      {/* Heading */}
      <div className="text-center relative z-10 mb-14">
        <p className="text-lg font-medium text-red-600">
          Transforming Businesses Globally
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">
          Success Stories with Zoho
        </h2>
      </div>

      {/* Auto-Scrolling Track */}
      <div className="relative sm:mt-10 max-w-full">
        <div
          ref={containerRef}
          className="flex select-none will-change-transform"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: paused ? "transform 300ms ease" : "transform 40ms linear"
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {extendedTestimonials.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="inline-block shrink-0 w-[90vw] md:w-[60vw] lg:w-[40vw] px-4"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="mt-5 text-lg leading-relaxed text-gray-900">
                    “{t.content}”
                  </blockquote>
                </div>

                {/* User */}
                <div className="flex items-center mt-6">
                  {/* Placeholder Avatar or Initials if image fails */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                    <span className="text-gray-500 font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-600">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute top-1/2 right-5 flex gap-3 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZohoTestimonialSection;

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
    name: "CEO",
    role: "Initium Learning Pvt Ltd",
    company: "Business Services",
    content: "The support and service extended by the partner were commendable. The team was prompt in responding to queries and provided timely assistance. A suggestion for improvement would be to include training on the effective use of Zoho at no additional cost to help users fully leverage the platform.",
    avatar: "/images/people/laptopmen.webp"
  },
  {
    id: 2,
    name: "Business Analyst",
    role: "AgriApp Technologies Pvt Ltd",
    company: "Agriculture Tech",
    content: "I wish to express my profound satisfaction with AGSuite Technologies. I had the privilege of collaborating with them for the Zoho One implementation, and I am sincerely grateful for the exceptional support extended by their team. The staff at AGSuite Technologies exhibited unwavering commitment and professionalism throughout the entire process, contributing significantly to the success of the implementation.",
    avatar: "/images/people/laptopgirl.webp"
  },
  {
    id: 3,
    name: "Vice President",
    role: "Allwave-AV Systems",
    company: "AV Systems",
    content: "Zoho has enhanced the way of mapping the progress, monitoring the company's growth and have made our operations simplified. Zoho is an efficient software which can help various organisations in their purview to grow. I strongly recommend organisations to use this tool which can make your complex operations simple. I would like to mention special thanks to Rajat and his team for an extremely great support pre and post execution of this software.",
    avatar: "/images/people/laptopmen2.webp"
  },
  {
    id: 4,
    name: "Managing Partner",
    role: "iCan K-Mint Wealth",
    company: "Wealth Management",
    content: "Great service and customisations as needed by the team for Zoho designing and implementation.",
    avatar: "/images/people/laptopgirl1.webp"
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
    () => [...testimonials, ...testimonials, ...testimonials], // Triple for smoother loop with fewer cards
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
                  <div>
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





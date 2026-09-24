"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ZohoHeroSlider = dynamic(() => import("./ZohoHeroSlider"), {
  ssr: false,
});

interface ZohoHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const ZohoHero: React.FC<ZohoHeroProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div id="hero" className="relative w-full font-dm-sans">
      {/* Hero section: full-viewport on all screens, no white gaps */}
      <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden">

        {/* Full-bleed background — covers entire hero on all screen sizes */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/Background/heropinkbg_mob.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="/images/Background/heropinkbg.webp"
              type="image/webp"
            />
            <img
              src="/images/Background/heropinkbg.webp"
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        {/* Navbar offset spacer */}
        <div className="absolute inset-x-0 top-0 h-[72px] sm:h-[80px] z-0 pointer-events-none" />

        {/* Content layer */}
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 flex flex-col items-start justify-center h-full pt-[72px] sm:pt-[80px] pb-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-rose-500/10 text-rose-700 border border-rose-300/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Zoho Premium Partner
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-gray-950 via-gray-800 to-rose-600 bg-clip-text text-transparent pb-1">
              Empower Your Business with Premium Zoho Cloud Solutions
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-slate-700 max-w-xl">
              Run your entire business operations on a single, unified cloud platform designed for growth and scale.
            </p>

            {/* CTA */}
            <div className="mt-6 relative inline-flex group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg group-hover:opacity-100 transition duration-500" />
              <Link
                href="/zoho-products"
                className="bg-gray-950 text-white relative px-7 py-3.5 sm:px-9 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:bg-white hover:text-black transition-all duration-300 inline-block"
              >
                Experience Zoho One
              </Link>
            </div>
          </div>
        </div>

        {/* Render the full interactive slider once mounted */}
        {isMounted && (
          <div className="absolute inset-0 z-10">
            <ZohoHeroSlider />
          </div>
        )}
      </section>
    </div>
  );
};

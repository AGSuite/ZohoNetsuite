"use client";

import React from "react";
import Image from "next/image";
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
    <div id="hero" className="relative w-full overflow-hidden bg-white font-dm-sans">
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder - Simple and Fast */
            <div className="relative h-full w-full flex items-center">
              <div className="absolute inset-0 top-0 -z-10">
                <Image
                  src="/images/Background/heropinkbg.webp"
                  alt="Zoho Background"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="100vw"
                  quality={75}
                />
              </div>

              <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[52%_46%] gap-10 items-center">
                <div className="max-w-2xl text-left lg:-ml-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight bg-linear-to-r from-gray-950 via-gray-800 to-red-600 bg-clip-text text-transparent pb-1">
                    Empower Your Business with Premium Zoho Cloud Solutions
                  </h1>

                  <p className="mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-700">
                    Run your entire business operations on a single, unified cloud platform designed for growth and scale.
                  </p>

                  <div className="mt-5 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg" />
                    <Link
                      href="/zoho/solutions"
                      className="bg-gray-950 text-white relative px-10 py-4 rounded-xl font-medium shadow-2xl inline-block"
                    >
                      Experience Zoho One
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center lg:justify-end">
                  <div className="w-full relative">
                    <Image
                      src="/images/Dashboard/zohodash.webp"
                      alt="Empower Your Business with Premium Zoho Cloud Solutions"
                      width={1200}
                      height={1000}
                      className="w-[140%] max-lg:h-auto max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)] -ml-[25%]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ZohoHeroSlider />
          )}
        </div>
      </section>
    </div>
  );
};

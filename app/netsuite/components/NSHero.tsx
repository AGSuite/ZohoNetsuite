"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const NSHeroSlider = dynamic(() => import("./NSHeroSlider"), {
  ssr: false,
});

interface NSHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const NSHero: React.FC<NSHeroProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white font-dm-sans">
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder - Simple and Fast */
            <div className="relative h-full w-full flex items-center">
              <div className="absolute inset-0 top-0 -z-10">
                <Image
                  src="/images/Background/herobluebg.webp"
                  alt="NetSuite Background"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="100vw"
                  quality={75}
                />
              </div>

              <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[52%_46%] gap-10 items-center -translate-y-4 lg:-translate-y-6">
                <div className="max-w-2xl text-left lg:-ml-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight bg-linear-to-r from-blue-950 via-blue-800 to-blue-900 bg-clip-text text-transparent pb-1">
                    Built for Your Industry. Powered by NetSuite.
                  </h1>

                  <p className="mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-700">
                    Empower your business with industry-specific NetSuite solutions designed to streamline operations, improve visibility, and accelerate growth across Software & Technology, Financial Services, AdTech, EdTech, MarTech, IT/ITES, Manufacturing, Retail, and more.
                  </p>

                  <div className="mt-5 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg" />
                    <Link
                      href="/netsuite/contact"
                      className="bg-gray-950 text-white relative px-10 py-4 rounded-xl font-medium shadow-2xl inline-block"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center lg:justify-end">
                  <div className="w-full relative">
                    <Image
                      src="/images/Dashboard/netsuitedash2.webp"
                      alt="NetSuite Dashboard"
                      width={1800}
                      height={1600}
                      className="w-[140%] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)] -ml-[25%]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NSHeroSlider />
          )}
        </div>
      </section>
    </div>
  );
};

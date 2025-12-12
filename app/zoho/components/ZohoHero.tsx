"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
    <div className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 -z-20 bg-white" />

      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
             /* Static Placeholder for SSR - Mimics Slide 1 Layout */
             <div className="relative h-full w-full flex items-center">
                 <div className="absolute inset-0 -z-10 bg-white" />
                 <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                     <div className="flex flex-col justify-center text-center lg:text-left">
                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                             <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 bg-clip-text text-transparent">NetSuite ERP</span>
                             <br />
                             <span className="text-gray-700">The #1 Cloud System for</span>
                             <br />
                             <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent font-extrabold tracking-wide">Modern Businesses</span>
                         </h1>
                         <p className="mt-4 text-lg text-gray-600">Run finance, operations & reporting in a single connected platform.</p>
                         <div className="mt-8 flex justify-center lg:justify-start">
                             <div className="relative inline-flex group">
                                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
                                 <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">Explore NetSuite ERP</button>
                             </div>
                         </div>
                     </div>
                     <div className="hidden lg:flex justify-center lg:justify-end">
                         <Image src="/images/Dashboard/dashboardnetmain.webp" alt="NetSuite ERP" width={1600} height={1400} priority sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px" className="w-full max-w-4xl object-contain scale-110" />
                     </div>
                 </div>
             </div>
          ) : (
          <Swiper
            className="hero-swiper w-full h-full"
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            speed={900}
            effect="slide"
            observer={true}
            observeParents={true}
          >

            {/* ===================================================================================== */}
            {/* SLIDE 1 */}
            {/* ===================================================================================== */}
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center">

                <div className="absolute inset-0 -z-10 bg-white" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

                  {/* LEFT */}
                  <div className="flex flex-col justify-center text-center lg:text-left">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">

                      <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 bg-clip-text text-transparent">
                        NetSuite ERP
                      </span>

                      <br />

                      <span className="text-gray-700">The #1 Cloud System for</span>

                      <br />

                      <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent font-extrabold tracking-wide">
                        Modern Businesses
                      </span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                      Run finance, operations & reporting in a single connected platform.
                    </p>

                    <div className="mt-8 flex justify-center lg:justify-start">
                      <div className="relative inline-flex group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                          from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 
                          blur-lg group-hover:opacity-100 transition duration-700" />

                        <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                          Explore NetSuite ERP
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="hidden lg:flex justify-center lg:justify-end">
                    <Image
                      src="/images/Dashboard/dashboardnetmain.webp"
                      alt="NetSuite ERP"
                      width={1600}
                      height={1400}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      className="w-full max-w-4xl object-contain scale-110"
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* ===================================================================================== */}
            {/* SLIDE 2 */}
            {/* ===================================================================================== */}
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center">

                <div className="absolute inset-0 -z-20 bg-white" />

                <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      CFO Automation <br />
                      <span className="text-gray-600">
                        Smarter Finance. Faster Growth.
                      </span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-700">
                      Automate closing, approvals & compliance—focus on strategy.
                    </p>

                    <div className="mt-8 flex justify-center lg:justify-start">
                      <div className="relative inline-flex group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                          from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 
                          blur-lg group-hover:opacity-100 transition duration-700" />
                        <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                          Upgrade CFO Operations
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* ===================================================================================== */}
            {/* SLIDE 3 — NetSuite Optimization */}
            {/* ===================================================================================== */}
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center">

                <div className="absolute inset-0 -z-20 bg-white" />

                <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Maximize NetSuite Efficiency <br />
                      <span className="text-gray-600">Faster Data. Smarter Decisions.</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-700">
                      Optimize performance, automate workflows, and eliminate bottlenecks with AGSuite&apos;s NetSuite expertise.
                    </p>

                    <div className="mt-8 flex justify-center lg:justify-start">
                      <div className="relative inline-flex group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                          from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 
                          blur-lg group-hover:opacity-100 transition duration-700" />
                        <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                          Optimize Your NetSuite
                        </button> 
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* ===================================================================================== */}
            {/* SLIDE 4 — Zoho Suite */}
            {/* ===================================================================================== */}
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center">

                {/* Background */}
                <div className="absolute inset-0 -z-20 bg-white" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                  {/* LEFT CONTENT */}
                  <div className="flex flex-col justify-center text-center lg:text-left">

                    {/* Big Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">

                      <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 
                        bg-clip-text text-transparent">
                        Zoho Cloud Suite
                      </span>

                      <br />

                      <span className="text-gray-700">
                        All-in-One Platform for
                      </span>

                      <br />

                      <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent font-extrabold tracking-wide">
                        Modern Businesses
                      </span>

                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                      Streamline CRM, projects & operations in a unified Zoho ecosystem.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 flex justify-center lg:justify-start">
                      <div className="relative inline-flex group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                          from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 
                          blur-lg group-hover:opacity-100 transition duration-700" />

                        <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                          Explore Zoho Suite
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT IMAGE – BIG */}
                  <div className="hidden lg:flex justify-center lg:justify-end">
                    <Image
                      src="/images/dashboard/zohodashboard.webp"
                      alt="Zoho Dashboard"
                      width={1100}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 900px"
                      className="w-full max-w-2xl object-contain scale-110"
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>

          </Swiper>
          )}
        </div>
      </section>
    </div>
  );
};



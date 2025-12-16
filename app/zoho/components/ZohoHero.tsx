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
      <section className="relative w-full h-[calc(100vh-80px)] flex items-center mt-20">
        <div className="relative w-full h-full">
          {!isMounted ? (
            /* SSR Placeholder */
            <div className="relative h-full w-full flex items-center">
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/Background/heropinkbg.webp')",
                }}
              />

              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-4xl lg:text-4xl font-medium leading-snug text-gray-900">
                    Zoho Cloud Suite
                    <br />
                    <span className="text-2xl sm:text-4xl lg:text-4xl font-medium text-gray-900">
                      All-in-One Platform for Business
                    </span>
                  </h1>

                  <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
                    Streamline CRM, projects & operations in a unified Zoho ecosystem.
                  </p>

                  <div className="mt-8 relative inline-flex group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E91E63] via-[#FF4081] to-[#F06292] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
                    <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
                      Explore Zoho Suite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Swiper
              className="hero-swiper w-full h-full"
              modules={[Pagination, Autoplay]}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              speed={900}
              onSlideChange={() => {
                // Trigger animations to restart on slide change
                setTimeout(() => {
                  const activeSlide = document.querySelector('.swiper-slide-active');
                  if (activeSlide) {
                    const animatedElements = activeSlide.querySelectorAll('.animate-fadeInUp, .animate-fadeInRight');
                    animatedElements.forEach((el) => {
                      (el as HTMLElement).classList.remove('animate-fadeInUp', 'animate-fadeInRight');
                      void (el as HTMLElement).offsetWidth; // Trigger reflow
                      if (el.classList.contains('hidden')) return;
                      const isImage = el.querySelector('img');
                      (el as HTMLElement).classList.add(isImage ? 'animate-fadeInRight' : 'animate-fadeInUp');
                    });
                  }
                }, 50);
              }}
            >
              {/* SLIDE 1 - Zoho Cloud Suite */}
              <SwiperSlide>
                <HeroSlide
                  bg="/images/Background/heropinkbg.webp"
                  title="Zoho Cloud Suite"
                  subtitle="All-in-One Platform for Business"
                  desc="Streamline CRM, projects & operations in a unified Zoho ecosystem."
                  cta="Explore Zoho Suite"
                  image="/images/Dashboard/zohodash.webp"
                  showOverlay={false}
                  textColor="dark"
                />
              </SwiperSlide>

              {/* SLIDE 2 - Zoho CRM */}
              <SwiperSlide>
                <HeroSlide
                  bg="/images/Background/teambg.webp"
                  title="Zoho CRM Excellence"
                  subtitle="Transform Customer Relationships"
                  desc="Boost sales productivity with intelligent automation and insights."
                  cta="Discover Zoho CRM"
                  showOverlay={true}
                  textColor="light"
                />
              </SwiperSlide>

              {/* SLIDE 3 - Business Automation */}
              <SwiperSlide>
                <HeroSlide
                  bg="/images/Background/teambg2.webp"
                  title="Complete Business Automation"
                  subtitle="Work Smarter, Not Harder"
                  desc="Automate workflows across HR, finance, and operations with Zoho One."
                  cta="Automate Your Business"
                  showOverlay={true}
                  textColor="light"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section>
    </div>
  );
};

/* ---------------- HELPERS ---------------- */

const HeroSlide = ({
  bg,
  title,
  subtitle,
  desc,
  cta,
  image,
  showOverlay = true,
  textColor = 'light',
}: any) => {
  return (
    <div className="relative h-full w-full flex items-center bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }}>
      {/* Gradient overlay: dark left → light center → transparent right */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl text-left">
          <h1 className={`text-4xl sm:text-4xl lg:text-4xl font-medium leading-snug animate-fadeInUp ${
            textColor === 'dark' ? 'text-gray-900' : 'text-white'
          }`}>
            {title}
            <br />
            <span className={`text-2xl sm:text-4xl lg:text-4xl font-medium ${
              textColor === 'dark' ? 'text-gray-900' : 'text-white'
            }`}>
              {subtitle}
            </span>
          </h1>

          <p className={`mt-3 text-base sm:text-lg font-medium animate-fadeInUp animation-delay-600 ${
            textColor === 'dark' ? 'text-gray-600' : 'text-white/80'
          }`}>{desc}</p>

          <div className="mt-8 relative inline-flex group animate-fadeInUp animation-delay-1200">
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${textColor === 'light' ? 'from-[#E91E63] via-[#FF4081] to-[#F06292]' : 'from-[#E91E63] via-[#FF4081] to-[#F06292]'} opacity-70 blur-lg group-hover:opacity-100 transition duration-700`} />
            <button className="bg-gray-900 text-white relative px-8 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform duration-300">
              {cta}
            </button>
          </div>
        </div>
          
        {/* Right Image (if provided) */}
        {image && (
          <div className="hidden lg:flex justify-center lg:justify-end animate-fadeInRight animation-delay-900">
            <Image
              src={image}
              alt={title}
              width={1600}
              height={1400}
              className="w-full max-w-4xl object-contain drop-shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* Styles for animations */
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-fadeInRight {
    animation: fadeInRight 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-900 {
    animation-delay: 0.9s;
  }

  .animation-delay-1200 {
    animation-delay: 1.2s;
  }

  /* Reset animations on inactive slides */
  .swiper-slide:not(.swiper-slide-active) .animate-fadeInUp,
  .swiper-slide:not(.swiper-slide-active) .animate-fadeInRight {
    opacity: 0;
  }

  /* Ensure animations play on active slide */
  .swiper-slide-active .animate-fadeInUp,
  .swiper-slide-active .animate-fadeInRight {
    animation-play-state: running;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleId = 'zohohero-animations';
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  }
}

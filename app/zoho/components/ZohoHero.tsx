"use client";

import dynamic from "next/dynamic";

const ZohoHeroSlider = dynamic(() => import("./ZohoHeroSlider"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[100dvh] min-h-[600px] bg-[url('/images/Background/heropinkbg.webp')] bg-cover bg-center" />
  ),
});

export const ZohoHero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full font-dm-sans">
      <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
        <ZohoHeroSlider />
      </section>
    </div>
  );
};

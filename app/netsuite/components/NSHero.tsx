"use client";

import dynamic from "next/dynamic";

const NSHeroSlider = dynamic(() => import("./NSHeroSlider"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[100dvh] min-h-[600px] bg-[url('/images/Background/herobluebg.webp')] bg-cover bg-center" />
  ),
});

export const NSHero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full font-dm-sans">
      <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
        <NSHeroSlider />
      </section>
    </div>
  );
};

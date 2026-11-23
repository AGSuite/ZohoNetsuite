import NSHeroSlider from "./NSHeroSlider";

export const NSHero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full font-dm-sans">
      <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
        <NSHeroSlider />
      </section>
    </div>
  );
};

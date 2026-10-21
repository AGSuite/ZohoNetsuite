import type { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutUsHero from "./AboutUsHero";

export const metadata: Metadata = {
  title: "About Our Odoo Practice",
  description:
    "Learn how AGSuite Technologies delivers practical Odoo implementation, customization, integration, migration, training, and managed support for growing businesses.",
  alternates: { canonical: "https://www.agsuitetech.com/odoo/about-us" },
  openGraph: {
    title: "About AGSuite Technologies | Odoo Solutions",
    description:
      "Meet the team helping businesses connect operations and grow with tailored Odoo solutions.",
    images: ["/images/aboutus/aboutusbg.webp"],
  },
};

const AboutUsClient = dynamic(() => import("./AboutUsClient"), {
  loading: () => <div className="h-[2000px] w-full animate-pulse bg-slate-50/50" />,
});

export default function OdooAboutUsPage() {
  return (
    <div className="flex flex-col bg-white">
      <AboutUsHero />
      <AboutUsClient />
    </div>
  );
}

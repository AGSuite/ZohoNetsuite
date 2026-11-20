import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Offices and Global Odoo Delivery Presence",
  description:
    "Explore AGSuite Technologies offices and global delivery presence, with Odoo consulting and implementation specialists supporting businesses across key regions.",
  alternates: {
    canonical: "/odoo/our-offices",
  },
  openGraph: {
    title: "Our Offices and Global Odoo Delivery Presence",
    description:
      "Find AGSuite offices and learn how our Odoo specialists support connected business operations across key global regions.",
    url: "/odoo/our-offices",
    type: "website",
    images: [
      {
        url: "/images/aboutus/global_office_hero.png",
        alt: "AGSuite Technologies global offices",
      },
    ],
  },
};

export default function OdooOurOfficesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

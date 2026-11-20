import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at AGSuite: Our Odoo Team and Culture",
  description:
    "Discover life at AGSuite Technologies, meet the people behind our Odoo practice, and explore our collaborative culture, workplace, celebrations, and values.",
  alternates: {
    canonical: "/odoo/life-at-agsuite",
  },
  openGraph: {
    title: "Life at AGSuite: Our Odoo Team and Culture",
    description:
      "Meet the people behind AGSuite's Odoo practice and explore our collaborative culture, workplace, celebrations, and values.",
    url: "/odoo/life-at-agsuite",
    type: "website",
    images: [
      {
        url: "/images/office/building.webp",
        alt: "Life at AGSuite Technologies",
      },
    ],
  },
};

export default function OdooLifeAtAGSuiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

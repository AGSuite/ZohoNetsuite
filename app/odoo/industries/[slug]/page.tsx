import type { Metadata } from "next";
import { notFound } from "next/navigation";

import OdooIndustryTemplate from "@/app/odoo/components/industries/OdooIndustryTemplate";
import { odooIndustries, odooIndustryBySlug } from "@/app/odoo/components/industries/odooIndustryData";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return odooIndustries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = odooIndustryBySlug[slug];

  if (!industry) return { title: "Odoo Industry Solutions" };

  return {
    title: `Odoo for ${industry.name}`,
    description: industry.metaDescription,
  };
}

export default async function OdooIndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = odooIndustryBySlug[slug];

  if (!industry) notFound();

  return <OdooIndustryTemplate industry={industry} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import OdooServiceTemplate from "@/app/odoo/components/services/OdooServiceTemplate";
import { odooServiceBySlug, odooServices } from "@/app/odoo/components/services/odooServiceData";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return odooServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = odooServiceBySlug[slug];

  if (!service) {
    return { title: "Odoo Service" };
  }

  return {
    title: `${service.name} Services`,
    description: service.metaDescription,
  };
}

export default async function OdooServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = odooServiceBySlug[slug];

  if (!service) notFound();

  return <OdooServiceTemplate service={service} />;
}

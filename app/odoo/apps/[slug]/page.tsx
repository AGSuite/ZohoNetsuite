import type { Metadata } from "next";
import { notFound } from "next/navigation";

import OdooDirectoryAppTemplate from "@/app/odoo/components/apps/OdooDirectoryAppTemplate";
import { odooAdditionalAppBySlug, odooAdditionalApps } from "@/app/odoo/components/apps/odooAdditionalAppsData";

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return odooAdditionalApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = odooAdditionalAppBySlug[slug];

  if (!app) return { title: "Odoo Business Application" };

  return {
    title: `${app.name} Implementation and Configuration`,
    description: `${app.description} Get implementation, configuration, migration, integration, training, and support from official Odoo Partner AGSuite.`,
  };
}

export default async function OdooAdditionalAppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = odooAdditionalAppBySlug[slug];

  if (!app) notFound();

  return <OdooDirectoryAppTemplate app={app} />;
}

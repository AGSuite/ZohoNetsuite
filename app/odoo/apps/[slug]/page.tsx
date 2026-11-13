import type { Metadata } from "next";
import { notFound } from "next/navigation";

import OdooDirectoryAppTemplate from "@/app/odoo/components/apps/OdooDirectoryAppTemplate";
import { odooAdditionalAppBySlug, odooAdditionalApps } from "@/app/odoo/components/apps/odooAdditionalAppsData";
import { getOdooAdditionalAppProfile } from "@/app/odoo/components/apps/odooAdditionalAppProfiles";

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
  const profile = getOdooAdditionalAppProfile(slug);

  return {
    title: `${app.name}: Features, Setup and Implementation`,
    description: app.description,
    keywords: [app.name, `${app.name} implementation`, `${app.name} features`, profile.applicationCategory, "Odoo ERP", "AGSuite Technologies"],
    alternates: { canonical: `/odoo/apps/${slug}` },
    openGraph: {
      title: `${app.name}: Features, Setup and Implementation`,
      description: app.description,
      type: "website",
      url: `/odoo/apps/${slug}`,
    },
  };
}

export default async function OdooAdditionalAppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = odooAdditionalAppBySlug[slug];

  if (!app) notFound();

  return <OdooDirectoryAppTemplate app={app} />;
}

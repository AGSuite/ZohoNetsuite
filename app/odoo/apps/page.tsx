import type { Metadata } from "next";

import OdooAppsCatalog from "./OdooAppsCatalog";

export const metadata: Metadata = {
  title: "Odoo Business Apps | 48 Connected Applications",
  description:
    "Explore 48 Odoo business applications across finance, sales, websites, supply chain, human resources, marketing, services, and productivity.",
};

export default function OdooAppsPage() {
  return <OdooAppsCatalog />;
}
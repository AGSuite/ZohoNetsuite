import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Zoho For Your Industry | AGSuite Technologies",
  description:
    "Explore Zoho solutions tailored for specific industries. From Manufacturing to Retail and Software, see how Zoho scales your operations.",
};

const ZohoIndustriesClient = dynamic(() => import("./components/ZohoIndustriesClient"), {
  loading: () => <div className="min-h-screen bg-white animate-pulse" />
});

export default function IndustriesPage() {
  return <ZohoIndustriesClient />;
}

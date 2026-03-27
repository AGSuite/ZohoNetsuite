import React from "react";
import { Metadata } from "next";
import ZohoIndustriesClient from "./components/ZohoIndustriesClient";

export const metadata: Metadata = {
  title: "Zoho For Your Industry | AGSuite Technologies",
  description:
    "Explore Zoho solutions tailored for specific industries. From Manufacturing to Retail and Software, see how Zoho scales your operations.",
};

export default function IndustriesPage() {
  return <ZohoIndustriesClient />;
}

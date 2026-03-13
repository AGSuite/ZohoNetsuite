import React from "react";
import { Metadata } from "next";
import NetSuiteIndustriesClient from "./components/NetSuiteIndustriesClient";

export const metadata: Metadata = {
  title: "Oracle NetSuite For Your Industry | AGSuite Technologies",
  description:
    "Explore Oracle NetSuite solutions tailored for specific industries. From Manufacturing to Retail and Software, see how NetSuite scales your operations.",
};

export default function IndustriesPage() {
  return <NetSuiteIndustriesClient />;
}

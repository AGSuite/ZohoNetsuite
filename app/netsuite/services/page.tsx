import React from "react";
import { Metadata } from "next";
import NetSuiteServicesClient from "./components/NetSuiteServicesClient";

export const metadata: Metadata = {
  title: "Oracle NetSuite Specialist Services | AGSuite Technologies",
  description:
    "Explore our comprehensive Oracle NetSuite services — Implementation, Integration, Customization, Managed Support, and Training for global enterprises.",
};

export default function ServicesPage() {
  return <NetSuiteServicesClient />;
}





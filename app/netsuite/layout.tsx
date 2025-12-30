import type { Metadata } from "next";
import NavbarNetSuite from "./components/NSNavbar";
import { NSFooter } from "./components/NSFooter";

export const metadata: Metadata = {
  title: "NetSuite Solutions - Enterprise ERP & CRM",
  description: "Comprehensive NetSuite enterprise solutions including ERP, CRM, analytics, and e-commerce for large organizations",
};

export default function NetSuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://salesiq.zoho.in" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.gstatic.com" />
      <link rel="dns-prefetch" href="https://salesiq.zoho.in" />
      <NavbarNetSuite />
      <main>{children}</main>
      <NSFooter />
    </div>
  );
}

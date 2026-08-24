import type { Metadata } from "next";
import NavbarNetSuite from "./components/NSNavbar";
import NetSuiteFooter from "../components/footers/NetSuiteFooter";

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
      <NavbarNetSuite />
      <main>{children}</main>
      <NetSuiteFooter />
    </div>
  );
}





import type { Metadata } from "next";
import ZohoNavbar from "./components/ZohoNavbar";
import { ZohoFooter } from "./components/ZohoFooter";

export const metadata: Metadata = {
  title: "Zoho Solutions - Business Software Suite",
  description: "Comprehensive Zoho business solutions including CRM, HR, Finance, Marketing, and more",
};

export default function ZohoLayout({
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
      <ZohoNavbar />
      <main>{children}</main>
      <ZohoFooter />
    </div>
  );
}

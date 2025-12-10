import type { Metadata } from "next";
import { ZohoNavbar } from "./components/ZohoNavbar";
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
      <ZohoNavbar />
      <main>{children}</main>
      <ZohoFooter />
    </div>
  );
}

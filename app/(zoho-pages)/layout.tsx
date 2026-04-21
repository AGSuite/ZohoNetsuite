import type { Metadata } from "next";
import ZohoNavbar from "@/app/zoho/components/ZohoNavbar";
import ZohoFooter from "@/app/components/footers/ZohoFooter";

export const metadata: Metadata = {
  title: "Zoho Solutions - Business Software Suite",
  description: "Comprehensive Zoho business solutions including CRM, HR, Finance, Marketing, and more",
};

export default function ZohoPagesLayout({
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

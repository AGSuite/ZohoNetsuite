import type { Metadata } from "next";
import ZohoNavbar from "../../zoho/components/ZohoNavbar";
import { ZohoFooter } from "../../zoho/components/ZohoFooter";

export const metadata: Metadata = {
  title: "Zoho Solutions - AGSuite",
  description: "Run your entire business on Zoho with our unified suite of applications.",
};

export default function ZohoSolutionLayout({
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

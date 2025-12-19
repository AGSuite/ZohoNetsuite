import type { Metadata } from "next";
import NavbarNetSuite from "../../netsuite/components/NSNavbar";
import { NSFooter } from "../../netsuite/components/NSFooter";

export const metadata: Metadata = {
  title: "NetSuite Add-Ons - AGSuite",
  description: "Enhance your NetSuite experience with powerful add-ons and connectors.",
};

export default function NetSuiteAddonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <NavbarNetSuite />
      <main>{children}</main>
      <NSFooter />
    </div>
  );
}

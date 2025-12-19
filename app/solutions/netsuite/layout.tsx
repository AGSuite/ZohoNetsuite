import type { Metadata } from "next";
import NavbarNetSuite from "../../netsuite/components/NSNavbar";
import { NSFooter } from "../../netsuite/components/NSFooter";

export const metadata: Metadata = {
  title: "NetSuite Solutions - AGSuite",
  description: "Explore our comprehensive NetSuite business management solutions.",
};

export default function NetSuiteSolutionLayout({
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

import type { Metadata } from "next";
import OdooNavbar from "./components/OdooNavbar";
import OdooFooter from "./components/OdooFooter";

export const metadata: Metadata = {
  title: {
    default: "Odoo ERP Solutions and Implementation",
    template: "%s | AGSuite Technologies",
  },
  description:
    "Connect finance, sales, inventory, manufacturing, HR, and customer operations with tailored Odoo implementation and support from AGSuite Technologies.",
};

export default function OdooLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <OdooNavbar />
      <main>{children}</main>
      <OdooFooter />
    </div>
  );
}

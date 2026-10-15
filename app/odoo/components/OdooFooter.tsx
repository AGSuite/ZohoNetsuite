import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Odoo apps", href: "/odoo#apps" },
  { label: "Our services", href: "/odoo#services" },
  { label: "Industries", href: "/odoo#industries" },
  { label: "Implementation approach", href: "/odoo#approach" },
];

export default function OdooFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="AGSuite Technologies home">
            <Image
              src="/images/logos/agsuite_logo.webp"
              alt="AGSuite Technologies"
              width={180}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Practical Odoo consulting, implementation, customization, integration, and support for connected business operations.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Connect</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <a className="block transition hover:text-white" href="mailto:hello@agsuitetech.com">hello@agsuitetech.com</a>
            <a className="block transition hover:text-white" href="tel:+919461046161">+91 94610 46161</a>
            <p className="leading-6">Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AGSuite Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms-conditions" className="hover:text-white">Terms &amp; conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Zoho & Oracle NetSuite Solutions | AGSuite",
  description:
    "Choose between Zoho and Oracle NetSuite. Explore CRM, ERP, automation, and cloud solutions tailored for every business.",
  openGraph: {
    title: "Zoho & Oracle NetSuite Solutions | AGSuite",
    description:
      "Explore Zoho CRM and Oracle NetSuite ERP solutions for fast-scaling companies.",
    url: "https://agsuitetech.com", // ← CHANGE THIS TO YOUR REAL DOMAIN
    siteName: "AGSuite",
    images: [
      {
        url: "/images/Background/bghomepage.webp", // ← RECOMMENDED: replace with dedicated OG image (1200×630)
        width: 1200,
        height: 630,
        alt: "Zoho & NetSuite Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen px-4 md:px-8 lg:px-12 py-6 md:py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Background/bghomepage.webp')", // ← FULL PAGE BACKGROUND
      }}
    >
      {/* TOP TWO SECTIONS — ZOHO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* LEFT — NETSUITE LOGO + BUTTON */}
<Link
  href="/netsuite"
  className="relative h-[45vh] md:h-[70vh]  flex flex-col items-center justify-center text-center rounded-2xl shadow-lg"
  aria-label="Visit NetSuite Page"
>
  <Image
    src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
    alt="Oracle NetSuite Logo"
    width={260}
    height={120}
    className="mb-6"
    priority
  />
  <button className="px-8 py-3 rounded-lg bg-gray-700 text-white text-lg font-semibold hover:bg-gray-900 transition">
    Visit NetSuite →
  </button>
</Link>

{/* RIGHT — NETSUITE BACKGROUND */}
<Link
  href="/netsuite"
  className="relative h-[45vh] md:h-[70vh] group overflow-hidden block  shadow-lg"
  aria-label="Explore Oracle NetSuite"
>
  <Image
    src="/images/netsuiteimages/background/netsuitebg.webp"
    alt="NetSuite Background"
    fill
    priority
    className="object-cover  group-hover:scale-105 transition-all duration-700 opacity-99"
  />

  {/* Main dim overlay */}
  <div className="absolute inset-0 bg-black/25 " />

  {/* Bottom → Top gradient overlay (same as Zoho) */}
  <div
    className="
      absolute inset-0 
      bg-linear-to-t
      from-black/80
      via-transparent
      to-transparent
    "
  />

  {/* Content */}
  <article className="absolute bottom-8 left-8 text-white drop-shadow-lg">
    <h2 className="text-3xl font-semibold">
      Run Your Entire Business in the Cloud.
    </h2>
    <p className="text-xl opacity-90">The #1 ERP for Fast-Growing Companies</p>
  </article>
</Link>


</section>



   

      <div className="my-10"></div>

      {/* BOTTOM TWO SECTIONS — NETSUITE (Reversed Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* LEFT — ZOHO BACKGROUND */}
<Link
  href="/zoho"
  className="relative h-[45vh] md:h-[70vh] group overflow-hidden block  shadow-lg"
  aria-label="Visit Zoho Solutions"
>
  <Image
    src="/images/zohoimages/background/zohobg.webp"
    alt="Zoho Background"
    fill
    priority
    className="object-cover group-hover:scale-105 transition-all duration-700 opacity-99"
  />

  {/* Main dim overlay */}
  <div className="absolute inset-0 bg-black/25" />

  {/* NEW bottom gradient overlay */}
  <div
    className="
      absolute inset-0 
      bg-linear-to-t
      from-black/80
      via-black/10
      to-transparent
    "
  />

  {/* Content */}
  <article className="absolute bottom-8 left-8 text-white drop-shadow-lg">
    <h2 className="text-3xl font-semibold">Smarter Business. Faster Growth.</h2>
    <p className="text-xl opacity-90">Zoho Solutions for Every Team</p>
  </article>
</Link>


{/* RIGHT — ZOHO LOGO + BUTTON */}
<Link
  href="/zoho"
  className="relative h-[45vh] md:h-[70vh]  flex flex-col items-center justify-center text-center rounded-2xl shadow-lg"
  aria-label="Go to Zoho Page"
>
  <Image
    src="/images/zohoimages/zohologos/zohoadvancelogo.webp"
    alt="Zoho Logo"
    width={260}
    height={120}
    className="mb-6"
    priority
  />
  <button className="px-8 py-3 rounded-lg bg-gray-700 text-white text-lg font-semibold hover:bg-gray-900 transition">
    Visit Zoho →
  </button>
</Link>

</section>
    </main>
  );
}

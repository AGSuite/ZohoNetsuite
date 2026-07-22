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
        url: "/images/Background/bghomepage.jpg", // ← RECOMMENDED: replace with dedicated OG image (1200×630)
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
      className="min-h-screen px-4 md:px-8 lg:px-12 py-6 md:py-10 relative z-0"
    >
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Image
          src="/images/Background/bghomepage.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* TOP TWO SECTIONS — ZOHO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT — NETSUITE LOGO + BUTTON */}
        <Link
          href="/netsuite"
          className="relative h-[45vh] md:h-[70vh]  flex flex-col items-center justify-center text-center rounded-2xl shadow-lg"
          aria-label="Visit NetSuite Page"
        >
          <div className="flex items-center justify-center gap-5 mb-8 px-4 flex-wrap sm:flex-nowrap">
            <Image
              src="/images/logos/agsuite_logo.webp"
              alt="AGSuite Logo"
              width={180}
              height={60}
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
            <div className="w-px h-8 bg-gray-400/50 hidden sm:block" />
            <Image
              src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
              alt="Oracle NetSuite Logo"
              width={180}
              height={60}
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </div>
          <button className="px-8 py-3 rounded-lg bg-gray-700 text-white text-lg font-semibold hover:bg-gray-900 transition">
            Visit NetSuite →
          </button>
        </Link>

        {/* RIGHT — NETSUITE PEOPLE IMAGE */}
        <Link
          href="/netsuite"
          className="relative h-[45vh] md:h-[70vh] group overflow-hidden block shadow-lg"
          aria-label="Explore Oracle NetSuite"
        >
          <Image
            src="/images/people/people5_11zon.webp"
            alt="Oracle NetSuite Business Professionals"
            fill
            priority
            loading="eager"
            className="object-cover object-center group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />

          {/* Top dark gradient — logo area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-transparent"
          />

          {/* Bottom dark gradient — text area */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
          />



          {/* Content */}
          <article className="absolute bottom-5 left-5 md:bottom-8 md:left-8 text-white drop-shadow-lg">
            <h2 className="text-base md:text-3xl font-semibold leading-snug">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #cceeff 0%, #a0d8f1 30%, #ffffff 60%, #d4eaff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                Oracle NetSuite
              </span>{" "}
              <span className="text-white font-semibold hidden md:inline">—</span>{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #ffd580 0%, #ffb347 50%, #ff8c42 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                #1 ERP
              </span>
            </h2>
            <p className="hidden md:block text-lg opacity-90 mt-1">Run Your Entire Business Smarter &amp; Faster</p>
          </article>
        </Link>


      </section>





      <div className="my-10"></div>

      {/* BOTTOM TWO SECTIONS — NETSUITE (Reversed Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT — ZOHO BACKGROUND */}
        <Link
          href="/zoho"
          className="relative h-[45vh] md:h-[70vh] group overflow-hidden block shadow-lg"
          aria-label="Visit Zoho Solutions"
        >
          <Image
            src="/images/zohoimages/background/zohobg.webp"
            alt="Zoho Background"
            fill
            className="object-cover group-hover:scale-105 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
          />

          {/* Top dark gradient — logo area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-transparent"
          />

          {/* Bottom dark gradient — text area */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"
          />



          {/* Content */}
          <article className="absolute bottom-5 left-5 md:bottom-8 md:left-8 text-white drop-shadow-lg">
            <h2 className="text-base md:text-3xl font-semibold">Smarter Business. Faster Growth.</h2>
            <p className="hidden md:block text-xl opacity-90">Zoho Solutions for Every Team</p>
          </article>
        </Link>


        {/* RIGHT — ZOHO LOGO + BUTTON */}
        <Link
          href="/zoho"
          className="relative h-[45vh] md:h-[70vh]  flex flex-col items-center justify-center text-center rounded-2xl shadow-lg"
          aria-label="Go to Zoho Page"
        >
          <div className="flex items-center justify-center gap-5 mb-8 px-4 flex-wrap sm:flex-nowrap">
            <Image
              src="/images/logos/agsuite_logo.webp"
              alt="AGSuite Logo"
              width={180}
              height={60}
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
            <div className="w-px h-8 bg-gray-400/50 hidden sm:block" />
            <Image
              src="/images/zoho logos/zoho premium.png"
              alt="Zoho Premium Partner Logo"
              width={180}
              height={60}
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </div>
          <button className="px-8 py-3 rounded-lg bg-gray-700 text-white text-lg font-semibold hover:bg-gray-900 transition">
            Visit Zoho →
          </button>
        </Link>

      </section>
    </main>
  );
}





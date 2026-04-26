import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";
import ServicesMenuList from "@/components/ServicesMenuList";
import { getAllGBPCategories } from "@/lib/gbp-categories-data";
import { FULL_MENU } from "@/lib/services-menu";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = 'force-static';

/* ============================================================
   SERVICES INDEX — category hub with real prices + times
   ============================================================ */

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full service menu at Studio Salon in Berkeley: loc maintenance, braids, weaves, color, silk press, cuts, and more. Real prices and times.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing | Studio Salon",
    description:
      "Full service menu at Studio Salon in Berkeley: loc maintenance, braids, weaves, color, silk press, cuts, and more.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website",
  },
};

/* ── Service menu now lives in lib/services-menu.ts so the booking flow can find every item ── */

export default function ServicesPage() {
  const categories = getAllGBPCategories();

  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="blush-gradient section-pad" aria-labelledby="services-hero">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow text-[#9E4F63]">The Full Menu</span>
            <h1
              id="services-hero"
              className="section-heading mb-5 text-[#2C2C2C]"
            >
              Studio Salon services &amp; pricing
            </h1>
            <p
              className="text-[#5A5A5A] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Loc maintenance, braids, weaves, color, cuts, and barbering — all done in the chair at 2902 Sacramento Street. Prices reflect length and density; we&rsquo;ll confirm a firm quote when you book.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category jump nav ───────────────────────────── */}
      <nav
        aria-label="Jump to service category"
        className="sticky top-16 md:top-20 z-30 bg-[#FFF9F9]/95 backdrop-blur-md border-b border-[#F0D4DB]"
      >
        <div className="container-xl">
          <ul
            className="flex md:flex-wrap gap-2 py-3 md:justify-center overflow-x-auto scrollbar-none"
            style={{ fontFamily: "var(--font-sans)", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {FULL_MENU.map((c) => {
              const anchor = c.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
              return (
                <li key={c.category} className="flex-shrink-0">
                  <a
                    href={`#${anchor}`}
                    className="block px-3 py-1.5 text-sm font-semibold text-[#5A5A5A] hover:text-[#9E4F63] hover:bg-[#FCE8EC] rounded-full transition-colors whitespace-nowrap"
                  >
                    {c.category}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Category sections ───────────────────────────── */}
      <section className="bg-[#FFF9F9] section-pad" aria-label="Services by category">
        <div className="container-xl">
          <ServicesMenuList menu={FULL_MENU} />
        </div>
      </section>

      {/* ── GBP categories ─────────────────────────────── */}
      <section className="bg-[#FCE8EC] section-pad" aria-labelledby="categories-heading">
        <div className="container-xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-eyebrow">Explore By Category</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="categories-heading" className="section-heading">
              Browse by specialty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/categories/${cat.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-[#F0D4DB] hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-serif)] text-[1.2rem] font-bold text-[#2C2C2C] group-hover:text-[#9E4F63] transition-colors">
                    {cat.name}
                  </h3>
                  {cat.isPrimary && (
                    <span className="flex-shrink-0 text-[0.65rem] font-bold uppercase tracking-wider bg-[#E8A1B3]/20 text-[#9E4F63] px-2 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-sans)" }}>
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#B86A7E] font-medium mb-3"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  {cat.tagline}
                </p>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4 line-clamp-3"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B86A7E] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  {cat.services.length} services
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="See something you want?"
        subtext="Text a reference photo and the service you're thinking about — we&rsquo;ll send back time and pricing the same day."
        ctaText="Book Your Appointment"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";
import { getAllGBPCategories } from "@/lib/gbp-categories-data";
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

/* ── Service menu (derived from Booksy) ────────────────────── */
const FULL_MENU = [
  {
    category: "Locs & Natural Hair",
    blurb: "Retwists, interlocks, repair, natural styling, and silk press — the foundation of what we do.",
    items: [
      { name: "Loc Retwist",              price: "$85",    duration: "85 min",        slug: "loc-maintenance" },
      { name: "Loc Maintenance (long)",   price: "$100+",  duration: "95 min",        slug: "loc-maintenance" },
      { name: "Senegalese Twist",         price: "$25+",   duration: "40 min",        slug: "loc-maintenance" },
      { name: "Hair Care Package",        price: "$300+",  duration: "8 hr",          slug: "loc-maintenance" },
      { name: "Silk Press",               price: "$135",   duration: "70 min",        slug: "silk-press" },
      { name: "Natural Hair Styling",     price: "$125",   duration: "60 min",        slug: "natural-hair-styling" },
      { name: "Natural Hair Stylists (long)", price: "$200+", duration: "3 hr 30 min", slug: "natural-hair-styling" },
      { name: "Hair Styling",             price: "$85",    duration: "2 hr 30 min",   slug: "natural-hair-styling" },
      { name: "Two-Strand Twist Style",   price: "$225+",  duration: "4 hr 25 min",   slug: "two-strand-twist" },
      { name: "Root Touch-up (Style)",    price: "$45+",   duration: "95 min",        slug: "natural-hair-styling" },
    ],
  },
  {
    category: "Braids",
    blurb: "Knotless, cornrows, feed-in, tribal — protective styles that don&apos;t punish your edges.",
    items: [
      { name: "Cornrows",                 price: "$80",    duration: "1 hr 40 min",   slug: "braids" },
      { name: "Cornrows (knotless)",      price: "$200+",  duration: "4 hr",          slug: "braids" },
      { name: "Hair Braids (small)",      price: "$100",   duration: "1 hr 10 min",   slug: "braids" },
      { name: "Hair Braids (medium)",     price: "$150",   duration: "2 hr",          slug: "braids" },
      { name: "Kids Braids (4–12)",       price: "$100+",  duration: "90 min",        slug: "braids" },
      { name: "Feed-In Braids",           price: "$325",   duration: "6 hr 30 min",   slug: "braids" },
      { name: "Feed-In Braids (shorter)", price: "$185",   duration: "5 hr 30 min",   slug: "braids" },
      { name: "Tribal Braids (medium)",   price: "$200",   duration: "6 hr 30 min",   slug: "braids" },
      { name: "Tribal Braids (large)",    price: "$225",   duration: "6 hr 30 min",   slug: "braids" },
      { name: "Hair Design / Parts",      price: "$45",    duration: "50 min",        slug: "braids" },
      { name: "Hair Design (detailed)",   price: "$85",    duration: "60 min",        slug: "braids" },
    ],
  },
  {
    category: "Weaves & Extensions",
    blurb: "Clean sew-ins, breathable crochet, and quick-install styles for when you want a change tomorrow.",
    items: [
      { name: "Sew-In Weave",             price: "$180",   duration: "3 hr 15 min",   slug: "sew-in-weave" },
      { name: "Quick Weave (standard)",   price: "$125",   duration: "2 hr",          slug: "quick-weave" },
      { name: "Quick Weave (extended)",   price: "$135+",  duration: "2 hr 15 min",   slug: "quick-weave" },
      { name: "Crochet Braids",           price: "$165",   duration: "2 hr 30 min",   slug: "crochet-braids" },
      { name: "Updo (standard)",          price: "$125",   duration: "2 hr 30 min",   slug: "quick-weave" },
      { name: "Updo (special occasion)",  price: "$130",   duration: "2 hr 30 min",   slug: "quick-weave" },
      { name: "Updo (premium)",           price: "$165+",  duration: "3 hr 30 min",   slug: "quick-weave" },
    ],
  },
  {
    category: "Color",
    blurb: "Single-process, highlights, balayage, bleach &amp; tone, and root touch-ups. Text a reference photo.",
    items: [
      { name: "Bleach & Tone",            price: "$40+",   duration: "45 min",        slug: "hair-color" },
      { name: "Single-Process Color",     price: "$85",    duration: "90 min",        slug: "hair-color" },
      { name: "Highlights",               price: "$85+",   duration: "2 hr 35 min",   slug: "hair-color" },
      { name: "Balayage / Ends",          price: "Custom", duration: "by quote",      slug: "hair-color" },
    ],
  },
  {
    category: "Cuts & Barbering",
    blurb: "Women&rsquo;s cuts, men&rsquo;s braids, buzz cuts, line-ups. Walk-ins welcome for quick services.",
    items: [
      { name: "Women's Haircut",          price: "$30+",   duration: "40 min",        slug: "womens-haircut" },
      { name: "Buzz Cut",                 price: "$100",   duration: "90 min",        slug: "womens-haircut" },
      { name: "Men's Braids (small)",     price: "$100",   duration: "70 min",        slug: "mens-hair-barbering" },
      { name: "Men's Braids (medium)",    price: "$150",   duration: "2 hr",          slug: "mens-hair-barbering" },
      { name: "Men's Natural Hair Style", price: "$135",   duration: "3 hr 15 min",   slug: "mens-hair-barbering" },
    ],
  },
  {
    category: "Chemical & Add-ons",
    blurb: "Relaxer services and quick add-ons to round out your visit.",
    items: [
      { name: "Chemical Relaxer",         price: "$140",   duration: "2 hr 15 min",   slug: "chemical-relaxer" },
      { name: "Eyebrow Wax",              price: "$20",    duration: "30 min",        slug: "eyebrow-waxing" },
    ],
  },
];

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
          <ul className="flex flex-wrap gap-2 py-3 justify-center" style={{ fontFamily: "var(--font-sans)" }}>
            {FULL_MENU.map((c) => {
              const anchor = c.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
              return (
                <li key={c.category}>
                  <a
                    href={`#${anchor}`}
                    className="px-3 py-1.5 text-sm font-semibold text-[#5A5A5A] hover:text-[#9E4F63] hover:bg-[#FCE8EC] rounded-full transition-colors"
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
          <div className="space-y-16 max-w-5xl mx-auto">
            {FULL_MENU.map((cat) => {
              const anchor = cat.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-");
              return (
                <div key={cat.category} id={anchor} className="scroll-mt-32">
                  <div className="flex items-baseline justify-between gap-4 mb-2 pb-2 border-b-2 border-[#E8A1B3]">
                    <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.5vw+0.5rem,2rem)] font-bold text-[#2C2C2C]">
                      {cat.category}
                    </h2>
                    <span className="text-xs text-[#5A5A5A] uppercase tracking-wider font-semibold flex-shrink-0"
                      style={{ fontFamily: "var(--font-sans)" }}>
                      {cat.items.length} services
                    </span>
                  </div>
                  <p className="text-[#5A5A5A] mb-6 max-w-2xl"
                    style={{ fontFamily: "var(--font-sans)" }}
                    dangerouslySetInnerHTML={{ __html: cat.blurb }} />

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    {cat.items.map((item, idx) => (
                      <li key={`${item.slug}-${idx}`}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="group flex items-baseline justify-between gap-3 py-3 px-3 -mx-3 rounded-lg hover:bg-[#FCE8EC] transition-colors border-b border-[#F0D4DB]/50"
                        >
                          <span className="flex-1 min-w-0">
                            <span className="block font-semibold text-[#2C2C2C] group-hover:text-[#9E4F63] transition-colors">
                              {item.name}
                            </span>
                            <span className="block text-xs text-[#5A5A5A] mt-0.5">
                              {item.duration}
                            </span>
                          </span>
                          <span className="flex-shrink-0 font-bold text-[#B86A7E] group-hover:text-[#9E4F63] transition-colors">
                            {item.price}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
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

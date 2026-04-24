import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";
import ServicesMenuList from "@/components/ServicesMenuList";
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

/* ── Service menu (from Booksy) ────────────────────────────── */
const FULL_MENU = [
  {
    category: "Locs & Dreadlocks",
    blurb: "Retwists, interlocking, starter dreads, instant locs, barrel twists, and loc repair — Britnee&apos;s specialty.",
    items: [
      { name: "Retwist",                           price: "$100",  duration: "2 hr",          slug: "loc-maintenance", video: "/videos/menu/loc-retwist.mp4" },
      { name: "Loc Maintenance / Touch Up",        price: "$165+", duration: "2 hr 45 min",   slug: "loc-maintenance", video: "/videos/menu/loc-retwist.mp4" },
      { name: "Locs w/ Tool",                      price: "$200+", duration: "3 hr 30 min",   slug: "loc-maintenance", video: "/videos/menu/loc-retwist.mp4" },
      { name: "Starter Dreads",                    price: "$120+", duration: "2 hr 30 min",   slug: "loc-maintenance", video: "/videos/menu/starter-locs.mp4" },
      { name: "Instant Locs",                      price: "$300+", duration: "8 hr",          slug: "loc-maintenance", video: "/videos/menu/instant-locs.mp4" },
      { name: "Retwist (Kids 4–12)",               price: "$85",   duration: "1 hr 45 min",   slug: "loc-maintenance", video: "/videos/menu/kids-braids.mp4" },
      { name: "Dread Detox",                       price: "$65",   duration: "1 hr",          slug: "loc-maintenance", video: "/videos/menu/dread-detox.mp4" },
      { name: "Barrel Twist Style on Locs",        price: "$25+",  duration: "40 min",        slug: "loc-maintenance", video: "/videos/menu/two-strand-twist.mp4" },
    ],
  },
  {
    category: "Natural Hair",
    blurb: "Silk press, wash &amp; style, curl setting, and two-strand twists — for every texture from 3a to 4c.",
    items: [
      { name: "Silk Press",                        price: "$135",  duration: "1 hr 10 min",   slug: "silk-press",            video: "/videos/menu/silk-press.mp4" },
      { name: "Silk Press (Kids 4–10)",            price: "$85",   duration: "2 hr 30 min",   slug: "silk-press",            video: "/videos/menu/kids-silk-press.mp4" },
      { name: "Natural Curl Setting",              price: "$125",  duration: "1 hr",          slug: "natural-hair-styling" },
      { name: "Natural Hair Singles",              price: "$200+", duration: "3 hr 30 min",   slug: "natural-hair-styling", video: "/videos/menu/natural-singles.mp4" },
      { name: "Natural Bun",                       price: "$85",   duration: "1 hr 45 min",   slug: "natural-hair-styling" },
      { name: "Curls Only",                        price: "$25+",  duration: "1 hr 45 min",   slug: "natural-hair-styling", video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Touch Up Natural Hairstyles",       price: "$45+",  duration: "1 hr 35 min",   slug: "natural-hair-styling", video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Wash, Blow Dry & Trim",             price: "$60",   duration: "45 min",        slug: "natural-hair-styling" },
      { name: "Two Strand Twist w/ Hair Added",    price: "$225+", duration: "4 hr 25 min",   slug: "two-strand-twist",      video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Two Strand Twist (Natural Hair)",   price: "$125",  duration: "2 hr 30 min",   slug: "two-strand-twist",      video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Two Strand Twist with Design",      price: "$135+", duration: "3 hr",          slug: "two-strand-twist", video: "/videos/menu/two-strand-twist.mp4" },
    ],
  },
  {
    category: "Braids",
    blurb: "Knotless, cornrows, stitch, tribal, and Fulani — protective styles that don&apos;t punish your edges.",
    items: [
      { name: "Large Knotless Braids",             price: "$125",  duration: "2 hr 30 min",   slug: "braids", video: "/videos/menu/large-knotless.mp4" },
      { name: "Medium Knotless",                   price: "$185",  duration: "6 hr 30 min",   slug: "braids", video: "/videos/menu/knotless-braids.mp4" },
      { name: "Small Knotless Singles",            price: "$225",  duration: "8 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Cornrows with Half Braids Singles", price: "$200+", duration: "4 hr",          slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "4 Straight Back (Stitch)",          price: "$85",   duration: "2 hr 30 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "5 Straight Back (Stitch)",          price: "$110",  duration: "2 hr 30 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "6 Straight Back (Stitch)",          price: "$120",  duration: "3 hr",          slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "8 Straight Back (Stitch)",          price: "$130",  duration: "3 hr 15 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "10–12 Straight Back (Stitch)",      price: "$145",  duration: "3 hr 15 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "2 Stitch Braids",                   price: "$50",   duration: "50 min",        slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "4 Stitches (Crisscrossed)",         price: "$85",   duration: "1 hr 30 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "XSmall Tribal Braids w/ Designs",  price: "$325",  duration: "6 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Small Tribal Braids",               price: "$200",  duration: "6 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Small Tribal Braids w/ Designs",   price: "$225",  duration: "6 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Medium Tribal Braids",              price: "$185",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/knotless-braids.mp4" },
      { name: "Fulani (Small/Med Knotless)",       price: "$280",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Fulani Medium Knotless",            price: "$225",  duration: "5 hr 20 min",   slug: "braids", video: "/videos/menu/knotless-braids.mp4" },
      { name: "Fulani Versatile + Small/Med",      price: "$310",  duration: "6 hr 30 min",   slug: "braids", video: "/videos/menu/small-knotless.mp4" },
      { name: "Fulani Versatile + Medium Knotless",price: "$250",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/knotless-braids.mp4" },
      { name: "4 Cornrows",                        price: "$45",   duration: "50 min",        slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "6 Cornrows",                        price: "$65",   duration: "1 hr",          slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "8 Cornrows",                        price: "$85",   duration: "1 hr",          slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "12–20 Straight Back Braids",        price: "$145+", duration: "3 hr 30 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "2 Braids with Hair Added",          price: "$80",   duration: "1 hr 40 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "French Braids for Kids",            price: "$100+", duration: "1 hr 30 min",   slug: "braids", video: "/videos/menu/french-braids-kids.mp4" },
    ],
  },
  {
    category: "Bob Style Knotless",
    blurb: "Knotless bob styles — smedium, medium, and large with optional Bohemian texture.",
    items: [
      { name: "Bob (Smedium + Bohemian)",          price: "$275",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/bob-smedium.mp4" },
      { name: "Bob (Medium + Bohemian)",           price: "$225",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Smedium Knotless)",            price: "$220",  duration: "5 hr 30 min",   slug: "braids", video: "/videos/menu/bob-smedium.mp4" },
      { name: "Bob (Medium Knotless)",             price: "$180",  duration: "4 hr 35 min",   slug: "braids", video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Large Size)",                  price: "$125",  duration: "3 hr 30 min",   slug: "braids", video: "/videos/menu/bob-medium.mp4" },
    ],
  },
  {
    category: "Weaves & Extensions",
    blurb: "Sew-in, crochet, quick weave, and combo styles. Hair not provided — bring your bundles.",
    items: [
      { name: "Sew In Weave",                      price: "$180",  duration: "3 hr 15 min",   slug: "sew-in-weave",   video: "/videos/menu/sew-in-weave.mp4" },
      { name: "Crochet Sew In",                    price: "$165",  duration: "2 hr 30 min",   slug: "crochet-braids", video: "/videos/menu/crochet-braids.mp4" },
      { name: "Full Quick Weave",                  price: "$125",  duration: "2 hr",          slug: "quick-weave",    video: "/videos/menu/quick-weave.mp4" },
      { name: "Quick Weave w/ Style",              price: "$135+", duration: "2 hr 15 min",   slug: "quick-weave",    video: "/videos/menu/quick-weave.mp4" },
      { name: "Half Up Half Down Style Sew In",    price: "$160",  duration: "2 hr 45 min",   slug: "sew-in-weave",   video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Half Up Half Down with Swoop",      price: "$175",  duration: "2 hr 55 min",   slug: "sew-in-weave",   video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Half Up Half Down Quick Weave",     price: "$180",  duration: "3 hr 20 min",   slug: "quick-weave",    video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Creative Style Quick Weave",        price: "$160",  duration: "3 hr 30 min",   slug: "quick-weave",    video: "/videos/menu/quick-weave.mp4" },
      { name: "2 Braids x Quick Weave",            price: "$145",  duration: "2 hr 30 min",   slug: "quick-weave",    video: "/videos/menu/quick-weave.mp4" },
      { name: "Braids in Front + Quick Weave",     price: "$220",  duration: "4 hr 30 min",   slug: "quick-weave",    video: "/videos/menu/quick-weave.mp4" },
    ],
  },
  {
    category: "Ponytail Styles",
    blurb: "Sleek ponytails, braided styles, swoop, and knot bun — wash &amp; blow dry included on most.",
    items: [
      { name: "Sleek Ponytail",                    price: "$125",  duration: "2 hr",          slug: "natural-hair-styling", video: "/videos/menu/sleek-ponytail.mp4" },
      { name: "Swoop Ponytail",                    price: "$125",  duration: "2 hr 30 min",   slug: "natural-hair-styling", video: "/videos/menu/swoop-ponytail.mp4" },
      { name: "Knot Bun",                          price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling" },
      { name: "3 Part Pony",                       price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling", video: "/videos/menu/braided-ponytail.mp4" },
      { name: "Bundle Pony",                       price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling", video: "/videos/menu/bundle-pony.mp4" },
      { name: "Braided Ponytail (Women)",          price: "$165+", duration: "3 hr 30 min",   slug: "braids",               video: "/videos/menu/braided-ponytail.mp4" },
    ],
  },
  {
    category: "Hair Color",
    blurb: "Highlights, dye, color &amp; style, and dye tips — blonde/black provided; custom colors available.",
    items: [
      { name: "Highlights",                        price: "$85+",  duration: "2 hr 35 min",   slug: "hair-color", video: "/videos/menu/highlights.mp4" },
      { name: "Hair Dye",                          price: "$85",   duration: "1 hr 30 min",   slug: "hair-color", video: "/videos/menu/hair-dye.mp4" },
      { name: "Hair Color & Style",                price: "$185",  duration: "3 hr",          slug: "hair-color", video: "/videos/menu/hair-dye.mp4" },
      { name: "Dye Tips / Ends",                   price: "$40+",  duration: "45 min",        slug: "hair-color", video: "/videos/menu/dye-tips.mp4" },
    ],
  },
  {
    category: "Cuts & Barbering",
    blurb: "Women&rsquo;s cuts, pixie, line-up, and men&rsquo;s haircuts — student pricing available.",
    items: [
      { name: "Women's Haircut",                   price: "$30+",  duration: "40 min",        slug: "womens-haircut",       video: "/videos/menu/pixie-cut.mp4" },
      { name: "Trim (½ inch ends)",                price: "$30",   duration: "30 min",        slug: "womens-haircut" },
      { name: "Pixie Haircut",                     price: "$100",  duration: "1 hr 30 min",   slug: "womens-haircut",       video: "/videos/menu/pixie-cut.mp4" },
      { name: "Women Line Up w/ Fade (Back)",      price: "$45+",  duration: "30 min",        slug: "womens-haircut", video: "/videos/menu/pixie-cut.mp4" },
      { name: "Beard Line Up",                     price: "$25",   duration: "30 min",        slug: "mens-hair-barbering" },
      { name: "Men Haircut + Beard Line Up",       price: "$50",   duration: "1 hr",          slug: "mens-hair-barbering" },
      { name: "Taper & Line Up",                   price: "$45",   duration: "45 min",        slug: "mens-hair-barbering" },
      { name: "Line Up Only",                      price: "$25+",  duration: "30 min",        slug: "mens-hair-barbering" },
      { name: "Haircut / Razor Line Up",           price: "$100",  duration: "1 hr 10 min",   slug: "mens-hair-barbering" },
      { name: "Kid Haircuts",                      price: "$30",   duration: "45 min",        slug: "mens-hair-barbering", video: "/videos/menu/kids-braids.mp4" },
      { name: "Student Haircuts",                  price: "$25",   duration: "45 min",        slug: "mens-hair-barbering" },
    ],
  },
  {
    category: "Men's Braids",
    blurb: "Singles, freestyle designs, straight backs, and creative braid styles for men.",
    items: [
      { name: "Natural Hair Singles (Men)",        price: "$135",  duration: "3 hr 15 min",   slug: "mens-hair-barbering", video: "/videos/menu/natural-singles.mp4" },
      { name: "Designed Freestyle Braids",         price: "$100",  duration: "2 hr 30 min",   slug: "mens-hair-barbering", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Straight Backs (Men)",              price: "$100",  duration: "1 hr 10 min",   slug: "mens-hair-barbering", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Men Design Braids",                 price: "$150",  duration: "2 hr",          slug: "mens-hair-barbering", video: "/videos/menu/feed-in-braids.mp4" },
    ],
  },
  {
    category: "Chemical & Add-ons",
    blurb: "Relaxer, facials, waxing, braid takedown, wash &amp; blow dry, and consultation.",
    items: [
      { name: "Women Short Style with Relaxer",    price: "$140",  duration: "2 hr 15 min",   slug: "chemical-relaxer" },
      { name: "Eyebrow Wax",                       price: "$20",   duration: "30 min",        slug: "eyebrow-waxing",  video: "/videos/menu/eyebrow-wax.mp4" },
      { name: "Facials",                           price: "$60",   duration: "50 min",        slug: "eyebrow-waxing" },
      { name: "Black Mask",                        price: "$10",   duration: "30 min",        slug: "eyebrow-waxing" },
      { name: "Waxing (legs, underarms, brows)",   price: "$15+",  duration: "1 hr",          slug: "eyebrow-waxing", video: "/videos/menu/eyebrow-wax.mp4" },
      { name: "Wash & Blow Dry Only",              price: "$35+",  duration: "40 min",        slug: "natural-hair-styling" },
      { name: "Wash Steam Treatment",              price: "$100+", duration: "2 hr",          slug: "natural-hair-styling" },
      { name: "Braid Down for Wig",               price: "$45",   duration: "1 hr",          slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Braid Take Down",                  price: "$50+",  duration: "45 min",        slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Braid Touch Up (Entire Perimeter)", price: "$85+",  duration: "1 hr 40 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Need Help Parting",                 price: "$70+",  duration: "1 hr 10 min",   slug: "braids", video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Consultation",                      price: "$25+",  duration: "35 min",        slug: "natural-hair-styling" },
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

import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/CTABlock";
import HeroVideo from "@/components/HeroVideo";
import ServiceMenu from "@/components/ServiceMenu";
import { siteConfig } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/blog";

export const dynamic = 'force-static';

/* ============================================================
   HOMEPAGE — Studio Salon (Berkeley, CA)
   ============================================================ */

export const metadata: Metadata = {
  title: "Studio Salon | Hair Salon & Loc Specialists in Berkeley, CA",
  description:
    "Studio Salon in Berkeley — loc maintenance, braids, natural hair styling, sew-in weaves, silk press, color, and cuts with Britnee Lott. Call (510) 690-5274.",
  alternates: { canonical: "/" },
};

/* ── Service menu homepage digest (full list at /services) ─── */
const MENU = [
  {
    category: "Locs & Dreadlocks",
    items: [
      { name: "Retwist",                    price: "$100",   duration: "2 hr",          slug: "loc-maintenance",       image: "/images/gallery/loc-retwist.webp",         video: "/videos/menu/loc-retwist.mp4" },
      { name: "Loc Maintenance / Touch Up", price: "$165+",  duration: "2 hr 45 min",   slug: "loc-maintenance",       image: "/images/services/loc-maintenance.webp",    video: null },
      { name: "Starter Dreads",             price: "$120+",  duration: "2 hr 30 min",   slug: "loc-maintenance",       image: "/images/gallery/starter-locs.webp",        video: "/videos/menu/starter-locs.mp4" },
      { name: "Instant Locs",               price: "$300+",  duration: "8 hr",          slug: "loc-maintenance",       image: "/images/gallery/instant-locs.webp",        video: "/videos/menu/instant-locs.mp4" },
      { name: "Retwist (Kids 4–12)",        price: "$85",    duration: "1 hr 45 min",   slug: "loc-maintenance",       image: "/images/gallery/kids-braids.webp",         video: "/videos/menu/kids-braids.mp4" },
      { name: "Dread Detox",                price: "$65",    duration: "1 hr",          slug: "loc-maintenance",       image: "/images/gallery/dread-detox.webp",         video: "/videos/menu/dread-detox.mp4" },
    ],
  },
  {
    category: "Natural Hair",
    items: [
      { name: "Silk Press",                 price: "$135",   duration: "1 hr 10 min",   slug: "silk-press",            image: "/images/gallery/silk-press.webp",          video: "/videos/menu/silk-press.mp4" },
      { name: "Silk Press (Kids 4–10)",     price: "$85",    duration: "2 hr 30 min",   slug: "silk-press",            image: "/images/gallery/kids-silk-press.webp",     video: "/videos/menu/kids-silk-press.mp4" },
      { name: "Natural Curl Setting",       price: "$125",   duration: "1 hr",          slug: "natural-hair-styling",  image: "/images/services/natural-hair-styling.webp", video: null },
      { name: "Two Strand Twist",           price: "$125+",  duration: "2 hr 30 min",   slug: "two-strand-twist",      image: "/images/gallery/two-strand-twist.webp",    video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Two Strand Twist w/ Hair",   price: "$225+",  duration: "4 hr 25 min",   slug: "two-strand-twist",      image: "/images/gallery/two-strand-twist-hair.webp", video: null },
      { name: "Wash, Blow Dry & Trim",      price: "$60",    duration: "45 min",        slug: "natural-hair-styling",  image: "/images/gallery/wash-blow-dry.webp",       video: null },
    ],
  },
  {
    category: "Braids",
    items: [
      { name: "Large Knotless Braids",      price: "$125",   duration: "2 hr 30 min",   slug: "braids", image: "/images/gallery/large-knotless.webp",      video: "/videos/menu/large-knotless.mp4" },
      { name: "Medium Knotless",            price: "$185",   duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/knotless-braids.webp",     video: "/videos/menu/knotless-braids.mp4" },
      { name: "Small Knotless Singles",     price: "$225",   duration: "8 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",      video: "/videos/menu/small-knotless.mp4" },
      { name: "Tribal Braids",              price: "$185+",  duration: "5 hr 30 min",   slug: "braids", image: "/images/services/braids.webp",             video: null },
      { name: "Stitch Braids (4–12)",       price: "$85+",   duration: "2 hr 30 min+",  slug: "braids", image: "/images/gallery/feed-in-braids.webp",      video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Fulani Braids",              price: "$225+",  duration: "5 hr 20 min+",  slug: "braids", image: "/images/gallery/fulani-braids.webp",       video: null },
      { name: "Cornrows (4–8 braids)",      price: "$45+",   duration: "50 min+",       slug: "braids", image: "/images/gallery/cornrows.webp",            video: null },
      { name: "French Braids for Kids",     price: "$100+",  duration: "1 hr 30 min",   slug: "braids", image: "/images/gallery/french-braids-kids.webp",  video: "/videos/menu/french-braids-kids.mp4" },
    ],
  },
  {
    category: "Weaves & Extensions",
    items: [
      { name: "Sew In Weave",               price: "$180",   duration: "3 hr 15 min",   slug: "sew-in-weave",   image: "/images/gallery/sew-in-weave.webp",        video: "/videos/menu/sew-in-weave.mp4" },
      { name: "Crochet Sew In",             price: "$165",   duration: "2 hr 30 min",   slug: "crochet-braids", image: "/images/gallery/crochet-braids.webp",      video: "/videos/menu/crochet-braids.mp4" },
      { name: "Full Quick Weave",           price: "$125",   duration: "2 hr",          slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",         video: "/videos/menu/quick-weave.mp4" },
      { name: "Half Up Half Down Sew In",   price: "$160",   duration: "2 hr 45 min",   slug: "sew-in-weave",   image: "/images/gallery/half-up-half-down.webp",   video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Bob (Medium Knotless)",      price: "$180",   duration: "4 hr 35 min",   slug: "braids",         image: "/images/gallery/bob-medium.webp", video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Smedium Knotless)",     price: "$220",   duration: "5 hr 30 min",   slug: "braids",         image: "/images/gallery/bob-smedium.webp", video: "/videos/menu/bob-smedium.mp4" },
    ],
  },
  {
    category: "Ponytails & Updos",
    items: [
      { name: "Sleek Ponytail",             price: "$125",   duration: "2 hr",          slug: "natural-hair-styling", image: "/images/gallery/sleek-ponytail.webp",  video: "/videos/menu/sleek-ponytail.mp4" },
      { name: "Swoop Ponytail",             price: "$125",   duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/swoop-ponytail.webp",  video: "/videos/menu/swoop-ponytail.mp4" },
      { name: "Knot Bun",                   price: "$130",   duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/knot-bun.webp",         video: null },
      { name: "Bundle Pony",                price: "$130",   duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/bundle-pony.webp",     video: "/videos/menu/bundle-pony.mp4" },
      { name: "Braided Ponytail",           price: "$165+",  duration: "3 hr 30 min",   slug: "braids",               image: "/images/gallery/braided-ponytail.webp", video: "/videos/menu/braided-ponytail.mp4" },
    ],
  },
  {
    category: "Color, Cuts & Add-ons",
    items: [
      { name: "Highlights",                 price: "$85+",   duration: "2 hr 35 min",   slug: "hair-color",           image: "/images/gallery/highlights.webp",      video: "/videos/menu/highlights.mp4" },
      { name: "Hair Dye",                   price: "$85",    duration: "1 hr 30 min",   slug: "hair-color",           image: "/images/gallery/hair-dye.webp",        video: "/videos/menu/hair-dye.mp4" },
      { name: "Dye Tips / Ends",            price: "$40+",   duration: "45 min",        slug: "hair-color",           image: "/images/gallery/dye-tips.webp",        video: "/videos/menu/dye-tips.mp4" },
      { name: "Women's Haircut",            price: "$30+",   duration: "40 min",        slug: "womens-haircut",       image: "/images/gallery/pixie-cut.webp",       video: "/videos/menu/pixie-cut.mp4" },
      { name: "Men Haircut + Beard",        price: "$50",    duration: "1 hr",          slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Men's Natural Hair Singles", price: "$135",   duration: "3 hr 15 min",   slug: "mens-hair-barbering",  image: "/images/gallery/natural-singles.webp", video: "/videos/menu/natural-singles.mp4" },
      { name: "Chemical Relaxer",           price: "$140",   duration: "2 hr 15 min",   slug: "chemical-relaxer",     image: "/images/services/chemical-relaxer.webp", video: null },
      { name: "Eyebrow Wax",                price: "$20",    duration: "30 min",        slug: "eyebrow-waxing",       image: "/images/gallery/eyebrow-wax.webp",     video: "/videos/menu/eyebrow-wax.mp4" },
    ],
  },
];

/* ── Reviews (from Booksy — confirmed clients) ─────────────── */
const REVIEWS = [
  {
    author: "Dorothy",
    service: "Loc Maintenance / Touch Up",
    date: "Apr 2026",
    rating: 5,
    text: "I have to shout out the OWNER of Studio Salon because babyyy, the vibe starts from the top and you can feel it the moment you walk in. Britt is no joke — she's talented, warm, and clearly loves what she does.",
  },
  {
    author: "DeAndre",
    service: "6 Braids",
    date: "Feb 2026",
    rating: 5,
    text: "If you want your hair done right, this is the place to go. My stylist was professional, efficient, and the results are stunning. I've received so many compliments.",
  },
  {
    author: "Aaron",
    service: "Men's Haircut + Beard Line Up",
    date: "Aug 2025",
    rating: 5,
    text: "Yo, Britnee's work is straight-up top-notch, and she brings such a dope vibe to the table! Her services are legit amazing, and I'd totally recommend her to anyone.",
  },
  {
    author: "Chris",
    service: "Pixie Haircut",
    date: "Nov 2025",
    rating: 5,
    text: "I love my hair! I feel like I made a new friend.",
  },
  {
    author: "Daquan",
    service: "Beard Line Up",
    date: "Jan 2026",
    rating: 5,
    text: "Good quality haircut in and out as well. Will return back.",
  },
  {
    author: "Confirmed Client",
    service: "Hair Color & Style",
    date: "Jul 2025",
    rating: 5,
    text: "Did a really great job on my hair. The wash was very relaxing and refreshing. Will be returning. Thank you Britnee.",
  },
];

/* ── Homepage FAQs ─────────────────────────────────────────── */
const homepageFAQs = [
  {
    q: "Do you take walk-ins or do I need to book?",
    a: "We welcome walk-ins for quick services like brow waxing, root touch-ups, and buzz cuts. For locs, braids, weaves, color, and anything multi-hour, please book in advance — call or text (510) 690-5274. Loc appointments with Britnee can fill 2–3 weeks out.",
  },
  {
    q: "How long does a loc retwist take?",
    a: "A standard loc retwist at Studio Salon runs about 85 minutes and starts at $85. For longer or thicker locs, plan on about 95 minutes and pricing from $100. We'll confirm your time window when you book.",
  },
  {
    q: "What should I bring to a braid or weave appointment?",
    a: "Please bring the hair, beads, or accessories you want installed. For most braid styles, 32-inch braiding hair is plenty; for feed-in and tribal styles with extra length, bring an extra pack. Come with clean hair if possible.",
  },
  {
    q: "Where is Studio Salon and where can I park?",
    a: "We're at 2902 Sacramento St, Berkeley, CA 94702 — a short walk from Ashby BART and on the 72/72R bus line. Metered parking is available on Sacramento Street, and the side streets (Grant, Edwards, Julia) usually have open residential parking.",
  },
  {
    q: "Do you do hair for men and kids?",
    a: "Yes — men's braids start at $100, buzz cuts at $100, and kids' braids (ages 4–12) at $100. We style everyone in the chair with the same care.",
  },
  {
    q: "What colors do you work with?",
    a: "We handle single-process color (blonde, black, fashion shades), highlights, balayage, bleach & tone, and root touch-ups. Color starts at $40 for a bleach & tone and $85 for a full color service. Text a reference photo when you book.",
  },
  {
    q: "Can I book online?",
    a: "Online booking is being set up now. In the meantime, the fastest way to book is a quick call or text to (510) 690-5274 — Britnee responds same-day with availability.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFAQs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ── Helpers ───────────────────────────────────────────────── */
function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}${m > 0 ? `:${String(m).padStart(2, "0")}` : ""}${period}`;
}

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#E8A1B3" : "none"} stroke="#E8A1B3" strokeWidth="1.5" aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO — split layout, video/placeholder on right ─────── */}
      <section
        aria-labelledby="hero-heading"
        className="bg-[#FFF9F9] section-pad border-b border-[#F0D4DB]"
      >
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Copy */}
            <div className="flex-1 lg:max-w-[52%] w-full">
              <div className="inline-flex items-center gap-2 bg-[#FCE8EC] text-[#9E4F63] text-sm font-semibold px-4 py-2 rounded-full mb-6"
                style={{ fontFamily: "var(--font-sans)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>2902 Sacramento St, Berkeley</span>
              </div>

              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-bold text-[#2C2C2C] leading-[1.1] mb-5 tracking-tight"
              >
                Berkeley&rsquo;s loc &amp; natural hair specialists
              </h1>

              <p className="font-[family-name:var(--font-sans)] text-base sm:text-[1.1rem] lg:text-[1.2rem] text-[#5A5A5A] leading-relaxed mb-4 max-w-xl">
                Studio Salon is Britnee Lott&rsquo;s chair on Sacramento Street — where locs get cultivated, braids go in without the tension, and silk press is still an art. Every texture, every style, done with care.
              </p>
              <p className="font-[family-name:var(--font-sans)] text-sm sm:text-base text-[#9E4F63] font-medium leading-relaxed mb-7 max-w-xl">
                Walk-ins welcome for quick services. Loc &amp; braid appointments fill 2&ndash;3 weeks in advance &mdash; book early.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <Link
                  href="/book"
                  className="btn-primary text-center"
                  aria-label="Book an appointment at Studio Salon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Now
                </Link>
                <a
                  href="#services"
                  className="font-[family-name:var(--font-sans)] font-semibold text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-4 decoration-[#B86A7E]/40 hover:decoration-[#9E4F63] transition-colors text-base self-center"
                >
                  See Services &amp; Pricing ↓
                </a>
              </div>

              {/* Social proof microcopy */}
              <div
                className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#5A5A5A]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                  <span className="ml-1 font-bold text-[#2C2C2C]">{siteConfig.rating.value.toFixed(1)}</span>
                </span>
                <span className="text-[#5A5A5A]/70">·</span>
                <a href={siteConfig.booking.booksyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#9E4F63] underline underline-offset-2">
                  {siteConfig.rating.count}+ Booksy reviews
                </a>
                <span className="text-[#5A5A5A]/70">·</span>
                <span>Tue – Sat</span>
              </div>
            </div>

            {/* Hero media */}
            <div className="w-full lg:max-w-[48%] aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
              <HeroVideo />
            </div>
          </div>
        </div>
      </section>

            <section
        aria-labelledby="gallery-heading"
        className="bg-[#FCE8EC] section-pad"
      >
        <div className="container-xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-eyebrow">The Work</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="gallery-heading" className="section-heading mb-4">
              Real clients, real work
            </h2>
            <p className="text-[#5A5A5A]" style={{ fontFamily: "var(--font-sans)" }}>
              Follow{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2 font-semibold"
              >
                @studiosalonberkeley
              </a>{" "}
              for fresh work from the chair.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { caption: "Starter locs",     src: "/images/gallery/starter-locs.webp",     video: "/videos/gallery/starter-locs.mp4" },
              { caption: "Knotless braids",  src: "/images/gallery/knotless-braids.webp",  video: "/videos/gallery/knotless-braids.mp4" },
              { caption: "Silk press",       src: "/images/gallery/silk-press.webp",       video: "/videos/gallery/silk-press.mp4" },
              { caption: "Feed-in braids",   src: "/images/gallery/feed-in-braids.webp",   video: "/videos/gallery/feed-in-braids.mp4" },
              { caption: "Loc retwist",      src: "/images/gallery/loc-retwist.webp",      video: "/videos/gallery/loc-retwist.mp4" },
              { caption: "Crochet braids",   src: "/images/gallery/crochet-braids.webp",   video: "/videos/gallery/crochet-braids.mp4" },
              { caption: "Sew-in weave",     src: "/images/gallery/sew-in-weave.webp",     video: "/videos/gallery/sew-in-weave.mp4" },
              { caption: "Two-strand twist", src: "/images/gallery/two-strand-twist.webp", video: "/videos/gallery/two-strand-twist.mp4" },
            ].map(({ caption, src, video }) => (
              <div
                key={caption}
                className="relative aspect-square rounded-2xl overflow-hidden blush-gradient group cursor-pointer"
                aria-label={`Real salon work — ${caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <video
                  src={video}
                  poster={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${caption} by Britnee at Studio Salon Berkeley`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none">
                  <span className="text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    {caption}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#5A5A5A]/70 mt-6 italic"
            style={{ fontFamily: "var(--font-sans)" }}>
            Videos from{" "}
            <a
              href="https://www.tiktok.com/@britneethebarber2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2 font-semibold"
            >
              @britneethebarber2
            </a>{" "}
            on TikTok — more work posted weekly.
          </p>
        </div>
      </section>

            <section
        aria-labelledby="reviews-heading"
        className="bg-[#FFF9F9] section-pad"
      >
        <div className="container-xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="section-eyebrow">What Clients Say</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="reviews-heading" className="section-heading mb-4">
              {siteConfig.rating.value.toFixed(1)} stars from real Booksy reviews
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#5A5A5A]" style={{ fontFamily: "var(--font-sans)" }}>
              <span className="inline-flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </span>
              <span className="font-bold text-[#2C2C2C]">{siteConfig.rating.value.toFixed(1)}</span>
              <span>·</span>
              <span>{siteConfig.rating.count}+ reviews</span>
              <span>·</span>
              <a href="https://booksy.com/en-us/1434403_studio-salon_hair-salon_119583_berkeley#reviews-section" target="_blank" rel="noopener noreferrer" className="text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2">
                Read all on Booksy
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <figure
                key={i}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#F0D4DB] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3" style={{ fontFamily: "var(--font-sans)" }}>
                  <span className="inline-flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => <Star key={j} />)}
                  </span>
                  <span className="text-xs text-[#5A5A5A]">{r.date}</span>
                </div>
                <blockquote className="text-[#2C2C2C] text-base leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3 pt-4 border-t border-[#F0D4DB]"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  <div>
                    <span className="block font-bold text-[#2C2C2C] text-sm">{r.author}</span>
                    <span className="block text-xs text-[#5A5A5A] mt-0.5">{r.service}</span>
                  </div>
                  <a
                    href="https://booksy.com/en-us/1434403_studio-salon_hair-salon_119583_berkeley#reviews-section"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B86A7E] hover:text-[#9E4F63] font-semibold uppercase tracking-wider flex-shrink-0 transition-colors"
                  >
                    Booksy ✓
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>



      {/* ── 3. FULL MENU — services with times + prices (nilooo style) ── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-[#FFF9F9] section-pad scroll-mt-24"
      >
        <div className="container-xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-eyebrow">Services &amp; Pricing</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="services-heading" className="section-heading mb-4">
              Services &amp; pricing
            </h2>
            <p className="text-[#5A5A5A]" style={{ fontFamily: "var(--font-sans)" }}>
              Price ranges reflect length and density. We&rsquo;ll confirm a firm price when you book.
            </p>
          </div>

          <ServiceMenu menu={MENU} />

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn-secondary"
            >
              Full services catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PARALLAX — brand statement (thelocticiansalon vibe) ── */}
      <section
        aria-labelledby="parallax-heading"
        className="parallax-section section-pad relative blush-gradient-dark"
      >
        <div className="absolute inset-0 bg-[#2C2C2C]/20" aria-hidden="true" />
        <div className="container-xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] rounded-full bg-white/60 mx-auto mb-6" aria-hidden="true" />
            <h2
              id="parallax-heading"
              className="font-[family-name:var(--font-serif)] text-white font-bold leading-tight mb-6 tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw + 0.75rem, 3.25rem)" }}
            >
              &ldquo;Healthy hair is the goal. Pretty is a given.&rdquo;
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-sans)" }}>
              Britnee has been cultivating locs, installing protective styles, and styling natural hair in Berkeley for years. The work speaks for itself — but so do the returning clients.
            </p>
            <p className="text-white/70 text-sm italic"
              style={{ fontFamily: "var(--font-sans)" }}>
              — Britnee Lott, owner &amp; stylist
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. REVIEWS — Google/Booksy pulled-in vibe (worldofbraids) ── */}

      {/* ── 6. GALLERY — placeholder cards ready to swap for real photos ── */}


      {/* ── 7. HOURS + MAP — worldofbraids style with directions ── */}
      <section
        id="hours"
        aria-labelledby="hours-heading"
        className="bg-[#FFF9F9] section-pad scroll-mt-24"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Hours + address */}
            <div>
              <span className="section-eyebrow">Find Us</span>
              <div className="blush-divider mb-6" />
              <h2 id="hours-heading" className="section-heading mb-6">
                Hours &amp; location
              </h2>

              <address className="not-italic mb-6"
                style={{ fontFamily: "var(--font-sans)" }}>
                <div className="text-xl font-bold text-[#2C2C2C] mb-1">
                  {siteConfig.address.street}
                </div>
                <div className="text-[#5A5A5A]">
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </div>
              </address>

              {/* Hours table */}
              <div className="bg-white rounded-2xl border border-[#F0D4DB] p-5 mb-5"
                style={{ fontFamily: "var(--font-sans)" }}>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#B86A7E] mb-3">
                  Salon Hours
                </h3>
                <ul className="space-y-2">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-1.5 border-b border-[#F0D4DB]/50 last:border-0">
                      <span className={`font-semibold ${h.closed ? "text-[#5A5A5A]/60" : "text-[#2C2C2C]"}`}>
                        {h.day}
                      </span>
                      <span className={`text-sm ${h.closed ? "text-[#5A5A5A]/60 italic" : "text-[#2C2C2C]"}`}>
                        {h.closed ? "Closed" : `${formatTime(h.open!)} – ${formatTime(h.close!)}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={siteConfig.phone.href}
                  className="btn-secondary justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {siteConfig.phone.display}
                </a>
              </div>

              <p className="text-xs text-[#5A5A5A] mt-5"
                style={{ fontFamily: "var(--font-sans)" }}>
                Near Ashby BART &middot; AC Transit 72/72R &middot; Metered &amp; residential parking
              </p>
            </div>

            {/* Right: Map embed */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#F0D4DB]">
              <iframe
                title="Studio Salon on Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="bg-[#FCE8EC] section-pad"
      >
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Before You Book</span>
              <div className="blush-divider mx-auto mb-6" />
              <h2 id="faq-heading" className="section-heading">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-3">
              {homepageFAQs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-[#F0D4DB] p-5 transition-shadow open:shadow-md"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-left font-bold text-[#2C2C2C] text-base sm:text-lg"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#B86A7E] font-bold text-xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[#5A5A5A] text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8b. FROM THE CHAIR — blog preview ─────────────────── */}
      {(() => {
        const posts = getAllPosts().slice(0, 3);
        return (
          <section
            aria-labelledby="blog-preview-heading"
            className="bg-[#FFF9F9] section-pad border-t border-[#F0D4DB]"
          >
            <div className="container-xl">
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <span className="section-eyebrow">From the Chair</span>
                <div className="blush-divider mx-auto mb-6" />
                <h2 id="blog-preview-heading" className="section-heading mb-4">
                  From the Chair
                </h2>
                <p className="text-[#5A5A5A]" style={{ fontFamily: "var(--font-sans)" }}>
                  Hair care tips, style guides, and notes from Britnee&rsquo;s chair.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-lg transition-shadow border border-[#F0D4DB] flex flex-col"
                  >
                    <h3 className="font-[family-name:var(--font-serif)] text-[1.15rem] font-bold text-[#2C2C2C] mb-3 leading-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#9E4F63] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      className="text-[#5A5A5A] text-sm leading-relaxed mb-5 flex-1"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-[family-name:var(--font-sans)] font-bold text-[#B86A7E] hover:text-[#9E4F63] text-sm inline-flex items-center gap-1 group"
                      aria-label={`Read ${post.title}`}
                    >
                      Read
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/blog" className="btn-secondary">
                  View all posts →
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── 9. FINAL CTA ───────────────────────────────────────── */}
      <CTABlock
        headline="Ready for the chair?"
        subtext="Call or text Britnee to reserve your spot. Locs, braids, weaves, color, cuts — we&rsquo;ve got you."
        ctaText="Book Your Appointment"
      />
    </>
  );
}

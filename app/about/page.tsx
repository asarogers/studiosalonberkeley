import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/CTABlock";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "About Studio Salon",
  description:
    "Studio Salon Berkeley is a 4-type and locked-hair specialist studio at 2902 Sacramento St — locs, knotless braids, sew-ins, silk press, color, bridal, and beauty add-ons.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Studio Salon | Berkeley, CA",
    description:
      "Berkeley's natural hair, loc, and protective-style specialists at 2902 Sacramento St. Serving Berkeley, Oakland, Albany, El Cerrito, and Emeryville.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: "Studio Salon Berkeley" }],
  },
};

const VALUES = [
  {
    title: "Scalp-first, always",
    description:
      "Healthy scalps grow healthy hair. Edge protection, proper tension, and porosity-matched products come before the styling itself &mdash; and the work lasts longer because of it.",
  },
  {
    title: "Specialists, not generalists",
    description:
      "Natural hair, locs, and protective styles are the core of the work, not an add-on. The chair is set up for 4-type and locked hair from day one, with stylists who specialize in textured hair at every stage.",
  },
  {
    title: "Every texture, every time",
    description:
      "3a waves through 4c coils, fine to dense, starter sets to mature locs. We don&apos;t have a hierarchy of hair at Studio Salon &mdash; only a chair that welcomes everyone.",
  },
  {
    title: "Your time, respected",
    description:
      "We quote an honest time window when you book. If you&apos;re scheduled for 3 hours, you&apos;re out in about 3 hours. Your day doesn&apos;t end at the salon.",
  },
];

const SPECIALTIES = [
  {
    title: "Loc cultivation",
    body: "Starter sets, instant locs, retwists, interlocks, sisterlocks &amp; microlocs maintenance, repair work, and long-haul cultivation. We treat locs like the multi-year project they are &mdash; tracking your grid visit to visit so the work compounds.",
  },
  {
    title: "Loc repair &amp; detox",
    body: "Broken locs, thinning roots, buildup, and reattachment work. Established loc clients regularly need repair and deep-cleanse services, and we book those the same week so a small problem stays small.",
  },
  {
    title: "Protective styles",
    body: "Knotless, box, tribal, Fulani, stitch cornrows, feed-ins, passion twists, Senegalese twists, and crochet installs done with edge-protecting tension. Kids&apos; protective styles get gentle tension and patience.",
  },
  {
    title: "Natural hair styling",
    body: "Silk presses that swing, twist-outs with definition, wash-and-go finishing on every porosity. We work with transitioning clients, postpartum regrowth, and mature gray hair with the same care.",
  },
  {
    title: "Extensions, weaves &amp; wigs",
    body: "Sew-ins with leave-out or closure, lace frontal installs, quick weaves, tape-ins, and full wig install &amp; customization &mdash; including custom work for chemo, alopecia, and medical hair-loss clients.",
  },
  {
    title: "Color, cuts &amp; barbering",
    body: "Hair color and highlights, balayage on textured hair, color correction, gray coverage, keratin, and chemical relaxer alongside women&apos;s cuts, men&apos;s cuts with beard line-ups, and clean fades for men&apos;s braids.",
  },
  {
    title: "Bridal &amp; special occasion",
    body: "Bridal trials and day-of styling for the bride and the full party, plus prom updos, photoshoot styling, and special-event sets. Berkeley/Oakland weddings often book 6&ndash;12 months out &mdash; we keep notes from the trial so the day-of look is exactly what we agreed on.",
  },
  {
    title: "Beauty add-ons",
    body: "Eyebrow waxing and threading, facials, lash extensions, makeup, and licensed massage therapy. The studio is built as a one-stop self-care visit so you can leave fully done, not partially.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="blush-gradient section-pad" aria-labelledby="about-hero">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow text-[#9E4F63]">About the Salon</span>
            <h1
              id="about-hero"
              className="section-heading mb-6 text-[#2C2C2C]"
            >
              The East Bay&rsquo;s natural hair, loc, and protective-style specialists
            </h1>
            <p
              className="text-[#5A5A5A] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Studio Salon sits at 2902 Sacramento Street &mdash; a Berkeley studio built around scalp-first textured hair work, honest timing, and stylists who actually specialize in 4-type and locked hair.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="bg-[#FFF9F9] section-pad" aria-labelledby="bio">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Studio card */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-storefront.png"
                  alt="Studio Salon Berkeley storefront on Sacramento Street"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "70% center" }}
                  priority
                />
                {/* Soft bottom gradient for label legibility */}
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)" }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span
                      className="block text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Studio &amp; Chair
                    </span>
                    <span
                      className="block text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.75rem, 3vw + 1rem, 2.5rem)",
                        lineHeight: 1.1,
                      }}
                    >
                      Studio Salon
                    </span>
                    <span
                      className="block text-white/90 text-sm mt-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      2902 Sacramento St &middot; Berkeley, CA
                    </span>
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60 shadow-lg">
                  <Image
                    src="/logo.jpeg"
                    alt="Studio Salon logo"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio copy */}
            <div className="lg:col-span-3" style={{ fontFamily: "var(--font-sans)" }}>
              <span className="section-eyebrow">The Story</span>
              <h2 id="bio" className="section-subheading mb-5">
                Built on care, craft, and community.
              </h2>
              <div className="space-y-5 text-[#2C2C2C] text-[1.05rem] leading-relaxed">
                <p>
                  Studio Salon is a Berkeley studio built around the idea that natural hair, locs, and protective styles should be the core of the work, not an afterthought bolted onto a generic salon menu. Our stylists specialize in textured hair at every stage &mdash; from a first big chop to mature locs that have been growing for a decade &mdash; and we take the time to understand each client&apos;s pattern, density, and lifestyle before we ever pick up a comb.
                </p>
                <p>
                  Loc work covers the full journey: starter sets, instant locs, retwists and maintenance, sisterlocks and microlocs upkeep, repair and reattachment, and detox for buildup. Braids and twists span knotless, box, tribal, Fulani, stitch cornrows, feed-ins, passion twists, Senegalese twists, two-strand, and crochet &mdash; with kids&apos; protective styles done with gentle tension. Extensions and weaves include sew-ins with leave-out or closure, lace frontals, quick weaves, tape-ins, and full wig install &amp; customization for chemo, alopecia, and protective-style clients.
                </p>
                <p>
                  We also do silk press, twist-outs, blowouts, hair color and balayage on textured hair, color correction, gray coverage, keratin, and chemical relaxer. Cuts run from women&apos;s haircuts to men&apos;s fades and beard line-ups. Beauty add-ons (eyebrow waxing, threading, facials, lash extensions, makeup, licensed massage) make the studio a one-stop self-care visit.
                </p>
                <p>
                  Our regulars include UC Berkeley students and faculty, working professionals, parents booking for kids, brides planning trial-plus-day-of, clients in active loc journeys, and folks working through postpartum regrowth or medical hair-loss styling. The work is technical. The vibe is not. Studio Salon is where you come in stressed about your hair and leave laughing about something else entirely.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#F0D4DB] space-y-3 text-sm text-[#5A5A5A]">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#B86A7E] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    Serving Berkeley, Oakland, Albany, Emeryville, El Cerrito, Richmond, and Kensington
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#B86A7E] font-bold text-xs">
                    ✓
                  </span>
                  <span>
                    {siteConfig.rating.count}+ five-star reviews on{" "}
                    <a href={siteConfig.booking.booksyUrl} target="_blank" rel="noopener noreferrer" className="text-[#B86A7E] hover:text-[#9E4F63] underline underline-offset-2 font-semibold">
                      Booksy
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#B86A7E] font-bold text-xs">
                    ✓
                  </span>
                  <span>Full range of loc services, protective styles, color, cuts, and barbering</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#B86A7E] font-bold text-xs">
                    ✓
                  </span>
                  <span>Walk-ins welcome for quick services; loc &amp; braid bookings 2&ndash;3 weeks out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialties ─────────────────────────────────── */}
      <section className="bg-[#FFF9F9] section-pad border-t border-[#F0D4DB]" aria-labelledby="specialties">
        <div className="container-xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-eyebrow">What We Do</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="specialties" className="section-heading">
              The chair&rsquo;s specialties
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SPECIALTIES.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-2xl p-7 border border-[#F0D4DB] shadow-sm"
              >
                <h3
                  className="font-[family-name:var(--font-serif)] text-[1.25rem] font-bold text-[#2C2C2C] mb-3"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="text-[#5A5A5A] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────── */}
      <section className="bg-[#FCE8EC] section-pad" aria-labelledby="values">
        <div className="container-xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-eyebrow">What You Can Expect</span>
            <div className="blush-divider mx-auto mb-6" />
            <h2 id="values" className="section-heading">
              How we work at Studio Salon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-[#F0D4DB]"
              >
                <h3 className="font-[family-name:var(--font-serif)] text-[1.25rem] font-bold text-[#2C2C2C] mb-3">
                  {v.title}
                </h3>
                <p
                  className="text-[#5A5A5A] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                  dangerouslySetInnerHTML={{ __html: v.description }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <CTABlock
        headline="Ready for the chair?"
        subtext="Booking a consultation is the fastest way to figure out what&rsquo;s right for your hair. Call or text (510) 690-5274."
        ctaText="Book Your Appointment"
      />
    </>
  );
}

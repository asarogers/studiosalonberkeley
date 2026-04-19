import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/CTABlock";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "About Britnee Lott",
  description:
    "Meet Britnee Lott, owner and stylist at Studio Salon in Berkeley, CA. A loctician and natural hair specialist serving the East Bay.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Britnee Lott | Studio Salon",
    description:
      "Meet Britnee Lott, owner and stylist at Studio Salon in Berkeley, CA.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "profile",
  },
};

const VALUES = [
  {
    title: "Healthy hair first",
    description:
      "Pretty is the byproduct. Scalp health, edge protection, and proper tension matter more than chasing trends — and the work lasts longer because of it.",
  },
  {
    title: "Every texture, every time",
    description:
      "4A to 4C, locs to silk press, braids to color. We don&apos;t have a hierarchy of hair at Studio Salon — only a chair that welcomes everyone.",
  },
  {
    title: "Your time, respected",
    description:
      "We quote an honest time window when you book. If you&apos;re scheduled for 3 hours, you&apos;re out in about 3 hours. Your day doesn&apos;t end at the salon.",
  },
  {
    title: "Berkeley-local, always",
    description:
      "Born and built on Sacramento Street. We know the neighborhood, we support our neighbors, and we&apos;re here for the long run.",
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
              Meet Britnee Lott
            </h1>
            <p
              className="text-[#5A5A5A] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Hair stylist, loctician, and owner of Studio Salon on Sacramento Street in Berkeley.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bio ─────────────────────────────────────────── */}
      <section className="bg-[#FFF9F9] section-pad" aria-labelledby="bio">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Portrait placeholder */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden blush-gradient shadow-xl">
                <div className="absolute inset-0 bg-[#2C2C2C]/5" aria-hidden="true" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span
                      className="block text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Owner &amp; Stylist
                    </span>
                    <span
                      className="block text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.75rem, 3vw + 1rem, 2.5rem)",
                        lineHeight: 1.1,
                      }}
                    >
                      Britnee Lott
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
              <p
                className="text-xs text-[#5A5A5A]/70 mt-3 italic text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Headshot coming soon.
              </p>
            </div>

            {/* Bio copy */}
            <div className="lg:col-span-3" style={{ fontFamily: "var(--font-sans)" }}>
              <span className="section-eyebrow">The Story</span>
              <h2 id="bio" className="section-subheading mb-5">
                Built on care, craft, and community.
              </h2>
              <div className="space-y-5 text-[#2C2C2C] text-[1.05rem] leading-relaxed">
                <p>
                  Studio Salon sits at 2902 Sacramento Street because that&apos;s where Britnee set up to do the work she loves in the neighborhood she&apos;s from. What started as a chair turned into a studio — one with room for locs mid-cultivation, braids running six hours, silk presses finished in time for a dinner downtown, and buzz cuts done on a Saturday morning lunch break.
                </p>
                <p>
                  Britnee&apos;s specialty is natural hair: locs (starter through mature, interlocks, repair, retwists), knotless braids and feed-ins that don&apos;t pull edges, crochet installs that breathe, and silk presses that actually swing. She works with every texture and every kind of client — regulars who&apos;ve been coming for years, first-timers who weren&apos;t sure what to expect, men getting a clean line-up before a meeting, kids sitting for their first braids.
                </p>
                <p>
                  The work is technical. The vibe is not. Studio Salon is where you come in stressed about your hair and leave laughing about something else entirely.
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
        headline="Want Britnee in your corner?"
        subtext="Booking a consultation is the fastest way to figure out what&rsquo;s right for your hair. Call or text (510) 690-5274."
        ctaText="Book Your Appointment"
      />
    </>
  );
}

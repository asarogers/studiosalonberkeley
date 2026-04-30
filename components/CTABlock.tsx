import { siteConfig } from "@/lib/siteConfig";

interface CTABlockProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  headingId?: string;
  showPhone?: boolean;
}

/* ============================================================
   CTABlock — full-bleed pink band that drives users to /book
   ============================================================ */
const PHONE_DISPLAY = siteConfig.phone.display;
const PHONE_HREF = siteConfig.phone.href;

export default function CTABlock({
  headline = "Ready for the chair?",
  subtext = "Call or text to reserve your spot. Loc retwists, braids, weaves, silk press, color, cuts — whatever you need, we've got you.",
  ctaText = "Book Your Appointment",
  headingId = "cta-block-heading",
  showPhone = true,
}: CTABlockProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="blush-gradient-dark section-pad relative overflow-hidden"
    >
      {/* Decorative pink shapes */}
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E8A1B3]/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FADADD]/20 blur-3xl" />

      <div className="container-xl relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-12 h-[3px] rounded-full bg-[#FFF9F9]/60 mb-7" aria-hidden="true" />

          <h2 id={headingId} className="section-heading text-[#FFF9F9] mb-5">
            {headline}
          </h2>

          <p
            className="text-lg md:text-xl text-[#FFF9F9]/90 leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={siteConfig.booking.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaText} (opens in a new tab)`}
              className={[
                "inline-flex items-center justify-center gap-2",
                "px-8 py-4 rounded-full",
                "bg-[#FFF9F9] text-[#9E4F63] text-lg font-bold leading-snug",
                "hover:bg-[#FCE8EC] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
                "active:translate-y-px",
                "transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-3",
                "focus-visible:ring-white focus-visible:ring-offset-3",
                "focus-visible:ring-offset-[#9E4F63]",
              ].join(" ")}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {ctaText}
            </a>

            {showPhone && (
              <a
                href={PHONE_HREF}
                aria-label={`Call us at ${PHONE_DISPLAY}`}
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "px-6 py-4 rounded-full",
                  "bg-transparent text-[#FFF9F9] border-2 border-[#FFF9F9]/70",
                  "text-lg font-bold",
                  "hover:bg-[#FFF9F9]/10 hover:border-[#FFF9F9]",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-3",
                  "focus-visible:ring-white focus-visible:ring-offset-3",
                  "focus-visible:ring-offset-[#9E4F63]",
                ].join(" ")}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            )}
          </div>

          <p className="mt-6 text-sm text-[#FFF9F9]/70" style={{ fontFamily: "var(--font-sans)" }}>
            2902 Sacramento St, Berkeley &middot; Tue – Sat
          </p>
        </div>
      </div>
    </section>
  );
}

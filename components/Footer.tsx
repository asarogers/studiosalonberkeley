import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/* ============================================================
   Social Link data & icon helpers
   ============================================================ */
interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const IconInstagram = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconMap = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 12V6m0 0L9 8" />
  </svg>
);

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Follow Studio Salon on Instagram",
    href: siteConfig.social.instagram,
    icon: <IconInstagram />,
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Britnee", href: "/about" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Service Area", href: "/locations/berkeley" },
  { label: "Blog", href: "/blog" },
  { label: "Book an Appointment", href: "/book" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

const SERVICE_AREAS = [
  { label: "Berkeley", href: "/locations/berkeley" },
  { label: "Oakland", href: "/locations/oakland" },
  { label: "Albany", href: "/locations/albany" },
  { label: "Emeryville", href: "/locations/emeryville" },
  { label: "El Cerrito", href: "/locations/el-cerrito" },
  { label: "Richmond", href: "/locations/richmond" },
  { label: "Kensington", href: "/locations/kensington" },
];

const PHONE_DISPLAY = siteConfig.phone.display;
const PHONE_HREF = siteConfig.phone.href;
const EMAIL = siteConfig.email;

/* ============================================================
   Footer Component
   ============================================================ */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#2C2C2C] text-[#FFF9F9]"
      aria-label="Site footer"
    >
      {/* ---- Main footer grid ---- */}
      <div className="container-xl py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">

          {/* ---- Column 1: Brand ---- */}
          <div>
            <Link
              href="/"
              aria-label="Studio Salon — return to homepage"
              className={[
                "inline-block mb-4 rounded-sm",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#2C2C2C]",
              ].join(" ")}
            >
              <span
                className="text-2xl font-bold text-[#FFF9F9] leading-none tracking-[0.12em]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                STUDIO SALON
              </span>
            </Link>

            <p
              className="text-[#FFF9F9]/70 text-base leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {siteConfig.tagline}
            </p>

            <a
              href={PHONE_HREF}
              aria-label={`Call us at ${PHONE_DISPLAY}`}
              className={[
                "inline-flex items-center gap-2 text-[#FFF9F9] font-semibold",
                "text-base hover:text-[#E8A1B3] transition-colors mb-2",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#2C2C2C] rounded-sm",
              ].join(" ")}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="flex-shrink-0 opacity-80"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <br />
            <a
              href={`mailto:${EMAIL}`}
              className={[
                "inline-flex items-center gap-2 text-[#FFF9F9]/80 text-sm",
                "hover:text-[#E8A1B3] transition-colors break-all",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-1",
                "focus-visible:ring-offset-[#2C2C2C] rounded-sm",
              ].join(" ")}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {EMAIL}
            </a>
          </div>

          {/* ---- Column 2: Find Us ---- */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A1B3] mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Find Us
            </h3>
            <address
              className="not-italic text-[#FFF9F9]/90 text-base leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </address>
            <a
              href={siteConfig.address.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "inline-flex items-center gap-2 text-sm font-semibold",
                "text-[#E8A1B3] hover:text-[#FFF9F9] transition-colors",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#2C2C2C] rounded-sm",
              ].join(" ")}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <IconMap />
              Get Directions →
            </a>
          </div>

          {/* ---- Column 3: Hours ---- */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A1B3] mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Hours
            </h3>
            <ul className="space-y-1.5 text-[#FFF9F9]/90 text-sm" role="list" style={{ fontFamily: "var(--font-sans)" }}>
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="font-semibold">{h.short}</span>
                  <span className={h.closed ? "text-[#FFF9F9]/50" : ""}>
                    {h.closed
                      ? "Closed"
                      : `${formatTime(h.open!)} – ${formatTime(h.close!)}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 4: Quick Links + Social ---- */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A1B3] mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Explore
            </h3>
            <ul className="flex flex-col gap-2 list-none m-0 p-0 mb-6" role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "text-[#FFF9F9]/90 text-base font-medium",
                      "hover:text-[#E8A1B3] transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-1",
                      "focus-visible:ring-offset-[#2C2C2C]",
                      "rounded-sm inline-block",
                    ].join(" ")}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3" role="list" aria-label="Social media">
              {SOCIAL_LINKS.filter((l) => l.href).map(({ label, href, icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  className={[
                    "w-11 h-11 flex items-center justify-center",
                    "rounded-full bg-[#FFF9F9]/10",
                    "text-[#FFF9F9] hover:bg-[#E8A1B3] hover:text-[#2C2C2C]",
                    "transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-[#2C2C2C]",
                  ].join(" ")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Service Area ---- */}
      <div className="border-t border-[#FFF9F9]/15">
        <div className="container-xl py-8">
          <h3
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A1B3] mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Serving Berkeley &amp; the East Bay
          </h3>
          <nav aria-label="Service area locations" className="flex flex-wrap gap-x-2 gap-y-1">
            {SERVICE_AREAS.map(({ label, href }, index, arr) => (
              <span key={href} className="inline-flex items-center">
                <Link
                  href={href}
                  className={[
                    "text-sm text-[#FFF9F9]/70 hover:text-[#E8A1B3]",
                    "transition-colors whitespace-nowrap",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-1",
                    "focus-visible:ring-offset-[#2C2C2C]",
                    "rounded-sm",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {label}
                </Link>
                {index < arr.length - 1 && (
                  <span aria-hidden="true" className="text-[#FFF9F9]/20 ml-2">·</span>
                )}
              </span>
            ))}
          </nav>
          <p
            className="text-xs text-[#FFF9F9]/50 mt-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Walk-ins welcome. Appointments highly recommended — especially for loc services.
          </p>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-[#FFF9F9]/15">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-sm text-[#FFF9F9]/60 text-center sm:text-left"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            &copy; {currentYear} Studio Salon. All rights reserved.
          </p>

          <nav aria-label="Legal links" className="flex flex-wrap items-center gap-4 justify-center">
            {LEGAL_LINKS.map(({ label, href }, index) => (
              <span key={href} className="flex items-center gap-4">
                <Link
                  href={href}
                  className={[
                    "text-sm text-[#FFF9F9]/60 hover:text-[#E8A1B3]",
                    "transition-colors whitespace-nowrap",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#E8A1B3] focus-visible:ring-offset-1",
                    "focus-visible:ring-offset-[#2C2C2C]",
                    "rounded-sm",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {label}
                </Link>
                {index < LEGAL_LINKS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-[#FFF9F9]/30 flex-shrink-0"
                  />
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}${m > 0 ? `:${String(m).padStart(2, "0")}` : ""}${period}`;
}

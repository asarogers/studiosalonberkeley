import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book an appointment at Studio Salon in Berkeley, CA. Loc maintenance, natural hair, braids, cuts, and color with Britnee Lott.',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Book an Appointment | Studio Salon',
    description:
      'Book an appointment at Studio Salon in Berkeley, CA.',
    url: `${siteConfig.url}/book`,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function BookPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="blush-gradient section-pad" aria-labelledby="book-hero">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow text-[#9E4F63]">Book Your Visit</span>
            <h1
              id="book-hero"
              className="section-heading mb-4 text-[#2C2C2C]"
            >
              Schedule an Appointment
            </h1>
            <p
              className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Online booking is being set up. In the meantime, call or text{' '}
              <a
                href={siteConfig.phone.href}
                className="text-[#B86A7E] font-bold hover:text-[#9E4F63] underline underline-offset-2"
              >
                {siteConfig.phone.display}
              </a>{' '}
              to reserve your seat in the chair.
            </p>
          </div>
        </div>
      </section>

      {/* ── Placeholder booking card ──────────────────────────── */}
      <section className="bg-[#FFF9F9] section-pad" aria-labelledby="book-placeholder">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-[#F0D4DB] overflow-hidden">

              {/* Pink banner */}
              <div className="blush-gradient-dark py-10 px-8 text-center">
                <svg
                  className="mx-auto mb-4 text-white/90"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <circle cx="12" cy="16" r="2" fill="white" />
                </svg>
                <h2
                  id="book-placeholder"
                  className="text-white font-bold leading-tight"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.25rem)',
                  }}
                >
                  Online Booking Coming Soon
                </h2>
                <p className="text-white/90 mt-3" style={{ fontFamily: 'var(--font-sans)' }}>
                  We&rsquo;re setting up a seamless booking experience for you.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 text-center">
                <p
                  className="text-[#5A5A5A] text-base leading-relaxed mb-6 max-w-md mx-auto"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Until then, the fastest way to book is a quick call or text. Britnee will get back to you the same day with availability.
                </p>

                {/* Disabled book button per brief */}
                <button
                  type="button"
                  aria-disabled="true"
                  disabled
                  className="btn-primary w-full sm:w-auto mb-3 justify-center"
                >
                  <svg
                    width="18"
                    height="18"
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
                  Book Online (Coming Soon)
                </button>

                <div
                  className="mt-6 pt-6 border-t border-[#F0D4DB] grid grid-cols-1 sm:grid-cols-2 gap-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <a
                    href={siteConfig.phone.href}
                    className="group flex items-center justify-center gap-3 rounded-2xl bg-[#FCE8EC] hover:bg-[#FADADD] p-4 transition-colors"
                  >
                    <svg
                      className="text-[#B86A7E]"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-[#9E4F63] uppercase tracking-wider">Call</div>
                      <div className="text-base font-bold text-[#2C2C2C] group-hover:text-[#9E4F63]">
                        {siteConfig.phone.display}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`sms:${siteConfig.phone.schema.replace(/[^\d+]/g, '')}`}
                    className="group flex items-center justify-center gap-3 rounded-2xl bg-[#FCE8EC] hover:bg-[#FADADD] p-4 transition-colors"
                  >
                    <svg
                      className="text-[#B86A7E]"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-[#9E4F63] uppercase tracking-wider">Text</div>
                      <div className="text-base font-bold text-[#2C2C2C] group-hover:text-[#9E4F63]">
                        {siteConfig.phone.display}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-[#F0D4DB] text-left space-y-3">
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.18em] text-[#B86A7E]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    When to call
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5A5A5A]" style={{ fontFamily: 'var(--font-sans)' }}>
                    {siteConfig.hours.filter(h => !h.closed).map(h => (
                      <li key={h.day} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8A1B3] flex-shrink-0" aria-hidden="true" />
                        <span className="font-semibold text-[#2C2C2C] min-w-[80px]">{h.day}</span>
                        <span>{formatTime(h.open!)} – {formatTime(h.close!)}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-[#5A5A5A]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0D4DB] flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold min-w-[80px]">Sun – Mon</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Address + directions card */}
            <div className="mt-8 bg-white rounded-2xl border border-[#F0D4DB] p-6 text-center">
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Where to find us
              </h3>
              <address
                className="not-italic text-[#5A5A5A] mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
              <Link
                href={siteConfig.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function formatTime(t: string): string {
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}${m > 0 ? `:${String(m).padStart(2, '0')}` : ''}${period}`;
}

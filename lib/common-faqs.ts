/**
 * lib/common-faqs.ts
 *
 * Shared FAQ sets for pages that don't define their own. Used by:
 *   - app/locations/[slug]/page.tsx
 *   - app/services/[slug]/page.tsx
 *
 * These power both the visible FAQ accordion AND the FAQPage JSON-LD.
 * Keep the question wording grounded in real salon-client questions so
 * we earn featured-snippet real estate on Google + citations in AI overviews.
 */
export interface FAQ { q: string; a: string }

/**
 * Universal FAQs rendered on every location page. `{city}` placeholder is
 * substituted with the city name at render time.
 */
export const LOCATION_FAQS: FAQ[] = [
  {
    q: "Where is Studio Salon located from {city}?",
    a: "Studio Salon is at 2902 Sacramento St, Berkeley, CA 94702. Most clients in {city} reach us in 10–20 minutes by car, or via AC Transit / BART. There's metered street parking on Sacramento Street and residential parking on the surrounding blocks.",
  },
  {
    q: "Do you take walk-ins from {city}?",
    a: "We welcome walk-ins for quick services like eyebrow waxing, buzz cuts, and root touch-ups when the chair is open. For loc services, braids, weaves, and color, appointments are strongly recommended — these bookings can fill 2–3 weeks in advance. Call or text (510) 690-5274.",
  },
  {
    q: "What services are Studio Salon known for?",
    a: "Loc maintenance and retwists, natural hair styling, knotless braids, feed-in braids, sew-in weaves, crochet braids, silk presses, color, and men's cuts. Studio Salon has built a reputation in {city} and the East Bay for loc cultivation and protective styles that protect your edges.",
  },
  {
    q: "How do I book from {city}?",
    a: "The fastest path is a call or text to (510) 690-5274 — we respond the same day with availability. Online booking is being set up soon. For loc or braid work, please send a reference photo when you text so we can quote time and price accurately.",
  },
  {
    q: "How much do services cost?",
    a: "Pricing varies by service: loc retwists start at $85, silk press is $135, color starts at $40, sew-in weaves are $180, knotless braids range $150–$280+ depending on size, and tribal / feed-in braids start at $185. See the /services page for the full menu.",
  },
];

/**
 * Universal FAQs rendered on every service detail page.
 */
export const SERVICE_FAQS: FAQ[] = [
  {
    q: "How do I book this service?",
    a: "Call or text (510) 690-5274 to schedule. Online booking is being set up. For longer services (locs, braids, weaves), booking 2–3 weeks ahead is recommended. For quick services like haircuts and brow waxing, same-week availability is usually possible.",
  },
  {
    q: "How long does the appointment take?",
    a: "It depends on the service — a loc retwist runs about 85 minutes, a silk press about 70 minutes, a sew-in weave about 3 hours, and large feed-in braid installs can run 5–6 hours. We'll confirm an accurate time window when you book.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "For braids and weaves, please bring your hair (type + length we discussed when booking) plus any beads or accessories. For loc services, come with clean, product-free hair ideally. For color, bring a reference photo of the color you want. Everything else is provided.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes for quick services — brow waxing, root touch-ups, buzz cuts, and short hair trims when the chair is open. For everything else, please book ahead. Call (510) 690-5274.",
  },
  {
    q: "Where is the salon and where do I park?",
    a: "Studio Salon is at 2902 Sacramento St, Berkeley, CA 94702 — a short walk from Ashby BART and on the 72/72R AC Transit line. Metered street parking is available on Sacramento Street, and the side streets (Grant, Edwards, Julia) have residential parking that's usually open.",
  },
];

/** Substitute `{city}` (and any future placeholders) at render time. */
export function resolveFAQ(faq: FAQ, vars: Record<string, string>): FAQ {
  const sub = (s: string) =>
    Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), s);
  return { q: sub(faq.q), a: sub(faq.a) };
}

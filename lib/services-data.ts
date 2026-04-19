/**
 * ============================================================
 *  STUDIO SALON — Service Detail Page Data (minimal stub)
 *  13 service slugs matching the homepage + menu links.
 *  This is placeholder content — to be expanded with full
 *  sections (≥120 words each) to pass SEO healthcheck.
 * ============================================================
 */

import { resolveImagePath } from './image-path';

export function serviceImagePath(slug: string): string {
  return resolveImagePath('services', slug);
}

export interface ServiceDetail {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  relatedServices: string[];
  relatedLocations: string[];
}

const BASE_SECTIONS = (service: string, price: string, duration: string) => [
  {
    heading: `What's included in ${service}`,
    content: `When you book a ${service.toLowerCase()} appointment at Studio Salon, you're booking time with Britnee Lott, a stylist and loctician who's been working with natural hair in Berkeley for years. The service runs about ${duration} and starts at ${price}. Every appointment includes a short consultation at the start so we can look at your hair, talk through what you want, and adjust the plan if needed. We work in a calm, unhurried way — your scalp, your edges, and your ends all matter as much as the finished look.`,
  },
  {
    heading: `Who this service is for`,
    content: `We work with every texture — from fine, loose curl patterns to tightly coiled 4C — and every kind of client. Regulars who've been coming for years. First-timers who weren't sure what to expect. Men getting a clean line-up before work. Kids sitting for their first braids. Clients who come in with tender scalps, edge damage from past salons, or hair that's been through a lot. The goal is always healthy hair first, with a finish that looks as good in two weeks as it does walking out the door.`,
  },
  {
    heading: `How to prep for your appointment`,
    content: `Come with clean, detangled hair whenever possible. If you're booking a protective style, bring the hair, beads, and any accessories you want installed — we'll tell you exactly how much to bring when we confirm. If you're booking color, don't wash that morning; a little natural oil protects the scalp during processing. Always bring reference photos on your phone. Three or four angles (front, side, back) help more than one. Plan to arrive five to ten minutes early so we start on time, and eat before you come — longer services can run multiple hours.`,
  },
  {
    heading: `Pricing & how long it takes`,
    content: `${service} starts at ${price} and runs about ${duration}. The final price depends on length, density, whether we need to wash or blow-dry first, and any add-ons. We'll confirm a firm quote and time window when you book so nothing is a surprise at checkout. Deposits may be required for longer services. If you need a more accurate estimate before booking, text us a photo of your current hair at (510) 690-5274 and we'll get back to you the same day.`,
  },
  {
    heading: `Book at Studio Salon in Berkeley`,
    content: `Studio Salon is at 2902 Sacramento St, Berkeley, CA 94702 — a short walk from Ashby BART, on the 72/72R AC Transit line, with metered and residential parking on and near Sacramento Street. We're open Tuesday through Saturday. Online booking is being set up; in the meantime, call or text (510) 690-5274 to schedule. Britnee responds the same day with availability. Whether you're coming from Berkeley, Oakland, Albany, Emeryville, El Cerrito, Richmond, or Kensington, we'll see you in the chair.`,
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "loc-maintenance",
    title: "Loc Maintenance & Retwist",
    metaDescription: "Loc maintenance and retwist at Studio Salon in Berkeley. Palm-rolling and interlocking by Britnee Lott. Starts at $85.",
    h1: "Loc Maintenance & Retwists in Berkeley, CA",
    intro: "Loc maintenance is the backbone of a healthy loc journey, and it's what Studio Salon in Berkeley is known for. Britnee Lott retwists with palm-rolling or interlocking depending on what your hair actually needs, always with a focus on scalp health and root longevity. Whether you're a few months into your loc journey or sixteen years in, we'll meet your hair where it is. Standard retwists run about 85 minutes and start at $85; longer or thicker locs run about 95 minutes and start at $100. First-timers get a short consultation before we begin so we can look at your loc pattern, scalp, and goals.",
    sections: BASE_SECTIONS("Loc maintenance", "$85", "85 minutes"),
    relatedServices: ["natural-hair-styling", "silk-press", "two-strand-twist"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "natural-hair-styling",
    title: "Natural Hair Styling",
    metaDescription: "Natural hair styling at Studio Salon in Berkeley. Wash-and-go, twist outs, blowouts, and cuts for all textures. Starts at $85.",
    h1: "Natural Hair Styling in Berkeley, CA",
    intro: "Natural hair deserves a stylist who understands texture. At Studio Salon, Britnee Lott works with every curl pattern — from 4A to 4C, loose waves to tightly coiled coils — without the pressure to change what your hair naturally wants to do. Services range from a simple wash-and-go ($85 in about an hour) to full styling with detangling, conditioning, and finishing (up to $225+ for longer or more elaborate sessions). Root touch-ups between appointments run $45+. Come in with clean or dirty hair — we'll adjust. Bring reference photos if you have a specific style in mind, and be ready to talk about what your hair usually does on day three.",
    sections: BASE_SECTIONS("Natural hair styling", "$85", "60–210 minutes"),
    relatedServices: ["silk-press", "loc-maintenance", "two-strand-twist"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "silk-press",
    title: "Silk Press",
    metaDescription: "Silk press at Studio Salon in Berkeley, CA. Shampoo, blow dry, and flat iron finish for natural hair. $135, about 70 minutes.",
    h1: "Silk Press for Natural Hair in Berkeley",
    intro: "A silk press is a proper press, not a shortcut. At Studio Salon, Britnee Lott delivers a finish that sits and swings without sacrificing your natural texture. The service includes shampoo, blow-dry, and flat-iron styling — tailored to your hair's length, density, and heat tolerance. Priced at $135 and typically running about 70 minutes, it's a popular choice for natural-hair clients who want a temporary change without chemical processing. Add-ons like a trim are extra. Come in with clean hair if you can, and plan to book every 6–8 weeks if you want to keep the look without heat damage.",
    sections: BASE_SECTIONS("Silk press", "$135", "70 minutes"),
    relatedServices: ["natural-hair-styling", "hair-color", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "el-cerrito"],
  },
  {
    slug: "hair-color",
    title: "Hair Color & Highlights",
    metaDescription: "Hair color, highlights, balayage, and bleach & tone at Studio Salon in Berkeley. Starts at $40. Text a reference photo.",
    h1: "Hair Color & Highlights in Berkeley, CA",
    intro: "Color is about more than picking a shade — it's about how that color sits on your hair, how it wears, and how it maintains over time. At Studio Salon, Britnee Lott handles single-process color (blonde, black, fashion shades), highlights, balayage, bleach and tone, and root touch-ups. Bleach and tone starts at $40 in about 45 minutes. Single-process color runs $85 in about 90 minutes. Highlights start at $85 and run up to 2.5 hours for a full head. Custom or corrective color is priced by quote. Text us a reference photo when you book so we can quote accurately and prep the right product.",
    sections: BASE_SECTIONS("Hair color", "$40+", "45–155 minutes"),
    relatedServices: ["silk-press", "natural-hair-styling", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "braids",
    title: "Braids — Knotless, Cornrows, Feed-In, Tribal",
    metaDescription: "Knotless braids, cornrows, feed-in, and tribal braids at Studio Salon in Berkeley. Protective styles from $80 to $325+.",
    h1: "Protective Braid Styles in Berkeley, CA",
    intro: "Studio Salon installs the full range of protective braid styles without the tension that punishes your edges. Knotless braids from $150+. Standard cornrows from $80 in about 1 hour 40 minutes. Feed-in braids from $185 (shorter style) to $325 for full tribal feed-ins with designs. Kids' braids for ages 4–12 from $100+. We use 32-inch braiding hair by default; bring any beads or accessories you want installed. Every first-time braid client gets a short consultation before we begin so we can match the style to your hair type, scalp history, and how long you realistically want to wear the install.",
    sections: BASE_SECTIONS("Braids", "$80–$325", "100–390 minutes"),
    relatedServices: ["crochet-braids", "sew-in-weave", "mens-hair-barbering"],
    relatedLocations: ["berkeley", "oakland", "richmond"],
  },
  {
    slug: "sew-in-weave",
    title: "Sew-In Weaves & Weave Install",
    metaDescription: "Sew-in weave install at Studio Salon in Berkeley. Braided foundation, wash & blow dry, custom styling. $180, about 3 hours.",
    h1: "Sew-In Weave Install in Berkeley, CA",
    intro: "A clean sew-in depends on the foundation underneath it. At Studio Salon, Britnee Lott takes the time to lay a neat, oil-treated braid-down before she ever starts installing, so your own hair stays protected for the life of the style. The service includes wash, blow-dry, braided foundation, and install — priced at $180 for about 3 hours 15 minutes. Styling is included. Bring the bundles you want installed; we'll advise on how much hair you'll need when we confirm the booking. Sew-ins typically last 6–8 weeks with good aftercare (satin at night, light scalp oil, and proper washing every 2–3 weeks).",
    sections: BASE_SECTIONS("Sew-in weave", "$180", "195 minutes"),
    relatedServices: ["quick-weave", "crochet-braids", "braids"],
    relatedLocations: ["berkeley", "oakland", "kensington"],
  },
  {
    slug: "crochet-braids",
    title: "Crochet Braids",
    metaDescription: "Crochet braid install at Studio Salon in Berkeley. Low-tension protective style. $165, about 2.5 hours.",
    h1: "Crochet Braid Installs in Berkeley, CA",
    intro: "Crochet is the low-tension protective style that gives you the most style flexibility for the install time. Britnee cornrows your natural hair underneath, then uses a latch hook to attach pre-made hair — curls, braids, locs, afro textures — directly onto the cornrow base. The look can range from passing-for-natural curls to dramatic waist-length braids. Priced at $165 for about 2.5 hours total. Crochet is especially good for transitioning hair or anyone who wants the look of long braids without a six-hour session. Lifespan is typically 4–6 weeks. Rinse thoroughly at every wash to avoid scalp buildup under the install.",
    sections: BASE_SECTIONS("Crochet braids", "$165", "150 minutes"),
    relatedServices: ["sew-in-weave", "braids", "quick-weave"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "quick-weave",
    title: "Quick Weaves & Updos",
    metaDescription: "Quick weaves and updos at Studio Salon in Berkeley. Fast installs and special-occasion styling. $125–$180.",
    h1: "Quick Weaves & Updos in Berkeley, CA",
    intro: "Quick weaves and updos at Studio Salon are for clients who want a change this week — and a clean, styled finish that photographs well. Standard quick weaves start at $125 for about 2 hours; extended styles run $135+ for about 2 hours 15 minutes. Special-occasion updos and styled ponytails range $125–$180 depending on complexity, and premium styling runs $165+ in about 3.5 hours. These are great for events, weddings, and photoshoots where you want something bigger than your everyday look. Bring reference photos and, for most styles, bring the hair you want installed. We'll walk you through aftercare so the style holds up.",
    sections: BASE_SECTIONS("Quick weave or updo", "$125–$180", "120–210 minutes"),
    relatedServices: ["sew-in-weave", "crochet-braids", "silk-press"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "mens-hair-barbering",
    title: "Men's Hair & Braids",
    metaDescription: "Men's hair services at Studio Salon in Berkeley — braids, buzz cuts, line-ups, and natural hair styling. From $100.",
    h1: "Men's Hair & Braids in Berkeley, CA",
    intro: "Studio Salon is a full-service hair salon and barbershop — everyone gets the same care in the chair, whatever service you're booking. Men's braids (small) start at $100 for about 70 minutes. Medium braids run $150 for about 2 hours. Men's natural hair styling sessions run $135 for about 3 hours 15 minutes. Buzz cuts with detailed line-ups are available for $100. Walk-ins welcome for quick services when the chair is open. For braids or longer sessions, please call or text (510) 690-5274 to book ahead. Britnee works with every texture and style.",
    sections: BASE_SECTIONS("Men's hair", "$100–$150", "70–195 minutes"),
    relatedServices: ["womens-haircut", "braids", "loc-maintenance"],
    relatedLocations: ["berkeley", "oakland", "richmond"],
  },
  {
    slug: "womens-haircut",
    title: "Women's Haircut",
    metaDescription: "Women's haircut at Studio Salon in Berkeley. Shape-ups, trims, and transformational cuts. $30+, about 40 minutes.",
    h1: "Women's Haircut in Berkeley, CA",
    intro: "A good haircut is the foundation of every style that comes after it. Britnee at Studio Salon handles shape-ups, trims, and full transformational cuts on every texture. Standard women's haircuts start at $30 and run about 40 minutes. Buzz cuts and dramatic changes are priced at $100 for about 90 minutes. We'll talk through your current hair, what's working, what isn't, and what you want before we pick up any scissors. Bring photos, especially of lengths and shapes you want to avoid — that's often more useful than showing what you want. Come with clean hair if you can, or book wash and style as an add-on.",
    sections: BASE_SECTIONS("Women's haircut", "$30+", "40–90 minutes"),
    relatedServices: ["silk-press", "hair-color", "mens-hair-barbering"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "chemical-relaxer",
    title: "Chemical Relaxer Service",
    metaDescription: "Chemical relaxer service at Studio Salon in Berkeley. Full relaxer with cut. $140, about 2 hours 15 minutes.",
    h1: "Chemical Relaxer Service in Berkeley, CA",
    intro: "Relaxer services at Studio Salon include application, processing, rinse, deep condition, blow-dry, and a light cut to clean up the ends — priced at $140 for about 2 hours 15 minutes. Britnee only relaxes hair that's healthy enough to handle the chemical process, and we'll do a thorough consultation first to look at your scalp, your recent service history, and the condition of your ends. We use professional-grade product and timing tailored to your hair. Please disclose any other chemical services in the last 6 months — including box color, bleach, or previous relaxer — so we can keep the service safe.",
    sections: BASE_SECTIONS("Chemical relaxer", "$140", "135 minutes"),
    relatedServices: ["silk-press", "hair-color", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "el-cerrito"],
  },
  {
    slug: "two-strand-twist",
    title: "Two-Strand Twist Styles",
    metaDescription: "Two-strand twist styles at Studio Salon in Berkeley. Protective styling and twist-outs. $225+, about 4.5 hours.",
    h1: "Two-Strand Twist Styles in Berkeley, CA",
    intro: "Two-strand twists are a versatile protective style that looks great on install and even better once you unravel them for a twist-out. At Studio Salon, Britnee installs two-strand twists with clean parts, balanced tension, and a finish you can wear as-is or stretch into a twist-out for added volume. Priced at $225+ for about 4 hours 25 minutes. Good for medium-to-long hair with healthy ends. Come with clean, detangled hair. Twists typically last 2–4 weeks if you wrap at night with satin and avoid heavy products. Aftercare and twist-out instructions included at the end of your service.",
    sections: BASE_SECTIONS("Two-strand twists", "$225+", "265 minutes"),
    relatedServices: ["loc-maintenance", "natural-hair-styling", "braids"],
    relatedLocations: ["berkeley", "oakland", "kensington"],
  },
  {
    slug: "eyebrow-waxing",
    title: "Eyebrow Waxing",
    metaDescription: "Eyebrow waxing at Studio Salon in Berkeley. Quick, clean brow shaping. $20, about 30 minutes.",
    h1: "Eyebrow Waxing in Berkeley, CA",
    intro: "A clean brow finishes any hair service. At Studio Salon, eyebrow waxing is a quick 30-minute service for $20 — book it as an add-on to your main appointment or on its own. Britnee shapes your brows to complement your face structure, not some trend that won't last. No over-plucking, no sharp angles unless that's what you're into. We use a gentle wax that's appropriate for sensitive skin. If you're on any retinoids or acne medications, let us know before we start. Walk-ins welcome for this service when the chair is open.",
    sections: BASE_SECTIONS("Eyebrow waxing", "$20", "30 minutes"),
    relatedServices: ["silk-press", "natural-hair-styling", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return getAllServices().find((s) => s.slug === slug);
}
export function getAllServiceSlugs(): string[] {
  return getAllServices().map((s) => s.slug);
}
export function getAllServices(): ServiceDetail[] {
  return serviceDetails;
}

/**
 * ============================================================
 *  STUDIO SALON — GBP Categories & Services
 *  Mirror of the Google Business Profile category + service
 *  taxonomy. Powers /services/categories/[slug] hub pages.
 * ============================================================
 */

export interface GBPService {
  /** Service display name */
  name: string;
  /** URL slug — points to /services/[slug] */
  slug: string;
  /** True if the service page doesn't exist yet */
  isNew?: boolean;
}

export interface GBPCategory {
  /** URL slug — used at /services/categories/[slug] */
  slug: string;
  /** Short display name */
  name: string;
  /** Exact GBP category name as it appears in Google Business Profile */
  gbpName: string;
  /** One-line tagline shown under the category name */
  tagline: string;
  /** 2-3 sentence description for the category hub page */
  description: string;
  /** Whether this is the GBP primary category */
  isPrimary?: boolean;
  services: GBPService[];
}

export const gbpCategories: GBPCategory[] = [
  /* ── 1. Hair Salon (Primary) ─────────────────────────────── */
  {
    slug: "hair-salon",
    name: "Hair Salon",
    gbpName: "Hair salon",
    tagline: "Berkeley's loc and natural hair specialists",
    description:
      "Studio Salon is a full-service hair salon in Berkeley, California, specializing in locs, natural hair, braids, color, and cuts. We work with every texture — from starter locs to tailored silk presses — right here on Sacramento Street. Walk-ins welcome; appointments strongly recommended for loc services and multi-hour installs.",
    isPrimary: true,
    services: [
      { name: "Loc maintenance & retwist",    slug: "loc-maintenance" },
      { name: "Natural hair styling",         slug: "natural-hair-styling" },
      { name: "Silk press",                   slug: "silk-press" },
      { name: "Hair color & highlights",      slug: "hair-color" },
      { name: "Sew-in weave install",         slug: "sew-in-weave" },
      { name: "Crochet braids",               slug: "crochet-braids" },
      { name: "Quick weaves & updos",         slug: "quick-weave" },
      { name: "Two-strand twist styles",      slug: "two-strand-twist" },
      { name: "Chemical relaxer service",     slug: "chemical-relaxer" },
      { name: "Women's haircut",              slug: "womens-haircut" },
    ],
  },

  /* ── 2. Braids & Locs ───────────────────────────────────── */
  {
    slug: "braids-and-locs",
    name: "Braids & Locs",
    gbpName: "Braids & Locs",
    tagline: "Loc cultivation, retwists, and protective braid styles",
    description:
      "Studio Salon is known across the East Bay for loc work and protective braid styles. Whether you're starting your loc journey, maintaining mature locs, or looking for knotless, cornrows, feed-in, or tribal braids, we install styles that protect your edges and last.",
    services: [
      { name: "Loc maintenance & retwist",       slug: "loc-maintenance" },
      { name: "Knotless, cornrows, feed-in, tribal braids", slug: "braids" },
      { name: "Two-strand twist styles",         slug: "two-strand-twist" },
      { name: "Men's hair & braids",             slug: "mens-hair-barbering" },
    ],
  },

  /* ── 3. Barbershop ───────────────────────────────────────── */
  {
    slug: "barbershop",
    name: "Barbershop",
    gbpName: "Barber shop",
    tagline: "Men's cuts, braids, and line-ups in Berkeley",
    description:
      "Full barbering services at Studio Salon. Men's buzz cuts, braided styles, and clean line-ups — all done on Sacramento Street in Berkeley. Walk in for a quick cut or book ahead for braids.",
    services: [
      { name: "Men's hair & braids",          slug: "mens-hair-barbering" },
      { name: "Women's haircut",              slug: "womens-haircut" },
    ],
  },

  /* ── 4. Brows & Lashes ──────────────────────────────────── */
  {
    slug: "brows-and-lashes",
    name: "Brows & Lashes",
    gbpName: "Brows & Lashes",
    tagline: "Eyebrow shaping to complete your look",
    description:
      "Quick eyebrow waxing services while you're in the chair. A clean brow finishes any hair service — book as an add-on or a standalone appointment.",
    services: [
      { name: "Eyebrow waxing",               slug: "eyebrow-waxing" },
    ],
  },
];

/* ── Helper Functions ──────────────────────────────────────────── */

export function getAllGBPCategories(): GBPCategory[] {
  return gbpCategories;
}

export function getGBPCategoryBySlug(slug: string): GBPCategory | undefined {
  return gbpCategories.find((c) => c.slug === slug);
}

export function getAllGBPCategorySlugs(): string[] {
  return gbpCategories.map((c) => c.slug);
}

/** Return all GBP services that need new pages (isNew: true), deduplicated by slug. */
export function getNewGBPServices(): GBPService[] {
  const seen = new Set<string>();
  const result: GBPService[] = [];
  for (const cat of gbpCategories) {
    for (const svc of cat.services) {
      if (svc.isNew && !seen.has(svc.slug)) {
        seen.add(svc.slug);
        result.push(svc);
      }
    }
  }
  return result;
}

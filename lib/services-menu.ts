export interface MenuItem {
  /** Stable slug used to look up the service in the booking flow. Unique per menu item. */
  bookingSlug: string;
  /** Slug of the long-form service page under /services/[slug]. May be shared by several menu items. */
  detailSlug: string;
  name: string;
  price: string;
  duration: string;
  image: string | null;
  video?: string | null;
  category: string;
}

export interface MenuCategory {
  category: string;
  /** Optional one-line description shown on the /services catalog page. */
  blurb?: string;
  items: MenuItem[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface RawMenuItem {
  name: string;
  price: string;
  duration: string;
  slug: string;
  image: string | null;
  video?: string | null;
}

const RAW_MENU: { category: string; items: RawMenuItem[] }[] = [
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
      { name: "Bob (Medium Knotless)",      price: "$180",   duration: "4 hr 35 min",   slug: "braids",         image: "/images/gallery/bob-medium.webp",          video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Smedium Knotless)",     price: "$220",   duration: "5 hr 30 min",   slug: "braids",         image: "/images/gallery/bob-smedium.webp",         video: "/videos/menu/bob-smedium.mp4" },
    ],
  },
  {
    category: "Ponytails & Updos",
    items: [
      { name: "Sleek Ponytail",             price: "$125",   duration: "2 hr",          slug: "natural-hair-styling", image: "/images/gallery/sleek-ponytail.webp",  video: "/videos/menu/sleek-ponytail.mp4" },
      { name: "Swoop Ponytail",             price: "$125",   duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/swoop-ponytail.webp",  video: "/videos/menu/swoop-ponytail.mp4" },
      { name: "Knot Bun",                   price: "$130",   duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/knot-bun.webp",        video: null },
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

function buildBookingSlug(category: string, item: RawMenuItem, used: Set<string>): string {
  const base = slugify(item.name);
  const candidate = base || slugify(`${category}-${item.slug}`);
  if (!used.has(candidate)) {
    used.add(candidate);
    return candidate;
  }
  // Disambiguate using detail slug when an item name collides across categories.
  const disambiguated = `${candidate}-${slugify(item.slug)}`;
  used.add(disambiguated);
  return disambiguated;
}

const usedSlugs = new Set<string>();

export const MENU: MenuCategory[] = RAW_MENU.map((cat) => ({
  category: cat.category,
  items: cat.items.map((item) => ({
    bookingSlug: buildBookingSlug(cat.category, item, usedSlugs),
    detailSlug: item.slug,
    name: item.name,
    price: item.price,
    duration: item.duration,
    image: item.image,
    video: item.video ?? null,
    category: cat.category,
  })),
}));

/* ============================================================
   FULL CATALOG — used by the /services page. The home page MENU above is a
   curated subset; this one is the comprehensive list pulled from Booksy.
   Booking lookups search both, with FULL_MENU items winning on collision.
   ============================================================ */

interface RawFullCategory {
  category: string;
  blurb?: string;
  items: RawMenuItem[];
}

const RAW_FULL_MENU: RawFullCategory[] = [
  {
    category: "Locs & Dreadlocks",
    blurb: "Retwists, interlocking, starter dreads, instant locs, barrel twists, and loc repair.",
    items: [
      { name: "Retwist",                           price: "$100",  duration: "2 hr",          slug: "loc-maintenance", image: "/images/gallery/loc-retwist.webp",      video: "/videos/menu/loc-retwist.mp4" },
      { name: "Loc Maintenance / Touch Up",        price: "$165+", duration: "2 hr 45 min",   slug: "loc-maintenance", image: "/images/services/loc-maintenance.webp", video: "/videos/menu/loc-retwist.mp4" },
      { name: "Locs w/ Tool",                      price: "$200+", duration: "3 hr 30 min",   slug: "loc-maintenance", image: "/images/gallery/loc-retwist.webp",      video: "/videos/menu/loc-retwist.mp4" },
      { name: "Starter Dreads",                    price: "$120+", duration: "2 hr 30 min",   slug: "loc-maintenance", image: "/images/gallery/starter-locs.webp",     video: "/videos/menu/starter-locs.mp4" },
      { name: "Instant Locs",                      price: "$300+", duration: "8 hr",          slug: "loc-maintenance", image: "/images/gallery/instant-locs.webp",     video: "/videos/menu/instant-locs.mp4" },
      { name: "Retwist (Kids 4–12)",               price: "$85",   duration: "1 hr 45 min",   slug: "loc-maintenance", image: "/images/gallery/kids-braids.webp",      video: "/videos/menu/kids-braids.mp4" },
      { name: "Dread Detox",                       price: "$65",   duration: "1 hr",          slug: "loc-maintenance", image: "/images/gallery/dread-detox.webp",      video: "/videos/menu/dread-detox.mp4" },
      { name: "Barrel Twist Style on Locs",        price: "$25+",  duration: "40 min",        slug: "loc-maintenance", image: "/images/gallery/two-strand-twist.webp", video: "/videos/menu/two-strand-twist.mp4" },
    ],
  },
  {
    category: "Natural Hair",
    blurb: "Silk press, wash & style, curl setting, and two-strand twists for every texture.",
    items: [
      { name: "Silk Press",                        price: "$135",  duration: "1 hr 10 min",   slug: "silk-press",            image: "/images/gallery/silk-press.webp",         video: "/videos/menu/silk-press.mp4" },
      { name: "Silk Press (Kids 4–10)",            price: "$85",   duration: "2 hr 30 min",   slug: "silk-press",            image: "/images/gallery/kids-silk-press.webp",    video: "/videos/menu/kids-silk-press.mp4" },
      { name: "Natural Curl Setting",              price: "$125",  duration: "1 hr",          slug: "natural-hair-styling",  image: "/images/services/natural-hair-styling.webp", video: null },
      { name: "Natural Hair Singles",              price: "$200+", duration: "3 hr 30 min",   slug: "natural-hair-styling",  image: "/images/gallery/natural-singles.webp",    video: "/videos/menu/natural-singles.mp4" },
      { name: "Natural Bun",                       price: "$85",   duration: "1 hr 45 min",   slug: "natural-hair-styling",  image: "/images/gallery/knot-bun.webp",           video: null },
      { name: "Curls Only",                        price: "$25+",  duration: "1 hr 45 min",   slug: "natural-hair-styling",  image: "/images/gallery/two-strand-twist.webp",   video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Touch Up Natural Hairstyles",       price: "$45+",  duration: "1 hr 35 min",   slug: "natural-hair-styling",  image: "/images/gallery/two-strand-twist.webp",   video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Wash, Blow Dry & Trim",             price: "$60",   duration: "45 min",        slug: "natural-hair-styling",  image: "/images/gallery/wash-blow-dry.webp",      video: null },
      { name: "Two Strand Twist w/ Hair Added",    price: "$225+", duration: "4 hr 25 min",   slug: "two-strand-twist",      image: "/images/gallery/two-strand-twist-hair.webp", video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Two Strand Twist (Natural Hair)",   price: "$125",  duration: "2 hr 30 min",   slug: "two-strand-twist",      image: "/images/gallery/two-strand-twist.webp",   video: "/videos/menu/two-strand-twist.mp4" },
      { name: "Two Strand Twist with Design",      price: "$135+", duration: "3 hr",          slug: "two-strand-twist",      image: "/images/gallery/two-strand-twist.webp",   video: "/videos/menu/two-strand-twist.mp4" },
    ],
  },
  {
    category: "Braids",
    blurb: "Knotless, cornrows, stitch, tribal, and Fulani — protective styles that don't punish your edges.",
    items: [
      { name: "Large Knotless Braids",             price: "$125",  duration: "2 hr 30 min",   slug: "braids", image: "/images/gallery/large-knotless.webp",     video: "/videos/menu/large-knotless.mp4" },
      { name: "Medium Knotless",                   price: "$185",  duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/knotless-braids.webp",    video: "/videos/menu/knotless-braids.mp4" },
      { name: "Small Knotless Singles",            price: "$225",  duration: "8 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Cornrows with Half Braids Singles", price: "$200+", duration: "4 hr",          slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "4 Straight Back (Stitch)",          price: "$85",   duration: "2 hr 30 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "5 Straight Back (Stitch)",          price: "$110",  duration: "2 hr 30 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "6 Straight Back (Stitch)",          price: "$120",  duration: "3 hr",          slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "8 Straight Back (Stitch)",          price: "$130",  duration: "3 hr 15 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "10–12 Straight Back (Stitch)",      price: "$145",  duration: "3 hr 15 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "2 Stitch Braids",                   price: "$50",   duration: "50 min",        slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "4 Stitches (Crisscrossed)",         price: "$85",   duration: "1 hr 30 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "XSmall Tribal Braids w/ Designs",   price: "$325",  duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Small Tribal Braids",               price: "$200",  duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Small Tribal Braids w/ Designs",    price: "$225",  duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Medium Tribal Braids",              price: "$185",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/knotless-braids.webp",    video: "/videos/menu/knotless-braids.mp4" },
      { name: "Tribal Braids",                     price: "$185+", duration: "5 hr 30 min",   slug: "braids", image: "/images/services/braids.webp",            video: null },
      { name: "Fulani (Small/Med Knotless)",       price: "$280",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Fulani Medium Knotless",            price: "$225",  duration: "5 hr 20 min",   slug: "braids", image: "/images/gallery/knotless-braids.webp",    video: "/videos/menu/knotless-braids.mp4" },
      { name: "Fulani Versatile + Small/Med",      price: "$310",  duration: "6 hr 30 min",   slug: "braids", image: "/images/gallery/small-knotless.webp",     video: "/videos/menu/small-knotless.mp4" },
      { name: "Fulani Versatile + Medium Knotless",price: "$250",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/knotless-braids.webp",    video: "/videos/menu/knotless-braids.mp4" },
      { name: "Fulani Braids",                     price: "$225+", duration: "5 hr 20 min+",  slug: "braids", image: "/images/gallery/fulani-braids.webp",      video: null },
      { name: "4 Cornrows",                        price: "$45",   duration: "50 min",        slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "6 Cornrows",                        price: "$65",   duration: "1 hr",          slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "8 Cornrows",                        price: "$85",   duration: "1 hr",          slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Cornrows (4–8 braids)",             price: "$45+",  duration: "50 min+",       slug: "braids", image: "/images/gallery/cornrows.webp",           video: null },
      { name: "12–20 Straight Back Braids",        price: "$145+", duration: "3 hr 30 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "2 Braids with Hair Added",          price: "$80",   duration: "1 hr 40 min",   slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Stitch Braids (4–12)",              price: "$85+",  duration: "2 hr 30 min+",  slug: "braids", image: "/images/gallery/feed-in-braids.webp",     video: "/videos/menu/feed-in-braids.mp4" },
      { name: "French Braids for Kids",            price: "$100+", duration: "1 hr 30 min",   slug: "braids", image: "/images/gallery/french-braids-kids.webp", video: "/videos/menu/french-braids-kids.mp4" },
    ],
  },
  {
    category: "Bob Style Knotless",
    blurb: "Knotless bob styles — smedium, medium, and large with optional Bohemian texture.",
    items: [
      { name: "Bob (Smedium + Bohemian)",          price: "$275",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/bob-smedium.webp", video: "/videos/menu/bob-smedium.mp4" },
      { name: "Bob (Medium + Bohemian)",           price: "$225",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/bob-medium.webp",  video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Smedium Knotless)",            price: "$220",  duration: "5 hr 30 min",   slug: "braids", image: "/images/gallery/bob-smedium.webp", video: "/videos/menu/bob-smedium.mp4" },
      { name: "Bob (Medium Knotless)",             price: "$180",  duration: "4 hr 35 min",   slug: "braids", image: "/images/gallery/bob-medium.webp",  video: "/videos/menu/bob-medium.mp4" },
      { name: "Bob (Large Size)",                  price: "$125",  duration: "3 hr 30 min",   slug: "braids", image: "/images/gallery/bob-medium.webp",  video: "/videos/menu/bob-medium.mp4" },
    ],
  },
  {
    category: "Weaves & Extensions",
    blurb: "Sew-in, crochet, quick weave, and combo styles. Hair not provided — bring your bundles.",
    items: [
      { name: "Sew In Weave",                      price: "$180",  duration: "3 hr 15 min",   slug: "sew-in-weave",   image: "/images/gallery/sew-in-weave.webp",      video: "/videos/menu/sew-in-weave.mp4" },
      { name: "Crochet Sew In",                    price: "$165",  duration: "2 hr 30 min",   slug: "crochet-braids", image: "/images/gallery/crochet-braids.webp",    video: "/videos/menu/crochet-braids.mp4" },
      { name: "Full Quick Weave",                  price: "$125",  duration: "2 hr",          slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",       video: "/videos/menu/quick-weave.mp4" },
      { name: "Quick Weave w/ Style",              price: "$135+", duration: "2 hr 15 min",   slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",       video: "/videos/menu/quick-weave.mp4" },
      { name: "Half Up Half Down Sew In",          price: "$160",  duration: "2 hr 45 min",   slug: "sew-in-weave",   image: "/images/gallery/half-up-half-down.webp", video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Half Up Half Down with Swoop",      price: "$175",  duration: "2 hr 55 min",   slug: "sew-in-weave",   image: "/images/gallery/half-up-half-down.webp", video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Half Up Half Down Quick Weave",     price: "$180",  duration: "3 hr 20 min",   slug: "quick-weave",    image: "/images/gallery/half-up-half-down.webp", video: "/videos/menu/half-up-half-down.mp4" },
      { name: "Creative Style Quick Weave",        price: "$160",  duration: "3 hr 30 min",   slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",       video: "/videos/menu/quick-weave.mp4" },
      { name: "2 Braids x Quick Weave",            price: "$145",  duration: "2 hr 30 min",   slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",       video: "/videos/menu/quick-weave.mp4" },
      { name: "Braids in Front + Quick Weave",     price: "$220",  duration: "4 hr 30 min",   slug: "quick-weave",    image: "/images/gallery/quick-weave.webp",       video: "/videos/menu/quick-weave.mp4" },
    ],
  },
  {
    category: "Ponytails & Updos",
    blurb: "Sleek ponytails, braided styles, swoop, and knot bun — wash & blow dry included on most.",
    items: [
      { name: "Sleek Ponytail",                    price: "$125",  duration: "2 hr",          slug: "natural-hair-styling", image: "/images/gallery/sleek-ponytail.webp",   video: "/videos/menu/sleek-ponytail.mp4" },
      { name: "Swoop Ponytail",                    price: "$125",  duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/swoop-ponytail.webp",   video: "/videos/menu/swoop-ponytail.mp4" },
      { name: "Knot Bun",                          price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/knot-bun.webp",         video: null },
      { name: "3 Part Pony",                       price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/braided-ponytail.webp", video: "/videos/menu/braided-ponytail.mp4" },
      { name: "Bundle Pony",                       price: "$130",  duration: "2 hr 30 min",   slug: "natural-hair-styling", image: "/images/gallery/bundle-pony.webp",      video: "/videos/menu/bundle-pony.mp4" },
      { name: "Braided Ponytail",                  price: "$165+", duration: "3 hr 30 min",   slug: "braids",               image: "/images/gallery/braided-ponytail.webp", video: "/videos/menu/braided-ponytail.mp4" },
    ],
  },
  {
    category: "Hair Color",
    blurb: "Highlights, dye, color & style, and dye tips — blonde and black provided; custom colors available.",
    items: [
      { name: "Highlights",                        price: "$85+",  duration: "2 hr 35 min",   slug: "hair-color", image: "/images/gallery/highlights.webp", video: "/videos/menu/highlights.mp4" },
      { name: "Hair Dye",                          price: "$85",   duration: "1 hr 30 min",   slug: "hair-color", image: "/images/gallery/hair-dye.webp",   video: "/videos/menu/hair-dye.mp4" },
      { name: "Hair Color & Style",                price: "$185",  duration: "3 hr",          slug: "hair-color", image: "/images/gallery/hair-dye.webp",   video: "/videos/menu/hair-dye.mp4" },
      { name: "Dye Tips / Ends",                   price: "$40+",  duration: "45 min",        slug: "hair-color", image: "/images/gallery/dye-tips.webp",   video: "/videos/menu/dye-tips.mp4" },
    ],
  },
  {
    category: "Cuts & Barbering",
    blurb: "Women's cuts, pixie, line-up, and men's haircuts — student pricing available.",
    items: [
      { name: "Women's Haircut",                   price: "$30+",  duration: "40 min",        slug: "womens-haircut",       image: "/images/gallery/pixie-cut.webp",            video: "/videos/menu/pixie-cut.mp4" },
      { name: "Trim (½ inch ends)",                price: "$30",   duration: "30 min",        slug: "womens-haircut",       image: "/images/gallery/pixie-cut.webp",            video: null },
      { name: "Pixie Haircut",                     price: "$100",  duration: "1 hr 30 min",   slug: "womens-haircut",       image: "/images/gallery/pixie-cut.webp",            video: "/videos/menu/pixie-cut.mp4" },
      { name: "Women Line Up w/ Fade (Back)",      price: "$45+",  duration: "30 min",        slug: "womens-haircut",       image: "/images/gallery/pixie-cut.webp",            video: "/videos/menu/pixie-cut.mp4" },
      { name: "Beard Line Up",                     price: "$25",   duration: "30 min",        slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Men Haircut + Beard",               price: "$50",   duration: "1 hr",          slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Taper & Line Up",                   price: "$45",   duration: "45 min",        slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Line Up Only",                      price: "$25+",  duration: "30 min",        slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Haircut / Razor Line Up",           price: "$100",  duration: "1 hr 10 min",   slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
      { name: "Kid Haircuts",                      price: "$30",   duration: "45 min",        slug: "mens-hair-barbering",  image: "/images/gallery/kids-braids.webp",          video: "/videos/menu/kids-braids.mp4" },
      { name: "Student Haircuts",                  price: "$25",   duration: "45 min",        slug: "mens-hair-barbering",  image: "/images/services/mens-hair-barbering.webp", video: null },
    ],
  },
  {
    category: "Men's Braids",
    blurb: "Singles, freestyle designs, straight backs, and creative braid styles for men.",
    items: [
      { name: "Natural Hair Singles (Men)",        price: "$135",  duration: "3 hr 15 min",   slug: "mens-hair-barbering", image: "/images/gallery/natural-singles.webp", video: "/videos/menu/natural-singles.mp4" },
      { name: "Designed Freestyle Braids",         price: "$100",  duration: "2 hr 30 min",   slug: "mens-hair-barbering", image: "/images/gallery/feed-in-braids.webp",  video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Straight Backs (Men)",              price: "$100",  duration: "1 hr 10 min",   slug: "mens-hair-barbering", image: "/images/gallery/feed-in-braids.webp",  video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Men Design Braids",                 price: "$150",  duration: "2 hr",          slug: "mens-hair-barbering", image: "/images/gallery/feed-in-braids.webp",  video: "/videos/menu/feed-in-braids.mp4" },
    ],
  },
  {
    category: "Chemical & Add-ons",
    blurb: "Relaxer, facials, waxing, braid takedown, wash & blow dry, and consultation.",
    items: [
      { name: "Women Short Style with Relaxer",    price: "$140",  duration: "2 hr 15 min",   slug: "chemical-relaxer",     image: "/images/services/chemical-relaxer.webp",    video: null },
      { name: "Chemical Relaxer",                  price: "$140",  duration: "2 hr 15 min",   slug: "chemical-relaxer",     image: "/images/services/chemical-relaxer.webp",    video: null },
      { name: "Eyebrow Wax",                       price: "$20",   duration: "30 min",        slug: "eyebrow-waxing",       image: "/images/gallery/eyebrow-wax.webp",          video: "/videos/menu/eyebrow-wax.mp4" },
      { name: "Facials",                           price: "$60",   duration: "50 min",        slug: "eyebrow-waxing",       image: "/images/gallery/eyebrow-wax.webp",          video: null },
      { name: "Black Mask",                        price: "$10",   duration: "30 min",        slug: "eyebrow-waxing",       image: "/images/gallery/eyebrow-wax.webp",          video: null },
      { name: "Waxing (legs, underarms, brows)",   price: "$15+",  duration: "1 hr",          slug: "eyebrow-waxing",       image: "/images/gallery/eyebrow-wax.webp",          video: "/videos/menu/eyebrow-wax.mp4" },
      { name: "Wash & Blow Dry Only",              price: "$35+",  duration: "40 min",        slug: "natural-hair-styling", image: "/images/gallery/wash-blow-dry.webp",        video: null },
      { name: "Wash Steam Treatment",              price: "$100+", duration: "2 hr",          slug: "natural-hair-styling", image: "/images/gallery/wash-blow-dry.webp",        video: null },
      { name: "Braid Down for Wig",                price: "$45",   duration: "1 hr",          slug: "braids",               image: "/images/gallery/feed-in-braids.webp",       video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Braid Take Down",                   price: "$50+",  duration: "45 min",        slug: "braids",               image: "/images/gallery/feed-in-braids.webp",       video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Braid Touch Up (Entire Perimeter)", price: "$85+",  duration: "1 hr 40 min",   slug: "braids",               image: "/images/gallery/feed-in-braids.webp",       video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Need Help Parting",                 price: "$70+",  duration: "1 hr 10 min",   slug: "braids",               image: "/images/gallery/feed-in-braids.webp",       video: "/videos/menu/feed-in-braids.mp4" },
      { name: "Consultation",                      price: "$25+",  duration: "35 min",        slug: "natural-hair-styling", image: null,                                        video: null },
    ],
  },
];

const fullUsedSlugs = new Set<string>();

export const FULL_MENU: MenuCategory[] = RAW_FULL_MENU.map((cat) => ({
  category: cat.category,
  blurb: cat.blurb,
  items: cat.items.map((item) => ({
    bookingSlug: buildBookingSlug(cat.category, item, fullUsedSlugs),
    detailSlug: item.slug,
    name: item.name,
    price: item.price,
    duration: item.duration,
    image: item.image,
    video: item.video ?? null,
    category: cat.category,
  })),
}));

const FLAT_FULL: Map<string, MenuItem> = new Map(
  FULL_MENU.flatMap((cat) => cat.items.map((item) => [item.bookingSlug, item] as const)),
);

const FLAT_HOME: Map<string, MenuItem> = new Map(
  MENU.flatMap((cat) => cat.items.map((item) => [item.bookingSlug, item] as const)),
);

export function findServiceByBookingSlug(bookingSlug: string): MenuItem | undefined {
  return FLAT_FULL.get(bookingSlug) ?? FLAT_HOME.get(bookingSlug);
}

export function allBookingSlugs(): string[] {
  const slugs = new Set<string>();
  for (const k of FLAT_FULL.keys()) slugs.add(k);
  for (const k of FLAT_HOME.keys()) slugs.add(k);
  return Array.from(slugs);
}

/**
 * ============================================================
 *  STUDIO SALON BERKELEY — Site Configuration
 *  Single source of truth for contact info, social handles,
 *  and brand details. Edit here and it updates everywhere.
 * ============================================================
 */

export const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────
  name: "Studio Salon",
  tagline: "Berkeley's loc & natural hair specialists.",
  url: "https://studiosalonberkeley.com",

  // ── Contact ───────────────────────────────────────────────
  phone: {
    display: "(510) 690-5274",
    href: "tel:+15106905274",
    schema: "+1-510-690-5274",
  },
  email: "studiosalonberkeley@gmail.com",

  // ── Address ───────────────────────────────────────────────
  address: {
    street: "2902 Sacramento St",
    city: "Berkeley",
    state: "CA",
    zip: "94702",
    latitude: 37.85419,
    longitude: -122.27961,
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Studio+Salon+2902+Sacramento+St+Berkeley+CA+94702",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.09!2d-122.27961!3d37.85419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStudio%20Salon!5e0!3m2!1sen!2sus!4v1700000000000",
  },

  // ── Hours ─────────────────────────────────────────────────
  // Keep in sync with app/layout.tsx openingHoursSpecification + the
  // hours grid rendered on /#hours and in the Footer.
  hours: [
    { day: "Sunday",    short: "Sun", open: null,    close: null,    closed: true  },
    { day: "Monday",    short: "Mon", open: null,    close: null,    closed: true  },
    { day: "Tuesday",   short: "Tue", open: "09:00", close: "19:00", closed: false },
    { day: "Wednesday", short: "Wed", open: "09:00", close: "19:00", closed: false },
    { day: "Thursday",  short: "Thu", open: "08:30", close: "19:00", closed: false },
    { day: "Friday",    short: "Fri", open: "09:00", close: "19:00", closed: false },
    { day: "Saturday",  short: "Sat", open: "09:00", close: "19:00", closed: false },
  ],

  // ── Booking ───────────────────────────────────────────────
  // Bookings are handled by Fresha. /book and /book/[slug] redirect
  // server-side to this URL; primary CTAs link to it directly with
  // target="_blank" so users don't lose the site.
  booking: {
    freshaUrl:
      "https://www.fresha.com/book-now/studio-salon-berkeley-dy3ug037/all-offer?share=true&pId=2861607",
    // Legacy Booksy reference — kept so existing copy can still cite it
    // until removed.
    booksyUrl:
      "https://booksy.com/en-us/1434403_studio-salon_hair-salon_119583_berkeley",
    businessId: "1434403",
    placeholder: false,
  },

  // ── Social Media ──────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/studiosalonberkeley/",
    facebook:  "",
    tiktok:    "",
    linkedin:  "",
  },

  // ── SEO defaults ──────────────────────────────────────────
  description:
    "Studio Salon in Berkeley, CA. Loc maintenance, braids, natural hair styling, color, weaves, and cuts. Book your appointment today.",
  keywords: [
    "hair salon Berkeley",
    "loc salon Berkeley",
    "loc maintenance Berkeley CA",
    "natural hair salon Berkeley",
    "braids Berkeley",
    "sew in Berkeley",
    "crochet braids Berkeley",
    "silk press Berkeley",
    "East Bay hair salon",
    "barbershop Berkeley",
  ],

  // ── Social Proof (kept in sync with app/layout.tsx aggregateRating) ──
  rating: {
    value: 5.0,
    count: 13,
    source: "Booksy",
  },
};

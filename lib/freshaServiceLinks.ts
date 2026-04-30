// AUTO-GENERATED — do not edit by hand.
// Source: Fresha partner Link Builder (oiid=sv:<service-pricing-level-id>).
// Regenerate with `agents/Porter/workspace/tasks/automate-fresha/extract_desired_state.py`
// and the link-extractor in that task folder.

/** Fresha booking metadata for Studio Salon Berkeley. */
export const FRESHA_BOOKING = {
  slug: "studio-salon-berkeley-dy3ug037",
  locationId: "2960266",
  defaultEmployeeId: "5232132",  // Studio Salon Berkeley (location-as-team-member, not Asa)
  partnerId: "2861607",
  /** Fallback URL (entire menu) when no per-service link is available. */
  fallbackUrl: "https://www.fresha.com/book-now/studio-salon-berkeley-dy3ug037/all-offer?share=true&pId=2861607",
} as const;

/**
 * Map: service name (matches `MenuItem.name` in services-menu.ts) → Fresha
 * service-pricing-level ID. Used as `oiid=sv:<id>` in the booking URL.
 */
export const FRESHA_SPL_BY_NAME: Record<string, string> = {
  "10\u201312 Straight Back (Stitch)": "27278009",
  "12\u201320 Straight Back Braids": "27278063",
  "2 Braids with Hair Added": "27278069",
  "2 Braids x Quick Weave": "27277444",
  "2 Stitch Braids": "27278099",
  "3 Part Pony": "27277455",
  "4 Cornrows": "27278055",
  "4 Stitches (Crisscrossed)": "27278024",
  "4 Straight Back (Stitch)": "27277999",
  "5 Straight Back (Stitch)": "27278002",
  "6 Cornrows": "27278056",
  "6 Straight Back (Stitch)": "27278004",
  "8 Cornrows": "27278059",
  "8 Straight Back (Stitch)": "27278006",
  "Barrel Twist Style on Locs": "27277192",
  "Beard Line Up": "27277474",
  "Black Mask": "27277498",
  "Bob (Large Size)": "27277428",
  "Bob (Medium + Bohemian)": "27277424",
  "Bob (Medium Knotless)": "27277426",
  "Bob (Smedium + Bohemian)": "27277423",
  "Bob (Smedium Knotless)": "27277425",
  "Braid Down for Wig": "27277506",
  "Braid Take Down": "27277508",
  "Braid Touch Up (Entire Perimeter)": "27277509",
  "Braided Ponytail": "27277459",
  "Braids in Front + Quick Weave": "27277446",
  "Bundle Pony": "27277457",
  "Chemical Relaxer": "27277494",
  "Consultation": "27277516",
  "Cornrows (4\u20138 braids)": "27278061",
  "Cornrows with Half Braids Singles": "27277995",
  "Creative Style Quick Weave": "27277443",
  "Crochet Sew In": "27277431",
  "Curls Only": "27277205",
  "Designed Freestyle Braids": "27277487",
  "Dread Detox": "27277191",
  "Dye Tips / Ends": "27277465",
  "Eyebrow Wax": "27277496",
  "Facials": "27277497",
  "French Braids for Kids": "27278080",
  "Fulani (Small/Med Knotless)": "27278102",
  "Fulani Braids": "27278052",
  "Fulani Medium Knotless": "27278046",
  "Fulani Versatile + Medium Knotless": "27278050",
  "Fulani Versatile + Small/Med": "27278048",
  "Full Quick Weave": "27277433",
  "Hair Color & Style": "27277462",
  "Hair Dye": "27277461",
  "Haircut / Razor Line Up": "27277481",
  "Half Up Half Down Quick Weave": "27277440",
  "Half Up Half Down Sew In": "27277437",
  "Half Up Half Down with Swoop": "27277438",
  "Highlights": "27277460",
  "Instant Locs": "27277153",
  "Kid Haircuts": "27277483",
  "Knot Bun": "27277454",
  "Large Knotless Braids": "27277989",
  "Line Up Only": "27277478",
  "Loc Maintenance / Touch Up": "27277149",
  "Locs w/ Tool": "27277150",
  "Medium Knotless": "27277990",
  "Medium Tribal Braids": "27278039",
  "Men Design Braids": "27277491",
  "Men Haircut + Beard": "27277475",
  "Natural Bun": "27277201",
  "Natural Curl Setting": "27277198",
  "Natural Hair Singles": "27277200",
  "Natural Hair Singles (Men)": "27277486",
  "Need Help Parting": "27277515",
  "Pixie Haircut": "27277472",
  "Quick Weave w/ Style": "27277434",
  "Retwist": "27277146",
  "Retwist (Kids 4\u201312)": "27277189",
  "Sew In Weave": "27277429",
  "Silk Press": "27277194",
  "Silk Press (Kids 4\u201310)": "27277195",
  "Sleek Ponytail": "27277576",
  "Small Knotless Singles": "27277992",
  "Small Tribal Braids": "27278031",
  "Small Tribal Braids w/ Designs": "27278035",
  "Starter Dreads": "27277151",
  "Stitch Braids (4\u201312)": "27278103",
  "Straight Backs (Men)": "27277488",
  "Student Haircuts": "27277484",
  "Swoop Ponytail": "27277452",
  "Taper & Line Up": "27277476",
  "Touch Up Natural Hairstyles": "27277207",
  "Tribal Braids": "27278044",
  "Trim (\u00bd inch ends)": "27277470",
  "Two Strand Twist (Natural Hair)": "27277254",
  "Two Strand Twist w/ Hair Added": "27277221",
  "Two Strand Twist with Design": "27277255",
  "Wash & Blow Dry Only": "27277501",
  "Wash Steam Treatment": "27277504",
  "Wash, Blow Dry & Trim": "27277208",
  "Waxing (legs, underarms, brows)": "27277500",
  "Women Line Up w/ Fade (Back)": "27277473",
  "Women Short Style with Relaxer": "27277492",
  "Women's Haircut": "27277467",
  "XSmall Tribal Braids w/ Designs": "27278029",
};

/** Build a per-service Fresha booking URL by service name. Returns the
 *  fallback URL if the name isn't mapped. */
export function freshaUrlForServiceName(name: string): string {
  const spl = FRESHA_SPL_BY_NAME[name];
  if (!spl) return FRESHA_BOOKING.fallbackUrl;
  const params = new URLSearchParams({
    lid: FRESHA_BOOKING.locationId,
    eid: FRESHA_BOOKING.defaultEmployeeId,
    oiid: `sv:${spl}`,
    share: "true",
    pId: FRESHA_BOOKING.partnerId,
  });
  return `https://www.fresha.com/book-now/${FRESHA_BOOKING.slug}/services?${params.toString()}`;
}

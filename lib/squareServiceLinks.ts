// AUTO-GENERATED — do not edit by hand.
// Source: Square Catalog API (APPOINTMENTS_SERVICE items, canonical IDs).
// Regenerate via:
//   agents/Porter/workspace/tasks/automate-square/square_assign_owner_api.py
//   then sync via the script that emits this file.

/** Square booking metadata for Studio Salon Berkeley. */
export const SQUARE_BOOKING = {
  environment: "production" as const,
  locationId: "LS8CYETZA8N64",
  merchantId: "ML3K7RQXEVFW6",
  merchantToken: "l99lv4a06e22rc",
  /** Public buyer-facing booking host. Each service deep-links to:
   *  https://book.squareup.com/appointments/{merchantToken}/location/{locationId}/services/{serviceId}
   */
  bookingHost: "https://book.squareup.com/appointments",
  fallbackUrl: `https://book.squareup.com/appointments/l99lv4a06e22rc/location/LS8CYETZA8N64/services`,
} as const;

/**
 * Map: service name (matches `MenuItem.name` in services-menu.ts) → Square
 * Catalog Item id (the SAME id used in the public booking URL).
 */
export const SQUARE_SERVICE_ID_BY_NAME: Record<string, string> = {
  "10\u201312 Straight Back (Stitch)": "CZDCHDJLM4PECGEFMMEYNYWB",
  "12\u201320 Straight Back Braids": "G6CU6YHPH4S652YD4NXOKYM2",
  "2 Braids with Hair Added": "G6DSCZ4SOSQ5QRIO5QEWUBP7",
  "2 Braids x Quick Weave": "P6HABZKBGI6LXBRHK2VQF3OH",
  "2 Stitch Braids": "5YZB4UYTTHXLZ6CIGRDSHSX7",
  "3 Part Pony": "3CIUR3HK6DQUT6LL6FBHST6P",
  "4 Cornrows": "L4DNXAZ2JGDI42NKSX73OII2",
  "4 Stitches (Crisscrossed)": "RCLVBBK7RHI5YMTOMT2QTKKD",
  "4 Straight Back (Stitch)": "IP7AWSH2WDE3NGT5A2M5M6SH",
  "5 Straight Back (Stitch)": "PE5EBYLGR5COQEGCSZGL52CP",
  "6 Cornrows": "OMRBUXIYZ7EYLE2AWKUUZ22E",
  "6 Straight Back (Stitch)": "MXBEOVDPGXOPFBN6XCFKJTDY",
  "8 Cornrows": "J7734Z6E24NSTYJ7CT72EJNI",
  "8 Straight Back (Stitch)": "FG47XVWRZN64GKXPUZTJA326",
  "Barrel Twist Style on Locs": "OPLIL6Z6KOJRND7OB3K4CR2W",
  "Beard Line Up": "RLAKCTG3L3EKEJKW4JGKNU3X",
  "Black Mask": "4UYBSZCB6222QVMSUZDOCHIO",
  "Bob (Large Size)": "5LM6DNXIAUQP5IFPJXY4OPFR",
  "Bob (Medium + Bohemian)": "ZACGQLHSVERPL26JI723EWOT",
  "Bob (Medium Knotless)": "FDIP7AQ4NUKVT5MVZPCQI7UX",
  "Bob (Smedium + Bohemian)": "DR37SXJEGYL3UYYVEXIN6THH",
  "Bob (Smedium Knotless)": "SNPH2XAQNQ6LEIQHTO5TKPRH",
  "Braid Down for Wig": "MNO7RPM5KLEQOQGCAA5NKS6Q",
  "Braid Take Down": "433EV32D7AQXY573LCTSZEPG",
  "Braid Touch Up (Entire Perimeter)": "YNCEITC5URFAYSTXLOFNH5DM",
  "Braided Ponytail": "355WLOKCZEWAKXREGESK3HW4",
  "Braids in Front + Quick Weave": "MEJQENVC3AJIVHVUWLNVUJWQ",
  "Bundle Pony": "UJ3YVOIYQJ3B2WJU766T5K2O",
  "Chemical Relaxer": "LST6FEFUKSTYIU54WBYEFJD6",
  "Consultation": "RIIVGGLTS5KDJMCBTFRUFPGZ",
  "Cornrows (4\u20138 braids)": "MEKU7VPSFFEPI3XGBSYRDZUO",
  "Cornrows with Half Braids Singles": "FAAEEWDVBR4JJTQRLXEQO5WW",
  "Creative Style Quick Weave": "B63ARHU4ZLXFIXP5BYAUA5TM",
  "Crochet Sew In": "UHYAU2ZH57FCPKEFVOT25U5V",
  "Curls Only": "4JSFGSRREHIMYRMAQ3IEHUUM",
  "Designed Freestyle Braids": "3W77UIZOW6QUUCW4B53QIC4Q",
  "Dread Detox": "GA7BPMIQXXPAA2F5VCX7YUUD",
  "Dye Tips / Ends": "DQNKE2DGSJ4HBRI7GWQJM7OJ",
  "Eyebrow Wax": "H7HC4DL6ID5ZWHRXSIALJOYT",
  "Facials": "UWAOYT3XEHKJLMW7TSOLB7LC",
  "French Braids for Kids": "H4M5GJOO5IIIXB632F6RZBTZ",
  "Fulani (Small/Med Knotless)": "D4M2EZF6NP5MCO3YFBTT4K4A",
  "Fulani Braids": "352HFVOWMRNZOFAWERXGMBZB",
  "Fulani Medium Knotless": "OJBY4DG2BAM55SWJ4P7VGPAX",
  "Fulani Versatile + Medium Knotless": "CLQGJTTN4LJAPJNY6VXVGDK4",
  "Fulani Versatile + Small/Med": "UEGESUTNEJQEOGB7Y2VWJDII",
  "Full Quick Weave": "FH6R7AL2ISQIK7NTVFUYZKPZ",
  "Hair Color & Style": "76HQDR335QQMHI5SC7YPQVOV",
  "Hair Dye": "D2HWC2SYDJ26SWWO2QERCJBL",
  "Haircut / Razor Line Up": "7WRX5N5EF7YLXUBFPXIRRWUW",
  "Half Up Half Down Quick Weave": "6T2D6BAI6TL3QJV2E6HM2I5N",
  "Half Up Half Down Sew In": "UCXX3ABBSJ2EYU6GWQY7NDC2",
  "Half Up Half Down with Swoop": "62TT6N5APYZ4I3NOQT3EOPHB",
  "Highlights": "EYJEFEV3SEKGNP3KKWLG66RB",
  "Instant Locs": "DKAV7ZHNKZQORYRUCAIOBJ6Z",
  "Kid Haircuts": "NQLGBAY2G6IMDDB27VGL75FM",
  "Knot Bun": "RZAQGY7Y7VAQBVBNLYN3RUYI",
  "Large Knotless Braids": "II3KUSTH5Y7LDPFGQZYQ7XY4",
  "Line Up Only": "RH5XQXHL74WNOW2DCKCJDXFS",
  "Loc Maintenance / Touch Up": "KLQX3W5B7K3N4SECYR5VTN6H",
  "Locs w/ Tool": "2TVDA2IEQ3JFAOYZQ5AKYEQU",
  "Medium Knotless": "HAI2RROTMZCHMXCPWHXPWW6Z",
  "Medium Tribal Braids": "NM3NIXTNGGSGZBB6VKFQYX72",
  "Men Design Braids": "VTT6DLMET44E7UTNCLV3QLOU",
  "Men Haircut + Beard": "MMQFVGEXX4IYAJKOMAZXCWTI",
  "Natural Bun": "BPWCM7QVFQ745N4VPR43WDEK",
  "Natural Curl Setting": "QDO7W43YGUCEXTLFQ3SK3HYV",
  "Natural Hair Singles": "4MPS57B546V3S6KG3LSLWGDB",
  "Natural Hair Singles (Men)": "A32AQKEZZQAW7W2KF6PNYDR2",
  "Need Help Parting": "BA3T6QXOHNHZIUBR65R52JXK",
  "Pixie Haircut": "P5EZTSY5N27HONTBRSXI2346",
  "Quick Weave w/ Style": "IRUNRZEXKW2ZG37B2ATAJVIQ",
  "Retwist": "BTR67S6LFTTW5WHJTWREZJAQ",
  "Retwist (Kids 4\u201312)": "FNFOOAI7SMEX7DPMG3Q5MG2Z",
  "Sew In Weave": "J2QCBTJBLALD5ILD7HICARK5",
  "Silk Press": "6PN5GRJC6OTGBJ7M2Y76Y7N6",
  "Silk Press (Kids 4\u201310)": "ZEMV4QCJJCGV4KCXZAJIQBIR",
  "Sleek Ponytail": "PU6YNLKEWECNF5NZGZYRLWDG",
  "Small Knotless Singles": "7YSIN7MRVKM7FVASQUBMF54S",
  "Small Tribal Braids": "2GEJTGFHZEZ526SWMA3J7R2L",
  "Small Tribal Braids w/ Designs": "63YUV4Y3HYYER3GH34B2IA3W",
  "Starter Dreads": "OVO3PILEWAUBFELJIHB5VADV",
  "Stitch Braids (4\u201312)": "CPEMU2OE3KHBORSNCX25LKXU",
  "Straight Backs (Men)": "LT6NJBJVEP6SQX4L7IMY2QJ2",
  "Student Haircuts": "VRC5ELSYPKMAGEEOOGEBUWYH",
  "Swoop Ponytail": "JN362JW2S4XEBLBRHNFVTOLM",
  "Taper & Line Up": "UNE7VOOWBPMMMLQHZBZRDOTI",
  "Touch Up Natural Hairstyles": "LISMY53PERDBTXYHMELMMUHF",
  "Tribal Braids": "ZYRIYD7HIUO3H6BX7HKKHUEF",
  "Trim (\u00bd inch ends)": "VAADZGFEZMHENYOUDCKMKEGO",
  "Two Strand Twist (Natural Hair)": "NQWJWJGV54VWRY6BTXUJ5QJZ",
  "Two Strand Twist w/ Hair Added": "K3PRBGU5UKDSFJJ3652CHMGP",
  "Two Strand Twist with Design": "GR7JGEY3IZHRBSKWM42LWHV4",
  "Wash & Blow Dry Only": "D62NBNCEV45XTPZQ2C6KMKJO",
  "Wash Steam Treatment": "TJB7O5SMBYAJDYWUAPYPOORU",
  "Wash, Blow Dry & Trim": "SDPZLISXXTHQKQE5RX732REE",
  "Waxing (legs, underarms, brows)": "5UALJE7YDHGPBK3GC46V2EF6",
  "Women Line Up w/ Fade (Back)": "W2D75OOMKDDNR5IHGNQRLRGR",
  "Women Short Style with Relaxer": "QGXRDW4BMSFZY4672KAP4JTV",
  "Women's Haircut": "EGGKCH57JWQ3YKNWSN4VU2FE",
  "XSmall Tribal Braids w/ Designs": "DLIIDR6JDJADYTP6AKRWQO54",
};

/** Build a per-service Square booking URL by service name. Returns the
 *  fallback (location-only) URL if the name isn't mapped. */
export function squareUrlForServiceName(name: string): string {
  const id = SQUARE_SERVICE_ID_BY_NAME[name];
  if (!id) return SQUARE_BOOKING.fallbackUrl;
  return `${SQUARE_BOOKING.bookingHost}/${SQUARE_BOOKING.merchantToken}/location/${SQUARE_BOOKING.locationId}/services/${id}`;
}

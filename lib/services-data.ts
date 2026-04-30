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

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "loc-maintenance",
    title: "Loc Maintenance & Retwist",
    metaDescription: "Loc maintenance, retwist, and interlocking in Berkeley at Studio Salon on Sacramento St. Call (510) 690-5274 to book.",
    h1: "Loc Maintenance and Retwist in Berkeley",
    intro: "Locs are a long relationship, not a one-time appointment. At Studio Salon on Sacramento St, we treat every head of locs like the ongoing project it is — tracking how your grid is settling in, where roots are loosening, and how the ends are behaving. We have been specializing in locs for years, and the chair is set up for real loc work: palm rolling, interlocking, repair on thinning spots, and clean retwists that actually hold. Whether you are two months into a starter set or ten years into a mature crown, we match the maintenance to the stage of your hair. Most clients book every four to six weeks, and we talk through your home routine every visit so the work holds between appointments. Starts at $85 and runs about 85 to 95 minutes in the chair.",
    sections: [
      {
        heading: "What a Maintenance Visit Includes",
        content: "A standard loc maintenance visit at Studio Salon runs about 85 to 95 minutes and covers everything your locs need to stay healthy between appointments. We start with a gentle cleanse using a residue-free shampoo, then assess the grid — checking for loose roots, thinning points, unraveling ends, and any locs that have merged or split. From there the chair does palm rolling or interlocking based on what your hair actually wants, never forcing a technique that does not suit the texture. Loc repair is included when it is a small fix; larger reconstruction is quoted separately. We finish with a light natural oil on the scalp and a clean part line so your crown looks intentional, not pulled. You leave with dry locs, a neat grid, and notes on what to watch for in the weeks ahead. Book by calling (510) 690-5274."
      },
      {
        heading: "Who This Service Is For",
        content: "This chair is for anyone living with locs — starter, budding, mature, or long and settled. We see clients who started their loc journey with us, clients transferring from another loctician, and folks who have been self-maintaining for years and want a trained eye on the grid. If your roots are fuzzing out past a few weeks of new growth, if you have thinning spots you keep ignoring, or if you are noticing locs starting to marry each other at the base, this is the appointment. We work with traditional locs, sisterlocks-style micro locs (maintenance only, not installs), interlocked locs, and freeform locs that want a light cleanup without losing their character. If you are not sure whether you want palm rolling or interlocking long term, we can talk through the tradeoffs at 2902 Sacramento St before committing either way."
      },
      {
        heading: "How to Prep for Your Visit",
        content: "Come in with dry, unstyled locs — no gel, no heavy butter, no recent retwist from someone else. If you washed at home in the last day or two, that is fine; we will still rinse and cleanse at the shop so the product line is consistent. Skip the scalp oiling the morning of your appointment so we can actually see the roots. If you are between stylists and know your last visit included interlocking, mention it when you book so the chair is ready with the right tool. Bring a list of any thinning or tender spots you want us to look at, and let us know if you have had any recent tension headaches or traction soreness — we will adjust pressure accordingly. Parking on Sacramento St is usually straightforward; give yourself a five-minute buffer. Text or call (510) 690-5274 if you are running behind."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "Loc maintenance at Studio Salon starts at $85 for a standard retwist on locs that are in good shape and on a regular schedule. The base visit covers shampoo, retwist or interlocking, and minor repair, and sits in the chair for about 85 to 95 minutes. Pricing moves up from there based on density, length past the shoulders, the amount of repair needed, and whether you are adding a style set afterward — two-strand twists, pipe cleaner curls, or a pinned updo are quoted at the chair. Clients stretching past eight weeks between visits should expect a slightly longer appointment because there is more new growth to manage cleanly. We are transparent about the add-on before we start, so nothing on the final number is a surprise. Cash, card, and the usual digital payments all work at 2902 Sacramento St."
      },
      {
        heading: "Why Book With Studio Salon Berkeley",
        content: "Studio Salon Berkeley was built around locs and natural hair, which means this is not a service squeezed in between unrelated appointments — it is the core of the work. The chair has seen every loc stage, every texture from fine 3c to dense 4c, and every kind of repair situation, so there is no question too specific to ask. We do not rush retwists. We do not over-tighten. We do not push interlocking on hair that is better off palm rolled, or the other way around. What you get is a loctician who tells you the truth about your grid, adjusts technique to your actual scalp, and keeps notes between visits so the next appointment picks up where the last one left off. If you have been looking for a steady home for your locs in Berkeley or the East Bay, call (510) 690-5274."
      },
    ],
    relatedServices: ["natural-hair-styling", "two-strand-twist", "braids"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "natural-hair-styling",
    title: "Natural Hair Styling",
    metaDescription: "Natural hair styling for every texture in Berkeley — wash, conditioning, twist-outs, blowouts at Studio Salon. Call (510) 690-5274.",
    h1: "Natural Hair Styling in Berkeley and the East Bay",
    intro: "Natural hair is not a single service — it is a conversation between your curl pattern, your porosity, your goals, and whatever your hair is doing that week. At Studio Salon, we build each natural hair appointment around what is actually in front of us in the chair. That might be a deep cleanse and protein treatment on hair that has been under braids for two months, a twist-out set on freshly washed coils, a sleek blowout for an event, or a full styling session that stretches into a defined wash-and-go. We work with 3a through 4c, fine to dense, short to waist-length. Pricing runs $85 to $225 and up depending on length, prep, and the final look. Most appointments land between one and three-and-a-half hours at 2902 Sacramento St.",
    sections: [
      {
        heading: "The Wash and Style Process",
        content: "Every natural hair appointment opens with an honest look at what the hair needs — not what we assumed it needed when you booked. We cleanse with a shampoo matched to your porosity, follow with a deep conditioner or protein treatment under heat, and detangle in sections with a wide tooth and fingers where it matters. From there the styling path splits: twist-outs get a leave-in plus a setting cream and are twisted in clean parts; blowouts move to a heat protectant, a tension blow dry, and a flat iron pass only where needed; wash-and-gos get a curl definer applied in small sections on soaking wet hair. We finish with a light oil on ends and a scalp check. The whole visit can run 60 minutes for a simple style refresh or up to 210 minutes for a full wash, treatment, and set. Call (510) 690-5274 to scope your appointment."
      },
      {
        heading: "Textures and Clients We Serve",
        content: "This chair welcomes the full range of natural hair. We see clients with loose 3a waves who want a defined style without heat damage, 3b and 3c curls that need help finding moisture balance, and 4a through 4c coils that want real styling instead of a one-size-fits-all treatment. We work with transitioning clients who are growing out a relaxer and need patient detangling, locs clients who want a styled set between maintenance visits, and folks who have been natural for a decade but are ready to try something new. Kids with natural hair are welcome for wash-and-style appointments; please mention age when you book so we can plan chair time realistically. If you are not sure your texture is a fit, send a photo when you book at 2902 Sacramento St — we will tell you straight."
      },
      {
        heading: "How to Prep Before You Come",
        content: "Arrive with dry, fully detangled hair if at all possible — even a rough finger-detangle at home saves us twenty minutes we can spend on the actual style. Do not come with product stacked from three previous wash days; a clean slate makes everything that happens in the chair work better. If you have been under a protective style, take it out at least a day before so the scalp can breathe and we can see the roots. Bring photos of the final look you want, including a reference for length and volume, and tell us upfront about any color, heat, or chemical history — it matters for how we approach the wash and set. Eat something before you come; longer styling appointments are real chair time. Water is always available. Text (510) 690-5274 if you need to reschedule."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Natural hair styling at Studio Salon runs $85 to $225 and up. A straightforward wash, condition, and twist-out on shoulder-length hair typically sits at the lower end, around 60 to 90 minutes. A full wash, deep treatment, blow dry, and flat iron finish on longer or denser hair moves up into the $150 to $185 range and asks for two to three hours in the chair. Elaborate wash-and-style sessions with detailed parting, multiple products, and a finished sculpted look can run $225 and up, and need the full 210-minute window. We quote the price and time honestly when you book, and we update you in-chair if something about the hair changes the plan — never a surprise on the ticket. Add-ons like trims, steam treatments, or color refreshes are priced separately and scoped before we start."
      },
      {
        heading: "Why This Chair for Natural Hair",
        content: "Studio Salon Berkeley was built on natural hair, which shows up in how the appointment actually runs. We do not flat iron hair that should not be flat ironed just because a client asked. We do not overload curls with product to fake definition. We do not rush detangling to keep a schedule. The chair is a Berkeley space that understands Black natural hair and loc culture as a default, not as a niche — there is no translating, no explaining, no convincing. Clients tell us appointments feel more like a check-in with someone who knows their hair than a transaction, and that is on purpose. If you have been bouncing between stylists looking for consistency, or if you are new to the East Bay and need a natural hair home, stop by 2902 Sacramento St or call (510) 690-5274 to get on the books."
      },
    ],
    relatedServices: ["silk-press", "two-strand-twist", "loc-maintenance"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "silk-press",
    title: "Silk Press",
    metaDescription: "Silk press in Berkeley — shampoo, blow dry, and flat iron finish at Studio Salon. $135, about 70 minutes. Call (510) 690-5274.",
    h1: "Silk Press in Berkeley — Smooth, Safe, and Lasting",
    intro: "A real silk press is not just a flat iron pass on natural hair — it is a careful sequence that gets coils and curls to lay sleek without frying the cuticle. At Studio Salon, the chair runs a silk press the way it should be run: clarify, condition, blow out on tension, and flat iron in small sections with the right temperature for your porosity and density. The result is movement that swings, shine that is not painted on with serum, and a finish that holds through Bay Area humidity as long as the hair is prepped well. Most silk presses at 2902 Sacramento St take about 70 minutes at $135. Trims are an add-on because not every silk press needs one, and we will tell you honestly whether yours does.",
    sections: [
      {
        heading: "What the Silk Press Covers",
        content: "The base silk press at Studio Salon is $135 and sits in the chair for roughly 70 minutes. It starts with a clarifying shampoo to strip buildup — this is the step most at-home presses skip, and it is the reason hair smokes under the iron. We follow with a moisturizing conditioner, rinse cool to close the cuticle, and apply a heat protectant matched to your porosity. The blow dry is done on tension with a round or paddle brush to get the base smooth before heat ever touches the shaft. The flat iron pass works in clean quarter-inch sections, one to two passes at a temperature chosen for your hair — never cranked to the top out of habit. We finish with a light shine oil, a wrap set if the style calls for it, and a conversation about how to maintain at home. Trim is add-on."
      },
      {
        heading: "Who a Silk Press Suits",
        content: "Silk presses work best on healthy natural hair that has not been chemically processed recently and is not sitting in a weakened protein state. We see clients who want a stretched look without long-term commitment, clients who are measuring length after a year of protective styling, and clients who just want their hair straight for a wedding, a graduation, or a work trip. If your hair is color-treated, we will adjust temperature and product and walk through realistic expectations for how long the press will hold. If you have heat damage already, a silk press may not be the right call yet — we will say so in the chair rather than push through. Fine, medium, and coarse textures all press well with the right technique. Call (510) 690-5274 or stop by 2902 Sacramento St to talk it through."
      },
      {
        heading: "How to Prep at Home",
        content: "Come in with hair that has not been freshly oiled or heavily moisturized — the clarifying shampoo needs something to work on, but stacked product makes the wash longer and can leave a residue the iron will punish. Detangle in large sections before you arrive if you can; a rough finger-detangle is plenty. Skip heavy creams for 24 hours before the appointment. If you just took down a protective style, give it at least a full day so the scalp and shaft settle before heat is introduced. Bring a silk scarf or bonnet for the ride home, especially if it is foggy in Berkeley — a silk press and thick marine layer are not friends. Eat before you come. Seventy minutes goes fast but it is still real chair time. Text (510) 690-5274 if you need to shift the appointment."
      },
      {
        heading: "Pricing and Time in the Chair",
        content: "The silk press is flat-priced at $135 for the standard service, which makes planning easy. That covers the clarifying wash, conditioning, blow dry, flat iron, and finishing oil for about 70 minutes in the chair. A trim is an add-on and is quoted before we start — most clients do not need one every press, and we would rather preserve length than cut out of habit. If your hair is past the mid-back, extremely dense, or coming out of a protective style with significant new growth, the appointment may extend slightly, and we will tell you upfront if that shifts pricing. Silk press maintenance between visits — a quick re-press of the front or ends — is not usually needed if the first press was done right, but we can scope that at 2902 Sacramento St if you ask."
      },
      {
        heading: "Why Our Approach Works",
        content: "The difference between a silk press that lasts two weeks and a silk press that falls flat by Monday is almost always in the prep, not the iron. Our chair treats the wash and blow dry as the real work — by the time the flat iron comes out, the hair should already be mostly smooth from tension drying. Temperature is chosen for the hair, not the stylist's habit, and we are willing to go lower than a lot of chairs because the goal is a press that protects the cuticle you will still need next year. Studio Salon is a Berkeley natural hair salon first, which means silk press clients are not an afterthought between other appointments — they get the same careful eye as locs and braids. Book by calling (510) 690-5274 or walking into 2902 Sacramento St to get on the schedule."
      },
    ],
    relatedServices: ["natural-hair-styling", "womens-haircut", "hair-color"],
    relatedLocations: ["berkeley", "albany", "el-cerrito"],
  },
  {
    slug: "hair-color",
    title: "Hair Color & Highlights",
    metaDescription: "Hair color in Berkeley — single-process, highlights, balayage, and bleach & tone at Studio Salon. $40–$85+. Call (510) 690-5274.",
    h1: "Hair Color and Highlights in Berkeley",
    intro: "Color on textured hair is a different craft than color on straight hair, and not every chair knows the difference. At Studio Salon, we do color with the natural hair context always in mind — how lift will behave on coily cuticles, how tone will read on warm underlying pigment, how much stress a protective style or flat iron schedule is already putting on the shaft. We offer single-process color, highlights, balayage, bleach-and-tone, and root touch-ups, and we scope each one honestly so you know what is realistic for your hair. Pricing starts at $40 for a simple touch-up and goes to $85 and up depending on complexity. Appointments run 45 to 155 minutes. Call (510) 690-5274 or stop by 2902 Sacramento St to scope a color conversation.",
    sections: [
      {
        heading: "What a Color Appointment Looks Like",
        content: "A color visit at Studio Salon starts with a real consultation — hair history, last color service, chemical history, porosity, and the look you are chasing with reference photos. From there the path depends on the service. A root touch-up or single-process color is formulated, applied in clean sections, processed, rinsed, and followed with a bond-protecting treatment and a style. Highlights and balayage are painted or foiled based on the pattern we mapped on the consult, toned after lift, and finished with a glaze for shine. Bleach-and-tone is the most technical — we lift in stages when needed, never push past what the hair can handle in one visit, and finish with a tone that reads the way the reference does. Every color service ends with a style — blow dry, twist-out, or a simple set — and a care plan. Book at (510) 690-5274."
      },
      {
        heading: "Who This Service Fits",
        content: "Color at Studio Salon is for clients who want color done with their texture in mind, not fought against it. We see natural hair clients looking for subtle depth around the face, loc clients adding warmth or copper to the ends, relaxer clients keeping grays covered, and clients who want a full transformation over multiple sessions. If you are coming out of a box color situation and want to get back to healthy, we can map a correction plan that respects the hair. If you are curl-pattern protective and want color that will not loosen your coils, we will tell you which services are safe and which are not. Kids under 12 are not taken for color. Anyone with a scalp condition or recent chemical service should mention it when booking at 2902 Sacramento St so we can plan timing responsibly."
      },
      {
        heading: "How to Prep for Color",
        content: "Come with dry, unstyled hair. Do not wash the morning of — a day or two of natural oil on the scalp is protective during color application and makes the service more comfortable. Skip heavy leave-in conditioners for 24 hours before; residual product can block color from taking evenly. Bring reference photos in natural light if possible, and be ready to talk about what you liked and did not like about past color services. If you have had a chemical relaxer, keratin treatment, or henna in the last six months, tell us before we start — those interact with color chemistry in specific ways. Eat a real meal before a long color appointment; 155 minutes is a stretch on an empty stomach. If you are unsure whether to come in for a consult first, call (510) 690-5274 and we will decide together."
      },
      {
        heading: "Pricing and Time Ranges",
        content: "Color pricing at Studio Salon starts at $40 for a basic root touch-up and runs to $85 and up for more involved services — highlights, balayage, full bleach-and-tone, and color corrections. Appointment length runs 45 to 155 minutes depending on the service. A simple gloss or root refresh can be in and out under an hour. Highlights and balayage land in the 90 to 120 minute range for most clients. Bleach-and-tone on dense or long hair is the full 155 minutes and sometimes asks for a second session for health reasons. We price the service at the consult based on your hair, not off a flat menu, and we do not move up without telling you. Add-on bond treatments are recommended for any lift service and are priced before we start. All quotes are honest at 2902 Sacramento St."
      },
      {
        heading: "Why Color at Studio Salon",
        content: "Most chairs that do color do not specialize in natural hair, and most chairs that specialize in natural hair do not do a lot of color. Our chair does both, which is rarer than it should be in the East Bay. That means color here is formulated with coily and curly cuticles in mind, applied in sections that respect shrinkage, and paired with treatments that actually protect the bond structure underneath. We also will not take on a color service we do not think is safe for your hair in its current state — if we need to do a treatment plan first, we will say so. Clients who have been chasing color in other salons and getting brass, breakage, or uneven lift tend to land at Studio Salon and stay. Call (510) 690-5274 to book a consult at 2902 Sacramento St."
      },
    ],
    relatedServices: ["silk-press", "natural-hair-styling", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "braids",
    title: "Braids — Knotless, Cornrows, Feed-In, Tribal",
    metaDescription: "Knotless braids, cornrows, feed-ins, and tribal braids in Berkeley at Studio Salon. $80–$325. Call (510) 690-5274 to book.",
    h1: "Braids in Berkeley — Knotless, Cornrows, Feed-In, and Tribal",
    intro: "Braids are a long commitment — weeks of wear, hours in the chair, real money — so the install has to be done right the first time. At Studio Salon, we braid the full range: knotless box braids, cornrows, feed-in styles, tribal braids with curved parts and patterns, and stitch braids. Every install starts with a clean, detangled, prepped scalp, and we braid with low tension from the first row, because hairlines are not a place to experiment. Pricing runs $80 to $325 depending on size, length, parting complexity, and hair used. Appointments take anywhere from 50 minutes for a small cornrow set to a full 390 minutes for detailed knotless work. Plan your day around the chair time. Book by calling (510) 690-5274 or stopping by 2902 Sacramento St.",
    sections: [
      {
        heading: "Styles and What Is Included",
        content: "The braids menu at Studio Salon covers knotless box braids in small, medium, and large sizes; traditional cornrows; feed-in braids for a seamless scalp finish; tribal braids with curved parts, beads, and accent patterns; and stitch braids with clean precision parting. Every install includes a cleanse and blow dry of the natural hair, careful detangling, parting based on your face shape and the pattern we agreed on in consult, and the actual braid work with low tension from root. We seal ends in hot water for knotless and box styles, and we show you how to wrap the style for bed before you leave. Hair — synthetic or human — is quoted separately unless you bring your own. Appointments run from a quick 50-minute cornrow refresh to 390 minutes for full, long, detailed knotless sets. Book with (510) 690-5274."
      },
      {
        heading: "Who Should Book Braids",
        content: "Braids work for almost anyone with enough hair to grip — which is less than most people think. We braid kids (ages six and up for cornrows, ten and up for long knotless installs), teens, adults of every texture, and clients who have never had braids before and want a careful first experience. Clients using braids as a protective style between natural hair cycles are the biggest share of this chair. Clients growing out color damage, recovering from a rough wig schedule, or heading into a summer of travel also do well here. If your edges are already thin, we will talk honestly about whether braids are the right call right now, and if they are, we braid with extra care around the perimeter. Anyone with scalp inflammation or active flare-ups should reschedule. Address is 2902 Sacramento St in Berkeley."
      },
      {
        heading: "How to Prep Before Your Appointment",
        content: "Wash and blow dry your hair within 24 hours of your appointment — a stretched, clean base makes braiding faster and easier on your scalp. If you cannot blow dry at home, book with us for a wash and blow dry as an add-on. Do not apply heavy butters or gels the day of; a light leave-in is fine. Detangle in large sections if you can. If you are bringing hair, purchase it in advance based on the count we agree on at consult — typically six to ten packs for a long knotless set. Wear a comfortable top with a wide neckline so we can work the nape without pulling at your shirt. Eat a real meal before long installs, bring snacks and a phone charger, and clear your day. Long braid appointments are not places to squeeze in other errands. Text (510) 690-5274 with questions."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Braids pricing at Studio Salon starts at $80 for simple cornrow styles and runs to $325 for large, long, detailed knotless installs with patterned parting. Size drives a lot of the price — smaller braids take more hours, and hours are what you are paying for. Length matters too; waist-length knotless is a different appointment than shoulder-length. Appointment length runs from 50 minutes on the short end to 390 minutes for the most involved installs; most clients land in the three to six hour range. We quote the full price at consult and confirm again when you book, so there is no surprise at the chair. Hair is extra unless you bring your own. Takedown appointments for old braids are quoted separately and are worth booking the day before an install so the scalp can rest. Call (510) 690-5274 for a quote at 2902 Sacramento St."
      },
      {
        heading: "Why This Chair for Braids",
        content: "The biggest difference at Studio Salon is tension. We braid low from the very first row, which sounds like a small thing until you have had braids installed too tight and watched your hairline suffer for it. We also part cleanly — patterns are drawn, not guessed — and we take the time to match part width to the size of braid you asked for, so the finished look is actually what you booked. The chair understands protective style culture as a default, not a specialty item, which means you do not have to explain why you are there or defend your choice. Clients who have been burned by rushed braid appointments elsewhere in Berkeley and the East Bay tend to come here and settle in. Call (510) 690-5274 or come by 2902 Sacramento St to get on the schedule — braid appointments book out, so plan ahead."
      },
    ],
    relatedServices: ["crochet-braids", "sew-in-weave", "loc-maintenance"],
    relatedLocations: ["berkeley", "oakland", "richmond"],
  },
  {
    slug: "sew-in-weave",
    title: "Sew-In Weaves & Weave Install",
    metaDescription: "Sew-in weave install in Berkeley — braided foundation, install, and blow dry at Studio Salon. $180, about 3 hours. Call (510) 690-5274.",
    h1: "Sew-In Weave Installs in Berkeley and the East Bay",
    intro: "A good sew-in starts hours before the needle — it starts with a foundation that respects your natural hair and sits flat enough to blend cleanly. At Studio Salon, the full install is $180 and covers the braided foundation, the sew-in itself, and a wash and blow dry of the finished style. We work with full sew-ins, partial sew-ins with a leave-out, and vixen-style installs with multiple parts, and we scope which one suits your goal at consult. The chair takes about 195 minutes — roughly three-and-a-quarter hours — so plan a real block of time. Hair is separate unless you bring your own bundles or wefts. Call (510) 690-5274 or stop by 2902 Sacramento St to talk installs.",
    sections: [
      {
        heading: "The Full Install Process",
        content: "A sew-in at Studio Salon runs about 195 minutes and $180 for the service. It opens with a cleanse and deep condition of your natural hair — a sew-in is only as healthy as the hair underneath it, and we do not skip that step. We blow dry on tension, then braid the foundation in a pattern matched to the style you want: straight-back for simple installs, with a leave-out channel if you are blending, or a more complex vixen pattern for multi-part styles. The sew-in itself goes in on a curved needle with weaving thread, weft by weft, with tension checked and corrected throughout. We finish by blending any leave-out, cutting in shape, and washing and blow drying the hair so you leave with a styled, finished look rather than a raw install."
      },
      {
        heading: "Who Sew-Ins Work For",
        content: "Sew-in weaves are a strong fit for clients who want a protective style with length, volume, and versatility in day-to-day styling. We see clients who want to give their natural hair a two-month break, clients prepping for weddings or travel, and clients who rotate sew-ins as their main style year-round. Texture does not rule anyone out — we install on 3a through 4c and work the foundation so the weft sits flat regardless of your curl pattern. Thin edges or a history of traction tension is something to talk through before booking; we may recommend a glueless or partial install over a full sew-in. If you have active scalp issues, reschedule until they settle. Anyone new to sew-ins is welcome — we walk first-timers through the whole process at 2902 Sacramento St before anything starts."
      },
      {
        heading: "How to Prep and What to Bring",
        content: "Come in with hair that has been washed within 48 hours, detangled, and free of heavy product. If you cannot wash at home, we include a cleanse in the appointment — just let us know when you book so we can allow for it in timing. Bring your hair: most full sew-ins take three to four bundles depending on length and density, plus a closure or frontal if the style calls for one. If you are unsure what to buy, send photos of your reference style when you book at (510) 690-5274 and we will give you a bundle count. Wear a loose top with a wide neck. Eat before you come and plan for 195 minutes in the chair. Bring a charger and headphones. If you are bringing a closure, make sure it is already bleached and customized if you want that look."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "The sew-in install at Studio Salon is flat $180 for the service and runs about 195 minutes in the chair. That covers the cleanse, blow dry, braided foundation, the sew-in, and the finishing wash and blow dry. Hair — bundles, closures, frontals — is separate and brought by the client or purchased ahead. Closure or frontal customization (bleaching knots, plucking, or tinting) is an add-on and quoted before we start based on what the piece needs. Takedown of an old sew-in is a separate appointment and is worth booking the day before your new install so the scalp can breathe and the hair can be deep conditioned. Maintenance visits between installs — a tighten-up or a wash — are quoted at the chair. Call (510) 690-5274 with questions about pricing on a specific look."
      },
      {
        heading: "Why Install at Studio Salon",
        content: "A sew-in is a protective style, and at Studio Salon we treat it that way. The braided foundation is built for comfort and health — not overly tight, not twisted at the edges, and always with the natural hair moisturized and sealed before the install goes in. We also take the leave-out question seriously; if your natural texture will not blend cleanly with the hair you bought, we will tell you before we start and talk through closure options so you do not end up flat ironing leave-out every day. Berkeley and the larger East Bay have plenty of weave options, but this chair specifically serves clients who want natural hair health as the baseline, with the install as the cherry on top. Call (510) 690-5274 or come by 2902 Sacramento St to book."
      },
    ],
    relatedServices: ["quick-weave", "braids", "crochet-braids"],
    relatedLocations: ["berkeley", "oakland", "richmond"],
  },
  {
    slug: "crochet-braids",
    title: "Crochet Braids",
    metaDescription: "Crochet braids in Berkeley — low-tension protective install at Studio Salon. $165, about 2.5 hours. Call (510) 690-5274.",
    h1: "Crochet Braids in Berkeley — Low-Tension Protective Styling",
    intro: "Crochet braids are one of the most underrated protective styles — fast to install compared to knotless, easier on the scalp than a full sew-in, and extremely versatile for texture and length. At Studio Salon, we install crochet on a cornrow foundation sized and patterned for the look you want, whether that is long wavy lengths, tight coils, passion twists, or faux locs. The service is $165 and takes about 150 minutes in the chair. Hair is separate and quoted at consult based on the style. This is a great first protective install for clients who want something low-tension and low-commitment. Call (510) 690-5274 or drop in at 2902 Sacramento St to talk through a crochet appointment.",
    sections: [
      {
        heading: "What the Crochet Install Covers",
        content: "A crochet install at Studio Salon runs $165 and takes about 150 minutes. It starts with a cleanse and blow dry of your natural hair, detangled and stretched so the foundation lays flat. We cornrow the base in a pattern suited to the final look — straight-back for long straight styles, curved for updos, or a more decorative pattern if you plan to leave a part exposed. Then we crochet the hair in, loop by loop, securing each with a knot that sits flat against the cornrow. We shape the ends, blend, and dip in hot water if the hair is a style that requires it. We finish with a light style set and a talk-through of how to wrap the hair for sleep. Call (510) 690-5274 to scope a crochet consult ahead of booking."
      },
      {
        heading: "Who Crochet Braids Suit",
        content: "Crochet is a strong fit for clients who want protective styling without the chair time of full knotless braids or the commitment of a sew-in. We see first-time protective style clients, clients recovering from tension damage who want low-pull options, and clients who rotate crochet as a quick-turn style between other looks. Texture is not a limiter — the natural hair lives under the cornrow foundation, so the finished look comes from the crochet hair itself. Crochet works well for clients who want to try a different texture than their own — curly, wavy, straight, or loc-style — without committing for months. Kids over eight do well with simpler crochet installs. If your edges are stressed, crochet is gentler than braids or weave. Come by 2902 Sacramento St for a fit check."
      },
      {
        heading: "How to Prep at Home",
        content: "Come in with hair washed within 24 hours, blow dried or stretched, and free of heavy product. The flatter the base, the cleaner the install will sit. Detangle in large sections before arriving. Bring the crochet hair: most installs use three to six packs depending on density and the style you are going for — we give you a count at consult so you do not overbuy. If you are doing a style that needs hot water dipping (like faux locs or certain wave patterns), the hair is typically sold pre-styled but we can handle the dip in-shop. Wear a loose top. Plan for 150 minutes in the chair. Eat first. Bring a phone charger. Text (510) 690-5274 if you need to reschedule or are running late on the way to 2902 Sacramento St."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Crochet braids at Studio Salon are a flat $165 for the install service. The appointment runs about 150 minutes in the chair. That covers the cleanse, blow dry, cornrow foundation, crochet install, shaping, and a basic style set at the end. Hair is separate and typically runs $20 to $60 depending on brand and style. If you are adding hot water dipping, styling into a sculpted updo, or finishing with a cut-in shape, those may add a small amount of chair time and are quoted before we start. Takedown of a previous crochet install is simple and can often be handled the same day if time allows — call to confirm when you book at (510) 690-5274. Maintenance is minimal: a weekly scalp refresh and a nightly wrap is usually enough to keep a crochet install looking fresh for four to six weeks."
      },
      {
        heading: "Why Studio Salon for Crochet",
        content: "The biggest wins of a crochet install — low tension, natural-looking blending, and comfortable wear — depend entirely on how the foundation is built and how each loop is knotted. Our chair does not rush the cornrows; they are parted cleanly and braided at a size that matches the crochet hair, so knots sit flush and nothing pokes through. We also do not over-tension at the edges, which is where a lot of crochet installs go wrong. Studio Salon works with Berkeley clients who want protective styles that actually protect, not just styles that look cute on day one, and crochet is a perfect vehicle for that. If you have been curious about crochet but scared of install quality, this is the chair to start with. Book at (510) 690-5274 or walk in at 2902 Sacramento St."
      },
    ],
    relatedServices: ["braids", "sew-in-weave", "quick-weave"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "quick-weave",
    title: "Quick Weaves & Updos",
    metaDescription: "Quick weaves and event updos in Berkeley at Studio Salon. $125–$180, 2–3.5 hours. Call (510) 690-5274 to book.",
    h1: "Quick Weaves and Updos in Berkeley",
    intro: "Quick weaves are the go-to when you need a full styled look for an event without the chair time of a full sew-in. At Studio Salon, we install quick weaves cleanly — molded base, protective cap, wefts glued flat, blended edges, and a finished style that reads as your own hair. We also do event updos on natural hair, relaxed hair, and weave installs. Pricing runs $125 to $180 depending on the install and style complexity, and appointments take 120 to 210 minutes. This is a favorite for weddings, graduations, reunions, and short trips where you want one install to carry the week. Call (510) 690-5274 or stop by 2902 Sacramento St to scope the look you need.",
    sections: [
      {
        heading: "What the Service Includes",
        content: "A quick weave at Studio Salon starts with a cleanse and blow dry of your natural hair, followed by a molded protective layer — either a cap or a wrap — that keeps bonding glue off the scalp entirely. We attach wefts in clean rows, shaping as we go, and finish with a cut-in style, any heat or curl work the look needs, and a full blend of edges or leave-out if the style calls for one. Updos — for quick weave clients or for natural and relaxed hair — include a wash, stretch or blow dry, parting, pinning, and setting with the right product for your texture so the style actually holds through an event. Appointment length runs 120 to 210 minutes depending on complexity and the number of pieces installed. Book at (510) 690-5274 when you know your event date."
      },
      {
        heading: "Who a Quick Weave Fits",
        content: "Quick weaves fit clients who want a full styled weave install for a specific event or short window of wear — a week, two weeks, a month — without the chair time and commitment of a sew-in. We see brides, graduates, birthday clients, anniversary clients, and travel clients who want one install to handle multiple outfits. Updos at this chair fit clients with any texture who want an event look that photographs well and holds through a long night. If you have scalp sensitivity or allergies to bonding glue, tell us before we book — the cap method keeps glue off the scalp, but it is worth flagging so we plan accordingly. First-time quick weave clients are welcome at 2902 Sacramento St; we walk you through install and care before you leave."
      },
      {
        heading: "How to Prep for the Chair",
        content: "Come in with hair washed within 48 hours, detangled, and dry. If you cannot wash at home, we include a cleanse and blow dry in the appointment — mention it when you book so we can time it right. Bring your hair: quick weaves usually need two to three bundles depending on length and fullness, plus a closure or frontal if the style calls for one. If your event is a specific time on a specific day, book the chair at least 24 hours before — a quick weave set in the morning looks better by evening than one set immediately before the event. For updos on your own hair, come in with clean stretched hair unless a wash is included in the appointment. Text (510) 690-5274 with questions. Eat before you come and plan for up to 210 minutes at 2902 Sacramento St."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "Pricing for quick weaves and updos at Studio Salon runs $125 to $180 depending on service. A standard quick weave install — cap, wefts, cut-in, and style — sits in the $125 to $165 range and takes 120 to 180 minutes. More involved installs with closures, frontals, or elaborate cut-in styles move up to $180 and use the full 210-minute window. Event updos on natural or relaxed hair price in the middle of the range depending on complexity; sculpted styles with detailed parting and heat work take longer than sleek pulled-back looks. Hair is separate unless you bring your own bundles or closures. We quote the full service at consult and confirm when you book, so pricing is set before the appointment starts. Call (510) 690-5274 to scope what you need for an upcoming event."
      },
      {
        heading: "Why Book With Studio Salon Berkeley",
        content: "Quick weaves are fast, but fast does not mean sloppy. Our chair treats a quick weave install with the same careful prep as a sew-in — hair cleansed, scalp protected, wefts laid flat, edges blended. Updos get the same eye; we do not just pin hair and hope, we set with product matched to texture so the style survives a real event. Clients who have had quick weaves fail on them elsewhere — lifted wefts, visible glue lines, sloppy cut-ins — find this chair and switch over. The Berkeley location at 2902 Sacramento St makes Studio Salon easy to reach from most of the East Bay for event prep. Book at least one to two weeks out for high-demand weekends like wedding season, prom, and the summer travel stretch. Call (510) 690-5274 to get on the calendar."
      },
    ],
    relatedServices: ["sew-in-weave", "crochet-braids", "silk-press"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "mens-hair-barbering",
    title: "Men's Hair & Braids",
    metaDescription: "Men's hair in Berkeley — braids, buzz cuts, and line-ups at Studio Salon. $100–$150. Call (510) 690-5274 to book.",
    h1: "Men's Hair and Braids in Berkeley",
    intro: "Men's hair at Studio Salon covers the full range — braids, buzz cuts, line-ups, and more involved cuts with shape and texture. We handle men's braids as a specialty alongside the rest of our braid work, which means cornrows, feed-ins, and tribal styles are all on the menu for male clients too. Pricing runs $100 to $150 depending on the service, and appointments take 70 to 195 minutes. The chair welcomes teens and adults, and we are comfortable with every texture from fine and wavy to dense 4c coils. If you have been looking for a Berkeley chair that can handle a clean line-up and a full braid set in the same place, this is it. Call (510) 690-5274 or stop by 2902 Sacramento St.",
    sections: [
      {
        heading: "Men's Services on the Menu",
        content: "Men's services at Studio Salon include cornrow and feed-in braid installs for men, clean buzz cuts with line-ups, shape-ups on existing cuts, scissor cuts with texture and structure, and beard shaping as an add-on. Braid appointments include a cleanse, detangle, and the install itself with parts matched to the head shape and pattern requested. Cuts include a consultation, shampoo if needed, the cut itself with clippers or scissors, a line-up at the perimeter, and a finish with product. Line-ups between cuts are welcome as a standalone appointment. Appointment length runs 70 minutes for a cut and line-up up to 195 minutes for a detailed full braid install. Pricing sits in the $100 to $150 range depending on the service. Book at (510) 690-5274 or walk into 2902 Sacramento St for a consult."
      },
      {
        heading: "Who This Chair Serves",
        content: "Male clients at Studio Salon are everyone from teens getting their first set of cornrows to adults who rotate braids with buzz cuts through the year. We see clients who want one consistent chair for both their cut and their braid work, clients with locs who also want a beard trim, and clients whose texture or density makes generic barbershop chairs a poor fit. Age twelve and up for most braid work, eight and up for simple cuts with a parent on site. Texture is not a limiter — the chair handles every curl pattern and density. If you are transitioning out of a cut into a braid-ready length, we can talk timing and protective styling so the growing-out phase is not rough. Berkeley, Oakland, and the larger East Bay are all regular service areas for male clients."
      },
      {
        heading: "How to Prep Before Coming In",
        content: "For cuts and line-ups, come with clean dry hair if you can — a wash the day before is ideal. Skip heavy product on the day of the appointment. Bring reference photos if you have a specific cut in mind; even a rough phone photo helps the chair read what you are after. For braid appointments, wash and stretch your hair within 24 hours, detangle, and come with scalp free of heavy buildup. Bring hair if you are adding length or using extensions for feed-ins — we will give you a count at consult. Shape up appointments are short and need minimal prep — just come with the cut clean. If you are bringing a kid for a first-time braid appointment, prep them with snacks and a device; a first set can feel long. Call (510) 690-5274 ahead of time."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Men's services at Studio Salon price in the $100 to $150 range. A cut and line-up sits at the lower end, typically 70 minutes in the chair. Straightforward cornrow installs for men run in the middle of the range and take 90 to 120 minutes depending on length and pattern. Full feed-in or detailed tribal-style braid installs for men can move up to $150 and take the full 195 minutes. Add-ons like beard shaping, hot towel treatments, or a scalp cleanse are quoted before we start. We are transparent about price at booking and confirm again at the chair. Line-ups between cuts are priced separately and fit into shorter appointment windows. Takedown of old braids is a small add-on and is worth booking the same day as a new install when it is a simple unbraid."
      },
      {
        heading: "Why Studio Salon for Men's Hair",
        content: "Most men's hair in Berkeley lives at traditional barbershops, which are great for cuts but not always equipped for braid work or for certain textures. Studio Salon bridges that gap: you get a chair that can deliver a clean line-up and a full knotless set without having to make two separate appointments at two separate shops. We braid men's hair at the same quality we braid women's — low tension, clean parts, tight install. Cuts get the same care. The salon is an easy stop at 2902 Sacramento St with usually manageable parking on the block. If you have been making do with two stops for your hair routine, consolidating at one chair that can handle both sides is a real quality-of-life upgrade. Call (510) 690-5274 to get on the schedule."
      },
    ],
    relatedServices: ["braids", "womens-haircut", "eyebrow-waxing"],
    relatedLocations: ["berkeley", "oakland", "el-cerrito"],
  },
  {
    slug: "womens-haircut",
    title: "Women's Haircut",
    metaDescription: "Women's haircuts in Berkeley — shape-ups, trims, and transformations at Studio Salon. Starts at $30. Call (510) 690-5274 to book.",
    h1: "Women's Haircuts in Berkeley for Every Texture",
    intro: "Women's haircuts at Studio Salon cover everything from a quick shape-up and trim on curly ends to a full transformational cut that reshapes the whole head. Pricing starts at $30 and scales up based on length, complexity, and whether there is a finish style included. Appointments run 40 to 90 minutes. We cut on every texture — wavy, curly, coily, relaxed, locs — and we cut wet, dry, or both depending on what the hair needs. Curly cuts in particular benefit from dry shaping, and our chair handles both approaches without forcing every client into the same method. If you have been looking for a chair that actually understands how your texture behaves post-cut, book at (510) 690-5274 or visit 2902 Sacramento St in Berkeley.",
    sections: [
      {
        heading: "What a Cut Appointment Looks Like",
        content: "A women's haircut at Studio Salon starts with a real conversation — what you like about your current shape, what you do not, and what you are chasing in the mirror. Bring photos if you have them. We then assess the hair dry, looking at how it falls, where volume sits, and where the shape is already working or fighting itself. Curly and coily hair often gets an initial dry shape before any water touches it, so we can preserve the natural pattern. We shampoo and condition as needed, blow dry or stretch as the cut requires, and cut with scissors or razor based on the shape and texture. We finish with a style — a twist-out, a silk press, a blowout, or a simple product set — so you leave seeing the real final look, not a wet guess."
      },
      {
        heading: "Who Books a Cut Here",
        content: "Women's cuts at Studio Salon serve clients who want a chair that reads texture correctly. That includes curly clients whose last few cuts looked great wet and wrong dry, natural hair clients chasing a shape that survives a wash-and-go, loc clients who want a length and shape correction, and relaxed clients who want a clean professional cut with modern shape. Clients transitioning between textures — growing out a relaxer, loosening after pregnancy, or color-damaged — find careful cutting useful for pushing the transition along. First-time clients to Studio Salon are welcome; we typically book a slightly longer first appointment so the consult is not rushed. Kids twelve and up are taken for simple cut services. Come in at 2902 Sacramento St in Berkeley or call (510) 690-5274 to book."
      },
      {
        heading: "How to Prep at Home",
        content: "For a curly or coily cut, come in with your hair styled the way you normally wear it — not freshly slicked down or stretched into a ponytail. The chair needs to see how the curl falls in real life to cut a shape that works at home. If you are going for a silk press finish or a blowout, come with dry, detangled hair and minimal product. Bring reference photos in natural light if you can. Mention any recent chemical services when you book. If you have bangs or a fringe you want cut in, think about whether your growth pattern at the hairline supports it — we will tell you honestly if it is a struggle. Skip heavy butters the day of so the hair moves the way it actually moves. Text (510) 690-5274 if you need to reschedule."
      },
      {
        heading: "Pricing and Time Ranges",
        content: "Women's haircuts at Studio Salon start at $30 for a basic trim or shape-up on shorter hair and scale up from there based on length, density, shape complexity, and finish style. A simple trim on medium-length natural hair typically lands in the 40 to 50 minute window. A more involved shape-up with a wash and blow dry finish runs longer, 60 to 75 minutes. Transformational cuts that reshape the whole head, especially on dense or long hair, use the full 90-minute block. A silk press finish on top of a cut is priced separately at the silk press rate; mention it when you book so we can hold enough chair time. We confirm the final price at the start of the appointment before any hair is cut. Pricing is straightforward and never scaled up mid-appointment without a conversation."
      },
      {
        heading: "Why Cut at Studio Salon",
        content: "Cutting textured hair is a specific skill, and not every chair has it. Our background in natural hair, locs, and braid work means we read the texture before picking up the scissors — which sounds obvious but makes a real difference in how the finished cut behaves over the days and weeks after the appointment. We cut shapes that work at home, not just shapes that look good in the salon mirror under the right lighting. We are honest about what a cut will and will not fix; if your shape problem is really a style problem or a product problem, we will say so. Studio Salon serves Berkeley and the East Bay from 2902 Sacramento St, and we are happy to book a consult before a first cut if you want to talk through shape options. Call (510) 690-5274."
      },
    ],
    relatedServices: ["silk-press", "natural-hair-styling", "hair-color"],
    relatedLocations: ["berkeley", "albany", "kensington"],
  },
  {
    slug: "chemical-relaxer",
    title: "Chemical Relaxer",
    metaDescription: "Chemical relaxer and cut in Berkeley at Studio Salon — $140, about 2.25 hours. Call (510) 690-5274 to book.",
    h1: "Chemical Relaxer Services in Berkeley",
    intro: "A chemical relaxer done right is not harsh — it is a carefully timed service with the right strength, the right base, and the right neutralizing steps. At Studio Salon, we approach relaxer work with the same scalp-and-strand-health lens we bring to every service. The full service is $140 and includes the relaxer application, processing, rinse, neutralizing shampoo, conditioning, and a cut. Total chair time is about 135 minutes. We do touch-ups on regrowth and full-head services for new clients or clients returning to the chair after time away. Not every head of hair is a good relaxer candidate, and we will talk honestly at consult before booking. Call (510) 690-5274 or visit 2902 Sacramento St to scope the appointment.",
    sections: [
      {
        heading: "What the Service Covers",
        content: "The chemical relaxer at Studio Salon is $140 and takes about 135 minutes. It starts with a real consult — scalp check, strand check, hair history, recent color or heat work, and any sensitivities we need to plan around. We base the scalp with a protective cream and apply the relaxer to regrowth (or full strands for virgin applications) in clean sections. Processing time is watched actively, not set on a timer and forgotten, because over-processing is where relaxer damage happens. We rinse thoroughly, neutralize with shampoo in multiple passes, deep condition under heat, and finish with a cut to clean up the shape and remove any stressed ends. We blow dry and flat iron finish so you leave seeing the real result. This is a service we do carefully, and it is not one we rush."
      },
      {
        heading: "Who Should Book a Relaxer",
        content: "Relaxer services are for clients whose hair is in healthy enough shape to handle the chemistry, who have experience with relaxers or have decided thoughtfully to start, and who are ready to commit to a maintenance schedule that keeps the hair healthy between touch-ups. We do not push relaxers on natural hair clients who are not asking for them, and we do not take new relaxer clients whose hair is currently compromised — recent bleach, active breakage, scalp inflammation, or heat damage are reasons we will delay and build a treatment plan first. Clients returning to relaxers after years away are welcome; the chair will help map the transition. If you have allergies to relaxer ingredients or a sensitive scalp, tell us when you book at 2902 Sacramento St so we can plan accordingly."
      },
      {
        heading: "How to Prep for the Appointment",
        content: "Do not wash your hair for three to five days before a relaxer appointment. The natural oils on the scalp are the best protection against irritation during processing, and clean scalp is more vulnerable. Do not scratch, comb aggressively, or use hair tools that scrape the scalp in the two to three days before. Skip heavy product the morning of. If you use medications or treatments that affect skin sensitivity, mention them at booking — it can change how we approach base application. Eat a real meal before you come; 135 minutes is a real appointment and scalp services go easier when you are not running low. Bring reference photos if your final cut and style is specific. If you have had any reaction to relaxer in the past, tell us at (510) 690-5274 before booking."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "The relaxer service at Studio Salon is flat $140 and runs about 135 minutes. That price includes the consult, base application, relaxer application, processing supervision, neutralizing shampoo, deep conditioning, cut, and a finish style. A touch-up on regrowth and a full-head virgin application price the same; the difference is in application technique, not service cost. If your hair is significantly longer than mid-back or unusually dense, the appointment may run slightly longer — we will tell you upfront at consult. Bond-protecting treatments are recommended as an add-on and priced before we start. Clients booking their first relaxer at Studio Salon are welcome to come in for a brief consult before committing to the full appointment; we will not take on a service we are not confident the hair can handle safely. Call (510) 690-5274 for a consult."
      },
      {
        heading: "Why Relaxer Work Belongs Here",
        content: "Relaxer services have a reputation, largely earned, for being hard on hair. Studio Salon pushes against that by doing the service the slower way: active processing supervision, proper base, multiple neutralizing passes, and real conditioning follow-up. Our natural hair background means we are also honest about when a relaxer is and is not the right call — if your hair is telling us no, we say so. For clients who have decided a relaxer is what they want, the chair at 2902 Sacramento St delivers it as safely as the chemistry allows. Berkeley and the East Bay do not have many salons doing relaxer work at this level of care, and that is part of why it is on the menu here. Book by calling (510) 690-5274 and mention any relaxer history at the time of booking."
      },
    ],
    relatedServices: ["silk-press", "hair-color", "womens-haircut"],
    relatedLocations: ["berkeley", "oakland", "richmond"],
  },
  {
    slug: "two-strand-twist",
    title: "Two-Strand Twist Styles",
    metaDescription: "Two-strand twists and twist-outs in Berkeley at Studio Salon. Starts at $225, about 4.5 hours. Call (510) 690-5274.",
    h1: "Two-Strand Twist Styles in Berkeley",
    intro: "Two-strand twists are a natural hair staple — worn as a finished style, set for a twist-out, or used as a protective transition between other looks. At Studio Salon, twist sets are done with clean parting, real tension control, and the right product for your texture so the twists hold and the eventual twist-out has definition. Pricing starts at $225 and runs about 265 minutes in the chair. This is a longer, more involved service because the parting and twisting is where the final look is made. We do twists on every length from ear-length to waist-length, and across every natural texture. Call (510) 690-5274 or stop by 2902 Sacramento St to book.",
    sections: [
      {
        heading: "What the Twist Service Includes",
        content: "A two-strand twist appointment at Studio Salon starts with a full cleanse — a shampoo matched to your porosity, followed by a deep conditioner under heat, and a thorough detangle. We blow dry or stretch the hair as needed so the twist base lays clean, then part in sections sized to the twist size you asked for at consult. We apply a setting product matched to your texture and twist from root to tip with consistent tension. The twist itself takes most of the chair time — about 265 minutes total — because careful parting and even tension is what makes the finished style read sculpted instead of frizzy. We finish with a light oil on the scalp and ends, and we walk through setting options for a future twist-out if that is the plan. Book at (510) 690-5274."
      },
      {
        heading: "Who Twist Sets Suit",
        content: "Two-strand twists fit clients across the natural hair spectrum — 3b through 4c textures all take to twist styles with the right product and parting. We see clients who wear the twists as a finished style for one to two weeks, clients setting for a defined twist-out at takedown, and clients using twists as a protective base under scarves or bonnets. Loc clients sometimes book twist sets on freshly retwisted locs; we can scope that as a combo at consult. First-time twist clients are welcome; we walk through maintenance so the set actually lasts. If your hair is shorter than about four inches, twists may not hold well — we will tell you at consult and suggest alternatives. Kids ten and up are taken for twist services with a parent on site. Visit 2902 Sacramento St."
      },
      {
        heading: "How to Prep at Home",
        content: "Come in with hair that is free of heavy buildup but not freshly washed — we handle the wash and deep condition in the appointment because product layering is a core part of how the twists hold. Skip heavy butters and oils for 24 to 48 hours before the appointment. Detangle roughly if you can; a finger detangle is fine. If you have been under a protective style, take it out at least a day before so the hair and scalp can breathe. Bring reference photos for the twist size and any specific styling (parted middle, side part, halo pattern) you want. Eat before you come — 265 minutes is real chair time and most of it is sitting still with active product and active twisting. Bring a charger, snacks, and headphones. Text (510) 690-5274 with questions."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "Two-strand twist sets at Studio Salon start at $225 and run about 265 minutes in the chair. That price covers the full wash, deep conditioning, blow dry or stretch, parting, and the twist itself with finishing products. Pricing scales up from $225 based on length past the shoulders, density, and how small the twists are — smaller twists take significantly more time and more hands-on work. We quote the exact price at consult based on what your hair is actually doing, and we confirm again when you book so there are no surprises. Twist-out setting services (when you come back for a takedown and style) are priced separately. Maintenance refreshes between full twist sets are available at a lower rate. Call (510) 690-5274 for a price quote on your specific hair."
      },
      {
        heading: "Why Book at Studio Salon",
        content: "Twist work looks simple and it is not. The difference between twists that hold for two weeks and twists that frizz by day three is almost entirely in the parting, the product sequence, and the tension — all of which we have been doing for years as a core part of our natural hair work. The chair does not rush sections, does not over-pull at the roots, and does not use a one-product approach for every client. We also set expectations honestly: if your hair is too short, too dry, or too compromised for a twist set to really hold, we will say so and suggest alternatives instead of taking the money and leaving you unhappy. Studio Salon sits at 2902 Sacramento St in Berkeley, easy from most of the East Bay. Call (510) 690-5274 to book."
      },
    ],
    relatedServices: ["natural-hair-styling", "loc-maintenance", "braids"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "eyebrow-waxing",
    title: "Eyebrow Waxing",
    metaDescription: "Eyebrow waxing in Berkeley — quick brow shaping at Studio Salon. $20, about 30 minutes. Call (510) 690-5274.",
    h1: "Eyebrow Waxing in Berkeley — Fast, Clean Shaping",
    intro: "Eyebrow waxing is a small service with a big effect on how the whole face reads. At Studio Salon, we keep brow appointments quick — about 30 minutes — and priced right at $20, so they are easy to add before or after another appointment, or to book as a standalone stop. We shape based on your natural brow line and bone structure, not a trend template, so the result reads like a cleaned-up version of your own brows rather than a stamped-on arch. The chair sees men and women, first-time wax clients, and regulars coming in every three to four weeks. Call (510) 690-5274 or walk into 2902 Sacramento St to book — we often have same-week openings for brows.",
    sections: [
      {
        heading: "What the Brow Service Includes",
        content: "An eyebrow waxing appointment at Studio Salon runs about 30 minutes at $20. It starts with a quick consult — we look at your brow line, talk about the shape you are after, and flag any skin sensitivity or recent products we should know about. We cleanse the area, apply a skin-appropriate wax, pull cleanly in the direction of growth, and tweeze any strays outside the wax zone. We do not over-shape — the goal is a defined, symmetrical brow that still reads as yours. We finish with a soothing post-wax product to calm the skin and close pores, and we check both sides in a mirror together before you leave. Add-on brow tinting is not currently on the menu, but we are happy to point you to a trusted neighbor for that. Call (510) 690-5274."
      },
      {
        heading: "Who Books Brow Waxing",
        content: "Brow waxing at Studio Salon fits anyone who wants a fast, affordable brow shape-up from a chair that also understands how to complement Black and brown skin tones. We see women booking brows with their hair appointments as a combo, men coming in for a quick clean-up between haircuts, first-timers nervous about waxing, and regulars on a four-week cycle. If you have sensitive skin, a recent chemical peel, or are using retinol or exfoliating actives, tell us before we wax — we may need to reschedule or swap methods. Anyone under sixteen should come with a parent. We do not do brow waxing on clients who are actively sunburned or have broken skin in the brow area. Stop by 2902 Sacramento St or call to ask about same-week availability at (510) 690-5274."
      },
      {
        heading: "How to Prep Before the Wax",
        content: "Let your brows grow out for at least two weeks before a waxing appointment so there is enough hair for the wax to grip. Do not tweeze in the meantime — stray hairs make the final shape job easier, not harder. Skip retinol products, exfoliating acids, and aggressive scrubs on the brow area for 48 hours before. Do not come in directly from an intense sun exposure or a fresh skin treatment. Arrive with a clean face if possible — heavy makeup around the brow can be removed in-chair but it adds a minute. If you have a reference photo for brow shape, bring it; we will still shape to your natural bone structure but it helps to know your preferences. Text (510) 690-5274 if you are running late or need to shift the appointment."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Eyebrow waxing at Studio Salon is $20 flat and takes about 30 minutes in the chair, including the consult, the wax itself, any clean-up tweezing, and the soothing finish. Because the service is short, we are often able to fit brow appointments into the same day, especially if you are already on the schedule for another service. If you want to book brows alongside a hair appointment — before or after a silk press, loc retwist, or cut — tell us at booking and we will stack the times so you are in and out efficiently. Regulars on a three to four week cycle can book their next brow appointment before leaving the current one. Prices are the same whether you are a first-time client or a regular. Call (510) 690-5274 to schedule at 2902 Sacramento St."
      },
      {
        heading: "Why Brows Here",
        content: "Brows are small but visible, and the wrong shape can throw off the whole face. Studio Salon approaches brow waxing the same way the rest of the chair works: honest consult, careful technique, no pushing a trend that does not suit your bone structure. We are not trying to turn your brows into someone else's — the goal is a cleaner version of what you already have. The quick turn and $20 price point make this a low-friction service to try, and for clients already booking hair services at 2902 Sacramento St, brows are an easy combo. Berkeley has plenty of brow options, but few are attached to a chair that also understands texture, skin tone, and the rest of your hair care in one place. Call (510) 690-5274 to add brows to your next visit."
      },
    ],
    relatedServices: ["mens-hair-barbering", "natural-hair-styling", "silk-press"],
    relatedLocations: ["berkeley", "albany", "kensington"],
  },
  {
    slug: "sisterlocks-microlocs",
    title: "Sisterlocks & Microlocs",
    metaDescription: "Sisterlocks and microlocs maintenance, retightening, and repair in Berkeley at Studio Salon. Call (510) 690-5274 to scope your grid.",
    h1: "Sisterlocks and Microlocs in Berkeley",
    intro: "Sisterlocks and microlocs are a long-game commitment — smaller than traditional locs, more precise in the grid, and built around a maintenance rhythm that runs years, not months. At Studio Salon on Sacramento Street, we work with clients already living with a sisterlocks or microlocs install, handling retightening, repair, and styling between visits. The most common question we get is what are microlocs vs sisterlocks — sisterlocks is a trademarked method with a specific tool and a certified-installer pricing structure, while microlocs is the broader umbrella for any small-diameter loc done with various techniques. The grid sizes overlap, the maintenance cadence is similar, and either way the install is a multi-day appointment that usually runs into four figures. Clients come to us as a sisterlocks consultant in Berkeley for the in-between work: monthly or six-week retightenings, repair on locs that have slipped or unraveled, and the occasional styling session for events. Call (510) 690-5274 to scope where you are in the journey before booking.",
    sections: [
      {
        heading: "What a Maintenance Visit Covers",
        content: "A sisterlocks or microlocs maintenance visit at Studio Salon opens with a real grid check. We look at every loc base individually — these are small, and what works on traditional loc maintenance does not translate cleanly. We use the interlocking pattern your installer set up, matching the rotation count and direction so the locs stay even and the parts stay clean. The retightening itself takes about two to three hours for a standard head; longer or denser grids run longer. We work loc by loc, not in big sections, and we pause every quarter to check tension and symmetry. We do not switch your method mid-stream — if you came in on the four-rotation sisterlocks pattern, we keep that pattern. Light repair on a few slipped locs is included; major reconstruction is quoted separately. We finish with a gentle cleanse and a clean part conversation. Book at (510) 690-5274."
      },
      {
        heading: "Who This Service Is For",
        content: "This chair is for clients who already have sisterlocks or microlocs installed and need a steady hand for retightening between visits with their original installer, or who are looking for an ongoing maintenance home in the East Bay. We see clients commuting from Oakland, Albany, and El Cerrito because consistent microlocs care is hard to find. We also work with clients considering microlocs who want a real conversation about cost, time, and lifestyle fit before committing to an install — sisterlocks consultations usually mean a multi-day install plus years of monthly retightenings, and that is a real budget line. We do not currently offer the full sisterlocks install at Studio Salon; we focus on maintenance, repair, and styling. If your locs are still in the budding stage, we will scope what they need without forcing a technique that does not match your grid. Stop by 2902 Sacramento St for a fit check."
      },
      {
        heading: "How to Prep for Your Visit",
        content: "Come in with dry, clean-ish locs — no fresh oil, no setting product, no wraps that have been on for days. If you washed at home in the last two days, that is fine. Skip scalp oiling the morning of so we can read root health honestly. Bring a note about who installed your locs and what method they used; if you have a maintenance card or photos from your install, even better. Mention any slipped, unraveling, or thinning locs you have noticed since your last visit so we can flag them on the grid check. Microlocs and sisterlocks are small and patient work — plan for two to three hours minimum, eat first, and bring something to read. Parking on Sacramento Street is usually fine. Call (510) 690-5274 if your appointment changes or you need to add repair time to a maintenance booking."
      },
      {
        heading: "Pricing and Time in the Chair",
        content: "Sisterlocks and microlocs maintenance at Studio Salon is priced based on density, grid size, and how long it has been since your last retightening. A standard retightening on a head that is on a four to six week schedule typically lands in the $150 to $250 range and takes two to three hours in the chair. Heads coming in past eight weeks, or with a lot of slip and unraveling to repair, run longer and cost more — we quote at consult, not on a flat menu. The first visit takes a little extra time because we are reading your grid for the first time and building notes for future appointments. Sisterlocks-certified installers typically charge $1,200 and up for the install itself; we do not currently install but we are happy to refer. Maintenance pricing is confirmed at booking with no chair-time surprises."
      },
      {
        heading: "Why Studio Salon Berkeley",
        content: "Microlocs care lives or dies on consistency — same hands, same technique, same notes between visits. Studio Salon Berkeley keeps a maintenance file for sisterlocks and microlocs clients so the next appointment picks up exactly where the last one ended, including which direction each loc rotates and where the grid has been adjusted. We do not freelance on technique. If your installer set you up with a specific pattern, we keep it. The chair on Sacramento Street has been doing loc work for years and reads small grids the way most chairs read regular locs — calmly and without rushing. If you have been driving across the Bay for retightenings and want a closer maintenance home in Berkeley or Oakland, this is a chair worth trying. Call (510) 690-5274 for a consult before booking your first appointment."
      },
    ],
    relatedServices: ["loc-maintenance", "loc-repair-detox", "natural-hair-styling"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "loc-repair-detox",
    title: "Loc Repair & Detox",
    metaDescription: "Loc repair, reattachment, and loc detox in Berkeley at Studio Salon. Same-week openings available. Call (510) 690-5274 to book.",
    h1: "Loc Repair, Reattachment, and Detox in Berkeley",
    intro: "Locs do not stay in perfect shape forever — they slip, they thin at the roots, they marry each other, and over the years they pick up product buildup that no amount of regular shampooing handles. At Studio Salon, loc repair and loc detox are real services, not afterthoughts squeezed into a retwist appointment. Loc repair covers reattaching broken locs, rebuilding thinning bases, separating locs that have merged, and reweaving the ends of locs that have unraveled past the point of palm rolling. Loc detox is a deep cleanse — a multi-step process that pulls residue out of the loc shaft so the locs feel lighter, smell cleaner, and respond to product the way they used to. Both services are heavy in our calendar because loc repair berkeley searches and loc detox near me searches usually land on us in panic mode, often the same week the client noticed the problem. Call (510) 690-5274 and we will get you in fast.",
    sections: [
      {
        heading: "What Repair and Detox Look Like",
        content: "A loc repair appointment starts with a full assessment — every loc that is concerning gets looked at individually, and we map out which ones need reattachment, which need root rebuilding, which need separation, and which need to be left alone because the existing structure is doing fine on its own. Reattachment is done with a needle-and-thread technique on broken locs that still have viable structure on both ends; root rebuilding uses small bits of matched hair to reinforce a thinning base. Loc detox runs differently: we cleanse with a clarifying shampoo, soak the locs in a clay or apple cider vinegar bath for the right amount of time for your buildup level, rinse cool, deep condition under heat, and dry the locs fully before any retwist or styling. Both services finish with a scalp check and a maintenance plan."
      },
      {
        heading: "Who Books These Services",
        content: "Loc repair is for established loc clients who have noticed something specific — a broken loc, a thinning patch at the crown, locs marrying at the base, or unraveling ends that palm rolling will not fix. We also see clients who self-maintain and want a trained eye on the grid before a problem gets worse. Loc detox is for clients with mature locs who feel buildup — heavy locs that do not respond to product, smell that lingers after a wash, or a dull look that no oil fixes. Both services see clients in their first two years of locs as well, but the heavier book is from clients five years and deeper. If you have an active scalp condition or a fresh injury, reschedule until it heals. Drop in at 2902 Sacramento St for a fit assessment if you want to scope before booking."
      },
      {
        heading: "How to Prep at Home",
        content: "For loc repair, come in with clean, dry locs and no recent retwist on the locs you want repaired. We cannot rebuild a base that is already tightened down. Skip oiling the morning of. If you have photos of how the locs looked before the damage started — a year ago, two years ago — bring them; reference helps us match technique. For loc detox, come in with locs that have not been retwisted in the last two weeks, because the soak loosens roots and a fresh retwist will not survive the bath. Skip heavy butters for at least a week before. Eat before you come — both services run two to four hours depending on how much work the locs need. Text (510) 690-5274 if your appointment shifts or you need to add a wash service."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Loc repair at Studio Salon is priced per problem because every head is different — a single broken loc reattachment is on the lower end, while rebuilding multiple thinning bases or separating a heavy patch of married locs sits higher. Most repair appointments land in the $100 to $300 range and take one to three hours in the chair. We quote at the start of the visit after the grid assessment, not on a flat menu, so you know the number before any work begins. Loc detox is typically a flat $150 to $200 service depending on length and density, and runs about two hours including the soak and dry time. Repair plus detox in the same visit can sometimes be done together; we will tell you at consult whether that is realistic for your locs. Call (510) 690-5274 for a same-week opening."
      },
      {
        heading: "Why This Chair for Loc Repair",
        content: "Loc repair and detox are services where most chairs do not have the patience or the experience — repair in particular is a craft, and the wrong technique can make a thin loc thinner. Studio Salon Berkeley has done years of loc work, which means the chair has seen most of what can go wrong on a head of locs and knows the real fixes from the cosmetic ones. We will tell you straight when a repair is worth doing and when the better call is to clip and start over on a specific loc. Detox we treat as a real chemistry process, not a marketing add-on — the soak time is read off your buildup level, not a stock recipe. Clients searching loc repair near me in panic mode tend to land here and stay. Call (510) 690-5274 for a same-week visit at 2902 Sacramento St."
      },
    ],
    relatedServices: ["loc-maintenance", "sisterlocks-microlocs", "natural-hair-styling"],
    relatedLocations: ["berkeley", "oakland", "el-cerrito"],
  },
  {
    slug: "bridal-wedding-hair",
    title: "Bridal & Wedding Hair",
    metaDescription: "Bridal and wedding hair stylist in Berkeley — trial plus day-of at Studio Salon. Book 6-12 months out. Call (510) 690-5274.",
    h1: "Bridal and Wedding Hair Stylist in Berkeley",
    intro: "Wedding hair is its own service — different timing, different prep, different stress level than a regular appointment. At Studio Salon, bridal and wedding hair runs as a two-visit minimum: a trial appointment six to twelve months before the wedding date, and the day-of style on the wedding day itself. Brides searching for a bridal hair stylist berkeley or wedding hair for black women bay area are usually planning a year out, often booking the entire wedding party at once, and the appointments add up fast. We work with bridal parties of two to ten and beyond, scoping out who needs what at the trial visit so the wedding morning runs on time. Pricing for the bride starts around $250 for the trial plus $350 to $500 for the day-of look; party members price separately based on the style. We block off real time for wedding bookings — there is no rushing a bride. Call (510) 690-5274 to talk dates.",
    sections: [
      {
        heading: "Trial and Day-of Process",
        content: "The trial appointment runs about two to three hours and covers the real conversation: what dress, what veil, what setting, what photos you are after, what your hair has been doing in the months leading up. We try the actual style — pinned updo, sleek pony, half-up half-down, twist-out set, silk press finish, or a wig install if that is part of the plan — and photograph it from every angle. Notes go in your file. The day-of appointment is about the same length but runs faster because we are working from a known plan; we cleanse if needed, build the foundation, set the style, and finish with the right hold for the venue and the weather. We work alongside makeup artists when you bring one, and we coordinate timing with the photographer if there is a getting-ready window. Bring your veil, comb, and any accessories to the trial."
      },
      {
        heading: "Who This Service Is For",
        content: "This service is for brides, bridesmaids, mothers of the bride and groom, flower girls, and any wedding party member who wants their hair professionally done. We see brides on every texture — natural, locs, relaxed, with extensions, with a wig — and we have the chair experience to match the look to your hair, not force a style that fights the texture. Brides on textured hair specifically tend to land here because we read 4-type hair as the default, not a special accommodation. Bridal parties from Berkeley, Oakland, Emeryville, and the larger East Bay are regulars on our calendar; we also serve destination brides flying in for the trial visit and returning for the wedding morning. Call (510) 690-5274 to talk timing — six to twelve months out is the right window for most weddings, and peak wedding season books up fast."
      },
      {
        heading: "How to Prep for Trial and Day-of",
        content: "For the trial, come in with hair that is clean within 48 hours, detangled, and free of heavy product. Bring photos of your dress, your veil if you are wearing one, the venue and lighting if you have visuals, and reference photos for hair direction. If you are getting your hair colored, cut, or treated before the wedding, schedule those services before the trial so we are working with the real final hair. For the day-of, the prep depends on the style we agreed on — sometimes a fresh wash is part of the morning, sometimes the hair sits one or two days dirty for hold. We tell you at the trial which one applies. Eat breakfast on wedding morning. Bring water. Confirm your timing with us a week out by calling (510) 690-5274 to lock the schedule."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "Bridal hair at Studio Salon prices in two parts. The trial appointment runs about two to three hours and starts at $250 for the bride; this is a real working session, not a free consult, and the price covers the time and the photographed plan that goes in your file. The day-of style runs $350 to $500 for the bride depending on complexity — a sleek pulled-back style is at the lower end, a sculpted updo with a wig install or detailed parting moves toward the top. Bridal party members price separately at $100 to $250 per person for the day-of style depending on what they are getting. Travel to a getting-ready location is available for some bookings and quoted on top — the Berkeley/Oakland radius is straightforward, further venues need more lead time and an earlier booking conversation."
      },
      {
        heading: "Why Studio Salon for Your Wedding",
        content: "Wedding hair has to land twice — once at the trial and once on the actual day, in different lighting, different mood, different hours of wear. Studio Salon Berkeley has years of bridal experience on textured hair specifically, which matters because bridal hair on a bride who has been chasing definition and shine on her natural curls all year is not the same job as bridal hair on someone with bone-straight extensions. We do not push trends that will not photograph well. We do not overwork the hair the morning of the wedding to the point it falls apart by reception. The chair on Sacramento Street is a calm space the morning of, not a hectic salon floor. Call (510) 690-5274 to talk through your wedding date and your party — the earlier the better."
      },
    ],
    relatedServices: ["natural-hair-styling", "silk-press", "sew-in-weave"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "kids-braids-natural-styles",
    title: "Kids' Braids & Natural Styles",
    metaDescription: "Kids' braids and natural hair styling in Berkeley at Studio Salon — gentle tension, family-friendly chair. Call (510) 690-5274.",
    h1: "Kids Braids and Natural Hair Styling in Berkeley",
    intro: "Kids' hair is its own service. The product, the tension, the patience, the chair time — all different from an adult appointment. At Studio Salon, we book kids' braids and natural styles with that in mind. Parents searching for a kids braids salon berkeley or kids knotless braids berkeley are usually looking for a chair that will not pull on a child's hairline, will keep the appointment short enough that a child can sit through it, and will produce a style that lasts the two to four weeks parents need between visits. We see kids ages six and up regularly: cornrows, simple knotless, two-strand twists, beaded styles, twist-outs, and wash-and-style appointments. Pricing runs $60 to $200 depending on the style and age. We use gentle tension from the very first row because kids' hair is still developing and a tight install on a six-year-old can affect the hairline for life. Call (510) 690-5274 to book.",
    sections: [
      {
        heading: "What a Kids' Appointment Looks Like",
        content: "A kids' braid or natural style appointment at Studio Salon opens with a quick conversation between us, the parent, and the child. We talk about what the child wants, what the parent has in mind, and what will actually be comfortable for sitting. We cleanse and condition with a gentle shampoo, detangle in patient sections with the child holding their head however is most comfortable, and stretch the hair on low heat or air dry. Then we braid or twist with low tension — kids' edges are not a place to test how tight is too tight — using the smallest comfortable parts for the style. We finish with a light scalp oil and a wrap-for-bed conversation with the parent. Beaded styles get accent beads added at the end. Total chair time runs 60 minutes for a wash-and-style up to three hours for a small knotless set."
      },
      {
        heading: "Who This Chair Welcomes",
        content: "This chair welcomes kids ages six and up for braids and most styling. Younger children can be booked for a wash-and-style or a simple cornrow set with a parent on site and willing to help with the comfort side of the appointment. We see kids whose parents do their hair at home and want a professional reset, kids in active hair journeys (transitioning, growing out, recovering from a bad install elsewhere), and recurring family clients who book monthly or every six weeks. Texture is not a limiter — every type from loose curl to dense 4c is welcome. We do not do chemical services on kids under 16 except in unusual cases discussed at consult. If your child has a sensitivity or a recent scalp issue, mention it at booking. Studio Salon is at 2902 Sacramento St, easy from Berkeley, Oakland, Albany, and El Cerrito for a family-friendly chair."
      },
      {
        heading: "How to Prep Your Child",
        content: "Wash and detangle the night before if you can — a clean stretched base saves an hour of chair time and is gentler on the child. Skip heavy butters and gels the morning of. Bring snacks the child likes, a charged tablet or phone with a show queued up, and headphones. A small blanket for chairs that run cold is welcome. Bring a beanie or silk scarf for the ride home. Beads, hair ties, and any extension hair if the style calls for them should come with you — we will give you a count at booking. If your child has any sensitivity to product smells or sounds (clipper buzz, blow dryer), mention it; we adjust setup. Call (510) 690-5274 ahead with questions about a specific style or appointment length."
      },
      {
        heading: "Pricing and Time in the Chair",
        content: "Kids' services at Studio Salon price in the $60 to $200 range. A wash-and-style with twists or a basic cornrow set sits at the lower end, around 60 to 90 minutes. Mid-size knotless installs on kids run $120 to $180 and take two to three hours; we keep these shorter than adult installs because kids cannot reasonably sit longer. Beaded styles add a small fee for the beads and chair time to attach them. Recurring kids' clients on a four to six week cycle can book the next appointment before leaving the current one and we will hold the time. Pricing is confirmed at booking and we do not move it up at the chair. Hair for extension styles is separate. Call (510) 690-5274 to scope the right style and budget for your child's hair."
      },
      {
        heading: "Why Studio Salon for Family Hair",
        content: "Kids' hair work is patience first and skill second, in that order. The chair on Sacramento Street treats kids' appointments as real services, not throwaway add-ons — same care, same low-tension technique, same scalp-first approach we use on adults. We do not braid tight to make a style last longer at the cost of a child's edges. We do not rush a child who needs a break. We do not push styles that do not suit their age or their hair. Parents who have watched stylists be impatient with their kids elsewhere tend to come here once and stick around for the recurring book. If you are looking for a Berkeley salon that takes textured kids' hair seriously, call (510) 690-5274 to set up a first appointment at 2902 Sacramento St."
      },
    ],
    relatedServices: ["braids", "natural-hair-styling", "two-strand-twist"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "keratin-treatment",
    title: "Keratin Treatment",
    metaDescription: "Keratin smoothing treatments for natural and textured hair in Berkeley at Studio Salon. $200-$350. Call (510) 690-5274.",
    h1: "Keratin Smoothing Treatments in Berkeley",
    intro: "Keratin treatments are a real option for clients who want manageability — easier wash days, less frizz, more shine — without the long-term commitment of a chemical relaxer. At Studio Salon, we do keratin smoothing on natural hair and lightly textured hair as a managed, careful service: clarify the cuticle, apply the treatment, process under heat, and seal with a flat iron pass that is calibrated for your hair, not turned to maximum out of habit. Searches for keratin treatment oakland and keratin treatment for natural hair berkeley land here because most chairs in the area either do not offer it or do not do it with textured hair in mind. The full service runs $200 to $350 depending on length and density, and takes about three hours in the chair. Results last three to five months on most heads. We are honest at consult about whether your hair is a good candidate or whether you are better served by a different service. Call (510) 690-5274.",
    sections: [
      {
        heading: "What the Keratin Service Covers",
        content: "A keratin treatment at Studio Salon starts with a full consult — chemical history, recent color, current condition of the cuticle, and the manageability goal you are after. We clarify with a deep-cleanse shampoo to strip every bit of buildup off the strand, because keratin only bonds where the hair is genuinely clean. We blow dry partially, apply the treatment in saturated sections from root to tip, and process under controlled heat for the time the formula calls for. Then we seal with a flat iron pass at the right temperature for your hair — never higher than the chemistry needs, because keratin done at maximum heat damages the same hair the treatment is supposed to help. We rinse on the schedule the formula specifies (some are no-rinse, some need 24 to 72 hours), and we walk through aftercare. Call (510) 690-5274."
      },
      {
        heading: "Who Keratin Treatments Suit",
        content: "Keratin treatments fit clients who want their hair more manageable — easier to detangle, faster to dry, smoother in shape — without losing all of their natural curl. Looser textures (3a to 3c) get a smoother result that still keeps movement; tighter textures (4a to 4c) get a softer curl pattern with much more manageability but the natural shape is mostly preserved. Clients who silk press regularly often find a keratin treatment cuts their styling time at home in half. Color-treated clients can do keratin if the hair is in healthy enough shape; we will scope the bond strength at consult and may recommend a treatment plan first. We do not recommend keratin for clients who want their curls completely gone — that is a relaxer conversation. We also do not recommend it for clients with significant heat damage or active breakage. Stop by 2902 Sacramento St."
      },
      {
        heading: "How to Prep for the Service",
        content: "Skip washing for at least 24 hours before the appointment — the clarifying shampoo at the start of the service handles the prep wash. Avoid heavy oils, leave-ins, and butters for two to three days before so the cuticle is open and clean. Stop chemical color services for at least two weeks before a keratin treatment if possible; if you need to color and keratin in the same window, the color comes first and the keratin a couple of weeks later, never the other way around. Skip heat styling for the week leading in. Eat before you come. Plan for three hours in the chair plus the rinse-out timeline at home depending on the formula. If you have any sensitivity to formaldehyde or strong chemical smells, mention it at booking; we use lower-aldehyde formulas but we want to know."
      },
      {
        heading: "Pricing and Appointment Length",
        content: "Keratin treatments at Studio Salon price in the $200 to $350 range. Shoulder-length hair on a medium-density head sits at the lower end, around three hours of chair time. Longer or denser hair moves up the price scale and uses the full three to four hour window. The price covers the consult, clarifying wash, treatment application, processing, flat iron seal, and aftercare conversation. The aftercare schedule (when to rinse, what shampoo to use, how to sleep on it) varies by formula and we walk through it before you leave. A maintenance keratin every three to five months keeps the result fresh; clients who book on cycle get priority on the calendar. Color services scheduled in proximity to keratin are coordinated to protect both. We do not price keratin off a flat menu — every quote is built at consult. Call (510) 690-5274."
      },
      {
        heading: "Why This Chair for Keratin",
        content: "Keratin work on textured hair is a craft most chairs in the East Bay are not set up for — they either skip the service entirely or do it the same way they would on straight hair, which is the wrong call. Studio Salon Berkeley does it with textured hair as the default, which means temperature, formula, and processing time are all read off your actual cuticle, not a generic protocol. We are also honest at consult about whether keratin is the right service. If your hair is too compromised, or if you really want a relaxer-level result, we will say so before taking the booking. Clients who have had keratin done elsewhere with brittle, over-processed results tend to find the chair on Sacramento Street on the second try and stay. Call (510) 690-5274 to scope a keratin appointment."
      },
    ],
    relatedServices: ["silk-press", "natural-hair-styling", "hair-color"],
    relatedLocations: ["berkeley", "oakland", "albany"],
  },
  {
    slug: "lace-frontal-install",
    title: "Lace Frontal Install",
    metaDescription: "Lace frontal install and customization in Berkeley at Studio Salon — bleached knots, plucked, tinted to skin. Call (510) 690-5274.",
    h1: "Lace Frontal Install in Berkeley",
    intro: "A lace frontal install is the difference between a sew-in that reads as natural and one that does not. Done right, the frontal sits flat against the hairline, the lace melts into the skin, the knots are bleached down so the parting reads scalp-colored, and the install is as undetectable as the client wants it to be. At Studio Salon, lace frontal installs are a specialty — we customize the frontal in chair (bleach knots, pluck the hairline, tint the lace to match your skin, install with the right adhesive or sewn-in method) and we build the underlying braid foundation to support a frontal install specifically. Searches for lace frontal install oakland and lace frontal install bay area are heavy commercial intent, and clients land here because they want the customization, not just the install. Pricing runs $250 to $400 plus the cost of the frontal, and the appointment takes about four hours. Call (510) 690-5274 to scope the look.",
    sections: [
      {
        heading: "What the Install Covers",
        content: "A lace frontal install at Studio Salon runs about four hours and covers everything from prep to finish. We open with a cleanse and deep condition of the natural hair, blow dry on tension, and braid the foundation in a frontal-supportive pattern — typically straight-back with a clean line at the front for the frontal to sit against. The frontal itself gets customized: we bleach the knots if they are not already done, pluck the hairline to a realistic density, tint the lace to your skin tone, and trim the lace to the right shape for your forehead and temple line. Install can be glue, glueless with a band, or sewn-in along the front edge — we choose the method based on your scalp sensitivity, the duration of wear, and the look. We finish with a cut-in style and any blending the look needs. Call (510) 690-5274."
      },
      {
        heading: "Who This Service Fits",
        content: "Lace frontal installs fit clients who want a fully styled look — versatile parting, full coverage, hairline included — for two to six weeks of wear. We see clients prepping for events (weddings, photoshoots, reunions, travel), clients who rotate frontals as their main protective style, and first-time frontal clients who want guidance on customization and at-home care. Clients with sensitive scalps or a history of glue reactions can book glueless or sewn-in installs instead. Clients with thinner edges should mention it at booking — we adjust the install method to keep zero tension on the perimeter. Berkeley, Oakland, Emeryville, and the larger Bay Area are regular service zones for frontal installs. We do not currently sell frontals; you bring the unit. If you need help picking a frontal, send a photo at booking and we will give you sizing and texture guidance. Call (510) 690-5274."
      },
      {
        heading: "How to Prep at Home",
        content: "Come in with hair washed within 48 hours, detangled, and free of heavy product. Bring the frontal — pre-bleached or not, we can handle either — plus any bundles or wefts the install needs. If you are going for a specific cut-in style or hairline shape, bring photos. Skip oils on the hairline the day of so the adhesive (if you are going glue) sits cleanly. If you have any history of skin reaction to lace adhesives, tell us before booking — we have glueless options. Eat a real meal. Plan for four hours in the chair. Bring a charger, headphones, and water. If you are coming from across the Bay, build in time for parking on Sacramento Street. Text (510) 690-5274 if anything shifts on appointment day."
      },
      {
        heading: "Pricing and Time Breakdown",
        content: "Lace frontal installs at Studio Salon price in the $250 to $400 range for the install itself and run about four hours in the chair. The price covers the natural hair prep, braided foundation, frontal customization (knot bleach, plucking, tint, trim), the install, and the finish style and cut-in. The frontal unit and any bundles are separate and brought by the client. If your frontal arrives uncustomized — knots not bleached, hairline not plucked — we handle the work in chair as part of the install fee for most cases; very heavy customization (full plucking from a dense unit) is sometimes quoted up at consult. Reinstall on a previously customized frontal you already own is a lower-cost service since the customization work is done. Call (510) 690-5274 with the unit you have in hand for a more specific quote."
      },
      {
        heading: "Why Studio Salon for Frontals",
        content: "Frontal work is where most install chairs in the East Bay get loose — the install itself can be done quickly, but the customization is what separates a believable frontal from one that screams wig from across the room. Studio Salon Berkeley does the customization in chair as a core part of the service, which means the frontal you walk out with is matched to your skin and your hairline, not a stock unit slapped on. We are also careful with adhesive and tension on the perimeter; thin edges are not a place to be sloppy. The chair on Sacramento Street has been doing frontal work long enough that we have an opinion on most major frontal brands and can save you the wrong purchase before the install. Call (510) 690-5274 to book or to talk through a frontal you are considering buying."
      },
    ],
    relatedServices: ["sew-in-weave", "wig-install-customization", "quick-weave"],
    relatedLocations: ["berkeley", "oakland", "emeryville"],
  },
  {
    slug: "wig-install-customization",
    title: "Wig Install & Customization",
    metaDescription: "Wig install and customization in Berkeley at Studio Salon — chemo, alopecia, and styling clients welcome. Call (510) 690-5274.",
    h1: "Wig Install and Customization in Berkeley",
    intro: "Wigs are not what they were a decade ago. Lace, density, hairlines, and customization have all moved forward, and a properly installed and styled wig now reads as natural hair to most observers. At Studio Salon, wig install and customization is a real service for two big client groups: clients in active medical hair loss situations (chemo, alopecia, post-surgical) who want a wig that reads as a normal hair routine, and clients using wigs as a versatile styling option in their broader hair life. Both groups want the same thing — a unit that fits the head, sits on the right hairline, has bleached knots, plucked density, and a styling cut that suits the face. Searches for wig install berkeley and wig customization near me find us because we specialize in the customization side, not just the install. Pricing for a full customize-plus-install runs $200 to $400 depending on the unit and the install method. Call (510) 690-5274.",
    sections: [
      {
        heading: "What a Wig Session Covers",
        content: "A wig install and customization session at Studio Salon starts with the unit on a mannequin head before it goes on yours. We assess what the wig actually needs: knot bleaching, plucking the hairline to a believable density, tinting the lace to your skin tone, trimming the lace edge cleanly, and any cut-in or styling work to match your face. Customization is anywhere from one to three hours depending on the wig's starting point. The install itself runs differently depending on method — glueless wig with combs and a band, glue install for longer wear, or a sewn-down install where we braid a foundation underneath. We work with full lace, lace front, 360, U-part, and headband wigs. We finish with the styled cut and a wrap-for-bed conversation. Call (510) 690-5274 to scope a session."
      },
      {
        heading: "Who Books Wig Services",
        content: "Wig clients at Studio Salon split roughly in half. The first group is clients in medical or hair-loss situations — chemo treatment, alopecia areata, alopecia totalis, post-surgical, or significant traction damage — who need a wig that reads as their daily hair and want the chair experience to be calm and patient. We treat these appointments with the time and care they call for, and we coordinate with cap fit, scalp comfort, and any sensitivities the client mentions. The second group is clients using wigs as part of broader styling — protective style rotation, special events, or just wanting versatility week to week. Both groups get the same level of customization. We do not sell wigs at the salon; you bring the unit, or we can refer you to vendors we have worked with. Call (510) 690-5274 if you are unsure what unit fits your needs."
      },
      {
        heading: "How to Prep for the Appointment",
        content: "For an install, come in with your natural hair washed, detangled, and either braided down already or ready to be braided in chair (we can handle the foundation as part of the appointment). For customization-only sessions where the wig stays on the mannequin, just bring the unit and reference photos for the final look. If you are in active medical treatment and have a sensitive scalp, mention it at booking and we will plan for glueless install methods and adjust the chair time accordingly. Bring the wig in its original packaging if it is new, or as you store it if it is one you have worn. If you have specific styling goals — a particular cut-in, a particular hairline shape — bring images. Plan for two to four hours depending on the customization needed. Call (510) 690-5274."
      },
      {
        heading: "Pricing and Time in the Chair",
        content: "Wig install and customization at Studio Salon prices in the $200 to $400 range. A full customize-plus-install on a unit that needs significant work (heavy plucking, knot bleaching, tinting, trimming, cut-in) sits at the upper end and uses three to four hours in the chair. A reinstall on a wig you have already customized — or that came pre-customized — is at the lower end, around $150 to $200, and takes about ninety minutes to two hours. We quote on the unit you actually bring, not on a flat menu, because two wigs in the same price range can take wildly different amounts of work. Maintenance services like wig washing, restyling between installs, and re-plucking are priced separately and welcome as standalone appointments. Call (510) 690-5274 with the unit details for a specific quote."
      },
      {
        heading: "Why This Chair for Wig Work",
        content: "Wig work, especially for clients dealing with medical hair loss, is a service where chair experience matters as much as technical skill. Studio Salon Berkeley treats these appointments with patience and privacy, and we do not rush. The customization side of the work — bleach knots, pluck, tint, trim, cut — is where most chairs cut corners, and where ours does not. We have years of textured hair experience as the foundation, which translates directly into wig styling because most of the wigs we install are made of texture that needs to be read and worked, not assumed. Clients in chemo or alopecia journeys often tell us this is the first appointment in months that felt calm — that is intentional. Call (510) 690-5274 or stop by 2902 Sacramento St to scope an install or talk through a unit you are considering."
      },
    ],
    relatedServices: ["lace-frontal-install", "sew-in-weave", "natural-hair-styling"],
    relatedLocations: ["berkeley", "oakland", "el-cerrito"],
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

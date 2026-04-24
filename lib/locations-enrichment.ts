export interface LocationEnrichment {
  nearbyLandmarks: string[];
  transitAccess: string[];
  localContext: string;
}

export const locationEnrichment: Record<string, LocationEnrichment> = {
  berkeley: {
    nearbyLandmarks: [
      "UC Berkeley campus",
      "Ashby BART Station",
      "Gourmet Ghetto / Vine Street corridor",
      "Elmwood District",
    ],
    transitAccess: [
      "Ashby BART (~15 min walk)",
      "AC Transit 72 / 72M / 72R (San Pablo Ave)",
      "AC Transit 51B (Telegraph → Shattuck)",
      "AC Transit 18 (Downtown Berkeley BART connection)",
    ],
    localContext:
      "Berkeley's mix of long-time residents, UC students, and East Bay professionals means demand for skilled natural hair care is high — and expectations are even higher. Clients here range from graduate students starting their first set of locs before a semester abroad to Elmwood families who have been seeing Britnee for years. Berkeley clients tend to research carefully, ask detailed questions, and keep coming back once they find a stylist they trust.",
  },

  oakland: {
    nearbyLandmarks: [
      "Rockridge BART Station",
      "Lake Merritt",
      "Temescal District",
      "Uptown Oakland",
    ],
    transitAccess: [
      "Ashby BART (~15 min walk from salon)",
      "Rockridge BART → AC Transit 51B",
      "AC Transit 72 / 72R (San Pablo Ave)",
      "AC Transit 51B (College Ave → Telegraph)",
    ],
    localContext:
      "Oakland is one of the most culturally significant cities in the Bay Area for Black hair care, yet finding a skilled loc specialist in North Oakland remains harder than it should be. Clients from Rockridge, Temescal, and Lake Merritt cross the city line to Studio Salon because Britnee's expertise in locs and textured hair is exactly what the neighborhood lacks. Uptown and Downtown Oakland clients often fit appointments between lunch or evening plans, making the short drive up Telegraph or San Pablo a practical choice.",
  },

  albany: {
    nearbyLandmarks: [
      "Solano Avenue shopping corridor",
      "Albany Hill Park",
      "San Pablo Ave corridor",
      "El Cerrito del Norte BART Station",
    ],
    transitAccess: [
      "AC Transit 72 / 72R (San Pablo Ave — direct, no transfer)",
      "El Cerrito del Norte BART → AC Transit 72",
      "North Berkeley BART → AC Transit 18 connection",
      "AC Transit 18 (San Pablo Ave local)",
    ],
    localContext:
      "Albany is a tight-knit community where word-of-mouth runs faster than any ad — if a Solano Ave parent finds a great stylist, their block knows within the week. Britnee has built a loyal Albany following largely through referrals from existing clients, with many Albany Hill and San Pablo corridor families booking multiple household members at the same visit. The short drive down San Pablo makes Studio Salon feel like a neighborhood option rather than a trek, which keeps Albany clients coming back on a regular maintenance schedule.",
  },

  emeryville: {
    nearbyLandmarks: [
      "Bay Street Emeryville shopping center",
      "Christie Avenue waterfront",
      "Emery Go-Round transit hub",
      "MacArthur BART Station",
    ],
    transitAccess: [
      "Emery Go-Round shuttle → MacArthur BART → AC Transit 72",
      "AC Transit 72 / 72R (San Pablo Ave — direct from Emeryville)",
      "MacArthur BART → AC Transit 51B",
      "AC Transit 36 (Emeryville → Berkeley connection)",
    ],
    localContext:
      "Emeryville's dense corporate and residential mix creates a client who values efficiency above almost everything else — appointments need to fit into a lunch break or a commute window, not consume an afternoon. Tech and biotech workers at the Christie Ave campuses often book early morning or midday slots, treating the 10-minute drive up San Pablo as a negligible cost when the result is consistent, quality work. Bay Street condo residents fold salon appointments into Saturday errands, making Studio Salon part of a broader routine rather than a standalone commitment.",
  },

  "el-cerrito": {
    nearbyLandmarks: [
      "El Cerrito Plaza BART Station",
      "Fairmount Avenue neighborhood",
      "Richmond–El Cerrito border corridor",
      "Del Norte BART Station",
    ],
    transitAccess: [
      "El Cerrito Plaza BART → Richmond line → Ashby BART",
      "AC Transit 72 / 72R (San Pablo Ave — direct, no transfer)",
      "Del Norte BART → AC Transit 72",
      "AC Transit 18 (San Pablo Ave local southbound)",
    ],
    localContext:
      "El Cerrito clients have typically done their homework before booking — they have asked neighbors, checked reviews, and decided the 15-minute drive down San Pablo is worth it for a stylist who actually knows what she is doing with locs and natural hair. The city straddles a social and geographic edge between the more urban Richmond and the more residential Albany, and its clients reflect that range: long-term homeowners who have been loyal for years, younger residents who moved in for the housing and are building new routines, and Richmond Annex families for whom Studio Salon is practically the neighborhood salon. Once El Cerrito clients book once, they tend to stay.",
  },

  richmond: {
    nearbyLandmarks: [
      "Richmond BART Station",
      "Hilltop area",
      "Richmond Annex",
      "Point Richmond waterfront",
    ],
    transitAccess: [
      "Richmond BART → Richmond line → Ashby BART (~15 min walk)",
      "AC Transit 72R (rapid service, San Pablo Ave — direct)",
      "AC Transit 72 (local, San Pablo Ave — direct)",
      "I-80 south to Ashby Ave exit (driving — ~25 min)",
    ],
    localContext:
      "Richmond has historically been underserved for Black hair care — specifically the kind of specialty work that locs, textured natural hair, and protective styles require — which is precisely why Richmond clients are willing to make the longer drive to Studio Salon. For many Richmond clients, Britnee is not a convenient option but the right one: the only stylist they have found who handles their hair the way it needs to be handled. That trust turns the 20-to-25-minute commute into a non-issue, and Richmond clients tend to book their appointments well in advance and keep them consistently.",
  },

  kensington: {
    nearbyLandmarks: [
      "Arlington Avenue main corridor",
      "Tilden Regional Park",
      "Kensington Circle",
      "Kensington Hilltop Elementary School",
    ],
    transitAccess: [
      "AC Transit 7 (Kensington → Berkeley — connects to 51B / 72)",
      "North Berkeley BART (walkable from south Kensington)",
      "Ashby BART (~15 min walk from salon)",
      "Arlington Ave south → driving (~10 min to salon)",
    ],
    localContext:
      "Kensington is one of the smallest and most word-of-mouth-driven communities in the East Bay — almost every client referral here traces back to a neighbor, a school pickup conversation, or a recommendation made at the Kensington Circle shops. Most Kensington clients drive down Arlington Ave, and the 10-minute trip down the hill feels like nothing once it becomes part of a monthly routine. The community skews toward long-term homeowners who are deliberate about who they patronize, and once they find a stylist they trust, they stay — often for years and across the whole household.",
  },
};

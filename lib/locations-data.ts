/**
 * ============================================================
 *  STUDIO SALON — Location Pages Data (minimal stub)
 *  7 East Bay cities served from our Berkeley location.
 * ============================================================
 */

import { resolveImagePath } from './image-path';

export function locationImagePath(slug: string): string {
  return resolveImagePath('locations', slug);
}

export interface LocationDetail {
  slug: string;
  city: string;
  state: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  neighborhoods: string[];
  nearbyLocations: string[];
  latitude: number;
  longitude: number;
}

const CITY_SECTIONS = (city: string, drive: string, transit: string, neighborhoods: string[]) => [
  {
    heading: `Why ${city} clients book at Studio Salon`,
    content: `Studio Salon at 2902 Sacramento St, Berkeley is a short trip from ${city}. Clients come to us for loc maintenance and retwists, natural hair styling, knotless and feed-in braids, sew-in weaves, crochet installs, silk presses, color, and men's cuts. Britnee Lott has built a reputation across the East Bay for work that protects edges, respects texture, and lasts. Every service starts with a short consultation so we can look at your hair before we lift a comb. Whether you're new to the chair or a regular, you'll be met with the same calm, unhurried attention.`,
  },
  {
    heading: `Getting to the salon from ${city}`,
    content: `By car from ${city}, you're looking at ${drive}. By public transit, ${transit}. Sacramento Street has metered parking and the side streets — Grant, Edwards, Julia, Woolsey — usually have residential parking even in the afternoon. If it's your first time, budget ten extra minutes to find a spot and walk over. The salon is at 2902 Sacramento St, Berkeley, CA 94702. If the door is locked between appointments, text (510) 690-5274 and we'll let you in.`,
  },
  {
    heading: `Neighborhoods we serve in ${city}`,
    content: `We see ${city} clients from across the city — including ${neighborhoods.join(', ')}. The East Bay has a distinct hair-care culture, with clients who value natural hair, loc cultivation, and stylists who understand Black hair with depth. Studio Salon is part of that community. If you're local, we're close. If you're coming from farther in ${city}, the drive is worth it because the work will speak for itself — and you'll probably book your next appointment before you leave the chair.`,
  },
  {
    heading: `What to expect at your first visit from ${city}`,
    content: `New-client visits start with a consultation: five to fifteen minutes, depending on the service. Britnee will ask about your hair history, look at your scalp and ends, and confirm the plan before any work begins. If what you booked isn't going to work on your hair — which happens sometimes — we'll talk through alternatives right away, not after. Come with reference photos, bring any braiding hair or accessories you want installed, and please eat before a long appointment. Most ${city} clients book their next visit before they leave.`,
  },
];

export const locationDetails: LocationDetail[] = [
  {
    slug: "berkeley",
    city: "Berkeley",
    state: "CA",
    title: "Hair Salon in Berkeley, CA | Studio Salon",
    metaDescription: "Studio Salon at 2902 Sacramento St, Berkeley. Loc maintenance, braids, weaves, color, and cuts with Britnee Lott. Call (510) 690-5274.",
    h1: "Studio Salon — Loc & Natural Hair Specialists in Berkeley",
    intro: "Studio Salon is a Berkeley-based hair salon on Sacramento Street, where Britnee Lott works with every texture. We're centered on loc cultivation and natural hair but cover the full spectrum — braids, sew-ins, color, silk press, cuts, and barbering. Berkeley has a natural-hair community that's discerning, and we take that seriously: every service begins with a consultation, every install is tension-conscious, and every client walks out with a maintenance plan that protects the work. 2902 Sacramento St, open Tuesday through Saturday. Walk-ins welcome for quick services; loc and braid bookings fill 2–3 weeks out, so plan ahead.",
    sections: CITY_SECTIONS(
      "Berkeley",
      "5–15 minutes from most Berkeley neighborhoods",
      "Ashby BART is a short walk away, and the 72/72R AC Transit line stops right on Sacramento",
      ["South Berkeley", "North Berkeley", "Elmwood", "Gourmet Ghetto", "Telegraph", "Claremont", "West Berkeley", "UC campus area"]
    ),
    neighborhoods: ["South Berkeley", "North Berkeley", "Elmwood", "Gourmet Ghetto", "Telegraph", "Claremont", "West Berkeley", "UC campus area"],
    nearbyLocations: ["oakland", "albany", "emeryville"],
    latitude: 37.8715,
    longitude: -122.2730,
  },
  {
    slug: "oakland",
    city: "Oakland",
    state: "CA",
    title: "Hair Salon Near Oakland, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves Oakland clients. Loc maintenance, braids, silk press, color, and cuts. Call (510) 690-5274.",
    h1: "Studio Salon — Loc & Natural Hair for Oakland Clients",
    intro: "Studio Salon is a short drive from Oakland. We're at 2902 Sacramento St in Berkeley, right on the Oakland border — about 15 minutes from Rockridge, 20 minutes from downtown Oakland, and less from Temescal and Grand Lake. Oakland clients make up a big share of our regulars, and for good reason: Britnee Lott's work on locs, braids, and natural hair has a reputation that travels. Full range of services, from $20 brow waxes to $325+ tribal feed-in braids. Call or text (510) 690-5274 to book.",
    sections: CITY_SECTIONS(
      "Oakland",
      "10–20 minutes from most of Oakland",
      "Rockridge BART is a 10-minute ride to Ashby BART; the 72/72R bus runs up Sacramento from downtown",
      ["Rockridge", "Temescal", "Piedmont Ave", "Grand Lake", "Uptown", "Lake Merritt", "Fruitvale", "West Oakland"]
    ),
    neighborhoods: ["Rockridge", "Temescal", "Piedmont Ave", "Grand Lake", "Uptown", "Lake Merritt", "Fruitvale", "West Oakland"],
    nearbyLocations: ["berkeley", "emeryville", "albany"],
    latitude: 37.8044,
    longitude: -122.2712,
  },
  {
    slug: "albany",
    city: "Albany",
    state: "CA",
    title: "Hair Salon Near Albany, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves Albany. Loc maintenance, braids, color, and cuts with Britnee Lott. Call (510) 690-5274.",
    h1: "Studio Salon — Serving Albany, CA",
    intro: "Albany is just north of Berkeley, and Studio Salon at 2902 Sacramento St is a quick drive down from Solano Avenue or San Pablo Avenue. Albany clients regularly come to us for the loc and braid work that's harder to find in town. The salon is open Tuesday through Saturday, and you can always call or text (510) 690-5274 to book or ask a question. Full menu: locs, natural hair styling, braids, weaves, color, cuts, and barbering. First-time visits include a consultation so we can plan the service around your hair, not the other way around.",
    sections: CITY_SECTIONS(
      "Albany",
      "about 10 minutes",
      "the 72/72R AC Transit line runs along San Pablo and Sacramento and drops you near the salon",
      ["Solano Ave", "Albany Hill", "San Pablo Ave corridor"]
    ),
    neighborhoods: ["Solano Ave", "Albany Hill", "San Pablo Ave corridor"],
    nearbyLocations: ["berkeley", "el-cerrito", "kensington"],
    latitude: 37.8869,
    longitude: -122.2977,
  },
  {
    slug: "emeryville",
    city: "Emeryville",
    state: "CA",
    title: "Hair Salon Near Emeryville, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves Emeryville. Loc maintenance, braids, sew-ins, color, and cuts. Call (510) 690-5274.",
    h1: "Studio Salon — Serving Emeryville, CA",
    intro: "Emeryville clients can be at Studio Salon in about 10 minutes — we're at 2902 Sacramento St, Berkeley, just a short drive up Ashby from the Emeryville shopping corridors. Whether you're coming over after work from the Bay Street area or heading in for a weekend appointment, we're a familiar stop for natural hair, loc maintenance, protective braids, and color. Call or text (510) 690-5274 to book. Britnee responds the same day with availability. Walk-ins welcome for quick services like brow waxing and root touch-ups.",
    sections: CITY_SECTIONS(
      "Emeryville",
      "about 10 minutes",
      "AC Transit routes connect Emeryville to Berkeley easily, and Ashby BART is a short rideshare",
      ["Bay Street", "Park Ave", "Watergate", "Triangle"]
    ),
    neighborhoods: ["Bay Street", "Park Ave", "Watergate", "Triangle"],
    nearbyLocations: ["berkeley", "oakland", "albany"],
    latitude: 37.8314,
    longitude: -122.2852,
  },
  {
    slug: "el-cerrito",
    city: "El Cerrito",
    state: "CA",
    title: "Hair Salon Near El Cerrito, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves El Cerrito. Loc maintenance, braids, silk press, color, and cuts. Call (510) 690-5274.",
    h1: "Studio Salon — Serving El Cerrito, CA",
    intro: "El Cerrito is about 15 minutes from Studio Salon at 2902 Sacramento St. We see clients from El Cerrito Plaza, Del Norte, and the Hillside neighborhood for loc maintenance, protective braids, silk press, color, and more. The drive down San Pablo Avenue or via I-80 is quick outside rush hour. If you prefer transit, El Cerrito Plaza BART connects to Ashby BART, which is a short walk from the salon. Call or text (510) 690-5274 to book — same-day availability is sometimes possible for quick services.",
    sections: CITY_SECTIONS(
      "El Cerrito",
      "about 15 minutes via San Pablo Ave or I-80",
      "El Cerrito Plaza BART connects to Ashby BART in under 15 minutes",
      ["El Cerrito Plaza", "Del Norte", "Hillside", "Richmond Annex"]
    ),
    neighborhoods: ["El Cerrito Plaza", "Del Norte", "Hillside", "Richmond Annex"],
    nearbyLocations: ["albany", "richmond", "kensington"],
    latitude: 37.9161,
    longitude: -122.3108,
  },
  {
    slug: "richmond",
    city: "Richmond",
    state: "CA",
    title: "Hair Salon Near Richmond, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves Richmond. Loc maintenance, braids, weaves, color, and cuts. Call (510) 690-5274.",
    h1: "Studio Salon — Serving Richmond, CA",
    intro: "Richmond clients drive 20–25 minutes to reach Studio Salon at 2902 Sacramento St, Berkeley. It's a worthwhile trip for loc maintenance, protective braid installs, sew-in weaves, color, and cuts from Britnee Lott, whose work has become a destination across the East Bay. Point Richmond, Marina Bay, and Hilltop clients regularly make the drive down I-80 or 580. Transit via El Cerrito del Norte BART is possible but the drive is usually faster. Call or text (510) 690-5274 to book ahead; loc and braid slots fill two to three weeks in advance.",
    sections: CITY_SECTIONS(
      "Richmond",
      "20–25 minutes via I-80 or 580",
      "BART from El Cerrito del Norte connects to Ashby BART with one transfer",
      ["Point Richmond", "Marina Bay", "Hilltop", "San Pablo"]
    ),
    neighborhoods: ["Point Richmond", "Marina Bay", "Hilltop", "San Pablo"],
    nearbyLocations: ["el-cerrito", "kensington", "albany"],
    latitude: 37.9358,
    longitude: -122.3478,
  },
  {
    slug: "kensington",
    city: "Kensington",
    state: "CA",
    title: "Hair Salon Near Kensington, CA | Studio Salon",
    metaDescription: "Studio Salon in Berkeley serves Kensington. Loc maintenance, braids, silk press, color, and cuts. Call (510) 690-5274.",
    h1: "Studio Salon — Serving Kensington, CA",
    intro: "Kensington is the small hilltop community between Berkeley and El Cerrito, and it's a quick 10-minute drive down to Studio Salon at 2902 Sacramento St. The descent down Arlington to Solano and over to Sacramento is one of the more scenic commutes in the East Bay. Clients from Kensington Park and along Arlington Avenue come to us for loc work, protective styles, color, and cuts. Call or text (510) 690-5274 to book. Same-day appointments for short services are sometimes available.",
    sections: CITY_SECTIONS(
      "Kensington",
      "about 10 minutes via Arlington and Solano",
      "AC Transit's 7 line runs along Arlington and connects to Sacramento with a short transfer",
      ["Arlington Ave", "Kensington Park"]
    ),
    neighborhoods: ["Arlington Ave", "Kensington Park"],
    nearbyLocations: ["albany", "el-cerrito", "berkeley"],
    latitude: 37.9077,
    longitude: -122.2828,
  },
];

export function getLocationBySlug(slug: string): LocationDetail | null {
  return locationDetails.find((l) => l.slug === slug) ?? null;
}
export function getAllLocationSlugs(): string[] {
  return locationDetails.map((l) => l.slug);
}
export function getAllLocations(): LocationDetail[] {
  return locationDetails;
}

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

export const locationDetails: LocationDetail[] = [
  /* ── Berkeley ────────────────────────────────────────────── */
  {
    slug: "berkeley",
    city: "Berkeley",
    state: "CA",
    title: "Hair Salon in Berkeley, CA | Studio Salon",
    metaDescription:
      "Studio Salon on 2902 Sacramento St in Berkeley. Locs, natural hair, braids, color, men's cuts with Britnee Lott. Book: (510) 690-5274.",
    h1: "Berkeley Hair Salon and Loc Specialist on Sacramento St",
    intro:
      "Studio Salon sits at 2902 Sacramento St in Berkeley, right on the Berkeley-Oakland line where South Berkeley meets North Oakland. If you live in the Gourmet Ghetto, walk over from the Elmwood on a Saturday morning, or drive in from Claremont or the hills above campus, getting here is easy — and worth it. Owner Britnee Lott has built her chair around the people who actually live in this city: students running between classes at UC Berkeley, longtime West Berkeley families, and folks who have been growing their locs with her for years. Come in for a consultation and see why locals keep coming back.",
    sections: [
      {
        heading: "Why Berkeley Locals Choose Us",
        content:
          "Britnee Lott opened Studio Salon because Berkeley deserved a stylist who treats every head of hair like it matters — not a chain that rushes you out the door. Her chair at 2902 Sacramento St is where locs get started, retwisted, styled, and repaired. Natural hair gets washed, conditioned, and detangled with care. Braids, weaves, and color are done with the patience real hair requires. Men's cuts are clean, quick, and on time. Berkeley clients come in with specific needs: a grad student who wants interlocked starter locs before a conference, a West Berkeley mom who brings her daughter in for the first real braid-down of the school year, a Claremont professor who has been seeing Britnee for cuts for a decade. The common thread is trust. You book with Britnee once, you understand. Call (510) 690-5274 to talk through what you want before your first visit.",
      },
      {
        heading: "Getting to the Salon from Berkeley",
        content:
          "You really cannot get any closer — the salon is in Berkeley. From the Gourmet Ghetto on the north side, Sacramento St runs south straight to us. Coming from the hills, drop down Ashby Ave and turn onto Sacramento. From Telegraph or the campus area, head west on Dwight, Ashby, or Russell and you land on Sacramento in ten minutes. Ashby BART is the closest station — a flat fifteen-minute walk or a quick ride on AC Transit bus 72, 72M, or 72R, which run up and down San Pablo Ave a few blocks west. Downtown Berkeley BART connects easily on the 18 or the 51B. Parking on Sacramento St is generally open, with more reliable spots on the side streets like Oregon, Russell, and Ashby. Ride from anywhere in Berkeley takes under fifteen minutes. The address is 2902 Sacramento St, Berkeley, CA 94702.",
      },
      {
        heading: "Berkeley Neighborhoods We Serve",
        content:
          "We see Berkeley clients from every corner of the city. South Berkeley is our immediate neighborhood — folks walk over from Sacramento, Adeline, and Ashby. North Berkeley and the Gourmet Ghetto send us clients who want a real loc specialist and are willing to make the short drive down. Elmwood residents come for color and natural hair care, often fitting an appointment around a stop on College Ave. The Claremont crowd comes down out of the hills for precision cuts and consistent retwist appointments. Telegraph and the UC Berkeley campus area send students, grad students, and faculty looking for a stylist who will actually listen. West Berkeley, closer to the water and the San Pablo corridor, is practically walking distance — many of our West Berkeley clients drop in before work. Wherever you live in Berkeley, our door on Sacramento St is open.",
      },
      {
        heading: "What to Expect First Visit",
        content:
          "First visits at Studio Salon start with a real conversation. Before she picks up a comb, Britnee will ask what you are going for, what has worked and what has not, what your routine looks like between visits, and what kind of maintenance you are willing to do. For loc clients, she will assess your current state and lay out an honest timeline — starting, retwisting, interlocking, styling, or repair. For natural hair, color, braids, and weaves, the consultation covers condition, goals, and aftercare. Men's cuts are quicker and more direct. Booking is easiest by phone at (510) 690-5274; you can also text. Bring reference photos if you have them, show up with your hair in whatever state it is in (no need to prep), and come with questions. The salon is at 2902 Sacramento St, Berkeley, CA 94702, and the first-time vibe is relaxed, unhurried, and practical.",
      },
    ],
    neighborhoods: [
      "South Berkeley",
      "North Berkeley",
      "Elmwood",
      "Gourmet Ghetto",
      "Telegraph",
      "Claremont",
      "West Berkeley",
      "UC Berkeley / campus area",
    ],
    nearbyLocations: ["oakland", "albany", "emeryville"],
    latitude: 37.8715,
    longitude: -122.2730,
  },

  /* ── Oakland ─────────────────────────────────────────────── */
  {
    slug: "oakland",
    city: "Oakland",
    state: "CA",
    title: "Hair Salon in Oakland, CA | Studio Salon",
    metaDescription:
      "Oakland hair salon specializing in locs, natural hair, braids, color, and men's cuts. Britnee Lott at 2902 Sacramento St. Call (510) 690-5274.",
    h1: "Oakland Hair Salon for Locs, Natural Hair, and Cuts",
    intro:
      "From Rockridge to Fruitvale, Oakland clients have been making the short trip to Studio Salon at 2902 Sacramento St in Berkeley for years. We sit just over the Berkeley-Oakland line, about a mile from Temescal and an easy run up San Pablo or Telegraph from anywhere in North Oakland. Owner Britnee Lott does locs, natural hair, braids, weaves, color, and men's cuts — the services Oakland clients have told her they cannot reliably find without driving across the bridge or waiting weeks for a chair. If you are in Oakland and you want a stylist who listens, call (510) 690-5274.",
    sections: [
      {
        heading: "Why Oakland Clients Keep Coming Back",
        content:
          "Britnee Lott built Studio Salon for the kind of client Oakland is full of — people who want real hair care, done well, without being pushed toward services they did not ask for. Her specialty is locs: starting them, retwisting, interlocking, repairing damage from previous stylists, and styling for weddings, graduations, and everyday life. She also does natural hair from wash and condition to silk press, braids and weaves that lay right and hold, color that actually lifts without frying the hair underneath, and men's cuts that come out clean and even. Oakland clients come from Rockridge for precision work, from Fruitvale and West Oakland because they have heard about her from family and friends, and from Uptown and Lake Merritt because she is close enough to hit on a lunch break. The common thread is the consultation. Britnee talks first, cuts or twists second.",
      },
      {
        heading: "Getting to the Salon from Oakland",
        content:
          "Studio Salon is a short drive from almost anywhere in Oakland. From Temescal or Rockridge, hop on Telegraph or Shattuck and head north — you are here in under ten minutes. From Piedmont Ave or Grand Lake, take 51st over to Telegraph, then cut across to Sacramento St. From Uptown, Lake Merritt, or Downtown, the 80/580 split or surface streets like West St and Adeline both work. From Fruitvale or East Oakland, the 580 west to the Ashby exit drops you right at the salon. West Oakland is a straight shot up San Pablo Ave. Ashby BART is the closest station — under a fifteen-minute walk. Rockridge BART riders can catch the 51B. AC Transit 72 and 72R run San Pablo Ave a couple of blocks west. Street parking on Sacramento and the numbered side streets is usually easy. The address is 2902 Sacramento St, Berkeley, CA 94702.",
      },
      {
        heading: "Oakland Neighborhoods We Serve",
        content:
          "Oakland is spread out, and our clients come from every corner of it. Rockridge clients swing by on their way to or from the shops on College Ave, often pairing an appointment with a stop at Market Hall. Temescal folks are our neighbors — the salon sits just across the line. Piedmont Ave clients come in for color and natural hair appointments. Grand Lake and Lake Merritt residents often cross 580 on a weekend. Uptown and Downtown Oakland send working professionals looking for men's cuts and loc maintenance that fits around a lunch hour. Fruitvale clients come up for braids and weaves and often bring family. West Oakland is practically walking distance, so West Oakland regulars frequently drop in on foot or by bike. Wherever you are in Oakland — from the hills to the flats, from East to West — the chair at 2902 Sacramento St is ready.",
      },
      {
        heading: "What Your First Visit Looks Like",
        content:
          "If you are booking from Oakland for the first time, plan for the consultation to take fifteen to twenty minutes before any hair work begins. Britnee Lott wants to know what you have tried, what has worked, what has failed, and what you actually want the next six months to look like. For locs, that means a real assessment: are you starting fresh, transitioning from braids, or coming in with damage from another stylist? For color, natural hair, braids, or weaves, the conversation covers condition, goals, and maintenance. Men's cuts are handled quickly once you know what you want. Call (510) 690-5274 to book — text works too. Come with reference photos if you have specific styles in mind. Hair does not need to be freshly washed; come as you are. The salon at 2902 Sacramento St is clean, direct, and unhurried, which is what most Oakland clients tell us they have been looking for.",
      },
    ],
    neighborhoods: [
      "Rockridge",
      "Temescal",
      "Piedmont Ave",
      "Grand Lake",
      "Uptown",
      "Lake Merritt",
      "Fruitvale",
      "West Oakland",
    ],
    nearbyLocations: ["berkeley", "emeryville", "albany"],
    latitude: 37.8044,
    longitude: -122.2712,
  },

  /* ── Albany ──────────────────────────────────────────────── */
  {
    slug: "albany",
    city: "Albany",
    state: "CA",
    title: "Hair Salon in Albany, CA | Studio Salon",
    metaDescription:
      "Studio Salon is a short drive down San Pablo from Albany. Locs, natural hair, braids, color, and men's cuts with Britnee Lott. (510) 690-5274.",
    h1: "Albany Hair Salon and Loc Specialist Nearby",
    intro:
      "Albany is about a ten-minute drive south on San Pablo Ave to Studio Salon at 2902 Sacramento St in Berkeley. If you live off Solano, up near Albany Hill, or anywhere along the San Pablo corridor, you have probably already passed the salon on a grocery run. Owner Britnee Lott works with a lot of Albany clients — parents, teachers, Albany High and St. Mary's families, and neighbors who found her through word of mouth. Services run the full range: locs from start to finish, natural hair, braids, weaves, color, and men's cuts. Call (510) 690-5274 to get on the books.",
    sections: [
      {
        heading: "Why Albany Chooses Studio Salon",
        content:
          "Albany is a small city, and word about a good stylist travels fast on Solano Ave. Britnee Lott has become one of the names people mention when an Albany client asks around for a loc specialist or a natural hair stylist who knows what she is doing. The services she offers cover everything Albany clients typically ask for: starter locs, retwists, interlocking, loc repair, natural hair wash and style, braids, weaves, color, and men's cuts that actually fade clean. What separates the chair at Studio Salon from the options closer to Solano is the consultation. Britnee will tell you what is realistic with your hair, what is going to take time, and what is going to cost you more than it is worth. She would rather lose an appointment than send you home with something she knows is not going to hold. That honesty is what Albany clients come back for.",
      },
      {
        heading: "Getting to the Salon from Albany",
        content:
          "The drive from Albany to Studio Salon is short and direct. From Solano Ave, head east and drop south on San Pablo Ave — the salon is about ten minutes down at 2902 Sacramento St, Berkeley, CA 94702. From Albany Hill or the Marin Ave side, take Marin east to San Pablo or Shattuck, then south. Traffic on San Pablo is usually light outside of commute hours. AC Transit bus 72 and 72R run up and down San Pablo between Albany and the salon; it is a straight, no-transfer ride. If you prefer BART, El Cerrito Plaza BART or North Berkeley BART are both close by and connect with AC Transit 18, 51B, or 72. Parking on Sacramento and the side streets like Oregon and Russell is generally easy. Biking from Albany along the San Pablo Ave corridor or via the parallel residential streets is flat and takes twenty minutes or so.",
      },
      {
        heading: "Albany Neighborhoods We Serve",
        content:
          "Albany is compact but distinct, and we see clients from across all of it. Solano Ave residents make up a steady part of our Albany regulars — they live within walking distance of coffee, groceries, and the Albany theater, and they do not mind the quick trip south for a stylist who fits their hair. Albany Hill clients drop down the hill via Marin or Buchanan and are at the salon in minutes. The San Pablo Ave corridor — the homes and apartments along and just off San Pablo between Marin and Buchanan — is practically an extension of our neighborhood; many of our San Pablo corridor clients walk or bike. Albany families, whether they moved in for the schools or have lived in the same house for decades, appreciate a stylist who will book their kids and adults together. Wherever you are in Albany, the trip to 2902 Sacramento St is easy.",
      },
      {
        heading: "Your First Appointment at Studio Salon",
        content:
          "First-visit bookings from Albany are simple. Call or text (510) 690-5274, or book through the site, and Britnee will confirm the service you are after and give you a realistic time estimate. Loc appointments tend to run longer; cuts and simple retwists are quicker. When you get to the salon, plan on fifteen minutes at the start to sit down, talk through your goals, and let Britnee actually look at your hair before she starts. If you are transitioning — from braids, from relaxed hair, from locs that were started somewhere else — this conversation is where you get straight answers about the timeline. Bring reference photos if you have a specific style in mind. Do not worry about washing beforehand unless you have been asked to. The salon is at 2902 Sacramento St, Berkeley, CA 94702. Parking is usually on the street, and the vibe inside is unhurried.",
      },
    ],
    neighborhoods: [
      "Solano Ave",
      "Albany Hill",
      "San Pablo corridor",
    ],
    nearbyLocations: ["berkeley", "el-cerrito", "kensington"],
    latitude: 37.8869,
    longitude: -122.2977,
  },

  /* ── Emeryville ──────────────────────────────────────────── */
  {
    slug: "emeryville",
    city: "Emeryville",
    state: "CA",
    title: "Hair Salon in Emeryville, CA | Studio Salon",
    metaDescription:
      "Studio Salon at 2902 Sacramento St is minutes from Emeryville. Locs, natural hair, braids, color, men's cuts with Britnee Lott. (510) 690-5274.",
    h1: "Emeryville Hair Salon — Locs, Natural Hair, Color",
    intro:
      "From the apartments along Bay Street to the waterfront at Watergate, Emeryville is close. Studio Salon at 2902 Sacramento St in Berkeley is a straight ten-to-fifteen-minute drive up San Pablo Ave from almost any Emeryville address. Owner Britnee Lott sees a steady stream of Emeryville clients — tech workers who can slip out on a long lunch, Bay Street shoppers who fold an appointment into their Saturday, Triangle and Park Ave locals who want a stylist who actually knows locs and natural hair. Services include locs, natural hair, braids, weaves, color, and men's cuts. Call (510) 690-5274 or book online.",
    sections: [
      {
        heading: "Why Emeryville Clients Trust Britnee",
        content:
          "Emeryville sits in a tough spot for hair — you have plenty of chain spots at Bay Street, but finding a stylist who is genuinely skilled with locs and textured hair is a different story. That is why a lot of Emeryville clients end up at Studio Salon. Britnee Lott's chair handles the full range of services Emeryville clients typically need: starter locs, retwists, interlocking, repair, natural hair, silk press, braids, weaves, color, and men's cuts. The consultation is where the work actually begins. Britnee asks what you have been doing between visits, what products you are using, how your scalp is responding, and what you want the end result to be. For clients who live and work in Emeryville — especially those balancing long hours at a desk with a need to look sharp — having a stylist who listens and delivers consistently is the whole point.",
      },
      {
        heading: "Getting to the Salon from Emeryville",
        content:
          "The drive from Emeryville to Studio Salon is straightforward. From Bay Street or the Watergate complex, take Powell to San Pablo Ave and head north — you will cross the Oakland-Berkeley line and be at Sacramento St in ten to fifteen minutes. From the Triangle or Park Ave, San Pablo is literally a block or two away. If you prefer to avoid San Pablo during rush hour, Adeline and Shattuck are solid alternatives. AC Transit bus 72 and 72R run San Pablo Ave end to end, which means a direct no-transfer ride from Emeryville to the salon. The Emery Go-Round shuttle connects most of Emeryville to MacArthur BART; from there, a short bus or rideshare gets you here. Street parking on Sacramento and the side streets is generally open. The salon is at 2902 Sacramento St, Berkeley, CA 94702 — right at the Berkeley-Oakland border, so neither city is far.",
      },
      {
        heading: "Emeryville Neighborhoods We Serve",
        content:
          "Emeryville is small enough that we recognize where every client is coming from. Bay Street residents — especially those in the condo buildings near the shops — often swing by on a Saturday before hitting the stores. Park Ave clients have a short, flat trip up San Pablo and back, which makes it easy to squeeze in a retwist or a cut between other errands. Watergate regulars, coming from the apartment towers near the bay, appreciate that the salon is close enough to be a weeknight stop rather than a weekend commitment. The Triangle — that pocket between Hollis, Park, and San Pablo — is packed with small businesses and long-time residents, and we see a lot of Triangle clients for braids, weaves, and color. Emeryville is dense, mixed, and deeply practical, and that is exactly how we approach the appointments we book with Emeryville clients.",
      },
      {
        heading: "Booking Your First Appointment",
        content:
          "If you are coming in from Emeryville for the first time, book by calling (510) 690-5274 or using the online booking link. Britnee will confirm the service, ballpark the timing, and let you know what to bring. For locs, that might mean coming in with your hair in a specific state depending on whether she is starting, retwisting, or repairing. For color, she will usually ask about your most recent color history so she can plan the lift without surprises. Braids, weaves, and men's cuts are more straightforward. When you get to Studio Salon, expect a real consultation before anything starts — Britnee will look at your hair, ask a few questions, and lay out the plan. The address is 2902 Sacramento St, Berkeley, CA 94702. Parking is usually on Sacramento itself or a side street. First-time clients almost always leave with a rebook and a clear plan for what comes next.",
      },
    ],
    neighborhoods: [
      "Bay Street",
      "Park Ave",
      "Watergate",
      "Triangle",
    ],
    nearbyLocations: ["berkeley", "oakland", "albany"],
    latitude: 37.8314,
    longitude: -122.2852,
  },

  /* ── El Cerrito ──────────────────────────────────────────── */
  {
    slug: "el-cerrito",
    city: "El Cerrito",
    state: "CA",
    title: "Hair Salon in El Cerrito, CA | Studio Salon",
    metaDescription:
      "From El Cerrito to Studio Salon at 2902 Sacramento St, Berkeley. Locs, natural hair, braids, color, men's cuts. Britnee Lott. (510) 690-5274.",
    h1: "El Cerrito Hair Salon and Loc Specialist",
    intro:
      "El Cerrito is an easy run down San Pablo Ave to Studio Salon at 2902 Sacramento St, Berkeley. From El Cerrito Plaza, it is about fifteen minutes in light traffic — and El Cerrito Plaza BART puts you on a direct line to Ashby BART, which is the closest stop to the salon. Owner Britnee Lott has a strong client base from El Cerrito: Del Norte regulars, Hillside families, Richmond Annex neighbors, and folks who have been coming since they lived closer and just kept their appointments when they moved north. Services cover locs, natural hair, braids, weaves, color, and men's cuts. (510) 690-5274.",
    sections: [
      {
        heading: "Why El Cerrito Picks Studio Salon",
        content:
          "El Cerrito clients tend to know what they want when they walk in — they have usually done their research, asked around, and decided they are willing to make the short trip down San Pablo for the right stylist. Britnee Lott earns that trust by doing exactly what she says she will do. Services at Studio Salon cover the full range of what El Cerrito clients typically book: starter locs, retwists, interlocking, loc repair, natural hair wash and style, silk press, braids, weaves, color, and men's cuts. There is no upselling; if a service is not right for your hair, Britnee will tell you. El Cerrito clients often book recurring appointments — monthly retwists, six-week cuts, quarterly color — because consistency is easier than shopping around. The chair at 2902 Sacramento St has become a regular rhythm for a lot of El Cerrito families.",
      },
      {
        heading: "Getting Here from El Cerrito",
        content:
          "El Cerrito has one of the easier runs to Studio Salon. From El Cerrito Plaza, drive south on San Pablo Ave for about fifteen minutes and you are on Sacramento St. From Del Norte or Hillside, drop down the hill to San Pablo or Arlington, then south. Richmond Annex is practically at the county line — San Pablo or Central Ave south drops you into Albany and into Berkeley in minutes. If you prefer BART, El Cerrito Plaza BART is the local stop; take the Richmond line south to Ashby BART and walk about fifteen minutes. AC Transit bus 72 and 72R are a reliable straight shot down San Pablo from El Cerrito to the salon, no transfer required. Parking on Sacramento St and the numbered side streets is usually fine. The address is 2902 Sacramento St, Berkeley, CA 94702. For questions about directions or timing, call (510) 690-5274.",
      },
      {
        heading: "El Cerrito Neighborhoods We Serve",
        content:
          "El Cerrito Plaza is the heart of El Cerrito, and we see a lot of Plaza-area clients — people who live in the apartments and condos nearby, and families who make the plaza part of their weekend routine. Del Norte regulars roll in from the north end of the city, often stopping at Del Norte BART first or simply driving down. Hillside residents come off the winding streets above San Pablo, bringing a long-running loyalty to a stylist who actually knows their hair. Richmond Annex — the southern edge of El Cerrito that blends into Albany — is so close to the salon that many of our Richmond Annex clients walk or bike. Across all of these neighborhoods, the story is the same: El Cerrito clients like a direct, honest stylist, and they like not having to drive across the bridge or through Oakland to find her.",
      },
      {
        heading: "Planning Your First Visit",
        content:
          "El Cerrito clients who are booking Studio Salon for the first time should plan the visit like any real appointment — give yourself room on the front end for a consultation. Call or text (510) 690-5274 or book online. Britnee will confirm what you are coming in for and how long to block out. For locs, be ready to talk about your current state — starter, retwist, interlock, repair — and your end goal. For color, natural hair, braids, or weaves, the consult covers condition, past services, and what you want. Men's cuts are handled quickly. Bring reference photos if you have them. When you arrive at 2902 Sacramento St, Berkeley, CA 94702, park on Sacramento or a side street. Walk in, sign in, and Britnee will get started after the consultation. The goal of the first visit is not just the service — it is the relationship, so you leave with a plan.",
      },
    ],
    neighborhoods: [
      "El Cerrito Plaza",
      "Del Norte",
      "Hillside",
      "Richmond Annex",
    ],
    nearbyLocations: ["albany", "kensington", "richmond"],
    latitude: 37.9161,
    longitude: -122.3108,
  },

  /* ── Richmond ────────────────────────────────────────────── */
  {
    slug: "richmond",
    city: "Richmond",
    state: "CA",
    title: "Hair Salon in Richmond, CA | Studio Salon",
    metaDescription:
      "Studio Salon at 2902 Sacramento St serves Richmond, CA. Locs, natural hair, braids, color, men's cuts with Britnee Lott. (510) 690-5274.",
    h1: "Richmond Hair Salon — Locs, Natural Hair, Color",
    intro:
      "Richmond clients have been driving down to Studio Salon for years. The run from Point Richmond, Marina Bay, Hilltop, or the San Pablo side of Richmond to 2902 Sacramento St in Berkeley takes twenty to twenty-five minutes on a normal day — a little longer on Friday afternoons. Owner Britnee Lott has built a steady Richmond following because there are not many places north of the Bay that handle locs, natural hair, and color the way she does. Services include locs start to finish, natural hair, braids, weaves, color, and men's cuts. If you are in Richmond and looking for a real stylist, call (510) 690-5274.",
    sections: [
      {
        heading: "Why Richmond Clients Make the Drive",
        content:
          "Richmond is a big, spread-out city, and finding a stylist who handles locs and textured hair well is not simple. That is why a meaningful number of Britnee Lott's clients come down from Richmond every month. The services she offers — starter locs, retwists, interlocking, loc repair, natural hair, silk press, braids, weaves, color, and men's cuts — are the services Richmond clients have often told her they have had trouble finding locally. The consultation is what makes the trip worth it. Britnee does not rush. She looks at your hair, asks about your last stylist, talks through what has worked and what has failed, and gives you an honest take. Richmond clients typically end up booking recurring appointments because the quality is consistent and the drive becomes part of their routine. For many, it is the only real option for the kind of work they want done.",
      },
      {
        heading: "Getting Here from Richmond",
        content:
          "The drive from Richmond to Studio Salon is longer than a typical East Bay run but still straightforward. From Point Richmond, take I-580 east across the Richmond-San Rafael approach, then south on I-80 or San Pablo Ave. From Marina Bay, Marina Way South to I-580 or Cutting Blvd to San Pablo Ave both work. Hilltop residents usually take I-80 south to the Ashby exit. The San Pablo side of Richmond has the easiest shot — San Pablo Ave south is a straight line down to the salon. Richmond BART on the Richmond line connects cleanly to Ashby BART, and Ashby is about fifteen minutes on foot from 2902 Sacramento St, Berkeley. AC Transit 72R runs rapid service down San Pablo Ave from Richmond for clients who want a one-bus option. Parking on Sacramento and the side streets is usually easy. Plan on about twenty-five minutes, traffic depending.",
      },
      {
        heading: "Richmond Neighborhoods We Serve",
        content:
          "Richmond is bigger than most people realize, and our clients come from across the city. Point Richmond residents — the folks tucked near the marina and the old downtown — usually take the scenic route down I-580 and San Pablo. Marina Bay clients come from the newer waterfront neighborhoods and often pair the drive with a grocery or restaurant stop. Hilltop, up near the mall and the hills, is its own world; Hilltop regulars tend to book longer appointments so the drive is worth it. The San Pablo side of Richmond — the homes and apartments along and near San Pablo Ave — is practically a straight shot down the same road to the salon, and we see many San Pablo clients who have been loyal for years. Richmond is a city of neighborhoods, each with its own feel, and Studio Salon has become a regular destination for clients from all of them.",
      },
      {
        heading: "Your First Appointment Here",
        content:
          "Because the drive from Richmond is longer than from other East Bay cities, first-time Richmond clients should plan accordingly. Call (510) 690-5274 — or text — to book and talk through what you are coming in for. Britnee will confirm timing and let you know what to expect. For locs, that often means a longer consultation on the first visit to understand your history and plan your maintenance schedule. For color, she will ask about previous services so the lift is safe and predictable. Braids, weaves, natural hair, and men's cuts are more straightforward. When you pull up at 2902 Sacramento St, Berkeley, CA 94702, park on Sacramento or a side street. Bring reference photos if you have a specific style in mind. Most Richmond clients leave the first visit with a rebook because the drive only makes sense if your stylist is consistent — and consistent is what Britnee is.",
      },
    ],
    neighborhoods: [
      "Point Richmond",
      "Marina Bay",
      "Hilltop",
      "San Pablo",
    ],
    nearbyLocations: ["el-cerrito", "albany", "kensington"],
    latitude: 37.9358,
    longitude: -122.3478,
  },

  /* ── Kensington ──────────────────────────────────────────── */
  {
    slug: "kensington",
    city: "Kensington",
    state: "CA",
    title: "Hair Salon in Kensington, CA | Studio Salon",
    metaDescription:
      "Kensington residents know Studio Salon well. Locs, natural hair, braids, color, and men's cuts on Sacramento St in Berkeley. (510) 690-5274.",
    h1: "Kensington Hair Salon and Loc Specialist Down the Hill",
    intro:
      "Kensington sits on the ridge between Berkeley and El Cerrito, and for Kensington residents the drive down to Studio Salon is short — ten minutes off the hill, straight into South Berkeley. Arlington Ave drops south into Berkeley easily, and from Kensington Park the run down Colusa or Arlington is second nature. Britnee Lott works with a steady group of Kensington clients: long-time homeowners, Kensington Hilltop School families, and residents who have watched her open her chair and stayed with her since. Services at Studio Salon cover locs, natural hair, braids, weaves, color, and men's cuts. The salon is at 2902 Sacramento St, Berkeley, CA 94702. Call (510) 690-5274.",
    sections: [
      {
        heading: "Why Kensington Comes Down the Hill",
        content:
          "Kensington is small and close-knit, and the word about a trustworthy stylist moves fast. Britnee Lott has become one of the local names when Kensington residents ask around for a loc specialist, a natural hair stylist, or a place their teenager can get a real cut. Services run across the board: starter locs, retwists, interlocking, loc repair, natural hair, silk press, braids, weaves, color, and men's cuts. Kensington clients tend to value honesty over hype — they want to know what is going to work and what is not, how often they should be coming in, and how to care for their hair between visits. That is exactly how Britnee runs her chair. The consultation is not a formality; it is the foundation of the appointment. After a first visit, most Kensington clients book their next appointment before they leave, because the short drive is worth it.",
      },
      {
        heading: "Getting Here from Kensington",
        content:
          "The trip from Kensington to Studio Salon is one of the shortest we see. From Arlington Ave, head south — Arlington becomes The Alameda as you cross into North Berkeley. From Kensington Park, take Colusa or Arlington down, then cut over to Sacramento St. Total drive time is under fifteen minutes outside of rush hour. For public transit, AC Transit bus 7 runs from Kensington down into Berkeley and connects easily to 51B or 72 to get to Sacramento St. North Berkeley BART is walkable for Kensington residents near the south end of town, and Ashby BART is the closest BART to the salon. Parking on Sacramento St and the residential side streets like Oregon, Prince, and Russell is usually open. The salon is at 2902 Sacramento St, Berkeley, CA 94702. For help figuring out the best route on a specific day, call (510) 690-5274.",
      },
      {
        heading: "Kensington Neighborhoods We Serve",
        content:
          "Kensington is compact, but it has real neighborhood character, and we see clients from all over the hilltop. Arlington Ave residents — the families and long-time homeowners along the main spine of Kensington — make the run down the hill often enough that the drive barely registers. Kensington Park clients come from the blocks around the park and the elementary school, and we see a lot of family appointments from that corner of town: a parent getting a retwist, a kid getting a first real cut, sometimes both in one visit. Because Kensington is so small, many of our clients know each other — we hear referrals constantly. The hilltop community has a quiet loyalty to local businesses that do right by them, and Studio Salon fits that pattern. Wherever you are in Kensington, the drive to 2902 Sacramento St, Berkeley is short, predictable, and worth it.",
      },
      {
        heading: "First Visit Walkthrough",
        content:
          "First-time Kensington clients usually find the salon easy to get to and easy to work with. Call or text (510) 690-5274, or book online. Britnee will confirm what service you are scheduling and how much time to block off. Locs tend to take the longest — especially a first retwist or a repair session — so be ready for a longer appointment on your first visit. Color, braids, weaves, and natural hair require a real consultation up front; Britnee will look at your hair, ask about recent services, and talk through what you want. Men's cuts are quicker. Bring reference photos if there is a specific look in mind. The salon is at 2902 Sacramento St, Berkeley, CA 94702. Park on Sacramento or the side streets. The first visit is as much about building the working relationship as it is about the hair itself — you leave with a plan.",
      },
    ],
    neighborhoods: [
      "Arlington Ave",
      "Kensington Park",
    ],
    nearbyLocations: ["berkeley", "albany", "el-cerrito"],
    latitude: 37.9077,
    longitude: -122.2828,
  },
];

export function getLocationBySlug(slug: string): LocationDetail | null {
  return locationDetails.find((l) => l.slug === slug) ?? null;
}
export function getAllLocations(): LocationDetail[] {
  return locationDetails;
}
export function getAllLocationSlugs(): string[] {
  return locationDetails.map((l) => l.slug);
}

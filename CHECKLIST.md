# CHECKLIST.md — Studio Salon Berkeley
**SEO Audit Checklist — adapted from MASTER-CHECKLIST.md**
**Last updated:** 2026-04-22 (GA4, Clarity, GSC, Bing Webmaster Tools all live)

---

## Client Quick Reference

- **Business:** Studio Salon (Studio Salon Berkeley)
- **Phone:** (510) 690-5274
- **Address:** 2902 Sacramento St, Berkeley, CA 94702
- **Hours:** Tue–Sat 9am–7pm (Thu opens 8:30am), Sun–Mon closed
- **GBP primary category:** Hair Salon
- **GBP additional categories:** Loc extensions, Braiding shop, Beauty salon
- **Primary service:** Loc maintenance + natural hair (Berkeley, East Bay)
- **Service area:** Berkeley, Oakland, Albany, Emeryville, El Cerrito, Richmond, Kensington
- **Booking:** Booksy (`booksy.com/en-us/1434403_studio-salon_hair-salon_119583_berkeley`)
- **Rating:** 5.0 / 13 reviews (Booksy)
- **Domain:** studiosalonberkeley.com

---

## Audit Commands

```bash
cd /Users/atlas/repo/agents/arnold/workspace

# Homepage
python3 tasks/check-page/check.py --url "https://studiosalonberkeley.com" --llm

# Full site
python3 tasks/check-page/check_all.py --sitemap "https://studiosalonberkeley.com/sitemap.xml" --llm

# Full site + broken links (run monthly)
python3 tasks/check-page/check_all.py --sitemap "https://studiosalonberkeley.com/sitemap.xml" --llm --follow-links
```

---

## Homepage Checklist

```
✅ LocalBusiness / HairSalon schema — name, telephone, address, url, sameAs, openingHoursSpecification (layout.tsx)
✅ GBP map embed present (homepage, section 7)
✅ Blog preview section "From the Chair" — 3 recent post links (creates crawl path to blog)
✅ Phone number visible, wrapped in tel: href
✅ CTA button above fold
✅ OG image set (opengraph-image.png 1200×630)
✅ Internal links to all service + location pages
✅ Deploy live — site returns 200 (deployed 2026-04-22)

[ ] check.py passes all mechanical checks (run after deploy)
[ ] LLM goal completion: PASS
[ ] LLM local signals: PASS
[ ] Word count ≥ 600 (verify after deploy)
```

---

## Service Pages Checklist (`/services/[slug]`)

```
✅ Per-service FAQ sets — 65 questions across 13 services (lib/service-faqs.ts)
✅ FAQSection component wired — per-service FAQs with SERVICE_FAQS fallback
✅ FAQPage JSON-LD emitted from FAQSection component
✅ Service schema (Service + LocalBusiness provider)
✅ BreadcrumbList schema
✅ Related services internal links
✅ Related locations internal links
✅ Full Booksy menu expanded — 85+ services across 10 categories (services/page.tsx FULL_MENU)
✅ ServicesMenuList component with video lightbox

[ ] check.py passes on all service pages (run after deploy)
[ ] LLM goal completion: PASS on top 5 services
```

**Services covered by per-service FAQs:**
- loc-maintenance, natural-hair-styling, silk-press, hair-color, braids
- sew-in-weave, crochet-braids, quick-weave, mens-hair-barbering, womens-haircut
- chemical-relaxer, two-strand-twist, eyebrow-waxing

---

## Location Pages Checklist (`/locations/[slug]`)

```
✅ Location enrichments created — 7 cities (lib/locations-enrichment.ts)
✅ Hyperlocal content: nearby landmarks, transit access, local context per city
✅ "About [City] Clients" section rendered on each location page
✅ FAQSection wired on location pages (LOCATION_FAQS)
✅ Unique content per city (distinct angles — not copy-paste)
✅ Internal links to service pages

[ ] check.py passes on all location pages (run after deploy)
```

**Cities with enrichments:**
- Berkeley (primary), Oakland, Albany, Emeryville, El Cerrito, Richmond, Kensington

**Unique angles per city:**
- Richmond — underserved Black hair care gap; loc specialist within reach without driving to Oakland
- Kensington — hill community word-of-mouth, convenience of nearby Berkeley
- Emeryville — efficiency-driven corporate workers, quick booking appeal
- El Cerrito — family-oriented, close to BART, repeat appointment community
- Albany — tight-knit residential, personal stylist relationships
- Oakland — large natural hair community, closest major city to Berkeley
- Berkeley — primary market, university proximity, diverse natural hair clientele

---

## Blog Posts Checklist

```
✅ Blog preview on homepage routes visitors to blog (crawl path established)

[ ] Article schema on all /blog/* pages — verify author, datePublished, dateModified
[ ] Each post: word count ≥ 600
[ ] Each post: internal links to 2+ service pages
[ ] FAQPage schema on posts with Q&A sections
[ ] New post at least 1×/month
```

---

## Technical SEO

```
⚠️ HTTPS — Cloudflare serves on both HTTP and HTTPS; enable "Always Use HTTPS" in Cloudflare dashboard → SSL/TLS → Edge Certificates
✅ www → non-www redirect (308 permanent, via next.config.ts)
✅ Canonical tags — self-referencing on every page (verified on live homepage)
✅ robots.txt — sitemap URL included, AI crawlers allowed (see note below)
✅ sitemap.xml — auto-generated, accessible at /sitemap.xml (returns 200)
✅ GA4 — installed (G-5X4PNNP00L) in wrangler.toml + layout.tsx, live on site
✅ Microsoft Clarity — installed (wg1otegp11), live on site
✅ Bing Webmaster Tools — verified + sitemap submitted (2026-04-22)
✅ Google Search Console — domain verified, sitemap submitted (2026-04-22)
✅ OG tags — og:title, og:description, og:url, og:image all present (verified on live homepage)
✅ Twitter card tags — summary_large_image with title, description, image
[ ] IndexNow — needs google-indexing-key.json for automatic per-URL submission
[ ] Core Web Vitals — LCP < 2.5s, CLS < 0.1, FID < 100ms (PageSpeed Insights)
[ ] Mobile rendering — test in Chrome DevTools device mode
[ ] Image alt text — every image has descriptive alt text
[ ] No broken links — validate with check_all.py --follow-links
```

**robots.txt note:** Cloudflare's managed robots.txt prepends `Disallow: /` for several AI crawlers (GPTBot, ClaudeBot, etc.), but the site's own rules below re-`Allow: /` them. Most crawlers use the last matching rule, so this should be fine, but verify in GSC and Bing Webmaster Tools that pages are being indexed.

---

## Schema Checklist

```
✅ HairSalon / LocalBusiness schema in layout.tsx (global — every page)
   — name, telephone, address, url, image, sameAs, openingHoursSpecification
✅ AggregateRating in layout.tsx (5.0 / 13 reviews — Booksy)
✅ Service schema on /services/[slug] pages
✅ FAQPage schema on service + location pages (via FAQSection component)
✅ BreadcrumbList on service + location pages

[ ] Article schema on /blog/* pages — verify present on all posts
[ ] Schema validation — run at schema.org/validator after deploy
```

---

## SEO Pipeline & Tier Wiring

Status of the research + scoring pipeline integration. See `/Users/atlas/repo/important/KEYWORD-LADDER.md` for methodology.

### Pipeline DB state
```
✅ public.project_configs seeded (8 demand_seeds, Berkeley geography)
✅ customer.serp_results populated — 83 rows across 8 keywords (2026-04-20)
✅ customer.serp_features populated — 8 rows with ad count + SERP features
✅ customer.keyword_tiers scored — 8 rows, distribution F=4 E=3 D=1
✅ site-plan.json emitted → /repo/studiosalonberkeley/site-plan.json
```

### Template-level tier wiring
```
✅ lib/site-plan.ts — helper that loads site-plan.json at build time
✅ app/sitemap.ts — target_now URLs get priority 0.95 (vs 0.8), excluded URLs omitted
✅ app/services/[slug]/page.tsx — emits <meta name="robots" content="noindex"> for excluded slugs
✅ app/locations/[slug]/page.tsx — same noindex behavior
✅ scripts/generate-gbp-pages.py — reorders queue to generate target_now slugs first, skips reframe/skip slugs
```

### Scored targets — what to attack first

```
★ TARGET NOW (break through indexing first):
  F  balayage berkeley            forum_fallback       opp=0.64
  F  hair salon berkeley          forum_fallback       opp=0.63
  F  haircut berkeley ca          forum_fallback       opp=0.64
  F  hair extensions berkeley     aggregator_fortress  opp=0.65
  E  hair stylist berkeley        aggregator_fortress  opp=0.59

▸ GBP-ONLY (compete via local pack, not organic):
  E  keratin treatment berkeley   local_pack_dominated opp=0.63

▸ REFRAME (current intent = wiki-locked, won't rank commercial):
  E  highlights berkeley          wiki_locked          opp=0.47

▸ TARGET LATER (build authority via lower tiers first):
  D  hair color berkeley          mixed_strong         opp=0.53
```

### Daily pipeline (runs automatically via cron once DNS is live)
```bash
bash /Users/atlas/repo/agents/run-customer.sh --client studiosalonberkeley
```
Refreshes SERP data, re-scores tiers, regenerates `site-plan.json`, and updates the synthesis report. Blocked right now because preflight fails (see "Remaining onboarding gaps" below).

---

## Citation Audit (Post-Deploy)

**Fix order: data providers first → major surfaces → verticals → long-tail**

**Tier 1 — Data Providers** *(fix first — errors re-sync downstream)*
```
[ ] Data Axle (localproductsupport.infousa.com)
[ ] Neustar / Localeze
[ ] Foursquare / Places
```

**Tier 2 — Major Surfaces** *(manual — free)*
```
[ ] Google Business Profile — verify NAP, categories, photos, description
[ ] Apple Maps Connect (mapsconnect.apple.com)
[ ] Bing Places for Business (bingplaces.com)
[ ] Yelp — claim/create listing (biz.yelp.com)
[ ] Facebook Business (business.facebook.com)
```

**Tier 3 — High-Authority Verticals**
```
[ ] Better Business Bureau (BBB)
[ ] Chamber of Commerce (Berkeley Chamber — body link = high-authority backlink)
[ ] StyleSeat / Vagaro / Booksy (beauty-specific directories)
[ ] Thumbtack
[ ] D&B (Dun & Bradstreet)
```

**Tier 4 — Long-Tail Directories** *(LeadSnap covers most automatically)*
```
[ ] Yellow Pages (YP.com)
[ ] MapQuest
[ ] Manta
[ ] MerchantCircle
[ ] HotFrog
[ ] ShowMeLocal
[ ] Cylex
[ ] Brownbook
```

**NAP to use everywhere — byte-for-byte:**
```
Name:    Studio Salon
Address: 2902 Sacramento St, Berkeley, CA 94702
Phone:   (510) 690-5274
```

---

## GBP Optimization Checklist

```
[ ] Business name — matches legal name exactly (no keyword stuffing)
[ ] Primary category — Hair Salon
[ ] Additional categories — add: Loc extensions, Braiding shop, Natural hair salon
[ ] Description — 750 chars max; include "loc maintenance", "natural hair", "Berkeley" in first 250
[ ] Services — add every service with name + description:
    loc-maintenance, braids, sew-in weave, silk press, crochet braids,
    quick weave, hair color, women's haircut, men's haircut/barbering,
    two-strand twist, chemical relaxer, eyebrow waxing
[ ] Photos — minimum 10 (interior, chair, stylist at work, before/after styles)
    → update monthly, geotag if possible
[ ] Hours — verify match siteConfig.ts (Tue–Sat 9–7, Thu 8:30–7)
[ ] Phone/website — exact NAP, must match site + all citations
[ ] Reviews — respond to every review within 24 hours
[ ] Review link ready — https://g.page/r/[PLACE_ID]/review (get Place ID from GBP dashboard)
```

---

## Deployment Checklist

```
✅ DNS pointing to Cloudflare — site live at studiosalonberkeley.com
✅ wrangler deploy succeeds (deployed 2026-04-22, version 86ebde0d)
✅ Live site returns 200 on all major pages (homepage, /services, /sitemap.xml, /robots.txt)
✅ sitemap.xml accessible at /sitemap.xml
✅ BingSiteAuth.xml accessible at /BingSiteAuth.xml (Bing verification file)

⚠️ IndexNow — fires on deploy but no google-indexing-key.json found; manual submission needed
⚠️ Arnold healthcheck — check_all.py doesn't recognize --studiosalonberkeley flag yet; run with --sitemap instead

✅ Google Search Console — domain verified, sitemap submitted (2026-04-22)
✅ Bing Webmaster Tools — verified, sitemap submitted (2026-04-22)

[ ] Enable "Always Use HTTPS" in Cloudflare dashboard (SSL/TLS → Edge Certificates)
[ ] Run check.py on homepage after deploy
[ ] Run check_all.py on full sitemap after deploy
[ ] Submit all URLs to Google Indexing API:
    npm run index:all
```

---

## Monthly Maintenance Schedule

### Week 1 — Full Site Audit
```bash
python3 tasks/check-page/check_all.py --sitemap "https://studiosalonberkeley.com/sitemap.xml" --llm --follow-links
```
Document output to `/agents/arnold/workspace/audits/YYYY-MM-studiosalonberkeley.txt`

### Week 2 — Fix Sprint
- Fix all FAIL items from audit (priority order: HTTP → noindex → H1 → title → canonical → schema → phone → map embed)
- Redeploy
- Rerun check.py on fixed pages

### Week 3 — Rank Map Review
- Check LeadSnap rank map — compare to 2 weeks prior
- Pages dropped? Investigate (algorithm update? competitor link?)
- Pages in top 3? Note and replicate

### Week 4 — Content + GBP
- GBP: 2 posts this month?
- GBP: new photos this month?
- Reviews: new reviews responded to within 24hr?
- GSC: new queries appearing? Any 0-impression pages?
- Blog: new post published?

---

## FAQ Generation Workflow (PAA-Driven)

Run this for every service page not yet in `lib/service-faqs.ts`:

1. Search `[service] in Berkeley` in Google (incognito)
2. Record all "People Also Ask" questions (first 5–8)
3. For each question: does the page already answer it?
   - Yes → write a 2–4 sentence answer using facts in the content
   - No → skip (don't invent facts)
4. Aim for 5 Q&A pairs per service
5. Add to `SERVICE_FAQ_MAP` in `lib/service-faqs.ts`

All 13 services already covered — revisit after GSC shows new PAA queries.

---

## Priority Fix Order (When check.py Fails)

1. HTTP status / HTTPS — site must be reachable and secure
2. noindex — if accidentally set, nothing else matters
3. H1 missing or > 1 — structural failure
4. Title / meta description — SERP visibility
5. Canonical — prevents duplicate content penalties
6. LocalBusiness / HairSalon schema — local pack eligibility
7. Phone + click-to-call — conversion-critical
8. GBP map embed — local signal
9. OG tags — social sharing
10. FAQPage schema — improves CTR in SERP
11. Image alt text — accessibility + minor ranking signal
12. Broken links — crawl health

---

## Content Words to NEVER Use

```
NEVER: embark, look no further, navigating, top-notch, unleash, unlock,
       ensure, in conclusion, comprehensive, as such, therefore, thus,
       noteworthy, innovative, cutting-edge, leverage, synergy, optimize,
       solutions, best-in-class, dedicated to excellence, delve, multifaceted,
       tailored, robust, seamless
```

---

## Remaining onboarding gaps (preflight blockers)

These are the human-judgment parts of onboarding that `run-onboard.sh` couldn't automate. `preflight --client studiosalonberkeley` will fail until they're done. See `/Users/atlas/repo/important/MASTER-SETUP.md` Phase 1 Step 1 for the full flow.

```
[ ] public.nap_profiles row — legal name, exact phone, city/state, website
    → needs byte-for-byte NAP: "Studio Salon" / "2902 Sacramento St, Berkeley, CA 94702" / "(510) 690-5274"

[ ] studiosalonberkeley PG schema — gbp_profile, gbp_hours, gbp_categories, gbp_media
    → Tue-Sat hours, HairSalon primary + Loc extensions/Braiding shop/Natural hair additional,
      photos once the salon provides them

[ ] D1 gbp_locations row — id, name, primary_category, services JSON
    → needed for GBP sync skill to work

[ ] /repo/important/business/studiosalonberkeley/ strategy doc tree (01-05)
    → 01_service_entity_research.md
    → 02_gbp_categories_and_services.md
    → 03_local_authority_assets.md
    → 04_content_clusters.md
    → 05_schema_markup.md

[ ] LLM service expansion Pass 2 + human Pass 3 review
    → current catalog is 13 services; GBP taxonomy for Hair Salon + additional categories
      supports ~40-50. Run the expansion prompt from /repo/agents/Atlas/workspace/tasks/onboard-client/expansion-prompt.md
```

**Resume command when you're ready to finish onboarding:**

Tell Claude/Devin:
> "Continue onboarding studiosalonberkeley following `/Users/atlas/repo/agents/Atlas/workspace/tasks/onboard-client/with-website.md` — resume from Step 4 (LLM expansion) since run-onboard.sh already completed Steps 1-3."

---

## Pending / Backlog

Site is live. Remaining items roughly in priority order:

```
✅ Deploy — site live on Cloudflare Workers (2026-04-22)
✅ GA4 installed — G-5X4PNNP00L (wrangler.toml + layout.tsx)
✅ Microsoft Clarity installed — wg1otegp11 (layout.tsx)
✅ Bing site verification file deployed — BingSiteAuth.xml (public/)

✅ Google Search Console — domain verified, sitemap submitted (2026-04-22)
✅ Bing Webmaster Tools — verified, sitemap submitted (2026-04-22)

[ ] Enable "Always Use HTTPS" in Cloudflare dashboard
[ ] Core Web Vitals pass (PageSpeed Insights)
[ ] LeadSnap citation campaign start
[ ] GBP: add all 13 services with descriptions
[ ] GBP: upload 10+ photos (before/after styles, salon interior, stylist at work)
[ ] GBP: set up post cadence (1-2×/week, Arnold automation)
[ ] Review request system — SMS template after each appointment
[ ] Chamber of Commerce Berkeley membership (body backlink)
[ ] Yelp claim + NAP verify
[ ] Article schema audit on all /blog/* posts
[ ] Schema validation at schema.org/validator
[ ] E-E-A-T signals — stylist credentials + certifications on About/service pages
[ ] TikTok / Instagram embed on homepage or blog (social proof signal)
[ ] Set up google-indexing-key.json for automatic per-URL IndexNow submission
```

**What shipped with the 2026-04-22 deploy:**

```
• GA4 tracking (G-5X4PNNP00L) live on every page
• Microsoft Clarity (wg1otegp11) live on every page
• Bing verification file at /BingSiteAuth.xml
• Full Booksy service menu — 85+ services across 10 categories with video lightbox
• sitemap.xml promotes target_now URLs to priority 0.95
• Any service/location page in site-plan.json.exclude emits noindex
• generate-gbp-pages.py generates target_now services first
```

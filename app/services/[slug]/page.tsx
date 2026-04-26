import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABlock from "@/components/CTABlock";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  serviceImagePath,
} from "@/lib/services-data";
import { getLocationBySlug } from "@/lib/locations-data";
import { SERVICE_FAQS } from "@/lib/common-faqs";
import { getServiceFAQs } from "@/lib/service-faqs";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

/** Slugs the SEO pipeline marked exclude/orphan — emit noindex per page. */
const NOINDEX_SLUGS = noindexSlugs(loadSitePlan());

/** Convert a slug like "san-jose" to a label like "San Jose". */
function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ============================================================
   STATIC PARAMS — pre-render every service detail page
   ============================================================ */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* ============================================================
   SEO METADATA
   ============================================================ */
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const isNoindex = NOINDEX_SLUGS.has(slug);

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    ...(isNoindex
      ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
      : {}),
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "https://studiosalonberkeley.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} | ${siteConfig.name}`,
        },
      ],
    },
  };
}

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  /* Build labels for related services and locations */
  const relatedServiceItems = service.relatedServices.map((rs) => {
    const related = getServiceBySlug(rs);
    return { slug: rs, label: related?.h1 ?? slugToLabel(rs) };
  });

  const relatedLocationItems = service.relatedLocations.map((rl) => {
    const related = getLocationBySlug(rl);
    return { slug: rl, label: related?.city ?? slugToLabel(rl) };
  });

  /* Schema.org JSON-LD for the service */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone.schema,
      url: siteConfig.url,
      areaServed: relatedLocationItems.map((loc) => ({
        "@type": "City",
        name: `${loc.label}, CA`,
      })),
    },
    areaServed: relatedLocationItems.map((loc) => ({
      "@type": "City",
      name: `${loc.label}, CA`,
    })),
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  /* FAQPage JSON-LD — generated from sections whose headings are questions */
  const questionWords = /^(What|How|Why|Who|When|Can|Is|Are|Do|Does|Will|Should)\b/i;
  const faqSections = service.sections.filter((s) => questionWords.test(s.heading.trim()));
  const faqSchema = faqSections.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSections.map((s) => ({
          "@type": "Question",
          name: s.heading.trim().endsWith("?") ? s.heading.trim() : `${s.heading.trim()}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: s.content.slice(0, 500),
          },
        })),
      }
    : null;

  /* BreadcrumbList JSON-LD */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/services/${service.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.h1, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  /* WebPage JSON-LD */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/services/${service.slug}`,
    url: `${siteConfig.url}/services/${service.slug}`,
    name: service.title,
    description: service.metaDescription,
    isPartOf: { "@id": "https://studiosalonberkeley.com/#website" },
    breadcrumb: { "@id": `${siteConfig.url}/services/${service.slug}#breadcrumb` },
    about: { "@id": "https://studiosalonberkeley.com/#business" },
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Atelier Hero ─────────────────────────────────────── */}
      <section
        className="atelier-service-hero"
        aria-labelledby="service-hero-heading"
      >
        <span aria-hidden="true" className="atelier-orb atelier-orb--tr" />
        <span aria-hidden="true" className="atelier-orb atelier-orb--bl" />
        <span aria-hidden="true" className="atelier-grain" />
        <span aria-hidden="true" className="atelier-rule-top" />

        <div className="container-xl atelier-service-hero-inner">
          <div className="atelier-service-grid">
            {/* Image plate */}
            <figure className="atelier-plate">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImagePath(service.slug)}
                alt={service.h1}
                width={1200}
                height={1500}
                className="atelier-plate-img"
                loading="eager"
              />
              <span className="atelier-plate-vignette" aria-hidden="true" />
              <figcaption className="atelier-plate-caption">
                <span className="atelier-plate-caption-dot" aria-hidden="true" />
                <span>2902 Sacramento St · Studio Salon Berkeley</span>
              </figcaption>
              <span className="atelier-plate-frame atelier-plate-frame--tl" aria-hidden="true" />
              <span className="atelier-plate-frame atelier-plate-frame--br" aria-hidden="true" />
            </figure>

            {/* Text column */}
            <div className="atelier-service-text">
              <p
                className="atelier-prelude"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <em>The Service</em>
                <span className="atelier-prelude-rule" aria-hidden="true" />
                <span className="atelier-numeral">Studio Salon</span>
              </p>

              <h1
                id="service-hero-heading"
                className="atelier-display atelier-display--service"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {service.h1}
                <span aria-hidden="true" className="atelier-period">.</span>
              </h1>

              <p
                className="atelier-lede atelier-lede--clamped"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {service.intro}
              </p>

              <div className="atelier-cta-row">
                <Link
                  href={`/book/${service.slug}`}
                  className="atelier-cta-primary"
                >
                  <span>Reserve the Chair</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a
                  href={`#section-0-heading`}
                  className="atelier-cta-ghost"
                >
                  Read the brief
                </a>
              </div>

              <p
                className="atelier-signature"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <span className="atelier-signature-line" aria-hidden="true" />
                <em>by appointment, by hand —</em>
                <span className="atelier-signature-name">Studio Salon Berkeley</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Sections ─────────────────────────────────── */}
      {service.sections.map((section, idx) => {
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={idx}
            className={`${isAlt ? "bg-[#FCE8EC]" : "bg-[#FFF9F9]"} section-pad`}
            aria-labelledby={`section-${idx}-heading`}
          >
            <div className="container-xl max-w-3xl">
              <div className="blush-divider mb-6" />
              <h2
                id={`section-${idx}-heading`}
                className="section-heading mb-5"
              >
                {section.heading}
              </h2>
              <p className="font-[family-name:var(--font-sans)] text-[#5A5A5A] text-lg leading-[1.85]">
                {section.content}
              </p>
            </div>
          </section>
        );
      })}

      {/* ── Related Links ────────────────────────────────────── */}
      <section
        className="bg-[#FCE8EC] section-pad"
        aria-labelledby="related-heading"
      >
        <div className="container-xl max-w-3xl">
          <div className="blush-divider mb-6" />
          <h2 id="related-heading" className="section-heading mb-8">
            Explore More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Services */}
            <div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[#2C2C2C] mb-4">
                Related Services
              </h3>
              <ul className="space-y-3">
                {relatedServiceItems.map((rs) => (
                  <li key={rs.slug}>
                    <Link
                      href={`/services/${rs.slug}`}
                      className="font-[family-name:var(--font-sans)] font-bold text-[#B86A7E] hover:text-[#9E4F63] text-base transition-colors"
                    >
                      {rs.label} &rarr;
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="font-[family-name:var(--font-sans)] font-bold text-[#B86A7E] hover:text-[#9E4F63] text-base transition-colors"
                  >
                    View All Services &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Locations */}
            <div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[#2C2C2C] mb-4">
                Service Locations
              </h3>
              <ul className="space-y-3">
                {relatedLocationItems.map((rl) => (
                  <li key={rl.slug}>
                    <Link
                      href={`/locations/${rl.slug}`}
                      className="font-[family-name:var(--font-sans)] font-bold text-[#B86A7E] hover:text-[#9E4F63] text-base transition-colors"
                    >
                      {rl.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extra nav links */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="font-[family-name:var(--font-sans)] font-semibold text-sm px-4 py-2.5 rounded-full border-2 border-[#B86A7E] text-[#B86A7E] hover:bg-[#B86A7E] hover:text-white transition-colors"
            >
              Read Our Blog
            </Link>
            <Link
              href="/book"
              className="font-[family-name:var(--font-sans)] font-semibold text-sm px-4 py-2.5 rounded-full border-2 border-[#B86A7E] text-[#B86A7E] hover:bg-[#B86A7E] hover:text-white transition-colors"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <FAQSection faqs={getServiceFAQs(service.slug) ?? SERVICE_FAQS} headingId={`faq-${service.slug}`} />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CTABlock
        headline="Ready for the chair?"
        subtext={`Book your ${service.h1.toLowerCase()} appointment today. Call or text us at ${siteConfig.phone.display} to reserve your spot.`}
        showPhone={true}
        headingId="service-detail-cta"
      />
    </>
  );
}

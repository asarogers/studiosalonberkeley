import type { Metadata, Viewport } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/lib/siteConfig";

/* ============================================================
   FONT LOADING
   ============================================================ */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-sans",
  display: "swap",
});

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Studio Salon | Hair Salon & Loc Specialists in Berkeley, CA",
    template: "%s | Studio Salon",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Studio Salon | Hair Salon & Loc Specialists in Berkeley, CA",
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Studio Salon — Berkeley's loc and natural hair specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Salon | Hair Salon & Loc Specialists in Berkeley, CA",
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@studiosalonberkeley",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#E8A1B3",
};

/* ============================================================
   SCHEMA.ORG HAIR SALON JSON-LD
   ============================================================ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image.png`,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.jpeg`,
    width: 512,
    height: 512,
  },
  description: siteConfig.description,
  telephone: siteConfig.phone.schema,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.latitude,
    longitude: siteConfig.address.longitude,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    geoRadius: "15000",
    name: "Berkeley and the East Bay",
  },
  serviceType: [
    "Hair Salon",
    "Loc Maintenance",
    "Loc Retwist",
    "Natural Hair Styling",
    "Braids",
    "Sew In Weave",
    "Crochet Braids",
    "Silk Press",
    "Hair Color",
    "Barbershop",
  ],
  priceRange: "$$",
  openingHours: [
    "Tu 09:00-19:00",
    "We 09:00-19:00",
    "Th 08:30-19:00",
    "Fr 09:00-19:00",
    "Sa 09:00-19:00",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "08:30",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(siteConfig.rating.count),
    bestRating: "5",
    worstRating: "1",
  },
  employee: [
    {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Hair Stylist & Loctician",
    },
  ],
  sameAs: [siteConfig.social.instagram].filter(Boolean),
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${lora.variable} ${nunitoSans.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="en-US" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  analytics_storage: 'granted',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                  url_passthrough: true,
                  ads_data_redaction: true,
                });`,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Suspense>
          <Navigation />
        </Suspense>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        <MobileStickyButton />
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />

        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w2kg2c1p0p");`,
          }}
        />
      </body>
    </html>
  );
}

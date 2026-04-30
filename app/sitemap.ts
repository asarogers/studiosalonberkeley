import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services-data';
import { getAllLocationSlugs } from '@/lib/locations-data';
import { getAllGBPCategorySlugs } from '@/lib/gbp-categories-data';
import { siteConfig } from '@/lib/siteConfig';
import { loadSitePlan, priorityServiceSlugs, noindexSlugs, urlToSlug } from '@/lib/site-plan';

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // Tier data from the SEO pipeline (optional — sitemap works without it).
  // See /repo/important/KEYWORD-LADDER.md for methodology.
  const plan          = loadSitePlan();
  const prioritySlugs = priorityServiceSlugs(plan);
  const noindex       = noindexSlugs(plan);
  const priorityLocs  = plan
    ? new Set(
        plan.sitemaps.priority.urls
          .filter((u) => u.url.startsWith('/locations/'))
          .map((u) => urlToSlug(u.url)),
      )
    : new Set<string>();

  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceUrls = getAllServiceSlugs()
    .filter((slug) => !noindex.has(slug))
    .map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: prioritySlugs.has(slug) ? 0.95 : 0.8,
    }));

  const locationUrls = getAllLocationSlugs()
    .filter((slug) => !noindex.has(slug))
    .map((slug) => ({
      url: `${BASE}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priorityLocs.has(slug) ? 0.95 : 0.8,
    }));

  const categoryUrls = getAllGBPCategorySlugs().map((slug) => ({
    url: `${BASE}/services/categories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${BASE}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...categoryUrls,
    ...serviceUrls,
    ...locationUrls,
    ...blogUrls,
  ];
}

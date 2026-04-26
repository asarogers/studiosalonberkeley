import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { getAllPosts, getCategories } from '@/lib/blog';
import { resolveImagePath } from '@/lib/image-path';
import CategoryFilter from '@/components/CategoryFilter';
import BlogSearch from '@/components/BlogSearch';

export const dynamic = 'force-static'

interface BlogPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { category, q } = await searchParams;
  const activeCategory = category || 'All';
  const isFiltered = activeCategory !== 'All';
  const hasSearchQuery = !!(q && q.trim());
  const title = isFiltered
    ? `${activeCategory} — Studio Salon Blog`
    : 'Hair tips, loc care & salon stories';
  const description = isFiltered
    ? `${activeCategory} articles from Studio Salon Berkeley.`
    : 'Loc care, protective style guides, natural hair tips, and salon stories from Studio Salon Berkeley.';
  return {
    title,
    description,
    alternates: { canonical: '/blog' },
    ...((isFiltered || hasSearchQuery) && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      title,
      description,
      url: 'https://studiosalonberkeley.com/blog',
      siteName: 'Studio Salon',
      type: 'website',
      images: [{ url: 'https://studiosalonberkeley.com/opengraph-image.png', width: 1200, height: 630, alt: 'Studio Salon Blog' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://studiosalonberkeley.com/opengraph-image.png'],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, q } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getCategories();
  const activeCategory = category || 'All';
  const searchQuery = (q || '').toLowerCase().trim();

  const featuredPost = allPosts.find((p) => p.featured);

  // Build category counts
  const categoryCounts: Record<string, number> = { All: allPosts.length };
  for (const post of allPosts) {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  }

  // Apply category filter
  const categoryFiltered =
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  // Apply search filter (title + excerpt)
  const filteredPosts = searchQuery
    ? categoryFiltered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery) ||
          p.excerpt.toLowerCase().includes(searchQuery)
      )
    : categoryFiltered;

  const gridPosts = filteredPosts.filter(
    (p) => !p.featured || activeCategory !== 'All' || !!searchQuery
  );

  const showFeatured = featuredPost && activeCategory === 'All' && !searchQuery;

  return (
    <>
      {/* ── Hero with Featured Post ──────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 md:py-20 lg:py-24"
        style={{
          background:
            'linear-gradient(135deg, #B86A7E 0%, #9E4F63 60%, #3D5C43 100%)',
        }}
      >
        {/* Subtle decorative circles */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="container-xl">
          <div
            className={`flex flex-col gap-10 ${
              showFeatured ? 'lg:flex-row lg:items-center lg:gap-16' : ''
            }`}
          >
            {/* Left side: heading + description */}
            <div
              className={`${
                showFeatured
                  ? 'text-center lg:w-5/12 lg:text-left'
                  : 'mx-auto max-w-3xl text-center'
              }`}
            >
              <p className="mb-3 font-[family-name:var(--font-sans)] text-sm font-semibold uppercase tracking-widest text-white/60">
                From the Chair
              </p>
              <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw+1rem,3.25rem)] font-bold leading-tight text-white">
                Loc care, protective styles &amp; salon stories
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Honest advice from Studio Salon Berkeley on locs, natural hair, braids, color, and
                everything that happens between salon visits.
              </p>
            </div>

            {/* Right side: featured post card in hero */}
            {showFeatured && (
              <div className="lg:w-7/12">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white/10 shadow-xl ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.14] hover:shadow-2xl"
                  aria-label={`Read featured article: ${featuredPost.title}`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-56 md:w-64">
                      <img
                        src={resolveImagePath('blog', featuredPost.slug)}
                        alt={featuredPost.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" />
                      {/* Category badge on image */}
                      <span className="absolute bottom-3 left-3 rounded-full bg-[#B86A7E] px-3 py-1 text-xs font-bold text-white shadow-lg">
                        {featuredPost.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 sm:p-7">
                      <p className="mb-2 font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-widest text-[#B86A7E]">
                        Featured Article
                      </p>
                      <h2 className="mb-2 font-[family-name:var(--font-serif)] text-xl font-bold leading-snug text-white transition-colors group-hover:text-white/90 md:text-2xl">
                        {featuredPost.title}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/70">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span>{featuredPost.author}</span>
                        <span aria-hidden="true">&#183;</span>
                        <time dateTime={featuredPost.date}>
                          {formatDate(featuredPost.date)}
                        </time>
                        <span aria-hidden="true">&#183;</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Featured Post — Full Width (below hero) ──────────── */}
      {showFeatured && (
        <section
          className="section-pad bg-[#FFF9F9]"
          aria-label="Featured article"
        >
          <div className="container-xl">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#F0D4DB] bg-white shadow-md transition-all duration-300 hover:shadow-xl md:flex-row"
              aria-label={`Read featured article: ${featuredPost.title}`}
            >
              {/* Large image */}
              <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-[45%] lg:w-[50%]">
                <img
                  src={resolveImagePath('blog', featuredPost.slug)}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy" />
                {/* Category badge overlaid on image */}
                <span className="absolute bottom-4 left-4 rounded-full bg-[#B86A7E] px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-lg">
                  {featuredPost.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
                <p className="mb-3 font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-widest text-[#B86A7E]">
                  Featured Article
                </p>
                <h2 className="mb-4 font-[family-name:var(--font-serif)] text-2xl font-bold leading-snug text-[#2C2C2C] transition-colors group-hover:text-[#9E4F63] md:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 text-base leading-relaxed text-[#5A5A5A] md:text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <span className="font-medium">{featuredPost.author}</span>
                  <span aria-hidden="true">&#183;</span>
                  <time dateTime={featuredPost.date}>
                    {formatDate(featuredPost.date)}
                  </time>
                  <span aria-hidden="true">&#183;</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#B86A7E] transition-all group-hover:gap-2.5">
                    Read Article
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Blog Grid ─────────────────────────────────────────── */}
      <section
        className="section-pad bg-white"
        aria-labelledby="all-articles-heading"
      >
        <div className="container-xl">
          {/* Controls: heading, search, category pills */}
          <div className="mb-10 flex flex-col gap-6">
            {/* Top row: heading + search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2
                id="all-articles-heading"
                className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#2C2C2C] md:text-3xl"
              >
                {searchQuery
                  ? `Search results for \u201c${q}\u201d`
                  : activeCategory === 'All'
                  ? 'Browse All Articles'
                  : `Articles in: ${activeCategory}`}
              </h2>
              <Suspense
                fallback={
                  <div className="h-10 w-96 animate-pulse rounded-full bg-[#FCE8EC]" />
                }
              >
                <BlogSearch initialValue={q || ''} />
              </Suspense>
            </div>

            {/* Category filter row */}
            <Suspense
              fallback={
                <div className="h-10 w-64 animate-pulse rounded-full bg-[#FCE8EC]" />
              }
            >
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                categoryCounts={categoryCounts}
              />
            </Suspense>
          </div>

          {gridPosts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-[#5A5A5A]">
                No posts found
                {searchQuery ? ` for \u201c${q}\u201d` : ' in this category'}.
              </p>
              <Link href="/blog" className="btn-secondary mt-6 inline-flex">
                View All Articles
              </Link>
            </div>
          ) : (
            <ul
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Article list"
            >
              {gridPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#F0D4DB]/80 bg-[#FFF9F9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Card image with category badge */}
                    <div className="relative h-[220px] shrink-0 overflow-hidden">
                      <img
                        src={resolveImagePath('blog', post.slug)}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" />
                      {/* Category badge overlaid on bottom-left of image */}
                      <span className="absolute bottom-3 left-3 rounded-full bg-[#B86A7E] px-3 py-1 text-xs font-bold text-white shadow-md">
                        {post.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-2 text-xs font-medium text-[#5A5A5A]">
                        {post.readTime}
                      </div>

                      <h3 className="mb-2 font-[family-name:var(--font-serif)] text-xl font-bold leading-snug text-[#2C2C2C] transition-colors group-hover:text-[#9E4F63]">
                        {post.title}
                      </h3>

                      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[#5A5A5A]">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-[#F0D4DB] pt-4">
                        <div className="text-xs text-[#5A5A5A]">
                          <span className="font-medium">{post.author}</span>
                          <span className="mx-1.5" aria-hidden="true">
                            &middot;
                          </span>
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                        </div>
                        <span className="text-sm font-semibold text-[#B86A7E] transition-all group-hover:gap-1.5 inline-flex items-center gap-1">
                          Read
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

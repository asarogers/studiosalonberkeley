import manifest from '../content/image-manifest.json';

/**
 * Returns the correct public image path for a given slug and subdirectory.
 * Uses PNG if it exists (from the build-time manifest), falls back to SVG.
 * Safe to call on Cloudflare Workers — no fs access at runtime.
 */
export function resolveImagePath(subdir: 'services' | 'blog' | 'locations', slug: string): string {
  const map = (manifest as Record<string, Record<string, string>>)[subdir] ?? {};
  const ext = map[slug];
  if (!ext) return '/opengraph-image.png';
  return `/images/${subdir}/${slug}${ext}`;
}

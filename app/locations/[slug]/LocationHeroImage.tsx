import manifest from "@/content/image-manifest.json";

export default function LocationHeroImage({ slug, alt }: { slug: string; alt: string }) {
  const map = (manifest as Record<string, Record<string, string>>).locations ?? {};
  const ext = map[slug];
  const src = ext ? `/images/locations/${slug}${ext}` : "/images/locations/_default.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={1200}
      height={560}
      className="w-full h-auto object-cover"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}

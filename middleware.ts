import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Edge middleware: inject per-page hreflang via HTTP Link header.
 *
 * Next.js 16 introduces "proxy.ts" (Node.js runtime) but @opennextjs/cloudflare
 * requires Edge runtime for middleware. We stay on middleware.ts until
 * opennextjs adds Node.js proxy support.
 *
 * Google accepts HTTP Link headers for hreflang:
 * https://developers.google.com/search/docs/specialty/international/localization-page
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pageUrl = `https://studiosalonberkeley.com${pathname}`;

  const response = NextResponse.next();

  // Per-page hreflang — points to the exact canonical URL of this page
  response.headers.set(
    "Link",
    `<${pageUrl}>; rel="alternate"; hreflang="en-US", <${pageUrl}>; rel="alternate"; hreflang="x-default"`
  );

  return response;
}

export const config = {
  matcher: [
    // All page routes — skip Next.js internals, static assets, and robots/sitemap
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|css)).*)",
  ],
};

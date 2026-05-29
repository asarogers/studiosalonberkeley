import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site-wide takedown per Section 3.6 of the Service Agreement.
// All page requests are redirected to /suspended unless the visitor presents
// the bypass token, either as a ?key=<TOKEN> query param or via the cookie
// that the query param sets on first hit.
const BYPASS_TOKEN = "1748lPT311c1zgrdCumtEiRiEt2jIYk9";
const BYPASS_PARAM = "key";
const BYPASS_COOKIE = "ssb_bypass";
const BYPASS_TTL_SECONDS = 60 * 60 * 24 * 365; // 1 year

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const queryToken = searchParams.get(BYPASS_PARAM);
  const cookieToken = request.cookies.get(BYPASS_COOKIE)?.value;
  const bypassed = queryToken === BYPASS_TOKEN || cookieToken === BYPASS_TOKEN;

  // Visitor just arrived with ?key=<TOKEN> — set the cookie and strip the
  // param from the URL so it doesn't linger in shares/screenshots/referrers.
  if (queryToken === BYPASS_TOKEN) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(BYPASS_PARAM);
    const response = NextResponse.redirect(cleanUrl, 307);
    response.cookies.set(BYPASS_COOKIE, BYPASS_TOKEN, {
      maxAge: BYPASS_TTL_SECONDS,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    return response;
  }

  if (bypassed || pathname === "/suspended") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/suspended";
  url.search = "";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    // All page routes — skip Next.js internals, static assets, and robots/sitemap
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|css|js)).*)",
  ],
};

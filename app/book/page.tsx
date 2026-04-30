import { redirect } from "next/navigation";
import { SQUARE_BOOKING } from "@/lib/squareServiceLinks";

export const dynamic = "force-static";

export default function BookIndexPage() {
  redirect(SQUARE_BOOKING.fallbackUrl);
}

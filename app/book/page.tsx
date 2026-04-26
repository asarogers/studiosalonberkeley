import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function BookIndexPage() {
  redirect(siteConfig.booking.freshaUrl);
}

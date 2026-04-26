import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function BookIndexPage() {
  // Booking starts from a specific service. Send visitors to the menu so they can pick.
  redirect("/#services");
}

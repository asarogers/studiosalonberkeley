import type { BookingState, ConfirmedBooking } from "./types";

/**
 * Booking submission stub. Replace with a real server action / API call when the
 * backend (Stripe, Resend, calendar provider) is wired up.
 *
 * Returns a synthetic confirmation that the UI can render and persist for the
 * confirmation modal on the home page.
 */
export async function submitBooking(state: BookingState): Promise<ConfirmedBooking> {
  if (!state.date || !state.time) {
    throw new Error("Cannot submit booking without a date and time");
  }
  // Simulate latency so the UI's pending state is exercised.
  await new Promise((resolve) => setTimeout(resolve, 450));

  return {
    id: `bk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    service: {
      bookingSlug: state.service.bookingSlug,
      name: state.service.name,
      price: state.service.price,
      duration: state.service.duration,
    },
    date: state.date,
    time: state.time,
    contact: {
      fullName: state.contact.fullName,
      email: state.contact.email,
      phone: state.contact.phone,
      notes: state.contact.notes,
    },
    paymentMethod: state.paymentMethod,
    createdAt: Date.now(),
  };
}

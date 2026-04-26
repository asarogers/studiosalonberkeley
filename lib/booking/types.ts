import type { MenuItem } from "@/lib/services-menu";

export type BookingStep = "datetime" | "info" | "review" | "confirmed";

export type ClientType = "new" | "returning";

export type PaymentMethod = "card" | "in-store";

export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  clientType: ClientType;
}

export interface CardDetails {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface BookingState {
  service: MenuItem;
  /** ISO date (YYYY-MM-DD) of the chosen day in the salon's local calendar. */
  date: string | null;
  /** Time slot key like "10:30" (24-hour). */
  time: string | null;
  contact: ContactInfo;
  paymentMethod: PaymentMethod;
  card: CardDetails;
}

export interface ConfirmedBooking {
  id: string;
  service: {
    bookingSlug: string;
    name: string;
    price: string;
    duration: string;
  };
  /** ISO date (YYYY-MM-DD) of the confirmed appointment. */
  date: string;
  /** Time slot key like "10:30" (24-hour). */
  time: string;
  contact: {
    fullName: string;
    email: string;
    phone: string;
    notes: string;
  };
  paymentMethod: PaymentMethod;
  /** Unix ms when the confirmation was created. */
  createdAt: number;
}

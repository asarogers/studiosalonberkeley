import type { ConfirmedBooking } from "./types";

const STORAGE_KEY = "studio-salon:last-booking";
/** Confirmations expire after 30 minutes so the modal does not haunt return visits. */
const TTL_MS = 30 * 60 * 1000;

export function saveLastBooking(booking: ConfirmedBooking): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
  } catch {
    // sessionStorage may be unavailable (privacy mode); the modal will simply not show.
  }
}

export function readLastBooking(): ConfirmedBooking | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConfirmedBooking;
    if (Date.now() - parsed.createdAt > TTL_MS) {
      window.sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearLastBooking(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

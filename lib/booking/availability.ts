/**
 * Availability stub. Replace with a real calendar source (Google Calendar, Cal.com,
 * or salon-side admin tool) when the backend is wired up.
 *
 * Until then we synthesize a believable schedule:
 *   - Tue–Sat are open, Sun/Mon closed (matches siteConfig.hours).
 *   - Past days are unavailable.
 *   - A handful of slots per day are marked taken so the UI shows disabled states.
 */

export interface TimeSlot {
  /** "HH:mm" in 24h. */
  key: string;
  /** Pretty label e.g. "10:30 AM". */
  label: string;
  /** Coarse bucket so the UI can group. */
  bucket: "morning" | "afternoon" | "evening";
  available: boolean;
}

const SLOT_TEMPLATE: { key: string; label: string; bucket: TimeSlot["bucket"] }[] = [
  { key: "09:00", label: "9:00 AM",  bucket: "morning"   },
  { key: "09:30", label: "9:30 AM",  bucket: "morning"   },
  { key: "10:00", label: "10:00 AM", bucket: "morning"   },
  { key: "10:30", label: "10:30 AM", bucket: "morning"   },
  { key: "11:00", label: "11:00 AM", bucket: "morning"   },
  { key: "11:30", label: "11:30 AM", bucket: "morning"   },
  { key: "12:00", label: "12:00 PM", bucket: "afternoon" },
  { key: "12:30", label: "12:30 PM", bucket: "afternoon" },
  { key: "13:00", label: "1:00 PM",  bucket: "afternoon" },
  { key: "13:30", label: "1:30 PM",  bucket: "afternoon" },
  { key: "14:00", label: "2:00 PM",  bucket: "afternoon" },
  { key: "14:30", label: "2:30 PM",  bucket: "afternoon" },
  { key: "15:00", label: "3:00 PM",  bucket: "afternoon" },
  { key: "15:30", label: "3:30 PM",  bucket: "afternoon" },
  { key: "16:00", label: "4:00 PM",  bucket: "evening"   },
  { key: "16:30", label: "4:30 PM",  bucket: "evening"   },
  { key: "17:00", label: "5:00 PM",  bucket: "evening"   },
  { key: "17:30", label: "5:30 PM",  bucket: "evening"   },
  { key: "18:00", label: "6:00 PM",  bucket: "evening"   },
  { key: "18:30", label: "6:30 PM",  bucket: "evening"   },
  { key: "19:00", label: "7:00 PM",  bucket: "evening"   },
];

const CLOSED_WEEKDAYS = new Set([0, 1]); // Sunday, Monday

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

export function isDayBookable(isoDate: string, today = new Date()): boolean {
  const date = isoDateToLocal(isoDate);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (date.getTime() < startOfToday.getTime()) return false;
  if (CLOSED_WEEKDAYS.has(date.getDay())) return false;
  return true;
}

export function getAvailableSlots(isoDate: string): TimeSlot[] {
  if (!isDayBookable(isoDate)) return [];
  const seed = hashSeed(isoDate);
  return SLOT_TEMPLATE.map((slot, idx) => {
    // Deterministic pseudo-availability so the UI is stable per day.
    const taken = ((seed >> (idx % 24)) & 1) === 0 && idx % 5 === 1;
    return { ...slot, available: !taken };
  });
}

export function isoDateToLocal(isoDate: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function localDateToIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function formatLongDate(isoDate: string): string {
  const date = isoDateToLocal(isoDate);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTimeLabel(timeKey: string): string {
  const slot = SLOT_TEMPLATE.find((s) => s.key === timeKey);
  return slot?.label ?? timeKey;
}

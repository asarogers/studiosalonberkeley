import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingFlow from "@/components/booking/BookingFlow";
import { findServiceByBookingSlug } from "@/lib/services-menu";
import { siteConfig } from "@/lib/siteConfig";

interface Params {
  serviceSlug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = findServiceByBookingSlug(serviceSlug);
  if (!service) {
    return {
      title: "Book an Appointment",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `Book ${service.name}`,
    description: `Schedule ${service.name} (${service.duration}, from ${service.price}) with Britnee at Studio Salon in Berkeley, CA.`,
    alternates: { canonical: `/book/${service.bookingSlug}` },
    openGraph: {
      title: `Book ${service.name} | Studio Salon`,
      description: `Schedule ${service.name} with Britnee Lott in Berkeley.`,
      url: `${siteConfig.url}/book/${service.bookingSlug}`,
      siteName: siteConfig.name,
      type: "website",
    },
    robots: { index: false, follow: false },
  };
}

export default async function BookServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { serviceSlug } = await params;
  const service = findServiceByBookingSlug(serviceSlug);
  if (!service) notFound();

  return <BookingFlow service={service} />;
}

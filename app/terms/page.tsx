import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Terms of Service | Studio Salon',
  description: 'Terms of Service for Studio Salon — Berkeley hair salon serving the East Bay.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#2C2C2C] mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-neutral max-w-none text-[#3A3A3A] space-y-6">
        <p className="text-sm text-[#5A5A5A]">Last updated: April 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Services</h2>
          <p>
            Studio Salon is a hair salon located at 2902 Sacramento St, Berkeley, CA 94702,
            providing loc maintenance, braids, weaves, hair color, cuts, and related services.
            Services are provided on a per-appointment basis as agreed upon at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Scheduling and Cancellation</h2>
          <p>
            We ask for at least 48 hours notice for cancellations or rescheduling. Late cancellations
            or no-shows may be subject to a cancellation fee. We reserve the right to reschedule
            appointments due to illness or emergency.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Client Responsibilities</h2>
          <p>
            Clients are responsible for disclosing any relevant scalp conditions, allergies, recent
            chemical services, or health conditions prior to service. Studio Salon is not liable
            for adverse reactions resulting from undisclosed conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Limitation of Liability</h2>
          <p>
            Studio Salon&apos;s liability is limited to the cost of services provided. We are not
            responsible for incidental or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:studiosalonberkeley@gmail.com" className="text-[#B86A7E] underline">
              studiosalonberkeley@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy Policy | Studio Salon',
  description: 'Privacy Policy for Studio Salon — Berkeley hair salon serving the East Bay.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#2C2C2C] mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-neutral max-w-none text-[#3A3A3A] space-y-6">
        <p className="text-sm text-[#5A5A5A]">Last updated: April 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Information We Collect</h2>
          <p>
            When you contact us through our website, we collect the name, email address, phone number,
            and message content you provide. We use this information solely to respond to your inquiry
            and schedule services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to inquiries, schedule appointments,
            and communicate about your service. We do not sell, rent, or share your personal
            information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to understand how visitors use the site.
            This data is aggregated and not linked to personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Data Security</h2>
          <p>
            We take reasonable precautions to protect your information. Contact form submissions are
            transmitted securely and stored only as long as necessary to respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at{' '}
            <a href="mailto:studiosalonberkeley@gmail.com" className="text-[#B86A7E] underline">
              studiosalonberkeley@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:+15106905274" className="text-[#B86A7E] underline">
              (510) 690-5274
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}

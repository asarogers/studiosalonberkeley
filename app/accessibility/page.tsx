import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Studio Salon',
  description: 'Accessibility Statement for Studio Salon — committed to making our website accessible to everyone.',
  alternates: { canonical: '/accessibility' },
  robots: { index: false, follow: false },
};

export default function AccessibilityPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#2C2C2C] mb-8">
        Accessibility Statement
      </h1>

      <div className="prose prose-neutral max-w-none text-[#3A3A3A] space-y-6">
        <p className="text-sm text-[#5A5A5A]">Last updated: April 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Our Commitment</h2>
          <p>
            Studio Salon is committed to ensuring that our website is accessible to everyone.
            We aim to meet WCAG 2.1 Level AA guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Measures Taken</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Semantic HTML structure with appropriate heading hierarchy</li>
            <li>Alt text on all meaningful images</li>
            <li>Keyboard-navigable interface</li>
            <li>Sufficient color contrast ratios</li>
            <li>Responsive design that works at all viewport sizes and zoom levels</li>
            <li>ARIA labels on interactive elements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Known Limitations</h2>
          <p>
            We are continually working to improve accessibility. If you encounter any barriers,
            please contact us and we will prioritize a fix.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">Feedback and Contact</h2>
          <p>
            If you experience difficulty accessing any part of our website, please contact us at{' '}
            <a href="mailto:studiosalonberkeley@gmail.com" className="text-[#B86A7E] underline">
              studiosalonberkeley@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:+15106905274" className="text-[#B86A7E] underline">
              (510) 690-5274
            </a>. We aim to respond within 2 business days.
          </p>
        </section>
      </div>
    </main>
  );
}

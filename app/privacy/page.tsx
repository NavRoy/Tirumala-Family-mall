import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8">
        <h1 className="font-display text-5xl font-300 text-[#1A0A08] mb-3">Privacy Policy</h1>
        <p className="font-body text-xs text-[#1A0A08]/70 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 font-body text-sm text-[#1A0A08]/70 leading-relaxed">
          {[
            {
              title: 'Information We Collect',
              content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, shipping address, and payment information.',
            },
            {
              title: 'How We Use Your Information',
              content: 'We use the information we collect to process transactions, send you order confirmations and shipping updates, respond to your inquiries, send promotional communications (with your consent), and improve our services.',
            },
            {
              title: 'Information Sharing',
              content: 'We do not sell your personal information to third parties. We share your information only with trusted service providers who help us operate our business, such as payment processors and delivery partners, under strict confidentiality agreements.',
            },
            {
              title: 'Data Security',
              content: 'We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology.',
            },
            {
              title: 'Your Rights',
              content: 'You have the right to access, update, or delete your personal information at any time by contacting us at hello@tirumalafamilymall.in. You may also opt out of promotional emails at any time.',
            },
            {
              title: 'Contact Us',
              content: 'If you have any questions about this Privacy Policy, please contact us at hello@tirumalafamilymall.in or call us at +91 8008 123 456.',
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

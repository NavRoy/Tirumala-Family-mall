import type { Metadata } from 'next'
import { RefreshCw, Package, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Returns & Exchange Policy' }

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[900px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <RefreshCw size={36} className="text-[#CC0000] mx-auto mb-4" />
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Returns & Exchange</h1>
          <p className="font-body text-[#1A0A08]/70 mt-3">We want you to love every piece you buy from us.</p>
        </div>

        <div className="space-y-6">
          {/* Policy cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '7', unit: 'Days', label: 'Return Window', desc: 'Return eligible items within 7 days of delivery.' },
              { icon: '14', unit: 'Days', label: 'Exchange Window', desc: 'Exchange for a different size or colour within 14 days.' },
              { icon: '48', unit: 'Hours', label: 'Refund Speed', desc: 'Refunds processed within 48 hours of receiving the return.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-3xl p-6 text-center shadow-card border border-[#C98C00]/20">
                <div className="font-display text-5xl font-300 text-[#CC0000]">{item.icon}</div>
                <div className="font-body text-xs text-[#C98C00] uppercase tracking-wider">{item.unit}</div>
                <h3 className="font-body text-sm font-600 text-[#1A0A08] mt-2 mb-1">{item.label}</h3>
                <p className="font-body text-xs text-[#1A0A08]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Eligible / Not Eligible */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-emerald-500" />
                <h3 className="font-body text-sm font-600 text-[#1A0A08]">Eligible for Return</h3>
              </div>
              <ul className="space-y-2 font-body text-sm text-[#1A0A08]/70">
                {['Items with manufacturing defects', 'Wrong item delivered', 'Damaged in transit', 'Size mismatch (unworn, with tags)'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={18} className="text-[#CC0000]" />
                <h3 className="font-body text-sm font-600 text-[#1A0A08]">Not Eligible</h3>
              </div>
              <ul className="space-y-2 font-body text-sm text-[#1A0A08]/70">
                {['Worn, washed, or altered items', 'Items without original tags', 'Sarees (once unstitched/unwrapped)', 'Sale items (unless defective)', 'Customised or stitched products'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#CC0000] mt-0.5">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-3xl p-8 shadow-card">
            <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">How to Initiate a Return</h2>
            <div className="space-y-4">
              {[
                { step: '01', text: 'WhatsApp us at +91 8008 123 456 with your order number and reason for return.' },
                { step: '02', text: 'Our team will review and approve your return request within 24 hours.' },
                { step: '03', text: 'Pack the item securely in its original packaging with all tags intact.' },
                { step: '04', text: 'We\'ll arrange a pickup or provide a shipping label for you to send it back.' },
                { step: '05', text: 'Once received and inspected, your refund or exchange will be processed within 48 hours.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <span className="font-display text-2xl font-300 text-[#C98C00]/70 flex-shrink-0 w-10">{s.step}</span>
                  <p className="font-body text-sm text-[#1A0A08]/70 leading-relaxed pt-1">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

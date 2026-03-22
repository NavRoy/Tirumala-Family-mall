'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    category: 'Orders',
    items: [
      { q: 'How do I place an order?', a: 'Browse our collection, select your size and colour, and click "Add to Bag". Then proceed to checkout and complete payment.' },
      { q: 'Can I modify or cancel my order?', a: 'You can modify or cancel your order within 2 hours of placing it by contacting us on WhatsApp. After that, the order goes into processing.' },
      { q: 'Do you offer Cash on Delivery (COD)?', a: 'Yes! COD is available for orders up to ₹5,000 across most pin codes in India.' },
    ],
  },
  {
    category: 'Shipping',
    items: [
      { q: 'How long does delivery take?', a: 'Standard delivery takes 4–7 business days. Express delivery (2–3 days) is available at an additional charge at checkout.' },
      { q: 'Is shipping free?', a: 'Yes, shipping is free on all orders above ₹999. A flat charge of ₹99 applies to orders below ₹999.' },
      { q: 'Do you ship internationally?', a: 'We currently ship within India only. International shipping is coming soon — follow us on Instagram for updates.' },
    ],
  },
  {
    category: 'Products',
    items: [
      { q: 'Are the colours accurate?', a: 'We do our best to capture accurate colours in our photographs. Slight variations may occur due to screen calibration differences.' },
      { q: 'How do I care for silk sarees?', a: 'Silk sarees should be dry cleaned only. Store them wrapped in a muslin cloth, away from direct sunlight and moisture.' },
      { q: 'What does "Free Size" mean?', a: 'Free Size typically fits waist sizes 28"–40" and can be adjusted for a custom fit. Check each product\'s specific measurements in the description.' },
    ],
  },
  {
    category: 'Returns & Payments',
    items: [
      { q: 'What is your return policy?', a: 'We accept returns within 7 days for eligible items (unworn, with tags). See our Returns page for full details.' },
      { q: 'When will I get my refund?', a: 'Refunds are processed within 48 hours of receiving your returned item and credited to your original payment method in 5–7 business days.' },
      { q: 'What payment methods do you accept?', a: 'We accept UPI (PhonePe, GPay, Paytm), credit/debit cards, net banking, and Cash on Delivery.' },
    ],
  },
]

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-3">Help Centre</p>
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-8">
          {FAQS.map((section) => (
            <div key={section.category}>
              <h2 className="font-body text-xs tracking-[0.2em] uppercase text-[#CC0000] mb-4 px-1">{section.category}</h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const key = `${section.category}-${item.q}`
                  const isOpen = openItem === key
                  return (
                    <div key={key} className="bg-white rounded-2xl overflow-hidden shadow-card border border-[#1A0A08]/15">
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-4.5 py-[18px] text-left hover:bg-[#CC0000]/10 transition-colors"
                      >
                        <span className="font-body text-sm font-500 text-[#1A0A08] pr-4">{item.q}</span>
                        <ChevronDown
                          size={16}
                          className={`text-[#1A0A08]/70 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 font-body text-sm text-[#1A0A08]/70 leading-relaxed border-t border-[#1A0A08]/15 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-grad-red rounded-3xl p-8">
          <p className="font-body text-sm text-[#FAF6F0]/70 mb-3">Still have questions?</p>
          <p className="font-display text-2xl font-300 text-[#FAF6F0] mb-5">We're here to help</p>
          <a
            href="https://wa.me/918008123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C98C00] text-[#1A0A08] px-7 py-3.5 rounded-full font-body font-500 text-sm hover:bg-[#C98C00]-light transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

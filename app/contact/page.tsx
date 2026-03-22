import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact Us — Tirumala Family Mall' }

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-tag justify-center mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Contact Us</h1>
          <p className="font-body text-[#1A0A08]/50 mt-3">
            We're here to help — for orders, fashion advice, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div className="bg-white rounded-3xl p-8 shadow-card">
            <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Send a Message</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {['Name', 'Email'].map((l) => (
                  <div key={l}>
                    <label className="font-body text-xs text-[#1A0A08]/50 uppercase tracking-wider mb-2 block">{l}</label>
                    <input type="text" className="w-full border border-[#1A0A08]/12 rounded-xl px-4 py-3 font-body text-sm outline-none focus:border-[#CC0000] transition-colors bg-[#FAF6F0]" />
                  </div>
                ))}
              </div>
              <div>
                <label className="font-body text-xs text-[#1A0A08]/50 uppercase tracking-wider mb-2 block">Subject</label>
                <input type="text" className="w-full border border-[#1A0A08]/12 rounded-xl px-4 py-3 font-body text-sm outline-none focus:border-[#CC0000] transition-colors bg-[#FAF6F0]" />
              </div>
              <div>
                <label className="font-body text-xs text-[#1A0A08]/50 uppercase tracking-wider mb-2 block">Message</label>
                <textarea rows={5} className="w-full border border-[#1A0A08]/12 rounded-xl px-4 py-3 font-body text-sm outline-none focus:border-[#CC0000] transition-colors resize-none bg-[#FAF6F0]" />
              </div>
              <button className="w-full bg-[#CC0000] text-white py-4 rounded-xl font-body font-500 text-sm hover:bg-[#AA0000] transition-colors">
                Send Message
              </button>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            {[
              { Icon: Phone,         label: 'Call / WhatsApp',  value: '+91 99662 48223', href: 'tel:+919966248223', sub: 'WhatsApp only — Mon–Sat 10AM–7PM' },
              { Icon: MapPin,        label: 'Our Store',        value: 'Rotary Nagar 3, Old NH5', href: '#',               sub: 'Tekkali, Srikakulam Dist, Andhra Pradesh' },
              { Icon: Instagram,     label: 'Instagram',        value: '@tirumalafamilymall777', href: 'https://www.instagram.com/tirumalafamilymall777/', sub: 'Live sessions every Saturday 7 PM' },
              { Icon: MessageCircle, label: 'WhatsApp Order',   value: 'Chat to Order',    href: 'https://wa.me/919966248223', sub: 'Send us your order on WhatsApp' },
            ].map(({ Icon, label, value, href, sub }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-250 group">
                <div className="w-12 h-12 rounded-xl bg-[#CC0000]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <Icon size={18} className="text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-wider text-[#1A0A08]/40 mb-0.5">{label}</p>
                  <p className="font-body text-sm font-500 text-[#1A0A08]">{value}</p>
                  <p className="font-body text-xs text-[#1A0A08]/40 mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

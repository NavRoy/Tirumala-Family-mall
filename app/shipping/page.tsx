import type { Metadata } from 'next'
import { Truck, Clock, MapPin, Package } from 'lucide-react'

export const metadata: Metadata = { title: 'Shipping Policy' }

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[900px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <Truck size={36} className="text-[#CC0000] mx-auto mb-4" />
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Shipping Policy</h1>
          <p className="font-body text-[#1A0A08]/70 mt-3">Fast, reliable delivery across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[
            { Icon: Truck, title: 'Free Shipping', desc: 'On all orders above ₹999. Orders below ₹999 incur a flat ₹99 shipping charge.' },
            { Icon: Clock, title: 'Delivery Time', desc: 'Standard delivery: 4–7 business days. Express delivery available at checkout for 2–3 days.' },
            { Icon: MapPin, title: 'Pan-India Delivery', desc: 'We deliver to all major cities and towns across India, including remote pin codes.' },
            { Icon: Package, title: 'Order Tracking', desc: 'You\'ll receive a tracking link via WhatsApp and email once your order is dispatched.' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-7 shadow-card flex gap-5 border border-[#C98C00]/20">
              <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#CC0000]" />
              </div>
              <div>
                <h3 className="font-body text-sm font-600 text-[#1A0A08] mb-1.5">{title}</h3>
                <p className="font-body text-sm text-[#1A0A08]/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-card">
          <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Shipping Partners</h2>
          <p className="font-body text-sm text-[#1A0A08]/70 leading-relaxed mb-4">
            We ship via trusted courier partners including Delhivery, Blue Dart, and Shiprocket to ensure
            your order reaches you safely and on time. For orders in Vizianagaram and nearby areas,
            same-day or next-day delivery may be available.
          </p>
          <div className="bg-[#C98C00]/15 rounded-2xl p-4 border border-[#C98C00]/20">
            <p className="font-body text-sm text-[#1A0A08]/70">
              <span className="font-600 text-[#C98C00]">Note:</span> Delivery timelines may vary during peak festive
              seasons (Diwali, Navratri, etc.) or due to natural disruptions. We will communicate any delays promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

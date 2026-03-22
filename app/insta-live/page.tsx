import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Play, Calendar, Clock, ShoppingBag, ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/product/ProductCard'
import { INSTA_LIVE_PRODUCTS, PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Insta Live',
  description: 'Shop Tirumala Family Mall\'s Instagram Live collection — exclusive products and flash deals from our live sessions.',
}

const PAST_LIVES = [
  {
    id: 1,
    date: 'March 14, 2026',
    time: '7:00 PM',
    title: 'Spring Festive Special',
    thumbnail: 'https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=600&q=80',
    products: 24,
    viewers: '1.2K',
  },
  {
    id: 2,
    date: 'March 7, 2026',
    time: '7:00 PM',
    title: 'Saree Saturday',
    thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    products: 18,
    viewers: '980',
  },
  {
    id: 3,
    date: 'February 28, 2026',
    time: '7:00 PM',
    title: 'New Arrivals Showcase',
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    products: 32,
    viewers: '1.5K',
  },
]

export default function InstaLivePage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Hero */}
      <div className="bg-grad-red relative overflow-hidden py-20 lg:py-32">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 text-center relative z-10">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8"
            style={{ background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)' }}
          >
            <div className="relative flex items-center">
              <span className="absolute w-3 h-3 bg-white rounded-full animate-ping opacity-50" />
              <span className="relative w-2 h-2 bg-white rounded-full" />
            </div>
            <Instagram size={16} className="text-white" />
            <span className="font-body text-sm text-white font-500">Live Shopping Experience</span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-300 text-[#FAF6F0] mb-6">
            Insta Live
          </h1>
          <p className="font-body text-[#FAF6F0]/70 text-lg max-w-xl mx-auto mb-10">
            Exclusive fashion drops, flash prices, and real-time styling every Saturday at 7 PM.
            Shop directly from our live sessions.
          </p>

          {/* Next live countdown */}
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl px-8 py-5 mb-10">
            <div className="flex items-center gap-2.5 text-[#FAF6F0]">
              <Calendar size={18} className="text-[#C98C00]" />
              <div className="text-left">
                <p className="font-body text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Next Live</p>
                <p className="font-body text-sm font-500">Saturday, March 21, 2026</p>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex items-center gap-2.5 text-[#FAF6F0]">
              <Clock size={18} className="text-[#C98C00]" />
              <div className="text-left">
                <p className="font-body text-xs text-[#FAF6F0]/70 uppercase tracking-wider">Time</p>
                <p className="font-body text-sm font-500">7:00 PM IST</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/tirumala-family-mall.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C98C00] text-[#1A0A08] px-8 py-4 rounded-full font-body font-500 text-sm tracking-wide hover:bg-[#C98C00]-light transition-all"
            >
              <Instagram size={16} /> Follow to Get Notified
            </a>
            <a
              href="#past-lives"
              className="flex items-center gap-2 border border-white/25 text-[#FAF6F0] px-8 py-4 rounded-full font-body font-500 text-sm hover:bg-white/10 transition-all"
            >
              <Play size={16} /> Watch Past Lives
            </a>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <h2 className="font-display text-3xl font-300 text-center text-[#1A0A08] mb-12">
            How Insta Live Shopping Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '📱', title: 'Follow Us', desc: 'Follow @tirumala-family-mall.in on Instagram and turn on post notifications.' },
              { step: '02', icon: '🎬', title: 'Join Live', desc: 'Tune in every Saturday at 7 PM to our Instagram Live session.' },
              { step: '03', icon: '💬', title: 'Comment to Order', desc: 'Comment "BUY" + your size on the product you want to reserve it.' },
              { step: '04', icon: '📦', title: 'Get Delivered', desc: 'Our team confirms your order via DM and ships within 24 hours.' },
            ].map((s) => (
              <div key={s.step} className="relative bg-[#FAF6F0] rounded-3xl p-7 text-center border border-[#C98C00]/20">
                <div className="absolute -top-3 left-7 font-display text-xs text-[#C98C00]/70 bg-white px-2">
                  {s.step}
                </div>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-xl font-400 text-[#1A0A08] mb-2">{s.title}</h3>
                <p className="font-body text-sm text-[#1A0A08]/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Lives */}
      <div id="past-lives" className="py-20 px-4 lg:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-display text-4xl font-300 text-[#1A0A08] mb-10">Past Live Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PAST_LIVES.map((live) => (
            <div key={live.id} className="group rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-video img-zoom">
                <Image src={live.thumbnail} alt={live.title} fill className="object-cover" sizes="400px" />
                <div className="absolute inset-0 bg-[#1A0A08]/80 group-hover:bg-[#1A0A08]/80 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#1A0A08]/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-body">
                  {live.viewers} viewers
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-400 text-[#1A0A08] mb-2">{live.title}</h3>
                <p className="font-body text-sm text-[#1A0A08]/70 mb-4">
                  {live.date} at {live.time} · {live.products} products showcased
                </p>
                <a
                  href="https://instagram.com/tirumala-family-mall.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#CC0000] font-body text-sm font-500 hover:gap-3 transition-all"
                >
                  Watch on Instagram <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Products from live */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-2">From our sessions</p>
              <h2 className="font-display text-4xl font-300 text-[#1A0A08]">Shop from Live</h2>
            </div>
            <Link href="/shop" className="text-[#CC0000] font-body text-sm font-500 flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {PRODUCTS.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

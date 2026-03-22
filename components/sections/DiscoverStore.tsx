'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

export function DiscoverStore() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">

      {/* ✨ subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#1A0A08_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: IMAGE COLLAGE */}
          <div className="relative grid grid-cols-2 gap-4" style={{ height: 460 }}>

            <div className="relative rounded-2xl overflow-hidden img-zoom row-span-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85" alt="Store" fill className="object-cover" />
            </div>

            <div className="relative rounded-2xl overflow-hidden img-zoom shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <Image src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=85" alt="Women" fill className="object-cover" />
            </div>

            <div className="relative rounded-2xl overflow-hidden img-zoom shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <Image src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=85" alt="Men" fill className="object-cover" />
            </div>

            {/* ✨ floating glass badge */}
            <div className="absolute -bottom-5 -right-5 backdrop-blur-md bg-white/80 border border-white/40 rounded-2xl px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <p className="font-display text-3xl leading-none text-[#1A0A08]">100+</p>
              <p className="text-[11px] tracking-wider text-[#1A0A08]/60 mt-1">Categories</p>
            </div>

          </div>

          {/* RIGHT: CONTENT */}
          <div>

            <span className="eyebrow mb-4 block tracking-[3px] text-[#C98C00]">
              Visit Us
            </span>

            <h2 className="font-display text-[#1A0A08] mb-5 tracking-wide"
                style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 400 }}>
              Discover Our Store
            </h2>

            <div className="w-14 h-[1px] bg-[#C98C00] mb-6 opacity-70" />

            <p className="font-body text-[#1A0A08]/60 text-[15px] leading-relaxed mb-10 max-w-[520px]">
              Visit Tirumala Family Mall at Tekkali, Srikakulam — your one-stop destination for women's wear, men's wear, kids fashion, and accessories. Over 100 categories under one roof.
            </p>

            {/* STORE DETAILS */}
            <div className="space-y-4 mb-10">
              {[
                { Icon: MapPin, label: 'Address', value: 'Rotary Nagar 3, Old NH5, Tekkali, Srikakulam District, Andhra Pradesh' },
                { Icon: Phone, label: 'WhatsApp Only', value: '+91 99662 48223' },
                { Icon: Clock, label: 'Store Hours', value: 'Mon–Sat: 9 AM – 9 PM · Sunday: 10 AM – 7 PM' },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 bg-white/70 backdrop-blur-md rounded-xl p-4 border border-black/5 hover:border-[#C98C00]/30 transition-all duration-300 shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >

                  <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 transition group-hover:scale-110">
                    <Icon size={16} className="text-[#CC0000]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-[#1A0A08]/40 mb-1">
                      {label}
                    </p>
                    <p className="text-[13.5px] text-[#1A0A08]/80 leading-snug">
                      {value}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/919966248223"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#1A0A08] text-white px-7 py-3 rounded-full text-sm tracking-wide hover:bg-[#000] transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
              >
                WhatsApp Order
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="group flex items-center gap-2 border border-[#1A0A08]/20 text-[#1A0A08] px-7 py-3 rounded-full text-sm tracking-wide hover:bg-[#1A0A08] hover:text-white transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}